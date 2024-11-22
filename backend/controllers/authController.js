//AuthModel koyma 
import AuthModel from '../models/auth/authModel.js';
import bcrypt from 'bcrypt';
import expressAsyncHandler from 'express-async-handler';

//jwt yi çağırr 
import CreateWebToken from '../utils/Jwt/jwtCreateToken.js'

export const Login = expressAsyncHandler(async (req, res) => {
    //login işlemleri 

    const {email,password } = req.body;
    const isEmail = await AuthModel.findOne({email: email});
    if(!isEmail){
        return res.status(400).json({
            message: 'Email yanlış!',
            status : 'Giriş Başarısız !',
        });
    }
    const db_password = isEmail.password;
    const status = await bcrypt.compare(password,db_password);
    if(!status){
        return res.status(400).json({
            message: 'Şifre yanlış!',
            status : 'Giriş Başarısız !',
        });
    }
    const LoginUser = await AuthModel.findOne({email: email});
    //jwt üreticek
    const Token = CreateWebToken({
        id: LoginUser._id,
        username: LoginUser.username
    });
    return res.status(200).json({
        message: 'Giriş Başarılı!',
        _token :Token,

    });
})
export const Register = expressAsyncHandler(async (req, res) => {
    //verileri çek 
    const {name,surname,username,email,password} = req.body;
    //şifreleri bcyrpt ile hasle 
    const hashedPassword = await bcrypt.hash(password, 10);
    //verileri doğrulama 
    const isUsername = await AuthModel.findOne({username: username});
    if(isUsername){
        return res.status(400).json({
            message: 'Bu username zaten kullanılmaktadır!',
        });
    }
    const isEmail = await AuthModel.findOne({email: email});
    if(isEmail){
        return res.status(400).json({
            message: 'Bu email zaten kullanılmaktadır!',
        });
    }
    //kullanıcıyı veritabanına kaydet
    const newUserData = {
        name:name,
        surname:surname,
        username:username,
        email:email,
        password:hashedPassword
    }
    try {
        const newUser = await AuthModel.create(newUserData);
        //jwt üreticek 
        //jwt fonskiyonunu çağır  ! 
        const token = CreateWebToken({
            id: newUser._id,
            username: newUser.username
        });
        res.status(201).json({
            message: 'Kullanıcı kaydı başarılı!',
            newUser : newUser,
            _token : token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Kullanıcı kaydı başarısız!',
            error:error.message,
        });
    }
}) 




export const Me = expressAsyncHandler(async (req,res)=>{
        if(!req.user){
            return res.status(401).json({
                message: 'Giriş yapmadınız! Lütfen Giriş Yapın',
                status : 'Giriş Başarısız!',
            });
        
        }
        const User = await AuthModel.findById({_id:req.user.id}).select("-password");
        return res.status(200).json({
            message : 'Kullanıcı bilgileri',
            user : User
        });
})
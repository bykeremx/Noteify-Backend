import mongoose, { model } from 'mongoose';

const AuthSchema = new mongoose.Schema({
    name : {
        type:String,
        required: [true, "Lütfen Adınızı Girin ! "]
    },
    surname : {
        type:String,
        required: [true, "Lütfen Soyadınızı Girin ! "]
    },
    username : {
        type: String,
        required: [true, "Lütfen Kullanıcı Adınızı Girin ! "],
        unique: true
    },
    email : {
        type: String,
        required: [true, "Lütfen Email Adresinizi Girin ! "],
        unique: true
    },
    password : {
        type: String,
        required: [true, "Lütfen Şifrenizi Girin ! "]
    },
    role : {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
},{
    timestamps: true,

}
);


const AuthModel = mongoose.model('users',AuthSchema);
export default AuthModel;
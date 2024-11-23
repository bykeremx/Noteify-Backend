

const SetCookieJwt=(res,_token)=>{
    const {JWT_COOKIE_TIME,NODE_ENV} = process.env;
    res.status(200).cookie('acces_token', _token, {
        httpOnly: true,
        expires: new Date(Date.now() + (parseInt(JWT_COOKIE_TIME)*60*60*1000)), // 5 hours 
        secure : NODE_ENV === "production" ? true : false
    }).json({
        message: "Token başarıyla oluşturuldu!",
        _token:_token,
        status: "Giriş Başarılı!"
    });
}

export default SetCookieJwt;
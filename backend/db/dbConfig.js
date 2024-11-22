//db configure

import mongoose from 'mongoose';
// const db_string = `${process.env.DB}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const baglanti = async () => {
    try {
        const vt = await mongoose.connect(process.env.DB_URI);
        if(vt){
            console.log("Veritabanına bağlanıldı.");
        }
        else{
            
            console.log("Veritabanına bağlantı kurulamadı.");
        }
    
    } catch (error) {

            console.log("Bir Sorun Oluştu ! : "+error);
    }   
};

export default baglanti;
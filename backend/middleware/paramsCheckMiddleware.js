const paramsCheck = (paramsName)=> (req,res,next)=>{
        const params = req.params[paramsName];
        if(!params){
            return res.status(400).json({
                message:"Hangi notu güncelleyeceğiz acaba :) ",
                status: "Parametre Eksik!",
                error:{
                    message:"Not id'si bulunamadı!",
                    status:404,
                    timestamp: new Date()
                }
            });
        }
        next();
}
export default paramsCheck;
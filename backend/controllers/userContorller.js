import expressAsyncHandler from "express-async-handler";
import NoteModel from "../models/user/userModel.js"

//not listeleme 
const NotList = expressAsyncHandler(async (req, res) => {
    const userNotes = await NoteModel.find({user:req.user.id});
    return res.status(200).json({
        user : req.user.username,
        message: 'Notlar Listelendi',
        notlar: userNotes ,
    });
});
//not ekleme 
const AddNote = expressAsyncHandler(async (req, res) => {
    const { title, content } = req.body;
    //not ekleme işlemleri burada yapılıyor
    if(!title || !content){
        return res.status(400).json({
            user:req.user.username,
            message: 'Tüm alanları doldurunuz.',
            status: "Not Ekleme Başarısız!",
        });
    }
    const newNoteData = {
        user : req.user.id,
        title: title,
        content: content,
    }
    const newNote = await NoteModel.create(newNoteData);
    return res.status(201).json({
        user:req.user.username,
        message: 'Not Eklendi ! ',
        not: newNote,
    });
})
//note guncelleme 
const UpdateNote = expressAsyncHandler(async (req, res) => {
    const noteId = req.params.id    
    const { title, content } = req.body;
    const isNote = await NoteModel.findById(noteId);
    //not var mı
    if (!isNote){
        return res.status(404).json({
            message: 'Not Bulunamadı.',
        });
        
    }
    //alanlar dolu mu 
    
    if((!title || !content) || (title.trim() == '' || content.trim() == '')){
        throw new Error("Gerekli Alanları Doldurunuz 'Başlık:title' veya 'İçerik:content' Boş ! ");
    }
    //not güncelleme işlemleri burada yapılıyor
    const updatedNote = await NoteModel.findByIdAndUpdate(noteId, {title:title, content:content}, {new:true});
    return res.status(200).json({
        user : req.user.username,
        message: 'Not Güncellendi!',
        not: updatedNote,
    });
});
//notu silme 
const deleteNote = expressAsyncHandler(async(req,res)=>{
    //not id sini al 
    const noteId = req.params.id;
    //not var mı
    const isNote = await NoteModel.findById(noteId);
    if (!isNote){
        return res.status(404).json({
            message: 'Not Bulunamadı.',
        });
    }
    //not silme işlemleri burada yapılıyor
    await NoteModel.findByIdAndDelete(noteId);
    return res.status(200).json({
        user : req.user.username,
        message: 'Not Silindi!',
    });
})
export {
    NotList,AddNote,UpdateNote,deleteNote
}
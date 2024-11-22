import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [
            true,
            "Notu bir kullanıcı Eklemeli ! Sen de Kimsin ! "
        ],
    },
    title: {
        type: String,
        required: [true,"Bu alan boş geçilemez ! "],
    },
    content:{
        type: String,
        required: [true,"Bu alan boş geçilemez ! "],
    },
},{
    timestamps: true,
})

const NoteModel = mongoose.model("Notes",NoteSchema);
export default NoteModel;
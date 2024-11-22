import express from 'express';


//auth controller dahil et
import {
    NotList,AddNote,UpdateNote,deleteNote
} from '../controllers/userContorller.js';

//-----------------------------------------------------------------------------
//paramatre middle waresi 
import paramsCheck from '../middleware/paramsCheckMiddleware.js'
const Route = express.Router();
Route.get('/',NotList);
Route.post('/addnote',AddNote);
Route.put('/update/:id?',[paramsCheck('id')],UpdateNote);
Route.delete('/delete/:id?',[paramsCheck('id')],deleteNote);

export default Route;
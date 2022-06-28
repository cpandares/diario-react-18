
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDb } from '../../firebase/config';
import { fileUpload, loadNotes } from '../../helpers';
import { isCreating,addEmptyNote,setActive,setNotes,updateNote,setSaving,setPhotosToActiveNote,deleteNote } from './';

export const startSaveNote = ()=>{
    return async (dispatch, getState)=>{

        dispatch(isCreating());

        const { uid } = getState().auth /* Get user auth */

        const newNote = {
            title:"",
            body:"",
            date: new Date().getTime()
        }

        const newDoc = doc( collection(firebaseDb, `${uid}/journal/notes`) );
        const setNoteResp  = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

       dispatch(addEmptyNote(newNote));
       dispatch(setActive(newNote))


    }
}

export const startGetNotes = ()=>{

    return async ( dispatch, getState)=>{        
        const { uid } = getState().auth /* Get user auth */
      
        if(!uid) throw new Error('Uid not valid')
        
        const resp = await loadNotes(uid);
        
        dispatch(setNotes(resp))

    }

}

export const startSavingNotes = ()=>{

    return async( dispatch,getState )=>{
        dispatch(setSaving());
        const { uid } = getState().auth /* Get user auth */
        const { active:note } = getState().journal /* getActive note */

        const noteToSave = { ...note }
        delete noteToSave.id;

        const docRef = doc( firebaseDb, `${ uid }/journal/notes/${note.id}`);
        await setDoc(docRef, noteToSave, {merge:true});

        dispatch(updateNote(note))
    }
}


export const startUploadingImages = (files= [])=>{
    return async (dispatch, getState)=>{
        dispatch(setSaving())
        
        const { active:note  } = getState().journal
        await fileUpload(files[0]);

        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) );
        }

         const imagesUrl = await Promise.all( fileUploadPromises );

         dispatch(setPhotosToActiveNote(imagesUrl))
         dispatch(updateNote(note))
    }
}

export const startDeleteNote = ()=>{
    return async (dispatch, getState)=>{
      const { uid } = getState().auth;
      const { active:note } = getState().journal;
  
      const docRef = doc( firebaseDb, `${ uid }/journal/notes/${note.id}`);

      await deleteDoc( docRef );

      dispatch(deleteNote(note.id))


    }
  }
  
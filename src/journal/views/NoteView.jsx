
import { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { SaveOutlined,UploadOutlined,DeleteOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import { useForm } from '../../hooks/useForm';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { setActive, startDeleteNote, startSavingNotes, startUploadingImages } from '../../store/journal';

export const NoteView = () => {
    const dispatch = useDispatch();
    const inputFileRef = useRef();
    const { active:note,messageSaved, isSaving } = useSelector(state=>state.journal);
    const { body, title, date,onInputChange,formState } = useForm(note);
    const dateString = useMemo(()=>{

        const newDate = new Date( date );
        return newDate.toUTCString()
    },[date]);

    useEffect(()=>{
      dispatch(setActive(formState));
    },[formState]);

    useEffect(()=>{
      if(messageSaved.length > 0){
        Swal.fire('Note Saved', messageSaved, 'success')
      }
    },[messageSaved])

    const onSaveNote = ()=>{
      dispatch(startSavingNotes());
    }

    const onFileInputChange = ({ target })=>{

      if(target.length === 0) return;
     
      dispatch(startUploadingImages( target.files ))
    }

    const deleteNote = ()=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(startDeleteNote())
        }
      })
        
    }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          { dateString }
        </Typography>
      </Grid>

      <Grid item>
        <input 
          type="file"
          multiple
          onChange={ onFileInputChange }
          style={{ display:'none' }}
          ref = { inputFileRef }
        />
        <IconButton>
          <UploadOutlined 
              color = "primary"
              disabled = { isSaving }
              onClick = { ()=> inputFileRef.current.click()}
          />
        </IconButton>
      </Grid>

      <Grid item>
        <Button 
          disabled = {isSaving}
          onClick = { onSaveNote }
          color="primary" sx={{ padding: 2 }}
          >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value= { title }
          onChange = { onInputChange }
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Something interesting today?"
          minRows={5}
          name="body"
          value= { body }
          onChange = { onInputChange }
        />
      </Grid>

      <Grid
        container
        justifyContent="end"

      >
        <Button
          color="error"
          sx={{ mt:2 }}
          onClick = { deleteNote }
           
        >
            <DeleteOutlined />
            Delete
        </Button>

      </Grid>

      {/* Image gallery */}
      {
        !note.imageUrls
        ?
        <h2>No Images</h2>
        :
        <ImageGallery images = { note.imageUrls } />
      }
    </Grid>
  );
};

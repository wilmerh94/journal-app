import { SaveOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { FormInputText } from '../../auth/components/FormInputText';
import { setActiveNote } from '../../store/journal/JournalSlice';
import { startSaveNote } from '../../store/journal/thunks';
import { ImageGallery } from '../components';

export const NoteView = () => {
   const dispatch = useDispatch();

   const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);

   const { register, formState, reset, watch, setValue } = useForm({
      defaultValues: { title: note.title, body: note.body },
   });

   const dateString = useMemo(() => {
      const newDate = new Date(note.date);
      return newDate.toUTCString();
   }, [note.date]);

   useEffect(() => {
      setValue('title', note.title);
      setValue('body', note.body);
   }, [note]);

   useEffect(() => {
      if (messageSaved.length > 0) {
         Swal.fire({
            title: 'Note updated!',
            text: messageSaved,
            icon: 'success',
         });
      }
   }, [messageSaved]);

   /* This is how I update my form and redux at the same time */

   useEffect(() => {
      if (formState.isDirty) {
         const { ...field } = formState.touchedFields;
         console.log('formState', field);

         const data = watch();
         const oldData = { ...note };
         const newData = { ...oldData, ...data };
         console.log('newData', newData);
         dispatch(setActiveNote(newData));
         if (field) {
            const fieldName = Object.keys(field).toString();
            console.log('fieldName', fieldName);
            /* Making sure what is reset is the value on filename */
            reset({ [`${fieldName}`]: note.fieldName });
            console.log('got it', fieldName);
         }
      }
      // use entire formState object as optional array arg in useEffect, not individual properties of it
   }, [formState.isDirty, watch]);

   const onSaveNote = () => {
      dispatch(startSaveNote());
   };

   return (
      <Grid
         className='animate__animated animate__fadeIn animate__faster'
         container
         direction='row'
         justifyContent='space-between'
         md={10}
         sx={{ mb: 1, width: '100%' }}>
         <Grid>
            <Typography fontSize={30} fontWeight='light'>
               {dateString}
            </Typography>
         </Grid>
         <Grid>
            <Button
               disabled={isSaving}
               color='primary'
               sx={{ p: 2 }}
               onClick={onSaveNote}>
               <SaveOutlined sx={{ fontSeize: 30, mr: 1 }} />
            </Button>
         </Grid>
         <Grid container>
            <FormInputText
               inputName={'title'}
               register={register}
               label={'Title'}
               variant='filled'
            />
            <FormInputText
               inputName={'body'}
               register={register}
               label={'What happened today?'}
               minRows={5}
               variant='filled'
               multiline={true}
            />
         </Grid>
         <ImageGallery />
      </Grid>
   );
};

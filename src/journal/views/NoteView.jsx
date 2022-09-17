import { SaveOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { FormInputText } from '../../auth/components/FormInputText';
import { ImageGallery } from '../components';

export const NoteView = () => {
   const { active: note } = useSelector((state) => state.journal);
   const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
   } = useForm();
   const dateString = useMemo(() => {
      const newDate = new Date(note.date);
      return newDate.toUTCString();
   }, [note.date]);

   setValue('title', note.title);
   setValue('body', note.body);

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
            <Button color='primary' sx={{ p: 2 }}>
               <SaveOutlined sx={{ fontSeize: 30, mr: 1 }} />
            </Button>
         </Grid>
         <Grid container>
            <FormInputText
               inputName={'title'}
               register={register}
               label={'Title'}
               errors={errors.displayName}
               variant='filled'
            />
            <FormInputText
               inputName={'body'}
               register={register}
               label={'What happened today?'}
               errors={errors.displayName}
               minRows={5}
               variant='filled'
               multiline={true}
            />
         </Grid>
         <ImageGallery />
      </Grid>
   );
};

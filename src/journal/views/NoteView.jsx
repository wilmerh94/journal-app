import { SaveOutlined } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ImageGallery } from '../components';

export const NoteView = () => {
   return (
      <Grid
         container
         direction='row'
         justifyContent='space-between'
         md={10}
         sx={{ mb: 1, width: '100%' }}>
         <Grid>
            <Typography fontSize={39} fontWeight='light'>
               28 December 2022
            </Typography>
         </Grid>
         <Grid>
            <Button color='primary' sx={{ p: 2 }}>
               <SaveOutlined sx={{ fontSeize: 30, mr: 1 }} />
            </Button>
         </Grid>
         <Grid container>
            <TextField
               type='text'
               variant='filled'
               fullWidth
               placeholder='Title'
               label='Title'
               sx={{ border: 'none', mb: 1 }}
            />
            <TextField
               type='text'
               variant='filled'
               fullWidth
               multiline
               placeholder='What happened today?'
               minRows={5}
            />
         </Grid>
         <ImageGallery />
      </Grid>
   );
};

import { Google } from '@mui/icons-material';
import { Button, Link, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
   return (
      <AuthLayout title='Register'>
         <form>
            <Grid container spacing={2}>
               <Grid xs={12} md={10} sx={{ px: 0 }}>
                  <TextField
                     label='Name'
                     type='text'
                     placeholder='Wilmer Herrera'
                     fullWidth
                  />
               </Grid>
               <Grid xs={12} md={6} sx={{ px: 0 }}>
                  <TextField
                     label='Email'
                     type='email'
                     placeholder='email@google.com'
                     fullWidth
                  />
               </Grid>
               <Grid xs={12} md={6} sx={{ px: 0 }}>
                  <TextField
                     label='Password'
                     type='password'
                     placeholder='Password'
                     fullWidth
                  />
               </Grid>
               <Grid xs={12} md={6} sx={{ px: 0 }}>
                  <TextField
                     label='RePassword'
                     type='password'
                     placeholder='RePassword'
                     fullWidth
                  />
               </Grid>
               <Grid container xs={12} sm={12} md={6} sx={{ mt: 0.5 }}>
                  <Grid xs sm={12}>
                     <Button variant='contained' fullWidth>
                        Login
                     </Button>
                  </Grid>
               </Grid>
               <Grid
                  container
                  direction='row'
                  justifyContent='end'
                  sx={{ width: '100%' }}>
                  <Grid>
                     <Typography sx={{ mr: 1 }}>Have an Account already?</Typography>
                  </Grid>
                  <Grid>
                     <Link component={RouterLink} color='inherit' to='/auth/login'>
                        Sign up
                     </Link>
                  </Grid>
               </Grid>
            </Grid>
         </form>
      </AuthLayout>
   );
};

import { Google } from '@mui/icons-material';
import { Button, Link, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
   return (
      <AuthLayout title='Login'>
         <form>
            <Grid container spacing={2}>
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
               <Grid container xs={12} md={6} sx={{ mt: 2 }}>
                  <Grid xs={12} sm={6}>
                     <Button variant='contained' fullWidth>
                        Login
                     </Button>
                  </Grid>
                  <Grid xs={12} sm={6}>
                     <Button variant='contained' fullWidth>
                        <Google />
                        <Typography sx={{ ml: 1 }}> Google</Typography>
                     </Button>
                  </Grid>
               </Grid>
               <Grid
                  container
                  direction='row'
                  justifyContent='end'
                  sx={{ mt: 1, width: '100%' }}>
                  <Grid>
                     <Link component={RouterLink} color='inherit' to='/auth/register'>
                        Sign up
                     </Link>
                  </Grid>
               </Grid>
            </Grid>
         </form>
      </AuthLayout>
   );
};

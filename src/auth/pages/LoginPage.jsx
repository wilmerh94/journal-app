import { Google } from '@mui/icons-material';
import { Button, Link, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
   const { status } = useSelector((state) => state.auth);

   const dispatch = useDispatch();

   const { email, password, onInputChange } = useForm({
      email: 'wilmer@gmail.com',
      password: '123456',
   });

   const isAuthenticated = useMemo(() => status === 'checking', [status]);

   const onSubmit = (e) => {
      e.preventDefault();
      console.log({ email, password });
      dispatch(checkingAuthentication());
      // onInputChange(e.target.value);
   };

   const onGoogleSignIn = () => {
      console.log('On Google');
      dispatch(startGoogleSignIn());
   };
   return (
      <AuthLayout title='Login'>
         <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
               <Grid xs={12} md={6} sx={{ px: 0 }}>
                  <TextField
                     label='Email'
                     type='email'
                     placeholder='email@google.com'
                     fullWidth
                     name='email'
                     value={email}
                     onChange={onInputChange}
                  />
               </Grid>
               <Grid xs={12} md={6} sx={{ px: 0 }}>
                  <TextField
                     label='Password'
                     type='password'
                     placeholder='Password'
                     fullWidth
                     name='password'
                     value={password}
                     onChange={onInputChange}
                  />
               </Grid>
               <Grid container xs={12} md={6} sx={{ mt: 2 }}>
                  <Grid xs={12} sm={6}>
                     <Button
                        disabled={isAuthenticated}
                        type='submit'
                        variant='contained'
                        fullWidth>
                        Login
                     </Button>
                  </Grid>
                  <Grid xs={12} sm={6}>
                     <Button
                        disabled={isAuthenticated}
                        onClick={onGoogleSignIn}
                        variant='contained'
                        fullWidth>
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

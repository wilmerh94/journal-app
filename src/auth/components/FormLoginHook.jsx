import { yupResolver } from '@hookform/resolvers/yup';
import { Google } from '@mui/icons-material';
import { Alert, Button, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
   startGoogleSignIn,
   startLoginUserWithEmailPassword,
} from '../../store/auth/thunks';
import { validationSchemaLogin } from '../validations/validationSchema';
import { FormInputText } from './FormInputText';

export const FormLoginHook = () => {
   const dispatch = useDispatch();

   const { status, errorMessage } = useSelector((state) => state.auth);

   const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(validationSchemaLogin),
   });

   const onGoogleSignIn = () => {
      console.log('On Google');
      dispatch(startGoogleSignIn());
   };
   const onSubmit = ({ email, password }) => {
      dispatch(startLoginUserWithEmailPassword({ email, password }));
      if (!errorMessage && errorMessage !== null) {
         reset();
      }
   };

   return (
      <form className='animate__animated animate__fadeIn animate__faster'>
         <Grid container spacing={2}>
            <Grid xs={12} md={15} sx={{ px: 0 }}>
               <FormInputText
                  inputName={'email'}
                  register={register}
                  label={'Email'}
                  errors={errors.email}
               />
            </Grid>
            <Grid xs={12} md={15} sx={{ px: 0 }}>
               <FormInputText
                  type='password'
                  inputName={'password'}
                  register={register}
                  label={'Password'}
                  errors={errors.password}
               />
            </Grid>
            <Grid container xs={12} md={15}>
               <Grid xs sm={12} display={!!errorMessage ? '' : 'none'}>
                  <Alert severity='error'>{errorMessage}</Alert>
               </Grid>

               <Grid xs={12} sm={6}>
                  <Button
                     disabled={isCheckingAuthentication}
                     onClick={handleSubmit(onSubmit)}
                     variant='contained'
                     fullWidth>
                     Login
                  </Button>
               </Grid>
               <Grid xs={12} sm={6}>
                  <Button
                     disabled={isCheckingAuthentication}
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
   );
};

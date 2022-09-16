import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Alert, Button, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchemaRegister } from '../validations/validationSchema';
import { FormInputText } from './FormInputText';

export const FormHookYup = () => {
   const dispatch = useDispatch();
   const { status, errorMessage } = useSelector((state) => state.auth);
   const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(validationSchemaRegister),
   });
   const onSubmit = ({ displayName, email, password }) => {
      dispatch(startCreatingUserWithEmailPassword({ displayName, email, password }));
      if (!errorMessage && errorMessage !== null) {
         reset();
      }
   };

   return (
      <form>
         <Grid container spacing={2}>
            <Grid xs={12} md={10} sx={{ px: 0 }}>
               <FormInputText
                  inputName={'displayName'}
                  register={register}
                  label={'Name'}
                  errors={errors.displayName}
               />
            </Grid>
            <Grid xs={12} md={10} sx={{ px: 0 }}>
               <FormInputText
                  inputName={'email'}
                  register={register}
                  label={'Email'}
                  errors={errors.email}
               />
            </Grid>
            <Grid xs={12} md={10} sx={{ px: 0 }}>
               <FormInputText
                  type='password'
                  inputName={'password'}
                  register={register}
                  label={'Password'}
                  errors={errors.password}
               />
            </Grid>
            <Grid container xs={12} sm={12} md={6} sx={{ mt: 0.5, mb: 0.5 }}>
               <Grid xs sm={12} display={!!errorMessage ? '' : 'none'}>
                  <Alert severity='error'>{errorMessage}</Alert>
               </Grid>
               <Grid xs sm={12}>
                  <Button
                     disabled={isCheckingAuthentication}
                     onClick={handleSubmit(onSubmit)}
                     variant='contained'
                     fullWidth>
                     Submit
                  </Button>
               </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end' sx={{ width: '100%' }}>
               <Grid>
                  <Typography sx={{ mr: 1 }}>Have an Account already?</Typography>
               </Grid>
               <Grid>
                  <Link component={RouterLink} color='inherit' to='/auth/login'>
                     Sign In
                  </Link>
               </Grid>
            </Grid>
         </Grid>
      </form>
   );
};

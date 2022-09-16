const formData = {
   email: 'wilmer@gmail.com',
   password: '123456',
   displayName: 'Wilmer Herrera',
};

const formValidations = Yup.object().shape({
   email: Yup.string().email('Email format is not valid').required('Required'),
   displayName: Yup.string()
      .min(2, 'Name must be minimum 2 characters')
      .max(15, 'Must be 15 characters')
      .required('Required'),
   password1: Yup.string()
      .min(6, 'Password must be minimum 2 characters')
      .max(15, 'Must be 15 characters')
      .required('Required'),
});

export const RegularForm = () => {
   return (
      <form onSubmit={onSubmit}>
         <Grid container spacing={2}>
            <Grid xs={12} md={10} sx={{ px: 0 }}>
               <TextField
                  label='Name'
                  type='text'
                  placeholder='Wilmer Herrera'
                  fullWidth
                  name='displayName'
                  value={displayName}
                  onChange={onInputChange}
                  error={!displayNameValid}
                  helperText={displayNameValid}
               />
            </Grid>
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
            <Grid container xs={12} sm={12} md={6} sx={{ mt: 0.5 }}>
               <Grid xs sm={12}>
                  <Button type='submit' variant='contained' fullWidth>
                     Login
                  </Button>
               </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end' sx={{ width: '100%' }}>
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
   );
};

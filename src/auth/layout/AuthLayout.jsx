import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const AuthLayout = ({ children, title = '' }) => {
   return (
      <Grid
         container
         spacing={0}
         direction='column'
         alignItems='center'
         justifyContent='center'
         sx={{
            minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: 4,
         }}>
         <Grid
            className='box-shadow'
            xs={5}
            sm={7}
            md={10}
            sx={{
               width: { md: 45 },
               backgroundColor: 'background.paper',
               padding: 3,
               borderRadius: 2,
            }}>
            <Typography variant='h5' sx={{ mb: 1 }}>
               {title}
            </Typography>
            {children}
         </Grid>
      </Grid>
   );
};

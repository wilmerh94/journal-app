import { StarOutlineOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const NothingSelectedView = () => {
   return (
      <Grid
         container
         spacing={0}
         direction='column'
         alignItems='center'
         justifyContent='center'
         sx={{
            minHeight: 'calc(100vh -110px)',
            backgroundColor: 'primary.main',
            p: 4,
            borderRadius: 5,
         }}>
         <Grid>
            <StarOutlineOutlined sx={{ fontSize: 100, color: 'common.white' }} />
         </Grid>
         <Grid>
            <Typography color='info.contrastText'>Select or Create an entry</Typography>
         </Grid>
      </Grid>
   );
};

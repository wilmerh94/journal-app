import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const Navbar = ({ drawerWidth }) => {
   return (
      <AppBar
         position='fixed'
         sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
         }}>
         <Toolbar>
            <IconButton
               color='inherit'
               edge='start'
               sx={{ mr: 2, display: { sm: 'none' } }}>
               <MenuOutlined />
            </IconButton>

            <Grid
               container
               direction='row'
               justifyContent='space-between'
               alignItems='center'
               sx={{ width: '100%' }}>
               <Typography variant='h6' noWrap component='div'>
                  JournalApp
               </Typography>
               <Grid>
                  <IconButton color='error'>
                     <LogoutOutlined />
                  </IconButton>
               </Grid>
            </Grid>
         </Toolbar>
      </AppBar>
   );
};

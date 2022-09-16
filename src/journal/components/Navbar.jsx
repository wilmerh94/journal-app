import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const Navbar = ({ drawerWidth = 240 }) => {
   const dispatch = useDispatch();

   const onLogout = () => {
      dispatch(startLogout());
   };
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
                  <IconButton color='error' onClick={onLogout}>
                     <LogoutOutlined />
                  </IconButton>
               </Grid>
            </Grid>
         </Toolbar>
      </AppBar>
   );
};

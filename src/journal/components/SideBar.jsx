import { TurnedInNot } from '@mui/icons-material';
import {
   Box,
   Divider,
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Toolbar,
   Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const SideBar = ({ drawerWidth }) => {
   return (
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
         <Drawer
            variant='permanent' //Temporary
            open
            sx={{
               display: { xs: 'block' },
               '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
               },
            }}>
            <Toolbar>
               <Typography variant='h6' noWrap component='div'>
                  Wilmer Herrera
               </Typography>
            </Toolbar>
            <Divider />
            <List>
               {['January', 'February'].map((text) => (
                  <ListItem key={text} disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <TurnedInNot />
                        </ListItemIcon>
                        <Grid container spacing={{ xs: 2, md: 3 }} direction='column'>
                           <ListItemText primary={text} />
                           <ListItemText secondary={'Secondary text'} />
                        </Grid>
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </Drawer>
      </Box>
   );
};

import { Box, Button, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCalendar } from '../../store/calendar/calendarSlice';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ drawerWidth }) => {
   const dispatch = useDispatch();
   const { displayName } = useSelector((state) => state.auth);
   const { notes } = useSelector((state) => state.journal);

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
                  {displayName}
               </Typography>
            </Toolbar>
            <Divider />
            <List>
               {notes.map((note) => (
                  <SideBarItem key={note.id} {...note} />
               ))}
            </List>
            <Button
               // disabled={isSaving}
               onClick={() => dispatch(setActiveCalendar())}
               size='large'
               sx={{
                  color: 'common.white',
                  backgroundColor: 'info.main',
                  ':hover': {
                     backgroundColor: 'error.main',
                     opacity: 0.9,
                  },
                  /* Sending the icon to the bottom right */
               }}>
               Add an Appoint
            </Button>
         </Drawer>
      </Box>
   );
};

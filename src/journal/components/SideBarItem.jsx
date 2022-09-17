import { TurnedInNot } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/JournalSlice';

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
   const dispatch = useDispatch();
   const newTitle = useMemo(() => {
      return title.length > 17 ? title.substring(0, 17) + '...' : title;
   }, [title]);

   const onClickNote = () => {
      dispatch(setActiveNote({ title, body, id, date, imageUrls }));
   };

   return (
      <ListItem key={id} disablePadding onClick={onClickNote}>
         <ListItemButton>
            <ListItemIcon>
               <TurnedInNot />
            </ListItemIcon>
            <Grid container spacing={{ xs: 2, md: 3 }} direction='column'>
               <ListItemText primary={newTitle} />
               <ListItemText secondary={body} />
            </Grid>
         </ListItemButton>
      </ListItem>
   );
};

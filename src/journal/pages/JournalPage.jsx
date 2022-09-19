import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { CalendarPage } from './CalendarPage';

export const JournalPage = () => {
   const dispatch = useDispatch();
   const { isSaving, active } = useSelector((state) => state.journal);
   const { calendar } = useSelector((state) => state.calendar);

   // const creatingNewNote = useMemo(() => isSaving === true, [isSaving]);

   const onClickNewNote = () => {
      dispatch(startNewNote());
   };

   return (
      <JournalLayout>
         {!!active && !calendar ? (
            <NoteView />
         ) : calendar ? (
            <CalendarPage />
         ) : (
            <NothingSelectedView />
         )}
         <IconButton
            disabled={isSaving}
            onClick={onClickNewNote}
            size='large'
            sx={{
               color: 'common.white',
               backgroundColor: 'error.main',
               ':hover': {
                  backgroundColor: 'error.main',
                  opacity: 0.9,
               },
               /* Sending the icon to the bottom right */
               position: 'fixed',
               right: 50,
               bottom: 50,
            }}>
            <AddOutlined sx={{ fontSize: 30 }} />
         </IconButton>
      </JournalLayout>
   );
};

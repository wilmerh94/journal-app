import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
   return (
      <JournalLayout>
         {/* <Typography variant='h1'>JournalPage</Typography> */}
         <NothingSelectedView />
         {/* <NoteView /> */}
         <IconButton
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

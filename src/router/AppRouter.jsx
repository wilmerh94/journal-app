import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { useCheckAuth } from '../hooks';
import { CalendarPage } from '../journal/pages/CalendarPage';
import { JournalPage } from '../journal/pages/JournalPage';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {
   const status = useCheckAuth();

   if (status === 'checking') {
      return <CheckingAuth />;
   }

   return (
      <Routes>
         {/* Private Route for authentication */}
         {status === 'authenticated' ? (
            <>
               <Route path='/*' element={<JournalPage />} />
               <Route path='/calendar' element={<CalendarPage />} />
            </>
         ) : (
            <Route path='/auth/*' element={<AuthRoute />} />
         )}

         <Route path='/*' element={<Navigate to='/auth/login' />} />

         {/* Login Register */}
         {/* <Route path='/auth/*' element={<AuthRoute />} /> */}

         {/* Journal App */}
         {/* <Route path='/*' element={<JournalPage />} /> */}
      </Routes>
   );
};

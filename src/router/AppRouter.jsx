import { Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { JournalPage } from '../journal/pages/JournalPage';

export const AppRouter = () => {
   return (
      <Routes>
         {/* Login Register */}
         <Route path='/auth/*' element={<AuthRoute />} />
         {/* Journal App */}
         <Route path='/*' element={<JournalPage />} />
      </Routes>
   );
};

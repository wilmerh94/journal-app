import { Navigate, Routes } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage';

export const JournalRoutes = () => {
   return (
      <Routes>
         <Routes path='/' element={<JournalPage />} />
         <Routes path='/*' element={<Navigate to='/' />} />
      </Routes>
   );
};

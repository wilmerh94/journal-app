import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../auth/routes/AuthRoute';
import { FirebaseAuth } from '../firebase/config';
import { JournalPage } from '../journal/pages/JournalPage';
import { login, logout } from '../store/auth';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {
   const { status } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user) => {
         if (!user) return dispatch(logout());

         const { uid, email, displayName, photoURL } = user;
         dispatch(login({ uid, email, displayName, photoURL }));
      });
   }, []);

   if (status === 'checking') {
      return <CheckingAuth />;
   }

   return (
      <Routes>
         {/* Login Register */}
         <Route path='/auth/*' element={<AuthRoute />} />
         {/* Journal App */}
         <Route path='/*' element={<JournalPage />} />
      </Routes>
   );
};

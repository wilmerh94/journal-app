import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoute = () => {
   return (
      <Routes>
         <Route path='login' element={<LoginPage />} />
         <Route path='register' element={<RegisterPage />} />

         {/* Navigate the person to login or register if they are trying to go to a different route */}
         <Route path='/*' element={<Navigate to='/auth/login' />} />
      </Routes>
   );
};

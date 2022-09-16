import { FormLoginHook } from '../components/FormLoginHook';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
   return (
      <AuthLayout title='Login'>
         <FormLoginHook />
      </AuthLayout>
   );
};

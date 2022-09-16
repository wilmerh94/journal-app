import { FormHookYup } from '../components/FormWithHook';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
   return (
      <AuthLayout title='Register'>
         <FormHookYup />
      </AuthLayout>
   );
};

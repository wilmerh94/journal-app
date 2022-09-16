import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
   displayName: Yup.string()
      .min(2, 'Name must be minimum 2 characters')
      .max(15, 'Must be 15 characters')
      .required('Required'),
   email: Yup.string().email('Email format is not valid').required('Required'),
   password: Yup.string()
      .min(6, 'Password must be minimum 2 characters')
      .max(15, 'Must be 15 characters')
      .required('Required'),
});

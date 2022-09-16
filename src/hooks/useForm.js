import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
   const [formState, setFormState] = useState(initialForm);
   const [formValidation, setFormValidation] = useState({});

   useEffect(() => {
      createValidators();
   }, [formState]);

   const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFor1mState({
         ...formState,
         [name]: value,
      });
   };

   const onResetForm = () => {
      setFormState(initialForm);
   };
   const createValidators = () => {
      const formCheckedValues = {};
      for (const formField of Object.keys(formValidations)) {
      }
   };
   return {
      ...formState,
      formState,
      onInputChange,
      onResetForm,
   };
};

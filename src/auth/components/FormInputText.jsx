import { TextField, Typography } from '@mui/material';

export const FormInputText = ({ inputName, register, label, errors, type = 'text' }) => {
   return (
      <>
         <TextField
            required
            id={inputName}
            name={inputName}
            label={label}
            type={type}
            fullWidth
            margin='dense'
            {...register(inputName)}
            error={errors ? true : false}
         />
         <Typography variant='inherit' color='text.secondary'>
            {errors?.message}
         </Typography>
      </>
   );
};

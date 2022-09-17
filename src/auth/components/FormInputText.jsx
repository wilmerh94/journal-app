import { TextField, Typography } from '@mui/material';

export const FormInputText = ({
   inputName,
   register,
   label,
   errors,
   type = 'text',
   minRows,
   onChange,
   variant,
   multiline,
}) => {
   return (
      <>
         <TextField
            type={type}
            required
            id={inputName}
            name={inputName}
            label={label}
            fullWidth
            margin='dense'
            {...register(inputName)}
            error={errors ? true : false}
            minRows={minRows}
            onChange={onChange}
            variant={variant}
            multiline={multiline}
         />
         <Typography variant='inherit' color='text.secondary'>
            {errors?.message}
         </Typography>
      </>
   );
};

{
   /* <TextField
type='text'
variant='filled'
fullWidth
multiline
placeholder='What happened today?'
minRows={5}
/> */
}

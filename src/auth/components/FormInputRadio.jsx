import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Controller } from 'react-hook-form';

const options = [
   {
      label: 'Radio Option 1',
      value: '1',
   },
   {
      label: 'Radio Option 2',
      value: '2',
   },
];

export const FormInputRadio = ({ name, control, label }) => {
   const generateRadioOptions = () => {
      return options.map((singleOption) => (
         <FormControlLabel
            value={singleOption.value}
            label={singleOption.label}
            control={<Radio />}
         />
      ));
   };

   return (
      <Controller
         name={name}
         control={control}
         render={({ field: { onChange, value } }) => (
            <RadioGroup value={value} onChange={onChange}>
               {generateRadioOptions()}
            </RadioGroup>
         )}
      />
   );
};

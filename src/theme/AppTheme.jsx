import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purpleTheme } from './';

export const AppTheme = ({ children }) => {
   console.log(purpleTheme);
   return (
      <ThemeProvider theme={purpleTheme}>
         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
};

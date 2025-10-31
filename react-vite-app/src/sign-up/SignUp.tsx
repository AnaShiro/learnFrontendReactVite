import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { SignInContainer } from '../shared-theme/PageContainer';
import { Card } from '../shared-theme/SignCard';

export default function SignIn(props: { disableCustomTheme?: boolean }) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [repeatPasswordError, setRepeatPasswordError] = React.useState(false);
    const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = React.useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValid = validateInputs();
      if (!isValid) {
        return;
      }

      const data = new FormData(event.currentTarget);
      const formData = {
        email: data.get('email'),
        password: data.get('password'),
      };
      console.log('Dane z formularza:', formData);
    };

    const validateInputs = () => {
      const email = document.getElementById('email') as HTMLInputElement;
      const password = document.getElementById('password') as HTMLInputElement;
      const repeatPassword = document.getElementById('repeatPassword') as HTMLInputElement;

      let isValid = true;

      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        setEmailError(true);
        setEmailErrorMessage('Proszę podać prawidłowy adres email');
        isValid = false;
      } else {
        setEmailError(false);
        setEmailErrorMessage('');
      }

      if (!password.value || password.value.length < 6) {
        setPasswordError(true);
        setPasswordErrorMessage('Hasło musi mieć co najmniej 6 znaków');
        isValid = false;
      } else {
        setPasswordError(false);
        setPasswordErrorMessage('');
      }

      if(!repeatPassword.value || repeatPassword.value !== password.value) {
        setRepeatPasswordError(true);
        setRepeatPasswordErrorMessage('Hasła nie są identyczne');
        isValid = false;
      } else {
        setRepeatPasswordError(false);
        setRepeatPasswordErrorMessage('');
      }

      return isValid;
    };

    return (
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
          <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
            >
              Zarejestruj się
            </Typography>
            <Box
              component="form"
              method="post"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  error={emailError}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={emailError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Hasło</FormLabel>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="repeatPassword">Powtórz Hasło</FormLabel>
                <TextField
                  error={repeatPasswordError}
                  helperText={repeatPasswordErrorMessage}
                  name="repeatPassword"
                  placeholder="••••••"
                  type="password"
                  id="repeatPassword"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={repeatPasswordError ? 'error' : 'primary'}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: '30px' }}
              >
                Zarejestruj się
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <Typography sx={{ textAlign: 'center' }}>
                Masz już konto?{' '}
                <Link
                  href="/signin"
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                >
                  Zaloguj się
                </Link>
              </Typography>
            </Box>
          </Card>
        </SignInContainer>
      </AppTheme>
    );
}
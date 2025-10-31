import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ForgotPassword from './components/ForgotPassword';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { SignContainer } from '../shared-theme/SignCard';
import { Card } from '../shared-theme/PageContainer';

export default function SignIn(props: { disableCustomTheme?: boolean }) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

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

      return isValid;
    };

    return (
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <SignContainer direction="column" justifyContent="space-between">
			<ColorModeSelect sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }} />
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
            >
              Zaloguj się
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
                  autoComplete="email"
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
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox name="remember" value="true" color="primary" />}
                label="Zapamiętaj mnie"
              />
              <ForgotPassword open={open} handleClose={handleClose} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
              >
                Zaloguj się
              </Button>
            </Box>
            <Divider>Nie możesz się zalogować?</Divider>
			    <Link
                component="button"
                type="button"
                onClick={handleClickOpen}
                variant="body2"
                sx={{ alignSelf: 'center' }}
				>
					Zapomniałeś hasła?
				</Link>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ textAlign: 'center' }}>
                Nie masz jeszcze konta?{' '}
                <Link
                  href="/signup"
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                >
                  Zarejestruj się
                </Link>
              </Typography>
            </Box>
          </Card>
        </SignContainer>
      </AppTheme>
    );
}

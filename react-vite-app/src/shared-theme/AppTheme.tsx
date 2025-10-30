import { ThemeProvider, createTheme } from '@mui/material/styles';

interface AppThemeProps {
    children: React.ReactNode;
    disableCustomTheme?: boolean;
}

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
    },
    colorSchemes: {
        light: true,
        dark: true,
    },
});

export default function AppTheme({ children, disableCustomTheme }: AppThemeProps) {
    if (disableCustomTheme) {
        return <>{children}</>;
    }
    
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
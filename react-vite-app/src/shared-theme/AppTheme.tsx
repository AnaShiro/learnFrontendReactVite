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
        light: {
            palette: {
                primary: {
                    main: '#8b5cf6',
                    light: '#a78bfa',
                    dark: '#7c3aed',
                },
                secondary: {
                    main: '#ec4899',
                    light: '#f472b6',
                    dark: '#be185d',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#a78bfa',
                    light: '#c4b5fd',
                    dark: '#8b5cf6',
                },
                secondary: {
                    main: '#f472b6',
                    light: '#f9a8d4',
                    dark: '#ec4899',
                },
                background: {
                    default: '#0f172a',
                    paper: '#1e293b',
                },
                text: {
                    primary: '#f1f5f9',
                    secondary: '#cbd5e1',
                },
            },
        },
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
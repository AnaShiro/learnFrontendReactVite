import { useColorScheme } from '@mui/material/styles';
import Select, { type SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ColorModeSelect(props: SelectProps) {
    const { mode, setMode } = useColorScheme();
    
    if (!mode) {
        return null;
    }
    
    return (
        <Select
            value={mode}
            onChange={(event) => setMode(event.target.value as 'light' | 'dark' | 'system')}
            size="small"
            {...props}
        >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
        </Select>
    );
}
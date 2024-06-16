import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { Theme, Shadows, useTheme, createTheme, ThemeProvider, PaletteColor  } from '@mui/material/styles';
import { palette } from '@/utils/theme/palette';
import { shadows } from '@/utils/theme/shadows';
import { customShadows } from '@/utils/theme/custom-shadows';
import { typography } from '@/utils/theme/typography';
import { overrides } from '@/utils/theme/overrides';


// ----------------------------------------------------------------------


export default function MuiThemeProvider({ children, customTheme }: { children: React.ReactNode; customTheme?: PaletteColor | null }) {
    const theme = useTheme();
    const memoizedValue = useMemo(
        () => ({
            palette: palette(customTheme),
            typography,
            shadows: shadows(theme) as Shadows,
            customShadows: customShadows(theme),
            shape: { borderRadius: 8 },
            transitions: {
                duration: {
                    shortest: 150,
                    shorter: 200,
                    short: 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 400,
                    leavingScreen: 400,
                },
            },
        }),
        [customTheme, theme]
    );

    const overRideTheme :Theme = createTheme(memoizedValue);
    overRideTheme.components = overrides(overRideTheme)
    return (
        <ThemeProvider theme={overRideTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

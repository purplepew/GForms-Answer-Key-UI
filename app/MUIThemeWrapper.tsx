'use client'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { defaultTheme } from '@/theme/default';

const MUIThemeWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default MUIThemeWrapper
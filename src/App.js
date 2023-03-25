import React from 'react'

import { ColorMdoeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorMdoeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    <main className='content'></main>
                </div>
            </ThemeProvider>
        </ColorMdoeContext.Provider>
    )
}

export default App

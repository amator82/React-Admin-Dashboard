import React from 'react'

import { ColorMdoeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import TopBar from './scenes/global/Topbar'

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorMdoeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    <main className='content'>
                        <TopBar/>
                    </main>
                </div>
            </ThemeProvider>
        </ColorMdoeContext.Provider>
    )
}

export default App

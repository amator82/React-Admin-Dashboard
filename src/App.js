import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ColorMdoeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import TopBar from './scenes/global/Topbar'
import SideBar from './scenes/global/Sidebar'

import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Bar from './scenes/bar'
import Pie from './scenes/pie'
import Line from './scenes/line'
import FAQ from './scenes/faq'
import Calendar from './scenes/calendar'
import Geography from './scenes/geography'
import Form from './scenes/form'

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorMdoeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    <SideBar />
                    <main className='content'>
                        <TopBar />
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/team' element={<Team />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/invoices' element={<Invoices />} />
                            <Route path='/form' element={<Form />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/line' element={<Line />} />
                            <Route path='/faq' element={<FAQ />} />
                            <Route path='/geography' element={<Geography />} />
                            <Route path='/calendar' element={<Calendar />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorMdoeContext.Provider>
    )
}

export default App

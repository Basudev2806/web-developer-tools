import React from 'react';
import './App.css';
import 'primereact/resources/themes/arya-green/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Menubar from "./containers/Menubar/Menubar";
import ChmodCalculator from "./containers/ChmodCalculator/ChmodCalculator";
import EpochConverter from "./components/EpochConverter/EpochConverter";
import CrontabGenerator from "./components/CrontabGenerator/CrontabGenerator";
import PasswordGenerator from "./containers/PasswordGenerator/PasswordGenerator";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const App = () => <Router>
    <div className="App">
        <Menubar/>
        <Routes>
            <Route path="/" element={<ChmodCalculator />}/>
            <Route path="chmod_calculator" element={<ChmodCalculator />}/>
            <Route path="crontab_generator" element={<CrontabGenerator />}/>
            <Route path="unix_timestamp_converter" element={<EpochConverter />}/>
            <Route path="password_generator" element={<PasswordGenerator />}/>
        </Routes>
        <Analytics />
        <SpeedInsights />
    </div>
</Router>

export default App;

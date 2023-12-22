
import { Routes,Route } from 'react-router-dom';
import './globals.css';
import Signin from './_auth/forms/Signin';
import Signup from './_auth/forms/Signup';
import {Dashboard, Project, Arena, Charts, Logs, Scans, ScanSummary, Sim} from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import MainLayout from './_root/MainLayout';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
                <Route path="/sing-in" element={<Signin />}/>
                <Route path="/sing-up" element={<Signup />}/>
            </Route>
            
            
            {/* private routes */}
            <Route element={<MainLayout />}>
                <Route index element={<Dashboard />}/>
                <Route path="/Project" element={<Project />}/>
                <Route path="/Arena" element={<Arena />}/>
                <Route path="/Charts" element={<Charts />}/>
                <Route path="/Logs" element={<Logs />}/>
                <Route path="/Scans" element={<Scans />}/>
                <Route path="/Scan-Summary" element={<ScanSummary />}/>
                <Route path="/Sim" element={<Sim />}/>
            </Route>

        </Routes>
    </main>
  )
}

export default App
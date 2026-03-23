import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import {
    HomePage,
    ProjectDetails
} from "./pages";
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
            </Route>
        </Routes>
    );
}

export default App;
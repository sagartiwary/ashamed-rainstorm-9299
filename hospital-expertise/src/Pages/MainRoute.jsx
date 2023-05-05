import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MyHome } from './MyHome';
import Finddoctor from './Finddoctor';
import { Medicine } from './Medicine';
import { Surgery } from './Surgery';
import { VideoConsult } from './VideoConsult';
import { Labtests } from './Labtests';
export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/finddoctor" element={<Finddoctor />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/surgery" element={<Surgery />} />
            <Route path="/videoconsult" element={<VideoConsult />} />
            <Route path="/labtests" element={<Labtests />} />
        </Routes>
    )
}


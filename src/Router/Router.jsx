import React from 'react'
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import DocumentTitle from './Title';
import Resume_Tiara from '../pages/Resume_Tiara';


const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));

const Router = () => {
  return (
    <Routes>
        <Route
        exact path='/'
        element={
            <DocumentTitle title = 'Tiara Puspita'>
                <Home/>
            </DocumentTitle>
        }
        
        />
        <Route
        exact path='/projects'
        element={
            <DocumentTitle title = "Tiara's Works">
                <Projects/>
            </DocumentTitle>
        }
        
        />
        <Route
        exact path='/Resume-Tiara'
        element={
            <DocumentTitle title = "Resume Tiara">
                <Resume_Tiara/>
            </DocumentTitle>
        }
        
        />
    </Routes>
  )
}

export default Router


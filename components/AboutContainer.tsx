"use client";
import React from 'react'
import About from './About'
import ReduxProvider from '@/store/redux-provider';


const AboutContainer = () => {
  return <ReduxProvider>
    <About/>
  </ReduxProvider>
}

export default AboutContainer
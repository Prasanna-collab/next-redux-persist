"use client";
import React from 'react';
import { useAppSelector } from '@/store';


const About = () => {
    const authState = useAppSelector((state)=> state.auth.authState);
    console.log(authState);
  return <main className="">
        About <h1>{authState}</h1>
    </main>
 
}

export default About
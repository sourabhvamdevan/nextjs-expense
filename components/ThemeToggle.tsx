import React from 'react'
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect} from 'react';




export default function ThemeToggle() {

    const[theme,toggleTheme]=useTheme();
    const[mounted,setMounted]=useState(false);


    useEffect(()=>{
        setMounted(true);


    }[]);
    if(!mounted){
        return null;
        
    }
  return (
    <div>ThemeToggle</div>
  )
}

export default ThemeToggle
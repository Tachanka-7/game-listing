import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/images/logo.jpg'
import { MdOutlineSearch } from "react-icons/md"
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';
export default function Header() {
    const [toggle,setToggle] = useState(false)
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(()=>{
      console.log("Theme", theme)
    },[])

  return (
    <div className='flex items-center p-3'>
        <img src={logo} width={60} height={60} className='mx-2'/>
        <div className='flex bg-slate-200 p-2 w-full mx-5 my-5 rounded-full items-center'>
            <MdOutlineSearch />
            <input type='text' placeholder="Search Games" className='px-2 bg-transparent dark:bg-cyan-500'/>
        </div>
        <div>
            {theme=='light' ? 
            <MdOutlineLightMode className='text-xl bg-slate-200 rounded-full' 
            onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}}/>: <MdDarkMode className='text-xl bg-slate-200 p-1 rounded-full' 
            onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}/>}
        </div>
    </div>
  )
}

import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
const[isMobileMenuOpen, setIsMobileMenuOpen]=useState(false);

const toggleMobileMenu=()=>{

    setIsMobileMenuOpen(!isMobileMenuOpen);

};

const closeMobileMenu=()=>{

    setIsMobileMenuOpen(false);


};



    return(

        <nav className='sticky top-0 z-50 bg-white/95 
        dark: bg=gray-900/95 backdrop-blur-xl border-b border-gray-200/50
        dark:border-gray-600/50 shadow-lg shadow-gray-900/5 
        dark: shadow-black/30'>
<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='flex items-center justify-between h-14 sm:h-16'>
        {/*  Logo Section*/}

        <div className='flex-items-center'>
    <Link href='/' className='flex items-center gap -2 sm: gap-3 flex-shrink-0 group transition-all
    duration-300 hover:scale-105' onClick={closeMobileMenu}
    >

        <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br
        from-emerald-500 via green-500 to-teal-500 rounded-lg:sm rounded-xl flex
        items-center justifyk-center shadow-lg gorup-hover:shadow-xl transition-all
        duration-300 group-hover:rotate-3'>


            <span className='text-white text-xs
            sm:text-sm md: text-lg font-bold'>



            </span>
        </div>
        <span className='text-sm sm:text-base md:text-lg font-bold
        bg-gradient-to-r from-emrald-500 via green-500 to-teal-500 bg-clip-text 
        text-transparent'>
    <span className='hidden sm:inline'>ExpenseTracker AI</span>
    <span className='sm:inline'>ExpenseTracker</span>


        </span>
    
    </Link>


        </div>
{/* Desktop Navigation Links */}
<div className='hidden md:flex items-center space-x-6'>
    <Link href='/'
    className='relative text-gray-700 dark:text-gray-300
    hover:text-emrald-600 dark:hover:text-emrald-400 px-3 lg: px-4 py-2
    rounded-xl text-sm font-medium transition-all duration-200
    hover:bg-emerald-50/50  dark:hover:bg-emerald-900'>
        <span className='relative z-10'> Home

        </span>

<div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10
 rounded-xl opacity-0 group_hover:opacity-100 transition-opacity duration-200'>

</div>



    </Link>
    <Link href='/' className='
    relative text-gray-700 dark: text-gray-300
    hover:text-emrald-600 dark:hover:text-emerald-400 px-3
    lg:px-4 py-2 rounded-xl text-sm font-medium
    transition-all duration-200 hover:bg-emerald 50/50'></Link>

    

    


</div>
<div className='flex items-center space-x-1 sm:space-x-2'>
    <div className='p-0.5 sm:p-1'>
        <ThemeToggle/>
    </div>
</div>

    </div>

            
        </div>

        </nav>
        
    )
}
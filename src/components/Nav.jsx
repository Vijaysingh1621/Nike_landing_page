import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Dark_mode from "../assets/theme/icons8-dark-mode-24.png"
import Light_mode from "../assets/theme/sun-8727.png"
import { useTheme } from '../themecontext'
import React,{useEffect} from "react";

const Nav = () => {

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
  }, [setTheme]);

  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
    }
  ,[theme]);

const togglemode=()=>{
  const newTheme=theme== "light"?  "dark" : "light" ; {/*---previous code setTheme("dark") : setTheme("light")}----*/}
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <div className="flex mr-4" style={{marginLeft:"30px"}}>
             <img className="h-[30px] w-[30px]" onClick={()=>{togglemode()}} src={theme=="light"? Dark_mode : Light_mode }  ></img>
            </div>
           

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray dark:text-white'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 dark:text-white'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import DefaultButton from './DefaultButton.jsx';
import { NavLink } from "react-router-dom";
// import Link from 'next/link';


function Navigation() {
    return (
        <Navbar fluid rounded className='px-10 font-custom bg-white xl:px-20'>
            <NavbarBrand>
                <h1 className="mr-3 mt-3 h-6 sm:h-9 text-primaryTextDark font-bold"> Adewale O. Obadina </h1>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className='m-4 font-bold'>
                <NavLink to="/" exact className='mt-3 text-primaryTextDark' > Home</NavLink>
                <NavLink to="/about" className='mt-3 text-primaryTextDark'> About </NavLink>
                <NavLink to="/reasearch" className='mt-3 text-primaryTextDark'> Research </NavLink>
                <NavLink to="/publication" className='mt-3 text-primaryTextDark'> Publication </NavLink>
                <DefaultButton className={'bg-white w-full text-green-500 border-green-400 border-2 border-solid rounded-lg'} buttonText={'Contact'} />
            </NavbarCollapse>
        </Navbar>
    );
}

export default Navigation;
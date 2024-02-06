import { Navbar, NavbarBrand, NavbarLink, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import DefaultButton from './DefaultButton.jsx';


function Navigation() {
    return (
        <Navbar fluid rounded className='px-10 font-custom bg-white xl:px-20'>
            <NavbarBrand>
                <h1 className="mr-3 mt-3 h-6 sm:h-9 text-primaryTextDark font-bold"> Adewale O. Obadina </h1>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className='m-4 font-bold'>
                <NavbarLink href="#" active className='mt-3 text-primaryTextDark'> Home </NavbarLink>
                <NavbarLink href="#" className='mt-3 pr-9 text-primaryTextDark' > About </NavbarLink>
                <NavbarLink href="#" className='mt-3 pr-4 text-primaryTextDark'> Research </NavbarLink>
                <NavbarLink href="#" className='mt-3 pr-3 text-primaryTextDark'> Publication </NavbarLink>
                <DefaultButton className={'bg-white w-full text-green-500 border-green-400 border-2 border-solid rounded-lg'} buttonText={'Contact'} />
            </NavbarCollapse>
        </Navbar>
    );
}

export default Navigation;
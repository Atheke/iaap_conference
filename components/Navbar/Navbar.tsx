"use client";
import {useState} from 'react';
import Link from 'next/link';

const Navbar = () =>{

	 const [isOpen, setIsOpen] = useState(false);

	 const toggleMenu = () => setIsOpen(!isOpen);

	 return(
		<nav className="relative">

				<div className="sm:hidden text-lg p-2.5">
					  <button onClick={toggleMenu}>
							 &#9776;
						</button>
				</div>

				<div 
				 className={`${
		    isOpen ? "flex flex-col" : "hidden"
				} z-10 fixed top-0 bottom-0 right-0 w-2/5 bg-gray-900 px-7 py-10 gap-10 sm:static sm:h-auto sm:w-auto sm:bg-white sm:flex sm:space-x-20 sm:space-y-0 text-lg text-white sm:text-black sm:py-0 sm:px-0 sm:text-base`}>

					<div className="sm:hidden flex flex-row justify-end items-end">
						<button className={`${isOpen ? "block" : "hidden"} text-2xl font-bold`} onClick = {toggleMenu}>x</button>
					</div>
						
						<Link href={'/'} className="truncate font-semibold">Home</Link>
						<Link href={'/about'} className="truncate font-semibold">About Us</Link>
						<Link href={'/notify'} 
						className="truncate font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent animate-blink">Notification</Link>
	
				</div>
      </nav>

	 );
}

export default Navbar;

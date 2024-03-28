import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Navbar.css'; // Assume you have a separate CSS file for styling

function Navbar() {
    const [activeItem, setActiveItem] = useState('Home');

    const handleClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="xl:flex xl:flex-row justify-around items-center border-b h-[80px] m-auto  max-w-screen-xl ">
            <div>
                <Link to='/'>
                    <div className=" btn bg-blue-300 w-36 h- text-center rounded-xl pt-1">
                        <h1 className="text-2xl">
                            <span className="text-red-500 text-4xl">B</span>ook<span className="text-red-500 text-4xl">√</span>ibe </h1>
                        <h1></h1>
                    </div>
                </Link>
                
            </div>
            <div>
                <nav>
                    <ul className="xl:flex xl:flex-row text-center" >
                        <li className="">
                            <Link to='/'>
                                <button
                                    className={activeItem === 'Home' ? 'active' : ''}
                                    onClick={() => handleClick('Home') }>
                                    Home
                                </button>
                            </Link>

                        </li>
                        <li>

                            <Link to="/listedBooks" >
                                <button
                                    className={activeItem === 'About' ? 'active' : ''}
                                    onClick={() => handleClick('About')}>
                                    Listed Books
                                </button>
                            </Link>

                        </li>
                        <li>
                            <Link to="/chart">
                                <button
                                    className={activeItem === 'Services' ? 'active' : ''}
                                    onClick={() => handleClick('Services')}
                                >
                                    Pages To Read
                                </button>
                            </Link>

                        </li>

                    </ul>
                </nav>
            </div>
            <div className="">
                <button className="btn btn-active m-12 bg-[#23BE0A] w-[116px] h-[50px] rounded-xl text-white">Log In</button>
                <button className="btn btn-active bg-[#59C6D2] w-[116px] h-[50px] rounded-xl text-white">Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;

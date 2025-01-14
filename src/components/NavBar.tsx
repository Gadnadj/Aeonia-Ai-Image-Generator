import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo_icon.svg';
import CreditStar from '../assets/credit_star.svg';
import ProfileIcon from '../assets/profile_icon.png';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const NavBar = () => {

    const { user } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-4 bg-orange-100 px-4 sm:px-10 md:px-14 lg:px-28 '>
            <Link to='/' className='flex items-center gap-3'>
                <img src={Logo} alt="w-28 sm:w-32 lg:w-40" />
                <p className='font-Outfit text-3xl'>Aeonia</p>
            </Link>

            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={() => navigate('/buy-credit')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-5' src={CreditStar} alt="" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit left : 50</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, Gad</p>
                        <div className='relative group'>
                            <img className='w-10 drop-shadow' src={ProfileIcon} alt="" />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <p onClick={() => navigate('/buy-credit')} className='cursor-pointer'>Pricing</p>
                        <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
                    </div>
                }
            </div>

        </div >
    );
};

export default NavBar;
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo_icon.svg';
import { useState } from 'react';

const NavBar = () => {

    const [user, setUser] = useState();
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <img src={Logo} alt="w-28 sm:w-32 lg:w-40" />
            </Link>

            <div>
                {user ?
                    <div></div>
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
import React from 'react';
import { assets } from '../assets/assets';

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='flex items-center justify-between gap-4 py-3 mt-20 px-4 sm:px-10 md:px-14 lg:px-28 bg-teal-50'>
            <img src={assets.logo_icon} width={30} />

            <h2 className='text-xl md:text-2xl lg:text-3xl max-sm:hidden'>Aeonia</h2>

            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>©Copyright Aeonia | All right reserved. </p>

            <div className='flex items-center gap-2.5'>
                <img src={assets.facebook_icon} alt="" width={35} />
                <img src={assets.twitter_icon} alt="" width={35} />
                <img src={assets.instagram_icon} alt="" width={35} />
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { assets } from '../assets/assets';

type Props = {}

const GenerateButton = (props: Props) => {
    return (
        <div className='pb-16 text-center'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>
                See the magic. Try now
            </h1>

            <button className='inline-flex items-center gap-2 bg-black text-white rounded-full px-12 py-3 m-auto hover:scale-105 transition-all duration-500'>
                Generate Images
                <img className='h-6'
                    src={assets.star_group} alt="" />
            </button>
        </div>
    );
};

export default GenerateButton;
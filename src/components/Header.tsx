import StarIcon from '../assets/star_icon.svg';
import StarGroup from '../assets/star_group.png';
import { useNavigate } from 'react-router-dom';
import SampleImage1 from '../assets/sample_img_1.png';
import SampleImage2 from '../assets/sample_img_2.png';



type Props = {}

const Header = (props: Props) => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center text-center my-20'>
            <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 shadow-lg shadow-gray-200'>
                <p>
                    Best text to image generator
                </p>
                <img src={StarIcon} alt="" />
            </div>

            <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
                Turn text to <span className='text-blue-600'>image</span>, in seconds.
            </h1>

            <p className='text-center max-w-xl mx-auto mt-5 text-sm sm:text-lg'>Uleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>

            <button className='sm-text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full' onClick={() => navigate('/')}>
                Generate Images
                <img className='h-6' src={StarGroup} alt="" />
            </button>

            <div className='flex flex-wrap justify-center mt-8 gap-3'>
                {Array(6).fill('').map((item, index) => (
                    <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 lg:size-[120px]'
                        src={index % 2 === 0 ? SampleImage2 : SampleImage1}
                        alt="" key={index} width={70} />
                ))}
            </div>

            <p className='mt-4 text-neutral-600'>Generated images from Aeonia</p>

        </div>
    );
};

export default Header;
import StarIcon from '../assets/star_icon.svg';

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center text-center my-20'>
            <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
                <p>
                    Best text to image generator
                </p>
                <img src={StarIcon} alt="" />
            </div>
        </div>
    );
};

export default Header;
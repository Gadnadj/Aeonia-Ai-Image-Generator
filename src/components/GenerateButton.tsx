import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const GenerateButton = () => {

    const navigate = useNavigate();
    const { user, setShowLogin } = useContext(AppContext);


    const onClickHandler = () => {
        if (user) {
            navigate('/result');
        }
        else {
            setShowLogin(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='pb-16 text-center'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>
                See the magic. Try now
            </h1>

            <button
                onClick={onClickHandler}
                className='inline-flex items-center gap-2 bg-black text-white rounded-full px-12 py-3 m-auto hover:scale-105 transition-all duration-500'>
                Generate Images
                <img className='h-6'
                    src={assets.star_group} alt="" />
            </button>
        </motion.div>
    );
};

export default GenerateButton;
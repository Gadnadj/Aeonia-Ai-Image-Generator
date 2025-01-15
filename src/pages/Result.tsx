import { FormEvent, useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';


const Result = () => {

    const [image, setImage] = useState<Object>(assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const { generateImage } = useContext(AppContext);

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (input) {
            const image = await generateImage(input);
            if (image) {
                setIsImageLoaded(true);
                setImage(image);
            }
        }
        setLoading(false);
    };

    console.log(input);

    return (
        <motion.form
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmitHandler} className='flex flex-col min-h-[79.7vh] justify-center items-center'>
            <div>
                <div className='relative'>
                    <img className='max-w-sm rounded'
                        src={image.toString()} alt="" />
                    <span className={`absolute botton-0 left-0 h-1 bg-blue-500 
                        ${loading ? ' w-full transition-all duration-[10s]' : 'w-0'}`} />
                </div>

                <p className={!loading ? 'hidden' : ''}>Loading.....</p>
            </div>

            {!isImageLoaded && (
                <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 '
                        type="text"
                        placeholder='Describe what you want to generate' />

                    <button
                        className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
                        type='submit'>Generate
                    </button>
                </div>
            )}

            {isImageLoaded && (
                <div className='flex gap-2 flex-wrap justify-center items-center text-white text-sm p-0.5 mt-10 rounded-full'>
                    <p
                        onClick={() => { setIsImageLoaded(false); }}
                        className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>
                        Generate Another
                    </p>
                    <a
                        download
                        className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
                        href={image.toString()}>
                        Download
                    </a>
                </div>
            )}
        </motion.form>
    );
};

export default Result;
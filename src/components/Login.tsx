import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';


const Login = () => {

    const [state, setState] = useState<string>('Login');
    const { setShowLogin } = useContext(AppContext);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <motion.form
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='relative bg-white p-10 rounded-xl text-slate-500'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p className='text-sm text-center'>
                    {state === 'Login' ? 'Welcome back! Please sign in to continue' : 'Welcome in our website'}
                </p>

                {state !== 'Login' && (
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <input
                            className='outline-none text-sm'
                            type="text"
                            placeholder='Full Name'
                            required
                        />
                    </div>
                )}

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <input
                        className='outline-none text-sm'
                        type="email"
                        placeholder='Email'
                        required
                    />
                </div>

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <input
                        className='outline-none text-sm'
                        type="password"
                        placeholder='Password'
                        required
                    />
                </div>

                <p className='text-sm text-blue-600 my-4 cursor-pointer'>
                    {state === 'Login' ? 'Forgot Password?' : ''}
                </p>

                <button className='bg-blue-600 text-white w-full py-2 rounded-full'>
                    {state === 'Login' ? 'Login' : 'create account'}
                </button>

                {state === 'Login' ?
                    <p className='mt-5 text-center'>Don't have an account?{' '}
                        <span
                            onClick={() => setState('Sign up')}
                            className='text-blue-600 cursor-pointer'>
                            Sign Up
                        </span>
                    </p>
                    :
                    <p className='mt-5 text-center'>Already Have An Account?{' '}
                        <span
                            onClick={() => setState('Login')}
                            className='text-blue-600 cursor-pointer'>
                            Login
                        </span>
                    </p>}

                <img
                    onClick={() => setShowLogin(false)}
                    className='absolute top-5 right-5 cursor-pointer'
                    src={assets.cross_icon} />

            </motion.form>
        </div>
    );
};

export default Login;
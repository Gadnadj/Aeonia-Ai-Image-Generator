import { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const BuyCredit = () => {



    const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext);
    // min-h-[80.3vh] text-center pt-14 b-10 px-28

    const navigate = useNavigate();

    const initPay = async (order: Object) => {

    };

    const paymentRazorpay = async (planId: string) => {
        try {
            if (!user) {
                setShowLogin(true);
            }

            const { data } = await axios.post(backendUrl + '/api/user/pay-razor', { planId }, {
                headers: {
                    token
                }
            });

            if (data.success) {
                initPay(data.order);
            }

        }
        catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error('An unknown error occurred');
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={user ? 'min-h-[79.5vh] text-center pt-14 b-10 px-28' : 'min-h-[80.3vh] text-center pt-14 b-10 px-28'}>
            <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
            <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

            <div className='flex flex-wrap justify-center gap-6 text-left'>
                {plans.map((plan, index) => (
                    <div key={index} className='bg-white drop-shadow-xl border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
                        <img
                            width={40}
                            src={assets.logo_icon} alt="" />
                        <p className='mt-3 mb-1 font-semibold'>{plan.id}</p>
                        <p className='text-sm'>{plan.desc}</p>
                        <p className='mt-6'>
                            <span className='text-3xl font-medium'>${plan.price}</span> / {plan.credits} credits</p>
                        <button onClick={() => paymentRazorpay(plan.id)} className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>
                            {user ? 'Purchase' : 'Get Started'}
                        </button>
                    </div>
                ))}
            </div>

        </motion.div>
    );
};

export default BuyCredit;
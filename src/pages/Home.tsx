import Description from '../components/Description';
import GenerateButton from '../components/GenerateButton';
import Header from '../components/Header';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';

type Props = {}

const Home = (props: Props) => {
    return (
        <div className=' px-4 sm:px-10 md:px-14 lg:px-28'>
            <Header />
            <Steps />
            <Description />
            <Testimonials />
            <GenerateButton />
        </div>
    );
};

export default Home;
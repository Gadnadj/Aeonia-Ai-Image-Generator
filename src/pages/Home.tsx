import Header from '../components/Header';
import Steps from '../components/Steps';

type Props = {}

const Home = (props: Props) => {
    return (
        <div className=' px-4 sm:px-10 md:px-14 lg:px-28'>
            <Header />
            <Steps />
        </div>
    );
};

export default Home;
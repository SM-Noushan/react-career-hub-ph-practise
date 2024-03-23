import Banner from './banner/Banner';
import Category from './category/Category';
import Featured from './featured/Featured';

const Home = () => {
    return (
        <>
            <Banner />
            <div className="md:container mx-auto">
                <Category />
                <Featured />
            </div>
        </>
    );
};

export default Home;
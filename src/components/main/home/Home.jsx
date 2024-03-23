import Banner from './banner/Banner';
import Category from './category/Category';
import Featured from './featured/Featured';

const Home = () => {
    return (
        <>
            <Banner />
            <div className="md:container mx-auto xl:max-w-screen-xl">
                <Category />
                <Featured />
            </div>
        </>
    );
};

export default Home;
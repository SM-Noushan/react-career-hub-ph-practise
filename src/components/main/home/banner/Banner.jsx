import bannerImg from '../../../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="md:container xl:max-w-screen-xl mx-auto hero-content flex-col lg:flex-row-reverse py-0">
                <div className=''>
                    <img src={bannerImg} className="" />
                </div>
                <div className="w-3/4">
                    <h1 className="text-7xl font-extrabold leading-[85px]">One Step <br /> Closer To Your<br /> <span className="bg-gradient-to-r from-grad-01 to-grad-02 bg-clip-text text-transparent">Dream Job</span></h1>
                    <p className="py-6 max-w-lg text-dark-03 text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn bg-gradient-to-r from-grad-01 to-grad-02 text-white text-xl px-7">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
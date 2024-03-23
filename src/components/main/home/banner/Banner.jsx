import bannerImg from '../../../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="md:container mx-auto hero-content flex-col lg:flex-row-reverse py-0">
                <div className=''>
                    <img src={bannerImg} className="" />
                </div>
                <div className="">
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your<br /> <span className="bg-gradient-to-r from-grad-01 to-grad-02 bg-clip-text text-transparent">Dream Job</span></h1>
                    {/* (--Linear, linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)); */}
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
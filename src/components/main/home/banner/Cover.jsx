import bg1 from '../../../../assets/images/bg1.png';
import bg2 from '../../../../assets/images/bg2.png';
const Cover = ({ heading }) => {
    return (
        <>
            <div className="hero bg-base-200 relative">
                <div className="md:container xl:max-w-screen-xl mx-auto min-h-64 hero">
                    <h1 className="text-3xl font-extrabold pb-12">{heading}</h1>
                    <img className="absolute left-0 bottom-0" src={bg1} alt="bg-img" />
                </div>
            </div>
            <img className="absolute right-0 top-0" src={bg2} alt="bg-img" />
        </>
    );
};

export default Cover;
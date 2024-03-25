import salIcon from '../../../../assets/icons/money.png';
import locIcon from '../../../../assets/icons/location2.png'
import { Link } from 'react-router-dom';

const FeaturedCard = ({ data, type = 0 }) => {
    const { id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary } = data;
    return (
        <div className={`text-left max-w-screen-sm space-y-3 lg:space-y-5 rounded-xl ${type ? 'my-12' : 'border-l border-l-grad-01 shadow-xl p-6'}`}>
            <img src={logo} alt="company-logo" />
            <h2 className={`text-dark-02 ${type ? 'text-lg lg:text-2xl' : 'text-base lg:text-xl'} font-extrabold lg:pt-4`}>{job_title}</h2>
            <h3 className="text-dark-03 lg:text-xl font-semibold">{company_name}</h3>
            <div className="flex gap-4 *:rounded-md *:text-sm *:text-base *:px-5 *:py-2 *:border *:border-grad-01 *:bg-gradient-to-r *:from-grad-01 *:to-grad-02 *:bg-clip-text *:text-transparent *:font-extrabold">
                <button className="">{remote_or_onsite}</button>
                <button>{job_type}</button>
            </div>
            <div className={`flex ${type ? 'lg:gap-6' : 'gap-2'} *:flex *:gap-1.5 *:items-center`}>
                <div className='relative -left-1'>
                    <img src={locIcon} alt="money-icon" />
                    <p className={`text-dark-03 ${type ? 'text-base lg:text-xl' : 'text-sm lg:text-base'} font-semibold`}>{location}</p>
                </div>
                <div>
                    <img src={salIcon} alt="money-icon" />
                    <p className={`text-dark-03 ${type ? 'text-base lg:text-xl' : 'text-sm lg:text-base'} font-semibold`}>Salary: {salary}</p>
                </div>
            </div>
            <Link to={`/job-details/${id}`}>
                <button className="btn bg-gradient-to-r from-grad-01 to-grad-02 text-white text-xl px-7 mt-5">View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedCard;
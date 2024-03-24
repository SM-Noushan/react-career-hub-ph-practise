import salIcon from '../../../assets/icons/money.png';
import locIcon from '../../../assets/icons/location2.png';
import { Link } from 'react-router-dom';
const AppliedJobCard = ({ data }) => {
    const { id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary } = data;
    return (
        <div className="my-12 grid grid-cols-12 items-center gap-6 p-7">
            <div className="col-span-2 bg-[#F4F4F4] h-full flex items-center justify-center rounded-md">
                <img className="" src={logo} alt="company-logo" />
            </div>
            <div className='col-span-8 space-y-2 py-2'>
                <h2 className="text-dark-02 text-2xl font-extrabold">{job_title}</h2>
                <h3 className="text-dark-03 text-xl font-semibold">{company_name}</h3>
                <div className="flex gap-4 *:rounded-md *:px-5 *:py-2 *:border *:border-grad-01 *:bg-gradient-to-r *:from-grad-01 *:to-grad-02 *:bg-clip-text *:text-transparent *:font-extrabold">
                    <button className="">{remote_or_onsite}</button>
                    <button>{job_type}</button>
                </div>
                <div className="flex gap-6 *:flex *:gap-1.5 *:items-center pt-2">
                    <div className='relative -left-1'>
                        <img src={locIcon} alt="money-icon" />
                        <p className="text-dark-03 text-xl font-semibold">{location}</p>
                    </div>
                    <div>
                        <img src={salIcon} alt="money-icon" />
                        <p className="text-dark-03 text-xl font-semibold">Salary: {salary}</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <Link to={`/job-details/${id}`} className="col-span-2">
                <button className="btn bg-gradient-to-r from-grad-01 to-grad-02 text-white text-xl px-7 mt-5">View Details</button>
            </Link>
        </div>
    );
};

export default AppliedJobCard;
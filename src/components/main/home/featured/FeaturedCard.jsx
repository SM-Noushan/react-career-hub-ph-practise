import salIcon from '../../../../assets/icons/money.png';
import locIcon from '../../../../assets/icons/location2.png'

const FeaturedCard = ({ data }) => {
    const { logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary } = data;
    return (
        <div className="text-left">
            <img src={logo} alt="company-logo" />
            <h2>{job_title}</h2>
            <h3>{company_name}</h3>
            <div className="flex">
                <button>{remote_or_onsite}</button>
                <button>{job_type}</button>
            </div>
            <div className="flex gap-12 *:flex *:gap-1 *:items-center">
                <div>
                    <img src={locIcon} alt="money-icon" />
                    <p>{location}</p>
                </div>
                <div>
                    <img src={salIcon} alt="money-icon" />
                    <p>Salary: {salary}</p>
                </div>
            </div>
            <button>View</button>
        </div>
    );
};

export default FeaturedCard;
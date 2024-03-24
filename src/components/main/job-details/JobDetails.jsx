import { useLoaderData, useParams } from "react-router-dom";
import Cover from "../home/banner/Cover";
import salIcon from "../../../assets/icons/money.png";
import calIcon from "../../../assets/icons/calendar.png";
import phIcon from "../../../assets/icons/phone.png";
import mailIcon from "../../../assets/icons/email.png";
import locIcon from "../../../assets/icons/location2.png";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id);
    const { job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,
        contact_information: { phone, email, address } } = job;
    return (
        <>
            <Cover heading="Job Details" />
            <div className="md:container xl:max-w-screen-xl mx-auto grid grid-cols-6 gap-6 my-24">
                <div className="col-span-4 font-extrabold text-justify space-y-4">
                    <p>Job Description: <span className="text-dark-03 font-medium">{job_description}</span></p>
                    <p>Job Responsibility: <span className="text-dark-03 font-medium">{job_responsibility}</span></p>
                    <p>Educational Requirements: <br /> <span className="text-dark-03 font-medium">{educational_requirements}</span></p>
                    <p>Experiences: <br /> <span className="text-dark-03 font-medium">{experiences}</span></p>
                </div>
                <div className="col-span-2">
                    <div className="rounded-xl bg-[linear-gradient(90deg,rgba(126,144,254,0.10)0%,rgba(152,115,255,0.10)100%)] p-8 text-xl">
                        <h1 className="font-extrabold">Job Details</h1>
                        <div className="divider my-4 opacity-50 h-0.5 bg-[linear-gradient(90deg,rgba(126,144,254,0.20)0%,rgba(152,115,255,0.20)100%)]"></div>
                        <div className="flex items-center gap-1 text-dark-02 my-2">
                            <img src={salIcon} alt="money-icon" />
                            <p className="font-bold">Salary<span className="font-extrabold">:</span></p>
                            <p className="text-dark-03 font-medium">{salary} (Per Month)</p>
                        </div>
                        <div className="flex items-start gap-1 text-dark-02">
                            <img src={calIcon} alt="job-icon" />
                            <p className="font-bold">Job Title<span className="font-extrabold">:</span> <span className="text-dark-03 font-medium">{job_title}</span></p>
                        </div>
                        <h1 className="font-extrabold mt-6">Contact Information</h1>
                        <div className="divider my-4 opacity-50 h-0.5 bg-[linear-gradient(90deg,rgba(126,144,254,0.20)0%,rgba(152,115,255,0.20)100%)]"></div>
                        <div className="flex items-center gap-1 text-dark-02">
                            <img src={phIcon} alt="phone-icon" />
                            <p className="font-bold">Phone<span className="font-extrabold">:</span></p>
                            <p className="text-dark-03 font-medium">{phone}</p>
                        </div>
                        <div className="flex items-center gap-1 text-dark-02 my-2">
                            <img src={mailIcon} alt="mail-icon" />
                            <p className="font-bold">Email<span className="font-extrabold">:</span></p>
                            <p className="text-dark-03 font-medium">{email}</p>
                        </div>
                        <div className="flex items-start gap-1 text-dark-02">
                            <img src={locIcon} alt="address-icon" />
                            <p className="font-bold">Address<span className="font-extrabold">:</span> <span className="text-dark-03 font-medium">{address}</span></p>
                        </div>
                    </div>
                    <button className="btn bg-gradient-to-r from-grad-01 to-grad-02 text-white text-xl font-extrabold px-7 mt-6 w-full"> Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default JobDetails;
import { useLoaderData } from "react-router-dom";
import Cover from "../home/banner/Cover";
import { useEffect, useState } from "react";
import { loadAppliedJobs } from "../../../utility/localStorage";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filteredAppliedJobs, setFilteredAppliedJobs] = useState(appliedJobs);
    const jobs = useLoaderData();
    useEffect(() => {
        const appliedJobsId = loadAppliedJobs();
        // console.log(appliedJobsId);
        if (appliedJobsId.length) {
            const appliedJobsData = jobs.filter(job => appliedJobsId.includes(((job.id).toString())));
            setAppliedJobs(appliedJobsData);
            setFilteredAppliedJobs(appliedJobsData);
        }
    }, [jobs])
    const handleFilterData = filterType => {
        if (filterType === 'all') {
            return setFilteredAppliedJobs(appliedJobs);
        }
        const filteredData = appliedJobs.filter(job => job.remote_or_onsite.toLowerCase() === filterType);
        setFilteredAppliedJobs(filteredData);
    }
    return (
        <>
            <Cover heading="Applied Jobs" />
            <div className="md:container xl:max-w-screen-xl mx-auto my-24">
                <div className="text-right">
                    <div className="dropdown dropdown-bottom dropdown-left ">
                        <div tabIndex={0} role="button" className="btn m-1">Filter By</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 *:font-semibold">
                            <li><button onClick={() => handleFilterData('all')}>All</button></li>
                            <li><button onClick={() => handleFilterData('onsite')}>Onsite</button></li>
                            <li><button onClick={() => handleFilterData('remote')}>Remote</button></li>
                        </ul>
                    </div>
                </div>
                {
                    filteredAppliedJobs.length ? filteredAppliedJobs.map(appliedJob => <AppliedJobCard key={appliedJob.id} data={appliedJob} />) :
                        <div role="alert" className="alert bg-grad-02 text-white min-h-32 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="text-3xl font-bold">No list found. Please apply first.</span>
                        </div>
                }
            </div>
        </>
    );
};

export default AppliedJobs;
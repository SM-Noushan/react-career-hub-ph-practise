import { useLoaderData } from "react-router-dom";
import Cover from "../home/banner/Cover";
import { useEffect, useState } from "react";
import { loadAppliedJobs } from "../../../utility/localStorage";
import AppliedJobCard from "./AppliedJobCard";
import { RxDropdownMenu } from "react-icons/rx";
import { BsGrid1X2, BsListUl } from "react-icons/bs";
import FeaturedCard from "../home/featured/FeaturedCard";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filteredAppliedJobs, setFilteredAppliedJobs] = useState(appliedJobs);
    const [viewState, setViewState] = useState(1); //1=List, 2=grid
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
            <div className="max-w-[425px] md:container xl:max-w-screen-xl mx-auto px-2 my-24">
                <div className="flex justify-end items-center gap-4">
                    <div className="dropdown drop-shadow-sm dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Filter By <RxDropdownMenu /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 *:font-semibold">
                            <li><button onClick={() => handleFilterData('all')}>All</button></li>
                            <li><button onClick={() => handleFilterData('onsite')}>Onsite</button></li>
                            <li><button onClick={() => handleFilterData('remote')}>Remote</button></li>
                        </ul>
                    </div>
                    <button onClick={() => setViewState(0)} className={`btn ${!viewState ? 'bg-grad-01 hover:bg-grad-02 text-white' : ''} text-2xl`}><BsGrid1X2 /></button>
                    <button onClick={() => setViewState(1)} className={`btn ${viewState ? 'bg-grad-01 hover:bg-grad-02 text-white' : ''} text-2xl`}><BsListUl /></button>
                </div>
                {
                    filteredAppliedJobs.length ? viewState ? filteredAppliedJobs.map(appliedJob => <AppliedJobCard key={appliedJob.id} data={appliedJob} />)
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
                            {filteredAppliedJobs.map(appliedJob => <FeaturedCard key={appliedJob.id} data={appliedJob} />)}
                        </div>
                        :
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
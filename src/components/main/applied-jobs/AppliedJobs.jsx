import { useLoaderData } from "react-router-dom";
import Cover from "../home/banner/Cover";
import { useEffect, useState } from "react";
import { loadAppliedJobs } from "../../../utility/localStorage";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const appliedJobsId = loadAppliedJobs();
        // console.log(appliedJobsId);
        if (appliedJobsId.length) {
            const appliedJobsData = jobs.filter(job => appliedJobsId.includes(((job.id).toString())));
            setAppliedJobs(appliedJobsData);
        }
    }, [jobs])
    return (
        <>
            <Cover heading="Applied Jobs" />
            <div className="md:container xl:max-w-screen-xl mx-auto my-24">
                {
                    appliedJobs.map(appliedJob => <AppliedJobCard key={appliedJob.id} data={appliedJob} />)
                }
            </div>
        </>
    );
};

export default AppliedJobs;
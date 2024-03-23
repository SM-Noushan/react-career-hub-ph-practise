import { useEffect, useState } from "react";
import SectionInfo from "../section-info/SectionInfo";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('./data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const title = 'Featured Jobs';
    const desc = 'Explore thousands of job opportunities with all the information you need. Its your future';
    return (
        <section>
            <SectionInfo title={title} desc={desc} />
            <div className="grid grid-cols-2 gap-6">
                {jobs.slice(0, dataLength).map(job => <FeaturedCard key={job.id} data={job} />)}
            </div>
            <div className={`text-center ${jobs.length === dataLength && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-grad-01 to-grad-02 text-white">See All Jobs</button>
            </div>

        </section>
    );
};

export default Featured;
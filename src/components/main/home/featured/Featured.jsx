import { useEffect, useState } from "react";
import SectionInfo from "../section-info/SectionInfo";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('./data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const title = 'Featured Jobs';
    const desc = 'Explore thousands of job opportunities with all the information you need. Its your future';
    return (
        <div>
            <SectionInfo title={title} desc={desc} />
            <div className="grid grid-cols-2 gap-12">
                {jobs.map(job => <FeaturedCard key={job.id} data={job} />)}
            </div>
        </div>
    );
};

export default Featured;
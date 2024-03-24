const loadAppliedJobs = () => {
    const data = localStorage.getItem('job-applications');
    if (data)
        return JSON.parse(data);
    return [];
}

const storeAppliedJob = id => {
    const data = loadAppliedJobs();
    const exists = data.find(job => job == id);
    if (!exists) {
        data.push(id);
        localStorage.setItem('job-applications', JSON.stringify(data));
        return 1;
    }
    return 0;
}
export { loadAppliedJobs, storeAppliedJob }
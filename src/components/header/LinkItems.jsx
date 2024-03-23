import { NavLink } from "react-router-dom";

const LinkItems = () => {
    return (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            {/* <li><NavLink>Statistics</NavLink></li> */}
            <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
        </>
    );
};

export default LinkItems;
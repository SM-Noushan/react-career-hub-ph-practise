import { NavLink } from "react-router-dom";
const inActiveStyle = 'text-base text-dark-03 font-medium';
const textStyle = 'bg-gradient-to-r from-grad-01 to-grad-02 bg-clip-text text-transparent font-bold';
const LinkItems = () => {
    return (
        <>
            <li className=""><NavLink to="/" className={({ isActive }) =>
                isActive ? `${textStyle} focus:bg-gradient-to-r focus:from-grad-01 focus:to-grad-02 focus:bg-clip-text focus:text-transparent text-base ` : inActiveStyle
            }>Home</NavLink></li>
            {/* <li><NavLink>Statistics</NavLink></li> */}
            <li><NavLink className={({ isActive }) =>
                isActive ? `${textStyle} focus:bg-gradient-to-r focus:from-grad-01 focus:to-grad-02 focus:bg-clip-text focus:text-transparent text-base ` : inActiveStyle
            } to="/applied-jobs">Applied Jobs</NavLink></li >
            <li><NavLink className={({ isActive }) =>
                isActive ? `${textStyle} focus:bg-gradient-to-r focus:from-grad-01 focus:to-grad-02 focus:bg-clip-text focus:text-transparent text-base ` : inActiveStyle
            } to="/blogs">Blogs</NavLink></li>
        </>
    );
};

export default LinkItems;
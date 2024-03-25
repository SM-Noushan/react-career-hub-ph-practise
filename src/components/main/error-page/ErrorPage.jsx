import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div role="alert" className="alert bg-error text-white flex flex-col md:flex-row rounded-none justify-center h-dvh">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-4xl font-bold">Oops! - 404 | No Page Found!</span>
            <Link to="/" className="">
                <button className="btn btn-lg bg-grad-01 hover:bg-grad-02 text-white text-lg lg:text-3xl">Return Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
import LinkItems from "./LinkItems";

const Header = () => {
    return (
        <nav className="bg-base-200">
            <div className="navbar md:container xl:max-w-screen-xl mx-auto px-0 py-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <LinkItems />
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-extrabold">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <LinkItems />
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-grad-01 to-grad-02 text-white text-xl font-extrabold px-7">Star Applying</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
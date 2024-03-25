const FooterLinks = ({ data }) => {
    const { heading, links } = data
    return (
        <nav className="w-32 md:w-auto mx-auto md:mx-0">
            <h6 className="footer-title font-medium text-white text-base lg:text-xl">{heading}</h6>
            {
                links.map((item, idx) => <a key={idx} className="link link-hover text-sm lg:text-base opacity-70 block">{item}</a>)
            }

        </nav>
    );
};

export default FooterLinks;
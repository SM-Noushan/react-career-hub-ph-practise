const FooterLinks = ({ data }) => {
    const { heading, links } = data
    return (
        <nav>
            <h6 className="footer-title font-medium text-white text-xl">{heading}</h6>
            {
                links.map((item, idx) => <a key={idx} className="link link-hover text-base opacity-70">{item}</a>)
            }
        </nav>
    );
};

export default FooterLinks;
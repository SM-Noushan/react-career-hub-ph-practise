import social from '../../assets/icons/social.png';
import FooterLinks from './FooterLinks';
const Footer = () => {
    const links = [
        {
            'id': 1,
            'heading': 'Company',
            'links': ['About us', 'Work', 'Latest News', 'Careers']
        },
        {
            'id': 2,
            'heading': 'Product',
            'links': ['Prototype', 'Plans & Pricing', 'Customers', 'Integrations']
        },
        {
            'id': 3,
            'heading': 'Support',
            'links': ['Help Desk', 'Sales', 'Become a Partner', 'Developers']
        },
        {
            'id': 4,
            'heading': 'Contact',
            'links': ['524 Broadway , NYC', '+1 777 - 978 - 5570']
        }
    ]
    return (
        <footer className="bg-dark-01 py-32 mt-24">
            <section className="md:container xl:max-w-screen-xl mx-auto text-white">
                <div className="footer">
                    <aside className="space-y-4">
                        <h1 className="text-3xl font-extrabold">CareerHub</h1>
                        <p className="max-w-72 opacity-70 text-base">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img className="hover:cursor-pointer" src={social} alt="social-log" />
                    </aside>
                    {
                        links.map(link => <FooterLinks key={link.id} data={link} />)
                    }
                </div>
                <div className="divider my-12 h-0.5 bg-[linear-gradient(90deg,rgba(126,144,254,0.20)0%,rgba(152,115,255,0.20)100%)]"></div>
                <div className="flex items-center justify-between *:opacity-40 font-inter text-sm">
                    <p>@2023 <span className="font-semibold">CareerHub</span>. All Rights Reserved</p>
                    <p>Powered by <span className="font-semibold">CareerHub</span></p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
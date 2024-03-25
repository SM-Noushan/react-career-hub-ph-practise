const SectionInfo = ({ title, desc }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl lg:text-4xl font-extrabold">{title}</h1>
            <p className="text-dark-03 text-sm lg:text-base font-medium my-4">{desc}</p>
        </div>
    );
};

export default SectionInfo;
const CategoryCard = ({ data }) => {
    const { logo,
        category_name,
        availability } = data;
    return (
        <div className="card card-compact bg-base-200 p-8 lg:p-10 rounded-lg w-fit">
            <div className="px-5 justify-start">
                <img className="" src={logo} alt="category-logo" />
            </div>
            <div className="card-body text-left">
                <h2 className="card-title text-base lg:text-xl font-extrabold">{category_name}</h2>
                <p className="text-dark-04 lg:text-base font-medium">{availability}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
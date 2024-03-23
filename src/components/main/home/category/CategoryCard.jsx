const CategoryCard = ({ data }) => {
    const { logo,
        category_name,
        availability } = data;
    return (
        <div className="card card-compact bg-base-100 w-fit">
            <div className="px-5 justify-start">
                <img className="" src={logo} alt="category-logo" />
            </div>
            <div className="card-body text-left">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
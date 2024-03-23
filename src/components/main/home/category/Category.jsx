import { useEffect, useState } from "react";
import SectionInfo from "../section-info/SectionInfo";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const title = 'Job Category';
    const desc = 'Explore thousands of job opportunities with all the information you need. Its your future';
    return (
        <div>
            <SectionInfo title={title} desc={desc} />
            <div className="flex flex-wrap justify-center gap-12">
                {categories.map(category => <CategoryCard key={category.id} data={category} />)}
            </div>
        </div>
    );
};

export default Category;
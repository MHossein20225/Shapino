import {getAllCategories} from "../../util/getAllCategories.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CategoryCard from "./CategoryCard.jsx";

export default function CategoriesSection() {
    const [categories, setCategories] = useState()
    useEffect(() => {
        async function fetchingCategories(){
            const allCategory = await getAllCategories()
            console.log(allCategory)
            setCategories(allCategory)
        }
        fetchingCategories()
    }, []);

    return(
        <section className="w-full mt-6">
            <div className="flex flex-col gap-9 max-w-7xl mx-auto px-4 bg-(--bg-secondary) w-full rounded-(--radius-md) py-6">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">دسته بندی ها</p>
                    <Link to="" className="text-blue-500 hover:underline">
                        مشاهده همه
                    </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {
                        categories && categories.map(items => (
                            <CategoryCard name={items.name} image={items.image} slug={items.slug}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchBar(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate()
    function searchForProducts(){
        navigate("/products?q="+search)
    }
    return (
        <>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="text"
                placeholder="جستجو برای محصولات..."
                className="w-72 xl:w-96 h-full outline-none bg-transparent px-2"
            />
            <button onClick={searchForProducts} className="w-2/10 h-12 bg-gray-300 cursor-pointer">جستجو</button>
        </>
    )
}
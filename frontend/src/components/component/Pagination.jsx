export default function Pagination({products, search}){
    return <div className="flex gap-2 mt-8 justify-center">
        {Array.from({ length: products.last_page }, (_, i) => (
            <button
                key={i}
                onClick={() => navigate(`/products?q=${search}&page=${i + 1}`)}
                className={products.current_page === i + 1 ? "bg-blue-600 text-white px-3 py-1 rounded" : "px-3 py-1 border rounded"}
            >
                {i + 1}
            </button>
        ))}
    </div>
}
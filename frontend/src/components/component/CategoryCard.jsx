export default function CategoryCard({image, name, slug}){
    return(
        <div className="flex flex-col items-center gap-3 bg-(--bg-secondary) px-4 py-3 rounded-(--radius-sm)">
            <div className="size-24 rounded-full bg-orange-200 p-2">
                <img className="w-full h-full object-contain" src={image} alt=""/>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-medium">{name}</p>
            <p className="text-xs text-gray-500">{slug}</p>
        </div>
    )
}
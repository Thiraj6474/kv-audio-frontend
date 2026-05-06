export default function ProductCard({ items }) {

    return (
        <div className="w-[300px] h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Image */}
            <img
                src={items.image?.[0]}
                alt={items.name}
                className="w-full h-[200px] object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-[400px]">

                {/* Name */}
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {items.name}
                </h2>

                {/* Category */}
                <p className="text-sm text-gray-500 mt-1 capitalize">
                    {items.category}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {items.description}
                </p>

                {/* Dimensions */}
                <p className="text-xs text-gray-400 mt-2">
                    Size: {items.dimentions}
                </p>

                {/* Price + Availability */}
                <div className="flex justify-between items-center mt-4">

                    <span className="text-xl font-bold text-[#15cdb0]">
                        Rs. {items.price}
                    </span>

                    <span className={`text-sm px-2 py-1 rounded-full ${
                        items.availability
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                    }`}>
                        {items.availability ? "In Stock" : "Out of Stock"}
                    </span>
                </div>
                <div className="p-4 h-[100px]  border-t border-gray-200">

                

                {/* Button */}
                <button
                    className="mt-4 w-full bg-[#15cdb0] text-white py-2 rounded-lg hover:bg-[#13b39a] transition"
                >
                    View Details
                </button>
                </div>

            </div>
        </div>
    );
}
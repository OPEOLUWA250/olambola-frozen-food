export const ProductList = ({
  products,
  onEdit,
  onDelete,
  isLoading = false,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <th className="px-6 py-5 text-left text-white font-thin text-sm tracking-wide">
              PRODUCT
            </th>
            <th className="px-6 py-5 text-left text-white font-thin text-sm tracking-wide">
              CATEGORY
            </th>
            <th className="px-6 py-5 text-left text-white font-thin text-sm tracking-wide">
              WEIGHT/SIZE
            </th>
            <th className="px-6 py-5 text-right text-white font-thin text-sm tracking-wide">
              PRICE
            </th>
            <th className="px-6 py-5 text-center text-white font-thin text-sm tracking-wide">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-6 py-16 text-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-5xl mb-4 opacity-50">📦</span>
                  <p className="text-black text-lg font-thin mb-2">
                    No products yet
                  </p>
                  <p className="text-black text-opacity-60 font-thin">
                    Click "Add New Product" to get started
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr
                key={product.id}
                className={`hover:bg-blue-50 transition-all duration-200 ${
                  index % 2 === 0 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-slate-200 flex items-center justify-center text-2xl">
                        📦
                      </div>
                    )}
                    <div>
                      <p className="font-thin text-black text-base">
                        {product.name}
                      </p>
                      <p className="text-xs text-black text-opacity-50 line-clamp-1 font-thin">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="bg-gradient-to-r from-blue-100 to-blue-50 text-black px-3 py-1.5 rounded-lg text-xs font-thin border border-blue-200">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-black text-sm font-thin">
                  {product.kg || product.size ? (
                    <div className="space-y-1">
                      {product.kg && (
                        <div className="flex items-center gap-2 text-black">
                          <span className="text-base">⚖️</span>
                          <span className="font-thin">{product.kg}kg</span>
                        </div>
                      )}
                      {product.size && (
                        <div className="flex items-center gap-2 text-black">
                          <span className="text-base">📏</span>
                          <span className="font-thin">{product.size}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-black text-opacity-30">—</span>
                  )}
                </td>
                <td className="px-6 py-5 text-right">
                  <p className="font-thin text-black text-lg">
                    ₦{product.price.toLocaleString()}
                  </p>
                </td>
                <td className="px-6 py-5 text-center space-x-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-thin transition-all transform hover:scale-105 shadow-md inline-block"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-thin transition-all transform hover:scale-105 shadow-md disabled:opacity-50 inline-block"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

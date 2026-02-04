export const ProductList = ({
  products,
  onEdit,
  onDelete,
  isLoading = false,
}) => {
  return (
    <>
      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <span className="text-5xl mb-3 block opacity-50">📦</span>
            <p className="text-black text-base font-thin mb-2">
              No products yet
            </p>
            <p className="text-black text-opacity-60 font-thin text-xs">
              Click "Add New Product" to get started
            </p>
          </div>
        ) : (
          products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="flex gap-3 mb-3">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-slate-200 flex items-center justify-center text-2xl shrink-0">
                    📦
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-thin text-black text-sm truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-black text-opacity-50 line-clamp-1 font-thin">
                    {product.description}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 text-black px-2 py-0.5 rounded-lg text-xs font-thin border border-blue-200 mt-2">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                <div>
                  <p className="text-black text-opacity-60 font-thin">Price</p>
                  <p className="font-thin text-black">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-black text-opacity-60 font-thin">
                    Details
                  </p>
                  <div className="space-y-0.5">
                    {product.kg && (
                      <p className="font-thin text-xs text-black">
                        ⚖️ {product.kg}kg
                      </p>
                    )}
                    {product.size && (
                      <p className="font-thin text-xs text-black">
                        📏 {product.size}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(product)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-lg text-xs font-thin transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-1"
                >
                  <i className="fas fa-edit"></i>
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  disabled={isLoading}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-2 py-2 rounded-lg text-xs font-thin transition-all transform hover:scale-105 shadow-md disabled:opacity-50 flex items-center justify-center gap-1"
                >
                  <i className="fas fa-trash"></i>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-linear-to-r from-slate-900 to-slate-800 text-white">
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-left text-white font-thin text-xs sm:text-sm tracking-wide">
                PRODUCT
              </th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-left text-white font-thin text-xs sm:text-sm tracking-wide">
                CATEGORY
              </th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-left text-white font-thin text-xs sm:text-sm tracking-wide">
                WEIGHT/SIZE
              </th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-right text-white font-thin text-xs sm:text-sm tracking-wide">
                PRICE
              </th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-center text-white font-thin text-xs sm:text-sm tracking-wide">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-12 sm:py-16 md:py-20 text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-5xl sm:text-6xl mb-3 sm:mb-4 opacity-50">
                      📦
                    </span>
                    <p className="text-black text-base sm:text-lg font-thin mb-2">
                      No products yet
                    </p>
                    <p className="text-black text-opacity-60 font-thin text-xs sm:text-sm">
                      Click "Add New Product" to get started
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`hover:bg-blue-50 transition-all duration-200 animate-slide-up ${
                    index % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl object-cover border border-slate-200 shadow-sm hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-slate-200 flex items-center justify-center text-lg sm:text-2xl">
                          📦
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-thin text-black text-xs sm:text-sm md:text-base truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-black text-opacity-50 line-clamp-1 font-thin">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                    <span className="bg-linear-to-r from-blue-100 to-blue-50 text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-thin border border-blue-200 whitespace-nowrap">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-black text-xs sm:text-sm font-thin">
                    {product.kg || product.size ? (
                      <div className="space-y-1">
                        {product.kg && (
                          <div className="flex items-center gap-1 sm:gap-2 text-black">
                            <span className="text-sm sm:text-base">⚖️</span>
                            <span className="font-thin text-xs sm:text-sm">
                              {product.kg}kg
                            </span>
                          </div>
                        )}
                        {product.size && (
                          <div className="flex items-center gap-1 sm:gap-2 text-black">
                            <span className="text-sm sm:text-base">📏</span>
                            <span className="font-thin text-xs sm:text-sm">
                              {product.size}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-black text-opacity-30">—</span>
                    )}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-right">
                    <p className="font-thin text-black text-xs sm:text-sm md:text-lg whitespace-nowrap">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-center space-x-1 sm:space-x-2">
                    <button
                      onClick={() => onEdit(product)}
                      className="bg-green-600 hover:bg-green-700 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-thin transition-all transform hover:scale-105 shadow-md inline-flex items-center gap-1"
                    >
                      <i className="fas fa-edit"></i>
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => onDelete(product.id)}
                      disabled={isLoading}
                      className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-thin transition-all transform hover:scale-105 shadow-md disabled:opacity-50 inline-flex items-center gap-1"
                    >
                      <i className="fas fa-trash"></i>
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

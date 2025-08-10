export default function CompanyList({ companies, selected, onSelect, companyData }) {
    return (
        <div className="bg-gray-900 h-full overflow-y-auto p-4 border-r border-gray-800 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <h2 className="text-white text-lg font-bold mb-3 tracking-wide">Market Watch</h2>

            <div className="space-y-3">
                {companies.map((name) => {
                    const isActive = selected === name;
                    const data = companyData?.[name] || {};
                    const latestPrice = data.history?.[data.history.length - 1]?.price || 0;
                    const prevPrice = data.history?.[data.history.length - 2]?.price || latestPrice;
                    const change = latestPrice - prevPrice;
                    

                    return (
                        <button
                            key={name}
                            onClick={() => onSelect(name)}
                            className={`w-full flex justify-between items-center p-4 rounded-lg transition-all duration-200 shadow-md ${isActive
                                    ? "bg-gray-700 ring-2 ring-blue-500"
                                    : "bg-gray-800 hover:bg-gray-700 hover:shadow-lg"
                                }`}
                        >
                            <div className="flex flex-col">
                                <span className="text-white font-semibold">{name}</span>
                                <span className="text-sm text-gray-400"></span>
                                <span className="text-xs text-gray-500">
                                   
                                </span>
                            </div>
                            <div
                                className={`text-sm font-medium ${change >= 0 ? "text-green-400" : "text-red-400"
                                    }`}
                            >
                                
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

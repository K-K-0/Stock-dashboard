import { useEffect, useState } from "react";
import CompanyList from "./components/CompanyList";
import StockChart from "./components/StockChart";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [stockData, setStockData] = useState({});
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setStockData(data);
        setCompanies(Object.keys(data));
      });
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/5 scrollbar-custom overflow-y-auto h-full">
       <CompanyList companies={companies} onSelect={setSelectedCompany} />
      </div>
      <div className="flex-row w-4/5 bg-white">
        <StockChart
          company={selectedCompany}

          data={stockData[selectedCompany] || []}
        />
      </div>
    </div>
  );
}

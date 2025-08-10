import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function StockChart({ data, company }) {
    if (!data || data.length === 0) {
        return (
            <div className="text-gray-400 p-6 h-full bg-gray-900  shadow-lg text-center pt-100">
                Select a company to view chart
            </div>
        );
    }

    const prices = data.history.map((item) => item.price);
    const isUptrend = prices[prices.length - 1] >= prices[0];
    const currentPrice = prices[prices.length - 1];

    const chartData = {
        labels: data.history.map((item) => item.date),
        datasets: [
            {
                label: `${company} Price`,
                data: prices,
                borderColor: isUptrend ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)",
                backgroundColor: isUptrend
                    ? "rgba(34, 197, 94, 0.1)"
                    : "rgba(239, 68, 68, 0.1)",
                fill: true,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: isUptrend
                    ? "rgb(34, 197, 94)"
                    : "rgb(239, 68, 68)",
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: {
                    color: "rgba(255,255,255,0.05)",
                },
                ticks: {
                    color: "#ccc",
                },
            },
            y: {
                grid: {
                    color: "rgba(255,255,255,0.05)",
                },
                ticks: {
                    color: "#ccc",
                },
            },
        },
    };

    return (
        <div className="bg-gray-900 p-6  shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-lg font-bold text-white">{company}</h2>
                    <p
                        className={`text-xl font-bold ${isUptrend ? "text-green-400" : "text-red-400"
                            }`}
                    >
                        ${currentPrice}
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-green-900/30 border border-green-500 p-3 rounded-lg">
                        <h2 className="text-xs font-bold text-green-400">52-Week High</h2>
                        <p className="text-lg font-semibold text-green-300">{data.high52}</p>
                    </div>
                    <div className="bg-red-900/30 border border-red-500 p-3 rounded-lg">
                        <h2 className="text-xs font-bold text-red-400">52-Week Low</h2>
                        <p className="text-lg font-semibold text-red-300">{data.low52}</p>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-gray-800 p-4 rounded-lg">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

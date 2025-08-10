# 📊 Stock Market Dashboard

A clean, responsive **Stock Market Dashboard** built with **React**, **TailwindCSS**, and **Chart.js**.  
It displays a list of companies, their historical price data, and **52-week high/low** statistics — now with a **beautiful custom vertical slider** for smooth scrolling.

---

## 🚀 Features
- **Responsive UI** with a scrollable company list (left panel) and interactive chart (right panel).
- **Custom-styled vertical scrollbar** for a modern look.
- **Mock stock data** for 10+ companies stored locally in `data.json`.
- **Dynamic chart updates** using [Chart.js](https://www.chartjs.org/) when a company is selected.
- **52-week High & Low display** for quick market insight.
- Fast, minimal setup — frontend-only (no backend required).

---

## 🎨 Custom Vertical Slider
We replaced the default scrollbar with a sleek, minimal vertical slider for the company list.

```css
/* index.css or a global styles file */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0f172a; /* Dark background */
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #9ca3af, #6b7280);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #d1d5db, #9ca3af);
}


📂 Project Structure
stock-dashboard/
│── public/
│   └── data.json        # Mock stock data with high/low + history
│── src/
│   ├── components/
│   │   ├── CompanyList.jsx
│   │   └── StockChart.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── package.json

🛠️ Technologies Used
-React (Vite) – Component-based UI

-TailwindCSS – Fast and responsive styling

-Chart.js + react-chartjs-2 – Interactive charts


📦 Installation & Setup

# Clone this repository
git clone https://github.com/K-K-0/stock-dashboard.git

# Navigate into project
cd stock-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

💡 Development Approach

I focused on delivering a functional, clean, and visually appealing dashboard under time constraints by:

-Choosing a frontend-only architecture for faster development.

-Using mock JSON data to avoid API rate limits and simplify setup.

-Implementing Chart.js for smooth, interactive data visualization.

-Enhancing usability with 52-week high/low metrics for quick reference.

-Adding a custom vertical scrollbar to make scrolling smooth and visually appealing.

⚠️ Challenges Faced

-Designing a minimal but professional UI in a short time frame.

-Structuring mock data to support both chart rendering and statistics.

-Ensuring responsive layout for both desktop and mobile users.

-Styling the vertical scrollbar to match the dashboard theme.
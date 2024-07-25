// apiFunction.js
import React, { useEffect, useState } from 'react';

const apiKey = 'XK5W1L2RMWENAY0T'; // Tu clave de API

// Función genérica para fetch
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Componente principal
const ApiFunction = () => {
    const [realGdpData, setRealGdpData] = useState(null);
    const [cpiData, setCpiData] = useState(null);
    const [inflationData, setInflationData] = useState(null);
    const [ohlcvData, setOhlcvData] = useState(null);
    const [marketNewsData, setMarketNewsData] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            const realGdp = await fetchData(`https://www.alphavantage.co/query?function=REAL_GDP&apikey=${apiKey}`);
            setRealGdpData(realGdp);

            const cpi = await fetchData(`https://www.alphavantage.co/query?function=CPI&apikey=${apiKey}`);
            setCpiData(cpi);

            const inflation = await fetchData(`https://www.alphavantage.co/query?function=INFLATION&apikey=${apiKey}`);
            setInflationData(inflation);

            const symbol = 'IBM';
            const ohlcv = await fetchData(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
            setOhlcvData(ohlcv);

            const news = await fetchData(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${apiKey}`);
            setMarketNewsData(news);
        };

        fetchAllData();
    }, []);

    const renderRealGdp = () => {
        if (realGdpData && realGdpData.data && realGdpData.data.length > 0) {
            const latestGdp = realGdpData.data[0];
            return (
                <div>
                    <p><strong>Date:</strong> {latestGdp.date}</p>
                    <p><strong>Real GDP:</strong> {latestGdp.value}</p>
                </div>
            );
        }
        return <p>No data available</p>;
    };

    const renderCpi = () => {
        if (cpiData && cpiData.data && cpiData.data.length > 0) {
            const latestCpi = cpiData.data[0];
            return (
                <div>
                    <p><strong>Date:</strong> {latestCpi.date}</p>
                    <p><strong>CPI:</strong> {latestCpi.value}</p>
                </div>
            );
        }
        return <p>No data available</p>;
    };

    const renderInflation = () => {
        if (inflationData && inflationData.data && inflationData.data.length > 0) {
            const latestInflation = inflationData.data[0];
            return (
                <div>
                    <p><strong>Date:</strong> {latestInflation.date}</p>
                    <p><strong>Inflation:</strong> {latestInflation.value}</p>
                </div>
            );
        }
        return <p>No data available</p>;
    };

    const renderOhlcv = () => {
        if (ohlcvData && ohlcvData['Time Series (Daily)']) {
            const timeSeries = ohlcvData['Time Series (Daily)'];
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            let tableHtml = `
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            for (let date in timeSeries) {
                const ohlcv = timeSeries[date];
                const dateObj = new Date(date);
                if (dateObj.getMonth() === currentMonth && dateObj.getFullYear() === currentYear) {
                    tableHtml += `
                        <tr>
                            <td>${date}</td>
                            <td>${ohlcv['1. open']}</td>
                            <td>${ohlcv['2. high']}</td>
                            <td>${ohlcv['3. low']}</td>
                            <td>${ohlcv['4. close']}</td>
                            <td>${ohlcv['5. volume']}</td>
                        </tr>
                    `;
                }
            }

            tableHtml += '</tbody></table>';
            return <div dangerouslySetInnerHTML={{ __html: tableHtml }} />;
        }
        return <p>No data available</p>;
    };

    const renderMarketNews = () => {
        if (marketNewsData) {
            return <pre>{JSON.stringify(marketNewsData, null, 2)}</pre>; // Renderiza los datos de noticias como JSON para depuración
        }
        return <p>No data available</p>;
    };

    return (
        <div>
            <div className="section">
                <h2>Real GDP</h2>
                {renderRealGdp()}
            </div>
            <div className="section">
                <h2>Consumer Price Index (CPI)</h2>
                {renderCpi()}
            </div>
            <div className="section">
                <h2>Inflation</h2>
                {renderInflation()}
            </div>
            <div className="section full-width">
                <h2>OHLCV Data (Current Month)</h2>
                {renderOhlcv()}
            </div>
            <div className="section">
                <h2>Market News & Sentiment Data</h2>
                {renderMarketNews()}
            </div>
        </div>
    );
};

export default ApiFunction;

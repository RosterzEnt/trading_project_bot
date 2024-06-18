import "./Home.css"
    
    //'X-API-KEY':'0QVtcP1asLfGN4k7lsYFfgbX'
    //https://tonapi.nftscan.com/api/ton/statistics/ranking/trade?time=15m&sort_field=sales&sort_direction=desc
   


import React, { useEffect, useState } from 'react';

const NFTData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tonapi.nftscan.com/api/ton/statistics/ranking/trade?time=12h&sort_field=sales&sort_direction=desc', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-KEY':'0QVtcP1asLfGN4k7lsYFfgbX'
                        // Aggiungi altri headers se necessario
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result.data || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, ['https://tonapi.nftscan.com/api/ton/statistics/ranking/trade?time=12h&sort_field=sales&sort_direction=desc']);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore nel caricamento dei dati: {error.message}</p>;

    return (
        <div>
            {data.length > 0 ? (
                data.map(item => (
                    <div key={item.contract_address} className='nft_box'>
                        <h2>{item.contract_name}</h2>
                        <div>
                        <img src={item.logo_url} alt={item.contract_name} className='img'/>
                        </div>
                        <div>
                        <p>Lowest Price: {item.lowest_price}</p>
                        <p>Average Price: {item.average_price}</p>
                        <p>Highest Price: {item.highest_price}</p>
                        <p>Volume: {item.volume}</p> 
                        <p> Volume Change {item.volume_change}</p>
                        <p>Sales: {item.sales}</p>
                    
                        </div>
                        {/* Aggiungi altri campi se necessario */}
                    </div>
                ))
            ) : (
                <p>Nessun dato disponibile</p>
            )}
        </div>
    );
};

export default NFTData;
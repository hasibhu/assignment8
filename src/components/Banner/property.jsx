import React, { useEffect, useState } from 'react';
import PropertyDetailsCard from './PropertyDetailsCard';

const PropertyDetals = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('../../public/data.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // If data is still null, render a loading message or return null
    if (!data) {
        return <div>Loading...</div>;
    }

    // Render the properties when data is available
    return (
        <div>
            All Properties will be shown here
            <div >
                {data.map((property) => (
                    <PropertyDetailsCard key={property.id} data={property} />
                ))}
            </div>
        </div>
    );
};

export default PropertyDetals;
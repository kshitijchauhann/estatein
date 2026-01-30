export const fetchProperties = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/properties');
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

import { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);

    const getService = (id) => {
        return services.find(element => element.id == id);
    }

    return { services, setServices, getService };
};

export default useService;
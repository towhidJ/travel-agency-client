import { useEffect, useState } from "react";
const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch("https://macabre-vault-58838.herokuapp.com/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.events);
                setLoading(false);
            });
    }, []);

    return { events, loading };
};

export default useEvents;

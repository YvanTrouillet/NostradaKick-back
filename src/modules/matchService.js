const fetchMatch = async (journey) => {
    try {
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4334&r=${journey}&s=2024-2025`);
        const data = res.json();
        return data.events;
        
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default fetchMatch;
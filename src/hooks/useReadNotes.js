const { useState, useEffect } = require("react");

function useReadNotes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const noteList = [
            {
                id: 1,
                text: "Write post"
            },
            {
                id: 2,
                text: "Watch some video"
            },
        ]
        setNotes(noteList);
        setLoading(false);
    }, []);

    return [loading, notes, setNotes];
}

export default useReadNotes;
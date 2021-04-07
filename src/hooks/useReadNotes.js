import { db } from '../firebaseConfig'
const { useState, useEffect } = require("react");

function useReadNotes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const firebaseNotes = [];
        setLoading(true);
        db.collection("notes")
            .get()
            .then((querySnapshot) => {
                querySnapshot.docs.forEach((doc) => {
                    firebaseNotes.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setNotes(firebaseNotes);
                setLoading(false);
            });
    }, []);

    return [loading, notes, setNotes];
}

export default useReadNotes;
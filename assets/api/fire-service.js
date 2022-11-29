import { db } from '../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

const getEvent = async (eventId) => {
    try {
        const docRef = doc(db, "event", eventId);
        const actualDoc = await getDoc(docRef);

        if (actualDoc.exists()) {
            const document = actualDoc.data();
            console.log(document.location);
            return document;
        }
    }
    catch (error) {
        console.error(error);
    }
}

const getHighSchool = async (highSchoolId) => {
    try {
        const docRef = doc(db, "highSchool", highSchoolId);
        const actualDoc = await getDoc(docRef);

        if (actualDoc.exists()) {
            const document = actualDoc.data();
            return document;
        }
    } catch (error) {
        console.error(error);
    }
};

export { getEvent, getHighSchool }
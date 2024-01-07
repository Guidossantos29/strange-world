import { db } from "../firebase/config";
import { useState,useEffect } from "react";
import { 
    collection,
    query,
    orderBy,
    onSnapshot,
    where, 
    QuerySnapshot} from "firebase/firestore";

    useFetchDocumentes = (docCollection,search = null,uid = null) => {
        const [documents,setDocuments] =useState(null)
        const [error,setError] = useState(null)
        const [loading,setLoading] = useState(null)
        const [cancelled,setCancelled] = useState(false)


        useEffect(() => {
            async function loadData(){
                if(cancelled) return

                setLoading(true)
                
                const collectionRef = await collection(db,docCollection)

                try {
                    let q;
                    q = await query(collectionRef,orderBy('createAt','desc'))

                    await onSnapshot(q,(QuerySnapshot) => {
                        setDocuments(
                            querySnapshot.docs.map((doc => ({
                                id:doc.id,
                                ...doc.data(),
                            })))
                        )
                    })

                } catch(error) {
                   console.log(error);
                   setError(error.message) 
                }
            }
            loadData()
        },[docCollection,search,uid,cancelled])

        useEffect(() => {
            return () => setCancelled(true)
        },[])

        return { documents,loading,error };
    }



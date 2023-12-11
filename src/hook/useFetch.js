import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    console.log(data);

    useEffect(() =>{
        const getMovies =async() =>{
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error(response.statusText)
                }
                const result = await response.json();
                setLoading(false);
                setData(result)
            } catch (err) {
                setError(err.message);
                console.log(err.message);
            }

        }
        getMovies();
    },[url]);
  return {data,loading,error}
}

export default useFetch

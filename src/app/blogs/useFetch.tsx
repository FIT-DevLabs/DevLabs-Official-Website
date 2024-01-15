import {useState, useEffect} from "react";

const useFetch = (url:string) => {
    const [items, setData] = useState<any>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url);
          const json = await res.json();
          setData(json.data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
        
      };
      fetchData();
    }, [url]);
  
    return { items,loading, error };
  };
  
  export default useFetch;
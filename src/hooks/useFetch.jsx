import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT } from "../constants";
import { toast } from "react-toastify";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let { data } = await axios.get(`${ENDPOINT}${url}`);
        setData(data);
      } catch (err) {
        toast.error(err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

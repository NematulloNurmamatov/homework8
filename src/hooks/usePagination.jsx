import { Pagination } from "react-bootstrap";
import { ENDPOINT, PAGE_LIMIT } from "../constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const usePagination = (url, search) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get(
          `${ENDPOINT}${url}?q=${search}&_page=${page}&_limit=${PAGE_LIMIT}`
        );
        let { data: totalData } = await axios.get(
          `${ENDPOINT}${url}?q=${search}`
        );
        setData(data);
        setTotal(totalData.length);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
    console.log("useEffect");
  }, [url, search, page]);

  const getPage = (key) => {
    setPage(key);
  };

  const items = [];

  for (let i = 1; i <= Math.ceil(total / PAGE_LIMIT); i++) {
    items.push(
      <Pagination.Item key={i} onClick={() => getPage(i)} active={i === page}>
        {i}
      </Pagination.Item>
    );
  }

  let pagination = total > PAGE_LIMIT && <Pagination>{items}</Pagination>;

  return { data, total, loading, setPage, pagination };
};

export default usePagination;

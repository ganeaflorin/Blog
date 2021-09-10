import { useEffect, useState } from "react";
//fetch request to get the json data
//using timeout just to show off loading component, wouldn't normally use it here
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1250);

    return () => abortController.abort();
  }, [url]);
  return { data, isLoading, error };
}

export default useFetch;

import React from 'react';

const useFetch = () => {

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      if(response.ok === false) throw new Error("o fetch não foi feito")
    } catch (err) {
      json = null;
      setError(err.message)
    } finally {
      setData(json);
      setLoading(false);
      return {response, json}
    }
  },[])

  return {data, loading, error, request}
}

export default useFetch;
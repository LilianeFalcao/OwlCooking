import { useEffect, useState } from 'react'

export const useFetch = (urlBase) => {
  const [dados, setDados] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);

  const httpConfig = (dados, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados)
      });
      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod("DELETE");
      setItemId(dados);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(urlBase);
        if (!resp.ok) throw new Error("Erro ao carregar os dados");
        const data = await resp.json();
        setDados(data);
      } catch (error) {
        console.error(error.message);
        setError("Houve um erro ao carregar dados!");
      }
      setLoading(false);
    };

    fetchData();
  }, [urlBase, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      let data;

      if (method === "POST") {

        const resp = await fetch(urlBase, config);
        data = await resp.json();

        setDados((prevDados) => [...prevDados, data]);
        alert("deu certo")
      }
       else if (method === "DELETE") {
        const deleteUrl = `${urlBase}/${itemId}`;
        const resp = await fetch(deleteUrl, config);
        data = await resp.json();
        setDados((prevDados) => prevDados.filter((item) => item.id !== itemId));
      }

      setCallFetch(data);
    };

    if (config) {
      httpRequest();
    }
  }, [config, method, urlBase, itemId]);

  return { dados, httpConfig, loading, error };
};

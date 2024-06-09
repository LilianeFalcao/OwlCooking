import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  //refazendo o POST usando o custom hook
  const [config, setConfig ] = useState(null);
  const [method, setMethod ] = useState(null);
  const [callFecth, setCallFecth] = useState(false);

  //loading
  const [loading, setLoading] = useState(false);

  //tratamento de erros
  const [error, setError] = useState(null);
  //delete state id 
  const [itemId, setItemId] = useState(null);
  
  //função q faz a config
  const httpConfig = (dados, method) => {
    if(method === "POST"){
      setConfig({
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(dados)
      });

      setMethod(method);
    } else if(method === "DELETE"){
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json",
        },
      });

      setMethod(method);
      setItemId(dados);
    }
  }
  
  //effect pega os dados get
  useEffect(() =>{
    const fecthData = async() =>{ 
      //try catch com error
        setLoading(true);
        try {
          const resp = await fetch(url);
          const data = await resp.json();

          setDados(data);
          
        } catch (error) {
          console.log(error.message);
          setError("Houve um erro ao carregar dados!")
        }

        setLoading(false);
    };

    fecthData();

  }, [url, callFecth]);

  //refatorando fetch post

  useEffect(() =>{

   const httpRequest = async() =>{
    let data 

    if(method === "POST"){

      let fetchOptions = [url, config];

      const resp = await fetch(...fetchOptions);
      data = await resp.json();

    }else if(method === "DELETE"){  
      const deleteUrl = `${url}/${itemId}`

      const resp = await fetch(deleteUrl,config);
      data = await resp.json()
    }

    setCallFecth(data);
   }

   httpRequest();

  }, [config, method, url, itemId]);

  return {dados, httpConfig, loading, error};
};

import { useEffect, useState } from 'react'

export const useFetch = (URLReceitas) => {

  const [dados, setDados] = useState(null);

  //refazendo o POST usando o custom hook
  const [config, setConfig ] = useState(null);
  const [method, setMethod ] = useState(null);
  const [callFecth, setCallFecth] = useState(false);

  //loading
  const [loading, setLoanding] = useState(false);

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

      console.log("deu porra", dados)
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
        setLoanding(true);
        
        try {
          const resp = await fetch(URLReceitas);
          const data = await resp.json();

          setDados(data);
          
        } catch (error) {
          console.log(error.message);
          setError("Houve um erro ao carregar dados!")
        }

        setLoanding(false);
    };

    fecthData();

  }, [URLReceitas, callFecth]);

  //refatorando fetch post

  useEffect(() =>{

   const httpRequest = async() =>{
    let data 

    if(method === "POST"){

      let fetchOptions = [URLReceitas, config];

      const resp = await fetch(...fetchOptions);
      data = await resp.json();

    }else if(method === "DELETE"){  
      const deleteUrl = `${URLReceitas}/${itemId}`

      const resp = await fetch(deleteUrl,config);
      data = await resp.json()
    }

    setCallFecth(data);
   }

   httpRequest();

  }, [config, method, URLReceitas, itemId]);

  return {dados, httpConfig, loading, error};
};

import { useState,useEffect } from "react";
import React from "react";
import PokemonList from "./pokemonList"; 
import axios from "axios";
import Pagination from "./Pagination";


function App() {
  const [pokemon,setPokemon] = useState([]);
  const[currentPageUrl,setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const[nextPageUrl,setNextCurrentPageUrl] = useState()
  const[prevPageUrl,setPrevPageUrl] = useState()
  const [loading,setloadin] = useState(true)
  

  useEffect(()=>{
    setloadin(true)
    let cancel
axios.get(currentPageUrl).then(res=>{
  cancelToken:new axios.CancelToken(c=>cancel = c)
  setloadin(false)
setNextCurrentPageUrl(res.data.next)
setPrevPageUrl(res.data.previous)
setPokemon(res.data.results.map(p=>p.name))
})
return()=> cancel
  },[currentPageUrl])

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }
  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }
  

  if(loading)return"loading..."



  return (
    <div>
      <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
      gotoNextPage={gotoNextPage ? gotoNextPage : null}
      gotoPrevPage={gotoPrevPage ? gotoPrevPage :null}
      />
      </>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatches } from "../Redux/Matches/action";
import { MatchCard } from "./MatchCard";


export const MatchList = () => {
  const {isLoading,isError,matches} = useSelector(store=>store.MatchesReducer)
  const dispatch = useDispatch()
  const [page,setPage] = useState(1)
  const [order,setOrder] = useState(null)
  const [totalPage,setTotalPage] = useState(null)

  let  productParamsObj = {
    params:{
      _page:page,
      _limit:10,
      _order:order,
    },setTotalPage
   }
    useEffect(()=>{
      const id = setTimeout(() => {
        dispatch(getMatches(productParamsObj))
      }, 400);
      return(()=>clearTimeout(id))
    },[page,order])
  return isLoading ?<h1>Loading...</h1> : isError ?<h1>Something went wrong :</h1> :<div data-testid="match-list">{/* // Show matches here  */}
  
  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",textAlign:"center",gap:"20px"}}>
    
      {
        
        matches.map((match)=>(
          <MatchCard key={match.id} match={match}/>
        ))
    

        
      }
    </div>

  </div>;
};

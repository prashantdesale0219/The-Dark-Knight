// export const getMatches = () => {
//   // Complete the logic
// };

import axios from "axios"
import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes"

export  const getMatches=(productParamsObj)=>(dispatch)=>{
    dispatch({type:GET_MATCH_REQUEST})
    axios.get("http://localhost:8080/matches",{
      params:productParamsObj.params
    }).then(res=>{
      productParamsObj.setTotalPage(res.headers['x-total-count'])
      dispatch({type:GET_MATCH_SUCCESS,payload:res.data})
    }).catch(err=>dispatch({type:GET_MATCH_FAILURE}))
  }
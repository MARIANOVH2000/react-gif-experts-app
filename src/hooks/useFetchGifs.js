import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(category)=>{
    const [state,setState]=useState({
        data:[],
        loading:true
    });
    useEffect(()=>{
        getGifs(category)
        .then(img=>{
            //aqui el setTime Out
            setState({
                data:img,
                loading:false
            });
        })
    },[category]);
   

    
    return state;
}
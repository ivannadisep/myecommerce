import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext ();

const DataProvider = ({children}) => {
        const [data,sedData] = useState ([]);
        const [cart,setCart] = useState ([]);


        useEffect(()=>{
            axios("data.json").then((res)=>sedData(res.data));

        },[]);


    return <dataContext.Provider value={{data, cart, setCart}}> {children} </dataContext.Provider>;
    
};

export default DataProvider;
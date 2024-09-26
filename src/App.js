import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import Body from "./componenets/Body";
import "/src/index.css";

const root=ReactDOM.createRoot(document.getElementById("root"));


const AppLayout=()=>{
    return(
        <Body/>
    )
}

root.render(<AppLayout/>)

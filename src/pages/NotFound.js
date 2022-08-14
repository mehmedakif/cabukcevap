import React from "react";
import { useTheme } from "../context/ThemeContext"
import {Divider} from "antd"



function NotFound(){
    const {theme} = useTheme();
    return(
        <div className={`app ${theme}`}>
            <h1>
                404 NotFound
            </h1>
            <Divider/>
        </div> 
    )
}

export default NotFound;
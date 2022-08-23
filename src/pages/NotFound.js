import React from "react";
import { useTheme } from "../Context/ThemeContext"
import {Divider, Layout} from "antd"



function NotFound(){
    const {theme} = useTheme();
    return(
        <Layout.Content>
        <div className={`app ${theme}`}>
            <h1>
                404 NotFound
            </h1>
        </div>  
        </Layout.Content>

    )
}

export default NotFound;
import Header from "./Header";
import { useTheme } from "../context/ThemeContext"



function Container(){
    const {theme} = useTheme();

    return(
        <div className={`app ${theme}`}>
        <Header/>
        </div> 
    )
}

export default Container;
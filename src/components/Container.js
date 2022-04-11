import Header from "./Header";
import { useTheme } from "../context/ThemeContext"
import WordCard from "../components/word-card/WordCard"



function Container(){
    const {theme} = useTheme();

    return(
        <div className={`app ${theme}`}>
        <Header/>
        <WordCard/>
        </div> 
    )
}

export default Container;
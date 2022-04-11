import { useTheme } from "../context/ThemeContext";

function Header(){
    const {theme,setTheme} = useTheme();

    return(
        <div>
            Active Theme: {theme}
            <br/>
            <button onClick={()=> setTheme(theme === "light"? "dark":"light")}>
                Switch Theme
            </button>
        </div>
    )
}
export default Header;

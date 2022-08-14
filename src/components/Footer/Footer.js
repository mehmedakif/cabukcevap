import { useTheme } from "../../context/ThemeContext";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';

function Footer(){
    const {theme,setTheme} = useTheme();
    return(
        <div>
            {/* Active Theme: {theme} */}
            <br/>
            <div >
                <Button type="link">Home</Button>
            </div>

        </div>
    )
}
export default Footer;

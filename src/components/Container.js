import React,{ useEffect, useState } from "react";
import cardAPI from "../Api/CardAPI";
import { useTheme } from "../Context/ThemeContext"
import WordCard from "./Card/WordCard"
import {Row, Col, Layout} from "antd"



function Container(){
    const {theme} = useTheme('dark');
    const [paragraphs, setParagraphs] = useState([]);

    React.useEffect(() => {
        cardAPI.get("/paragraphs").then(response=>{setParagraphs(response.data)})
      }, []);


    function GetGrid (){
        var elements = []
        paragraphs.forEach(element => elements.push(
                <Col key={element.id}>
                    <WordCard
                        _paragraph={element.paragraph}
                        title={element.title} 
                        defaultSpeed={element.defaultSpeed}/>
                    <br></br>
                </Col>
            ));
        return(
            <Row justify="space-around" >
               {elements}
            </Row>
        )
    }


    return(
        <Layout.Content>
            {GetGrid()}
        </Layout.Content>
    )
}

export default Container;
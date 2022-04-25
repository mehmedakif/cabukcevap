import React,{ useEffect, useState } from "react";
import Header from "./Header";
import cardAPI from "../api/CardAPI";
import { useTheme } from "../context/ThemeContext"
import WordCard from "../components/word-card/WordCard"
import {Row, Col, Divider} from "antd"



function Container(){
    const {theme} = useTheme();
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
                </Col>
            ));
        return(
            <Row justify="space-around">
               {elements}
            </Row>
        )
    }


    return(
        <div className={`app ${theme}`}>
            <Header/>
            <Divider/>
            {GetGrid()}
        </div> 
    )
}

export default Container;
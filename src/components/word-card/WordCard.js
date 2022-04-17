import React, { useState, useEffect } from 'react';
import { Button, Slider, Card, Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import { useTheme } from "../../context/ThemeContext"

function WordCard(){
    const {theme} = useTheme();
    const [paragraph, setParagraph] = useState("İnsanoğlunun diğer varlıklardan (en azından şuanda bildiklerimizden) farkı nedir? Düşünmek. Düşüncelerimizi iyi bir biçimde birleştirmek. Bu yeteneği, memeli canlılara has olan gelişmiş neokorteksimizin ekstra olarak yetenekli olmasına borçluyuz. Bu sayesinde temel ihtiyaçlarımızı düşünmekle kalmayıp; geleceğimizi, gezegenimizi, insanlığın faydasını da düşünebilme yetisine sahibiz. Düşünebildiklerimizin neden ve sonuçlarını da bir çatı altında topluyoruz: Bilim.");
    const [wordArray, setWordArray] = useState([]);
    const [buttonType, setButtonType] = useState("primary");
    const [sliderStatus, setSliderStatus] = useState(false);
    const [speed, setSpeed] = useState(200);

    useEffect(() => {
        setWordArray(paragraph.toUpperCase().split(" "))
    },[]);

    const [iterator, setIterator] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
  
    const handleClick = () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIterator(0)
        setIntervalId(0);
        setSliderStatus(false)
        return;
      }
  
      const newIntervalId = setInterval(() => {
        setSliderStatus(true)
        setIterator(prevCount => prevCount + 1);
      }, speed);
      setIntervalId(newIntervalId);
      
    };
    
      
    return(
        <div>
          <Row justify="center">
            <Col span={4}>
              <Card 
                cover={<img alt="example" src="https://images.unsplash.com/photo-1635469564142-b328835d1187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80" />}
                title="Neokorteks" 
                extra={<a href="#">Paragraph</a>} 
                style={{ width: 320 }}>
                <div>

                    <Row justify="center">
                      <Col>
                      <div>
                        <h4>{wordArray[iterator]}</h4>
                      </div>
                      </Col>
                    </Row>
                    
                    <Button block
                      type={buttonType}
                      onClick={handleClick}>
                        {intervalId ? "STOP" : "START"}
                    </Button>

                    <Divider orientation="left">Speed</Divider>

                    <Row justify="space-between">
                    <Col flex="auto">
                        <Slider 
                          disabled={sliderStatus}
                          span={14}
                          defaultValue={speed} 
                          min={100} 
                          max={1500} 
                          onChange={(value)=> {
                              setSpeed(value)}}
                        />
                        </Col>
                      <Col span={4}>
                        <h4 >{speed}/wpm</h4>
                      </Col>
                    </Row>    
                </div>
              </Card>
            </Col>
          </Row> 
        </div> 
    )
}

export default WordCard;
import React, { useState, useEffect } from 'react';
import { Button, Slider, Card } from 'antd';
import 'antd/dist/antd.css';
import { useTheme } from "../../context/ThemeContext"

function WordCard(){
    const {theme} = useTheme();
    const [paragraph, setParagraph] = useState("İnsanoğlunun diğer varlıklardan (en azından şuanda bildiklerimizden) farkı nedir? Düşünmek. Düşüncelerimizi iyi bir biçimde birleştirmek. Bu yeteneği, memeli canlılara has olan gelişmiş neokorteksimizin ekstra olarak yetenekli olmasına borçluyuz. Bu sayesinde temel ihtiyaçlarımızı düşünmekle kalmayıp; geleceğimizi, gezegenimizi, insanlığın faydasını da düşünebilme yetisine sahibiz. Düşünebildiklerimizin neden ve sonuçlarını da bir çatı altında topluyoruz: Bilim.");
    const [wordArray, setWordArray] = useState([]);
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
        return;
      }
  
      const newIntervalId = setInterval(() => {
        setIterator(prevCount => prevCount + 1);
      }, speed);
      setIntervalId(newIntervalId);
    };
    
      
    return(
        <div>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <div>
                <h1>{wordArray[iterator]}</h1>
                <Button onClick={handleClick}>{intervalId ? "Revert counting" : "Start counting"}</Button>
                <Slider 
                    style={{marginLeft:200, marginRight:200}} 
                    defaultValue={speed} 
                    disabled={false} min={100} 
                    max={1500} 
                    onChange={(value)=> {
                        setSpeed(value)}}
                />
                <h1 style={{centered:true}}>{speed}</h1>
            </div>
            </Card>
            
        </div> 
    )
}

export default WordCard;
import React, { useState, useEffect } from 'react';
import { Button, Slider, Card, Row, Col, Divider, Modal } from 'antd';
import 'antd/dist/antd.min.css';
import PropTypes from "prop-types"
import "./WordCard.scss"

function WordCard({
      _paragraph, 
      defaultSpeed,
      title}){
    //const {theme} = useTheme();
    const [paragraph] = useState(_paragraph);
    const [wordArray, setWordArray] = useState([]);
    const [buttonType] = useState("primary");
    const [sliderStatus, setSliderStatus] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [speed, setSpeed] = useState(defaultSpeed ? defaultSpeed: 200);

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

      const modalClickHandler = ()=> {
        setModalVisible(true)
      }

      const onOk = ()=> {
        setModalVisible(false)
      }
    
      
    return(
        <div>
              <Modal 
                width={700}
                footer={[
                  <Button onClick={onOk}>
                    Kapat
                  </Button>,
                ]} 
                visible={modalVisible}>
                <div>
                  {paragraph}
                </div>
              </Modal>
              <Card 
                headStyle={{color: 'white'}}
                hoverable='true'
                className='card-object'
                cover={<img alt="example" src="https://images.unsplash.com/photo-1635469564142-b328835d1187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80" />}
                title={title} 
                extra={<Button
                  onClick={modalClickHandler }
                  className='modal-button'>...</Button>}>
                <div>
                    <Row justify="center">
                      <Col>
                      <div>
                        <h4 className='word-stream'>{wordArray[iterator]}</h4>
                      </div>
                      <br/>
                      </Col>
                    </Row>
                    <Button
                      className='start-button'
                      block
                      type={buttonType}
                      onClick={handleClick}>
                        {intervalId ? "STOP" : "START"}
                    </Button>
                    <Divider orientation="left" style={{color: 'white'}}>Speed</Divider>
                    <Row justify="space-between">
                    <Col flex="auto">
                        <Slider 
                          disabled={sliderStatus}
                          span={14}
                          defaultValue={defaultSpeed} 
                          min={50} 
                          max={500} 
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
              
        </div> 
    )
}

WordCard.propTypes={
  _paragraph: PropTypes.string.isRequired,
  defaultSpeed: PropTypes.number
}

export default WordCard;
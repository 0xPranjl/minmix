import React from 'react';
import { Button, Row, Col } from 'antd';
import './GridButtonLayout.css'; // Import CSS file for custom styles

const GridButtonLayout = () => {
  

  return (
    <div className="button-container">
    
        <Row  gutter={[16, 16]} className="row">
            <Col  span={12}>
                <Button className="button">
                🔇 Remove audio
                </Button>
            </Col>
            <Col  span={12}>
                <Button className="button">
                ⏲ Change speed
                </Button>
            </Col>
          
        </Row>
    
    </div>
  );
};

export default GridButtonLayout;

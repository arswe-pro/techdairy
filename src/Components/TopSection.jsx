import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

const { Title } = Typography
const TopSection = () => {
    return (
        <Row justify='center' align='middle' className='height100'>
            <Col xs={23} sm={22} md={12} lg={12} xl={12} xxl={12}>
                <Typography>
                    <Title className='text-uppercase'>Tech Dairy is a place to write, read, and connect</Title>
                    <Title level={5} className='text-uppercase'>It's easy and free to post your thinking on any topic and connect with millions of readers.</Title>
                </Typography>
                <Button type='primary' shape='round' size='large'> Start Now</Button>
            </Col>
        </Row>
    );
};

export default TopSection;
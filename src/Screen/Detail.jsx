import { Button, Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../assets/Data/Data.json';

const Detail = ({ match }) => {

    const post = Data.find(pt => pt.id == match.params.id)
    console.log(post);

    return (
        <>
            <Button type='dashed' size='large' shape='round' style={{ margin: '1rem', color: '#FFF' }}> <Link to='/'> Go Back</Link> </Button>
            <Row justify='center' align='middle'>
                <Col xs={23} sm={22} md={14} lg={14} xl={14} xxl={14} style={{ margin: "2rem 1rem" }}>
                    <Card title={post.name} hoverable cover={<img alt={post.name} src={post.image} />} style={{ height: "100%" }} >
                        <Meta title={post.Brand} description={post.description} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Detail;
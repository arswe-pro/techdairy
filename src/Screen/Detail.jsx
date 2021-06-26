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
            <Button type='dashed' size='large' shape='round' style={{ margin: '2rem', color: '#FFF' }}> <Link to='/'> Go Back</Link> </Button>
            <Row justify='center' align='middle'>
                <Col xs={23} sm={22} md={16} lg={16} xl={16} xxl={16} key={post.id} style={{ margin: "2rem 2rem" }}>
                    <Card hoverable cover={<img alt={post.name} src={post.image} />} style={{ height: "100%" }} >
                        <Meta title={post.name} description={post.description} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Detail;
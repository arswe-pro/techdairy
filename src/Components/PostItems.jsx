import { Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';

const PostItems = ({ post }) => {
    const { id, name, image } = post
    return (
        <>
            <Col xs={23} sm={22} md={7} lg={7} xl={7} xxl={7} style={{ margin: '2rem 1rem' }}>
                <Link to={`/Detail/${id}`}>
                    <Card
                        hoverable
                        cover={<img alt={name} src={image} height='300' />}
                        style={{ height: "100%", }}

                    >
                        <Meta title={name} />
                    </Card>
                </Link>
            </Col>
        </>
    );
};

export default PostItems;
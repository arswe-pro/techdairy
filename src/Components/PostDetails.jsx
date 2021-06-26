import { Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';

const PostDetails = ({ post }) => {
    const { id, name, image } = post
    return (
        <>
            <Col xs={23} sm={22} md={8} lg={8} xl={8} xxl={8} style={{ margin: "2rem 2rem" }}>
                <Link to={`/Detail/${id}`}>
                    <Card
                        hoverable
                        cover={<img alt={name} src={image} height='300' />}
                        style={{ height: "100%" }}
                    >
                        <Meta title={name} />
                    </Card>
                </Link>
            </Col>
        </>
    );
};

export default PostDetails;
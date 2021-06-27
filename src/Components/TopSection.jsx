import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title } = Typography
const TopSection = () => {
    return (
        <Row justify='center' align='middle' className='height100'>
            <Col xs={23} sm={22} md={12} lg={12} xl={12} xxl={12}>
                <Typography>
                    <Title className='text-uppercase' style={{ color: '#FFF' }}>
                        Tech Dairy is a place to write, read, and connect
                    </Title>
                    <Title
                        level={5}
                        className='text-uppercase'
                        style={{ color: '#FFF' }}
                    >
                        It's easy and free to post your thinking on any topic
                        and connect with millions of readers.
                    </Title>
                </Typography>
                <Button type='primary' shape='round' size='large'>
                    <Link to='/Post'> Start Now </Link>
                </Button>
            </Col>
        </Row>
    )
}

export default TopSection

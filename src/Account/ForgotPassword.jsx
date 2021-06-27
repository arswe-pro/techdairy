import { MailOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }
    return (
        <>
            <Row justify='center' align='middle' className='height100'>
                <Col
                    xs={23}
                    sm={22}
                    md={8}
                    lg={8}
                    xl={8}
                    xxl={8}
                    style={{ margin: '2rem 2rem' }}
                >
                    <Card title=' Forgot Password '>
                        <Form
                            name='normal_login'
                            className='login-form'
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete='off'
                        >
                            <Form.Item
                                name='email'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input
                                    size='large'
                                    prefix={
                                        <MailOutlined className='site-form-item-icon' />
                                    }
                                    placeholder='Email'
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                >
                                    Forgot Password
                                </Button>
                                <Link to='/'> Go Back</Link>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ForgotPassword

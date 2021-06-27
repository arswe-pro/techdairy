import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const register = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }

    return (
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
                <Card title='Register Now'>
                    <Form
                        name='normal_register'
                        className='register-form'
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete='off'
                    >
                        <Form.Item
                            name='username'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                size='large'
                                prefix={
                                    <UserOutlined className='site-form-item-icon' />
                                }
                                placeholder='Username'
                            />
                        </Form.Item>

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

                        <Form.Item
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                size='large'
                                prefix={
                                    <LockOutlined className='site-form-item-icon' />
                                }
                                type='password'
                                placeholder='Password'
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                className='register-form-button'
                            >
                                Register
                            </Button>
                            Or <Link to='login'>Login </Link>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default register

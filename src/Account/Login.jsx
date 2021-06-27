import { GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../Authentication/useAuth'

const Login = () => {
    const auth = useAuth()
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }

    const onFinish = (values) => {
        handleSignIn(values.email, values.password)
    }

    const handleSignIn = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then((res) => {
            console.log(res)
            history.replace(from)
        })
    }
    const handleGoogleSignIn = () => {
        auth.signInWithGoogle().then((res) => {
            console.log(res)
            history.replace(from)
        })
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
                <Card title='Login'>
                    <Form
                        name='normal_login'
                        className='login-form'
                        initialValues={{ remember: true }}
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
                            <Form.Item
                                name='remember'
                                valuePropName='checked'
                                noStyle
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Link
                                to='/ForgotPassword'
                                className='login-form-forgot'
                                href=''
                            >
                                Forgot password
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                className='login-form-button'
                            >
                                Log in
                            </Button>
                            Or <Link to='/register'>Register now!</Link>
                        </Form.Item>
                    </Form>
                    <Button
                        type='primary'
                        shape='round'
                        ghost
                        block
                        onClick={handleGoogleSignIn}
                    >
                        <GoogleOutlined /> Google
                    </Button>
                </Card>
            </Col>
        </Row>
    )
}

export default Login

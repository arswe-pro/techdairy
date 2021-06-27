import { UserOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { Content, Sider } = Layout

const Dashboard = () => {
    return (
        <Layout className='height100'>
            <Sider width={200} className='site-layout-background'>
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu icon={<UserOutlined />}>
                        <Menu.Item key='1'> Add Post </Menu.Item>
                    </Menu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className='site-layout-background'
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard

import { Layout, Menu } from 'antd';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
const { Header } = Layout;

export function AppHeader() {

    return (
        <Layout className="layout">
            <Header className="bg-white flex items-center justify-between px-4 shadow-md">
                <div className="logo">
                {/* Your Logo Here */}
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['2']} className="flex-grow">
                <Menu.Item key="1" className="menu-item">
                    Stays
                </Menu.Item>
                <Menu.Item key="2" className="menu-item">
                    Experiences
                </Menu.Item>
                <Menu.Item key="3" className="menu-item">
                    Online Experiences
                </Menu.Item>
                </Menu>
                <div className="flex items-center space-x-4">
                <a href="/host-your-home" className="text-gray-600 hover:text-gray-800 transition-colors">Airbnb your home</a>
                <HomeOutlined />
                <MenuOutlined />
                </div>
            </Header>
        </Layout>
    );
};
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './home.scss';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import ClientList from './clients-list/clients-list';
import NewClient from './add-clients/add-clients'

import ResumeClient from './resume-clients/resume-clients'

const { Sider, } = Layout;

const HomeView: React.FC = () => {
  const [module, setModule] = useState(0)

  const renderSwitch = () => {
    switch (module) {
      case 0:
        return <ClientList />
      case 1:
        return <NewClient />
        case 2:
          return <ResumeClient />
    }
  }

  return (
    <Layout>
      <Sider width={300} className="site-layout-background">
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}
          style={{ height: '100vh', borderRight: 0 }}
        >
          <Menu.Item key="0" icon={<BarChartOutlined />} onClick={() => setModule(0)}>
            Listado de Clientes
          </Menu.Item>
          <Menu.Item key="1" onClick={() => setModule(1)} icon={<UserOutlined />}>
            Agregar Clientes
          </Menu.Item>
          <Menu.Item key="2" onClick={() => setModule(2)} icon={<BarChartOutlined />}>
            Resumen de Edades
          </Menu.Item>
        </Menu>
      </Sider>
      {renderSwitch()}
    </Layout >


  );

}

export default HomeView

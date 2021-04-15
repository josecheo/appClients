import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../home.scss';
import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';


const { Content, } = Layout;

const ResumeClients: React.FC = () => {

  const [data, setData] = useState({
    promEdad: '',
    desvEdad: ''
  })
  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'http://appclients-env.eba-kxr2tiw7.us-east-1.elasticbeanstalk.com/kpiclientes',
    headers: {
      'Content-Type': 'application/json'
    }
  };


  useEffect(() => {
    axios(config)
      .then(function (response: any) {
        setData(response.data)


      })
      .catch(function (error: any) {
        console.log(error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Title>KPI de Clientes por Edades</Title>
      </div>
      <Title level={2} type="success">Promedio edad:</Title>
      <Title level={4}>{data.promEdad}</Title>
      <Title level={2} type="success">Desviación estándar:</Title>
      <Title level={4}>{data.desvEdad}</Title>

    </Content>

  );

}

export default ResumeClients

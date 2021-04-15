import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../home.scss';
import { Layout, Table } from 'antd';
import Title from 'antd/lib/typography/Title';


const { Content, } = Layout;

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellido',
    dataIndex: 'apellido',
    key: 'apellido',
  },
  {
    title: 'Edad',
    dataIndex: 'edad',
    key: 'edad',
  },
  {
    title: 'Fecha de Nacimiento',
    dataIndex: 'fnacimiento',
    key: 'fnacimiento',
  },
];

const ListAlumnos: React.FC = () => {

  const [data, setData] = useState([])
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://localhost:4000/listclientes',
    headers: {
      'Content-Type': 'application/json'
    }
  };


  useEffect(() => {
    axios(config)
      .then(function (response: { data: any; }) {
        const data = response.data.map((item: any) => {
          return {
            nombre: item.nombre,
            apellido: item.apellido,
            edad: item.edad,
            fnacimiento: item.fnacimiento
          }
        })
        setData(data)

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
        <Title>Listados de Clientes</Title>
      </div>
      <div style={{ marginTop: '29px' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </Content>

  );

}

export default ListAlumnos

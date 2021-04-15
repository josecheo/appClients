import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../home.scss';
import { Button, DatePicker, Input, Layout, Typography } from 'antd';
import { UserOutlined, SendOutlined, } from '@ant-design/icons';
import swal from 'sweetalert'
import moment from 'moment';
const initialForm = {
  nombre: '',
  apellido: '',
  edad: '',
  fnacimiento: '',
}

const { Content, } = Layout;
const AddClients: React.FC = () => {
  const [loadings, setLoadings] = useState(false)
  const { Title } = Typography;
  const [isDisable, setIsDisable] = useState(true)
  const [form, setForm] = useState(initialForm)
  const onChange = (e: any) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const onChangeDate = (e: any) => {
    setForm({ ...form, ['fnacimiento']: e ? moment(e._d).format('YYYY-MM-DD') : '' })
  }

  const handleSubmit = () => {
    setLoadings(true)

    var axios = require('axios');
    var config = {
      method: 'post',
      url: 'http://localhost:4000/crearcliente',
      headers: {
        'Content-Type': 'application/json'
      },
      data: form
    };

    axios(config)
      .then(function () {

        swal("Buen Trabajo!", "Se ha registrado un nuevo cliente", "success");
        setLoadings(false)
        setForm(initialForm)


      })
      .catch(function (error: any) {
        console.log(error);
      });

  }

  useEffect(() => {
    if (form.nombre !== '' && form.apellido !== '' && form.edad !== '' && form.fnacimiento !== '') {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [form])



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
        <Title>Agregar Nuevo Cliente</Title>
      </div>
      <div className='wrapp__container-rigth-card'>

        <Input value={form.nombre}
          onChange={(e) => onChange(e)}
          style={{ borderRadius: '10px' }}
          size="large" placeholder="Nombre"
          name='nombre' prefix={<UserOutlined />} />
        <br />
        <Input value={form.apellido}
          onChange={(e) => onChange(e)}
          style={{ borderRadius: '10px' }}
          size="large" placeholder="Apellido" name='apellido' prefix={<UserOutlined />}
        />
        <br />
        <Input value={form.edad}
          onChange={(e) => onChange(e)}
          style={{ borderRadius: '10px' }}
          size="large" placeholder="Edad"
          name='edad' prefix={<UserOutlined />}
        />
        <br />
        <DatePicker
          onChange={onChangeDate}
          style={{ borderRadius: '10px', width: '100%' }}
          size="large"
          placeholder="Fecha de Nacimiento "
          name='fnacimiento'
        />

        <br />
        <Button
          style={{ width: '100%' }}
          size='large'
          type="primary"
          icon={<SendOutlined />}
          loading={loadings}

          disabled={isDisable}
          onClick={() => handleSubmit()}
        >
          Enviar
        </Button>
        <br />
      </div>
    </Content>

  );

}

export default AddClients

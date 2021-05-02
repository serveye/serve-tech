import * as React from 'react';
import { Form, Input, Button, Card } from 'antd';
import './FormComponent.scss';

const layout = {
    labelCol: { span: 8 
    },
    wrapperCol: { span: 16
    },
};



const FormComponent: React.FC = () => {
   
    const onFinish = (values: {username : string, password: string}) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div className='form'>
            <Card hoverable className='card-container'
            >
                <Form
                    className='form-container'
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        className='form-item'
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder='Username'/>
                    </Form.Item>

                    <Form.Item
                        className='form-item'
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Password'/>
                    </Form.Item>

                  

                    <Form.Item {...layout} className='form-item'>
                        <Button type="primary" htmlType="submit">
          Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default FormComponent;
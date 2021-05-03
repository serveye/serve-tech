import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './LoaderComponent.scss';
const LoaderComponent: React.FC = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: '8em', color: 'rgb(132, 169, 45)'}} spin />;


    return (
        <Spin className='spinner'indicator={antIcon} spinning size={'large'}/>
     
    );
};

export default LoaderComponent;

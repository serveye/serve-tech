import * as React from 'react';
import { Button, DatePicker, version } from 'antd';
import './Table.scss';
const Table: React.FC = () => {
    return (
        <div>
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Button type="dashed">Button</Button>
        </div>
    );
};
export default Table;

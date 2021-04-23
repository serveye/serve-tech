import * as React from 'react';
import { Table } from 'antd';
import './TableComponent.scss';

import { ColumnProps } from 'antd/es/table';
interface User {
  key: number;
  name: string;
  age: number;
  address: string;
}
const columns: ColumnProps<User>[] = [
    {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        sortDirections: ['ascend', 'descend'],
        sorter: (a: User, b: User) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        },
    },
    {
        key: 'age',
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a: User, b: User) => a.age - b.age,
    },
    {
        key: 'address',
        title: 'Address',
        dataIndex: 'address',
        sorter: (a: User, b: User) => {
            const addressA = a.address.toUpperCase();
            const addressB = b.address.toUpperCase();

            let comparison = 0;
            if (addressA > addressB) {
                comparison = 1;
            } else if (addressA < addressB) {
                comparison = -1;
            }
            return comparison;
        },
        sortDirections: ['ascend', 'descend'],
    },
];

const data: User[] = [
    {
        key: 1,
        name: 'arun',
        age: 43,
        address: 'New York ',
    },
    {
        key: 2,
        name: 'koti',
        age: 30,
        address: 'London',
    },
    {
        key: 3,
        name: 'data',
        age: 30,
        address: 'Sidney',
    },
    {
        key: 4,
        name: 'gopi',
        age: 1,
        address: 'London',
    },
];

const TableComponent: React.FC = () => {
    return (
        <Table className='table-component' dataSource={data} pagination={false}>
            {columns.map((column) => (
                <Table.Column<User>
                    sorter={column.sorter}
                    key={column.key}
                    title={column.title}
                    dataIndex={column.key}
                    sortDirections={column.sortDirections}
                    defaultSortOrder={column.defaultSortOrder}
                />
            ))}
        </Table>
    );
};

export default TableComponent;

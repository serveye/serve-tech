import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ComponentLibrary from 'tech-components';
import TableComponent from 'tech-components/table/TableComponent';
import './index.scss';
export interface HelloProps { name: string; }


class Hello extends React.Component<HelloProps, string> {
    render() {
        return (<div>
            <h1 className='h1-sm'>Hello from {this.props.name}!</h1>;
            <ComponentLibrary />
            <TableComponent/>
        </div>);
    }
}

ReactDOM.render(
    <Hello name="Admin" />,
    document.getElementById('example')
);
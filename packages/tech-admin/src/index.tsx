import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { TableComponent } from 'tech-components/Table';
// import {FormComponent} from 'tech-components/Form';
//import {LoaderComponent} from 'tech-components/Loader';
import {MessageComponent} from 'tech-components/Message';
import './index.scss';
export interface HelloProps { name: string; }


class Hello extends React.Component<HelloProps, string> {
    render() {
        return (<div>
          
            <MessageComponent message='hishshs' type='warning'/>
        </div>);
    }
}

ReactDOM.render(
    <Hello name="Admin" />,
    document.getElementById('example')
);
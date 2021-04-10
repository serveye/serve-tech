import * as React from "react";
import * as ReactDOM from "react-dom";

import ComponentLibrary from 'tech-components'

export interface HelloProps { name: string; }


class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (   <>
        <h1>Hello from {this.props.name}!</h1>;
        <ComponentLibrary />
        </>)
    }
}

ReactDOM.render(
    <Hello name="Application" />,
    document.getElementById("example")
);
import * as React from 'react';
import {Alert} from 'antd';
import './MessageComponent.scss';
import * as PropTypes from 'prop-types';
interface MessageInterface {
    type: 'success' | 'info' | 'warning' | 'error';
    message : string
}

const MessageComponent: React.FC<MessageInterface> = ({message, type}) => {
    return (
        <Alert message={message} type={type} showIcon ></Alert>
    );
};
MessageComponent.propTypes ={
    message: PropTypes.string.isRequired,
    type : PropTypes.oneOf(['success', 'info', 'warning', 'error']as const).isRequired,
};
export default MessageComponent;

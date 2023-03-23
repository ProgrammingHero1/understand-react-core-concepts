import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    console.log(props);
    // props.price = 15000;
    return (
        <div>
            <h3>I have a device: {props.name}</h3>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;
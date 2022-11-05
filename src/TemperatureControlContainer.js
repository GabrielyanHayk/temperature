import './TemperatureControlContainer.css';
import TemperatureScreen from './TemperatureScreen.js';
import ButtonContainer from './ButtonContainer.js';
import React, {useState} from 'react';

function TemperatureControlContainer(props) {
    const className = props.className;
    const [temperatureValue, setTemperatureValue] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState('normal');
     
    return (
        <div className={className}>
            <TemperatureScreen 
                className={`temperatureScreen ${temperatureColor}`}
                value ={temperatureValue}
            />
            <ButtonContainer 
                className="buttonContainer"
                temperatureValue = {temperatureValue}
                setTemperatureValue = {setTemperatureValue}
                temperatureColor = {temperatureColor}
                setTemperatureColor = {setTemperatureColor}
            />
        </div>
    )
}

export default TemperatureControlContainer;
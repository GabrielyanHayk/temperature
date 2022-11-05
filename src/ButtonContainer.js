import './ButtonContainer.css';

function ButtonContainer (props) {
    const buttonContainer = props.className;
    const temperatureValue = props.temperatureValue;
    const setTemperatureValue = props.setTemperatureValue;


    const addTemperature = ()=> {
        const newTemperature = temperatureValue + 1;
        if(temperatureValue === 30) {
            return;
        }
        else if(newTemperature >= 15) {
            props.setTemperatureColor('hot');
        }else if(newTemperature > 5 && newTemperature < 15) {
            props.setTemperatureColor('normal');
        }else if(newTemperature === 31) {
            console.log(newTemperature);
            return
        }        
        setTemperatureValue(newTemperature);
    }

    const minusTemperature = ()=> {
        const newTemperature = temperatureValue - 1;
        if(newTemperature === -1 ) {
            return;
        }
        else if(newTemperature > 5 && newTemperature < 15) {
            props.setTemperatureColor('normal');
        }
        else if(newTemperature <= 5) {
            props.setTemperatureColor('cold');
        }
        setTemperatureValue(newTemperature);
    }

    return (
        <div className={buttonContainer}>
            <button 
                className="buttonMinus"
                onClick={()=>minusTemperature()}>
                    <span>&#8722;</span>
            </button>
            <button 
                className="buttonAdd"
                onClick={()=> addTemperature()}>
                <span>&#43;</span>
            </button>
        </div>
    )
}

export default ButtonContainer;
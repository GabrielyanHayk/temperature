import './TemperatureScreen.css';

function TemperatureScreen (props) {
    const className = props.className;
   
    return (
        <div className={className}>
            <div className={``} >{props.value}
                <span>&#8451;</span>
            </div>
        </div>
    )
}

export default TemperatureScreen;
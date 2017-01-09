import React from 'react' 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default (props, ...rest) => {
    var sum   = 0.0 
    var avg   = 0.0  
    for (var value of props.data) {
        sum += value 
    }
    avg = sum / props.data.length 
    return (
            <div> 
                <Sparklines width={100} data={props.data} > 
                    <SparklinesLine color= {props.color} /> 
                    <SparklinesReferenceLine type='avg' /> 
                    <div>Average={avg.toFixed(2)}{props.units}</div> 
                </ Sparklines >
            </div>
        ) 
}
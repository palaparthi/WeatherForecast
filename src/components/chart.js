/**
 * Created by Palaparthi on 8/26/17.
 */
import _ from 'lodash'
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data, flag) {
    if(flag === false) {
        const avg = _.sum(data) / data.length;
        return (_.round(avg));
    }
    else {
        const avgF = _.sum(data) / data.length;
        const f = 9/5 * (avgF - 273) + 32;
        return (_.round(f));
    }

}
export default(props) =>{
    return(
        <div>
            <Sparklines height={120} width={180} data ={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data, props.flag)} {props.units}</div>
        </div>
    );
}

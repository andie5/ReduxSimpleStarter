import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    console.log('Data: ', props.data);
    console.log('Color: ', props.data);

    function average(data){
        return _.round(_.sum(data)/data.length);
    }

    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{ average(props.data)} {props.units}</div>
        </div>
    );
}

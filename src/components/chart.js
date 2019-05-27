import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


const average = array => array.reduce((a,b)=>a+b)/array.length;


export default function(props){
	return (
		<div>
			<Sparklines data={props.data} width={180} height={120} >
						<SparklinesLine color={props.color} />
						<SparklinesReferenceLine type="avg" />
			</Sparklines>
				<div>
					{average(props.data)} {props.units}
				</div>
		</div>
		)
}

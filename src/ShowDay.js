import React from 'react';
import { useParams } from 'react-router-dom';

function ShowDay(props) {
	const { date } = useParams();
	const { moodsArr, removeMood } = props;
	const dayIdx = [];
	const findDays = () => {
		return moodsArr.filter((d, i) => {
			if (d.slug === date) {
				dayIdx.push(i);
				return d;
			}
		});
	};

	const dayArr = findDays();
	console.log(dayArr);

	return (
		<div>
			<p>ID: {date}</p>
			{dayArr &&
				dayArr.map((d, i) => (
					<div>
						<p>{d.moodNum}</p>
						<button onClick={() => removeMood(dayIdx[i])}>
							Delete
						</button>
					</div>
				))}
		</div>
	);
}

export default ShowDay;

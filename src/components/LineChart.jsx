import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title as ChartTitle,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ChartTitle,
	Tooltip,
	Legend
);

const { Title } = Typography;

function LineChart({ coinHistory, coinName, currentPrice }) {
	const coinPrices = [];
	const coinTimestamp = [];

	for (let i = 0; i < coinHistory?.history.length; i++) {
		coinPrices.unshift(coinHistory?.history[i].price);
		coinTimestamp.unshift(
			new Date(
				coinHistory?.history[i].timestamp * 1000
			).toLocaleDateString()
		);
	}
	console.log(coinHistory?.history);
	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: 'Price in USD',
				data: coinPrices,
				fill: false,
				borderColor: '#0071bd',
				backgroundColor: '#0071bd',
			},
		],
	};

	const options = {
		/* scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		}, */
		responsive: true,
	};

	return (
		<>
			<Row className='chart-header'>
				<Title level={2} className='chart-title'>
					{coinName} Price Chart
				</Title>
				<Col className='price-container'>
					<Title level={5} className='price-change'>
						{coinHistory?.change}%
					</Title>
					<Title level={5} className='current-price'>
						Current {coinName} Price: $ {currentPrice}
					</Title>
				</Col>
			</Row>
			{<Line data={data} options={options} />}
		</>
	);
}

export default LineChart;

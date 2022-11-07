import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import moment from 'moment';
import { useState } from 'react';

const demoImage =
	'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;

const { Option } = Select;

function News({ simplified }) {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

	const count = simplified ? 6 : 12;

	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count,
	});
	const { data: cryptos } = useGetCryptosQuery(100);

	if (!cryptoNews?.value) return 'Loading...';

	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select
						showSearch
						className='select-news'
						placeholder='Select a Crypto'
						optionFilterProp='children'
						onChange={(value) => setNewsCategory(value)}
						filterOption={(input, option) =>
							option.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value='Cryptocurrency'>Cryptocurrency</Option>
						{cryptos?.data?.coins.map((coin, i) => {
							return (
								<Option value={coin.name} key={i}>
									{coin.name}
								</Option>
							);
						})}
					</Select>
				</Col>
			)}
			{cryptoNews?.value.map((news, i) => (
				<Col xs={24} sm={12} lg={8} key={i}>
					<Card hoverable className='news-card'>
						<a href={news.url} target='_blank' rel='noreferrer'>
							<div className='news-image-container'>
								<Title className='news-title' level={4}>
									{news.name}
								</Title>
								<img
									alt='news'
									src={
										news?.image?.thumbnail?.contentUrl ||
										demoImage
									}
								/>
							</div>
							<p>
								{news.description.length < 300
									? news.description
									: news.description.substring(0, 100) +
									  ' ...'}
							</p>
							<div className='provider-container'>
								<div>
									<Avatar
										src={
											news?.provider[0]?.image?.thumbnail
												?.contentUrl || demoImage
										}
										alt='news'
									/>
									<Text className='provider-name'>
										{news?.provider[0]?.name}
									</Text>
								</div>
								<Text>
									{moment(news.datePublished)
										.startOf('ss')
										.fromNow()}
								</Text>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default News;

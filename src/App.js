import {
	Navbar,
	HomePage,
	Exchanges,
	CryptoCurrencies,
	CryptoDetails,
	News,
} from './components';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/exchanges' element={<Exchanges />} />
							<Route
								path='/cryptocurrencies'
								element={<CryptoCurrencies />}
							/>
							<Route
								path='/crypto/:coinId'
								element={<CryptoDetails />}
							/>
							<Route path='/news' element={<News />} />
						</Routes>
					</div>
				</Layout>
				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						Cryptoverse
						<br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/exchanges'>Exchanges</Link>
						<Link to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
}

export default App;
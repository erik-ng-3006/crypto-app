import React, { useEffect, useState } from 'react';
import { Button, Avatar, Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';
import {
	HomeOutlined,
	FundOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	MenuOutlined,
} from '@ant-design/icons';

function Navbar() {
	const [isActiveMenu, setIsActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 768) {
			setIsActiveMenu(false);
		} else {
			setIsActiveMenu(true);
		}
	}, [screenSize]);

	const items = [
		{
			label: <Link to='/'>Home</Link>,
			icon: <HomeOutlined />,
			key: 'home',
		},
		{
			label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link>,
			icon: <FundOutlined />,
			key: 'cryptocurrencies',
		},
		{
			label: <Link to='/exchanges'>Exchanges</Link>,
			icon: <MoneyCollectOutlined />,
			key: 'exchanges',
		},

		{
			label: <Link to='/news'>News</Link>,
			icon: <BulbOutlined />,
			key: 'news',
		},
	];
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={icon} size='large' />
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Cryptoverse</Link>
				</Typography.Title>
				<Button
					className='menu-control-container'
					onClick={() => setIsActiveMenu(!isActiveMenu)}
				>
					<MenuOutlined />
				</Button>
			</div>
			{isActiveMenu && <Menu theme='dark' items={items} />}
		</div>
	);
}

export default Navbar;

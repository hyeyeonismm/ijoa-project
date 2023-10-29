import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton, Menu, MenuItem, MenuItemClasses } from '@mui/base';
import { Box, Button, styled } from '@mui/material';

function Header() {
	const [activeMenu, setActiveMenu] = useState(null);
	const navigate = useNavigate();

	const onClickHome = () => {
		navigate('/');
	};

	const routes = {
		'돌보미 검색': '/searchteacher',
		'돌보미 구인': '/recruitteacher',
		'돌보미 인증': '/auth',
		'돌봄 지원서 등록': '/applyregister',
		'돌봄 서비스 검색': '/searchcare',
	};

	const createHandleMenuClick = (menuItem) => {
		return () => {
			setActiveMenu(null);
			if (menuItem) {
				navigate(routes[menuItem]);
			}
		};
	};

	const onClickUser = () => {
		navigate('/login');
	};

	return (
		<>
			<Frame>
				<Title onClick={onClickHome}>IJOA</Title>
				<HeaderComponents>
					{/* 1번 */}
					<Dropdown>
						<TriggerButton>돌봄 서비스 신청</TriggerButton>
						<Menu slots={{ listbox: StyledListbox }}>
							<StyledMenuItem onClick={createHandleMenuClick('돌보미 검색')}>돌보미 검색</StyledMenuItem>
							<StyledMenuItem onClick={createHandleMenuClick('돌보미 구인')}>돌보미 구인</StyledMenuItem>
						</Menu>
					</Dropdown>
					{/* 2번 */}
					<Dropdown>
						<TriggerButton>돌보미 지원</TriggerButton>
						<Menu slots={{ listbox: StyledListbox }}>
							<StyledMenuItem onClick={createHandleMenuClick('돌보미 인증')}>돌보미 인증</StyledMenuItem>
							<StyledMenuItem onClick={createHandleMenuClick('돌봄 지원서 등록')}>돌봄 지원서 등록</StyledMenuItem>
							<StyledMenuItem onClick={createHandleMenuClick('돌봄 서비스 검색')}>돌봄 서비스 검색</StyledMenuItem>
						</Menu>
					</Dropdown>
					{/* 3번 */}
					<Dropdown>
						<TriggerButton>서비스 문의</TriggerButton>
						<Menu slots={{ listbox: StyledListbox }}>
							<StyledMenuItem onClick={createHandleMenuClick('1:1 문의')}>1:1 문의</StyledMenuItem>
							<StyledMenuItem onClick={createHandleMenuClick('회원 신고')}>회원 신고</StyledMenuItem>
							<StyledMenuItem onClick={createHandleMenuClick('공지사항')}>공지사항</StyledMenuItem>
						</Menu>
					</Dropdown>
					{/* 4번 */}
					<Box>
						<LoginButton onClick={onClickUser}>회원가입/로그인</LoginButton>
					</Box>
				</HeaderComponents>
			</Frame>
			<div style={{ height: '80px' }} />
		</>
	);
}

const Frame = styled(Box)(() => ({
	backgroundColor: 'white',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '26px 30px 0px 30px',
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	zIndex: 999,
}));

const Title = styled(Box)(() => ({
	fontWeight: '700',
	marginLeft: '80px',
	marginBottom: 7.5,
	textAlign: 'center',
	fontSize: 22,
	color: '#5D5A88',
	'&:hover': {
		backgroundColor: '#fff',
		cursor: 'pointer',
	},
	'&:active': {
		backgroundColor: 'transparent',
		boxShadow: 'none',
	},
}));

const HeaderComponents = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'flex-end',
}));

const StyledListbox = styled('ul')(() => ({
	fontSize: 14,
	padding: '5px 20px 5px 8px',
	margin: '10px 0px',
	width: 'auto',
	background: '#fff',
	borderRadius: 12,
	border: '1px solid #ddd',
	color: '#5D5A88',
}));

const StyledMenuItem = styled(MenuItem)(() => ({
	listStyle: 'none',
	padding: '6px',
	borderRadius: '8px',
	cursor: 'pointer',
	userSelect: 'none',
	'&:active': {
		backgroundColor: '#f0f0f0',
	},
}));

const TriggerButton = styled(MenuButton)(() => ({
	fontSize: 16,
	fontWeight: 600,
	marginTop: -10,
	padding: '8px 14px',
	color: '#5D5A88',
	border: 'none',
	cursor: 'pointer',
	background: '#fff',

	'&:active': {
		backgroundColor: '#f0f0f0',
		borderRadius: 20,
	},
}));

const LoginButton = styled(Button)(() => ({
	textAlign: 'center',
	margin: '-8px 20px 0px 12px',
	fontSize: 16,
	fontWeight: 600,
	borderRadius: '40px',
	backgroundColor: '#5D5A88',
	color: '#fff',
	'&:hover': {
		backgroundColor: '#8D8BA7',
	},
}));

export default Header;

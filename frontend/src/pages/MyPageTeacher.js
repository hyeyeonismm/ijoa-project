import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import profileImg from '../images/profileimgtest.png';

function MyPage() {
	const [user, setUser] = useState();
	const navigate = useNavigate();
	const onClickCheck = () => {
		navigate('/chatting');
	};

	const userID = sessionStorage.getItem('userId');

	const onClickCost = () => {
		navigate('/cost');
	};
	const onClickTeacherList = () => {
		navigate('/searchteacher');
	};
	const onClickLogout = () => {
		if (window.confirm('로그아웃 하시겠습니까?')) {
			sessionStorage.clear();
			navigate('/');
		}
	};

	

	return (
		<>
			<Header />

			<Profile>
				<ProfileImg src={profileImg}/>
				<div style={{marginLeft: 30}}>
					<div><h3 style={{ fontSize: 30, display: 'inline' }}>{"홍길동"}</h3> 회원님</div>
					<div>{userID}</div>
					<div>email@address.test</div>
				</div>
				
				<Box>
					<Button onClick={onClickLogout} sx={{ fontSize: 16, marginLeft: '30px' }}>
						<Grid direction='row' alignItems='center'>
							<Box sx={{ color: 'grey' }}>로그아웃</Box>
						</Grid>
					</Button>
					<Button sx={{ fontSize: 16, marginLeft: '10px' }}>
						<Grid direction='row' alignItems='center'>
							<Box sx={{ color: 'grey' }}>회원정보 수정</Box>
						</Grid>
					</Button>
				</Box>
			</Profile>
			
			<Box
				sx={{
					margin: '30px 120px',
					width: '1200px',
					height: '1px',
					background: '#C0C0C0',
					alignSelf: 'center'
				}}
			/>

			<Container>
				<Section>
					<SectionTitle>돌봄 지원서 관리</SectionTitle>
					<ListItem>
						<ListSubItem onClick={onClickTeacherList}>돌봄 지원서 등록</ListSubItem>
						<ListSubItem onClick={onClickCheck}>돌봄 지원소 조회(수정, 삭제)</ListSubItem>
                        <ListSubItem onClick={onClickCheck}>돌봄 요청 확인</ListSubItem>
					</ListItem>
				</Section>
				<Section>
					<SectionTitle>돌봄 내역 조회</SectionTitle>
					<ListItem>
						<ListSubItem onClick={onClickCheck}>돌봄 내역 조회</ListSubItem>
					</ListItem>
				</Section>
				<Section>
					<SectionTitle>돌봄 활동 정산</SectionTitle>
					<ListItem>
						<ListSubItem onClick={onClickCost}>계좌 등록</ListSubItem>
					</ListItem>
				</Section>
			</Container>
			<Footer />
		</>
	);
}

const Profile = styled(Box)({
	margin: '90px 0px 10px 120px',
	display: 'flex',
	alignItems: 'center',
	// justifyContent: 'space-between',
});


const ProfileImg = styled('img')({
	borderRadius: 9999,
	width: 170,
	height: 170,
});

const Container = styled(Box)({
	margin: '0px 140px 10px 120px',
	display: 'flex',
	justifyContent: 'center',
});

const Section = styled(Box)({
	display: 'inline-block',
	border: '1px solid #d4d2e3',
	width: 500,
	height: 160,
	borderRadius: '15px',
	margin: 20,
});

const ListItem = styled(Grid)(() => ({
	paddingBottom: '20px',
}));

const ListSubItem = styled(Grid)(() => ({
	lineHeight: '30px',
	padding: '2px 0px 0px 30px',
	cursor: 'pointer',
}));

const SectionTitle = styled(Box)({
	color: '#5d5a88',
	fontWeight: 700,
	padding: 20,
	marginBottom: 10,
});



export default MyPage;

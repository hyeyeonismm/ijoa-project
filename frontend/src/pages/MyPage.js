import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import { Navigate } from 'react-router-dom';
import MyPageTeacher from './MyPageTeacher';
import MyPageClient from './MyPageClient';


function MyPage() {

	const login = sessionStorage.getItem('userId') !== null;

	if(login) {
		const position = sessionStorage.getItem('userPosition');
		if(position === 'client') {
			return ( <MyPageClient /> );
		}
		else if(position === 'applier'){
			return ( <MyPageTeacher /> )
		}
		else {
			window.alert("유저 정보 오류! 다시 로그인해주세요.");
			sessionStorage.clear();
			return (<Navigate to="/login" />);
		}
	}
	else {
		window.alert("로그인이 필요한 페이지입니다.");
		return (
			<Navigate to="/login" />
		);
	}
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

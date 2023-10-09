import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Box, TextField, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';

function LoginPage() {
	const navigate = useNavigate();

	const onClickSignup = () => {
		navigate('/signup2');
	};

	return (
		<>
			<LoginForm>
				<div
					style={{
						textAlign: 'center',
						color: '#5D5A88',
						fontSize: 36,
						fontFamily: 'DM Sans',
						fontWeight: '700',
						lineHeight: 5,
					}}>
					로그인
				</div>

				<div style={{ width: 450, position: 'relative' }}>
					<div
						style={{
							color: '#8D8D8D',
							fontSize: 16,
							fontFamily: 'DM Sans',
							fontWeight: '400',
							float: 'right',
						}}>
						계정이 없나요?
					</div>
					<br />
					<div
						onClick={onClickSignup}
						style={{
							color: '#B87514',
							fontSize: 16,
							fontFamily: 'DM Sans',
							fontWeight: '400',
							float: 'right',
						}}>
						회원가입하기
					</div>
				</div>

				<div>
					<div
						style={{
							left: 0,
							top: -2,
							color: '#8D8BA7',
							fontSize: 16,
							fontFamily: 'Poppins',
							fontWeight: '400',
						}}>
						아이디를 입력하세요
					</div>
					<IDField placeholder='아이디' />
				</div>
				<div style={{ width: 451, height: 92, position: 'relative' }}>
					<div
						style={{
							left: 0,
							top: -2,
							color: '#8D8BA7',
							fontSize: 16,
							fontFamily: 'Poppins',
							fontWeight: '400',
						}}>
						비밀번호를 입력하세요
					</div>
					<PWField type='password' placeholder='비밀번호' />
				</div>
				<LoginButton>로그인하기</LoginButton>
			</LoginForm>
		</>
	);
}

const LoginButton = styled(Button)(() => ({
	background: '#5D5A88',
	color: 'white',
	fontWeight: '700',
	fontSize: '18px',
	width: '120px',
	height: '50px',
	borderRadius: '47px',
	margin: '25px',
	'&:hover': {
		background: '#5D5A88',
	},
	float: 'center',
}));

const LoginForm = styled(Container)(() => ({
	width: 539,
	height: 741,
	background: 'white',
	boxShadow: '0px 4px 35px rgba(0, 0, 0, 0.08)',
	borderRadius: 40,
}));

const IDField = styled('input')(() => ({
	width: 450,
	height: 30,
	display: 'flex',
	borderRadius: '12px',
	border: '2px solid #ddd',
	padding: '10px 15px',
	justifyContent: 'space-between',
	margin: '30px 0px 10px 0px',
	alignItems: 'center',
	color: 'black',
	fontSize: 14,
	'&:focus': {
		outline: 'none',
	},
}));

const PWField = styled('input')(() => ({
	width: 450,
	height: 30,
	display: 'flex',
	borderRadius: '12px',
	border: '2px solid #ddd',
	padding: '10px 15px',
	justifyContent: 'space-between',
	margin: '30px 0px 10px 0px',
	alignItems: 'center',
	color: 'black',
	fontSize: 14,
	'&:focus': {
		outline: 'none',
	},
}));

export default LoginPage;

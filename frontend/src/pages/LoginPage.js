import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { styled, Button, Container } from '@mui/material';
import axios from 'axios';

function LoginPage() {
	const positions = [
		{ label: '학부모', value: 'client' },
		{ label: '돌보미', value: 'applier' },
	];
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [position, setPosition] = useState('');
	const navigate = useNavigate();

	const onClickSignup = () => {
		navigate('/signup2');
	};
	const handleLogin = async () => {
		try {
			const response = await axios.post('/IJOA/login', {
				id: id,
				pw: password,
				position: position,
			});

			if (response.data.success) {
				alert('로그인 성공');
			} else {
				alert('로그인 실패');
			}
		} catch (error) {
			console.log(error);
		}
		sessionStorage.setItem('userId', id);
		navigate('/');
	};

	return (
		<>
			<Header />
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

				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#8D8BA7' }}>
					<div style={{ marginTop: '20px' }}>아이디를 입력하세요</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div>계정이 없나요?</div>
						<div onClick={onClickSignup} style={{ color: '#B87514', cursor: 'pointer' }}>
							회원가입하기
						</div>
					</div>
				</div>
				<IDField placeholder='아이디' value={id} onChange={(e) => setId(e.target.value)} />

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
					<PWField type='password' placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)} />
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
						position을 입력하세요
					</div>
					<div
						className='radio-group'
						style={{ display: 'flex', flexDirection: 'row', gap: 20, fontSize: 18, color: '#5d5a88' }}>
						{positions.map((data, idx) => (
							<div className='radio' key={idx}>
								<input
									type='radio'
									name='position'
									id={data.value}
									value={data.value}
									onChange={(e) => setPosition(e.target.value)}
									checked={position === data.value}
								/>
								<label htmlFor={data.value}>{data.label}</label>
							</div>
						))}
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<LoginButton onClick={handleLogin}>로그인하기</LoginButton>
				</div>
			</LoginForm>
		</>
	);
}

const LoginButton = styled(Button)(() => ({
	background: '#5D5A88',
	color: 'white',
	fontWeight: '700',
	fontSize: '18px',
	width: '200px',
	height: '45px',
	borderRadius: '40px',
	margin: '30px 0px',
	'&:hover': {
		background: '#5D5A88',
	},
}));

const LoginForm = styled(Container)(() => ({
	width: 539,
	height: 600,
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
	margin: '10px 0px 40px 0px',
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
	margin: '10px 0px',
	alignItems: 'center',
	color: 'black',
	fontSize: 14,
	'&:focus': {
		outline: 'none',
	},
}));

export default LoginPage;

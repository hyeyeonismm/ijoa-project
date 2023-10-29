import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import React, { useState } from 'react';

function SignupPage() {
	const navigate = useNavigate();
	const position = ['학부모', '돌보미'];
	const [Position, setPosition] = useState();
	const [Name, setName] = useState();
	const [ID, setID] = useState();
	const [PW, setPW] = useState();
	const [ConfirmPW, setConfirmPW] = useState();
	const [Nickname, setNickname] = useState();
	const [Birth, setBirth] = useState();
	const [Gender, setGender] = useState();
	const [Phone, setPhone] = useState();
	const [Email, setEmail] = useState();

	const onNameHandler = (event) => {
		setName(event.currentTarget.value);
	};
	const onIDHandler = (event) => {
		setID(event.currentTarget.value);
	};
	const onPWHandler = (event) => {
		setPW(event.currentTarget.value);
	};
	const onConfirmPW = (event) => {
		setConfirmPW(event.currentTarget.value);
	};
	const onNicknameHandler = (event) => {
		setNickname(event.currentTarget.value);
	};

	const onBirthHandler = (event) => {
		setBirth(event.currentTarget.value);
	};

	const onGenderHandler = (event) => {
		setGender(event.currentTarget.value);
	};

	const onPhoneHandler = (event) => {
		setPhone(event.currentTarget.value);
	};

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault(); // 페이지 새로고침 방지

		if (PW !== ConfirmPW) {
			return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
		}

		let body = {
			position: Position,
			id: ID,
			name: Name,
			pw: PW,
			nickname: Nickname,
			birth: Birth,
			gender: Gender,
			phone: Phone,
			email: Email,
		};

		try {
			const response = await axios.post('/IJOA/join', body);
			if (response.data.success) {
				alert('회원가입 성공');
			} else {
				alert('회원가입 실패');
			}
		} catch (error) {
			console.log(error);
			alert('회원가입 중 오류 발생');
		}
		sessionStorage.setItem('userId', ID);
		navigate('/');
	};

	return (
		<>
			<Box sx={{ margin: '40px 120px' }}>
				<div style={{ height: 150 }}>
					<Title>회원가입</Title>
					<div style={{ border: '0.40px #C0C0C0 solid' }}></div>
					<div
						style={{
							width: 27,
							height: 27,
							left: 455,
							top: 110,
							position: 'absolute',
							background: '#D9D9D9',
							borderRadius: 9999,
						}}
					/>
					<div
						style={{
							width: 27,
							height: 27,
							left: 1023,
							top: 110,
							position: 'absolute',
							background: '#5D5A88',
							borderRadius: 9999,
						}}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: '1.5vw 20.5vw',
						}}>
						<div style={{ color: '#c0c0c0', textAlign: 'center' }}>
							<div>step 1</div>
							<div>본인 인증</div>
						</div>

						<div style={{ color: '#5d5a88', textAlign: 'center' }}>
							<div>step 2</div>
							<div>회원 정보 입력</div>
						</div>
					</div>
				</div>

				<form
					style={{
						display: 'flex',
						flexDirection: 'column',
					}} /*onSubmit={onSubmitHandler}*/
				>
					<ItemInline>
						<Label style={{ width: 72 }}>역할</Label>
						<div
							className='radio-group'
							style={{ display: 'flex', flexDirection: 'row', gap: 20, fontSize: 18, color: '#5d5a88' }}>
							{position.map((data, idx) => (
								<div className='radio' key={idx}>
									<input
										type='radio'
										name='position'
										id={data}
										value={data}
										onChange={(e) => setPosition(e.target.value)}
										checked={Position === data}
									/>
									<label htmlFor={data}>{data}</label>
								</div>
							))}
						</div>
					</ItemInline>
					<ItemInline>
						<Label>이름</Label>
						<TextField value={Name} onChange={onNameHandler} />
					</ItemInline>
					<ItemInline>
						<Label style={{ marginLeft: '130px' }}>아이디</Label>
						<TextField value={ID} onChange={onIDHandler} />
						<DuplicateCheckButton>중복확인</DuplicateCheckButton>
					</ItemInline>
					<ItemInline>
						<Label>비밀번호</Label>
						<TextField type={'password'} value={PW} onChange={onPWHandler} />
					</ItemInline>
					<ItemInline>
						<Label>비밀번호 확인</Label>
						<TextField type={'password'} value={ConfirmPW} onChange={onConfirmPW} />
					</ItemInline>
					<ItemInline>
						<Label>닉네임</Label>
						<TextField type={'nickname'} value={Nickname} onChange={onNicknameHandler} />
					</ItemInline>
					<ItemInline>
						<Label>생년월일</Label>
						<TextField type={'birth'} value={Birth} onChange={onBirthHandler} />
					</ItemInline>
					<ItemInline>
						<Label>성별</Label>
						<TextField type={'gender'} value={Gender} onChange={onGenderHandler} />
					</ItemInline>
					<ItemInline>
						<Label>전화번호</Label>
						<TextField type={'phone'} value={Phone} onChange={onPhoneHandler} />
					</ItemInline>
					<ItemInline>
						<Label>이메일</Label>
						<TextField type={'email'} value={Email} onChange={onEmailHandler} />
					</ItemInline>
					<SignupButton onClick={handleSubmit}>가입하기</SignupButton>
				</form>
			</Box>
		</>
	);
}

const Title = styled(Box)(() => ({
	color: '#5D5A88',
	textAlign: 'center',
	fontSize: '30px',
	fontWeight: 700,
	padding: '20px',
}));

const Label = styled(Box)(() => ({
	width: '120px',
	color: '#8D8BA7',
	fontSize: '18px',
	marginRight: '10px',
	lineHeight: 3,
	display: 'flex',
	justifyContent: 'flex-end',
}));

const ItemInline = styled(Box)(() => ({
	margin: 'auto',
	padding: 'auto',
	paddingTop: '15px',
	display: 'flex',
	alignItems: 'center',
	gap: 10,
}));

const DuplicateCheckButton = styled(Button)(() => ({
	background: '#5D5A88',
	color: 'white',
	fontWeight: '700',
	fontSize: '18px',
	width: '120px',
	height: '53px',
	borderRadius: '10px',
	'&:hover': {
		background: '#5D5A88',
	},
}));

const SignupButton = styled(Button)(() => ({
	background: '#5D5A88',
	color: 'white',
	fontWeight: '700',
	fontSize: '18px',
	width: '180px',
	height: '50px',
	borderRadius: '47px',
	margin: ' 30px auto',
	padding: 'auto',
	'&:hover': {
		background: '#5D5A88',
	},
}));

export default SignupPage;

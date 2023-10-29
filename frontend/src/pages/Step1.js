import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Grid, Button, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import IdAuth from '../images/IdAuth.jpg';
import axios from 'axios';

function Step1() {
	const [firstPart, setFirstPart] = useState();
	const [secondPart, setSecondPart] = useState();
	const navigate = useNavigate();

	const onSubmitForm = async (event) => {
		event.preventDefault();
		const combinedIdNumber = `${firstPart}${secondPart}`;

		const formData = new FormData();
		formData.append('name', event.target.name.value);
		formData.append('issueDate', event.target.issueDate.value);
		formData.append('idNumber', combinedIdNumber);

		try {
			const response = await axios.post('/IJOA/auth/step1', formData);
			const { success } = response.data;

			if (success) {
				alert('신분증 등록 성공');
			} else {
				alert('신분증 등록 실패');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header />
			<Box>
				<Title>신분증 등록</Title>
				<Box
					sx={{
						margin: '0px 80px',
						width: 'auto',
						height: '1px',
						background: '#C0C0C0',
					}}
				/>
			</Box>
			<Grid
				sx={{
					textAlign: 'center',
					'& img': {
						padding: '40px 0px 15px 0px',
					},
				}}>
				<img src={IdAuth} width='30%' alt='IdAuth' />
				<Box sx={{ color: '#8D8BA7', fontSize: '16px', paddingBottom: '20px' }}>
					주민등록증 모바일 확인 서비스 이용을 위해 <br />
					실물 주민등록증과 동일한 정보를 기입해주세요.
				</Box>
				<form onSubmit={onSubmitForm}>
					<ItemInline direction='row' alignItems='center'>
						<ItemTitle>이름</ItemTitle>
						<TextField name='name' size='small' height='20px' />
						<ItemTitle>발급일자</ItemTitle>
						<TextField name='issueDate' size='small' height='20px' />
					</ItemInline>
					<ItemInline>
						<ItemTitle>주민등록번호</ItemTitle>
						<TextField size='small' height='20px' value={firstPart} onChange={(e) => setFirstPart(e.target.value)} />
						<ItemTitle>-</ItemTitle>
						<TextField size='small' height='20px' value={secondPart} onChange={(e) => setSecondPart(e.target.value)} />
					</ItemInline>
					<Confirm type='submit'>확인</Confirm>
				</form>
			</Grid>
		</>
	);
}

const Title = styled(Box)(() => ({
	padding: '80px 0px 10px 80px',
	fontWeight: 700,
	color: '#5D5A88',
	fontSize: 16,
}));

const ItemInline = styled(Box)(() => ({
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingTop: '20px',
}));

const ItemTitle = styled(Box)(() => ({
	padding: '10px',
	textAlign: 'center',
	display: 'inline-block',
	fontSize: 14,
	color: '#8D8BA7',
}));

const Confirm = styled(Button)(() => ({
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
}));

export default Step1;

import Header from '../components/Header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Box, FormControl, styled } from '@mui/material';
import MyDatePicker from '../components/DatePicker';

function RegisterHealthPage() {
	const navigate = useNavigate();
	const onClickButton = () => {
		navigate('/auth');
	};
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [fileName, setFileName] = useState('');

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			setFileName(file.name);
		}
	};
	return (
		<>
			<Header />
			<Box>
				<Header />
				<Title>보건증 등록</Title>
				<Box
					sx={{
						margin: '0px 80px',
						width: 'auto',
						height: '1px',
						background: '#C0C0C0',
					}}
				/>
			</Box>
			<Grid sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
				<Box sx={{ color: '#8D8BA7', fontSize: '16px', padding: '40px 0px 30px 0px' }}>
					원활한 서비스 이용을 위해 <br />
					발급받은 보건증의 정보를 기입해주세요.
				</Box>
				<Grid
					sx={{
						color: '#4e4e4e',
						fontSize: 14,
						padding: '0px 30px',
					}}>
					<InputBox>
						<div style={{ marginLeft: 60, width: 60 }}>판정일</div>
						<FormControl sx={{ m: 1, width: 200 }}>
							<MyDatePicker selectedDate={startDate} onChange={setStartDate} />
						</FormControl>
					</InputBox>
					<InputBox sx={{ display: 'flex', flexDirection: 'row' }}>
						<div style={{ width: 120 }}>유효기간 만료일</div>
						<FormControl sx={{ m: 1, width: 200 }}>
							<MyDatePicker selectedDate={endDate} onChange={setEndDate} />
						</FormControl>
					</InputBox>
					<InputBox
						sx={{
							display: 'flex',
							flexDirection: 'row',
							paddingTop: '10px',
							paddingBottom: '20px',
						}}>
						<div style={{ marginLeft: 155, width: 90 }}>보건증 사본</div>
						<div>
							<input
								accept='*/*'
								style={{ display: 'none' }}
								id='raised-button-file'
								type='file'
								onChange={handleFileUpload}
							/>
							<Box
								component='input'
								value={fileName}
								readOnly
								placeholder='파일명'
								sx={{
									margin: '10px 0px 10px 0px',
									width: '190px',
									height: 30,
									borderRadius: 1,
									border: '1px solid #c0c0c0',
									padding: '8px 20px',
								}}
							/>
							<label htmlFor='raised-button-file'>
								<Button variant='outlined' component='span' sx={{ marginLeft: 2, height: 45 }}>
									업로드
								</Button>
							</label>
						</div>
					</InputBox>
				</Grid>
				<Confirm onClick={onClickButton}>확인</Confirm>
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

const InputBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	paddingTop: '10px',
	gap: 10,
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

export default RegisterHealthPage;

import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
function Step4() {
	const navigate = useNavigate();

	const [fileName, setFileName] = useState('');

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			setFileName(file.name);
		}
	};

	const onClickButton = async () => {
		const formData = new FormData();

		const fileInput = document.getElementById('raised-button-file');
		if (fileInput.files[0]) {
			console.log('Uploading file:', fileInput.files[0]);
			formData.append('applierDocument', fileInput.files[0]);
		}

		try {
			const response = await axios.post('/IJOA/auth/step4', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (response.data.success) {
				console.log('서류 등록 성공');
				navigate('/auth');
			} else {
				console.error('서류 등록 실패:', response.data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header />
			<Title>기타 서류 등록</Title>
			<Box
				sx={{
					margin: '0px 80px',
					width: 'auto',
					height: '1px',
					background: '#C0C0C0',
				}}
			/>
			<Container>
				<Box
					sx={{
						color: '#5D5A88',
						fontSize: '28px',
						fontWeight: 700,
						marginBottom: '40px',
					}}>
					제출 가능한 서류
				</Box>
				<Box
					sx={{
						color: '#8D8BA7',
						fontSize: '16px',
						paddingBottom: '20px',
						textAlign: 'left',
						paddingLeft: '540px',
					}}>
					<li>6개월 이내 발급 받은 재학증명서</li>
					<li>자격증 증명서</li>
					<li>졸업증명서 또는 학위증</li>
					<li>학교명, 학과명, 인적사항이 작성된 등록금 내역서</li>
				</Box>
				<div>
					<input accept='*/*' style={{ display: 'none' }} id='raised-button-file' type='file' onChange={handleFileUpload} />
					<Box
						component='input'
						value={fileName}
						readOnly
						placeholder='파일명'
						sx={{
							margin: '20px 0px 10px 0px',
							width: '200px',
							height: 25,
							borderRadius: 1,
							border: '1px solid #ddd',
							padding: '8px 20px',
						}}
					/>
					<label htmlFor='raised-button-file'>
						<Button
							variant='outlined'
							component='span'
							type='submit'
							style={{
								background: '#5d5a88',
								color: '#fff',
								fontWeight: 700,
								marginLeft: 15,
								width: 80,
								height: 42,
								border: 'none',
							}}>
							업로드
						</Button>
					</label>
				</div>

				<Confirm onClick={onClickButton}>확인</Confirm>
			</Container>
		</>
	);
}

const Title = styled(Box)(() => ({
	padding: '80px 0px 10px 80px',
	fontWeight: 700,
	color: '#5D5A88',
	fontSize: 16,
}));

const Container = styled(Box)(() => ({
	textAlign: 'center',
	padding: '40px',
}));

const Confirm = styled(Button)(() => ({
	background: '#5D5A88',

	color: 'white',
	fontWeight: '700',
	fontSize: '18px',
	width: '120px',
	height: '50px',
	borderRadius: '47px',
	margin: '35px',
	'&:hover': {
		background: '#5D5A88',
	},
}));

export default Step4;

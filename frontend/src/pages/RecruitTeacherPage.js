import React, { useState } from 'react';
import { Modal, styled, Box, Grid, Button, InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import Header from '../components/Header';
import DaumPostCode from 'react-daum-postcode';
import MyDatePicker from '../components/DatePicker';
import axios from 'axios';

function RecruitTeacherPage() {
	const [typeName, setTypeName] = useState([]);
	const [regularityName, setRegularityName] = useState([]);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [timeName, setTimeName] = useState([]);
	const [dayName, setDayName] = useState([]);
	const [genderName, setGenderName] = useState([]);
	const [ageName, setAgeName] = useState([]);
	const [step, setStep] = useState(1);
	const [postcodeOpen, setPostcodeOpen] = useState();
	const [address, setAddress] = useState();
	const [formData, setFormData] = useState();

	const types = ['놀이돌봄', '등하원돌봄', '교육돌봄', '가사돌봄'];
	const genders = ['남자', '여자'];
	const regularities = ['긴급돌봄', '정기돌봄', '비정기돌봄'];
	const times = ['6시~12시', '12시~18시', '18시~24시'];
	const ages = ['48개월 이하', '7세 이하', '10세 이하', '13세 이하'];
	const days = ['월', '화', '수', '목', '금', '토', '일'];

	const handleAddress = (data) => {
		setAddress(data.address);
		let fullAddress = data.address;
		let extraAddress = '';
		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}
		setFormData((prevData) => ({
			...prevData,
			address: fullAddress,
		}));

		setPostcodeOpen(false);
	};

	const OpenMaps = () => {
		setPostcodeOpen(true);
	};

	const handleMapChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleChange = (event, setState) => {
		const {
			target: { value },
		} = event;

		setState(typeof value === 'string' ? value.split(',') : value);
	};
	const renderStepContent = () => {
		switch (step) {
			case 1:
				return Step1();
			case 2:
				return Step2();
			case 3:
				return Step3();

			default:
				return null;
		}
	};

	const Step1 = () => {
		return (
			<>
				<FormControl sx={{ m: 1, width: 230, marginRight: '20px' }}>
					<CustomLabel id='type-label'>돌봄 유형을 선택해주세요</CustomLabel>
					<CustomSelect
						labelId='type-label'
						id='type'
						multiple
						value={typeName}
						onChange={(e) => handleChange(e, setTypeName)}>
						{types.map((type) => (
							<MenuItem key={type} value={type} style={getStyles(type, typeName)}>
								{type}
							</MenuItem>
						))}
					</CustomSelect>
				</FormControl>

				<FormControl sx={{ m: 1, width: 230, marginBottom: '10px' }}>
					<CustomLabel id='regularity-label'>돌봄 기간을 선택해주세요</CustomLabel>
					<CustomSelect
						labelId='regularity-label'
						id='regularity'
						value={regularityName}
						onChange={(e) => handleChange(e, setRegularityName)}>
						{regularities.map((regularity) => (
							<MenuItem key={regularity} value={regularity}>
								{regularity}
							</MenuItem>
						))}
					</CustomSelect>
				</FormControl>

				<FormControl sx={{ m: 1, width: 230, marginBottom: '25px', marginRight: '20px' }}>
					<div style={{ color: '#4e4e4e', fontSize: 15, marginBottom: 5, position: 'relative' }}>
						돌봄 시작 날짜를 입력해주세요
					</div>
					<MyDatePicker selectedDate={startDate} onChange={setStartDate} />
				</FormControl>

				<FormControl sx={{ m: 1, width: 230 }}>
					<div style={{ color: '#4e4e4e', fontSize: 15, marginBottom: 5 }}>돌봄 종료 날짜를 입력해주세요</div>
					<MyDatePicker selectedDate={endDate} onChange={setEndDate} />
				</FormControl>

				<FormControl sx={{ m: 1, width: 230, marginBottom: '20px', marginRight: '20px' }}>
					<CustomLabel id='time-label'>돌봄 시간을 선택해주세요</CustomLabel>
					<CustomSelect
						labelId='time-label'
						id='time'
						multiple
						value={timeName}
						onChange={(e) => handleChange(e, setTimeName)}>
						{times.map((time) => (
							<MenuItem key={time} value={time} style={getStyles(time, timeName)}>
								{time}
							</MenuItem>
						))}
					</CustomSelect>
				</FormControl>

				<FormControl sx={{ m: 1, width: 230 }}>
					<CustomLabel id='day-label'>돌봄 요일을 선택해주세요</CustomLabel>
					<CustomSelect labelId='day-label' id='day' multiple value={dayName} onChange={(e) => handleChange(e, setDayName)}>
						{days.map((day) => (
							<MenuItem key={day} value={day} style={getStyles(day, dayName)}>
								{day}
							</MenuItem>
						))}
					</CustomSelect>
				</FormControl>
			</>
		);
	};

	const Step2 = () => {
		return (
			<>
				<FormControl sx={{ m: 1, width: 230, marginBottom: '20px', marginRight: '20px' }}>
					<CustomLabel id='gender-label'>자녀의 성별을 입력해주세요</CustomLabel>
					<CustomSelect
						labelId='gender-label'
						id='gender'
						value={genderName}
						onChange={(e) => handleChange(e, setGenderName)}>
						{genders.map((gender) => (
							<MenuItem key={gender} value={gender}>
								{gender}
							</MenuItem>
						))}
					</CustomSelect>
				</FormControl>

				<input
					placeholder='자녀의 이름을 입력해주세요'
					id='name'
					style={{
						width: '210px',
						height: '48px',
						padding: '0px 10px',
						margin: '8px 0px 0px 8px',
						borderRadius: 4,
						border: '1px solid #C0C0C0',
						fontSize: 14,
					}}
				/>

				<FormControl sx={{ m: 1, width: 230, marginBottom: '20px' }}>
					<CustomLabel id='age-label'>자녀의 연령을 선택해주세요</CustomLabel>
					<CustomSelect labelId='age-label' id='age' multiple value={ageName} onChange={(e) => handleChange(e, setAgeName)}>
						{ages.map((age) => (
							<MenuItem key={age} value={age} style={getStyles(age, ageName)}>
								{age}
							</MenuItem>
						))}
					</CustomSelect>
				</FormControl>

				<input
					placeholder='특이사항이 있다면 작성해주세요'
					id='detail'
					style={{
						width: '210px',
						height: '48px',
						padding: '0px 10px',
						margin: '8px 0px 0px 20px',
						borderRadius: 4,
						border: '1px solid #C0C0C0',
						fontSize: 14,
					}}
				/>

				<Grid sx={{ marginBottom: '20px' }}>
					<input
						id='place'
						placeholder='돌봄 장소를 입력해주세요'
						style={{
							width: '210px',
							height: '48px',
							padding: '0px 10px',
							margin: '8px 20px 0px 8px',
							borderRadius: 4,
							border: '1px solid #C0C0C0',
							fontSize: 14,
						}}
						value={address}
						InputProps={{
							readOnly: true,
						}}
					/>

					<Button
						style={{
							width: '120px',
							height: 48,
							background: '#5d5a88',
							color: '#fff',
							fontWeight: 700,
						}}
						onClick={OpenMaps}>
						우편번호 찾기
					</Button>
				</Grid>

				<Grid>
					<input
						id='place'
						placeholder='상세 주소를 입력해주세요'
						style={{
							width: '465px',
							height: '48px',
							padding: '0px 10px',
							margin: '8px 0px 0px 8px',
							borderRadius: 4,
							border: '1px solid #C0C0C0',
							fontSize: 14,
						}}
					/>
				</Grid>

				<Modal open={postcodeOpen} onClose={() => setPostcodeOpen(false)}>
					<div
						style={{
							width: '400px',
							height: '450px',
							padding: '20px',
							position: 'absolute',
							top: '40%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							background: '#fff',

							fontSize: 18,
							fontWeight: 700,
							color: '#4e4e4e',
						}}>
						우편번호 찾기
						<DaumPostCode onComplete={handleAddress} />
					</div>
				</Modal>
			</>
		);
	};

	const Step3 = () => {
		return (
			<>
				<Grid sx={{ color: '#5d5a88', fontWeight: 700, fontSize: 18 }}>신청서 제목 작성</Grid>
				<Box
					component='input'
					placeholder='제목을 입력해주세요'
					sx={{
						margin: '10px 0px 10px 0px',
						width: 470,
						borderRadius: 2,
						border: '2px solid #ddd',
						padding: '15px',
					}}
				/>
				<Grid sx={{ color: '#5d5a88', fontWeight: 700, fontSize: 18 }}>상세 내용 작성</Grid>
				<Box
					component='textarea'
					placeholder='내용을 작성해주세요'
					sx={{
						margin: '10px 0px 10px 0px',
						width: 470,
						height: 150,
						borderRadius: 4,
						border: '2px solid #ddd',
						padding: '15px',
						color: 'rgba(0, 0, 0, 0.54)',
						fontFamily: 'Arial, sans-serif',
						fontSize: 14,
						resize: 'none',
					}}
				/>
			</>
		);
	};

	const submitData = async () => {
		try {
			const response = await axios.post('/IJOA/client/register');
			if (response.data.success) {
				alert('등록 성공');
			} else {
				alert('등록 실패');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const getStyles = (type, typeName) => {
		return typeName.includes(type) ? { fontWeight: 'bold' } : {};
	};

	return (
		<>
			<Header />
			<Grid sx={{ display: 'flex', flexDirection: 'row' }}>
				<Grid sx={{ textAlign: 'center', margin: '220px 200px' }}>
					<div
						style={{
							color: '#5D5A88',
							fontSize: '30px',
							fontWeight: '700',
							marginBottom: '10px',
						}}>
						원하시는 돌봄 서비스를 <br />
						입력해주세요.
					</div>
					<div
						style={{
							color: '#9795B5',
						}}>
						아이조아가 최적의 돌보미를 찾아드립니다!
					</div>
				</Grid>

				<SelectForm>
					<Grid>
						<div style={{ color: '#8D8Ba7', fontSize: 20 }}>돌봄 서비스 신청하기</div>
						<Stepper>{`Step ${step} of 3`}</Stepper>
						<Grid sx={{ margin: '30px 0px' }}>{renderStepContent()}</Grid>

						<ButtonForm>
							<Button
								type='submit'
								style={{
									fontSize: '18px',
									width: '150px',
									color: '#5d5a88',
									border: '1px solid #5a5d88',
								}}
								onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))}>
								이전
							</Button>
							{step < 3 ? (
								<Button
									style={{
										background: '#5d5a88',
										color: '#fff',
										fontWeight: 700,
										fontSize: '18px',
										width: '150px',
									}}
									onClick={() => setStep((prevStep) => prevStep + 1)}>
									다음
								</Button>
							) : (
								<Button
									onClick={submitData}
									style={{
										background: '#5d5a88',
										color: '#fff',
										fontWeight: 700,
										fontSize: '18px',
										width: '150px',
									}}>
									제출하기
								</Button>
							)}
						</ButtonForm>
					</Grid>
				</SelectForm>
			</Grid>
		</>
	);
}

const CustomLabel = styled(InputLabel)({
	fontSize: 14,
	'&.MuiInputLabel-shrink': {
		transform: 'translate(0px, -20px)',
	},
});

const CustomSelect = styled(Select)({
	height: '50px',
	fontSize: 14.5,
});

const SelectForm = styled(Box)(() => ({
	display: 'flex',
	width: 510,
	height: '70%',
	padding: '30px',
	alignItems: 'flex-start',
	border: '1px solid #DDE2E5',
	borderRadius: '20px',
	margin: '80px 100px 30px 20px',
}));

const Stepper = styled(Grid)(() => ({
	width: '510px',
	display: 'flex',
	flexDirection: 'column',
	color: '#5D5A88',
	fontSize: '12px',
	textAlign: 'right',
	padding: '10px 0px',
	borderBottom: '6px solid #e2e6f9',
}));

const Font = styled(Grid)(() => ({
	color: '#ABAFB1',
	fontSize: '14px',
}));

const ButtonForm = styled(Box)(() => ({
	gap: 20,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
}));

export default RecruitTeacherPage;

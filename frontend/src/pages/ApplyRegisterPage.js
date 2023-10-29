import Header from '../components/Header';
import { Box, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

function ApplyRegisterPage() {
	const days = ['월', '화', '수', '목', '금', '토', '일'];
	const times = ['0시~6시', '6시~12시', '12시~18시', '18시~24시'];
	const ages = ['48개월 이하', '7세 이하', '10세 이하', '13세 이하'];
	const periods = ['정기돌봄(최소 한 달, 주 2회 이상)', '비정기 돌봄'];
	const sexs = ['남자', '여자'];
	const activities = ['놀이 돌봄', '등하원 돌봄', '교육 돌봄', '가사 돌봄'];

	return (
		<>
			<Header />
			<Container>
				<Box
					sx={{
						color: '#5D5A88',
						fontSize: '24px',
						fontWeight: 700,
						marginTop: '100px',
					}}>
					프로필을 먼저 등록하여 <br />
					돌보미로 활동해보세요
				</Box>
			</Container>
			<Grid sx={{ padding: '100px 0px 10px 100px', fontWeight: 700, color: '#5D5A88', fontSize: 16 }}>
				돌봄 지원서 등록
			</Grid>
			<Grid
				sx={{
					margin: '0px 100px 00px 100px',
					width: 'auto',
					height: '1px',
					background: '#C0C0C0',
				}}
			/>

			<Grid sx={{ display: 'flex', flexDirection: 'row' }}>
				<Grid sx={{ padding: '0px 130px' }}>
					<Title>희망 요일</Title>
					{days.map((day, index) => (
						<StyledLabel key={index} htmlFor={`day-checkbox-${index}`}>
							<input type='checkbox' id={`day-checkbox-${index}`} />
							{day}
						</StyledLabel>
					))}

					<Title>희망 시간</Title>
					{times.map((time, index) => (
						<StyledLabel key={index} htmlFor={`time-checkbox-${index}`}>
							<input type='checkbox' id={`time-checkbox-${index}`} />
							{time}
						</StyledLabel>
					))}

					<Title>희망 연령</Title>
					{ages.map((age, index) => (
						<StyledLabel key={index} htmlFor={`age-checkbox-${index}`}>
							<input type='checkbox' id={`age-checkbox-${index}`} />
							{age}
						</StyledLabel>
					))}

					<Title>희망 성별</Title>
					{sexs.map((sex, index) => (
						<StyledLabel key={index} htmlFor={`sex-checkbox-${index}`} style={{ display: 'block' }}>
							<input type='checkbox' id={`sex-checkbox-${index}`} />
							{sex}
						</StyledLabel>
					))}

					<Title>정기 여부</Title>
					{periods.map((period, index) => (
						<StyledLabel key={index} htmlFor={`period-checkbox-${index}`} style={{ display: 'block' }}>
							<input type='checkbox' id={`period-checkbox-${index}`} />
							{period}
						</StyledLabel>
					))}
				</Grid>
				<Grid sx={{ padding: '0px 100px' }}>
					<Title>돌봄 활동</Title>
					{activities.map((activity, index) => (
						<StyledLabel key={index} htmlFor={`activity-checkbox-${index}`}>
							<input type='checkbox' id={`activity-checkbox-${index}`} />
							{activity}
						</StyledLabel>
					))}

					<Title sx={{ fontSize: '24px', paddingTop: '50px' }}>자기소개서</Title>
					<Grid sx={{ color: '#5d5a88', padding: '10px 0px 10px 0px', fontWeight: 700, fontSize: 18 }}>제목 작성</Grid>
					<Box
						component='input'
						placeholder='제목을 입력해주세요'
						sx={{
							margin: '10px 0px 10px 0px',
							width: 500,
							borderRadius: 2,
							border: '2px solid #ddd',
							padding: '15px',
						}}
					/>
					<Title>내용 작성</Title>
					<Box
						component='textarea'
						placeholder='내용을 작성해주세요'
						sx={{
							margin: '10px 0px 10px 0px',
							width: 500,
							height: 200,
							borderRadius: 4,
							border: '2px solid #ddd',
							padding: '15px',
							color: 'rgba(0, 0, 0, 0.54)',
							fontFamily: 'Arial, sans-serif',
							fontSize: 14,
							resize: 'none',
						}}
					/>
				</Grid>
			</Grid>
			<ButtonForm>
				<Button
					type='submit'
					style={{
						background: '#5d5a88',
						color: '#fff',
						fontWeight: 700,
						fontSize: '18px',
						width: '300px',
					}}>
					등록하기
				</Button>
				<Button
					style={{
						fontSize: '18px',
						width: '300px',
						color: '#5d5a88',
						border: '1px solid #5a5d88',
					}}>
					수정하기
				</Button>
			</ButtonForm>
		</>
	);
}

const Container = styled(Box)(() => ({
	textAlign: 'center',
	color: '#8D8BA7',
	fontSize: '16px',
}));

const Title = styled(Box)(() => ({
	color: '#5d5a88',
	padding: '50px 0px 10px 0px',
	fontWeight: 700,
	fontSize: 18,
}));

const ButtonForm = styled(Box)(() => ({
	padding: '50px 0px',
	gap: 20,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
}));

const StyledLabel = styled('label')({
	color: 'rgba(0, 0, 0, 0.54)',
	margin: '10px',
});

export default ApplyRegisterPage;

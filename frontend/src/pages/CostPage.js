import React, { useState } from 'react';
import Header from '../components/Header';
import { Button, Box, TextField, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import CostedModal from '../components/CostedModal';
import UncostedModal from '../components/UncostedModal';
import Footer from '../components/Footer';

const BANKS = [
	{ value: 'sh', name: '신한' },
	{ value: 'nh', name: '농협' },
	{ value: 'kb', name: '국민' },
	{ value: 'ibk', name: '기업' },
];

const SelectList = (props) => {
	return (
		<select>
			{props.options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};

function CostPage() {
	const [open, setOpen] = useState(false);

	const UncostedModalOpen = () => setOpen(true);
	const UncostedModalClose = () => setOpen(false);

	const CostedModalOpen = () => setOpen(true);
	const CostedModalClose = () => setOpen(false);

	return (
		<>
			<Header />
			<Title>돌봄 활동 정산</Title>
			<Box
				sx={{
					marginLeft: '80px',
					width: '1350px',
					height: '1px',
					background: '#C0C0C0',
					my: 1,
				}}
			/>
			<Container>
				<Container>
					<Title>계좌 등록</Title>
					<InputDepositorName type='text' placeholder='예금주명을 입력하세요' />
					<SelectBank options={BANKS} placeholder='은행을 선택하세요' />
					<InputAccountNumber type='text' placeholder='계좌번호를 입력하세요' />
					<SubmitAccount>계좌 등록하기</SubmitAccount>
				</Container>

				<Container>
					<Title>미정산 활동 내역 조회</Title>
					<ModalButton onClick={UncostedModalOpen}>조회하기</ModalButton>
					<Title>활동비 정산 내역 조회</Title>
					<ModalButton onClick={CostedModalOpen}>조회하기</ModalButton>
				</Container>
			</Container>
			<Footer />

			<CostedModal open={open} handleClose={CostedModalClose} />
			<UncostedModal open={open} handleClose={UncostedModalClose} />
		</>
	);
}
const Title = styled(Box)(() => ({
	padding: '80px 0px 10px 80px',
	fontWeight: 700,
	color: '#5D5A88',
	fontSize: 18,
}));

// const Title = styled(Box)(() => ({
//   color: "#5d5a88",
//   padding: "20px 0px 5px 0px",
//   fontWeight: 700,
//   fontSize: 18,
// }));

const InputDepositorName = styled('input')(() => ({
	display: 'flex',
	borderRadius: '12px',
	border: '2px solid #ddd',
	width: 200,
	height: 30,
	padding: '10px 15px',
	justifyContent: 'space-between',
	//margin: "30px 0px 10px 0px",
	alignItems: 'center',
	color: 'black',
	fontSize: 14,
	'&:focus': {
		outline: 'none',
	},
}));

const InputAccountNumber = styled('input')(() => ({
	display: 'flex',
	borderRadius: '12px',
	border: '2px solid #ddd',
	width: 200,
	height: 30,
	padding: '10px 15px',
	justifyContent: 'space-between',
	//margin: "30px 0px 10px 0px",
	alignItems: 'center',
	color: 'black',
	fontSize: 14,
	'&:focus': {
		outline: 'none',
	},
}));

const SelectBank = styled(SelectList)(() => ({
	display: 'flex',
	borderRadius: '12px',
	border: '2px solid #ddd',
	width: 200,
	height: 30,
	padding: '10px 15px',
	justifyContent: 'space-between',
}));

const SubmitAccount = styled(Button)(() => ({
	background: '#5D5A88',
	color: 'white',
	fontWeight: '700',
	fontSize: '14px',
	width: '120px',
	height: '40px',
	borderRadius: '50px',
	margin: '25px 0px 0px 10px',
	'&:hover': {
		background: '#5D5A88',
	},
}));

const ModalButton = styled(Button)(() => ({
	background: '#5D5A88',
	color: 'white',
	fontWeight: '700',
	fontSize: '14px',
	width: '250px',
	height: '40px',
	borderRadius: '50px',
	margin: '25px 0px 0px 10px',
	'&:hover': {
		background: '#5D5A88',
	},
}));

export default CostPage;

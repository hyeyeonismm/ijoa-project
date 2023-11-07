import React, { useState, useEffect } from 'react';
import { styled, Box, Grid, Stack, Button, ButtonBase } from '@mui/material';
import UserProfileModal from './UserProfileModal.js';
import Teachers from '../data/Teachers';
import Parents from '../data/Parents.js';

function DetailSchedule({ userType }) {
	const [selectedRegularity, setSelectedRegularity] = useState([]);
	const [selectedDays, setSelectedDays] = useState([]);
	const [selectedTime, setSelectedTime] = useState([]);
	const [open, setOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleItemClick = (user) => {
		setSelectedUser(user);
		handleOpen();
	};

	const filteredUsers = Object.values(userType === 'teacher' ? Teachers : Parents).filter((user) => {
		const regularity = user?.apply?.[0]?.regularity;
		const day = user?.apply?.[0]?.day;
		const time = user?.apply?.[0]?.time;

		console.log('User Time:', time);
		console.log('Selected Time:', selectedTime);
		return (
			selectedRegularity.some((r) => regularity?.includes(r)) ||
			(selectedDays.length === day?.length && selectedDays.every((d) => day?.includes(d))) ||
			selectedTime.some((t) => time?.includes(t))
		);
	});

	return (
		<>
			<SearchBox>
				<Titles>
					<list>긴급/단기/정기</list>
					<list>요일</list>
					<list>시간</list>
				</Titles>
				<Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>
					<Grid
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 1.5,
							marginLeft: 22,
						}}
					>
						{['긴급돌봄', '비정기돌봄', '정기돌봄'].map((regularity, index) => (
							<KeyButton
								key={index}
								isSelected={selectedRegularity.includes(regularity)}
								onClick={() => {
									if (selectedRegularity.includes(regularity)) {
										setSelectedRegularity((prev) => prev.filter((item) => item !== regularity));
									} else {
										setSelectedRegularity((prev) => [...prev, regularity]);
									}
								}}
							>
								{regularity}
							</KeyButton>
						))}
					</Grid>

					<Box sx={{ display: 'flex', flexWrap: 'wrap', maxHeight: 30, marginLeft: 18 }}>
						{['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
							<KeyButton
								key={index}
								sx={{ marginBottom: 2 }}
								isSelected={selectedDays.includes(day)}
								onClick={() => {
									if (selectedDays.includes(day)) {
										setSelectedDays((prev) => prev.filter((item) => item !== day));
									} else {
										setSelectedDays((prev) => [...prev, day]);
									}
								}}
							>
								{day}
							</KeyButton>
						))}
					</Box>

					<Grid
						sx={{
							display: 'flex',
							flexDirection: 'column',
							marginRight: 18,
							gap: 1.5,
						}}
					>
						{['6시~12시', '12시~18시', '18시~24시'].map((time, index) => (
							<KeyButton
								key={index}
								isSelected={selectedTime.includes(time)}
								onClick={() => {
									if (selectedTime.includes(time)) {
										setSelectedTime((prev) => prev.filter((item) => item !== time));
									} else {
										setSelectedTime((prev) => [...prev, time]);
									}
								}}
							>
								{time}
							</KeyButton>
						))}
					</Grid>
				</Box>
			</SearchBox>
			<Stack sx={{ margin: '40px 0px' }}>
				<Grid container sx={{ textAlign: 'center', color: '#5d5a88' }}>
					<ListHeader item xs={1.5}>
						Profile
					</ListHeader>
					<ListHeader item xs={2}>
						Name
					</ListHeader>
					<ListHeader item xs={2}>
						Address
					</ListHeader>
					<ListHeader item xs={3}>
						Title
					</ListHeader>
					<ListHeader item xs={2}>
						Schedule
					</ListHeader>
					<ListHeader item xs={1.5}>
						{userType === 'teacher' ? 'Rating' : 'Apply'}
					</ListHeader>
				</Grid>

				{filteredUsers.map((user, index) => (
					<ButtonBase key={index} onClick={() => handleItemClick(user)}>
						<Grid container key={index}>
							<ListItem item xs={1.5}>
								profile
							</ListItem>
							<ListItem item xs={2}>
								{user.name}
							</ListItem>
							<ListItem item xs={2}>
								{`${user.apply[0].address.city}특별시 ${user.apply[0].address.region} ${user.apply[0].address.subregion}`}
							</ListItem>
							<ListItem item xs={3}>
								{user.apply[0]?.introduction?.title}
							</ListItem>
							<ListItem item xs={2}>
								{user.apply[0]?.day.join(', ')}
							</ListItem>
							<ListItem item xs={1.5}>
								{userType === 'teacher' ? (
									user.rating
								) : (
									<span
										role='button'
										onClick={(e) => {
											e.stopPropagation();
											handleItemClick(filteredUsers[index]);
										}}
										style={{
											cursor: 'pointer',
											color: '#fff',
											background: '#DC3545',
											padding: '8px 15px',
											borderRadius: 20,
										}}
									>
										신청하기
									</span>
								)}
							</ListItem>
						</Grid>
					</ButtonBase>
				))}
			</Stack>
			{open && <UserProfileModal open={open} handleClose={handleClose} user={selectedUser} userType={userType} />}
		</>
	);
}

const SearchBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	padding: '10px 0px 10px 10px',
	marginTop: '2px',
	borderRadius: 8,
	border: '2px solid #CFD3D4',
}));

const KeyButton = styled(Button)(({ isSelected }) => ({
	display: 'block',
	width: 100,
	color: '#6C757D',
	height: 30,
	backgroundColor: isSelected ? 'rgba(204, 201, 255, 0.35)' : 'transparent',
	'&:hover': {
		backgroundColor: isSelected ? 'rgba(204, 201, 255, 0.35)' : 'transparent',
	},
}));

const Titles = styled(Grid)(() => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	paddingRight: 180,
	paddingLeft: 180,
	color: '#6c757d',
	fontSize: '14px',
}));
const ListHeader = styled(Grid)(() => ({
	padding: '10px',
	fontSize: '14px',
	borderTop: '1px solid #ddd',
	borderBottom: '1px solid #ddd',
}));

const ListItem = styled(Grid)(() => ({
	fontSize: 14,
	textAlign: 'center',
	lineHeight: '30px',
	padding: '10px',
	borderBottom: '1px solid #ddd',
}));

export default DetailSchedule;

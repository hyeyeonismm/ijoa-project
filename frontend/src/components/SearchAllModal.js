import React, { useState } from 'react';
import { styled, Grid, Stack, ButtonBase } from '@mui/material';
import UserProfileModal from './UserProfileModal.js';
import Teachers from '../data/Teachers';
import Parents from '../data/Parents';

function SearchAllModal({ userType }) {
	const [open, setOpen] = useState();
	const [selectedUser, setSelectedUser] = useState();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleItemClick = (user) => {
		setSelectedUser(user);
		handleOpen();
	};

	const UserFormat = (user) => {
		return {
			name: user.name,
			adress: `${user.apply[0].address.city}특별시 ${user.apply[0].address.region} ${user.apply[0].address.subregion}`,
			title: user.apply[0]?.introduction?.title,
			schedule: user.apply[0]?.day.join(', '),
			rating: user.rating,
		};
	};
	const usersArray = Object.values(userType === 'teacher' ? Teachers : Parents);
	const [userList, setUserList] = useState(usersArray.map((user) => UserFormat(user)));

	return (
		<>
			<ListStack>
				<Grid
					container
					sx={{
						textAlign: 'center',
						color: '#5D5A88',
					}}
				>
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

				{userList.map((user, index) => (
					<ButtonBase key={index} onClick={() => handleItemClick(usersArray[index])}>
						<Grid container key={index}>
							<ListSubItem item xs={1.5}>
								profile
							</ListSubItem>
							<ListSubItem item xs={2}>
								{user.name}
							</ListSubItem>
							<ListSubItem item xs={2}>
								{user.adress}
							</ListSubItem>
							<ListSubItem item xs={3}>
								{user.title}
							</ListSubItem>
							<ListSubItem item xs={2}>
								{user.schedule}
							</ListSubItem>
							<ListSubItem item xs={1.5}>
								{userType === 'teacher' ? (
									user.rating
								) : (
									<span
										role='button'
										onClick={() => handleItemClick(usersArray[index])}
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
							</ListSubItem>
						</Grid>
					</ButtonBase>
				))}
			</ListStack>
			{open && <UserProfileModal open={open} handleClose={handleClose} user={selectedUser} userType={userType} />}
		</>
	);
}

const ListStack = styled(Stack)(() => ({
	margin: '40px 120px 0px 120px',
}));

const ListHeader = styled(Grid)(() => ({
	// justifyContent: "space-between",
	padding: '10px',
	fontSize: '14px',
	borderTop: '1px solid #ddd',
	borderBottom: '1px solid #ddd',
}));

const ListSubItem = styled(Grid)(() => ({
	fontSize: 14,
	textAlign: 'center',
	lineHeight: '30px',
	padding: '10px',
	borderBottom: '1px solid #ddd',
}));

export default SearchAllModal;

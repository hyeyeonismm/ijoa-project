import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Box, ListItem, IconButton, Badge, styled, Avatar, Grid } from '@mui/material';
import plusicon from '../images/plusIcon.png';
import CertificateOfWriteModal from '../components/CertificateOfWriteModal.js';
import CertificateOfConfirmModal from '../components/CertificateOfConfirmModal.js';
import Parents from '../data/Parents';
import Teachers from '../data/Teachers';
import Chats from '../data/Chats';

function ChattingPage() {
	const location = useLocation();
	const [selectedChat, setSelectedChat] = useState(location.state?.chatUser);
	const user = Teachers['hyeyeon'];
	const [chatUserToPass, setChatUserToPass] = useState(null);

	const chatUsers = Object.keys(Chats['김혜연']);

	return (
		<>
			<Header />
			<Grid sx={{ display: 'flex', width: '100%', height: 'auto' }}>
				<Grid
					sx={{
						display: 'flex',
						padding: '70px 0px 0px 80px',
						width: '349px',
						flexDirection: 'column',
					}}
				>
					<Box
						sx={{
							color: '#5D5A88',
							paddingLeft: 1,
							fontSize: '18px',
							fontWeight: '700',
						}}
					>
						<Badge badgeContent={4} color='primary' sx={{ paddingRight: 1 }}>
							{user.name}님의 Message
						</Badge>
					</Box>
					<SearchField type='text' placeholder='Search messages' />
					<ListItem
						sx={{
							display: 'block',
							padding: 0,
						}}
					>
						{chatUsers.map((chatUser) => (
							<ListButton
								key={chatUser}
								onClick={() => {
									setSelectedChat(chatUser);
									setChatUserToPass(chatUser);
								}}
							>
								<Avatar />
								<ListText>{chatUser}</ListText>
							</ListButton>
						))}
					</ListItem>
				</Grid>
				<Grid>
					{selectedChat ? (
						<ChatContent user={user.name} chatUser={chatUserToPass} />
					) : (
						<NoneChat>대화를 시작해보세요!</NoneChat>
					)}
				</Grid>
			</Grid>
		</>
	);
}

function ChatContent({ user, chatUser }) {
	const [open, setOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [chatMessages, setChatMessages] = useState(Chats[user]?.[chatUser] || []);

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		setChatMessages(Chats[user]?.[chatUser] || []);
	}, [chatUser, user]);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState(null); // 'write' or 'confirm' or null

	const openModal = (type) => {
		setIsModalOpen(true);
		setModalType(type);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalType(null);
	};

	return (
		<>
			<Grid sx={{ display: 'flex', padding: '80px', flexdirection: 'column' }}>
				<section xs={{ display: 'flex', flexDirection: 'column' }}>
					<Username>
						<Avatar />
						<Box sx={{ fontSize: 18, fontWeight: 700, lineHeight: 2, paddingLeft: '3px' }}>{chatUser}</Box>
					</Username>
					<Box sx={{ display: 'flex', flexDirection: 'column', padding: '0px 20px' }}>
						{chatMessages &&
							chatMessages.map((message, index) => (
								<Messages key={index} className={message.sender === user ? 'sender-right' : 'sender-left'}>
									{message.text}
									{/* {message.timestamp} */}
								</Messages>
							))}
						<Notice>
							{chatUser}님이 7월 15일 (토) 오후 6:15에 <br />
							돌봄확인서 작성을 요청했어요. 돌봄확인서를 작성해주세요.
							<ModalButton onClick={() => openModal('write')}>돌봄확인서 작성하기</ModalButton>
							{user}님이 7월 15일 (토) 오후 6:25에 <br />
							돌봄확인서 확인을 요청했어요. 돌봄확인서를 확인해주세요.
							<ModalButton onClick={() => openModal('confirm')}>돌봄확인서 확인하기</ModalButton>
							돌봄이 확정되었습니다!
							<br />
							보다 구체적인 정보는 마이페이지에서 확인 가능합니다.
							<br />
							불가피하게 돌봄을 취소할 경우, 기한 별로 제재가 가해질 수 있습니다.
						</Notice>
					</Box>
					<ChatInput sx={{ position: 'relative' }}>
						<IconButton
							onClick={handleMenuOpen}
							sx={{
								'&:hover': {
									background: 'none',
								},
							}}
						>
							<img src={plusicon} width={24} height={24} alt='plusicon' />
						</IconButton>
						{menuOpen && (
							<Grid
								style={{
									display: 'flex',
									flexDirection: 'column',
									border: '1px solid #ddd',
									position: 'absolute',
									borderRadius: 20,
									bottom: 65,
									left: -80,
								}}
							>
								<DropdownButton onClick={() => openModal('write')}>돌봄확인서 작성 요청하기</DropdownButton>
								<DropdownButton onClick={() => openModal('write')}>돌봄확인서 작성하기</DropdownButton>
								<DropdownButton
									onClick={() => {
										setMenuOpen(false);
									}}
								>
									사진 전송하기
								</DropdownButton>
							</Grid>
						)}
						<InputChatText type='text' placeholder='메시지를 입력하세요' />
						<Button
							sx={{
								background: '#5D5A88',
								color: 'white',
								fontWeight: '700',
								borderRadius: '47px',
								margin: '10px',
								'&:hover': {
									background: '#5D5A88',
								},
							}}
						>
							전송
						</Button>
					</ChatInput>
				</section>
			</Grid>
			{modalType === 'write' && <CertificateOfWriteModal open={isModalOpen} handleClose={closeModal} />}
			{modalType === 'confirm' && <CertificateOfConfirmModal open={isModalOpen} handleClose={closeModal} />}
		</>
	);
}

const Messages = styled(Box)(() => ({
	padding: '10px',
	borderRadius: '5px',
	margin: '5px',
	fontSize: 14,

	'&.sender-left': {
		backgroundColor: 'rgba(241, 241, 241, 1)',
		color: 'black',
		alignSelf: 'flex-start',
	},
	'&.sender-right': {
		backgroundColor: 'rgba(93, 90, 136, 0.70)',
		color: 'white',
		alignSelf: 'flex-end',
	},
}));

const Username = styled(Grid)({
	display: 'flex',
	padding: '10px',
	gap: '10px',
	borderBottom: '1px solid #ddd',
	marginBottom: 40,
});

const Notice = styled('box')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
	alignItems: 'center',
	padding: '0px 40px 0px 40px',
	margin: 20,
	fontSize: '14px',
	color: '#9795b5',
	width: 800,
});

const ModalButton = styled(Button)({
	width: 170,
	height: 45,
	padding: '8px 16px',
	margin: 20,
	gap: '10px',
	background: '#e1f1f6',
	borderRadius: '12px',
	border: 'none',
	'&:hover': {
		opacity: '0.7',
	},
});

const DropdownButton = styled(Button)({
	width: 200,
	height: 45,
	color: '#9795b5',
	border: 'none',
	'&:hover': {
		opacity: '0.7',
	},
});

const ChatInput = styled('box')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: '20px 40px 0px 0px',
	margin: 20,
	width: 900,
	height: 50,
});

const InputChatText = styled('input')({
	display: 'flex',
	borderRadius: '12px',
	border: '2px solid #ddd',
	width: 750,
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
});

const SearchField = styled('input')({
	borderRadius: '12px',
	background: '#f3f3f3',
	border: 'none',
	height: 38,
	display: 'flex',
	padding: '10px 20px',
	margin: '15px 0px 10px 0px',
	alignItems: 'center',
	color: '#87898E',
	fontSize: 14,
	'&:focus': {
		outline: 'none',
	},
});

const ListButton = styled('button')({
	border: 'none',
	background: 'none',
	display: 'flex',
	alignItems: 'flex-start',
	padding: '10px',
	gap: '16px',
	height: '72px',
	'&:hover': {
		borderRadius: 12,
		background: 'rgba(97, 94, 240, 0.06)',
	},
});

const ListText = styled('box')({
	fontSize: '14px',
	width: '230px',
	fontWeight: 700,
	lineHeight: '150%',
	textAlign: 'left',
});

const NoneChat = styled('grid')({
	fontSize: 30,
	color: '#5d5a88',
	fontWeight: 700,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '900px',
	height: '400px',
	padding: '80px',
	flexdirection: 'column',
	gap: 32,
});

export default ChattingPage;

import { Box, Grid, Stack, Button, Modal, FormGroup, FormControl, TextField, Checkbox } from '@mui/material';
import Close from '@mui/icons-material/CloseRounded';
import { styled } from '@mui/material/styles';

function CostedModal({ open, handleClose }) {
	return (
		<>
			<Modal open={open} onClose={handleClose}>
				<Body alignItems='center'>
					<CloseButton onClick={handleClose} title='닫기' />
				</Body>
			</Modal>
		</>
	);
}

const Body = styled(Stack)(() => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '480px',
	height: '600px',
	overflowX: 'hidden',
	overflowY: 'auto',
	backgroundColor: 'white',
	borderRadius: '10px',
	boxShadow: '0 10px 50px rgb(70, 70, 70)',
	padding: '20px 20px 40px 30px',
}));

const CloseButton = styled(Close)(() => ({
	position: 'absolute',
	right: 20,
	cursor: 'pointer',
	color: 'grey',
	fontSize: 26,
	'&:hover': {
		color: 'lightgrey',
	},
}));

export default CostedModal;

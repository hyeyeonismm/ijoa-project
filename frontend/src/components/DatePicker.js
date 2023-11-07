// DatePicker.js
import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const StyledDatePicker = styled(DatePicker)`
	width: 190px;
	height: 30px;
	border-radius: 4px;
	border: 1px solid #c0c0c0;
	padding: 8px 20px;
	background-color: rgba(255, 255, 255, 0.9);
	.react-datepicker__header,
	.react-datepicker__day-names {
		background-color: rgba(255, 255, 255, 1);
	}
	position: relative !important;
	z-index: 1000 !important;
`;

const MyDatePicker = ({ selectedDate, onChange }) => {
	return (
		<>
			<StyledDatePicker
				locale={ko}
				selected={selectedDate}
				dateFormat='yyyy년 MM월 dd일'
				onChange={onChange}
				popperPlacement='top-start'
				customInput={<input style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: 14.5 }} />}
			/>
		</>
	);
};

export default MyDatePicker;

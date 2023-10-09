import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SignupPage2 from './pages/SignupPage2';
import MyPage from './pages/MyPage';
import AuthPage from './pages/AuthPage';
import IdAuthPage from './pages/IdAuthPage';
import CrimeAuthPage from './pages/CrimeAuthPage';
import AcademicAuthPage from './pages/AcademicAuthPage';
import SearchTeacherPage from './pages/SearchTeacherPage';
import RecruitTeacherPage from './pages/RecruitTeacherPage';
import ChattingPage from './pages/ChattingPage';
import ApplyRegisterPage from './pages/ApplyRegisterPage';
import SearchCarePage from './pages/SearchCarePage';
import CostPage from './pages/CostPage';
import RegisterHealth from './pages/RegisterHealthPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/signup2' element={<SignupPage2 />} />
				<Route path='/mypage' element={<MyPage />} />
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/idauth' element={<IdAuthPage />} />
				<Route path='/crimeauth' element={<CrimeAuthPage />} />
				<Route path='/academicauth' element={<AcademicAuthPage />} />
				<Route path='/searchteacher' element={<SearchTeacherPage />} />
				<Route path='/recruitteacher' element={<RecruitTeacherPage />} />
				<Route path='/chatting' element={<ChattingPage />} />
				<Route path='/applyregister' element={<ApplyRegisterPage />} />
				<Route path='/searchcare' element={<SearchCarePage />} />
				<Route path='/cost' element={<CostPage />} />
				<Route path='/registerhealth' element={<RegisterHealth />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

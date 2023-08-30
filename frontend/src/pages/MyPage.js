import { Container } from "@mui/material";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import profileimg from "../images/profileimgtest.png";
import { Box, Menu, MenuItem, Button } from "@mui/material";

function MyPage() {
  return (
    <>
      <Header />
      <Container>
        <div style={{width: 1100,  position: 'relative'}}>
          <div style={{width: 174, height: 174, paddingRight: 3, left: 46, top: 0, position: 'relative', borderRadius: 200, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width: 170, height: '100%', borderRadius: 9999}} src={profileimg} />
          </div>
          
          <div style={{width: 500}}>
            <div>돌보미 승인 대기 / 돌보미 승인 완료</div>
            <div><UserName>USERNAME</UserName> 회원님</div>
            <div>nickname</div>
            <div>ID</div>
            <div>email</div>
          </div>
        </div>

        <div style={{width: 1100, position: 'relative'}}>
          <ListContainer>
            <ContainerName>돌봄 지원서 관리</ContainerName>
            <div>돌봄 지원서 등록</div><br/>
            <div>돌봄 지원서 조회(수정, 삭제)</div><br/>
            <div>돌봄 요청 현황 확인</div>
          </ListContainer>

          <ListContainer>
            <ContainerName>돌봄내역조회</ContainerName>
            <div>돌봄 내역 조회</div>
          </ListContainer>
          <ListContainer>
            <ContainerName>돌봄 활동 정산</ContainerName>
            <div>계좌 등록</div>
          </ListContainer>
        </div>
        


      </Container>
    </>
  );
}

// const ProfileIMG = styled(Image)(() => ({
//     width: 170,
//     height: '100%',
//     borderRadius: 9999,

// }));s

const ContainerName = styled(Box)(() => ({
  color: '#5D5A88',
  fontSize: 24,
  fontFamily: 'DM Sans',
  fontWeight: '700',
}));

const ListContainer = styled(Box)(() => ({
  width: 550,
  height: 180,
  background: 'white',
  borderRadius: 15,
  border: '0.50px #D4D2E3 solid'
}));

const UserName = styled(Box)(() => ({
  color: '#252B42',
  fontSize: 36,
  fontFamily: 'DM Sans',
  fontWeight: '700',
  // lineHeight: 24;
  letterSpacing: 0.10,
}));



export default MyPage;

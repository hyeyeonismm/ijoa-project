import { Container } from "@mui/material";
import Header from "../components/Header";
import profileimg from "../images/profileimgtest.png";

function MyPage() {
  return (
    <>
      <Header />
      <Container>
        <div style={{width: 1100, position: 'relative'}}>
          <div style={{width: 174, height: 174, paddingRight: 3, left: 46, top: 0, position: 'relative', borderRadius: 200, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <img style={{width: 170, height: '100%', borderRadius: 9999}} src={profileimg} />
          </div>
          
          <div style={{width: 500, position: 'relative'}}>
            <div>돌보미 승인 대기 / 돌보미 승인 완료</div>
            <div>이진형 회원님</div>
            <div>nickname</div>
            <div>ID</div>
            <div>email</div>
          </div>
          
        </div>

      </Container>
    </>
  );
}

export default MyPage;

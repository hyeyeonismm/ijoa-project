import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Link, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CrimeAuth from "../images/CrimeAuth.png";

function CrimeAuthPage() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/auth");
  };
  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            color: "#5D5A88",
            fontSize: "28px",
            paddingBottom: "30px",
            fontWeight: 700,
            marginTop: "120px",
          }}
        >
          범죄 경력조회는 왜 해야되나요?
        </Box>
        <Box>
          청소년성보호법 제56조에 의해 아동 청소년 관련기관 등에 취업이나 노무
          제공(강연 등)을 하는 대상자는
          <br /> 성별, 신분, 직위 등과 상관 없이 조회 결과를 필수적으로 해당
          기관에 제출해야 합니다.
          <br /> 아이조아는 같은 법에서 정한 대상 기관(교육기관)으로
          취업대상자에 대한 성범죄 경력조회를 실시하여야 합니다.
        </Box>
      </Container>
      <Title>성범죄 및 아동학대 조회 동의서 등록</Title>
      <Box
        sx={{
          marginLeft: "80px",
          width: "1350px",
          height: "1px",
          background: "#C0C0C0",
          my: 1,
        }}
      />

      <StepField>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          ① <Bold>범죄경력회보서 발급시스템</Bold> 접속 (
          <Link
            href="http://crims.police.go.kr"
            target="_blank"
            rel="noopener noreferrer"
            color="#8D8BA7"
          >
            crims.police.go.kr
          </Link>
          ){" "}
        </Box>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          <img src={CrimeAuth} width="40%" alt="IdAuth" />
        </Box>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          ② 우측 상단 <Bold>로그인</Bold> 클릭 및 로그인 방식 선택(공동인증서,
          아이핀, 휴대전화 인증 중 택1)
        </Box>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          ③ 취업예정자 발급 동의 신청 클릭
        </Box>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          ④ <Bold>시설ID: AE242G, 검증번호: 5508</Bold> 입력 후 조회 클릭
        </Box>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          ⑤ 시설(기관)장/명 확인 후 동의 버튼 클릭 (시설명: 아이조아)
        </Box>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          ⑥ 신청서 작성 및 약관 동의 처리 (동의 사유 - 취업 예정, 주소지 경찰서
          - 서울경찰청, 서울중부경찰서)
        </Box>
        <Box
          sx={{
            paddingBottom: "25px",
          }}
        >
          ⑦ 본인 회보서 확인 후 가장 하단의{" "}
          <Bold>본인 확인 완료 (시설장 출력)</Bold> 버튼 클릭
        </Box>
      </StepField>
      <Container>
        <Box sx={{ marginTop: "50px" }}>
          위 과정을 완료해주시면 담당자 승인 하에 성범죄 및 아동학대 조회동의서{" "}
          <br />
          등록 완료 상태로 변경됩니다. 담당자 승인까지는 최대 2~3일이 소요될 수
          있습니다.{" "}
        </Box>
        <Confirm onClick={onClickButton}>확인</Confirm>
      </Container>
    </>
  );
}

const Title = styled(Box)(() => ({
  padding: "80px 0px 10px 80px",
  fontWeight: 700,
  color: "#5D5A88",
  fontSize: 16,
}));

const Container = styled(Box)(() => ({
  textAlign: "center",

  color: "#8D8BA7",
  fontSize: "16px",
}));

const StepField = styled(Box)(() => ({
  color: "#8D8BA7",
  padding: "40px 0px 0px 80px",
}));

const Confirm = styled(Button)(() => ({
  background: "#5D5A88",

  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  width: "120px",
  height: "50px",
  borderRadius: "47px",
  margin: "35px",
  "&:hover": {
    background: "#5D5A88",
  },
}));

const Bold = styled("span")(() => ({
  fontWeight: "bold",
  color: "#5D5A88",
  fontSize: "20px",
}));

export default CrimeAuthPage;

// 학부모데이터
const Parents = {
  yujin: {
    name: "정유진",
    id: "yujin",
    password: "0000",
    nickname: "학부모",
    birth: "19970626",
    gender: "female",
    phoneNumber: "01011112222",
    email: "teacher12@gmail.com",
    apply: [
      {
        day: ["월"],
        time: ["18~24시"],
        name: "정유은",
        age: ["7세 이하"],
        gender: ["여"],
        regularity: ["비정기돌봄"],
        activities: ["놀이돌봄", "가사돌봄"],
        introduction: {
          title: "35개월 여아 놀이 돌봄 구합니다.",
          content:
            "안녕하세요. 9월 20일에 저녁에 일정이 있어서 이 날 하루만 아이 놀이 돌봄 및 가사 도와주실 분 급구합니다!",
        },
        address: {
          city: "서울",
          region: "중구",
          subregion: "필동",
        },
      },
    ],
  },
  minhwan: {
    name: "김민환",
    id: "minhwan",
    password: "0000",
    nickname: "학부모",
    birth: "19970626",
    gender: "male",
    phoneNumber: "01011112222",
    email: "teacher12@gmail.com",
    apply: [
      {
        day: ["월", "화", "목", "금"],
        time: ["18시 이후"],
        age: ["10세 이하"],
        gender: ["남"],
        regularity: ["정기돌봄"],
        activities: ["등하원돌봄"],
        introduction: {
          title: "피아노학원에서 픽업해주실 분 구합니다.",
          content:
            "안녕하세요. 아이가 월, 화, 목, 금 피아노 학원을 다니는데 매주 저녁 6시에 학원에서 집까지 픽업 해주실 수 있는 돌보미분 구합니다.",
        },
        address: {
          city: "서울",
          region: "성동구",
          subregion: "사근동",
        },
      },
    ],
  },
};
export default Parents;

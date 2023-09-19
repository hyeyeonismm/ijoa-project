const Teachers = {
  hyeyeon: {
    name: "김혜연",
    id: "hyeyeon",
    password: "0000",
    nickname: "티처",
    birth: "19970626",
    gender: "female",
    phoneNumber: "01011112222",
    email: "teacher12@gmail.com",
    auth: true,
    rating: 3.5,
    apply: [
      {
        day: ["월", "수", "금"],
        time: ["18시 이후", "18~24시"],
        age: ["7세 이하"],
        genderPreference: ["남", "녀"],
        regularity: ["비정기돌봄"],
        activities: ["놀이돌봄", "교육돌봄"],
        introduction: {
          title: "정기적으로 시터 일을 하고있는 대학생입니다.",
          content:
            "안녕하세요. 저는 현재 동국대학교 4학년에 재학 중인 김혜연입니다. 저는 2022년부터 정기적으로 시터 일을 해왔고, 시터 일 외에도 영어학원에서 아이들 을 가르치는 수업 조교로 일해본 경험이 있습니다. 저는 교육돌봄을 가장 희망하지만, 놀이돌봄도 가능합니다! 평소 아이를 좋아하고 친근한 성격이기 때문에 아이들이 금새 적응할 수 있을 것이라고 생각합니다. 편하게 연락주세요!",
        },
        address: {
          city: "서울",
          region: "강남구",
          subregion: "개포동",
        },
      },
    ],
  },
  goun: {
    name: "박고운",
    id: "goun",
    password: "0000",
    nickname: "티처",
    birth: "19970626",
    gender: "female",
    phoneNumber: "01011112222",
    email: "teacher12@gmail.com",
    auth: true,
    rating: 4.2,
    apply: [
      {
        day: ["월", "화", "수", "목", "금"],
        time: ["18시 이후", "18~24시"],
        age: ["7세 이하"],
        genderPreference: ["남", "녀"],
        regularity: ["정기돌봄"],
        activities: ["등하원돌봄", "긴급돌봄"],
        introduction: {
          title: "상냥하고 착한 육아 고수입니다.",
          content:
            "안녕하세요! 박고운 돌보미입니다. ^^ 저는 상냥하고 착한 육아 방식으로 아이들과의 소통을 꾸준히 이어왔습니다. 아이들의 마음을 잘 이해하고, 저녁 시간대에 가능하기 때문에 등하원 돌봄과 긴급 돌봄에 자신있습니다. 연락주세요~",
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

export default Teachers;

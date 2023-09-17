const Teachers = {
  hyeyeon: {
    name: "김혜연",
    id: "teacher",
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
            "안녕하세요. 저는 현재 동국대학교 4학년에 재학 중인 이진형입니다. 저는 2022년부터 정기적으로 시터 일을 해왔고, 시터 일 외에도 영어학원에서 아이들 을 가르치는 수업 조교로 일해본 경험이 있습니다. 저는 교육돌봄을 가장 희망하지만, 놀이돌봄도 가능합니다! 평소 아이를 좋아하고 친근한 성격이기 때문에 아이들이 금새 적응할 수 있을 것이라고 생각합니다. 편하게 연락주세요!",
        },
        address: {
          city: "서울",
          region: "강남구",
          subregion: "개포동",
        },
      },
    ],
  },
};

export default Teachers;

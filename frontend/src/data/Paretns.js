// 학부모데이터
const Parents = {
  id: "parents1",
  password: "0000",
  name: "박고운",
  gender: "female",
  nickname: "학부모123",
  seperator: "parents",
  birth: "19970626",
  phoneNumber: "01025817018",
  email: "dnjsrbwls08@gmail.com",
  Address: "",
  totalPoints: 295,
  pointList: [
    { id: 0, point: 150, content: "인증서 발급1", date: "20230205" },
    { id: 1, point: -5, content: "포인트 선물", date: "20230210" },
    { id: 2, point: -100, content: "물품 구매", date: "20230310" },
    { id: 3, point: 100, content: "인증서 발급2", date: "20230311" },
    { id: 4, point: 200, content: "인증서 발급3", date: "20230314" },
    { id: 5, point: -50, content: "물품 구매", date: "20230325" },
  ],
  certificationList: [
    {
      id: 0,
      volunteerDate: "20221014",
      submitDate: "20230205",
      hour: 10,
      point: 150,
      content: "인증서 발급1",
    },
    {
      id: 1,
      volunteerDate: "20230123",
      submitDate: "20230311",
      hour: 5,
      point: 100,
      content: "인증서 발급2",
    },
    {
      id: 2,
      volunteerDate: "20230228",
      submitDate: "20230314",
      hour: 20,
      point: 200,
      content: "인증서 발급3",
    },
  ],
  purchaseList: [
    {
      id: 0,
      isUsed: false,
      purchaseDate: "20230310",
      productInfo: { brand: "스타벅스", productName: "아메리카노 T" },
    },
    {
      id: 1,
      isUsed: true,
      purchaseDate: "20230325",
      productInfo: { brand: "CU", productName: "츄파춥스" },
    },
  ],
};

export default Parents;

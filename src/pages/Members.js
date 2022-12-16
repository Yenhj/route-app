import React from "react";
import { useNavigate } from "react-router";

const Members = (props) => {
  // useNavigate Hook 은 navigate() 를 리턴한다.
  // navigate(to, option)이 내장되있엄
  //  to : 이동할 경로
  //  option : {replace : ture/false, state: {}}
  //            replace ? history 관리
  // false :  이전 history 교체 x, history 적립중, 디폴트 값
  // ture :  이전 history 교체 0

  //            state 란 네비게이션할 때 전달할 정보
  // 이동한 후에 location.state 로 사용가능

  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm("홈으로 이동하시겠습니까?")) {
      navigate("/", { state: { from: "/member" } });
    }
  };

  // 이미지 사이즈 객체 설정
  const imgSize = { width: 90, height: 80 };
  const list = props.members.map((item, index) => {
    return (
      // 반복문ㄴ에서는 key 속성이 있어야함 Unique 값 (중복 x)
      <div className="col-6 col-md-4 col-lg-3" key={index}>
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-primary" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

export default Members;

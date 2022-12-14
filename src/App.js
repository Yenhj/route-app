import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
import Player from "./pages/Player";
import PlayerIndex from "./pages/PlayerIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // 멤버목록 데이터
  // useState 는 state 가 변경되면 실행되는 Hook 이다.
  // useState() 를 실행하면 [] 리턴이 된다.
  // 배열은 [state, state업데이트함수] 돌려받는다.
  // 배열은 [getter, setter] 돌려받는다.
  // useState(초기값) : state의 초기값
  const [members, setMember] = useState([
    { name: "Justin Bieber", photo: "photos/Justin Biber.jpg" },
    { name: "Lauv", photo: "photos/Lauv.jpg" },
    { name: "Keshi", photo: "photos/Keshi.jpg" },
    { name: "Drake", photo: "photos/Drake.jpg" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
  ]);

  // 플레이 리스트 State
  // 화면을 리랜더링 할 수 있는 조건은 state / props 변경
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Peaches",
      musician: "Justin Bieber",
      youtube_link: "tQ0yjYUFKAE",
    },
    {
      id: 2,
      title: "Never not",
      musician: "Lauv",
      youtube_link: "p6owUZ_pExE",
    },
    {
      id: 3,
      title: "Summer",
      musician: "Keshi",
      youtube_link: "6B00t5dqIPU-A",
    },
    {
      id: 4,
      title: "God's Plan",
      musician: "Drake",
      youtube_link: "m1a_GqJf02M",
    },
    {
      id: 5,
      title: "Doctor my eyes",
      musician: "Jackson Browne",
      youtube_link: "7JlFKS_1oZk",
    },
    {
      id: 6,
      title: "We gotta get you a woman",
      musician: "Todd Rundgren",
      youtube_link: "EyUjbBViAGE",
    },
    {
      id: 7,
      title: "Hip to my heart",
      musician: "Band Perry",
      youtube_link: "vpLCFnD9LFo",
    },
    {
      id: 8,
      title: "Rolling in the deep",
      musician: "Adele",
      youtube_link: "EvK8pDK6IQU",
    },
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          {/* <Route path="개발자가 설정한 url" */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title="인디밴드" />} />
          <Route path="/members" element={<Members members={members} />} />
          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<PlayerIndex />} />
            <Route path=":id" element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

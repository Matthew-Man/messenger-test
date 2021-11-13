import Header from "../src/Header";
import PageFrame from "../src/PageFrame";
import LoginView from "../src/views/LoginView/LoginView";

function Home() {
  return <PageFrame>{{ header: <Header />, body: <LoginView /> }}</PageFrame>;
}

export default Home;

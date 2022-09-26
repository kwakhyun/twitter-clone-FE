import { Route, Routes } from "react-router-dom";
import { Layout, Signup, Login, LoginPw } from "./components";
import Home from "./pages/Home";
import First from "./pages/First";
import Profile from "./pages/Profile";
import EditProfile from "./components/profile/EditProfile";
import OtherProfile from "./components/profile/OtherProfile";
import Detail from "./pages/Detail";
import AddTweet from "./components/AddTweet";
import OAuth from "./pages/OAuth";
import Follow from "./pages/Follow";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginpw" element={<LoginPw />} />
        <Route path="/oauth" element={<OAuth />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userid" element={<OtherProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/addtweet" element={<AddTweet />} />
        <Route path="/follow/:userid/:select" element={<Follow />} />
      </Routes>
    </Layout>
  );
}

export default App;

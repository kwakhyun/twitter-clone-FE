import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import { Layout, Signup, Login } from "./components";
import First from "./pages/First";
import Profile from "./pages/Profile";
import EditProfile from "./components/profile/EditProfile";
import Detail from "./pages/Detail";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

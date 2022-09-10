import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import { Layout } from "./components";
import Profile from "./pages/Profile";
import EditProfile from "./components/profile/EditProfile";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={} />
        <Route path="/signup" element={} />
        <Route path="/detail/:id" element={} />
        <Route path="/addpost" element={} />*/}
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

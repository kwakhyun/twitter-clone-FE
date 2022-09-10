import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./pages/Home";
import { Layout, Signup, Login } from "./components";
import First from "./pages/First";
import AddTweet from "./pages/AddTweet";

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
          <Route path="/addtweet" element={<AddTweet />} />
          {/* <Route path="/detail/:id" element={} />
        
        <Route path="/mypage" element={} /> */}
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

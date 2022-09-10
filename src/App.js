import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import { Layout } from "./components";
import First from "./pages/First";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          {/* <Route path="/login" element={} />
        <Route path="/signup" element={} />
        <Route path="/detail/:id" element={} />
        <Route path="/addpost" element={} />
        <Route path="/mypage" element={} /> */}
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

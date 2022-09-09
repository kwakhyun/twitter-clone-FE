import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Mainpage from "./pages/Mainpage";
import { Layout } from "./components";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Mainpage />} />
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

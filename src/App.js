
import {Route,Routes} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <Routes>
        <Route path="/" element={} />
        <Route path="/login" element={} />
        <Route path="/signup" element={} />
        <Route path="/detail/:id" element={} />
        <Route path="/addpost" element={} />
        <Route path="/mypage" element={} />
      </Routes>
      </QueryClientProvider>
  );
}

export default App;


import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { routhPath } from "./routes/route";
import CreatPost from "./pages/CreatPost";
import AllPosts from "./pages/AllPosts";


function App() {
  return (
   <Router>
    <Routes>
      <Route path={routhPath.home} element={<Home />}/>
      <Route path={routhPath.create} element={<CreatPost />}/>
      <Route path={routhPath.posts} element={<AllPosts/>} />
    </Routes>
   </Router>
  );
}

export default App;

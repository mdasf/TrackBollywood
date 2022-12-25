import "./App.css";
import {
  Footer,
  Header,
  Popular,
  RecentPlusEditorialPicks,
  StoryDetail,
  Trending,
  AdminContextProvider,
} from "./component";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Admin/Dashboard/Dashboard";
import { CreatePost, UpdatePosts } from "./component/Admin";
// import AdminApp from "./component/Admin/AdminApp";
// import AdminApp from "./component/Admin/AdminApp";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Trending />
              <Popular />
              <RecentPlusEditorialPicks />
              <Footer />
            </>
          }
        />
        <Route path="/story-detail/:pid" element={<StoryDetail />} />
        <Route
          path="/admin/"
          element={
            // <AdminContextProvider>
            <Dashboard />

            // </AdminContextProvider>
          }
        />
        <Route path="/admin/updatePosts" element={<UpdatePosts />} />
        <Route path="/admin/createPost/" element={<CreatePost />} />
        <Route path="/admin/createPost/:id" element={<CreatePost />} />

        {/* <Route path="/admin/updatePosts" element={<UpdatePosts />} /> */}
      </Routes>
    </>
  );
}

export default App;

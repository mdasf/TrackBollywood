import "./App.css";
import {
  Footer,
  Header,
  Popular,
  RecentPlusEditorialPicks,
  StoryDetail,
  Trending,
  AdminContextProvider,
  Home,
  Error,
} from "./component";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Admin/Dashboard/Dashboard";
import { CreatePost, UpdatePosts, Login } from "./component/Admin";
import Authwrapper from "./component/Auth/Authwrapper";
import AuthContextProvider from "./component/Auth/auth-context";
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
            // <>
            //   <Header />
            //   <Trending />
            //   <Popular />
            //   <RecentPlusEditorialPicks />
            //   <Footer />
            // </>
            <Home />
          }
        />
        <Route path="/auth/*" element={<Authwrapper />} />
        <Route path="/article/:pid" element={<StoryDetail />} />
        {/* <Route
          path="/admin/"
          element={
            <AdminContextProvider>
            <Dashboard />

             </AdminContextProvider>
          }
        /> */}
        {/* <Route path="/admin/updatePosts" element={<UpdatePosts />} />
        <Route path="/admin/createPost/" element={<CreatePost />} />
        <Route path="/admin/createPost/:id" element={<CreatePost />} /> */}
        {/* <Route path="/admin/updatePosts" element={<UpdatePosts />} /> */}

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

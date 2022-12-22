import "./App.css";
import {
  Admin,
  Footer,
  Header,
  Popular,
  RecentPlusEditorialPicks,
  StoryDetail,
  Trending,
} from "./component";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
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
        <Route path="/story-detail" element={<StoryDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;

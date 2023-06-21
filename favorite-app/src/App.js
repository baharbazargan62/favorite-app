import { Route, Routes } from "react-router-dom";
import MainNavigationBar from "./components/layouts/MainNavigationBar";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigationBar/>
      <Routes>
        <Route path="/" element={<AllMeetups/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/new-meetings" element={<NewMeetup/>} />
      </Routes>
    </div>
  );
}

export default App;

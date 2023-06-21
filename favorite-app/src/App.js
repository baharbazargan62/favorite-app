import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} />
        <Route path="/allmeetings" component={AllMeetups} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/new-meetings" component={NewMeetup} />
      </Routes>
    </div>
  );
}

export default App;

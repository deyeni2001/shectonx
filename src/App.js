import { Route, Switch } from "react-router-dom";
import AllmeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
    
      <Switch>
        <Route path="/" exact>
          <AllmeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import FavouritesContext from "../store/favourite-context";
import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage(props) {
  const favouriteCtx = useContext(FavouritesContext);
let content;
if (favouriteCtx.totalFavourites === 0){
    content= <p>You have not favourites</p>
}
else{
    content =  <MeetupList meetups={favouriteCtx.favourites} />
}
  return (
    <section>
      <h1>My Favourites</h1>
     {content}
    </section>
  );
}

export default FavouritesPage;

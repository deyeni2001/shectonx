import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetupsPage() {

    const history = useHistory();

  function addNewMeetupHandler(meetupData) {
      fetch('https://shectonx-default-rtdb.firebaseio.com/meetups.json', {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(()=>{
          history.replace('/');
      });
  }

  return (
    <section>
      <h1>New Meetups</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;

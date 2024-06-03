
import './App.css';
import Header from './Header'
import AddContact from './addContact'
import ContactList from './ContactList'
function App() {

  const Contacts = [
    {
      "_id": "665c41ba23f57616ae38d769",
      "user_id": "665c3f4923f57616ae38d760",
      "name": "jo454",
      "email": "joyrre23@gmail.com",
      "phone": "7458965689",
      "createdAt": "2024-06-02T09:56:10.593Z",
      "updatedAt": "2024-06-02T09:56:10.593Z",
      "__v": 0
    },
    {
      "_id": "665c424723f57616ae38d76f",
      "user_id": "665c3f4923f57616ae38d760",
      "name": "jo4fdf",
      "email": "jodfdre23@gmail.com",
      "phone": "7457865689",
      "createdAt": "2024-06-02T09:58:31.274Z",
      "updatedAt": "2024-06-02T09:58:31.274Z",
      "__v": 0
    },
    {
      "_id": "665c60b4a3280195295d9ddf",
      "user_id": "665c3f4923f57616ae38d760",
      "name": "jo4fdf",
      "email": "jodfdre23@gmail.com",
      "phone": "7457865689",
      "imageUrl": "http://localhost:5001/uploads/1717328650428-Neutral Creative Professional LinkedIn Article Cover Image.png",
      "createdAt": "2024-06-02T12:08:20.806Z",
      "updatedAt": "2024-06-02T12:08:20.806Z",
      "__v": 0
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact    />
      <ContactList contacts={Contacts}  />
    </div>
  );
}

export default App;

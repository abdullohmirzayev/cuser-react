// style
import "./App.css";

import { useState } from "react";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/Userlist";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      image: "https://picsum.photos/400?random=1",
      firstName: "Abdulloh",
      lastName: "Mirzayev",
      age: 17,
      from: "Uzbekistan",
      job: "Frontend Develoer",
      gender: "Male",
    },
    {
      id: 2,
      image: "https://picsum.photos/400?random=2",
      firstName: "Abdulloh",
      lastName: "Mirzayev",
      age: 17,
      from: "Uzbekistan",
      job: "Frontend Develoer",
      gender: "Male",
    },
    {
      id: 3,
      image: "https://picsum.photos/400?random=3",
      firstName: "Abdulloh",
      lastName: "Mirzayev",
      age: 17,
      from: "Uzbekistan",
      job: "Frontend Develoer",
      gender: "Male",
    },
    {
      id: 4,
      image: "https://picsum.photos/400?random=4",
      firstName: "Abdulloh",
      lastName: "Mirzayev",
      age: 17,
      from: "Uzbekistan",
      job: "Frontend Develoer",
      gender: "Male",
    },
    {
      id: 5,
      image: "https://picsum.photos/400?random=5",
      firstName: "Abdulloh",
      lastName: "Mirzayev",
      age: 17,
      from: "Uzbekistan",
      job: "Frontend Develoer",
      gender: "Male",
    },
    {
      id: 6,
      image: "https://picsum.photos/400?random=6",
      firstName: "Abdulloh",
      lastName: "Mirzayev",
      age: 17,
      from: "Uzbekistan",
      job: "Frontend Develoer",
      gender: "Male",
    },
  ]);
  return (
    <div className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

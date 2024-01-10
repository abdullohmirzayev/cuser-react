// style
import "./App.css";

import { useState } from "react";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/Userlist";

function App() {
  const [users, setUsers] = useState([
    
  ]);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };
  return (
    <div className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// {
//   id: 1,
//   image: "https://picsum.photos/400?random=1",
//   firstName: "Abdulloh",
//   lastName: "Mirzayev",
//   age: 17,
//   from: "Uzbekistan",
//   job: "Frontend Develoer",
//   gender: "Male",
// }
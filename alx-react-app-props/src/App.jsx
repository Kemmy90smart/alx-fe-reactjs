import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>ALX React Props & Context Task</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;

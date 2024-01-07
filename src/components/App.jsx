import "./App.css";
import { Profile } from "./Profile/Profile";
import userData from "../userData.json";
console.log(userData);
console.log(userData.avatar);


export default function App() {
  return (
    <>
     
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
     
    </>
  );
}

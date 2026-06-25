import "./profile.css";
import MyButton from "./clickmebutton";

export default function Profile() {
  return (
    <div className="profile">
      <img
        className="profile-img"
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt="Profile"
      />

      <h2>My Profile</h2>
      <p className="job">React Developer</p>
      <p className="bio">
        I love building websites and learning new technologies.
      </p>

      <MyButton />
    </div>
  );
}
import { useState } from "react";

const profileData = {
  name: "Sharif",
  age: 14,
  email: "samhep0803@gmail.com",
};

const Profile = () => {
  const [profile, setProfile] = useState({});
  return (
    <div>
      <h3>Profile</h3>
      <button onClick={() => setProfile(profileData)}>Sharif</button>

      <ul>
        {Object.keys(profile).map((property) => (
          <li key={property}>
            {property}: {profile[property]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

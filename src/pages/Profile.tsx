import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../store/store";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);

  const [profile, setProfile] = useState({
    name: user.name || "Ariana Wells",
    email: user.email || "ariana@glowcare.com",
    city: user.city || "Bali",
    role: user.role || "Guest Experience Manager",
  });

  return (
    <div className="page profile-layout">
      <section className="profile-card">
        <h2>Guest Profile</h2>

        <form>
          <label>
            Name
            <input
              type="text"
              value={profile.name}
              onChange={(event) => setProfile({ ...profile, name: event.target.value })}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={profile.email}
              onChange={(event) => setProfile({ ...profile, email: event.target.value })}
            />
          </label>

          <label>
            City
            <input
              type="text"
              value={profile.city}
              onChange={(event) => setProfile({ ...profile, city: event.target.value })}
            />
          </label>

          <label>
            Role
            <input
              type="text"
              value={profile.role}
              onChange={(event) => setProfile({ ...profile, role: event.target.value })}
            />
          </label>
        </form>
      </section>

      <aside className="booking-summary">
        <h2>Stored Profile</h2>
        <div className="summary-box">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>City:</strong> {profile.city}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>
      </aside>
    </div>
  );
}

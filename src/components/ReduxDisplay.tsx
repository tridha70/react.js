import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function ReduxDisplay() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <section className="panel display-panel">
      <h2>Component B - Stored Data</h2>

      {user.name ? (
        <div className="details-card">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      ) : (
        <div className="empty-state">
          No user data saved yet. Submit the form to populate the Redux store.
        </div>
      )}
    </section>
  );
}

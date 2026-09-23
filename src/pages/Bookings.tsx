import { useEffect, useReducer, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { services } from "../data/siteData";

type Booking = {
  id: string;
  guestName: string;
  email: string;
  serviceId: string;
  date: string;
};

type Action =
  | { type: "set"; payload: Booking[] }
  | { type: "add"; payload: Booking }
  | { type: "update"; payload: Booking }
  | { type: "delete"; payload: string };

function reducer(state: Booking[], action: Action) {
  switch (action.type) {
    case "set":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "update":
      return state.map((b) => (b.id === action.payload.id ? action.payload : b));
    case "delete":
      return state.filter((b) => b.id !== action.payload);
    default:
      return state;
  }
}

export default function Bookings() {
  const [stored, setStored] = useLocalStorage<Booking[]>("glowcare_bookings", []);
  const [bookings, dispatch] = useReducer(reducer, stored ?? []);
  const [editing, setEditing] = useState<Booking | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    dispatch({ type: "set", payload: stored ?? [] });
  }, []);

  useEffect(() => {
    setStored(bookings);
  }, [bookings, setStored]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const guestName = (fd.get("guestName") as string) || "";
    const email = (fd.get("email") as string) || "";
    const serviceId = (fd.get("serviceId") as string) || services[0].id;
    const date = (fd.get("date") as string) || "";

    if (!guestName.trim() || !email.includes("@") || !date) {
      nameRef.current?.focus();
      return;
    }

    if (editing) {
      dispatch({ type: "update", payload: { ...editing, guestName, email, serviceId, date } });
      setEditing(null);
    } else {
      const id = String(Date.now());
      dispatch({ type: "add", payload: { id, guestName, email, serviceId, date } });
    }

    form.reset();
    nameRef.current?.focus();
  };

  const startEdit = (b: Booking) => {
    setEditing(b);
    setTimeout(() => {
      nameRef.current?.focus();
    }, 0);
  };

  return (
    <div className="page bookings-page">
      <section className="booking-panel">
        <h2>{editing ? "Edit Booking" : "New Booking"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Guest Name
            <input name="guestName" defaultValue={editing?.guestName || ""} ref={nameRef} />
          </label>

          <label>
            Email
            <input name="email" type="email" defaultValue={editing?.email || ""} />
          </label>

          <label>
            Service
            <select name="serviceId" defaultValue={editing?.serviceId || services[0].id}>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>

          <label>
            Check-in Date
            <input name="date" type="date" defaultValue={editing?.date || ""} />
          </label>

          <div className="form-actions">
            <button type="submit" className="primary-btn">
              {editing ? "Save" : "Add Booking"}
            </button>
            {editing && (
              <button type="button" className="secondary-btn" onClick={() => setEditing(null)}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="bookings-list">
        <h2>Bookings</h2>
        {bookings.length === 0 && <p>No bookings yet.</p>}

        <ul>
          {bookings.map((b) => (
            <li key={b.id} className="booking-item">
              <div>
                <strong>{b.guestName}</strong>
                <div className="muted">{b.email}</div>
                <div className="muted">{services.find((s) => s.id === b.serviceId)?.title}</div>
              </div>

              <div className="booking-actions">
                <span className="muted">{b.date}</span>
                <button type="button" onClick={() => startEdit(b)} className="secondary-btn">
                  Edit
                </button>
                <button type="button" onClick={() => dispatch({ type: "delete", payload: b.id })} className="danger-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

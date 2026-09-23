import { useReducer, useState, type FormEvent } from "react";

type BookingFormState = {
  guestName: string;
  email: string;
  stay: string;
  roomType: string;
  date: string;
};

type BookingAction =
  | { type: "update"; field: keyof BookingFormState; value: string }
  | { type: "reset" };

const initialState: BookingFormState = {
  guestName: "",
  email: "",
  stay: "",
  roomType: "",
  date: "",
};

function reducer(state: BookingFormState, action: BookingAction) {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function BookingForm() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormState, string>>>({});

  const validate = () => {
    const nextErrors: Partial<Record<keyof BookingFormState, string>> = {};

    if (!formState.guestName.trim()) nextErrors.guestName = "Guest name is required.";
    if (!formState.email.includes("@")) nextErrors.email = "Please enter a valid email.";
    if (!formState.stay.trim()) nextErrors.stay = "Please select a stay package.";
    if (!formState.roomType.trim()) nextErrors.roomType = "Please choose a room type.";
    if (!formState.date) nextErrors.date = "Please provide a check-in date.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus("Please correct the highlighted field(s).");
      return;
    }

    setStatus(`Booking request saved for ${formState.guestName}. Our team will contact you soon.`);
    dispatch({ type: "reset" });
    setErrors({});
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Guest Name</span>
          <input
            type="text"
            value={formState.guestName}
            onChange={(event) => dispatch({ type: "update", field: "guestName", value: event.target.value })}
            placeholder="Enter your name"
          />
          {errors.guestName && <small>{errors.guestName}</small>}
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            value={formState.email}
            onChange={(event) => dispatch({ type: "update", field: "email", value: event.target.value })}
            placeholder="Enter your email"
          />
          {errors.email && <small>{errors.email}</small>}
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Stay Package</span>
          <input
            type="text"
            value={formState.stay}
            onChange={(event) => dispatch({ type: "update", field: "stay", value: event.target.value })}
            placeholder="e.g. Wellness Retreat"
          />
          {errors.stay && <small>{errors.stay}</small>}
        </label>

        <label>
          <span>Room Type</span>
          <select
            value={formState.roomType}
            onChange={(event) => dispatch({ type: "update", field: "roomType", value: event.target.value })}
          >
            <option value="">Choose...</option>
            <option value="Deluxe Suite">Deluxe Suite</option>
            <option value="Garden Villa">Garden Villa</option>
            <option value="Executive Loft">Executive Loft</option>
          </select>
          {errors.roomType && <small>{errors.roomType}</small>}
        </label>
      </div>

      <label>
        <span>Check-in Date</span>
        <input
          type="date"
          value={formState.date}
          onChange={(event) => dispatch({ type: "update", field: "date", value: event.target.value })}
        />
        {errors.date && <small>{errors.date}</small>}
      </label>

      <button type="submit" className="primary-btn">Book a Visit</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}

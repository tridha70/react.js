import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { saveUser, type UserFormData } from "../store/userSlice";

const initialFormData: UserFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  role: "",
};

export default function ReduxForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<UserFormData>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(saveUser(formData));
    setFormData(initialFormData);
  };

  return (
    <section className="panel form-panel">
      <h2>Component A - Form</h2>

      <form onSubmit={handleSubmit} className="form-grid">
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>

        <label className="field">
          <span>Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </label>

        <label className="field">
          <span>City</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />
        </label>

        <label className="field full-width">
          <span>Role</span>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter your role"
            required
          />
        </label>

        <button type="submit" className="submit-button">
          Save to Redux Store
        </button>
      </form>
    </section>
  );
}

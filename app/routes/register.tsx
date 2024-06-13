import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User registered successfully!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl mb-6 text-center">Register</h2>
      <div className="mb-4">
        <label className="block mb-2">Username: </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2">Role: </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="role"
            value="student"
            checked={formData.role === "student"}
            onChange={handleChange}
            className="form-radio"
          />
          <span className="ml-2">Student</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="role"
            value="teacher"
            checked={formData.role === "teacher"}
            onChange={handleChange}
            className="form-radio"
          />
          <span className="ml-2">Teacher</span>
        </label>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
    </form>
  );
}

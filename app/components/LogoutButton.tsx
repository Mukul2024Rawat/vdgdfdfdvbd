import { useNavigate } from "@remix-run/react";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    navigate("/login");
  };

  return <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded">Logout</button>;
}

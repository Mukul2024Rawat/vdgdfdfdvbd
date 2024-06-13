import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import LogoutButton from "~/components/LogoutButton";

export default function Student() {
  const navigate = useNavigate();

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser") || "{}");
    if (!activeUser || activeUser.role !== "student") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-2xl mb-4">Welcome, Student!</h1>
      <LogoutButton />
    </div>
  );
}

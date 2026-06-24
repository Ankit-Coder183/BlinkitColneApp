import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = { name, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>

        <input
          type="text"
          placeholder="Create Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-500 text-white py-3 rounded"
        >
          Signup
        </button>

        <p className="mt-4 text-center">
          Already have account?
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer ml-2"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup; 
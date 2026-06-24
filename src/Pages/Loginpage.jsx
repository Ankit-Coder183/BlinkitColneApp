import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/customers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        alert("Login Successful");
        navigate("/");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          New user?
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 cursor-pointer ml-2"
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Loginpage;
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: "100vh",
        background: "#09090B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 390,
        }}
      >
        {/* Back */}
        <button
          onClick={() => navigate("/auth")}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: 22,
            cursor: "pointer",
            marginBottom: 35,
          }}
        >
          <FaArrowLeft />
        </button>

        <h1
          style={{
            color: "white",
            fontSize: 34,
            marginBottom: 8,
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            color: "#8A8A93",
            marginBottom: 35,
          }}
        >
          Log in to continue.
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />

        {/* Password */}
        <div
          style={{
            position: "relative",
            marginTop: 18,
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={inputStyle}
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 20,
              top: 18,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#8A8A93",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div
          style={{
            textAlign: "right",
            marginTop: 14,
            color: "#00E7C1",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Forgot Password?
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={loginButton}
        >
          Log In
        </motion.button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "30px 0",
          }}
        >
          <div style={divider}></div>

          <span
            style={{
              color: "#6C6C75",
              margin: "0 15px",
            }}
          >
            OR
          </span>

          <div style={divider}></div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={googleButton}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          >
            <FcGoogle size={22} />
            Continue with Google
          </div>
        </motion.button>

        <p
          style={{
            color: "#8A8A93",
            textAlign: "center",
            marginTop: 35,
          }}
        >
          Don't have an account?
        </p>

        <button
          onClick={() => navigate("/signup")}
          style={{
            background: "transparent",
            border: "none",
            color: "#00E7C1",
            fontWeight: 600,
            fontSize: 17,
            cursor: "pointer",
            display: "block",
            margin: "10px auto 0",
          }}
        >
          Create Account
        </button>
      </div>
    </motion.div>
  );
}

const inputStyle = {
  width: "100%",
  height: 58,
  borderRadius: 18,
  border: "1px solid #2A2A30",
  background: "#16161B",
  color: "white",
  padding: "0 20px",
  fontSize: 16,
  outline: "none",
  boxSizing: "border-box",
};

const loginButton = {
  width: "100%",
  height: 58,
  border: "none",
  borderRadius: 18,
  marginTop: 30,
  background: "linear-gradient(135deg,#00E7C1,#00C9A7)",
  color: "#09090B",
  fontWeight: 700,
  fontSize: 17,
  cursor: "pointer",
};

const googleButton = {
  width: "100%",
  height: 58,
  borderRadius: 18,
  border: "1px solid #2A2A30",
  background: "#16161B",
  color: "white",
  cursor: "pointer",
};

const divider = {
  flex: 1,
  height: 1,
  background: "#2A2A30",
};
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await signUp(email, password);

      alert(
        "Verification email sent! Please check your inbox before logging in."
      );

      navigate("/verify-email");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

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
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: 22,
            cursor: "pointer",
            marginBottom: 30,
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
          Create Account
        </h1>

        <p
          style={{
            color: "#8A8A93",
            marginBottom: 35,
          }}
        >
          Join Swipr and start building your circle.
        </p>

        {/* Full Name */}
        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={inputStyle}
        />

        {/* Email */}
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            ...inputStyle,
            marginTop: 18,
          }}
        />

        {/* Password */}
        <div
          style={{
            position: "relative",
            marginTop: 18,
          }}
        >
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={eyeStyle}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div
          style={{
            position: "relative",
            marginTop: 18,
          }}
        >
          <input
            placeholder="Confirm Password"
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            style={eyeStyle}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Terms */}
        <label
          style={{
            display: "flex",
            gap: 10,
            color: "#8A8A93",
            fontSize: 14,
            marginTop: 24,
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <input type="checkbox" />
          I agree to the Terms & Privacy Policy
        </label>

        {/* Create Account */}
        <motion.button
          onClick={handleSignup}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={createButton}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </motion.button>

        {/* Divider */}
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

        {/* Google */}
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
          Already have an account?
        </p>

        <button
          onClick={() => navigate("/login")}
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
          Log In
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

const eyeStyle = {
  position: "absolute",
  right: 20,
  top: 18,
  background: "transparent",
  border: "none",
  color: "#8A8A93",
  cursor: "pointer",
};

const createButton = {
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
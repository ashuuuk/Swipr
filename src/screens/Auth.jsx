import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { signInWithGoogle } from "../services/authService";
export default function Auth() {
  const navigate = useNavigate();
const handleGoogleSignIn = async () => {
  try {
    await signInWithGoogle();

   navigate("/complete-profile");
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        background: "#09090B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
        {/* Background Glow */}
<div
  style={{
    position: "absolute",
    width: 350,
    height: 350,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,231,193,.18) 0%, rgba(0,231,193,0) 70%)",
    top: "6%",
    left: "50%",
    transform: "translateX(-50%)",
    pointerEvents: "none",
    zIndex: 0,
  }}
/>
      <div
        style={{
          width: "100%",
          maxWidth: 390,
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
             <div
  style={{
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: "50%",
    background: "#00E7C1",
    opacity: 0.18,
    filter: "blur(100px)",
    zIndex: 0,
  }}
/>

          <img
            src={logo}
            alt="Swipr"
            style={{
              width: 110,
    position: "relative",
    zIndex: 2,
            }}
          />
        </div>

        {/* Heading */}
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: 32,
            margin: 0,
            fontWeight: 700,
          }}
        >
          Find your people.
        </h2>

        <p
          style={{
            color: "#8A8A93",
            marginTop: 14,
            marginBottom: 42,
            fontSize: 17,
            lineHeight: 1.6,
          }}
        >
          Connect with people who match your vibe.
        </p>

        {/* Google */}
      <motion.button
      onClick={handleGoogleSignIn}
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  style={buttonStyle}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
    }}
  >
    <FcGoogle size={24} />
    <span>Continue with Google</span>
  </div>
</motion.button>

        {/* Apple */}
       <motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  style={{
    ...buttonStyle,
    marginTop: 14,
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
    }}
  >
    <FaApple size={22} color="white" />
    <span>Continue with Apple</span>
  </div>
</motion.button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "34px 0",
          }}
        >
          <div style={divider}></div>

          <span
            style={{
              color: "#6C6C75",
              margin: "0 16px",
            }}
          >
            OR
          </span>

          <div style={divider}></div>
        </div>

        {/* Create */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/signup")}
          style={createStyle}
        >
          Create Account
        </motion.button>

        <p
          style={{
            color: "#8A8A93",
            marginTop: 34,
            marginBottom: 8,
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
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Log In
        </button>
      </div>
    </motion.div>
  );
}

const divider = {
  flex: 1,
  height: 1,
  background: "#2A2A30",
};

const buttonStyle = {
  width: "100%",
  height: 58,
  borderRadius: 18,
  border: "1px solid #2A2A30",
  background: "#16161B",
  color: "#FFFFFF",
  fontSize: 16,
  cursor: "pointer",
};

const createStyle = {
  width: "100%",
  height: 58,
  borderRadius: 18,
  border: "none",
  background: "linear-gradient(135deg,#00E7C1,#00C9A7)",
  color: "#09090B",
  fontSize: 17,
  fontWeight: 700,
  cursor: "pointer",
};
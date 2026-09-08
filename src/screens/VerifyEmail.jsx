import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { sendEmailVerification } from "firebase/auth";

export default function VerifyEmail() {
  const navigate = useNavigate();

  const handleResend = async () => {
    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        alert("Verification email sent again.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const checkVerification = async () => {
    try {
      await auth.currentUser.reload();

      if (auth.currentUser.emailVerified) {
        navigate("/home");
      } else {
        alert("Your email hasn't been verified yet.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 70,
            marginBottom: 30,
          }}
        >
          📧
        </div>

        <h1
          style={{
            color: "white",
            marginBottom: 12,
          }}
        >
          Verify your email
        </h1>

        <p
          style={{
            color: "#8A8A93",
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          We've sent a verification link to your email address.
          <br />
          Please verify your email before continuing.
        </p>

        <button
          onClick={handleResend}
          style={secondaryButton}
        >
          Resend Email
        </button>

        <button
          onClick={checkVerification}
          style={primaryButton}
        >
          I've Verified
        </button>
      </div>
    </motion.div>
  );
}

const primaryButton = {
  width: "100%",
  height: 58,
  marginTop: 18,
  border: "none",
  borderRadius: 18,
  background: "linear-gradient(135deg,#00E7C1,#00C9A7)",
  color: "#09090B",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: 16,
};

const secondaryButton = {
  width: "100%",
  height: 58,
  border: "1px solid #2A2A30",
  borderRadius: 18,
  background: "#16161B",
  color: "white",
  cursor: "pointer",
  fontSize: 16,
};
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FaArrowLeft, FaCamera } from "react-icons/fa";

export default function CompleteProfile() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [college, setCollege] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPhoto(URL.createObjectURL(file));
  };

  const handleContinue = async () => {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!username.trim()) {
      alert("Please choose a username.");
      return;
    }

    setLoading(true);

    // Firestore save will go here later.

    setTimeout(() => {
      setLoading(false);
      navigate("/interests");
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{
        minHeight: "100vh",
        background: "#09090B",
        display: "flex",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
        }}
      >
        <button
          onClick={() => navigate(-1)}
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
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Complete your profile
        </h1>

        <p
          style={{
            color: "#8A8A93",
            marginBottom: 35,
            lineHeight: 1.6,
          }}
        >
          This is how people will discover you on Swipr.
        </p>
                {/* Profile Photo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 35,
          }}
        >
          <div
            onClick={() => fileInputRef.current.click()}
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#16161B",
              border: "2px solid #2A2A30",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <FaCamera size={34} color="#00E7C1" />
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handlePhotoSelect}
          />

          <p
            style={{
              color: "#8A8A93",
              marginTop: 12,
              fontSize: 14,
            }}
          >
            Add Profile Photo (Optional)
          </p>
        </div>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={inputStyle}
        />

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            ...inputStyle,
            marginTop: 18,
          }}
        />

        {/* Bio */}
        <textarea
          placeholder="Tell people about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={150}
          style={textAreaStyle}
        />

        <div
          style={{
            textAlign: "right",
            color: "#8A8A93",
            fontSize: 13,
            marginTop: 6,
          }}
        >
          {bio.length}/150
        </div>

        {/* College */}
        <input
          type="text"
          placeholder="College / Company (Optional)"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          style={{
            ...inputStyle,
            marginTop: 20,
          }}
        />

        {/* Continue Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleContinue}
          style={continueButton}
        >
          {loading ? "Saving..." : "Continue"}
        </motion.button>
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

const textAreaStyle = {
  width: "100%",
  minHeight: 120,
  borderRadius: 18,
  border: "1px solid #2A2A30",
  background: "#16161B",
  color: "white",
  padding: "18px 20px",
  fontSize: 16,
  outline: "none",
  resize: "none",
  marginTop: 18,
  boxSizing: "border-box",
  fontFamily: "inherit",
};

const continueButton = {
  width: "100%",
  height: 58,
  marginTop: 30,
  border: "none",
  borderRadius: 18,
  background: "linear-gradient(135deg,#00E7C1,#00C9A7)",
  color: "#09090B",
  fontSize: 17,
  fontWeight: 700,
  cursor: "pointer",
};
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedLogo from "../components/logo/AnimatedLogo";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
     navigate("/auth");
    }, 4200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#09090B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedLogo />
    </div>
  );
}
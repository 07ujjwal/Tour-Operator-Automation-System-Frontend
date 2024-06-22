import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import "./HeroSection.css";
import backgroundImage from "./hero.png";

const HeroSection = () => {
  const { user } = useAuthStore.getState();
  const navigate = useNavigate();

  const handleCTAbtn = () => {
    if (!user) {
      navigate("login");
    } else {
      navigate("tours");
    }
  };

  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1>YOUR ADVENTURE TRAVEL EXPERTS IN WORLD</h1>
        <p>
          Many travellers arrive in Dushanbe, the capital and gateway of
          Tajikistan, and dash off for an adventure, perhaps hiking in the Fann
          Mountains or driving along the famously dramatic Pamir Highway.
        </p>
        <button onClick={handleCTAbtn} className="cta-button">
          Discover Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

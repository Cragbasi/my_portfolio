import "../blocks/ToggleSwitch.css";
import { useNavigate } from "react-router-dom";
const ToggleSwitch = ({ isChecked, setIsChecked }) => {
  const navigate = useNavigate();

  const handleSwitchClick = () => {
    navigate("/");
  };
  return (
    <div className="react-switch" onClick={handleSwitchClick}>
      <input
        className="react-switch__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        id={`react-switch-new`}
      />

      <label htmlFor={`react-switch-new`} className="react-switch__label">
        <span className={`react-switch__button`} />
        <p className="react-switch__checkbox_M ">Mechanical Engineer</p>
        <p className="react-switch__checkbox_S ">Software Engineer</p>
      </label>
    </div>
  );
};

export default ToggleSwitch;

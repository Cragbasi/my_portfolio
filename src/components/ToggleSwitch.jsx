import "../blocks/ToggleSwitch.css";
const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <div className="react-switch">
      <input
        className="react-switch__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        id={`react-switch-new`}
      />

      <label htmlFor={`react-switch-new`} className="react-switch__label">
        <span className={`react-switch__button`} />
        <p className="react-switch__checkbox_F ">F</p>
        <p className="react-switch__checkbox_C ">C</p>
      </label>
    </div>
  );
};

export default ToggleSwitch;

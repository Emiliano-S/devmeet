import forward from "../assets/svg/Forward.svg";

const SettingsRow = ({ text, id, name, link }) => {
  return (
    <div style={{ paddingBottom: "12px" }}>
      <a href={link}>
        <button
          className="input-form-style"
          id={id}
          name={name}
          style={{ height: "3.5em", width: "100%", backgroundColor: "white" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              marginLeft: "5%",
              alignItems: "center",
            }}
          >
            <p>{text}</p>
            <img src={forward} alt="freccia" />
          </div>
        </button>
      </a>
    </div>
  );
};

export default SettingsRow;

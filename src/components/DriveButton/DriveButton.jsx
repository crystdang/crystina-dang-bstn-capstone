import "./DriveButton.scss";

function DriveButton({
  handler
}) {
  return (
    <div className="drive-button">
      <button 
        className="drive-button__button"
        onClick={handler}
      >
        Drive
      </button>
    </div>
  )
}

export default DriveButton;
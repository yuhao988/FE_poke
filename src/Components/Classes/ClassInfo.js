import Modal from "react-modal";

export default function ClassInfo(props) {
  const { isOpen, onClose, classDetail } = props;
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleCloseModal}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            cursor: "pointer",
            padding: "5px",
          }}
        >
          X
        </button>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Ensure the content takes the full height
          }}
        >
          <div>{classDetail.Name}</div>
          {/* Add more content here */}
        </div>
      </div>
    </Modal>
  );
}

import { Col } from "react-bootstrap";

function EmptyNote() {
  return (
    <Col className="position-relative">
      <div
        className="justify-content-center position-absolute top-50 start-50 translate-middle"
        id="note0"
      >
        <div className="align-self-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            fill="#bdbdbd"
            className="bi bi-file-earmark-text"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
          </svg>
          <h1 className="display-5 fw-bold" style={{ color: "#bdbdbd" }}>
            Select a note to view
          </h1>
          <div className="mx-auto">
            <p className="lead mb-4" style={{ color: "#bdbdbd" }}>
              Choose a note from a list to view its contents, or create a new
              note to add to your collection.
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default EmptyNote;

import { useState, useEffect } from "react";
import {
  createUserFeedback,
  getFeedback,
  deleteFeedback,
  updateFeedback,
} from "../utils/firebase";
import "../styles/modal.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Feed = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchSubject, setSearchSubject] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editedFeedback, setEditedFeedback] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    subject: "",
  });
  const [createdFeedback, setCreatedFeedback] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    subject: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const fetchedFeedbacks = await getFeedback();
      setFeedbacks(fetchedFeedbacks);
    } catch (error) {
      console.log("Error fetching feedbacks:", error);
    }
  };

  const handleSubjectChange = (event) => {
    setSearchSubject(event.target.value);
  };

  const filteredFeedbacks = feedbacks.filter((feedback) => {
    return feedback.subject.toLowerCase().includes(searchSubject.toLowerCase());
  });

  const handleCreate = () => {
    setShowCreateModal(true);
  };

  const handleSaveCreate = async () => {
    try {
      await createUserFeedback({
        email: createdFeedback.email,
        firstName: createdFeedback.firstName,
        lastName: createdFeedback.lastName,
        message: createdFeedback.message,
        subject: createdFeedback.subject,
      });
      setShowCreateModal(false);
      fetchFeedbacks();
      setCreatedFeedback({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        subject: "",
      });
    } catch (error) {
      console.log("Error creating feedback:", error);
    }
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleCancelCreate = () => {
    setShowCreateModal(false);
    setCreatedFeedback({
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      subject: "",
    });
  };

  const handleDelete = async (feedback) => {
    try {
      await deleteFeedback(feedback.id);
      console.log("Feedback deleted successfully.");
      fetchFeedbacks();
    } catch (error) {
      console.log("Error deleting feedback:", error);
    }
  };

  const handleRead = (feedback) => {
    setSelectedFeedback(feedback);
  };

  const handleCloseModal = () => {
    setSelectedFeedback(null);
  };

  const handleEdit = (feedback) => {
    setEditedFeedback(feedback);
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      await updateFeedback(editedFeedback.id, {
        email: editedFeedback.email,
        firstName: editedFeedback.firstName,
        lastName: editedFeedback.lastName,
        message: editedFeedback.message,
        subject: editedFeedback.subject,
      });
      setShowModal(false);
      fetchFeedbacks();
      setEditedFeedback({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        subject: "",
      });
    } catch (error) {
      console.log("Error saving edited feedback:", error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setEditedFeedback({
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      subject: "",
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>EcoForum | Feedback</title>
      </Helmet>
      <header className="postsHeader">
        <h1>Feedback</h1>
      </header>
      <section className="postsContainer">
        <div className="tablePostsContainer">
          <Link to="./dashboard" className="backBtn">
            Back
          </Link>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search by subject"
              value={searchSubject}
              onChange={handleSubjectChange}
            />
          </div>
          <button className="createBtn" onClick={handleCreate}>
            Create
          </button>
          <table className="tablePosts">
            <thead>
              <tr className="textBold">
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Message</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.email}</td>
                  <td>{feedback.firstName}</td>
                  <td>{feedback.lastName}</td>
                  <td>{feedback.message}</td>
                  <td>{feedback.subject}</td>
                  <td>
                    <button
                      className="readBtn"
                      onClick={() => handleRead(feedback)}
                    >
                      Read
                    </button>
                    <button
                      className="editBtn"
                      onClick={() => handleEdit(feedback)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => handleDelete(feedback)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {selectedFeedback && (
        <div className="modal">
          <div className="modalContent">
            <button className="closeBtn" onClick={handleCloseModal}>
              Close
            </button>
            <h2>Feedback Details</h2>
            <p>Email: {selectedFeedback.email}</p>
            <p>First Name: {selectedFeedback.firstName}</p>
            <p>Last Name: {selectedFeedback.lastName}</p>
            <p>Message: {selectedFeedback.message}</p>
            <p>Subject: {selectedFeedback.subject}</p>
          </div>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <button className="closeBtn" onClick={closeModal}>
              Close
            </button>
            <h2>Edit Feedback</h2>

            <label>Email</label>
            <input
              type="text"
              value={editedFeedback.email}
              onChange={(e) =>
                setEditedFeedback({ ...editedFeedback, email: e.target.value })
              }
            />
            <label>First Name</label>
            <input
              type="text"
              value={editedFeedback.firstName}
              onChange={(e) =>
                setEditedFeedback({
                  ...editedFeedback,
                  firstName: e.target.value,
                })
              }
            />
            <label>Last Name</label>
            <input
              type="text"
              value={editedFeedback.lastName}
              onChange={(e) =>
                setEditedFeedback({
                  ...editedFeedback,
                  lastName: e.target.value,
                })
              }
            />
            <label>Message</label>
            <textarea
              value={editedFeedback.message}
              onChange={(e) =>
                setEditedFeedback({
                  ...editedFeedback,
                  message: e.target.value,
                })
              }
            ></textarea>
            <label>Subject</label>
            <input
              type="text"
              value={editedFeedback.subject}
              onChange={(e) =>
                setEditedFeedback({
                  ...editedFeedback,
                  subject: e.target.value,
                })
              }
            />
            <div className="modalButtons">
              <button className="cancelBtn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="saveBtn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showCreateModal && (
        <div className="modal">
          <div className="modalContent">
            <button className="closeBtn" onClick={closeCreateModal}>
              Close
            </button>
            <h2>Create Feedback</h2>
            <label>Email</label>
            <input
              type="text"
              value={createdFeedback.email}
              onChange={(e) =>
                setCreatedFeedback({
                  ...createdFeedback,
                  email: e.target.value,
                })
              }
            />
            <label>First Name</label>
            <input
              type="text"
              value={createdFeedback.firstName}
              onChange={(e) =>
                setCreatedFeedback({
                  ...createdFeedback,
                  firstName: e.target.value,
                })
              }
            />
            <label>Last Name</label>
            <input
              type="text"
              value={createdFeedback.lastName}
              onChange={(e) =>
                setCreatedFeedback({
                  ...createdFeedback,
                  lastName: e.target.value,
                })
              }
            />
            <label>Message</label>
            <textarea
              value={createdFeedback.message}
              onChange={(e) =>
                setCreatedFeedback({
                  ...createdFeedback,
                  message: e.target.value,
                })
              }
            ></textarea>
            <label>Subject</label>
            <input
              type="text"
              value={createdFeedback.subject}
              onChange={(e) =>
                setCreatedFeedback({
                  ...createdFeedback,
                  subject: e.target.value,
                })
              }
            />
            <div className="modalButtons">
              <button className="cancelBtn" onClick={handleCancelCreate}>
                Cancel
              </button>
              <button className="saveBtn" onClick={handleSaveCreate}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Feed;

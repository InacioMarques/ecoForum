import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getUsers, deleteUsers, updateUser } from "../utils/firebase";
import "../styles/modal.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [editedUser, setEditedUser] = useState({
    email: "",
    name: "",
    role: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const handleEmailChange = (event) => {
    setSearchEmail(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.email.toLowerCase().includes(searchEmail.toLowerCase());
  });

  const handleDelete = async (email) => {
    try {
      await deleteUsers(email);
      console.log("User deleted successfully.");
      fetchUsers();
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const handleRead = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const handleEdit = (user) => {
    console.log("Editing user:", user);
    setEditedUser(user);
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      console.log("Saving edited user:", editedUser);
      await updateUser(editedUser.email, {
        name: editedUser.name,
        role: editedUser.role,
      });
      setShowModal(false);
      fetchUsers();
    } catch (error) {
      console.log("Error saving edited user:", error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setEditedUser({
      email: "",
      name: "",
      role: "",
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>EcoForum | Users</title>
      </Helmet>
      <header className="postsHeader">
        <h1>Users</h1>
      </header>
      <section className="postsContainer">
        <div className="tablePostsContainer">
          <Link to="./dashboard" className="backBtn">
            Back
          </Link>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search by email"
              value={searchEmail}
              onChange={handleEmailChange}
            />
          </div>
          <table className="tablePosts">
            <thead>
              <tr className="textBold">
                <th>User Email</th>
                <th>User Name</th>
                <th>Role</th>
                <th>CRUD</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.email}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="readBtn"
                      onClick={() => handleRead(user)}
                    >
                      Read
                    </button>
                    <button
                      className="editBtn"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => handleDelete(user.email)}
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
      {selectedUser && (
        <div className="modal">
          <div className="modalContent">
            <button className="closeBtn" onClick={handleCloseModal}>
              Close
            </button>
            <h2>User Details</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Name: {selectedUser.name}</p>
            <p>Role: {selectedUser.role}</p>
          </div>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <h2>Edit User</h2>
            <label>Email</label>
            <input type="text" value={editedUser.email} disabled />
            <label>Name</label>
            <input
              type="text"
              value={editedUser.name}
              onChange={(e) =>
                setEditedUser({ ...editedUser, name: e.target.value })
              }
            />
            <label>Role</label>
            <input
              type="text"
              value={editedUser.role}
              onChange={(e) =>
                setEditedUser({ ...editedUser, role: e.target.value })
              }
            />
            <div className="modalActions">
              <button className="cancelBtn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="saveBtn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
          <div className="modalOverlay" onClick={closeModal} />
        </div>
      )}
    </>
  );
};

export default Users;

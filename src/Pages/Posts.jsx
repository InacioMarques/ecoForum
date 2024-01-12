import "../styles/posts.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Posts = () => {
  return (
    <>
      <Helmet>
        <title>EcoForum | Posts</title>
      </Helmet>
      <header className="postsHeader">
        <h1>Posts</h1>
      </header>
      <section className="postsContainer">
        <div className="tablePostsContainer">
          <Link to="./dashboard" className="backBtn">
            Back
          </Link>
          <button className="createBtn">Create</button>
          <table className="tablePosts">
            <tr className="textBold">
              <td>User Email</td>
              <td>User Avatar</td>
              <td>User Name</td>
              <td>Post Text</td>
              <td>CRUD</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>avatar</td>
              <td>username</td>
              <td>post text</td>
              <td>
                <button className="readBtn">Read</button>
                <button className="editBtn">Edit</button>
                <button className="deleteBtn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>avatar</td>
              <td>username</td>
              <td>post text</td>
              <td>
                <button className="readBtn">Read</button>
                <button className="editBtn">Edit</button>
                <button className="deleteBtn">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default Posts;

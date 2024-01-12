import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>EcoForum | Dashboard</title>
      </Helmet>
      <header className="dashHeader">
        <h1>Dashboard</h1>
      </header>

      <section className="mainContainer">
        <div className="dashContainer">
          <div className="dashCardContainer">
            <Link to="/dashboard/posts" className="dashCard">
              <img
                className="dashImg"
                src="/public/images/posts.png"
                alt="profile"
              />
              <h2>Posts</h2>
            </Link>
            <Link to="/dashboard/feedback" className="dashCard">
              <img
                className="dashImg"
                src="/public/images/feeds.png"
                alt="profile"
              />
              <h2>Feed</h2>
            </Link>
            <Link to="/dashboard/users" className="dashCard">
              <img
                className="dashImg"
                src="/public/images/users.png"
                alt="profile"
              />
              <h2>Users</h2>
            </Link>
            <Link to="/ecoforum" className="dashCard">
              <img
                className="dashImg"
                src="/public/images/forum.png"
                alt="profile"
              />
              <h2>Forum</h2>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/showUser/${id}`, user);
    navigate("/");
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/showUser/${id}`
      );
      setUser(result.data);
    };

    loadUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="m-4 text-center">Edit User</h2>
        <div className="mb-3">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

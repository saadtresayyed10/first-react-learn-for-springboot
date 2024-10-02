import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewUsers = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/showUser/${id}`
      );
      setUser(result.data);
    };

    getUser();
  });

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">User Detail</h2>
        <div className="mt-10">
          <h3>Name: {user.name}</h3>
          <h3>Username: {user.username}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;

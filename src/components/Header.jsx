import "../styles/components/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getUserProfile,
  updateUserProfile,
} from "../features/user/userActions";

function Header() {
  const dispatch = useDispatch();
  const { token, status } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile({ token }));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const handleSave = () => {
    dispatch(updateUserProfile({ token, profile: { firstName, lastName } }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setIsEditing(false);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {isEditing ? (
          <>
            <div className="header-edit-name-inputs">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder={firstName}
                autoComplete="given-name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder={lastName}
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="header-edit-name-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <div>
            {`${user.firstName} ${user.lastName}!`}
            <div>
              <button
                className="edit-button"
                onClick={() => setIsEditing(true)}
              >
                Edit Name
              </button>
            </div>
          </div>
        )}
      </h1>
    </div>
  );
}

export default Header;

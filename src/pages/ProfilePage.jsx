import "../styles/pages/ProfilePage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Account from "../components/Account";
import accountData from "../data/accountData";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <Header />
        <h2 className="sr-only">Accounts</h2>
        {accountData.map((account) => (
          <Account key={account.id} account={account} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;

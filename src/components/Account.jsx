import PropTypes from "prop-types";

const Account = ({ account }) => {
  const formattedAmount = account.amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{formattedAmount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

Account.propTypes = {
  account: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Account;

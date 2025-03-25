import PropTypes from "prop-types";

const FeatureItem = ({ feature }) => {
  return (
    <div className="feature-item">
      <img src={feature.icon} alt={feature.alt} className="feature-icon" />
      <h3 className="feature-item-title">{feature.title}</h3>
      <p>{feature.text}</p>
    </div>
  );
};

export default FeatureItem;

FeatureItem.propTypes = {
  feature: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

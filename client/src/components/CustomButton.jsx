import PropTypes from 'prop-types';

const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
  return <button
    onClick={onClick}
    type={type || 'button'}
    className={`inline-flex items-center ${containerStyles}`}
  >
    {title}
    {iconRight && <div className="ml-2"> {iconRight} </div>}
  </button>
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  containerStyles: PropTypes.string,
  iconRight: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton
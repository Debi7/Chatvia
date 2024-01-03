import PropTypes from "prop-types";
// import { clsx } from 'clsx';

const Checkbox = (props) => {
  const { checkboxText, ...rest } = props;
  return (
    <div>
      <label>
        <input {...rest} type="checkbox" />
        <span>{checkboxText}</span>
      </label>
    </div>
  )
};

Checkbox.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  checkboxText: PropTypes.string,
};

export default Checkbox;

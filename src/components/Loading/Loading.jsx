import PropTypes from 'prop-types';

function Loading({ text }) {
  return <div>Loading {text}...</div>;
}

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;

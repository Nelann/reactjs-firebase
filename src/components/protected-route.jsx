import PropTypes from "prop-types";

export default function ProtectedRoute({ children }) {
  return <div>{children}</div>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

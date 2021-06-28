import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

function RouteAuth({ redirectTo, isPrivate, component: Component, ...rest }) {
  const authenticated = localStorage.getItem("@Auth_JWT:JWT_TOKEN");

  if (!authenticated && isPrivate) return <Redirect to={redirectTo} />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
Route.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Route.defaultProps = {
  redirectTo: "/",
  isPrivate: false,
};

export default RouteAuth;

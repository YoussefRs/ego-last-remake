import React from "react";
// import { Helmet } from "react-helmet";

const withHelmet = (WrappedComponent) => {
  return (props) => (
    <>
      {/* <Helmet>
        <title>Shyamoli Engineering University.</title>
      </Helmet> */}
      <WrappedComponent {...props} />
    </>
  );
};

export default withHelmet;

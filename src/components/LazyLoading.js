import React, { Suspense } from "react";

const LazyLoading = (props) => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <h1>This is how modules are categorised and loaded when needed.</h1>
      </Suspense>
  );
};

export default LazyLoading;

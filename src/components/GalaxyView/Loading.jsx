import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { LoadingWrapper } from "./LoadingStyle";

const Loading = () => {
  return (
    <LoadingWrapper>
      <Oval color="#00BFFF" height={100} width={100} />
    </LoadingWrapper>
  );
};

export default Loading;

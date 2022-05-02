import React, { ChangeEvent, FC, useState,useEffect } from "react";
// import { getRocketsById } from "./services/spacex/service";
import { SpacexRockets } from "./components/spaceX/components";
export const App: FC = () => {


  return (
    <>
      <h1>SpaceX</h1>
      <SpacexRockets/>
    </>
  );
};

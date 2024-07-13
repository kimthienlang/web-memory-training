import React from "react";
import RowIntro from "./RowIntro";

export default function Introduce({profiles} : any) {
  return (
    <>
      <RowIntro profile={profiles[0]}/>
      <RowIntro profile={profiles[1]}/>
      <RowIntro profile={profiles[2]}/>
    </>
  )
}

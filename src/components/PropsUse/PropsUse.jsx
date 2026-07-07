import React from "react";
import { useState } from "react";
import Clock from "./Clock";
function PropsUse() {
  return (
    <>
      <div className="border border-2 p-2">
        Digital Clock
        <Clock />
      </div>
    </>
  );
}
export default PropsUse;

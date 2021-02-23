import React from "react";
import Button from "@material-ui/core/Button";

export default function PlainCSSButton() {
  return (
    <div className="button">
      <Button className="button">Sing Up </Button>
      <Button >Sing In</Button>
    </div>
  );
}
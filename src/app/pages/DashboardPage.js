import React from "react";
import Inputs from "../../_metronic/layout/components/dashboard/Inputs";
import MediaCards from "../../_metronic/layout/components/dashboard/MediaCards";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
  },
});

export function DashboardPage() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.center}>Wyszukiwarka</h1>
      <Inputs />
      <MediaCards />
    </>
  );
}

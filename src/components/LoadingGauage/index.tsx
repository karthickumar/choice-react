import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    display: "flex",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function LoadingGauage(props: any) {
  const { showProgress = false } = props;

  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  const loaderProps: any = {};
  if (showProgress) {
    loaderProps.value = progress;
    loaderProps.variant = "determinate";
  }
  React.useEffect(() => {
    if (showProgress) {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 10
        );
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }
  }, []);

  return (
    <div className={classes.root}>
      <CircularProgress {...loaderProps} />
    </div>
  );
}

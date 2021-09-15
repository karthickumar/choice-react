import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { panMenu } from "./menuFixture";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function PanMenuList(props: any) {
  const classes = useStyles();
  console.log("{PanMenu] -", props);
  return (
    <>
      {Object.keys(panMenu)?.map((item: any, idx: number) => {
        return (
          <div key={idx}>
            <List className={clsx(classes.list)} key={idx}>
              {panMenu[item]?.menu?.map((item: any, id: number) => (
                <ListItem
                  button
                  key={id}
                  onClick={() => {
                    props.togglePanMenu();
                    item?.link ? props.history.push(item?.link) : "";
                  }}
                >
                  <ListItemText primary={item?.label} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
        );
      })}
    </>
  );
}

function PanCakeMenu(props: any) {
  console.log("[PanCakeMenu] -", props);
  const { open = false, togglePanMenu = () => {} } = props;

  return (
    <Drawer open={open} onClose={togglePanMenu}>
      <PanMenuList {...props} />
    </Drawer>
  );
}

export { PanCakeMenu };
export default withRouter(PanCakeMenu);

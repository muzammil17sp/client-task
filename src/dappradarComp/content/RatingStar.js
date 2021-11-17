import React from "react";
import { makeStyles } from '@mui/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import './RatingStar.css'



const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center"
  },
  "icon-1": { backgroundColor: "red", color:"white",margin:'4px'},
  "icon-2": { backgroundColor: "#FF9D4C", color:"white" },
  "icon-3": { backgroundColor: "#FFCE00", color:"white" },
  "icon-4": { backgroundColor: "#73CF11", color:"white" },
  "icon-5": { backgroundColor: "#00B67A", color:"white"}
});

export default function HoverRating2() {
  const [value, setValue] = React.useState()
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        classes={{
          iconFilled: classes[`icon-${Math.ceil(value)}`],
          iconFocus: classes[`icon-${Math.ceil(hover)}`]
        }}
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<StarIcon  fontSize="inherit" />}
      />
      {value !== null && (
        <Box ml={2}></Box>
      )}
    </div>
  );
}

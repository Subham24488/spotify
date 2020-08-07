import React from "react";
import {
  PlayCircleFilledOutlined,
  SkipPreviousOutlined,
  SkipNextOutlined,
  ShuffleOutlined,
  RepeatOneOutlined,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumInfo" src="" alt="" />
        <div className="footer__songInfo">
          <h4>HEllo!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleOutlined className="footer__green" />
        <SkipPreviousOutlined className="footer__icon" />
        <PlayCircleFilledOutlined fontSize="large" className="footer__icon" />
        <SkipNextOutlined className="footer__icon" />
        <RepeatOneOutlined className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid tiem xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

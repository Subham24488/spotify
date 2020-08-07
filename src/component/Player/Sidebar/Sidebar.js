import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../../../DataLayer";

function Sidebar() {
  const [{ playLists }, dispatch] = useDataLayerValue();
  console.log(playLists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="unavailable"
      />
      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playLists?.items?.map((playLists) => (
        <SidebarOption title={playLists.name} />
      ))}
    </div>
  );
}

export default Sidebar;

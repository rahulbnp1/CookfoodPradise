import NavBar from "../navBar/NavBar";
import Dashboard from "./Dashboard";
import LeftButtons from "./LeftButtons";
import "./SideBaar.css"
import { Outlet } from "react-router-dom";


export default function SideBaar() {
  return (
    <>
    <NavBar />

    <div className="layout-grid">
      <div className="left-column">
      <LeftButtons />
      </div>
      <div className="right-column">
      <Outlet />
      </div>
    </div>
    
    </>
  )
}

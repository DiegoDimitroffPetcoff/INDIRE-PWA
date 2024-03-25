"use client"
import SideBar from "../components/Common/SideBar";





export default function Layout({ children }) {
  return (
    <>
      <SideBar/>
      {children};
    </>
  );
}

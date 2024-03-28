"use client";
import SideBar from "../home/sidebar/page";

export default function Home({ children }) {
  return (
    <>
      <SideBar />
      {children};
    </>
  );
}

// import { Outlet } from "react-router-dom";
// import { useAuth } from "@/contexts/AuthProvider";
// import { Leftbar, Navbar, Rightbar } from "@/components";
// import { useState } from "react";

// const DashboardLayout = () => {
//   const [open, setOpen] = useState(false);
//   const [openRight, setOpenRight] = useState(false);
//   const { user } = useAuth();
//   console.log(user);
//   return (
//     <div className="h-screen w-full flex">
//       <Leftbar
//       // open={open}
//       // onClose={() => {
//       //   setOpen(false);
//       // }}
//       />
//       <div className="flex-1 overflow-y-auto p-8 scr h-full no-scrollbar bg-slate-100">
//         <Navbar
//           toggleLeft={() => {
//             setOpen(!open);
//             setOpenRight(false);
//           }}
//           toggleRight={() => {
//             setOpen(false);
//             setOpenRight(!openRight);
//           }}
//         />
//         <Outlet />
//       </div>

//       <Rightbar
//         open={openRight}
//         toggle={() => {
//           setOpen(false);
//           setOpenRight(!openRight);
//         }}
//       />
//     </div>
//   );
// };

// export default DashboardLayout;

import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import RightSide from "./RightSide";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [showRightSide, onSetShowRightSide] = useState(false);
  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
        onRightSiderHide={() => {
          onSetShowRightSide(true);
        }}
      >
        <Outlet />
      </Content>
      <RightSide
        onRightSideHide={() => {
          onSetShowRightSide(false);
        }}
        showRightSide={showRightSide}
      />
    </div>
  );
};

export default DashboardLayout;

import { Outlet } from "react-router-dom"; //content will come throught this
import { ToastContainer } from "react-toastify"; //Needed for toaster messages
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default MainLayout;

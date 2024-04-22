import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Router } from "./router/BrowserRouter";
import { Toaster } from "react-hot-toast";
import { ToastErrorSvg, ToastSuccessSvg } from "./constants/Data";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerClassName="toast-container-custom"
        toastOptions={{
          success: {
            icon: (
              <div className="toast-container-div">
                <ToastSuccessSvg />
              </div>
            ),
            style: {
              backgroundColor: "#009049",
              color: "#fff",
              fontSize: "16px",
            },
          },
          error: {
            icon: (
              <div className="toast-container-div">
                <ToastErrorSvg />
              </div>
            ),
            style: {
              backgroundColor: "red",
              color: "#fff",
              fontSize: "16px",
            },
          },
        }}
      />
    </>
  );
}

export default App;

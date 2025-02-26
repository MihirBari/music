import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { ResourcePage } from "./pages/ResourcePage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  document.addEventListener('copy', (e) => {
    // Prevent the default copy behavior
    e.preventDefault();

    // Set custom content to the clipboard
    const customText = "Musical Minds.";
    e.clipboardData.setData('text/plain', customText);
    e.clipboardData.setData('text/html', `<b>${customText}</b>`);

    
  });

 
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
 
          <Route path="/Archives" element={<ResourcePage />} />

        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{
            zIndex: 110090,
          }}
          theme="colored"
        />
      </>
    </div>
  );
}

export default App;

import MainPage from "./components/HomePage/MainPage";
import DisplayContent from "./components/displayContent/DisplayContent";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import CartContextProvider from "./CartContext";
import LogIn from "./components/logInPage/SignIn";
import SignUp from "./components/logInPage/SignUp";
import AddressInfo from "./components/addressInfo/AddressInfo";
import Layout from "./Layout";
import StaticPage from "./components/staticPages/StaticPage";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="address-info" element={<AddressInfo />} />
            <Route
              path="static-pages"
              element={
                <Layout>
                  <StaticPage />
                </Layout>
              }
            />

            <Route
              path="/"
              element={
                <Layout>
                  <MainPage />
                </Layout>
              }
            />
            <Route
              path="/display-content"
              element={
                <Layout>
                  <DisplayContent />
                </Layout>
              }
            />
            <Route
              path="/place-order/:id"
              element={
                <Layout>
                  <PlaceOrder />
                </Layout>
              }
            />
            <Route
              path="/checkout"
              element={
                <Layout>
                  <Checkout />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <ErrorPage />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;

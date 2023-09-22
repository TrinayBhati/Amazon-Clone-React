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
import UserFeedback from "./components/userFeedback/UserFeedback";
import { useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import db from "./FireBase";
import { auth } from "./FireBase";

function App() {
  const { setUser } = useContext(CartContext);
  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const userDoc = await db.collection("users").doc(userId).get();
        if (userDoc.exists) {
          const userData = userDoc.data();

          setUser(userData);
        } else {
          console.log('User document not found in "users" collection.');
          // setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // setUser(null);
      }
    };

    const forId = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const providerId = authUser.providerData[0].providerId;
        if (providerId === "password") {
          fetchUserData(authUser.uid);
        }
      }
    });

    return () => {
      forId();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="address-info" element={<AddressInfo />} />
          <Route path="user-feedback" element={<UserFeedback />} />
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
    </>
  );
}

export default App;

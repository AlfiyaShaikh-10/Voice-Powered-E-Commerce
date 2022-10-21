import React, { Fragment, createContext, useReducer, useEffect, useState, useCallback } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
import alanBtn from '@alan-ai/alan-sdk-web';
import { useHistory } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import CartModal from "../partials/CartModal"
// import Navber from "../partials/Navber"

export const HomeContext = createContext();


const HomeComponent = () => {
  const history = useHistory();

  const [category, setCategory] = useState([]);
  // const openCart=useCallback(()=>{
  //   alanInstance.playText("opening Cart")

  // })
  // useEffect(()=>{
  // window.addEventListener(COMMANDS.OOPEN_CART,openCart)
  // return ()=>{
  //   window.removeEventListener(COMMANDS.OOPEN_CART,openCart)
  // }
  // },[opencart]
  // )
  useEffect(() => {
    alanBtn({
      key: 'd22e60a51299e6155cfe9d61365910e42e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, product }) => {
        if (command === "showCart") {
          CartModal.cartModalOpen()
          // Navber.navberToggleOpen()
        }
        if (command === "watches") {
          history.push("/products/category/634873b2e323cf25f8812041")
        }
        if (command === "womenClothes") {
          history.push("/products/category/634874d0e323cf25f8812045")
        }
        if (command === "shoes") {
          history.push("/products/category/634875e8e323cf25f8812069")
        }
        if (command === "menClothes") {
          history.push("/products/category/63487500e323cf25f8812049")
        }

        if (command === "Wishlist") {
          history.push("/wish-list");
        }
        if (command === "adminPanel") {
          history.push("/admin/dashboard");
        }
        if (command === "homePage") {
          history.push("/localhost:3000/");

        }
      },
    });
    // filter("");
  }, [history]);

  // const filter = (names) => {
  //   const filtered = product.filter((item) => item.name.includes(names));
  //   console.log(filtered);
  //   setCategory(filtered);
  // };
  // useEffect(() => {
  //   alanBtn({
  //     key: 'd22e60a51299e6155cfe9d61365910e42e956eca572e1d8b807a3e2338fdd0dc/stage',
  //     onCommand: (commandData) => {
  //       if (commandData.command === 'go:back') {
  //         // Call the client code that will react to the received command
  //       }
  //     }
  //   });
  // }, []);
  return (
    <Fragment>
      <Slider />
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section>
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
// import { productByCategory } from "../../admin/products/FetchApi";
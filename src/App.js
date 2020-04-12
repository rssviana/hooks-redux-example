import React from "react";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar";
import Image from "./components/Image";
import Layout from "./components/Layout";

import store from "./store";

import './App.sass';

function App() {

  return (
    <Provider store={store}>
      <Layout>
        <Image />
        <Sidebar />
      </Layout>
    </Provider>
  );
}

export default App;

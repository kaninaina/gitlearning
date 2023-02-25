import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Body, Container, Header } from "./App.styled";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdduserDataFetcher } from "./Context/Contex";

function App() {
  let cleimt = new QueryClient();
  let b = AdduserDataFetcher();

  return <></>
}

export default App;

import React, { useState, createContext, ReactElement } from "react";
import { useQueries, useQuery } from "react-query";

function daocall() {
  let a = {
    name: "kani",
    age: 20,
  };
  return a;
}

export const AdduserDataFetcher = () => {
  return {
    ...daocall(),
  };
};

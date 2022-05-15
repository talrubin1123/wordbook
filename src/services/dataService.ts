import axios from "axios";
import { CategoryApiData,Category } from "../types/categoriesType";
import { atom, selector } from "recoil";
import { useState } from "react";


async function getCategories() {
  const userApiUrl = 'http://localhost:8888/categories';
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get<CategoryApiData>(userApiUrl);
    return response.data || [];
  } catch (error) {
    throw new Error(
        
      );
  }
}


/**
 * Populate the default selector return value with a service call.
 */
export const allCategoriesState = selector<Category[]>({
  key: "allCategoriesState",
  get: async ({ get }) => {
    try {
      const response = await getCategories();
      console.log("response", response);
      
      return response.categories || [];
    } catch (error) {
      return [];
    }
  }
});

/**
 * This is the atom the UI components will use to display state.
 */
export const categoryListState = atom<Category[]>({
  key: "categoryListState",
  default: allCategoriesState
});
import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as cartInMemory from "./helpers/cart-in-memory";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  addProduct: (product: ProductProps) => void;
  removeProduct: (productId: string) => void;
  clearProducts: () => void;
};

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],

      addProduct: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.addProduct(state.products, product),
        })),
      removeProduct: (productId: string) =>
        set((state) => ({
          products: cartInMemory.removeProduct(state.products, productId),
        })),

      clearProducts: () => set(() => ({ products: [] })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

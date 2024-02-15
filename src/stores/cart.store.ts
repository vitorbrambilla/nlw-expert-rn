import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import * as cartInMemory from "./helpers/cart-in-memory";

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  addProduct: (product: ProductProps) => void;
  removeProduct: (id: string) => void;
};

export const useCartStore = create<StateProps>((set) => ({
  products: [],

  addProduct: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.addProduct(state.products, product),
    })),
  removeProduct: () => {},
}));

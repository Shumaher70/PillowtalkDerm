import { Review } from '@prisma/client';

export type CartType = {
   id: string;
   title: string;
   image: string;
   price: number;
   reviews: Review[];
   totalPrice: number;
   quantity: number;
   soldOut: boolean;
   sold: number;
   pair: string[];
};

export type ProductType = {
   id: string;
   images: string[];
   video: string;
   title: string;
   price: number;
   reviews: Review[];
   soldOut: boolean;
   sold: number;
   pair: string[];
};

export type BlogType = {
   id: string;
   images: string[];
   title: string;
   tags: string[];
};

import { Box, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

function Card({ title, price, imageUrl }) {
  return (
    <Box>
      <Box
        boxShadow="md"
        rounded="md"
        bg="white"
        alignContent={"center"}
        display={"inline-block"}
        mb="5px"
        p="15px"
        transition="transform 0.3s ease-in-out"
        _hover={{
          boxShadow: "lg",
          transform: "scale(1.08)",
        }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor="gray.200"
        borderStyle="solid"
      >
        <Image
          className="img"
          src={imageUrl}
          alt={title}
          width={"-moz-fit-content"}
        />
        <Text mt="2" fontSize="md" fontWeight="semibold">
          {title}
        </Text>
        <Text mt="1" fontWeight="medium">
          ${price}
        </Text>
      </Box>
    </Box>
  );
}
export default Card;

export const card = [
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/zincovit-tablet-15-s_b65a0677-01fc-4490-aa89-d357ecab7166.JPG",
    price: 1200,
    title: "Zincovit Tablet 15's",
    id: 1,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/venusia-max-lotion-300ml_92a4e688-af04-43df-aed5-63dbe216d8ba.JPG",
    price: 100,
    title: "venusia-max-lotion-300ml",
    id: 2,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/vicks-vaporub-10gm_ca9dd8b6-0d2f-40b2-a8d9-e581c142e3bf.JPG",
    price: 1200,
    title: "vicks-vaporub-10gm",
    id: 3,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/moov-spray-80gm_e3a5937e-3830-40ca-a8cf-a1e3fb586c83.JPG",
    price: 1200,
    title: "moov-spray-80gm",
    id: 4,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/dettol-antiseptic-liquid-250ml_e69d98d5-724a-49ce-9177-ec66b5d62a0e.JPG",
    price: 120,
    title: "dettol-antiseptic-liquid-250ml",
    id: 5,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/boost-powder-500gm-refill_fc71aa67-3818-458c-8d0f-1e3ca4dc8f4f.JPG",
    price: 200,
    title: "boost-powder-500gm-refill",
    id: 6,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/glyco-6-30gm-cream-1-s_1b972d9f-1662-4fdb-99c9-a757e6bd7097.JPG",
    price: 15,
    title: "glyco-6-30gm-cream-1-s",
    id: 7,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/confido-tablet-60-s_e54d0810-345d-44bf-9487-454840599ea1.JPG",
    price: 160,
    title: "confido-tablet-60-s",
    id: 8,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/hairbless-tablet-10-s_a8a4e75b-2934-4237-b613-e8b4e8cf7f7d.JPG",
    price: 140,
    title: "hairbless-tablet-10-s",
    id: 9,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/shelcal-hd-tablet-15-s_23367154-e6a6-406d-9608-5eca749504bf.JPG",
    price: 46,
    title: "shelcal-hd-tablet-15-s",
    id: 10,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/tedibar-soap-75gm_dfb62be5-792a-4a65-bef3-bb729e1cfc0d.JPG",
    price: 1200,
    title: "tedibar-soap-75gm",
    id: 12,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/volini-spray-60ml_a21a3261-fa5a-44c1-95f4-07fb679a522c.JPG",
    price: 10,
    title: "volini-spray-60ml",
    id: 13,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/shelcal-xt-tablet-15-s_ae095fc9-3ad5-4bde-ad93-26dbae637648.JPG",
    price: 1200,
    title: "shelcal-xt-tablet-15",
    id: 14,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/prega-news-card-1-s_08e02001-8cc9-4152-925e-48473bc3eb5a.JPG",
    price: 1200,
    title: "prega-news-card",
    id: 15,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/electral-powder-21-8gm_27a79315-7ee5-4583-a290-cf04173a59bf.JPG",
    price: 1200,
    title: "electral-powder-21-8gm",
    id: 16,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/shelcal-500mg-tablet-15-s_ef3c4e71-3c09-4132-85aa-be7fa6cf9cbf.JPG",
    price: 120,
    title: "shelcal-500mg-tablet",
    id: 17,
  },
  {
    imageUrl:
      "https://www.practostatic.com/practopedia-images/v3/res-150/neurobion-forte-tablet-immunity-booster-30-s_21a91fb7-e499-441f-809a-df655f3abcd2.JPG",
    price: 1200,
    title: "neurobion-forte-tablet-immunity-booster-30-s",
    id: 18,
  },
];

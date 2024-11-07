import { EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { Avatar, Card, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toastText } from "./../../constants/Data";
import axios from "axios";

const { Meta } = Card;

const ListingCard = (props) => {
  const { listData } = props;

  const onClickWishlistHandler = (values) => {
   
    const accessToken = localStorage.getItem("AccessToken");
    if (accessToken) {
        axios
          .post(
            `${process.env.REACT_APP_API_ENDPOINT}/wishlist/create`,
            values,
            {
              headers: {
                authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((response) => {
            if (response?.data?.statusCode === 200) {
              toastText(response?.data?.message, "success");
            } else {
              toastText(response?.data?.message, "error");
            }
          })
          .catch((error) => {
            console.error(error);
            toastText("An error occurred while adding to wishlist", "error");
          });
    } else {
      toastText("You have to login first", "error");
    }
  };

  return (
    <>
      {listData.length > 0 ? (
        <div
          className="grid  lg:grid-cols-4 justify-center gap-7 mb-10"
          style={{}}
        >
          {listData.map((data, index) => (
            <Card
              key={index}
              className="shadow hover:shadow-lg cursor-pointer "
              style={{ width: 300 }}
              cover={
                <img
                  alt={`${data?.image}`}
                  src={`${process.env.REACT_APP_IMAGES}/Images/${data?.image}`}
                />
              }
              // actions={[<EyeOutlined key="view" onClick={ clickHandler(data) } />]}
              actions={[
                <Tooltip placement="bottom" title="view">
                  <Link
                    to={`/cardDetail/${data.id}`} // Navigate to a detail page with ID in the URL
                    key="view"
                  >
                    <EyeOutlined />
                  </Link>
                </Tooltip>,
                <Tooltip placement="bottom" title="wishlist">
                  <HeartOutlined
                    onClick={() => {
                      onClickWishlistHandler(data);
                    }}
                  />
                </Tooltip>,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                }
                title={`Title : ${data?.title}`}
                description={`${data?.description}`}
              />
              <p className="mt-2">
                <span className="font-bold">Price : </span>{" "}
                <span className="text-cyan-500 ">{data?.price} Rs</span>
              </p>
              <p className="mt-2 ">
                <span className="font-bold">Type : </span>{" "}
                <span className="bg-orange-500 text-white p-1 rounded text-base">
                  {data?.listingType}
                </span>
              </p>
              <p className="mt-2 ">
                <span className="font-bold">Location : </span>{" "}
                <span className=" p-1 rounded text-base">{data?.location}</span>
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-center font-bold text-4xl mt-40 mb-40">
            No data found !!!
          </div>
        </>
      )}
    </>
  );
};

export default ListingCard;

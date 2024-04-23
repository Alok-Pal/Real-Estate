import { Avatar, Card, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toastText } from "../../constants/Data";
import { Link } from "react-router-dom";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [userAccessToken, setUserAccessToken] = useState();
  
  const onClickWishlistHandler = useCallback(
    (values) => {
      if (userAccessToken) {
        const wishlistItemId = values?.id;
        axios
          .delete(
            `${process.env.REACT_APP_API_ENDPOINT}/wishlist/delete/${wishlistItemId}`,
            {
              headers: {
                Authorization: `Bearer ${userAccessToken}`,
              },
            }
          )
          .then((response) => {
            if (response?.data?.statusCode === 200) {
              // Handle successful deletion if needed
              toastText(response?.data?.message, "success");

              axios
                .get(`${process.env.REACT_APP_API_ENDPOINT}/wishlist/get`, {
                  headers: {
                    Authorization: `Bearer ${userAccessToken}`,
                  },
                })
                .then((response) => {
                  if (response?.data?.statusCode === 200) {
                    setWishlistData(response?.data?.data);
                  } else {
                    toastText(response?.data?.message, "error");
                  }
                });
            } else {
              toastText(response?.data?.message, "error");
            }
          })
          .catch((error) => {
            console.error(error);
            toastText(
              "An error occurred while deleting the wishlist item",
              "error"
            );
          });
      } else {
        toastText("You have to login first", "error");
      }
    },
    [userAccessToken]
  );

  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");
    setUserAccessToken(accessToken);
    if (accessToken) {
      axios
        .get(`${process.env.REACT_APP_API_ENDPOINT}/wishlist/get`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          if (response?.data?.statusCode === 200) {
            setWishlistData(response?.data?.data);
          } else {
            toastText(response?.data?.message, "error");
          }
        })
        .catch((error) => {
          console.error(error);
          toastText("An error occurred while getting a wishlist", "error");
        });
    } else {
      toastText("You have to login first", "error");
    }
  }, [onClickWishlistHandler]);

  return (
    <>
      {wishlistData.length > 0 ? (
        <div
          className="grid  lg:grid-cols-4 justify-center gap-7 mb-10 p-4"
          style={{}}
        >
          {wishlistData.map((data, index) => (
            <Card
              key={index}
              className="shadow hover:shadow-lg cursor-pointer "
              style={{ width: 300 }}
              cover={
                <img
                  alt={`${data?.image}`}
                  src={`http://localhost:8000/Images/${data?.image}`}
                />
              }
              actions={[
                <Tooltip placement="bottom" title="view">
                  <Link to={`/cardDetail/${data.listId}`} key="view">
                    <EyeOutlined />
                  </Link>
                </Tooltip>,
                <Tooltip placement="bottom" title="Delete from wishlist">
                  <DeleteOutlined
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

export default Wishlist;

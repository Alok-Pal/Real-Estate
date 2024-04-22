import { EyeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ListingCard = (props) => {
  const { listData } = props;
  return (
    <>
      {listData.length > 0 ? (
        <div
          className="grid  lg:grid-cols-4 justify-center gap-7 mb-10"
          style={{}}
        >
          {listData.map((data) => (
            <Card
              className="shadow hover:shadow-lg cursor-pointer "
              style={{ width: 300 }}
              cover={
                <img
                  alt={`${data?.image}`}
                  // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  src={`http://localhost:8000/Images/${data?.image}`}
                />
              }
              // actions={[<EyeOutlined key="view" onClick={ clickHandler(data) } />]}
              actions={[
                <Link
                  to={`/cardDetail/${data.id}`} // Navigate to a detail page with ID in the URL
                  key="view"
                >
                  <EyeOutlined />
                </Link>,
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
        <div className="flex justify-center font-bold text-4xl mt-40 mb-40">No data found !!!</div>
        </>
      )}
    </>
  );
};

export default ListingCard;

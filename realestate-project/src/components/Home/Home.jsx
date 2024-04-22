import axios from "axios";
import { useEffect, useState } from "react";
import ListingCard from "../Card/ListingCard";
import { Input, Space } from "antd";

export default function Home() {
  const [userDetail, setUserDetail] = useState("");
  const [listData, setListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTextData, setSearchTextData] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    setUserDetail(userDetails?.name);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/user/userData`)
      .then((res) => {
        mergeListings(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function mergeListings(users) {
    const mergedListings = [];
    users.forEach((user) => {
      mergedListings.push(...user.listing);
    });
    setListData(mergedListings);
    setFilteredData(mergedListings);
  }

  const onSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchTextData(searchText);

    const filtered = listData.filter((item) => {
      return (
        item.location.toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText)
      );
    });
    setFilteredData(filtered);
  };

  const onPriceFilter = () => {
    const filtered = listData.filter((item) => {
      return (
        (!minPrice || item.price >= parseInt(minPrice)) &&
        (!maxPrice || item.price <= parseInt(maxPrice))
      );
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-xl font-bold lg:text-4xl md:text-2xl sm:text-xl">
                Welcome{' '}
                <span className="text-orange-400">
                  {userDetail ? userDetail : "user"} !
                </span>
                <span className="hidden sm:block lg:text-4xl md:text-2xl sm:text-xl">
                  Real-estate
                </span>
              </h2>
            </div>
          </div>

          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img
              className="w-96"
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="image1"
            />
          </div>
        </aside>
      </div>
      <h1 className="text-center text-3xl text-orange-600 py-10 font-medium">
        Properties In Your area. !!!
      </h1>
      <div className="mb-4 flex justify-center relative">
        <Input
          className="border-orange-700 hover:border-orange-700 border-2 text-lg text-orange-500 "
          placeholder="Search on location & title"
          onChange={(e) => {
            onSearch(e);
          }}
          style={{ width: 400 }}
        />
      </div>

      <div className="mb-4 flex justify-center relative">
        <Space>
          <Input
            className="border-orange-700 hover:border-orange-700 border-2 text-lg text-orange-500 "
            placeholder="Min Price"
            onChange={(e) => setMinPrice(e.target.value)}
            style={{ width: 120 }}
          />
          <Input
            className="border-orange-700 hover:border-orange-700 border-2 text-lg text-orange-500 "
            placeholder="Max Price"
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{ width: 120 }}
          />
          <button onClick={onPriceFilter} className="border-orange-600 border p-1 h-10 w-16 hover:bg-orange-400 rounded bg-orange-500 text-white">Apply</button>
        </Space>
      </div>

      <div className="ps-10">
        <ListingCard
          listData={
            searchTextData === "" && minPrice === "" && maxPrice === ""
              ? listData
              : filteredData
          }
        />
      </div>
    </>
  );
}

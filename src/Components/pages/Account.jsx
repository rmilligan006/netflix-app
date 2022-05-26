import React from "react";
import SavedShows from "../SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://external-preview.redd.it/_WrDXu4damKU1Y0DFtrx1cTxinsfHT1N6OV6WMzyBTk.jpg?auto=webp&s=27a9a8864f9df8814c4415d04f8c6571a6afd00e"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Yer Favourites</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;

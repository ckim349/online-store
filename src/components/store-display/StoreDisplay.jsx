import React, { useState, useEffect } from "react";
import getAllItems from "../../utils/getAllItems";
import Items from "./Items";
import SortItems from "./SortItems";

const StoreDisplay = ({setWobble}) => {
  const [sortingOption, setSortingOption] = useState("");
  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayNumber, setDisplayNumber] = useState("12");
  const [search, setSearch] = useState("");

  const getItems = async () => {
    const results = await getAllItems();
    setAllItems(results);
  };

  useEffect(() => {
    getItems();
  }, []);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  const handleSorting = (option) => {
    resetPage();
    setSortingOption(option);
  };

  const handleChange = () => {
    resetPage();
    setChecked(!checked);
  };

  const handleCategory = (option) => {
    resetPage();
    setCategory(option);
  };

  const handleDisplay = (option) => {
    resetPage();
    setDisplayNumber(option);
  }

  const handleSearch = (e) => {
    resetPage();
    setSearch(e.target.value);

  }

  return (
    <div className="w-[90vw]">
      <SortItems
        handleSorting={handleSorting}
        handleChange={handleChange}
        sortingOption={sortingOption}
        checked={checked}
        category={category}
        handleCategory={handleCategory}
        resetPage={resetPage}
        displayNumber={displayNumber}
        handleDisplay={handleDisplay}
        search={search}
        handleSearch={handleSearch}
      />
      <Items
        sortingOption={sortingOption}
        checked={checked}
        category={category}
        allItems={allItems}
        currentPage={currentPage}
        changePage={changePage}
        displayNumber={displayNumber}
        setWobble={setWobble}
        search={search}
      />
    </div>
  );
};

export default StoreDisplay;

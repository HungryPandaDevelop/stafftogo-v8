import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import CardsItem from 'pages/catalog/CardsItem';



const Pagination = ({
  listings,
  listingType,
  invited,
  accountInfo,
  currentCard,
  cabinetType,
  uid }) => {

  const Items = ({ currentItems }) => {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id}>
              <CardsItem
                listing={item}
                key={item.id}
                imgCompany={item.imgCompany}
                link={`/catalog/${listingType}/${item.id}`}
                idCategory={listingType}
                listingType={listingType}
                invited={invited}
                uid={uid}
                accountInfo={accountInfo}
                currentCard={currentCard}
                cabinetType={cabinetType}
              />
            </div>
          ))}
      </>
    );
  }

  const PaginatedItems = ({ itemsPerPage }) => {

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {

      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(listings.slice(itemOffset, endOffset));

      setPageCount(Math.ceil(listings.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % listings.length;

      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <>
      <PaginatedItems
        itemsPerPage={2}
      />
    </>
  )
}

export default Pagination

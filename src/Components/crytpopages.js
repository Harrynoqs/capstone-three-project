import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { FetchCryptoApi } from '../Redux/STORE/cryptoSlice';
import FormatNumber from '../modify/roundoff';

const CryptoCu = () => {
  const cryptoArray = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetched = useSelector((state) => state.cryptoReducer);

  useEffect(() => {
    if (fetched.status === '') {
      dispatch(FetchCryptoApi());
    }
  }, [fetched.status, dispatch]);

  if (fetched.status === 'success') {
    cryptoArray.push(fetched.cryptos[0]);
  }

  const handleClick = (Obj) => {
    navigate(
      '/crypto-details',
      {
        state: {
          cryptos: Obj,
        },
      },

    );
  };

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchResults = [];
  const searchMessage = document.querySelector('.searchMessage');
  if (search === '') {
    if (searchMessage) {
      searchMessage.style.display = 'none';
    }
  }
  if (search) {
    searchMessage.style.display = 'block';

    cryptoArray[0].map((i) => {
      if (i.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        searchResults.push(i);
      }
      cryptoArray[0] = searchResults;

      if (searchResults.length > 0) {
        searchMessage.classList.add('success');
        searchMessage.classList.remove('failure');
      } else {
        searchMessage.classList.remove('success');
        searchMessage.classList.add('failure');
      }
      return (cryptoArray);
    });
  }

  return (
    <div className="allcontainer">
      <div className="wrapper flex">
        <div className="bg-wrapper" />
        <div className="wrapper-content h-four">
          <h4 className="white left h-one">CYRPTO CURRENCIES</h4>
          <p className="white left">
            {cryptoArray[0] ? cryptoArray[0].length : ''}
            {' '}
            Cyrptos
          </p>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
      <h4 className="white h-four">CRYPTO-CURRENCY STATS</h4>
      <p className="searchMessage">
        {!searchResults.length ? 'No currency Found.' : `${searchResults.length} currency/currencies found.`}
      </p>
      <div className="cryptoDetails flex">
        {cryptoArray[0] ? cryptoArray[0].map((i) => (
          <button key={i.id} onClick={() => handleClick(i)} type="button" className="detailContainer h-four">
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            <div colSpan="2" className="crypto-name white">
              <span className="white crypInformation">{i.name}</span>
              <p>
                <span className="price white font-4">
                  $
                  {i.priceUsd > 1000
                    ? FormatNumber(+(i.priceUsd))
                    : Math.round(i.priceUsd * 100) / 100}
                </span>
                <br />
                <span className="change font-4">
                  {Math.round(i.changePercent24Hr * 100) / 100}
                  {i.changePercent24Hr > 0
                    ? (<i className="fa fa-caret-up" aria-hidden="true" />)
                    : <i className="fa fa-caret-down" aria-hidden="true" />}
                  {i.changePercent24Hr === 0 ? (<i className="fa fa-minus" aria-hidden="true" />) : ''}
                </span>
              </p>
            </div>
          </button>
        ))
          : (
            <div>
              <div className="load-spinner">
                <FadeLoader color="#36d7b7" size={500} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default CryptoCu;

import React from 'react';
import { useLocation } from 'react-router-dom';
import roundOff from '../modify/roundoff';
import removeCharacters from '../modify/removeCharacters';

const Cryptocurrency = () => {
  const { state } = useLocation();
  const data = state.cryptos;

  return (
    <div className="crypocontainer">
      <div className="wrapperData flex">
        <div className="wrapperDataBg" />
        <div className="wrapperDataBg1 wrapperDataBg1-p1">
          <h1 className="white rank wrapperH1">
            {data.rank}
          </h1>
          <h4 className="white">{data.name}</h4>
          <p className="white status" id="status">
            {data.changePercent24Hr ? (Math.round(data.changePercent24Hr * 100) / 100) : ''}
            {data.changePercent24Hr > 0
              ? <i className="fa fa-caret-up" aria-hidden="true" />
              : <i className="fa fa-caret-down" aria-hidden="true" />}
          </p>
        </div>
      </div>
      <div>
        <h4 className="white wrapperDataBg1-p1">
          {data.name}
          {' '}
          Summary
        </h4>
      </div>
      <table className="white">
        <tbody>
          <tr>
            <td>Symbol</td>
            <td>
              {data.symbol}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Supply</td>
            <td className="sameFont">
              {removeCharacters(roundOff(data.supply))}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Maximum Supply</td>
            <td className="sameFont">
              {removeCharacters(roundOff(data.maxSupply))}

              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Market Capital</td>
            <td className="sameFont">
              {removeCharacters(roundOff(data.marketCapUsd))}
              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Volume</td>
            <td className="sameFont">
              {removeCharacters(roundOff(data.volumeUsd24Hr))}
              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td className="sameFont">
              {roundOff(data.priceUsd)}
              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Change</td>
            <td className="sameFont">
              {Math.round(data.changePercent24Hr * 100) / 100}

              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td><p><a href={data.explorer}>Website</a></p></td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default Cryptocurrency;

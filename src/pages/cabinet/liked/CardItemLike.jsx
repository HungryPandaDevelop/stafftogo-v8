import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleListing } from 'store/asyncActions/getSingleListing';

const CardItemLike = ({ like, typeCabinet }) => {

  const [data, setData] = useState(false);
  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';
  useEffect(() => {

    if (typeCabinet === 'vacancies') {
      getSingleListing('resume', like).then(res => { setData(res); });
    } else {
      getSingleListing('vacancies', like).then(res => { setData(res); });
    }
    //
  }, []);

  return (
    <>
      {data && (<div className="cards-cabinet-item main-full">
        <h3>
          <Link to={`/catalog/${reverseTypeCabinet}/${like}`}>{data.card_name}</Link>
          <Link className='btn btn--orange' to={`/cabinet/videochat/videoroom-out/${data.userRef}`}>Позвонить {data.userInfo.name}</Link>
        </h3>
      </div>)}
    </>
  )
}

export default CardItemLike;
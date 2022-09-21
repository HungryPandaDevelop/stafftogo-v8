import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleListing } from 'store/asyncActions/getSingleListing';

const CardItemLike = ({ like, typeCabinet }) => {

  const [data, setData] = useState(false);
  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';
  useEffect(() => {
    if (typeCabinet === 'vacancies') {
      getSingleListing('resume', like).then(res => setData(res));
    } else {
      getSingleListing('vacancies', like).then(res => setData(res));
    }
    //
  }, []);

  return (
    <>
      {data && (<div className="cards-cabinet-item main-full">
        {console.log('data', data)}
        <h3>
          <Link to={`/catalog/${reverseTypeCabinet}/${like}`}>{data.card_name}</Link>
        </h3>
      </div>)}
    </>
  )
}

export default CardItemLike;
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getSingleListing } from 'store/asyncActions/getSingleListing';

import { saveInfo } from 'store/asyncActions/saveInfo';

const CardItemResponse = ({ listing, typeCabinet }) => {
  // console.log(listing)
  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';
  const [data, setData] = useState([]);
  const [secData, setSecData] = useState([]);
  const [status, setChangeStatus] = useState(listing.data.status);


  useEffect(() => {
    if (typeCabinet === 'vacancies') {
      getSingleListing('resume', listing.data.ownId).then(res => setData(res));
      getSingleListing('vacancies', listing.data.hisId).then(res => setSecData(res));

    } else {
      getSingleListing('vacancies', listing.data.ownId).then(res => setData(res));
      getSingleListing('resume', listing.data.hisId).then(res => setSecData(res));
    }
    //
  }, []);

  const onChangeStatus = (statusParam) => {
    if (status !== statusParam) {
      saveInfo({ 'status': statusParam }, listing.id, 'message').then(() => {
        setChangeStatus(statusParam);
      });
    }
  }

  const tagRender = (tags) => {
    return tags.map((el, index) => (
      <div key={index}
        className={`tag-invite ${el[2]} ${status === el[0] ? 'active' : ''}`}
        onClick={() => onChangeStatus(el[0])}
      >{el[1]}
      </div>
    ))
  }

  return (
    <div className="cards-cabinet-item main-full">
      {console.log(typeCabinet, listing.data.ownId, data)}
      <h3>Отклик на <Link to={`/catalog/${reverseTypeCabinet}/${listing.data.hisId}`}>{data.card_name}</Link> От <Link to={`/catalog/${typeCabinet}/${listing.data.ownId}`}>{secData.card_name}</Link>
      </h3>
      <div>
        {tagRender([['agree', 'Согласен', 'green'], ['refuse', 'Отказать', 'red'], ['view', 'Рассматривается', 'yellow']])}
      </div>
    </div>
  )
}

export default CardItemResponse;
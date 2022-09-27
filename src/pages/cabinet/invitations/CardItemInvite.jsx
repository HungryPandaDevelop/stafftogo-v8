import { useEffect, useState } from 'react';
import InviteInfo from 'pages/cabinet/parts/cards/InviteInfo';
import { Link } from 'react-router-dom';
import { getSingleListing } from 'store/asyncActions/getSingleListing';

const CardItemInvite = ({ listing, typeCabinet }) => {


  const [data, setData] = useState([]);
  const [secData, setSecData] = useState([]);
  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';

  useEffect(() => {
    if (typeCabinet === 'vacancies') {
      getSingleListing('resume', listing.data.hisId).then(res => setData(res));
      getSingleListing('vacancies', listing.data.ownId).then(res => setSecData(res));
    } else {
      getSingleListing('vacancies', listing.data.hisId).then(res => setData(res));
      getSingleListing('resume', listing.data.ownId).then(res => setSecData(res));
    }

  }, []);

  return (
    <div className="cards-cabinet-item main-full">
      <h3>
        Я пригласил на&nbsp;
        <Link
          to={`/catalog/${typeCabinet}/${listing.data.hisId}`}
        >
          {data.card_name}&nbsp;
        </Link>
        для&nbsp;
        <Link
          to={`/catalog/${reverseTypeCabinet}/${listing.data.ownId}`}>
          {secData.card_name}
        </Link>
      </h3>
      <div className="btn btn--green">
        Удалить
      </div>
    </div>
  )
}

export default CardItemInvite;
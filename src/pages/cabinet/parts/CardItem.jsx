import Controls from 'pages/cabinet/parts/cards/Controls';
import UserInfo from 'pages/cabinet/parts/cards/UserInfo';
import UserImg from 'pages/cabinet/parts/cards/UserImg';
import ResumeInfo from 'pages/cabinet/parts/cards/ResumeInfo';
import CardsUpdate from 'pages/cabinet/parts/cards/CardsUpdate';

const ListItem = (props) => {

  const {
    listing,
    onDelete,
    onEdit,
    onActivate,
    currentCard,
    id
  } = props;

  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-12 ">
          <CardsUpdate update={listing.timestamp} />
        </div>
        <div className="col-2">
          <UserImg img={listing.userInfo.imgsAccount} />
        </div>

        <div className="col-5">
          <ResumeInfo
            name={listing.card_name}
            expFrom={listing.ageWork_from}
            expTo={listing.ageWork_to}
            priceFrom={listing.salary_priceFrom}
            priceTo={listing.salary_priceTo}
            education={listing.typeEducation}
            id={id}
          />
        </div>

        <div className="col-5">
          <UserInfo
            name={listing.userInfo.fio}
            phone={listing.userInfo.phones_main}
            mail={listing.userInfo.email}
          />
          <Controls
            id={id}
            name={listing.name}
            onEdit={onEdit}
            onDelete={onDelete}
            onActivate={onActivate}
            currentCard={currentCard}
          />
        </div>
      </div>
    </div>
  )
}

export default ListItem;
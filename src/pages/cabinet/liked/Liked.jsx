
import { connect } from 'react-redux';

import CardItemLike from 'pages/cabinet/liked/CardItemLike';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


const Liked = ({ typeCabinet, accountInfo }) => {
  console.log(accountInfo.likeMass);
  const contentPage = () => {
    return (
      <>
        {

          (accountInfo.likeMass && accountInfo.likeMass.length !== 0) ? accountInfo.likeMass.map((like) => (
            <div key={like}>
              <CardItemLike
                like={like}
                typeCabinet={typeCabinet}
              />
            </div>
          )) : 'Empty Like List'
        }
      </>
    )
  }


  return (
    <>
      <TemplateAccount title="Мне понравилось" >
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    typeCabinet: state.accountInfo.info.typeCabinet,
  }
}



export default connect(mapStateToProps)(Liked);

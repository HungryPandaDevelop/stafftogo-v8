import CabinetSidebar from 'pages/cabinet/parts/CabinetSidebar';

const TemplateAccount = ({ title, children, rightSibar }) => {
  return (
    <div>
      <div className="content">
        <div className="main-grid cabinet-head">
          <div className="col-2 col-lg-3"> </div>
          <div className="col-10 col-lg-7">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="main-grid">
          <div className="col-2 col-lg-3">
            <CabinetSidebar />
          </div>
          <div className="col-8 col-lg-7">
            <div className="cabinet-body">
              {children}
            </div>
          </div>
          <div className="col-2">
            {rightSibar}
          </div>
        </div>
      </div>
    </div>
  )
}

TemplateAccount.defaultProps = {
  title: 'Templage Cabinet Page'
}

export default TemplateAccount


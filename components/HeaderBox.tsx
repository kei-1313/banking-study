const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
              <span className="text-bankGradient">
                &nbsp;{user}
              </span>
            )}
          </h1>
          <p className="header-box-subtext">{subtext}</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderBox
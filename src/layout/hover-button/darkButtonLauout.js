const DarkButtonLauout = (props) => {
  return (
    <>
      <div className="darkStyle">
        <div>
          {props.text}{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.62 3.95331L13.6667 7.99998L9.62 12.0466"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.33331 8H13.5533"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .darkStyle {
          color: #fff;
          text-align: center;
          background-color: #29292b;
          border: 1px solid #000;
          border-radius: 2rem;
          align-items: center;
          width: 100%;
          height: 56px;
          padding: 18px 23px;
          font-size: 18px;
          font-style: normal;
          font-weight: 100;
          line-height: normal;
          display: flex;
          font-family: sequel_sans !important;
        }
        .darkStyle svg {
          position: relative;
          top: 4px;
        }
      `}</style>
    </>
  );
};

export default DarkButtonLauout;

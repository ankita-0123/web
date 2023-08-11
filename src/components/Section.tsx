import React from 'react';
interface SectionProps {
  imgSrc: string;
  title: string;
  content: string;
  reverseOrder?: boolean;
}

const Section: React.FC<SectionProps> = ({
  imgSrc,
  title,
  content,
  reverseOrder,
}) => {
  return (
    <section>
      <div className="container">
        <div className={`row align-items-center ${reverseOrder ? 'flex-row-reverse' : ''}`}>
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={imgSrc} alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">{title}</h2>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

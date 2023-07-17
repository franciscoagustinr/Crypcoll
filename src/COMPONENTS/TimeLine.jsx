import React from "react";

export const TimeLine = () => {
  return (
    <div className="relative text-center  ">
      <section className="design-section  my-20 font-poppins">
        <div className="timeline ">
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component  timeline-content">
            <h3 className="text-base">Technical & Legal works begin</h3>
            <p className="text-xs mt-2"> January 2023</p>
          </div>
          <div className="timeline-component timeline-content">
            <h3 className="text-base">Alpha Crypto Chain</h3>
            <p className="text-xs mt-2">February 2023</p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className=" timeline-component timeline-content">
            <h3 className="text-base">Ico Begins</h3>
            <p className="text-xs mt-2">April 2023</p>
          </div>

          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div id="glass" className=" timeline-component timeline-content">
            <h3 className="text-base">Full Public Crypto Chain Start</h3>
            <p className="text-xs mt-2">August 2023</p>
          </div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

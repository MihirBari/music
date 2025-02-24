import React from 'react';

const PlaceCard = () => {
  return (
    <div style={{ position: 'absolute', left: '0px', top: '0px' }}>
      <div
        style={{
          backgroundColor: 'white',
          margin: '10px',
          padding: '1px',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px',
          borderRadius: '2px',
        }}
      >
        <div>
          <div className="place-card place-card-large">
            <div className="place-desc-large">
              <div className="place-name">Techsa Services Private Limited</div>
              <div className="address">
                913-914, B Wing, Damji Shamji Corporate Square, Laxmi Nagar,
                Ghatkopar East, behind Kanara Business Center, Mumbai, Maharashtra
                400075
              </div>
            </div>
            <div className="navigate">
              <div className="navigate">
                <a
                  aria-label="Get directions to this location on Google Maps."
                  rel='noreferrer'
                  target="_blank"
                  href="https://maps.google.com/maps/dir//Techsa+Services+Private+Limited+913-914,+B+Wing,+Damji+Shamji+Corporate+Square,+Laxmi+Nagar,+Ghatkopar+East+behind+Kanara+Business+Center+Mumbai,+Maharashtra+400075/@19.0910888,72.9163831,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3be7c7cc849925a9:0xae6b724d51049e67"
                  className="navigate-link"
                >
                  <div className="icon navigate-icon"></div>
                  <div className="navigate-text">Directions</div>
                </a>
              </div>
              <div className="tooltip-anchor">
                <div className="tooltip-tip-outer"></div>
                <div className="tooltip-tip-inner"></div>
                <div className="tooltip-content">
                  <div>Get directions to this location on Google Maps.</div>
                </div>
              </div>
            </div>
            <div className="review-box">
              <div aria-hidden="true" className="review-number">
                4.9
              </div>
              <div role="img" className="rating-stars">
                <div className="icon rating-star rating-full-star"></div>
                <div className="icon rating-star rating-full-star"></div>
                <div className="icon rating-star rating-full-star"></div>
                <div className="icon rating-star rating-full-star"></div>
                <div className="icon rating-star rating-full-star"></div>
              </div>
              <a
                aria-label="17 reviews"
                rel='noreferrer'
                target="_blank"
                href="https://search.google.com/local/reviews?placeid=ChIJqSWZhMzH5zsRZ54EUU1ya64&amp;q=Techsa+Services+Private+Limited&amp;hl=en&amp;gl=IN"
                className="review-box-link"
              >
                17 reviews
              </a>
            </div>
            <div className="bottom-actions">
              <div className="google-maps-link">
                <a
                  aria-label="View larger map"
                  rel='noreferrer'
                  target="_blank"
                  href="https://maps.google.com/maps?ll=19.089387,72.913023&amp;z=16&amp;t=m&amp;hl=en-GB&amp;gl=US&amp;mapclient=embed&amp;cid=12568264861504806503"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
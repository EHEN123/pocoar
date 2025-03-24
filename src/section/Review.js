import React, { useState, useEffect } from 'react';

export default function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // public 폴더에 있는 reviewDB.json 파일을 가져옴
    fetch('/reviewDB.json')
      .then(response => response.json())
      .then(data => setReviews(data)); // reviewDB의 모든 데이터를 가져와서 상태에 저장
  }, []);

  return (
    <div>
      <section>
        <div className="c04 container">
          <div className="row gx-3">
            <h1 className="text-center lh-sm mb-5 fs-lg-6 fs-xxl-7">REVIEW</h1>

            <div className="imgSlider d-flex">
              {reviews.map((review, index) => (
                <div className="imgWrapper" key={review.id}>
                  <img
                    src={`/asset/gallery/life/life_${index + 1}.jpg`} 
                    alt={`Review ${index + 1}`}/>
                  <div className="overlay">
                    <p>{review.review}</p>
                    <img className='linkIcon' src="/asset/icons/link.svg" alt="Link Icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

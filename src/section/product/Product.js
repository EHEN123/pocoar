import React, { useEffect, useState } from 'react';

export default function Product() {
  const [images, setImages] = useState({});
  const [activeTab, setActiveTab] = useState('miniMug');

  useEffect(() => {
    fetch('/productDB.json')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error("Error loading images:", error));
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div>
      <section>
        <div className="container" id="product">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-3">
              <h1 className="vh1 text-center lh-sm fs-lg-6 fs-xxl-7">PRODUCT</h1>
            </div>
            <div className="col-12">
              <nav></nav>
              <div className="nav nav-tabs clickr-tabs mb-3 justify-content-center" id="nav-tab" role="tablist">
                {['miniMug', 'mug', 'plate', 'life'].map((category) => (
                  <button
                    key={category}
                    className={`nav-link ${activeTab === category ? 'active' : ''}`}
                    id={`nav-${category.toUpperCase()}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#nav-${category.toUpperCase()}`}
                    type="button"
                    role="tab"
                    aria-controls={`nav-${category.toUpperCase()}`}
                    aria-selected={activeTab === category}
                    onClick={() => handleTabClick(category)}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="tab-content" id="nav-tabContent">
              {['miniMug', 'mug', 'plate', 'life'].map((category) => (
                <div
                  key={category}
                  className={`tab-pane fade ${activeTab === category ? 'show active' : ''}`}
                  id={`nav-${category.toUpperCase()}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${category.toUpperCase()}-tab`}
                >
                  <div className="row gx-3">
                    {images[category] && images[category].map((image, index) => (
                      <div className="col-6 col-xl-3 mb-3 h-100" key={index}>
                        <div className="card card-span h-100">
                          <img className="rounded-3 h-100" src={image} alt={`Product ${category} ${index + 1}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="col-12 d-flex justify-content-center mt-5">
                <a className="Lbtn btn-lg btn-outline-warning rounded-pill" href="#!">VIEW MORE<i className="fas fa-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

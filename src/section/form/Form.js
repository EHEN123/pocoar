import React, { useState, useEffect } from 'react';
import { createSlider, images } from './slider';

export default function Form() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [phone, setPhone] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");

    if (value.length > 3 && value.length <= 7) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 7) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }

    setPhone(value.slice(0, 13));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm("예약하시겠습니까?");
    if (isConfirmed) {
      alert("현재 페이지는 포트폴리오용 가제작 페이지로, 실제 예약이 불가합니다.");
    }
  };

  useEffect(() => {
    createSlider("slider-container");
  }, []);

  useEffect(() => {
    const sliderContainer = document.getElementById("slider-container");
    if (sliderContainer && sliderContainer.children.length === 0) {
      createSlider("slider-container");
    }
  }, []);

  return (
    <div>
      <section className="py-5 bg-dark" id="oneDay">
        <div className="c03 container">
          <div className="row gx-3">
            <h1 className="vh1 text-center lh-sm mb-5 fs-lg-6 fs-xxl-7 text-white">1Day CLASS</h1>

            <div className="c03Box d-block d-lg-flex col-12 justify-content-between align-items-stretch overflow-hidden">
              
              <div className="box03 col-12 col-lg-5 d-flex flex-column justify-content-between">
                <div id="slider-container" className="box03-swiper"></div>
                <div id="map">
                  <div style={{ width: "100%", height: "100%" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.4515196640736!2d126.924012!3d37.561018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9948df3d7b6b%3A0xe2c8772e991e2a45!2z7J247Ja07Iqk7Yq4IOygnO2VnOyynOyKpA!5e0!3m2!1sko!2skr!4v1711172421497!5m2!1sko!2skr"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="box04 col-12 col-lg-6 mt-5 mt-lg-0">
                <div className="classForm bg-light">
                  <form className="formInner" action="#" method="POST" onSubmit={handleSubmit}>
                    <h3 className="my-2 pb-3 fw-bold">1DAY CLASS 예약</h3>

                    <div className="row gx-3 d-block d-lg-flex my-2">
                      <div className="col-12 col-xl-6">
                        <div className="F_name">이름</div>
                        <input
                          type="text"
                          placeholder="성함을 입력해 주세요."
                          name="name"
                          className="inputBox"
                          maxLength="8"
                        />
                      </div>

                      <div className='col-12 col-xl-6'>
                        <div className="F_tel">연락처</div>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="010-0000-0000"
                          name="phone"
                          className="inputBox"
                          value={phone}
                          onChange={handlePhoneChange}
                          maxLength="13"
                        />
                      </div>
                    </div>

                    <div className="row gx-3 d-lg-flex my-2">
                      <div className="col-12 col-xl-6 ">
                        <div className="F_people">수강 인원</div>
                        <select name="num_people" className="option">
                          <option value="1명">1명</option>
                          <option value="2명">2명</option>
                          <option value="3명">3명</option>
                          <option value="4명">4명</option>
                        </select>
                      </div>

                      <div className='col-12 col-xl-6'>
                        <div className="F_people">수강 날짜</div>
                        <input type="date" name="date" className="date" />
                      </div>
                    </div>

                    <div className="classType my-3">
                      <div className="F_people">수강 작품</div>
                      <div className="cdBtn">
                        <div className="row gx-3">
                          <div className="col-6 col-xl-3">
                            <button
                              type="button"
                              className={`category-btn ${selectedCategory === "plate" ? "selected" : ""}`}
                              onClick={() => handleCategoryClick("plate")}>
                              PLATE
                            </button>
                          </div>
                          <div className="col-6 col-xl-3">
                            <button
                              type="button"
                              className={`category-btn ${selectedCategory === "mug" ? "selected" : ""}`}
                              onClick={() => handleCategoryClick("mug")}>
                              MUG
                            </button>
                          </div>
                          <div className="col-6 col-xl-3">
                            <button
                              type="button"
                              className={`category-btn ${selectedCategory === "mini-mug" ? "selected" : ""}`}
                              onClick={() => handleCategoryClick("mini-mug")}>
                              MINIMUG
                            </button>
                          </div>
                          <div className="col-6 col-xl-3">
                            <button
                              type="button"
                              className={`category-btn ${selectedCategory === "life" ? "selected" : ""}`}
                              onClick={() => handleCategoryClick("life")}>
                              LIFE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>


                    <button type="submit" className="sumbit my-5 d-flex align-items-center justify-content-center">
                      예약하기
                    </button>

                    <div className="notice mt-3">
                      <p className="pb-1">※ 당일 예약 취소 시에는 환불이 어려울 수 있습니다.</p>
                      <p className="pb-1">※ 모든 도자기 재료는 클래스에서 제공되므로, 별도로 구매하지 않으셔도 됩니다.</p>
                      <p className="pb-1">※ 재료에 대한 알레르기가 있는 경우 사전에 알려주시기 바랍니다.</p>
                      <p className="pb-1">※ 기타 문의는 인스타그램 DM으로 부탁드립니다.</p>
                    </div>
                  </form>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </div>
  );
}

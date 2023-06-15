import React, { useEffect } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTherapists } from '../redux/Therapy/therapySlice';
import Navigation from '../components/Navigation';
import specializationArr from '../components/specialization';
import '../css/HomePage.css';
import therapistImg from '../img/therapist.jpg';
import facebookImg from '../img/facebook.png';
import twitterImg from '../img/twitter.png';
import linkedinImg from '../img/linkedin.png';

function HomePage() {
  const myTherapists = useSelector((state) => state.therapy.therapists);
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && myTherapists?.length === 0) {
        dispatch(fetchTherapists());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, myTherapists]);

  return (
    <main className="home_page_main">
      <section className="home_page_nav">
        <Navigation />
      </section>

      <section className="home_page_content">
        <header>
          <h1>Starred Therapists</h1>

          <p className="hide1">Please select a therapist</p>

          <div className="search_box">
            <fieldset className="fieldset_border_none">
              {/* onChange={(e) => setInputSpecialty(e.target.value)} */}
              <select aria-label="Input Label" className="input_name" id="specializationId">

                {specializationArr.map((specialty) => (
                  <option key={specialty} value={specialty.value} aria-label="Input Specialization">{specialty.name}</option>
                ))}
              </select>
            </fieldset>
          </div>
        </header>

        <div className="home_grids">
          <div className="home_grids_box">
            <Link className="td_none" to="/therapistdetails">
              {/* {myTherapists.map((myTherapist) => ())} */}
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="home_page_socials">
                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={facebookImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={twitterImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={linkedinImg} alt="" />
                    </Link>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="home_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="home_page_socials">
                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={facebookImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={twitterImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={linkedinImg} alt="" />
                    </Link>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="home_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="home_page_socials">
                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={facebookImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={twitterImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={linkedinImg} alt="" />
                    </Link>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="home_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="home_page_socials">
                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={facebookImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={twitterImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={linkedinImg} alt="" />
                    </Link>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="home_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="home_page_socials">
                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={facebookImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={twitterImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={linkedinImg} alt="" />
                    </Link>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

          <div className="home_grids_box">
            <Link className="td_none" to="/therapistdetails">
              <article>
                <figure className="therapy_figure">
                  <img src={therapistImg} alt="" />
                </figure>

                <h4>MARCUS DAVID</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id.</p>

                <div className="home_page_socials">
                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={facebookImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={twitterImg} alt="" />
                    </Link>
                  </figure>

                  <figure className="home_page_social_icons">
                    <Link to="/" className="td_none">
                      <img src={linkedinImg} alt="" />
                    </Link>
                  </figure>
                </div>

              </article>
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}

export default HomePage;

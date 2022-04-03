import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import resume from '../assets/resume/Sharan_Resume.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  button[type='button'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hello, I am <span>Baidehi Sharan Yadav</span>
              </p>
              <h2 className="about__heading">Software Developer</h2>
              <div className="about__info">
                <PText>
                  I am a Software Developer based in india who loves to write
                  software to build great products and help businesses succeed
                  with their goals. I appreciate good design and I am seeing
                  it's importance more than ever in today's apps, websites and
                  products. I am an aspiring entrepreneur who subscribes to the
                  lean startup ideology.
                  <br /> <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                  <br />
                  <br />
                  Anyone who wishes to know more about me or my interests and
                  wants to find more information about my work please feel free
                  to contact me anytime. Thank you so much for visiting my
                  website and I welcome you to go through the other pages too.
                </PText>
              </div>
              <a
                href={resume}
                download="Sharan_Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">Download CV</button>
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="B.E - CSE"
                items={['Sona College of Technology || Tamil Nadu, India']}
              />
              <AboutInfoItem
                title="+2 Science"
                items={['Mega National College || Lalitpur, Nepal']}
              />
              <AboutInfoItem
                title="SLC"
                items={[
                  'Ram Bilas Yadav Janta Sec. School || Mahottari, Nepal',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Languages"
                items={['C', 'Java', 'JavaScript']}
              />
              <AboutInfoItem title="Web Dev" items={['HTML', 'CSS', 'REACT']} />
              <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
              <AboutInfoItem title="Database" items={['MySQL', 'MongoDB']} />
              <AboutInfoItem title="Miscellaneous" items={['DSA', 'Git']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

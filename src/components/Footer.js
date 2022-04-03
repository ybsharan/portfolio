import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Baidehi Sharan Yadav</h1>
          <PText>
            I am a Software Developer based in india who loves to write software
            to build great products and help businesses succeed with their
            goals. I appreciate good design and I am seeing it's importance more
            than ever in today's apps, websites and products. I am an aspiring
            entrepreneur who subscribes to the lean startup ideology.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 9894507332',
                path: 'tel:+919894507332',
              },
              {
                title: 'bsharanyadav@gmail.com',
                path: 'mailto:bsharanyadav@gmail.com',
              },
              {
                title: 'Salem, TamilNadu 636005, India',
                path: 'https://goo.gl/maps/RCJUEk2MFPubeeKj6',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'LinkedIn',
                path:
                  'https://www.linkedin.com/in/baidehi-sharan-yadav-9067221a1/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/ybsharan',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/ysharan79/',
              },
              {
                title: 'Twitter',
                path:
                  'https://twitter.com/ysharan07?t=2niRaiDzAYeyUbiTa7vmlg&s=08',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Sharan| Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/baidehi-sharan-yadav-9067221a1/"
            >
              Sharan
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

import React from 'react';
import Image from 'next/image';

const HowTakePhoto: React.FC = () => (
  <div className="faq-section">
    <div className="container">
      <div className="data-wrap">
        <div className="sub-title">
          <h2 id="how-to-take-a-photo">{'How To Take A Photo'}</h2>
          <p>{'Biometrically Approved Photos'}</p>
        </div>
        <div className="faq-list">
          <ul>
            <li className="">
              <div className="question">
                <h3>{'Background'}</h3>
              </div>
              <div className="advice">
                <div className="img">
                  <span>
                    <Image src="/images/faq/faq-01.png" width={27} height={27} alt="" />
                  </span>
                </div>
                <div className="text">
                  <p>
                    {'Stand in front of a background that is plain or white and free of shadows'}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="question">
                <h3>{'Head Position'}</h3>
              </div>
              <div className="advice">
                <div className="img">
                  <span>
                    <Image src="/images/faq/faq-02.png" width={27} height={27} alt="" />
                  </span>
                </div>
                <div className="text">
                  <p>{'Position your head inside the green overlay'}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="question">
                <h3>{'Facial Expression'}</h3>
              </div>
              <div className="advice">
                <div className="img">
                  <span>
                    <Image src="/images/faq/faq-03.png" width={27} height={27} alt="" />
                  </span>
                </div>
                <div className="text">
                  <p>
                    {
                      'Keep a neutral expression and look directly into the camera with full your face in view'
                    }
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="question">
                <h3>{'Obstructions'}</h3>
              </div>
              <div className="advice">
                <div className="img">
                  <span>
                    <Image src="/images/faq/faq-04.png" width={27} height={27} alt="" />
                  </span>
                </div>
                <div className="text">
                  <p>
                    {
                      'Don’t wear glasses, headphones or allow your hair or any other items to obstruct your face'
                    }
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HowTakePhoto;

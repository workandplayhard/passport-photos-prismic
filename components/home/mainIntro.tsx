import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PAGES, START_PRICE } from '../../constants';

const MainIntro = (props: any, ref: any) => {
  const router = useRouter();

  return (
    <div className="main-intro" ref={ref}>
      <div className="container">
        <div className="intro-wrap">
          <div className="intro-title">
            <div className="title big">
              <h1>
                <b>
                  {/*
                  {'Hey '}
                  <span className="emoji-wrap">
                    <Image src="/images/emoji/waving.png" width={40} height={40} alt="" />
                  </span>
                  */}
                  {'Take Your U.S. '}
                  {/*
                  <span className="emoji-wrap">
                    <Image src="/images/emoji/us-flag.png" width={40} height={40} alt="" />
                  </span>
                  */}
                  <br />
                  {' Passport Photo Online'}
                  <br />
                </b>
              </h1>
              <ul>
                <li>{'Take a Photo with Your Mobile or PC'}</li>
                <li>{'100% Online - Shipped Straight To You or Print at Home'}</li>
                <li>{'Unlimited Revisions: Your Passport Photo, Your Way'}</li>
                <li>{'Biometrically Verified, Secure & Simple'}</li>
              </ul>
            </div>
            <div className="btn-wrap">
              <button
                type="button"
                className="main-btn big"
                onClick={() => router.push(PAGES.photo.selectType)}>
                {`Start Now - From $${START_PRICE / 100} Per Photo`}
              </button>
            </div>
          </div>
          <div className="intro-img">
            <span>
              <Image
                src="/images/intro-01.png"
                priority={true}
                placeholder="empty"
                width={661}
                height={670}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(MainIntro);

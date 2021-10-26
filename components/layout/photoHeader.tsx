import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PhotoHeader: React.FC = () => (
  <header>
    <div className="steps-header">
      <div className="container">
        <div className="toolbar">
          <div className="left-side">
            <div className="logo">
              <Link href={'/'}>
                <a>
                  <Image src="/images/logo.png" alt="" width={147} height={44} />
                </a>
              </Link>
            </div>
          </div>
          <div className="right-side">
            <div className="steps-advantages">
              <ul>
                <li>
                  <span className="icon-revisions" />
                  {'Unlimited revisions'}
                </li>
                <li>
                  <span className="icon-safe" />
                  {'Secure & safe'}
                </li>
                <li>
                  <span className="icon-government" />
                  {'Approved in government'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
export default PhotoHeader;

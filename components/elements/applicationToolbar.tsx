import React from 'react';
import Link from 'next/link';
import { Bars } from 'react-loading-icons';
import classNames from 'classnames';

interface ApplicationToolbarProps {
  step: number;
  backLink: string;
  loading: boolean;
  blur?: boolean;
  onNext: () => void;
}

const ApplicationToolbar: React.FC<ApplicationToolbarProps> = ({
  step,
  backLink,
  loading,
  blur = false,
  onNext
}) => (
  <div className={classNames('application-toolbar', { blur })}>
    <div className="container">
      <div className="data-wrap">
        <div className="back-btn">
          {step !== 1 ? (
            <Link href={backLink}>
              <a className="main-btn big outline">
                <span className="icon-left" /> {'Back'}
              </a>
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="next-btn">
          <button type="button" className="main-btn big" onClick={onNext}>
            {loading ? (
              <Bars height={25} fill={'#FFFFFF'} stroke={'transparent'} />
            ) : (
              <>
                {'Next'} <span className="icon-right" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ApplicationToolbar;

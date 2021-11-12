import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { PAGES, PHOTO_STEP } from '../../constants';
import ProcessStepPhoto from '@/components/elements/processStepPhoto';
import { ProcessPhotoProps } from '@/pages/photo/process-photo';
import { useRouter } from 'next/router';
import {
  CartItemInput,
  Code,
  Dictionary,
  ProductType,
  useAddItemsToCartMutation,
  useCheckPhotoMutation
} from '@/generated/graphql';
import classNames from 'classnames';
import { showError, showSuccess } from '@/lib/utils/toast';
import { Bars } from 'react-loading-icons';
import { camelCaseToSentence } from '@/lib/utils/string';
import { parse } from 'path';
import { useAuth } from '@/lib/auth';

enum Status {
  loading = 0,
  success = 1,
  failed = 2
}

const ProcessPhoto: React.FC<ProcessPhotoProps> = ({ entry }) => {
  const router = useRouter();
  const { updateCart } = useAuth();
  const [addToCart] = useAddItemsToCartMutation();
  const [checkPhoto] = useCheckPhotoMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(Status.loading);
  const [failed, setFailed] = useState<Dictionary[]>([]);
  const [passed, setPassed] = useState<Dictionary[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const imageUrl = useMemo(
    () => entry.form.steps[0].fields.find((f) => f.name === 'image_url')?.value,
    [entry.form.steps]
  );

  const imageLink = useMemo<string>(() => {
    if (imageUrl) {
      return status === Status.success
        ? `${parse(imageUrl).dir}/${parse(imageUrl).name}_watermark${parse(imageUrl).ext}`
        : imageUrl;
    } else {
      return '/images/steps/step-02-03.png';
    }
  }, [imageUrl, status]);

  const processPhoto = useCallback(async () => {
    setStatus(Status.loading);
    const { data } = await checkPhoto({ variables: { entryId: entry.id } });
    const result = data?.CheckPhoto.data;
    if (result) {
      if (result.code === Code.Code200) {
        setStatus(Status.success);
      } else {
        setStatus(Status.failed);
      }
      setFailed(result.failed);
      setPassed(result.passed);
    } else {
      showError(data?.CheckPhoto.message ?? 'Unexpected error');
      setStatus(Status.failed);
    }
  }, [checkPhoto, entry.id]);

  const onAddToCartItem = useCallback(
    async (cartItem: CartItemInput) => {
      setLoading(true);
      const { data } = await addToCart({
        variables: {
          cartItems: [cartItem]
        }
      });
      setLoading(false);
      const cart = data?.AddItemsToCart.data;
      if (cart) {
        updateCart(cart);
        showSuccess('This entry is added to cart.');
        setOpen(true);
      }
    },
    [addToCart, updateCart]
  );

  const goNext = useCallback(async () => {
    await onAddToCartItem({
      name: 'Passport photo',
      description: 'Passport photo',
      product: ProductType.PassportPhoto,
      productId: entry.id,
      imageUrl: imageLink
    });
  }, [entry.id, imageLink, onAddToCartItem]);

  const goApplication = useCallback(async () => {
    setOpen(false);
    await router.push(PAGES.application.create);
  }, [router]);

  const goCart = useCallback(async () => {
    setOpen(false);
    await router.push(PAGES.cart);
  }, [router]);

  useEffect(() => {
    (async () => processPhoto())();
    return () => undefined;
  }, [processPhoto]);

  return (
    <>
      <div className="steps-page">
        <div className="container">
          <div className="steps-content">
            <div className="step-info">
              <div className="info-toolbar">
                <p>
                  <span className="icon-info" />
                </p>
                <button type="button">
                  <span className="icon-close" />
                </button>
              </div>
              <div className="info-text">
                <div className="info-wrap">
                  <div className="img">
                    <Image src="/images/steps/step-03-00.png" width={340} height={326} alt="" />
                  </div>
                  <div className="text">
                    <p>
                      {'Stand in front of a well lit white or light-colored wall'}
                      <br />
                      {'(compliance guaranteed)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-data">
              <div className="data-wrap">
                <ProcessStepPhoto
                  step={status === Status.success ? 4 : 3}
                  steps={PHOTO_STEP.steps}
                />

                <div className="title big">
                  <h1>
                    {status === Status.loading
                      ? 'Processing...'
                      : status === Status.failed
                      ? 'Correction required'
                      : 'Success'}
                  </h1>
                </div>
              </div>

              <div className="photo-requirements">
                <div
                  className={classNames('requirements-wrap', { failed: status === Status.failed })}>
                  <div className="img">
                    <span>
                      <img src={imageLink} alt="" />
                    </span>
                    <button
                      type="button"
                      className="main-btn no-border"
                      onClick={() => router.push(`${PAGES.photo.uploadPhoto}?entryId=${entry.id}`)}>
                      <i className="icon-camera" />
                      {'Change Photo'}
                    </button>
                  </div>
                  <div className="list">
                    <ul>
                      {status === Status.failed &&
                        failed.map((f, index) => (
                          <li key={`f_${index}`}>
                            <span className="icon" />
                            <span className="text">{f.message}</span>
                          </li>
                        ))}
                      {status === Status.success &&
                        passed.map((p, index) => (
                          <li key={`p_${index}`}>
                            <span className="icon" />
                            <span className="text">{camelCaseToSentence(p.test)}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="data-wrap">
                {status !== Status.success && (
                  <div className="btn-wrap single">
                    <div className="action-btn">
                      <button
                        type="button"
                        className="main-btn"
                        onClick={() =>
                          router.push(`${PAGES.photo.uploadPhoto}?entryId=${entry.id}`)
                        }>
                        {status === Status.loading ? (
                          <Bars height={25} fill={'#FFFFFF'} stroke={'transparent'} />
                        ) : (
                          <span>{'Try again'}</span>
                        )}
                      </button>
                    </div>
                    <div className="info-btn">
                      <button type="button" className="main-btn outline">
                        <i className="icon-info" />
                      </button>
                    </div>
                  </div>
                )}
                {status === Status.success && (
                  <div className="btn-wrap">
                    <div className="action-btn">
                      <button
                        type="button"
                        className="main-btn outline"
                        onClick={() =>
                          router.push(`${PAGES.photo.uploadPhoto}?entryId=${entry.id}`)
                        }>
                        <i className="icon-left" />
                        <span>{'Retake My Shot'}</span>
                      </button>
                      <button type="button" className="main-btn" onClick={goNext}>
                        {loading ? (
                          <Bars height={25} fill={'#FFFFFF'} stroke={'transparent'} />
                        ) : (
                          <>
                            {'Checkout'} <span className="icon-right" />
                          </>
                        )}
                      </button>
                    </div>
                    <div className="info-btn">
                      <button type="button" className="main-btn outline">
                        <i className="icon-info" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames('modal-wrap', { open })}>
        <div className="overlay" />
        <div className="modal-content">
          <div className="content-scroll">
            <div className="up-sale">
              <div className="text">
                <div className="title">
                  <h3>
                    {'Would you like to fill'}
                    <br /> {'a passport application'}
                    <br /> {'for just'} <span>{'9.97$'}</span>
                  </h3>
                </div>
                <div className="btn-wrap">
                  <button type="button" className="main-btn big" onClick={goApplication}>
                    {'Yes, thank you, I would like to save time'}
                  </button>
                  <button type="button" className="main-btn big outline" onClick={goCart}>
                    {'No, I will take care of it myself, and waste a lot of time'}
                  </button>
                </div>
              </div>
              <div className="img">
                <span>
                  <Image src="/images/up-sale.png" width={429} height={388} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProcessPhoto;
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'

import DocModal from '@/modules/home/docModal'
import { getStripe } from '@/utils'
import { PhotoProps } from 'slices/proceed_to_checkout'
import OneClickModal from './components/oneClickModal'
import { OneClickProvider } from './oneClickContext'
import TakePhoto from './components/takePhoto'
import ProcessPhoto from './components/processPhoto'
import CheckoutForm from './components/checkoutForm'
import CheckoutSuccess from './components/checkoutSuccess'

interface Props {
  open: boolean
  onClose: () => void
}

const OneClick: React.FC<Props & PhotoProps> = ({ open, onClose, page }) => (
  <OneClickProvider onClose={onClose}>
    {({
      modalType,
      country,
      document,
      form,
      entry,
      camera,
      modalClass,
      onCloseModal,
      onSelectCountry,
      onSelectDocument,
      onEntrySubmitted,
      onChangePhoto,
      onCheckout,
      onPayDone,
      onBack,
    }) => (
      <>
        <DocModal
          open={open && modalType === 'select-doc'}
          onClose={onCloseModal}
          country={country}
          onSelectCountry={onSelectCountry}
          document={document}
          onSelectDocument={onSelectDocument}
        />
        {!!document?.id && form && (
          <OneClickModal
            open={
              open &&
              ['take-photo', 'process-photo', 'checkout', 'completed'].includes(
                modalType,
              )
            }
            className={modalClass}
            onClose={() =>
              modalType === 'completed' ? onCloseModal() : undefined
            }>
            {modalType === 'take-photo' && (
              <TakePhoto
                documentId={document.id.toString()}
                form={form}
                entry={entry}
                camera={camera}
                onEntrySubmitted={onEntrySubmitted}
              />
            )}
            {modalType === 'process-photo' && entry && (
              <ProcessPhoto
                document={document}
                entry={entry}
                onChangePhoto={onChangePhoto}
                onCheckout={onCheckout}
                page={page}
              />
            )}
            {modalType === 'checkout' && (
              <Elements stripe={getStripe()}>
                <CheckoutForm
                  country={country}
                  onBack={onBack}
                  onPayDone={onPayDone}
                />
              </Elements>
            )}
            {modalType === 'completed' && (
              <CheckoutSuccess onClose={onCloseModal} />
            )}
          </OneClickModal>
        )}
      </>
    )}
  </OneClickProvider>
)

export default OneClick

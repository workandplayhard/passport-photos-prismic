import React from 'react'
import { CHECKOUT_STEPS } from '@/constants'
import ProcessStep, { IStep } from '@/components/elements/processStep'
import ApplicationToolbar from '@/components/elements/applicationToolbar'

interface CheckoutLayoutProps {
  step: number
  steps: IStep[]
  completeStep: number
  loading: boolean
  backLink: string | undefined
  onSubmit: () => void
  nextButtonText?: string
  disableSubmit?: boolean
  children: React.ReactNode
  slice?: any
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({
  step,
  completeStep,
  steps,
  loading,
  backLink,
  children,
  nextButtonText = 'Next',
  disableSubmit,
  onSubmit,
  slice,
}) => (
  <div className="cart-page">
    <div className="page-title">
      <div className="container">
        <div className="data-wrap">
          <h1>Checkout</h1>
          {/* <div className="m-only">*/}
          {/*  <p>{'New Passport Application'}</p>*/}
          {/* </div>*/}
        </div>
      </div>
    </div>
    <div className="floating-wrap">
      <div className="application-form">
        <div className="container">
          <div className="data-wrap horizontal">
            <ProcessStep
              title={CHECKOUT_STEPS.title}
              step={step}
              steps={steps}
              completeStep={completeStep}
              slice={slice}
            />
            {children}
          </div>
        </div>
      </div>
      <ApplicationToolbar
        backLink={backLink}
        loading={loading}
        nextButtonText={nextButtonText}
        disableSubmit={disableSubmit}
        onNext={onSubmit}
      />
    </div>
  </div>
)

export default CheckoutLayout

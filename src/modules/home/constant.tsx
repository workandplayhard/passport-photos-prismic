/* eslint-disable max-len */
import { IFAQ } from './types'
import { ExtraPathMap } from '@/constants'
import { IProcessDatum } from '@/types'

export const ProcessData: Record<string, IProcessDatum[]> = {
  default: [
    {
      label: 'Take your photo',
      description: <p>Take or Upload a Photo With Your Mobile or PC</p>,
    },
    {
      label: 'AI Software Photo Scan',
      description: (
        <p>
          Our Biometric Software Will Scan and Verify Your Photo for Government
          Compliance
        </p>
      ),
    },
    {
      label: `Photo Compliance`,
      description: (
        <p>
          Our Technology Map Your Facial Features and Then Reposition, Size,
          Crop and Clean Up the Background of Your Shot
        </p>
      ),
    },
    {
      label: `Delivery`,
      description: (
        <p>
          We’ll Then Print and Ship Them to You or You May Print Them at Home
        </p>
      ),
    },
  ],
  [ExtraPathMap.CanadianPassportAtHome]: [
    {
      label: 'Take your photo',
      description: <p>Take or Upload a Photo With Your Cell Phone or PC</p>,
    },
    {
      label: 'AI Software Photo Scan and Biometric Verification',
      description: (
        <p>
          Our Biometric Software Will Scan and Verify Your Photo for Government
          Compliance
        </p>
      ),
    },
    {
      label: `We will print and stamp your photo, as required`,
      description: (
        <p>
          We will place the required address & date stamp on the back of your
          photos.
        </p>
      ),
    },
    {
      label: `Your Guarantor Signature & Compliance`,
      description: (
        <p>You will then have your guarantor sign the back of the photo</p>
      ),
    },
  ],
  [ExtraPathMap.CanadianPassportPhoto]: [
    {
      label: 'Take your photo',
      description: <p>Take or Upload a Photo With Your Cell Phone or PC</p>,
    },
    {
      label: 'AI Software Photo Scan and Biometric Verification',
      description: (
        <p>
          Our Biometric Software Will Scan and Verify Your Photo for Government
          Compliance
        </p>
      ),
    },
    {
      label: `We will print and stamp your photo, as required`,
      description: (
        <p>
          We will place the required address & date stamp on the back of your
          photos.
        </p>
      ),
    },
    {
      label: `Your Guarantor Signature & Compliance`,
      description: <p>You will then have your guarantor</p>,
    },
  ],
}

const faq2: IFAQ = {
  key: 'faq2',
  question: 'What are your delivery options? (Home & Digital Delivery)',
  answer: (
    <p>
      Home Delivery:
      <br />
      We offer 2 shipping options with our concierge service:
      <br />
      - Expedited 1-2 business days
      <br />
      - Standard 3-5 business days
      <br />
      <br />
      Digital / Online Delivery:
      <br />
      Photos arrive as a .jpeg for you to print on your own. You may also choose
      to have it sent to a retail store with passport picture printing
      available. (CVS, Walgreens, etc.)
    </p>
  ),
}

const faq3 = {
  key: 'faq3',
  question: 'What is your concierge service?',
  answer: (
    <p>
      - We will print and ship your documents
      <br />
      - On required glossy photo paper.
      <br />
      - 2 to 6 Photos Per Person
      <br />
      - Processing Instruction Guide
      <br />
    </p>
  ),
}

const faq4 = {
  key: 'faq4',
  question: 'How long does it take to process my order?',
  answer: (
    <p>
      Your “Digital Photos” in a PNG & JPEG files will be emailed to your within
      minutes. When choosing the “Printed Version” where we will print and ship
      your photos to you with through our concierge service - the processing the
      order usually takes place on the same day, if you place your order by 4
      PM. If not, do not worry. We will process your order within 24 hours,
      during normal business hours and days (Monday - Friday).
      <br />
      <br />
      Standard shipping is 3-5 business days
      <br />
      Expedited shipping is 1-2 business days
      <br />
    </p>
  ),
}
const commonFaqs: IFAQ[] = [faq2, faq3, faq4]

// eslint-disable-next-line no-unused-vars
/*
const faq1: IFAQ = {
  key: 'faq1',
  question: 'How much do you charge for the photos?',
  answer: (
    <p>
      2 photos cost $18.50
      <br />
      4 photos cost $24.50
      <br />
      6 photos cost $28.50
      <br />
      <br />
      The digital version of the photos comes in a JPEG format that your can
      download for your device to print at home or at a local drugstore.
    </p>
  ),
}
*/

const faq5: IFAQ = {
  key: 'faq5',
  question: 'How do I print photos at my local retailer (CVS, Walgreens, etc)?',
  answer: (
    <p>
      <b>Step 1:</b> Open the confirmation email on your PC or Mobile.
      <br />
      <b>Step 2:</b> When you use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “Save” your
      photos to your “photo library”. If you use your PC, “Right Click” on the
      photo link (“Download Your Photos For Print”) placed under your “Order
      items” section and then choose “save link as & save it as a .jpeg” image.
      <br />
      <b>Step 3:</b> Before going to the store, you will likely need to upload
      your digital photo file to the store&apos;s website. Go online to the
      links below, if you chose one of these options.
      <br />
      <a
        href="https://www.cvs.com/photo/prints"
        target="_blank"
        rel="noreferrer">
        https://www.cvs.com/photo/prints
      </a>{' '}
      (or){' '}
      <a
        href="https://photo.walgreens.com/store/prints"
        target="_blank"
        rel="noreferrer">
        https://photo.walgreens.com/store/prints
      </a>
      <br />
      <b>Step4:</b> Choose the “Prints & Enlargements” option.
      <br />
      <b>Step5:</b> Upload your saved photos to the designated website.
      <br />
      <b>Step6:</b> Make sure to choose the 4”X6” glossy photo paper.
      <br />
      <b>Step7:</b> Pay online. The photos will be waiting for you at the store.
      <br />
      <b>Step8:</b> Pick up your photos and enjoy your future travels.
    </p>
  ),
}

const faq6: IFAQ = {
  key: 'faq6',
  question: 'How do I upload my digital photo to Gov/Official websites?',
  answer: (
    <p>
      <b>Step1:</b> Open the confirmation email on your PC or Mobile.
      <br />
      <b>Step2:</b> “Download Your Single Digital Photo” and then click “save”
      your photos to your “photo library”. If you use your PC, press “Right
      Click” on the photo link (“Download Your Single Digital Photo”) placed
      under your “Order items” section, then choose “save link as & save it as a
      .jpeg image file
      <br />
      <b>Step3:</b> You are all set - your can now upload your digital (single)
      photo to any official website that has the option to do so.
    </p>
  ),
}

const faq7: IFAQ = {
  key: 'faq7',
  question: 'How do I print my photo at home using my home printer?',
  answer: (
    <p>
      <b>Step1:</b> Be sure to have 4”X6” glossy photo paper.
      <br />
      <b>Step2:</b> Open the confirmation email on your PC or Mobile.
      <br />
      <b>Step3:</b> When your use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “save” your
      photos to your “photos library”. If you use your PC, press “Right Click”
      on the photo link (“Download Your Photos For Print”) placed under your
      “Order items” section, then choose “save link as” & save it as a .jpeg.
      <br />
      <b>Step4:</b> Press “Ctrl+P” or right click “Print” and your print
      settings will appear. Make sure to pick 4X6” size paper, with a minimum
      600 dpi for quality. Also, make sure that your remove all border
      spaces/gaps, and print.
    </p>
  ),
}

const faq5_print: IFAQ = {
  key: 'faq5',
  question: 'How do I print my photo at home using my home printer?',
  answer: (
    <p>
      <b>Step 1:</b> Be sure to have 4”X6” glossy photo paper.
      <br />
      <b>Step 2:</b> Open the confirmation email on your PC or Mobile.
      <br />
      <b>Step 3:</b> When you use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “save” your
      photos to your “photos library”. If you use your PC, press “Right Click”
      on the photo link (“Download Your Photos For Print”) placed under your
      “Order items” section, then choose “save link as” & save it as a .jpeg.
      <br />
      <b>Step4:</b> Press “Ctrl+P” or right click “Print” and your print
      settings will appear. Make sure to pick 4”X6” size paper, with a minimum
      600 dpi for quality. Also, make sure that your remove all border
      spaces/gaps, and print.
    </p>
  ),
}

const faq6_print: IFAQ = {
  key: 'faq6',
  question: 'How do I print photos at my local retailer (CVS, Walgreens, etc)?',
  answer: (
    <p>
      <b>Step1:</b> Open the confirmation email on your PC or Mobile.
      <br />
      <b>Step2:</b> When you use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “Save” your
      photos to your “photo library”. If you use your PC, “Right Click” on the
      photo link (“Download Your Photos For Print”) placed under your “Order
      items” section and then choose “save link as & save it as a .jpeg”image.
      <br />
      <b>Step3:</b> Before going to the store, you will likely need to upload
      your digital photo file to the store&apos;s website. Go online to the
      links below, if your chose one of these options.
      <br />
      <a
        href="https://www.cvs.com/photo/prints"
        target="_blank"
        rel="noreferrer">
        https://www.cvs.com/photo/prints
      </a>{' '}
      (or){' '}
      <a
        href="https://photo.walgreens.com/store/prints"
        target="_blank"
        rel="noreferrer">
        https://photo.walgreens.com/store/prints
      </a>
      <br />
      <b>Step4:</b> Choose the “Prints & Enlargements” option.
      <br />
      <b>Step5:</b> Upload your saved photos to the designated website.
      <br />
      <b>Step6:</b> Make sure to choose the 4”X6” glossy photo paper.
      <br />
      <b>Step7:</b> Pay online. The photos will be waiting for your at the
      store.
      <br />
      <b>Step8:</b> Pick up your photos and enjoy your future travels.
    </p>
  ),
}

const faq7_print: IFAQ = {
  key: 'faq7',
  question: 'How do I upload my digital photo to Gov/Official websites?',
  answer: (
    <p>
      <b>Step1:</b> Open the confirmation email on your PC or Mobile.
      <br />
      <b>Step2:</b> Download Your Single Digital Photo” and then click “save”
      your photos to your “photo library”. If your use your PC, press “Right
      Click” on the photo link (“Download Your Single Digital Photo”) placed
      under your “Order items” section, then choose “save link as & save it as a
      .jpeg image file
      <br />
      <b>Step3:</b> our are all set - your can now upload your digital (single)
      photo to any official website that has the option to do so.
    </p>
  ),
}

const faqUk1: IFAQ = {
  key: 'faq1',
  question: 'What is your passport photo print and ship service?',
  answer: (
    <p>
      - We will print and ship to you
      <br />
      - On required glossy photo paper
      <br />
      - 2 to 6 Photos Per Person
      <br />- Processing Instruction Guide
    </p>
  ),
}

const faqUk2: IFAQ = {
  key: 'faq2',
  question:
    'What are your passport photo delivery options? (Home & Digital Delivery)',
  answer: (
    <p>
      <b>Home Delivery:</b>
      <br />
      - Standard Shipping (Royal Mail): 2-3 working days, including Saturdays
      <br />- Priority Service Shipping (Royal Mail): The next working day –
      including Saturdays
      <br />
      <br />
      <b>Digital / Online Delivery:</b>
      <br />
      Photos arrive as a .jpeg for you to print or present with you digital
      application. You may also choose to have it sent to a local retail store
      (Tesco, ASDA, Sainsbury’s, Boots, etc.) where passport photo printing is
      available.
    </p>
  ),
}

const faqUk2_online: IFAQ = {
  key: 'faq2',
  question: 'What are your delivery options? (Home & Digital Delivery)',
  answer: (
    <p>
      <b>Home Delivery:</b>
      <br />
      We offer 2 shipping options with our Print & Ship service:
      <br />
      - Expedited 1-2 business days
      <br />- Standard 3-5 business days
      <br />
      <br />
      <b>Digital / Online Delivery:</b>
      <br />
      Photos arrive as a .jpeg for your to print on your own. your may also
      choose to have it sent to a retail store with passport picture printing
      available. (CVS, Walgreens, etc.)
    </p>
  ),
}

const faqUk2_own: IFAQ = faqUk2_online
const faqUk2_phone: IFAQ = faqUk2_online
const faqUk2_print: IFAQ = faqUk2_online
const faqUk2_app: IFAQ = faqUk2_online

const faqUk3: IFAQ = {
  key: 'faq3',
  question:
    'How do I print my passport photos at a local printer (Tesco, ASDA, Etc.)?',
  answer: (
    <p>
      <b>Printing at Tesco for only £0.70:</b>
      <br />
      <b>Step 1: </b>Open the confirmation email on your PC/Mobile.
      <br />
      <b>Step 2: </b>When you use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “save” your
      photos to your “photos library”. If you use your PC, press “Right Click”
      on the photo link (“Download Your Photos For Print”) placed under your
      “Order items” section (above) {'->'} and then choose “save link as” {'->'}{' '}
      save it as a “.jpg” image file.
      <br />
      <b>Step 3: </b>Before going to the store, you will need to upload your
      digital photo file to the store&apos;s website. Go online to this link:{' '}
      <a
        href="https://www.tescophoto.com/photo-printing.html"
        target="_blank"
        rel="noreferrer">
        https://www.tescophoto.com/photo-printing.html
      </a>
      <br />
      <b>Step 4: </b>Choose the “Order Now” option.
      <br />
      <b>Step 5: </b>Make sure to choose the “6” X 4” Print” paper size option.
      Click on “Choose Your Photos”
      <br />
      <b>Step 6: </b>Uploading your saved photos: Choose the “Upload from files”
      option and upload your saved photo {'->'} Click “Continue”
      <br />
      <b>Step 7: </b>Proceed to Checkout and Pay online. The photos will be
      waiting for you at the store.
      <br />
      <b>Step 8: </b>Pick up your photos and enjoy your future travels.
      <br />
      <br />
      <b>Printing at ASDA for only £0.11:</b>
      <br />
      <b>Step 1: </b>Open the confirmation email on your PC/Mobile.
      <br />
      <b>Step 2: </b>When you use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “save” your
      photos to your “photos library”. If you use your PC, press “Right Click”
      on the photo link (“Download Your Photos For Print”) placed under your
      “Order items” section (above) {'->'} and then choose “save link as” {'->'}{' '}
      save it as a “.jpg” image file.
      <br />
      <b>Step 3: </b>Before going to the store, you will need to upload your
      digital photo file to the store&apos;s website. Go online to this link:{' '}
      <a href="https://www.asda-photo.co.uk/" target="_blank" rel="noreferrer">
        https://www.asda-photo.co.uk/
      </a>
      <br />
      <b>Step 4: </b>Choose the “Order Prints” option on the top right section
      of the page.
      <br />
      <b>Step 5: </b>Click on “Upload Photos” {'->'} Make sure to choose the “6”
      X 4” Print” paper size option {'->'} Click “Add” {'->'} Click on “Add to
      Basket”
      <br />
      <b>Step 6: </b>Proceed to Checkout and Pay online. The photos will be
      waiting for you at the store.
      <br />
      <b>Step 7: </b>Pick up your photos and enjoy your future travels.
      <br />
    </p>
  ),
}

const faqUk4: IFAQ = {
  key: 'faq4',
  question: 'How do I print my photo at home using my home printer?',
  answer: (
    <p>
      First, please be sure to have 10 x 15 cm glossy photo paper at home.
      <br />
      <br />
      <b>Step 1: </b>Open the confirmation email on your PC.
      <br />
      <b>Step 2: </b>When you use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “save” your
      photos to your “photos library”. If you use your PC, press “Right Click”
      on the photo link (“Download Your Photos For Print”) placed under your
      “Order items” section (above) {'->'} and then choose “save link as” {'->'}{' '}
      save it as a “.jpg” image file.
      <br />
      <b>Step 3: </b>Press “Ctrl+P” or right click “Print” and your print
      settings will appear. Make sure to pick 4”X6” size paper, with a minimum
      600 dpi for quality. Also, make sure that you remove all border
      spaces/gaps, and print!
    </p>
  ),
}

const faqUk5: IFAQ = {
  key: 'faq5',
  question:
    'How do I upload my digital photo to renew my passport (Passport Renewal Only)?',
  answer: (
    <p>
      <b>Step 1: </b>Open the confirmation email on your PC.
      <br />
      <b>Step 2: </b>When you use your mobile device, please make sure to press
      on the link (“Download Your Single Digital Photo”) and then click “save”
      your photos to your “photos library”. If you use your PC, press “Right
      Click” on the photo link (“Download Your Single Digital Photo”) placed
      under your “Order items” section (above) {'->'} and then choose “save link
      as” {'->'} save it as a “.jpg” image file.
      <br />
      <b>Step 3: </b>You may now upload your digital (single) photo at the{' '}
      <a
        href="https://www.passport.service.gov.uk/filter/overseas"
        target="_blank"
        rel="noreferrer">
        Passport Service Gov Link
      </a>{' '}
      for renewal or print it for your paper application.
      <br />
      <br />* Please note: This option is not available for new passport
      applications.
    </p>
  ),
}

const faqUk6: IFAQ = {
  key: 'faq6',
  question: 'How to take your digital passport photo?',
  answer: (
    <p>
      <b>Use a plain light-coloured background</b>
      <br />
      - No texture or patterns
      <br />
      - No objects behind you
      <br />
      <br />
      <b>Even lighting and no shadows</b>
      <br />
      - Balanced light - no shadows on your face or behind you
      <br />
      - It’s best to use natural sunlight, for example facing a window
      <br />
      <br />
      <b>Stand in the right position</b>
      <br />
      - Stand 0.5 metres (1.5 feet) away from your background (this reduces
      shadow)
      <br />
      - The person taking the photo should stand 1.5 metres (5 feet) from you
      <br />
      - Include your head, shoulders and upper body in the photo
      <br />
      - Don’t crop your photo - it will be done for you
      <br />
      <br />
      <b>Plain expression and face in full view</b>
      <br />
      - Face front on to the camera
      <br />
      - Don’t smile or frown - eyes open and mouth closed
      <br />
      - Your photo should be a good likeness and taken in the last month
      <br />
      <br />
      <b>No headwear</b>
      <br />
      - Unless it’s for religious or medical reasons
      <br />
      <br />
      <b>Eyes fully visible</b>
      <br />
      - Hair away from your face and eyes
      <br />
      - Take your glasses off (if you can)
      <br />
      <br />
      <b>If you need to keep glasses on</b>
      <br />
      - Your eyes must be visible without any glare or reflections
      <br />- No sunglasses or tinted glasses
    </p>
  ),
}

const faqUk7_online: IFAQ = {
  key: 'faq7',
  question: 'How long does it take to process my order?',
  answer: (
    <p>
      Your “Digital Photos” in a PNG & JPEG files will be emailed to your within
      minutes. When choosing the “Printed Version” where we will print and ship
      your photos to you with through our concierge service - the processing the
      order usually takes place on the same day, if you place your order by 4
      PM. If not, do not worry. We will process your order within 24 hours,
      during normal business hours and days (Monday - Friday).
      <br />
      <br />
      Standard shipping is 3-5 business days
      <br />
      Expedited shipping is 1-2 business days
      <br />
    </p>
  ),
}

const faq1_cvs: IFAQ = {
  key: 'faq1',
  question: 'How do I take my digital photo',
  answer: (
    <p>
      <b>Use a plain light-colored background</b>
      <br />
      - No background textures or patters
      <br />
      - No objects behind you
      <br />
      - Our software will create an even background
      <br />
      <br />
      <b>Even lighting and no shadows</b>
      <br />
      - Use balanced lighting and avoid shadows on your face or within your
      surrounding
      <br />
      - It&apos;s best to use natural sunlight. For examble, facing a window
      <br />
      <br />
      <b>Stand in the right position</b>
      <br />
      - Stand 1.5 feet (0.5 meters) away from the background (this reduces
      shadows)
      <br />
      - Align yourself with the overlay
      <br />
      - No need to crop your photo, or software will line you up perfectly
      <br />
      <br />
      <b>Plain expression and face in full view</b>
      <br />
      - When possible, use the front facing camera. You may need to ask a friend
      to help.
      <br />
      - Don&apos;t smile or frown, keep your eyes open and look into the camera
      <br />
      <br />
      <b>No Headwear</b>
      <br />
      - Unless it&apos;s for religious or medical reasons
      <br />
      <br />
      <b>Eyes fully visible</b>
      <br />
      - Be sure to have your hair pulled back away from the full view of your
      face
      <br />- Glasses are not permitted
    </p>
  ),
}

const faq1_walgreens: IFAQ = faq1_cvs

const faq3_cvs: IFAQ = {
  key: 'faq3',
  question: 'What is your Print & Ship service?',
  answer: (
    <p>
      - We will print and ship your documents
      <br />
      - On required glossy photo paper.
      <br />
      - 2 to 6 Photos Per Person
      <br />
      - Processing Instruction Guide
      <br />
      <br />
      *Additional Fee Applies
    </p>
  ),
}

const faq3_walgreens: IFAQ = faq3_cvs

const faqUk7_own: IFAQ = faqUk7_online
const faqUk7_phone: IFAQ = faqUk7_online
const faqUk7_print: IFAQ = faqUk7_online
const faqUk7_app: IFAQ = faqUk7_online

const faq1_near_me: IFAQ = faq1_cvs
const faq2_near_me: IFAQ = {
  key: 'faq2',
  question:
    'If I want you to print and ship my photos to me, what are your delivery options? (Home & Digital Delivery)',
  answer: (
    <p>
      Home Delivery:
      <br />
      We offer 2 shipping options with our Print & Ship service:
      <br />
      - Expedited 1-2 business days
      <br />
      - Standard 3-5 business days
      <br />
      <br />
      Digital / Online Delivery:
      <br />
      Photos arrive as a .jpeg for you to print on your own. You may also choose
      to have it sent to a retail store with passport picture printing
      available. (CVS, Walgreens, etc.)
    </p>
  ),
}
const faq3_near_me: IFAQ = faq3_cvs
const faq7_near_me: IFAQ = {
  key: 'faq7',
  question: 'How do I print my photo at home using my own printer?',
  answer: (
    <p>
      <b>Step 1: </b>Be sure to have 4”X6” glossy photo paper.
      <br />
      <b>Step 2: </b>Open the confirmation email on your PC or Mobile.
      <br />
      <b>Step 3: </b>When you use your mobile device, please make sure to press
      on the link (“Download Your Photos For Print”) and then click “save” your
      photos to your “photos library”. If your use your PC, press “Right Click”
      on the photo link (“Download Your Photos For Print”) placed under your
      “Order items” section, then choose “save link as” & save it as a .jpeg.
      <br />
      <b>Step 4: </b>Prest “Ctrl+P” or right click “Print” and your print
      settings will appear. Make sure to pick 4”X6” size paper, with a minimum
      600 dpi for quality. Also, make sure that your remove all border
      spaces/gaps, and print.
    </p>
  ),
}

const faqCa1: IFAQ = {
  key: 'faq1',
  question: 'What are your delivery options? (Home & DIgital Delivery)',
  answer: (
    <p>
      <b>Home Delivery:</b> We offer 2 shipping options with our Print & Ship
      service, using Canada Post:
      <br />
      1. Regular Parcel Shipping Usually 1-6 business days
      <br />
      2. Xpresspost Shipping Next Business Day to 2 business days
      <br />
      <br />
      <b>Digital/Email Delivery:</b> With every order our customers will also
      receive their photos on 2 digital JPG files: one digital file will include
      the 2/4/6 photos, and another digital file that includes 1 digital photo
      (usually used for online photo submissions (Visas, etc))
    </p>
  ),
}

const faqCa2: IFAQ = {
  key: 'faq2',
  question:
    'Are you providing a commercial photography studio and do you stamp the back of the passport photo as required?',
  answer: (
    <p>
      Our commercial photography studio will print your photo on a quality
      glossy photo paper, stamp the back of your photo and and state the
      following as required:
      <br />
      - The date the photo was taken
      <br />- The name and complete address of our photo studio location in
      Canada
    </p>
  ),
}

const faqCa3: IFAQ = {
  key: 'faq3',
  question: 'Do I need a guarantor to sign the back of my photos?',
  answer: (
    <p>
      If you&apos;re renewing an adult passport, the good news is that you do
      not need a guarantor to sign any of your photos.
      <br />
      <br />
      For applying to a New Passport (Adult) or for applying to a Child’s
      Passport - a guarantor is required to sign your photos.
      <br />
      The guarantor must do so by doing the following:
      <br />
      - Clearly write &quot;I certify this to be a true likeness of
      (applicant&apos;s or child’s name)&quot; for an application
      <br />- Sign the back of the photo
    </p>
  ),
}

const faqCa4: IFAQ = {
  key: 'faq4',
  question: "What are the guarantor's requirements?",
  answer: (
    <p>
      Your guarantor can be anyone, including a family member or member of your
      household
      <br />
      <br />
      You don&apos;t need a guarantor if you&apos;re renewing your passport. You
      only need a guarantor if you&apos;re applying for a passport for the first
      time or you aren&apos;t eligible to renew your passport.
      <br />
      <br />
      Your Guarantor must:
      <br />
      - have known you for at least 2 years
      <br />
      - If the guarantor is for your child&apos;s passport, they must have known
      you for at least 2 years and must know of your child.
      <br />
      - be available if we need to contact them
      <br />
      - be a Canadian citizen 18 years of age or older
      <br />
      - provide the information needed that’s in their passport
      <br />- have been 16 years of age or older when they applied for their own
      passport
      <br />
      - hold a 5-year or 10-year Canadian passport that, on the day you submit
      your application, is expired for no more than 1 year, or valid
      <br />- If you&apos;re the parent or legal guardian that is applying on
      behalf of a child, you cannot sign as guarantor on the child’s
      application. However, the other parent or legal guardian (not submitting
      the application) can sign as long as they meet the requirements
    </p>
  ),
}

const faqCa5: IFAQ = {
  key: 'faq5',
  question:
    "If I can't find a guarantor, what can I do to get my photo approved?",
  answer: (
    <p>
      Complete the Statutory Declaration in Lieu of Guarantor form.
      <br />
      <br />
      Find someone who can administer an oath to swear to and sign the form:
      <br />
      - This person doesn&apos;t need to know you personally
      <br />
      - If you&apos;re in Canada, this can be a: Notary public, justice of the
      peace, or commissioner for oaths.
      <br />- If you&apos;re outside Canada, this can be a: Canadian or British
      diplomatic or consular representative, or qualified local official, such
      as a civil servant or member of Parliament
    </p>
  ),
}

const faqCa6: IFAQ = {
  key: 'faq6',
  question: 'Statutory Declaration in Lieu of Guarantor Form',
  answer: (
    <p>
      The Statutory Declaration in Lieu of a Guarantor form is not available
      online.
      <br />
      <br />
      To get the form:
      <br />
      - In Canada: Go to the nearest passport service location
      <br />
      - In the United States: Go to the nearest Canadian embassy or consulate
      <br />- Outside Canada and the US: Contact the nearest Canadian embassy or
      consulate
    </p>
  ),
}

export const HomepageContent: Record<
  string,
  { title: string; description: any; seo?: string[] }
> = {
  default: {
    title: 'Take Your Passport and Visa Photos Online',
    description: 'Get your perfect biometric photo (compliance guaranteed)',
  },
  [ExtraPathMap.OrderPassportPhotosOnline]: {
    title: 'Order Your Passport Photos Online With Our Simple Digital Tool',
    description:
      'Use your cell phone and order your passport photos online. We’ve made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.',
  },
  [`${[ExtraPathMap.OrderPassportPhotosOnline]}-gb`]: {
    title: 'Order Your Passport Photos Online With Our Simple Digital Tool',
    description:
      "Use your cell phone and order your passport photos online. We've made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.",
  },
  [ExtraPathMap.TakeYourOwnPassportPhoto]: {
    title: 'Yes! You Can Take Your Own Passport Photo.',
    description:
      'Take your own passport photo with your cell phone. We’ve made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.',
  },
  [`${ExtraPathMap.TakeYourOwnPassportPhoto}-gb`]: {
    title: 'Yes! You Can Take Your Own Passport Photo With Your Phone',
    description:
      "Take your own passport photo with your cell phone. We've made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.",
  },
  [ExtraPathMap.TakeYourPassportPhotoWithYourPhone]: {
    title: 'Go Ahead, Take Your Passport Photo With Your Phone',
    description:
      'Take your passport photo with your cell phone, we’ve made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.',
  },
  [`${ExtraPathMap.TakeYourPassportPhotoWithYourPhone}-gb`]: {
    title: 'Go Ahead, Take Your Passport Photo With Your Phone',
    description:
      "Take your passport photo with your cell phone, We've made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.",
  },
  [ExtraPathMap.TakePassportPhotosAtHome]: {
    title: 'Take Your Passport Photo at Home, With Our Simple to Tool',
    description:
      'From home or virtually anywhere, take your passport photo with your cell phone or desktop. We’ve made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.',
  },
  [`${ExtraPathMap.TakePassportPhotosAtHome}-gb`]: {
    title: 'Go Ahead, Take Your Passport Photo With Your Phone',
    description: (
      <>
        <div className="uk-landing-page-desc">
          <div />
          Take your Passport Photo with your cellphone
        </div>
        <div className="uk-landing-page-desc">
          <div />
          Our software verifies government compliance
        </div>
        <div className="uk-landing-page-desc">
          <div />
          Ready for your digital or paper application
        </div>
        <div className="uk-landing-page-desc">
          <div />
          We will print and ship them to you or print them at home
        </div>
      </>
    ),
  },
  [ExtraPathMap.PrintPassportPhotosAtHome]: {
    title: 'Print Your Passport Photo at Home, With Our Simple Tool',
    description:
      'Use your cell phone and print your passport photo at home. We’ve made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.',
  },
  [`${ExtraPathMap.PrintPassportPhotosAtHome}-gb`]: {
    title: 'Print Your Passport Photo at Home, With Our Simple Tool',
    description:
      "Use your cell phone and print your passport photo at home. We've made it easy. Our software makes sure it’s verified and you’ll receive it ready for your application.",
  },
  [ExtraPathMap.PassportPhotoApp]: {
    title: "You Don't Need an App For A Photo That'll Last You 10 Years",
    description:
      "Our web based passport photo verification tool is all you'll need to get the shot you want.  From home or virtually anywhere, take your photo with your cell phone.",
  },
  [`${ExtraPathMap.PassportPhotoApp}-gb`]: {
    title: "You Don't Need an App For A Photo That'll Last You 10 Years",
    description:
      "Our web based passport photo verification tool is all you'll need to get the shot you want.  From home or virtually anywhere, take your photo with your cell phone. ",
  },
  [ExtraPathMap.PrintMyPassportPhotoAtCvs]: {
    title: 'Take Your Own Shot and Have it Printed at CVS',
    description:
      "Take the perfect passport photo. When you're satisfied, send it over to CVS for printing. We've made it easy. Our software makes sure it’s verified and you'll receive it ready for your application.",
    seo: [
      'print my passport photo at cvs',
      'order passport photos at cvs',
      'best passport photo app to send to cvs',
      'cvs passport photos',
      'order passport photos online from cvs',
    ],
  },
  [ExtraPathMap.PrintMyPassportPhotoAtWalgreens]: {
    title: 'Take Your Own Shot and Have it Printed at Walgreens',
    description:
      "Take the perfect passport photo. When you're satisfied,  send it over to Walgreens for printing. We've made it easy. Our software makes sure it’s verified and you'll receive it ready for your application.",
    seo: [
      'print my passport photo at walgreens ',
      'order passport photos at walgreens ',
      'best passport photo app to send to walgreens',
      'walgreens passport photos',
      'order passport photos online from walgreens',
    ],
  },
  [ExtraPathMap.PassportPhotosNearMe]: {
    title:
      "Where Do I Get a Passport Photo Near Me? Take a Selfie and You're Almost Done",
    description: (
      <>
        - Take the perfect passport photo with guaranteed US Department of State
        acceptance.
        <br />
        - You don&apos;t need to go anywhere to get the perfect passport photo.
        <br />- You&apos;ll be able to download the file and send it anywhere to
        be printed or we can print and ship it directly to you.
      </>
    ),
    seo: [
      'passport photos near me',
      'passport picture near me',
      'digital passport photos near me',
    ],
  },
  [ExtraPathMap.CanadianPassportAtHome]: {
    title: 'Take Your Passport Photo at Home, With Your Cell Phone',
    description:
      "From home or virtually anywhere, take your passport photo with your cell phone. We've made it easy. Our software makes sure it’s verified and your’ll receive it ready for your application.",
    seo: [
      'passport photos near me',
      'passport picture near me',
      'digital passport photos near me',
    ],
  },
  [ExtraPathMap.CanadianPassportPhoto]: {
    title: 'Take Your Passport Photo at Home, With Your Cell Phone',
    description: (
      <>
        From home or virtually anywhere, take your passport photo with your cell
        phone. <br />
        We&apos;ve made it easy. <br />
        Our software makes sure it’s verified and your’ll receive it ready for
        your application.
      </>
    ),
    seo: [
      'passport photos near me',
      'passport picture near me',
      'digital passport photos near me',
    ],
  },
}

export const Faqs: Record<string, IFAQ[]> = {
  default: [...commonFaqs, faq5, faq6, faq7],
  [ExtraPathMap.OrderPassportPhotosOnline]: [...commonFaqs, faq5, faq6, faq7],
  [`${ExtraPathMap.OrderPassportPhotosOnline}-gb`]: [
    faqUk1,
    faqUk2_online,
    faqUk3,
    faqUk4,
    faqUk5,
    faq6,
    faqUk7_online,
  ],
  [ExtraPathMap.TakeYourOwnPassportPhoto]: [...commonFaqs, faq5, faq6, faq7],
  [`${ExtraPathMap.TakeYourOwnPassportPhoto}-gb`]: [
    faqUk1,
    faqUk2_own,
    faqUk3,
    faqUk4,
    faqUk5,
    faq6,
    faqUk7_own,
  ],
  [ExtraPathMap.TakeYourPassportPhotoWithYourPhone]: [
    ...commonFaqs,
    faq5,
    faq6,
    faq7,
  ],
  [`${ExtraPathMap.TakeYourPassportPhotoWithYourPhone}-gb`]: [
    faqUk1,
    faqUk2_phone,
    faqUk3,
    faqUk4,
    faqUk5,
    faq6,
    faqUk7_phone,
  ],
  [ExtraPathMap.TakePassportPhotosAtHome]: [...commonFaqs, faq5, faq6, faq7],
  [`${ExtraPathMap.TakePassportPhotosAtHome}-gb`]: [
    faqUk1,
    faqUk2,
    faqUk3,
    faqUk4,
    faqUk5,
    faqUk6,
  ],
  [ExtraPathMap.PrintPassportPhotosAtHome]: [
    ...commonFaqs,
    faq5_print,
    faq6_print,
    faq7_print,
  ],
  [`${ExtraPathMap.PrintPassportPhotosAtHome}-gb`]: [
    faqUk1,
    faqUk2_print,
    faqUk3,
    faqUk4,
    faqUk5,
    faq6,
    faqUk7_print,
  ],
  [ExtraPathMap.PassportPhotoApp]: [
    ...commonFaqs,
    faq5_print,
    faq6_print,
    faq7_print,
  ],
  [`${ExtraPathMap.PassportPhotoApp}-gb`]: [
    faqUk1,
    faqUk2_app,
    faqUk3,
    faqUk4,
    faqUk5,
    faq6,
    faqUk7_app,
  ],
  [ExtraPathMap.PrintMyPassportPhotoAtCvs]: [
    faq1_cvs,
    faq2,
    faq3_cvs,
    faq4,
    faq5,
    faq6,
    faq7,
  ],
  [ExtraPathMap.PrintMyPassportPhotoAtWalgreens]: [
    faq1_walgreens,
    faq2,
    faq3_walgreens,
    faq4,
    faq5,
    faq6,
    faq7,
  ],
  [ExtraPathMap.PassportPhotosNearMe]: [
    faq1_near_me,
    faq2_near_me,
    faq3_near_me,
    faq4,
    faq5,
    faq6,
    faq7_near_me,
  ],
  [ExtraPathMap.CanadianPassportAtHome]: [
    faqCa1,
    faqCa2,
    faqCa3,
    faqCa4,
    faqCa5,
    faqCa6,
  ],
  [ExtraPathMap.CanadianPassportPhoto]: [
    faqCa1,
    faqCa2,
    faqCa3,
    faqCa4,
    faqCa5,
    faqCa6,
  ],
}

import React, { useContext } from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { NextSeo } from 'next-seo'
import { ApolloQueryResult } from '@apollo/client'
import { createClient } from 'prismicio'

import PhotoLayout from '@/components/layout/photoLayout'
import TakePhoto from '@/modules/photo/takePhoto'

import {
  Entry,
  EntryDocument,
  EntryQuery,
  Form,
  FormsDocument,
  FormsQuery,
} from '@/apollo'
import { initializeApollo } from '@/apollo/client'
import { PAGES, PHOTO_FORM, SEO } from '@/constants'
import { PrismicDocument } from '@prismicio/types'
import { PageTypeHashes, PageUIDHashes } from '@/constants/PageUIDHashes'
import { PrismicContext } from '@/contexts'
import { withLocale } from '@/hocs'

export interface TakePhotoPageProps {
  form: Form
  entry: Entry | null
  documentId: string
  page: PrismicDocument<Record<string, any>, string, string>
  articlePage: PrismicDocument<Record<string, any>, string, string>
  locale?: string
}

const TakePhotoPage: NextPage<TakePhotoPageProps> = ({
  form,
  entry,
  documentId,
  page,
  articlePage,
}) => {
  const { setPageData } = useContext(PrismicContext)
  setPageData(page)

  return (
    <>
      <NextSeo
        title={SEO.selectType.title}
        description={SEO.selectType.description}
      />
      <PhotoLayout page={page}>
        <TakePhoto
          form={form}
          entry={entry}
          documentId={documentId}
          page={page}
          articlePage={articlePage}
        />
      </PhotoLayout>
    </>
  )
}

export default withLocale(TakePhotoPage)

export const getServerSideProps: GetServerSideProps<
  TakePhotoPageProps
> = async (context: GetServerSidePropsContext) => {
  const redirectTo = (page: string = PAGES.home) => ({
    redirect: {
      destination: page,
      permanent: false,
    },
  })

  const previewData = context.previewData
  const client = createClient({ previewData })
  const locale = context?.locale as string

  const page = await client.getByUID(
    PageTypeHashes.processPage,
    PageUIDHashes.processPage,
    { lang: locale },
  )

  const articlePage = await client.getByUID(PageUIDHashes.articlePage, 'test')

  if (context.res) {
    context.res.setHeader('Cache-Control', 'no-store')
  }

  const entryId = context?.query?.entryId as string
  const documentId = context?.query?.documentId as string
  if (!documentId && !entryId) {
    return redirectTo()
  }
  try {
    const client = initializeApollo(null, context)

    const result: ApolloQueryResult<FormsQuery> = await client.query({
      query: FormsDocument,
    })
    const form = (result.data?.Forms || []).find((f) => f.name === PHOTO_FORM)

    if (!form) return redirectTo()

    if (!entryId) {
      return {
        props: {
          form,
          entry: null,
          documentId,
          page,
          articlePage,
        },
      }
    }
    const entryResult: ApolloQueryResult<EntryQuery> = await client.query({
      query: EntryDocument,
      variables: { entryId },
      fetchPolicy: 'no-cache',
    })
    const entry = entryResult.data?.Entry.data
    if (!entry) {
      if (documentId) {
        return {
          props: {
            form,
            entry: null,
            documentId,
            page,
            articlePage,
          },
        }
      }
      return redirectTo()
    }
    const docId = entry.form.steps[0].fields.find(
      (f) => f.name === 'document_id',
    )?.value as string
    if (documentId !== docId.toString()) {
      return redirectTo(
        `${PAGES.photo.takePhoto}?entryId=${entryId}&documentId=${docId}`,
      )
    }

    return {
      props: {
        form,
        entry,
        documentId,
        page,
        articlePage,
      },
    }
  } catch (e) {
    return redirectTo(PAGES.photo.takePhoto)
  }
}

import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ApolloQueryResult } from '@apollo/client'

import { AppLayout } from '@/components/index'
import UpSell from '@/modules/upSell'
import { initializeApollo } from '@/apollo/client'
import { FormsDocument, FormsQuery } from '@/apollo'
import { SEO } from '@/constants'

export interface UpSellPageProps {
  ds11: string | null
  ds82: string | null
}

const UpSellPage: NextPage<UpSellPageProps> = ({ ds11, ds82 }) => (
  <>
    <NextSeo title={SEO.upSell.title} description={SEO.upSell.description} />
    <AppLayout>
      <UpSell ds11={ds11} ds82={ds82} />
    </AppLayout>
  </>
)

export default UpSellPage

export const getServerSideProps: GetServerSideProps<UpSellPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const client = initializeApollo(null, context)

    const result: ApolloQueryResult<FormsQuery> = await client.query({
      query: FormsDocument,
    })
    const forms = result.data?.Forms || []
    if (forms.length === 0) {
      return {
        props: {
          ds11: null,
          ds82: null,
        },
      }
    }
    return {
      props: {
        ds11: forms.find((f) => f.name === 'DS-11')?.id ?? null,
        ds82: forms.find((f) => f.name === 'DS-82')?.id ?? null,
      },
    }
  } catch (e) {
    return {
      props: {
        ds11: null,
        ds82: null,
      },
    }
  }
}

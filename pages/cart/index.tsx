import React from 'react'
import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { NextSeo } from 'next-seo'
import { ApolloQueryResult } from '@apollo/client'

import { AppLayout } from '@/components/index'
import ShoppingCart from '@/components/cart/shoppingCart'
import { Cart, CartDocument, CartQuery } from '@/generated/graphql'
import { initializeApollo } from '@/lib/apolloClient'
import { PAGES, SEO } from '../../constants'

export interface CartPageProps {
  cart: Cart | null
}

const CartPage: NextPage<CartPageProps> = ({ cart }) => (
  <>
    <NextSeo
      title={SEO.shoppingCart.title}
      description={SEO.shoppingCart.description}
    />
    <AppLayout>
      <ShoppingCart cart={cart} />
    </AppLayout>
  </>
)

export const getServerSideProps: GetServerSideProps<CartPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const client = initializeApollo(null, context)

    const result: ApolloQueryResult<CartQuery> = await client.query({
      query: CartDocument,
    })

    const cart = result.data?.Cart.data || null
    return {
      props: {
        cart,
      },
    }
  } catch (e) {
    return {
      redirect: {
        destination: PAGES.home,
        permanent: false,
      },
    }
  }
}

export default CartPage

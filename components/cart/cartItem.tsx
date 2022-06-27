import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'

import {
  Cart,
  CartItem,
  Currency,
  Product,
  ProductCategory,
  useUpdateCartItemPriceMutation,
} from '@/generated/graphql'
import { showError, showSuccess } from '@/lib/utils/toast'
import { useProducts } from '@/hooks/index'
import { PAGES } from '../../constants'

import PriceItem from './priceItem'

interface CartItemProps {
  item: CartItem
  currency?: Currency
  onDelete: (id: string) => void
  onUpdated: (cart: Cart) => void
  onPreview: (url: string) => void
}

const ShoppingCartItem: React.FC<CartItemProps> = ({
  item,
  currency,
  onDelete,
  onUpdated,
  onPreview,
}) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { products, getProduct } = useProducts()
  const [updateCartItemPrice] = useUpdateCartItemPriceMutation()

  const product: Product | undefined = useMemo(
    () => getProduct(item.productSku),
    [getProduct, item.productSku],
  )

  const onChangeOption = useCallback(
    async (product: Product) => {
      const { data } = await updateCartItemPrice({
        variables: {
          item: { productSku: product.sku, itemId: item.id },
        },
      })
      const cart = data?.UpdateCartItemPrice.data
      if (cart) {
        showSuccess('CartItem is updated.')
        onUpdated(cart)
      } else {
        showError('CartItem update failed.')
      }
    },
    [item.id, onUpdated, updateCartItemPrice],
  )

  const onClickItem = useCallback(
    async (item: CartItem) => {
      if (item.productCategory === ProductCategory.Application) {
        await router.push(`${PAGES.application.index}${item.productId}`)
      } else {
        onPreview(item.imageUrl ?? '')
      }
    },
    [onPreview, router],
  )

  return (
    <li>
      <div className="name">
        {item.productCategory === ProductCategory.Photo ? (
          <div className="img">
            <Image
              src={item.imageUrl ?? ''}
              width="100%"
              height="100%"
              alt=""
              layout="fill"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="text">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
        <button onClick={() => onDelete(item.id)} className="icon-delete" />
      </div>
      <div className="more">
        <div className="price">
          <p>
            {'Price: '}
            {item.productCategory === ProductCategory.Application && (
              <span>
                {t('currency', {
                  value: item.isComplete ? product?.price : 0,
                  currency: currency?.label,
                })}
              </span>
            )}
          </p>
        </div>
        {item.productCategory === ProductCategory.Photo && (
          <div className="form-fields">
            {products.map(
              (product) =>
                product.category === ProductCategory.Photo && (
                  <PriceItem
                    product={product}
                    selected={item.productSku}
                    onSelect={onChangeOption}
                  />
                ),
            )}
          </div>
        )}

        <div className="btn-wrap">
          <button
            type="button"
            className="main-btn small outline"
            onClick={() => onClickItem(item)}>
            {item.productCategory === ProductCategory.Application
              ? 'Review'
              : 'Preview'}
          </button>
        </div>
      </div>
    </li>
  )
}

export default ShoppingCartItem

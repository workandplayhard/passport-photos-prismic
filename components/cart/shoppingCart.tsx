import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { ProductType, useRemoveItemsFromCartMutation } from '@/generated/graphql';
import ShoppingCartItem from '@/components/cart/cartItem';
import { useAuth } from '@/lib/auth';

const ShoppingCart: React.FC = () => {
  const { cart, updateCart } = useAuth();
  const [removeFromCart] = useRemoveItemsFromCartMutation();

  const onRemoveCartItem = useCallback(
    async (id: string) => {
      const { data } = await removeFromCart({ variables: { ids: [id] } });
      const cart = data?.RemoveItemsFromCart.data;
      if (cart) {
        updateCart(cart);
      }
    },
    [removeFromCart, updateCart]
  );

  const subTotal = useMemo(() => cart?.items?.reduce((a, { price }) => a + price, 0), [cart]);

  return (
    <div className="cart-page">
      <div className="page-title">
        <div className="container">
          <div className="data-wrap">
            <h1>{'Shopping cart'}</h1>
            <div className="btn-wrap">
              <Link href={'/application/create'}>
                <a className="main-btn small outline">
                  {'Add passport application'}
                  <span className="icon-close" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="application-form">
        <div className="container">
          <div className="cart-summary">
            <div className="item-wrap">
              <ul>
                {cart?.items
                  ?.filter((item) => item.product === ProductType.PassportApplication)
                  ?.map((item, index) => (
                    <ShoppingCartItem key={index} item={item} onDelete={onRemoveCartItem} />
                  ))}
              </ul>
            </div>
            <div className="item-wrap">
              <ul>
                {cart?.items
                  ?.filter((item) => item.product === ProductType.PassportPhoto)
                  ?.map((item, index) => (
                    <ShoppingCartItem key={index} item={item} onDelete={onRemoveCartItem} />
                  ))}
              </ul>
            </div>
            <div className="item-wrap total-info">
              <div className="order-summary">
                <h3>{'Order summary'}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>{'Subtotal'}</td>
                      <td>{`$${(subTotal ?? 0) / 100}`}</td>
                    </tr>
                    <tr>
                      <td>{'Tax'}</td>
                      <td>{`$0.00`}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        <b>{'Total'}</b>
                      </td>
                      <td>
                        <b>{`$${(cart?.totalPrice ?? 0) / 100}`}</b>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <Link href={cart?.items?.length ?? 0 > 0 ? '/checkout' : '/cart'}>
                  <a className="main-btn big">{'Check out'}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

import React, { useState, useEffect } from 'react'
import {
  Cart as CartController,
  useOrder,
  useLanguage,
  useEvent,
  useUtils,
  useValidationFields,
  useConfig
} from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import MdClose from '@meronex/icons/md/MdClose'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'

import { Confirm } from '../../../../../components/Confirm'
import { Modal } from '../Modal'
import { CouponControl } from '../../../../../components/CouponControl'
import { ProductForm } from '../ProductForm'
import { UpsellingPage } from '../UpsellingPage'

import {
  CartContainer,
  OrderBill,
  CheckoutAction,
  CouponContainer,
  CartSticky,
  Divider,
  UpsellingPageTitleWrapper,
  Title,
  Container,
  ModalIcon
} from './styles'
import { verifyDecimals } from '../../../../../utils'

const CartUI = (props) => {
  const {
    cart,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct,
    onClickCheckout,
    isCheckout,
    isCartPending,
    isCartPopover,
    isForceOpenCart,
    isCartOnProductsList,
    isCustomMode,
    handleGoBack
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [validationFields] = useValidationFields()
  const [{ configs }] = useConfig()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState({})
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [isUpselling, setIsUpselling] = useState(false)
  const isCouponEnabled = validationFields?.fields?.checkout?.coupon?.enabled

  const handleDeleteClick = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
        removeProduct(product, cart)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleEditProduct = (product) => {
    setCurProduct(product)
    setModalIsOpen(true)
  }

  const handleClickCheckout = () => {
    events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cart.uuid } })
    events.emit('cart_popover_closed')
    onClickCheckout && onClickCheckout()
  }

  useEffect(() => {
    events.emit('get_current_view')
    return () => {
      setConfirm({ ...confirm, open: false })
    }
  }, [])

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
    }
  }

  // const handleClearProducts = () => {
  //   setConfirm({
  //     open: true,
  //     content: t('QUESTION_DELETE_PRODUCTS', 'Are you sure that you want to delete all products?'),
  //     handleOnAccept: () => {
  //       clearCart(cart?.uuid)
  //       setConfirm({ ...confirm, open: false })
  //     }
  //   })
  // }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCanOpenUpselling(false)
    handleClickCheckout()
  }

  const checkOutBtnClick = () => {
    if (isCustomMode) handleClickCheckout()
    else setOpenUpselling(true)
  }

  useEffect(() => {
    if (isCustomMode) setIsUpselling(true)
  }, [isCustomMode])
  return (
    <Container isCheckout={isCheckout}>
      {!isCheckout && (
        <ModalIcon>
          <BsArrowLeft size={20} onClick={() => handleGoBack()} />
        </ModalIcon>
      )}
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CartContainer className='cart'>
        {!isCheckout && (
          <Title>{t('YOUR_CART', 'Your cart')}</Title>
        )}
        <CartSticky isCartOnProductsList={isCartOnProductsList}>
          {cart?.products?.length > 0 && cart?.products.map(product => (
            <ProductItemAccordion
              key={product.code}
              isCartPending={isCartPending}
              isCartProduct
              product={product}
              isCheckout={isCheckout}
              changeQuantity={changeQuantity}
              getProductMax={getProductMax}
              offsetDisabled={offsetDisabled}
              onDeleteProduct={handleDeleteClick}
              onEditProduct={handleEditProduct}
            />
          ))}
          {cart?.valid_products && (
            <OrderBill isCheckout={isCheckout}>
              <table>
                <tbody>
                  <tr>
                    <td>{t('SUBTOTAL', 'Subtotal')}</td>
                    <td>{cart.business.tax_type === 1 ? parsePrice((cart?.subtotal + cart?.tax) || 0) : parsePrice(cart?.subtotal || 0)}</td>
                  </tr>
                  {cart?.discount > 0 && cart?.total >= 0 && (
                    <tr>
                      {cart?.discount_type === 1 ? (
                        <td>
                          {t('DISCOUNT', 'Discount')}{' '}
                          <span>{`(${verifyDecimals(cart?.discount_rate, parsePrice)}%)`}</span>
                        </td>
                      ) : (
                        <td>{t('DISCOUNT', 'Discount')}</td>
                      )}
                      <td>- {parsePrice(cart?.discount || 0)}</td>
                    </tr>
                  )}
                  {
                    cart.business.tax_type !== 1 && (
                      <tr>
                        <td>
                          {t('TAX', 'Tax')}{' '}
                          <span>{`(${verifyDecimals(cart?.business?.tax, parseNumber)}%)`}</span>
                        </td>
                        <td>{parsePrice(cart?.tax || 0)}</td>
                      </tr>
                    )
                  }
                  {orderState?.options?.type === 1 && cart?.delivery_price > 0 && (
                    <tr>
                      <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                      <td>{parsePrice(cart?.delivery_price)}</td>
                    </tr>
                  )}
                  {cart?.driver_tip > 0 && (
                    <tr>
                      <td>
                        {t('DRIVER_TIP', 'Driver tip')}{' '}
                        {cart?.driver_tip_rate > 0 &&
                          parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                          !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                        (
                          <span>{`(${verifyDecimals(cart?.driver_tip_rate, parseNumber)}%)`}</span>
                        )}
                      </td>
                      <td>{parsePrice(cart?.driver_tip)}</td>
                    </tr>
                  )}
                  {cart?.service_fee > 0 && (
                    <tr>
                      <td>
                        {t('SERVICE_FEE', 'Service Fee')}{' '}
                        <span>{`(${verifyDecimals(cart?.business?.service_fee, parseNumber)}%)`}</span>
                      </td>
                      <td>{parsePrice(cart?.service_fee)}</td>
                    </tr>
                  )}

                </tbody>
              </table>
              {isCouponEnabled && !isCartPending && ((isCheckout || isCartPopover) && !(isCheckout && isCartPopover)) && (
                <CouponContainer>
                  <CouponControl
                    businessId={cart.business_id}
                    price={cart.total}
                  />
                </CouponContainer>
              )}
              <table className='total'>
                <tbody>
                  <tr>
                    <td>{t('TOTAL', 'Total')}</td>
                    <td>{cart?.total >= 1 && parsePrice(cart?.total)}</td>
                  </tr>
                </tbody>
              </table>
            </OrderBill>
          )}
          {(onClickCheckout || isForceOpenCart) && !isCheckout && cart?.valid_products && (
            <CheckoutAction>
              <Button
                color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || !cart?.valid_address) ? 'secundary' : 'primary'}
                onClick={checkOutBtnClick}
                disabled={(openUpselling && !canOpenUpselling) || !cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || !cart?.valid_address}
              >
                {!cart?.valid_address ? (
                  t('OUT_OF_COVERAGE', 'Out of Coverage')
                ) : !cart?.valid_maximum ? (
                  `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
                ) : (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ? (
                  `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
                ) : !openUpselling ^ canOpenUpselling ? t('CHECKOUT', 'Checkout') : t('LOADING', 'Loading')}
              </Button>
            </CheckoutAction>
          )}
          <Divider />
          <Confirm
            title={t('PRODUCT', 'Product')}
            content={confirm.content}
            acceptText={t('ACCEPT', 'Accept')}
            open={confirm.open}
            onClose={() => setConfirm({ ...confirm, open: false })}
            onCancel={() => setConfirm({ ...confirm, open: false })}
            onAccept={confirm.handleOnAccept}
            closeOnBackdrop={false}
          />
          <Modal
            width='40%'
            open={openProduct}
            padding='0'
            closeOnBackdrop
            onClose={() => setModalIsOpen(false)}
          >
            <ProductForm
              isCartProduct
              productCart={curProduct}
              businessSlug={cart?.business?.slug}
              businessId={cart?.business_id}
              categoryId={curProduct?.category_id}
              productId={curProduct?.id}
              onSave={handlerProductAction}
            />
          </Modal>
          {(openUpselling || isUpselling) && (
            <>
              <UpsellingPageTitleWrapper>
                <p>{t('DO_YOU_WANT_SOMETHING_ELSE', 'Do you want something else?')}</p>
                <MdClose onClick={() => setIsUpselling(false)} />
              </UpsellingPageTitleWrapper>
              <UpsellingPage
                businessId={cart.business_id}
                isCustomMode={isCustomMode}
                cartProducts={cart.products}
                business={cart.business}
                handleUpsellingPage={handleUpsellingPage}
                openUpselling={openUpselling}
                canOpenUpselling={canOpenUpselling}
                setCanOpenUpselling={setCanOpenUpselling}
              />
            </>
          )}
        </CartSticky>
      </CartContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </Container>
  )
}

export const Cart = (props) => {
  const cartProps = {
    ...props,
    UIComponent: CartUI
  }

  return (
    <CartController {...cartProps} />
  )
}

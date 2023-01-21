import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from 'styled-components'
import {
  useLanguage,
  useUtils,
  useCustomer,
  useConfig,
  useSession,
  useValidationFields,
  useOrder,
  MultiCheckout as MultiCheckoutController
} from 'ordering-components'

import parsePhoneNumber from 'libphonenumber-js'
import { NotFoundSource } from '../NotFoundSource'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Button } from '../../styles/Buttons'
import { Cart } from '../Cart'
import { Alert } from '../Confirm'
import { UserDetails } from '../UserDetails'
import { AddressDetails } from '../AddressDetails'
import { MultiCartsPaymethodsAndWallets } from '../MultiCartsPaymethodsAndWallets'

import {
  Container,
  WrapperLeftContainer,
  WrapperLeftContent,
  WrapperRightContainer,
  UserDetailsContainer,
  WrapperUserDetails,
  CartContainer,
  CartHeader,
  DriverTipDivider,
  MultiCartPriceContainer,
  PaymentMethodContainer,
  WrapperPlaceOrderButton,
  WarningText,
  DriverTipContainer
} from './styles'
import { DriverTips } from '../DriverTips'

const mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
}

const MultiCheckoutUI = (props) => {
  const {
    placing,
    isCustomerMode,
    openCarts,
    totalCartsPrice,
    handleGroupPlaceOrder,
    paymethodSelected,
    handleSelectPaymethod,
    handleSelectWallet,
    handlePaymethodDataChange,
    onRedirectPage,
    cartGroup,
    cartUuid,
    totalCartsFee,
    handleSearchRedirect
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [customerState] = useCustomer()
  const [orderingTheme] = useOrderingTheme()
  const [validationFields] = useValidationFields()
  const [{ user }] = useSession()
  const [orderState] = useOrder()
  const history = useHistory()

  const [userErrors, setUserErrors] = useState([])
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const isDisablePlaceOrderButton = !(paymethodSelected?.paymethod_id || paymethodSelected?.wallet_id) || (paymethodSelected?.paymethod?.gateway === 'stripe' && !paymethodSelected?.paymethod_data)
  const walletCarts = (Object.values(orderState?.carts)?.filter(cart => cart?.products && cart?.products?.length && cart?.status !== 2 && cart?.valid_schedule && cart?.valid_products && cart?.valid_address && cart?.valid_maximum && cart?.valid_minimum && cart?.wallets) || null) || []
  const isMultiDriverTips = orderingTheme?.theme?.header?.components?.layout?.type?.toLowerCase() === 'chew' ||
    theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'
  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []
  const totalFeeEnabled = configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const handlePlaceOrder = () => {
    if (!userErrors.length) {
      handleGroupPlaceOrder && handleGroupPlaceOrder()
      return
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(error => error)
    })
    setIsUserDetailsEdit(true)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setIsUserDetailsEdit(false)
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes']
    const userSelected = isCustomerMode ? customerState.user : user

    Object.values(validationFields?.fields?.checkout).map(field => {
      if (field?.enabled && field?.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field?.code]) {
          errors.push(t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `The field ${field?.name} is required`))
        }
      }
    })

    if (
      userSelected &&
      !userSelected?.cellphone &&
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
        validationFields?.fields?.checkout?.cellphone?.required) ||
        configs?.verification_phone_required?.value === '1')
    ) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'))
    }

    if (userSelected && userSelected?.cellphone) {
      if (userSelected?.country_phone_code) {
        let phone = null
        phone = `+${userSelected?.country_phone_code}${userSelected?.cellphone}`
        const phoneNumber = parsePhoneNumber(phone)
        if (!phoneNumber?.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'))
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      }
    }

    setUserErrors(errors)
  }

  useEffect(() => {
    if (validationFields && validationFields?.fields?.checkout) {
      checkValidationFields()
    }
  }, [validationFields, user, customerState])

  useEffect(() => {
    if (openCarts.length || cartGroup.loading) return
    onRedirectPage && onRedirectPage({ page: 'search' })
  }, [openCarts, cartGroup])

  return (
    <>
      {((!cartGroup?.loading && openCarts.length === 0) || !cartUuid) ? (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      ) : (
        <Container>
          <WrapperLeftContainer>
            <WrapperLeftContent>
              <ArrowLeft className='back-arrow' onClick={() => history.goBack()} />
              <h2 className='checkout-title'>{t('CHECK_OUT', 'Checkout')}</h2>

              <AddressDetails
                isMultiCheckout
                openCarts={openCarts}
                apiKey={configs?.google_maps_api_key?.value}
                mapConfigs={mapConfigs}
                isCustomerMode={isCustomerMode}
              />

              <UserDetailsContainer>
                <WrapperUserDetails>
                  <UserDetails
                    isUserDetailsEdit={isUserDetailsEdit}
                    useValidationFields
                    useDefualtSessionManager
                    useSessionUser={!isCustomerMode}
                    isCustomerMode={isCustomerMode}
                    userData={isCustomerMode && customerState.user}
                    userId={isCustomerMode && customerState?.user?.id}
                    isCheckout
                  />
                </WrapperUserDetails>
              </UserDetailsContainer>

              <PaymentMethodContainer>
                <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
                <MultiCartsPaymethodsAndWallets
                  userId={props.userId}
                  openCarts={openCarts}
                  paymethodSelected={paymethodSelected}
                  handleSelectPaymethod={handleSelectPaymethod}
                  handleSelectWallet={handleSelectWallet}
                  handlePaymethodDataChange={handlePaymethodDataChange}
                  cartUuid={cartUuid}
                />
              </PaymentMethodContainer>

              {
                isMultiDriverTips &&
                orderState?.options.type === 1 &&
                validationFields?.fields?.checkout?.driver_tip?.enabled &&
                openCarts.every(cart => cart.business_id && cart.status !== 2) &&
                driverTipsOptions.length > 0 &&
                (
                  <DriverTipContainer>
                    <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
                    <p>{t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')}</p>
                    <DriverTips
                      isMulti
                      carts={openCarts}
                      businessIds={openCarts.map(cart => cart.business_id)}
                      driverTipsOptions={driverTipsOptions}
                      isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
                      isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                      driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                        ? openCarts[0]?.driver_tip
                        : openCarts[0]?.driver_tip_rate}
                      useOrderContext
                    />
                  </DriverTipContainer>
                )
              }
            </WrapperLeftContent>
          </WrapperLeftContainer>
          <WrapperRightContainer>
            <CartContainer>
              <CartHeader>
                <h1>{t('MOBILE_FRONT_YOUR_ORDER', 'Your order')}</h1>
              </CartHeader>
              {openCarts.map(cart => (
                <React.Fragment key={cart.uuid}>
                  <Cart
                    isCartPending={cart?.status === 2}
                    cart={cart}
                    isMultiCheckout={isMultiDriverTips}
                    isProducts={cart?.products?.length || 0}
                    hideDeliveryFee={configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1'}
                    hideDriverTip={configs?.multi_business_checkout_show_combined_driver_tip?.value === '1'}
                  />
                  <DriverTipDivider />
                </React.Fragment>
              ))}
              {walletCarts.length > 0 && (
                <WarningText>
                  {t('WARNING_PARTIAL_WALLET_CARTS', 'Important: One or more carts can`t be completed due a partial payment with cash/points wallet and requires to be paid individually')}
                </WarningText>
              )}
              {openCarts.length > 0 && (
                <MultiCartPriceContainer totalFeeEnabled={totalFeeEnabled}>
                  {!!totalCartsFee &&
                    configs?.multi_business_checkout_show_combined_delivery_fee?.value === '1' &&
                  (
                    <span>
                      <p>{t('TOTAL_DELIVERY_FEE', 'Total delivery fee')}</p>
                      <p>{parsePrice(totalCartsFee)}</p>
                    </span>
                  )}
                  {openCarts.reduce((sum, cart) => sum + cart?.driver_tip, 0) > 0 &&
                    configs?.multi_business_checkout_show_combined_driver_tip?.value === '1' &&
                  (
                    <span>
                      <p>{t('DRIVER_TIP', 'Driver tip')}</p>
                      <p>{parsePrice(openCarts.reduce((sum, cart) => sum + cart?.driver_tip, 0))}</p>
                    </span>
                  )}
                  <div>
                    <h4>{t('TOTAL_FOR_ALL_CARTS', 'Total for all Carts')}</h4>
                    <h4>{parsePrice(totalCartsPrice)}</h4>
                  </div>
                  <p>
                    {t('MULTI_CHECKOUT_DESCRIPTION', 'You will receive a receipt for each business. The payment is not combined between multiple stores. Each payment is processed by the store')}
                  </p>
                </MultiCartPriceContainer>
              )}
            </CartContainer>

            <WrapperPlaceOrderButton>
              <Button
                color='primary'
                disabled={isDisablePlaceOrderButton || placing || cartGroup?.loading}
                onClick={handlePlaceOrder}
              >
                {placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
              </Button>
            </WrapperPlaceOrderButton>
          </WrapperRightContainer>

          <Alert
            title={t('CHECKOUT ', 'Checkout')}
            content={alertState.content}
            acceptText={t('ACCEPT', 'Accept')}
            open={alertState.open}
            onClose={() => closeAlert()}
            onAccept={() => closeAlert()}
            closeOnBackdrop={false}
          />
        </Container>
      )}
    </>
  )
}

export const MultiCheckout = (props) => {
  const multiCheckoutProps = {
    ...props,
    UIComponent: MultiCheckoutUI
  }
  return <MultiCheckoutController {...multiCheckoutProps} />
}

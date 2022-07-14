import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'
import { useSession, useLanguage, useOrder, Analytics, FacebookPixel, useConfig, AnalyticsSegment, useEvent } from 'ordering-components'

import { Header } from '../src/themes/five/src/components/Header'
import { Footer } from '../src/themes/five/src/components/Footer'
import { NotNetworkConnectivity } from '../src/themes/five/src/components/NotNetworkConnectivity'

import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { Header as HeaderOld } from '../src/components/Header'
import { Header as HeaderRed } from '../src/themes/seven/src/components/Header'
import { Header as HeaderStarbucks } from '../src/themes/six/src/components/Header'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { Alert } from '../src/components/Confirm'
import { SmartAppBanner } from '../src/components/SmartAppBanner'

import { useTheme } from 'styled-components'

import { AddressList } from './pages/AddressList'
import { BusinessesList } from './pages/BusinessesList'
import { BusinessProductsList } from './pages/BusinessProductsList'
import { CheckoutPage } from './pages/Checkout'
import { Cms } from './pages/Cms'
import { HomePage } from './pages/Home'
import { MyOrders } from './pages/MyOrders'
import { OrderDetailsPage } from './pages/OrderDetails'
import { PageNotFound } from './pages/PageNotFound'
import { PagesList } from './pages/PagesList'
import { Profile } from './pages/Profile'
import { Wallets } from './pages/Wallets'
import { MessagesList } from './pages/MessagesList'
import { Help } from './pages/Help'
import { Favorite } from './pages/Favorite'
import { SessionsList } from './pages/SessionsList'
import { SignUpBusiness } from './pages/SignUpBusiness'
import { SignUpDriver } from './pages/SignUpDriver'
import { UserVerification } from './pages/UserVerification'
import { BusinessListingSearch } from './pages/BusinessListingSearch'
import { ResetPassword } from './pages/ResetPassword'
import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { HelmetTags } from './components/HelmetTags'
import settings from './config.json'
import { Promotions } from './pages/Promotions'
import { MultiCheckout } from './pages/MultiCheckout'
import { MultiOrdersDetails } from './pages/MultiOrdersDetails'

export const App = () => {
  const [{ auth, user }, { login }] = useSession()
  const [events] = useEvent()
  const theme = useTheme()
  const [orderStatus, { changeType }] = useOrder()
  const [{ configs, loading: configLoading }] = useConfig()
  const [, t] = useLanguage()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null

  const HeaderComponent =
    theme?.layouts?.header?.layout?.type === 'old'
      ? HeaderOld
      : theme?.layouts?.header?.layout?.type === 'red'
        ? HeaderRed
        : theme?.layouts?.header?.layout?.type === 'starbucks'
          ? HeaderStarbucks
          : Header

  const orderTypeSearchParam = parseInt(new URLSearchParams(useLocation()?.search)?.get('order_type') ?? 0, 10)
  const configTypes = configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const isWalletEnabled = configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' && (configs?.wallet_cash_enabled?.value === '1' || configs?.wallet_credit_point_enabled?.value === '1')
  const isEmailVerifyRequired = auth && configs?.verification_email_required?.value === '1' && !user?.email_verified
  const isPhoneVerifyRequired = auth && configs?.verification_phone_required?.value === '1' && !user?.phone_verified
  const isUserVerifyRequired = isEmailVerifyRequired || isPhoneVerifyRequired

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const acceptAlert = () => {
    window.localStorage.setItem('front_version', configs?.front_version?.value)
    window.location.reload()
  }

  const isHome = location.pathname === '/' || location.pathname === '/home'
  const isFooterPage = location.pathname === '/pages/footer'

  const handleSuccessSignup = (user) => {
    if (!user?.enabled && (configs?.business_signup_enabled_default?.value === '0' || configs?.driver_signup_enabled_default?.value === '0')) {
      setAlertState({
        open: true,
        content: [t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')]
      })
      return
    }
    if (configs?.business_signup_enabled_default?.value === '1') {
      setAlertState({
        open: true,
        content: [
          `${t('PROJECT', 'Project')}: ${settings.project}`
        ],
        links: [
          <span key='url dashboard'>
            {`${t('DASHBOARD_WEBPAGE_MESSAGE', 'Dashboard webpage')}: `}
            <a
              target='blank'
              href={`${settings.url_dashboard}/login/?project=${settings.project}&token=${user?.session?.access_token}`}
            >
              <span style={{ color: theme.colors.links }}>{settings.url_dashboard}</span>
            </a>
          </span>
        ],
        isOnlyAlert: true
      })
    }
    login({
      user,
      token: user?.session?.access_token
    })
  }

  useEffect(() => {
    if (!loaded && !orderStatus.loading && !configLoading) {
      if (orderTypeSearchParam && configTypes.includes(orderTypeSearchParam)) {
        changeType(parseInt(orderTypeSearchParam, 10))
        if (orderStatus?.options?.type === parseInt(orderTypeSearchParam, 10)) {
          setLoaded(true)
        }
        return
      }
      setLoaded(true)
    }
  }, [orderStatus, configLoading])

  useEffect(() => {
    if (configs?.front_version?.value && loaded) {
      const localStorageFrontVersion = window.localStorage.getItem('front_version')
      if (localStorageFrontVersion && localStorageFrontVersion !== configs?.front_version?.value) {
        setAlertState({
          open: true,
          content: [t('RELOAD_FRONT_QUESTION', 'There is a new version of Ordering! Do you want to update it?')]
        })
      }
    }
  }, [configs, loaded])

  useEffect(() => {
    if (isHome && settings?.use_marketplace) {
      events.emit('go_to_page', { page: 'business', params: { store: 'marketplace' } })
    }
  }, [])

  return (
    <>
      {!!configs?.track_id_google_analytics?.value && (
        <Analytics trackId={configs?.track_id_google_analytics?.value} />
      )}
      {!!configs?.segment_track_id?.value && (
        <AnalyticsSegment writeKey={configs?.segment_track_id?.value} />
      )}
      {!!configs?.facebook_id?.value && FacebookPixel && (
        <FacebookPixel trackId={configs?.facebook_id?.value} />
      )}
      <ListenPageChanges />
      {
        !loaded && (
          <SpinnerLoader />
        )
      }
      <SmartAppBanner
        storeAndroidId={settings?.store_android_id !== '0' ? settings?.store_android_id : false}
        storeAppleId={settings?.store_apple_id !== '0' ? settings?.store_apple_id : false}
        storeKindleId={settings?.store_kindle_id !== '0' ? settings?.store_kindle_id : false}
      />
      {
        loaded && (
          <>
            <HeaderComponent
              isHome={isHome}
              location={location}
              isCustomLayout={settings?.use_marketplace}
            />
            <NotNetworkConnectivity />
            {onlineStatus && (
              <ScrollToTop>
                <HelmetTags />
                <Switch>
                  <Route exact path='/home'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      orderStatus.options?.address?.location
                        ? <Redirect to={settings?.use_marketplace ? '/marketplace' : '/search'} />
                        : settings?.use_marketplace
                          ? <Redirect to={settings?.use_marketplace ? '' : '/search'} />
                          : <HomePage />
                    )}
                  </Route>
                  <Route exact path='/'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      orderStatus.options?.address?.location
                        ? <Redirect to={settings?.use_marketplace ? '/marketplace' : '/search'} />
                        : <HomePage />
                    )}
                  </Route>
                  <Route exact path='/wallets'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : isWalletEnabled
                          ? <Wallets />
                          : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/signup_business'>
                    {!auth ? (
                      <SignUpBusiness
                        elementLinkToLogin={<Link to='/'>{t('LOGIN', 'Login')}</Link>}
                        useLoginByCellphone
                        useChekoutFileds
                        handleSuccessSignup={handleSuccessSignup}
                        isRecaptchaEnable
                      />
                    ) : (
                      <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                    )}
                  </Route>
                  <Route exact path='/signup-driver'>
                    {!auth ? (
                      <SignUpDriver
                        elementLinkToLogin={<Link to='/'>{t('LOGIN', 'Login')}</Link>}
                        useLoginByCellphone
                        useChekoutFileds
                        handleSuccessSignup={handleSuccessSignup}
                        isRecaptchaEnable
                      />
                    ) : (
                      <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                    )}
                  </Route>
                  <Route exact path='/password/reset'>
                    {auth ? (
                      <Redirect to='/' />
                    ) : (
                      <ResetPassword />
                    )}
                  </Route>
                  <Route exact path='/profile'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<Profile userId={user?.id} accessToken={user?.session?.access_token} useValidationFields />)
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/verify'>
                    {isUserVerifyRequired
                      ? <UserVerification />
                      : <Redirect to={auth ? settings?.use_marketplace ? '/marketplace' : '/search' : '/'} />}
                  </Route>
                  <Route exact path='/profile/orders'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<MyOrders />)
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/profile/addresses'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<AddressList />)
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/messages'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MessagesList />
                      : (
                        <Redirect to={{
                          pathname: '/search'
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/help'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : (<Help />)
                      : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />}
                  </Route>
                  <Route exact path='/search'>
                    {orderStatus.loading && !orderStatus.options?.address?.location ? (
                      <SpinnerLoader />
                    ) : (
                      isUserVerifyRequired ? (
                        <Redirect to='/verify' />
                      ) : (
                        orderStatus.options?.address?.location
                          ? <BusinessesList />
                          : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                      )
                    )}
                  </Route>
                  <Route exact path='/business_search'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      orderStatus.options?.address?.location ? (
                        <BusinessListingSearch />
                      ) : (
                        <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                      )
                    )}
                  </Route>
                  <Route exact path='/promotions'>
                    {orderStatus.loading && !orderStatus.options?.address?.location ? (
                      <SpinnerLoader />
                    ) : (
                      isUserVerifyRequired ? (
                        <Redirect to='/verify' />
                      ) : (
                        orderStatus.options?.address?.location
                          ? <Promotions />
                          : <Redirect to={settings?.use_marketplace ? '/marketplace' : '/'} />
                      )
                    )}
                  </Route>
                  <Route exact path='/store/:store'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <BusinessProductsList />
                    )}
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <CheckoutPage />
                      : (
                        <Redirect to={{
                          pathname: settings?.use_marketplace
                            ? '/marketplace'
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route path='/multi-checkout'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MultiCheckout />
                      : (
                        <Redirect to={{
                          pathname: settings?.use_marketplace
                            ? '/marketplace'
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route path='/multi-orders'>
                    {auth
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <MultiOrdersDetails />
                      : (
                        <Redirect to={{
                          pathname: settings?.use_marketplace
                            ? '/marketplace'
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    {(auth || hashKey)
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <OrderDetailsPage />
                      : (
                        <Redirect to={{
                          pathname: settings?.use_marketplace
                            ? '/marketplace'
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/promotions'>
                    {(auth || hashKey)
                      ? isUserVerifyRequired
                        ? <Redirect to='/verify' />
                        : <Promotions />
                      : (
                        <Redirect to={{
                          pathname: settings?.use_marketplace
                            ? '/marketplace'
                            : '/',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/pages/:pageSlug'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <Cms />
                    )}
                  </Route>
                  <Route exact path='/pages'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <PagesList />
                    )}
                  </Route>
                  <Route exact path='/favorite'>
                    {auth
                      ? <Favorite />
                      : (
                        <Redirect to='/' />
                      )}
                  </Route>
                  <Route exact path='/sessions'>
                    {auth
                      ? <SessionsList />
                      : (
                        <Redirect to='/' />
                      )}
                  </Route>
                  <Route path='/:store'>
                    {isUserVerifyRequired ? (
                      <Redirect to='/verify' />
                    ) : (
                      <Redirect to={{
                        pathname: `/store${location.pathname}`,
                        state: { from: location.pathname || null }
                      }}
                      />
                    )}
                  </Route>
                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
              </ScrollToTop>
            )}
            {!isFooterPage && (
              <Footer />
            )}
            <Alert
              title={t('INFORMATION', 'Information')}
              content={alertState.content}
              links={alertState.links}
              acceptText={t('ACCEPT', 'Accept')}
              open={alertState.open}
              onClose={() => closeAlert()}
              onCancel={() => closeAlert()}
              onAccept={() => alertState?.isOnlyAlert ? closeAlert() : acceptAlert()}
              closeOnBackdrop={false}
            />
          </>
        )
      }
    </>
  )
}

import React, { useState, useEffect, useCallback } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import {
  BusinessAndProductList,
  useEvent,
  useLanguage,
  useOrder,
  useSession,
  useConfig
} from 'ordering-components'
import {
  ProductsContainer,
  WrapContent,
  ProductLoading,
  SkeletonItem,
  WrappLayout,
  BusinessProductsCategorieWrapper,
  CartegoryTitle
} from './styles'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { BusinessProductsList } from '../BusinessProductsList'
import { PageNotFound } from '../../../../../components/PageNotFound'
import { Modal } from '../../../../../components/Modal'
import { UpsellingPage } from '../../../../../components/UpsellingPage'
import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { ProductForm } from '../ProductForm'

const PIXELS_TO_SCROLL = 300
const BusinessProductsListingUI = (props) => {
  const {
    errors,
    isInitialRender,
    businessState,
    categorySelected,
    searchValue,
    categoryState,
    categoryId,
    productId,
    productModal,
    getNextProducts,
    handleChangeCategory,
    handleUpdateInitialRender,
    updateProductModal,
    onProductRedirect,
    onCheckoutRedirect,
    handleChangeSearch,
    handleSearchRedirect,
    featuredProducts,
    isCartOnProductsList,
    errorQuantityProducts
  } = props
  const [{ configs }] = useConfig()
  const isQuickAddProduct = configs?.add_product_with_one_click?.value === '1'
  const { business, loading, error } = businessState
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ carts }, { addProduct }] = useOrder()
  const [events] = useEvent()
  const [{ auth }] = useSession()
  const location = useLocation()
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [openBusinessInformation, setOpenBusinessInformation] = useState(false)
  const currentCart = Object.values(carts).find(cart => cart?.business?.slug === business?.slug) ?? {}

  const handler = () => {
    setOpenBusinessInformation(true)
  }

  const onProductClick = (product) => {
    if (product.extras.length === 0 && !product.inventoried && !Object.is(auth, null) && addProductWithOneClick) {
      addProduct(product, currentCart)
    } else {
      onProductRedirect({
        slug: business?.slug,
        product: product.id,
        category: product.category_id
      })
      setCurProduct(product)
      setModalIsOpen(true)
      events.emit('product_clicked', product)
    }
  }

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
      onProductRedirect({
        slug: business?.slug
      })
    }
  }

  const closeModalProductForm = () => {
    setModalIsOpen(false)
    handleUpdateInitialRender(false)
    updateProductModal(null)
    setCurProduct(null)
    onProductRedirect({
      slug: business?.slug
    })
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore) return
    getNextProducts()
  }, [categoryState])

  const handleChangePage = (data) => {
    if (Object.entries(data.query).length === 0 && openProduct) {
      setModalIsOpen(false)
    }
  }

  const handleUpsellingPage = () => {
    onCheckoutRedirect(currentCart?.uuid)
    setOpenUpselling(false)
    setCanOpenUpselling(false)
  }

  useEffect(() => {
    if (categoryId && productId && isInitialRender) {
      if (productModal?.product?.id) {
        setCurProduct(productModal.product)
      }
      setModalIsOpen(true)
    }
  }, [productModal])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (categoryId && productId) {
      handleUpdateInitialRender(true)
    }
    events.emit('get_current_view')
  }, [])

  useEffect(() => {
    events.on('change_view', handleChangePage)
    return () => {
      events.off('change_view', handleChangePage)
    }
  }, [openProduct])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductsContainer>
        {
          !loading && business?.id && (
            <>
              <BusinessBasicInformation
                businessState={businessState}
                setOpenBusinessInformation={setOpenBusinessInformation}
                openBusinessInformation={openBusinessInformation}
              />
              <WrappLayout
                isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
              >
                {!(business?.categories?.length === 0 && !categoryId) && (
                  <BusinessProductsCategorieWrapper>
                    <CartegoryTitle>
                      {t('OUR_MENU', 'Our Menu')}
                    </CartegoryTitle>
                    <BusinessProductsCategories
                      categories={[{ id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') }, { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') }, ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                      categorySelected={categorySelected}
                      onClickCategory={handleChangeCategory}
                      featured={featuredProducts}
                      openBusinessInformation={openBusinessInformation}
                      isVerticalList
                    />
                  </BusinessProductsCategorieWrapper>
                )}
                <WrapContent>
                  <BusinessProductsList
                    categories={[
                      { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                      { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                      ...business?.categories.sort((a, b) => a.rank - b.rank)
                    ]}
                    category={categorySelected}
                    categoryState={categoryState}
                    businessId={business.id}
                    errors={errors}
                    onProductClick={onProductClick}
                    handleSearchRedirect={handleSearchRedirect}
                    featured={featuredProducts}
                    searchValue={searchValue}
                    isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                    handleClearSearch={handleChangeSearch}
                    errorQuantityProducts={errorQuantityProducts}
                  />
                </WrapContent>
              </WrappLayout>
            </>
          )
        }
        {loading && !error && (
          <>
            <BusinessBasicInformation
              businessState={{ business: {}, loading: true }}
              isSkeleton
              handler={handler}
              openBusinessInformation={openBusinessInformation}
            />
            <WrappLayout>
              <BusinessProductsCategorieWrapper>
                <SkeletonItem>
                  <Skeleton height={20} width={120} />
                </SkeletonItem>
                <BusinessProductsCategories
                  categories={[]}
                  isSkeleton
                  openBusinessInformation={openBusinessInformation}
                  isVerticalList
                />
              </BusinessProductsCategorieWrapper>
              <WrapContent>
                <BusinessProductsList
                  categories={[]}
                  category={categorySelected}
                  categoryState={categoryState}
                  isBusinessLoading={loading}
                  errorQuantityProducts={errorQuantityProducts}
                />
              </WrapContent>
            </WrappLayout>
          </>
        )}
        {
          !loading && business && !Object.keys(business).length && (
            <NotFoundSource
              content={t('NOT_FOUND_BUSINESS_PRODUCTS', theme?.defaultLanguages?.NOT_FOUND_BUSINESS_PRODUCTS || 'No products to show at this business, please try with other business.')}
              btnTitle={t('SEARCH_REDIRECT', theme?.defaultLanguages?.SEARCH_REDIRECT || 'Go to Businesses')}
              onClickButton={() => handleSearchRedirect()}
            />
          )
        }
        {
          !loading && !business && location.pathname.includes('/store/') && (
            <NotFoundSource
              content={t('ERROR_NOT_FOUND_STORE', theme?.defaultLanguages?.ERROR_NOT_FOUND_STORE || 'Sorry, an error has occurred with business selected.')}
              btnTitle={t('SEARCH_REDIRECT', theme?.defaultLanguages?.SEARCH_REDIRECT || 'Go to Businesses')}
              onClickButton={handleSearchRedirect}
            />
          )
        }
        {
          !loading && !business && !location.pathname.includes('/store/') && (
            <PageNotFound />
          )
        }
        {error && error.length > 0 && Object.keys(business).length && (
          <NotFoundSource
            content={error[0]?.message || error[0]}
            btnTitle={t('SEARCH_REDIRECT', theme?.defaultLanguages?.SEARCH_REDIRECT || 'Go to Businesses')}
            onClickButton={handleSearchRedirect}
          />
        )}
      </ProductsContainer>
      <Modal
        width='60%'
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
      >
        {productModal.loading && !productModal.error && (
          <ProductLoading>
            <SkeletonItem>
              <Skeleton height={45} count={8} />
            </SkeletonItem>
          </ProductLoading>
        )}
        {productModal.error && productModal.error.length > 0 && (
          <NotFoundSource
            content={productModal.error[0]?.message || productModal.error[0]}
          />
        )}
        {isInitialRender && !productModal.loading && !productModal.error && !productModal.product && (
          <NotFoundSource
            content={t('ERROR_GET_PRODUCT', theme?.defaultLanguages?.ERROR_GET_PRODUCT || 'Sorry, we couldn\'t find the requested product.')}
          />
        )}
        {(productModal.product || curProduct) && (
          <ProductForm
            businessSlug={business?.slug}
            product={productModal.product || curProduct}
            businessId={business?.id}
            onSave={handlerProductAction}
          />
        )}
      </Modal>
      {currentCart?.products && openUpselling && (
        <UpsellingPage
          businessId={currentCart?.business_id}
          business={currentCart?.business}
          cartProducts={currentCart?.products}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessProductsListing = (props) => {
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    isInitialRender,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }

  return (
    <BusinessAndProductList {...businessProductslistingProps} />
  )
}

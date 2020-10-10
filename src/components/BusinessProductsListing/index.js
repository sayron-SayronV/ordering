import React, { useState, useEffect, useCallback } from 'react'
import {
  useApi,
  useLanguage
} from 'ordering-components'

import { ProductsListing } from '../ProductsListing' // move this component in ordering-components

import {
  ProductsContainer,
  WrapContent,
  ProductsNotFound,
  WrapperSearch
} from './styles'

import { NotFoundSource } from '../NotFoundSource'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { ProductForm } from '../ProductForm'
import { Modal } from '../Modal'
import { SearchBar } from '../SearchBar'

const PIXELS_TO_SCROLL = 300

const BusinessProductsListingUI = (props) => {
  const {
    businessState,
    categorySelected,
    searchValue,
    categoryState,
    getNextProducts,
    handleChangeCategory,
    handleChangeSearch
  } = props

  const { business, loading, error } = businessState
  const [, t] = useLanguage()

  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(props.product)

  const onProductClick = (product) => {
    setCurProduct(product)
    setModalIsOpen(true)
  }

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight
    const hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage)
    if (badScrollPosition || categoryState.loading || !hasMore) return
    getNextProducts()
  }, [categoryState])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ProductsContainer>
      {
        !loading && business?.id && (
          <>
            <BusinessBasicInformation
              businessState={businessState}
            />
            <WrapperSearch>
              <SearchBar
                onSearch={handleChangeSearch}
                search={searchValue}
              />
            </WrapperSearch>
            <BusinessProductsCategories
              categories={[{ id: null, name: t('ALL', 'All') }, ...business.categories.sort((a, b) => a.rank - b.rank)]}
              categorySelected={categorySelected}
              onClickCategory={handleChangeCategory}
            />
            <WrapContent>
              <BusinessProductsList
                categories={[{ id: null, name: t('ALL', 'All') }, ...business.categories.sort((a, b) => a.rank - b.rank)]}
                category={categorySelected}
                categoryState={categoryState}
                businessId={business.id}
                onProductClick={onProductClick}
              />
            </WrapContent>
          </>
        )
      }

      <Modal
        width='70%'
        open={openProduct}
        closeOnBackdrop
        onClose={() => setModalIsOpen(false)}
      >
        <ProductForm
          product={curProduct}
          businessId={businessState?.business?.id}
          onSave={handlerProductAction}
        />
      </Modal>
      {loading && (
        <>
          <BusinessBasicInformation
            businessState={{ business: {}, loading: true }}
            isSkeleton
          />
          <BusinessProductsCategories
            categories={[]}
            isSkeleton
          />
          <WrapContent>
            <BusinessProductsList
              categories={[]}
              category={categorySelected}
              categoryState={categoryState}
            />
          </WrapContent>
        </>
      )}

      {
        !loading && business && !Object.keys(business).length && (
          <NotFoundSource
            content={t('NOT_FOUND_BUSINESS_PRODUCTS', 'No products to show at this business, please try with other business.')}
            btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
            onClickButton={props.handleSearchRedirect}
          />
        )
      }

      {
        !loading && !business && (
          <NotFoundSource
            content={t('ERROR_NOT_FOUND_STORE', 'Sorry, an error has occurred with business selected.')}
            btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
            onClickButton={props.handleSearchRedirect}
          />
        )
      }

      {error && error.length > 0 && (
        <ProductsNotFound>
          {error.map((e, i) => (
            <p key={i}>ERROR: [{e.message}]</p>
          ))}
        </ProductsNotFound>
      )}
    </ProductsContainer>
  )
}

export const BusinessProductsListing = (props) => {
  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI
  }

  return (
    <ProductsListing {...businessProductslistingProps} />
  )
}

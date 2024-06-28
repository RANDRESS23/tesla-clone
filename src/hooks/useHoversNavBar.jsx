import { useState, useEffect, useRef, useContext } from 'react'
import { useHover } from 'usehooks-ts'
import { ScrollbarContext } from '../Context/ScrollbarContext'

export const useHoversNavBar = () => {
  const [showContentVehicles, setShowContentVehicles] = useState(false)
  const [showContentEnergy, setShowContentEnergy] = useState(false)
  const [showContentCharging, setShowContentCharging] = useState(false)
  const [showContentDiscover, setShowContentDiscover] = useState(false)
  const [showContentShop, setShowContentShop] = useState(false)

  const hoverLogoRef = useRef(null)
  const isHoverLogo = useHover(hoverLogoRef)
  const hoverSupportRef = useRef(null)
  const isHoverSupport = useHover(hoverSupportRef)
  const hoverLangRef = useRef(null)
  const isHoverLang = useHover(hoverLangRef)
  const hoverAccountRef = useRef(null)
  const isHoverAccount = useHover(hoverAccountRef)

  const hoverVehiclesRef = useRef(null)
  const isHoverVehicles = useHover(hoverVehiclesRef)
  const hoverVehiclesContentRef = useRef(null)
  const isHoverVehiclesContent = useHover(hoverVehiclesContentRef)

  const hoverEnergyRef = useRef(null)
  const isHoverEnergy = useHover(hoverEnergyRef)
  const hoverEnergyContentRef = useRef(null)
  const isHoverEnergyContent = useHover(hoverEnergyContentRef)

  const hoverChargingRef = useRef(null)
  const isHoverCharging = useHover(hoverChargingRef)
  const hoverChargingContentRef = useRef(null)
  const isHoverChargingContent = useHover(hoverChargingContentRef)

  const hoverDiscoverRef = useRef(null)
  const isHoverDiscover = useHover(hoverDiscoverRef)
  const hoverDiscoverContentRef = useRef(null)
  const isHoverDiscoverContent = useHover(hoverDiscoverContentRef)

  const hoverShopRef = useRef(null)
  const isHoverShop = useHover(hoverShopRef)
  const hoverShopContentRef = useRef(null)
  const isHoverShopContent = useHover(hoverShopContentRef)

  const { setScrollbarHidden } = useContext(ScrollbarContext)

  const resetAllContentLinks = () => {
    setShowContentEnergy(false)
    setShowContentCharging(false)
    setShowContentDiscover(false)
    setShowContentShop(false)
    setShowContentVehicles(false)
    setScrollbarHidden(false)
  }

  useEffect(() => {
    if (isHoverLogo || isHoverSupport || isHoverLang || isHoverAccount) {
      resetAllContentLinks()
    }
  }, [isHoverLogo, isHoverSupport, isHoverLang, isHoverAccount])

  useEffect(() => {
    if (isHoverVehicles && !showContentVehicles) {
      resetAllContentLinks()

      setShowContentVehicles(true)
      setScrollbarHidden(true)
    } else if ((!isHoverVehicles && !isHoverVehiclesContent) && showContentVehicles) {
      setShowContentVehicles(false)
      setScrollbarHidden(false)
    }
  }, [isHoverVehicles, isHoverVehiclesContent])

  useEffect(() => {
    if (isHoverEnergy && !showContentEnergy) {
      resetAllContentLinks()

      setShowContentEnergy(true)
      setScrollbarHidden(true)
    } else if ((!isHoverEnergy && !isHoverEnergyContent) && showContentEnergy) {
      setShowContentEnergy(false)
      setScrollbarHidden(false)
    }
  }, [isHoverEnergy, isHoverEnergyContent])

  useEffect(() => {
    if (isHoverCharging && !showContentCharging) {
      resetAllContentLinks()

      setShowContentCharging(true)
      setScrollbarHidden(true)
    } else if ((!isHoverCharging && !isHoverChargingContent) && showContentCharging) {
      setShowContentCharging(false)
      setScrollbarHidden(false)
    }
  }, [isHoverCharging, isHoverChargingContent])

  useEffect(() => {
    if (isHoverDiscover && !showContentDiscover) {
      resetAllContentLinks()

      setShowContentDiscover(true)
      setScrollbarHidden(true)
    } else if ((!isHoverDiscover && !isHoverDiscoverContent) && showContentDiscover) {
      setShowContentDiscover(false)
      setScrollbarHidden(false)
    }
  }, [isHoverDiscover, isHoverDiscoverContent])

  useEffect(() => {
    if (isHoverShop && !showContentShop) {
      resetAllContentLinks()

      setShowContentShop(true)
      setScrollbarHidden(true)
    } else if ((!isHoverShop && !isHoverShopContent) && showContentShop) {
      setShowContentShop(false)
      setScrollbarHidden(false)
    }
  }, [isHoverShop, isHoverShopContent])

  return {
    showContentVehicles,
    showContentEnergy,
    showContentCharging,
    showContentDiscover,
    showContentShop,
    hoverLogoRef,
    hoverSupportRef,
    hoverLangRef,
    hoverAccountRef,
    hoverVehiclesRef,
    hoverVehiclesContentRef,
    hoverEnergyRef,
    hoverEnergyContentRef,
    hoverChargingRef,
    hoverChargingContentRef,
    hoverDiscoverRef,
    hoverDiscoverContentRef,
    hoverShopRef,
    hoverShopContentRef
  }
}

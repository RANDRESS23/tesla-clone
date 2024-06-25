import { useState, useEffect, useRef, useContext } from 'react'
import { useHover } from 'usehooks-ts'
import { ScrollbarContext } from '../Context/ScrollbarContext'

export const useHoversNavBar = () => {
  const [showContentVehicles, setShowContentVehicles] = useState(false)
  const [showContentEnergy, setShowContentEnergy] = useState(false)
  const [showContentCharging, setShowContentCharging] = useState(false)
  const [showContentDiscover, setShowContentDiscover] = useState(false)
  const [showContentShop, setShowContentShop] = useState(false)

  const hoverNavBarRef = useRef(null)
  const isHoverNavBar = useHover(hoverNavBarRef)
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
  const hoverEnergyRef = useRef(null)
  const isHoverEnergy = useHover(hoverEnergyRef)
  const hoverChargingRef = useRef(null)
  const isHoverCharging = useHover(hoverChargingRef)
  const hoverDiscoverRef = useRef(null)
  const isHoverDiscover = useHover(hoverDiscoverRef)
  const hoverShopRef = useRef(null)
  const isHoverShop = useHover(hoverShopRef)

  const { setScrollbarHidden } = useContext(ScrollbarContext)

  const resetAllContentLinks = () => {
    setShowContentEnergy(false)
    setShowContentCharging(false)
    setShowContentDiscover(false)
    setShowContentShop(false)
    setShowContentVehicles(false)
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
    } else if ((!isHoverVehicles && !isHoverNavBar) && showContentVehicles) {
      setShowContentVehicles(false)
      setScrollbarHidden(false)
    }
  }, [isHoverVehicles, isHoverNavBar])

  useEffect(() => {
    if (isHoverEnergy && !showContentEnergy) {
      resetAllContentLinks()

      setShowContentEnergy(true)
      setScrollbarHidden(true)
    } else if ((!isHoverEnergy && !isHoverNavBar) && showContentEnergy) {
      setShowContentEnergy(false)
      setScrollbarHidden(false)
    }
  }, [isHoverEnergy, isHoverNavBar])

  useEffect(() => {
    if (isHoverCharging && !showContentCharging) {
      resetAllContentLinks()

      setShowContentCharging(true)
      setScrollbarHidden(true)
    } else if ((!isHoverCharging && !isHoverNavBar) && showContentCharging) {
      setShowContentCharging(false)
      setScrollbarHidden(false)
    }
  }, [isHoverCharging, isHoverNavBar])

  useEffect(() => {
    if (isHoverDiscover && !showContentDiscover) {
      resetAllContentLinks()

      setShowContentDiscover(true)
      setScrollbarHidden(true)
    } else if ((!isHoverDiscover && !isHoverNavBar) && showContentDiscover) {
      setShowContentDiscover(false)
      setScrollbarHidden(false)
    }
  }, [isHoverDiscover, isHoverNavBar])

  useEffect(() => {
    if (isHoverShop && !showContentShop) {
      resetAllContentLinks()

      setShowContentShop(true)
      setScrollbarHidden(true)
    } else if ((!isHoverShop && !isHoverNavBar) && showContentShop) {
      setShowContentShop(false)
      setScrollbarHidden(false)
    }
  }, [isHoverShop, isHoverNavBar])

  return {
    showContentVehicles,
    showContentEnergy,
    showContentCharging,
    showContentDiscover,
    showContentShop,
    hoverNavBarRef,
    hoverLogoRef,
    hoverSupportRef,
    hoverLangRef,
    hoverAccountRef,
    hoverVehiclesRef,
    hoverEnergyRef,
    hoverChargingRef,
    hoverDiscoverRef,
    hoverShopRef
  }
}

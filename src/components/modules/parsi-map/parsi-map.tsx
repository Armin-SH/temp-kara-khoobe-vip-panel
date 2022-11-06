import React, {useEffect, useRef, useState} from 'react'
import {Button, Div, Image, LoadingIndicator, Media, Text, TextField} from '@elements'
import styles from './parsi-map.module.css'
import {ArrowRightGreyIcon, LocationPrimaryIcon, LocIcon} from '@icons'
import mapboxgl from 'mapbox-gl';
import {ParsiMapProps} from './parsi-map.props'
import MapAutoComplete from './map-auto-complete'
import {AlertActions} from "@store/alert/alert-action";
import {useDispatch} from "react-redux";
import {mapReverseLocationApi} from '@api/address'
import {UserActions} from "@store/user/user-actions";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const LocationPin = () => {
  return (
    <Div desktop={"column"} className={styles.mapPin}>
      <Image
        src={LocationPrimaryIcon}
        alt={"pin"}
        width={68}
        height={98}
        objectFit={"contain"}/>
    </Div>
  )
}

const ParsiMap = (props: ParsiMapProps) => {
  const dispatch = useDispatch();
  const {closeMap, defaultLocation, defaultAddress, defaultTitle, defaultPlate, defaultUnit, addressId} = props;
  const mapContainerRef = useRef(null);
  const map: { current: { on: any, getCenter: any, remove: any, getZoom: any, addControl: any, easeTo: any, flyTo: any, zoomTo: any } } = useRef<any>(null);

  const [location, setLocation] = useState({lat: parseFloat(defaultLocation?.lat) || 35.7723, lng: parseFloat(defaultLocation?.lng) || 51.40141});
  const [currentLocation, setCurrentLocation] = useState({lat: 35.7723, lng: 51.40141});
  const [zoom, setZoom] = useState(15)
  const [addressInfo, setAddressInfo] = useState(!!defaultAddress)
  const [address, setAddress] = useState<string>(defaultAddress || '');
  const [plate, setPlate] = useState<string>(defaultPlate || '');
  const [unit, setUnit] = useState<string>(defaultUnit || '');
  const [title, setTitle] = useState<string>(defaultTitle || '');
  const [errorAddress, setErrorAddress] = useState<boolean>(false);
  const [errorPlate, setErrorPlate] = useState<boolean>(false);
  const [errorUnit, setErrorUnit] = useState<boolean>(false);
  const [errorTitle, setErrorTitle] = useState<boolean>(false);
  const [locationLoading, setLocationLoading] = useState(false)

  useEffect(() => {
    if (mapboxgl.getRTLTextPluginStatus() !== 'loaded') {
      // @ts-ignore
      mapboxgl.setRTLTextPlugin('https://www.parsimap.com/scripts/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js')
    }
  }, [])

  useEffect(() => {
    if (map.current) {
      return;
    }
    map.current = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainerRef.current,
      style: 'https://api.parsimap.ir/styles/parsimap-streets-v11?key=p18ef4315b70b9422395c379e563a1b45fac35b329',
      center: [location.lng, location.lat],
      zoom: zoom,
    });

    map.current.on('dragend', () => {
      setLocation({lat: map.current.getCenter().lat, lng: map.current.getCenter().lng})
      setZoom(parseFloat(map.current.getZoom().toFixed(2)));
    });
    console.log(location)

    map.current.on('zoomend', () => {
      setLocation({lat: map.current.getCenter().lat, lng: map.current.getCenter().lng})
      setZoom(parseFloat(map.current.getZoom().toFixed(2)));
    });

    return () => map.current.remove();
  }, [])

  useEffect(() => {
    if (navigator.geolocation && !defaultLocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCurrentLocation({lat: position.coords.latitude, lng: position.coords.longitude})
        setLocation({lat: position.coords.latitude, lng: position.coords.longitude})
      });
    } else {
      console.log("GeoLocation is not supported by this browser")
    }
  }, []);

  const addressInputHandler = (e: any) => {
    const value = e.target.value;
    setAddress(value);
    setErrorAddress(false);
  };

  const plateInputHandler = (e: any) => {
    const value = e.target.value;
    setPlate(value);
    setErrorPlate(false);
  };

  const unitInputHandler = (e: any) => {
    const value = e.target.value;
    setUnit(value);
    setErrorUnit(false);
  };

  const titleInputHandler = (e: any) => {
    const value = e.target.value;
    setTitle(value);
    if (value) {
      setErrorTitle(false);
    } else {
      setErrorTitle(true)
    }
  }

  const saveAddressHandler = () => {
    if (address && address.length > 0 && plate && plate.length > 0 && unit && unit.length > 0 && location.lng && location.lng && title && title.length > 0) {
      if (defaultAddress) {
        dispatch(UserActions.updateUserAddress({
          address: {
            title: title,
            fullAddress: address,
            number: plate,
            unit: unit,
            geoLat: location?.lat,
            geoLong: location?.lng
          },
          id: addressId,
        }));
      } else {
        dispatch(UserActions.setUserAddress({
          address: {
            title: title,
            fullAddress: address,
            number: plate,
            unit: unit,
            geoLat: location?.lat,
            geoLong: location?.lng
          }
        }));
      }
      closeMap()
    } else if (!address && address.length === 0) {
      setErrorAddress(true);
      dispatch(AlertActions.showAlert({
        text: 'باید آدرس خود را وارد کنید',
        severity: "error"
      }));
    } else if (!plate && plate.length === 0) {
      setErrorPlate(true);
      dispatch(AlertActions.showAlert({
        text: 'باید پلاک خود را وارد کنید',
        severity: "error"
      }));
    } else if (!unit && unit.length === 0) {
      setErrorUnit(true);
      dispatch(AlertActions.showAlert({
        text: 'باید واحد خود را وارد کنید',
        severity: "error"
      }));
    } else if (!title && title.length === 0) {
      setErrorTitle(true);
      dispatch(AlertActions.showAlert({
        text: 'باید عنوان آدرس را وارد کنید',
        severity: "error"
      }));
    }
  };

  const handleCurrentLocation = () => {
    map.current.easeTo({center: [currentLocation?.lng, currentLocation?.lat], zoom: 15, duration: 2000});
  };

  const handleZoomIn = () => {
    map.current.zoomTo(zoom + 1, {duration: 2000});
    setZoom(zoom + 1)
  }

  const handleZoomOut = () => {
    map.current.zoomTo(zoom - 1, {duration: 2000});
    setZoom(zoom - 1)
  }

  const handleAddressInfoModal = async ({state}: { state: boolean }) => {
    if (state) {
      setLocationLoading(true)
      await handleReverseLocation({state: state})
    } else {
      setAddressInfo(state)
    }
  }

  const handleReverseLocation = async ({state}: { state: boolean }) => {
    const res = await mapReverseLocationApi({lat: location.lat, lng: location.lng})
    await setAddress(res?.data?.address)
    await setAddressInfo(state)
    await setLocationLoading(false)
  }

  const setSelectedLocation = (location: any) => {
    map.current.flyTo({center: [location[0], location[1]], zoom: 15, speed: 0.4});
  };

  return (
    <Div className={styles.mapContainer}>
      <Div className={styles.container}>
        <div className={styles.mapContainer} ref={mapContainerRef}/>
        <Div className={styles.marker}>
          <LocationPin/>
        </Div>
      </Div>
      <Div className={styles.topContainer}>
        <MapAutoComplete clientLocation={location} locationCallback={setSelectedLocation}/>
        <Media greaterThan={"sm"}>
          <Button size={"large"} onClick={closeMap} className={styles.returnButton} color={"control"}>
            <Text color={"grey.500"} typography={"small"}>
              بازگشت
            </Text>
          </Button>
        </Media>
        <Media lessThan={"md"}>
          <Button onClick={closeMap} size={'medium'} className={styles.mobileReturnButton} color={"tertiary"}>
            <Div className={styles.returnIcon}>
              <Image src={ArrowRightGreyIcon} alt={"بازگشت"}/>
            </Div>
          </Button>
        </Media>
      </Div>
      <Media greaterThan={"xs"}>
        <Button onClick={handleZoomIn} color={"primary"} variant={"contained"} className={styles.zoomInButton} size={'large'} shape={"square"}>
          <Text color={"common.white"} typography={"large"} type={"bold"}>
            +
          </Text>
        </Button>
        <Button onClick={handleZoomOut} color={"primary"} variant={"contained"} className={styles.zoomOutButton} size={'large'} shape={"square"}>
          <Text color={"common.white"} typography={"large"} type={"bold"}>
            -
          </Text>
        </Button>
      </Media>
      <Button disabled={locationLoading} onClick={() => handleAddressInfoModal({state: true})} className={styles.accept}>
        {locationLoading ? (
          <LoadingIndicator size={"25px"}/>
        ) : (
          <Text color={"common.white"} typography={"small"}>
            تایید موقعیت من
          </Text>
        )}
      </Button>
      <Button onClick={handleCurrentLocation} className={styles.myLocationContainer}>
        <Div className={styles.loc}>
          <Image alt={"loc"} src={LocIcon} layout={"fill"} objectFit={"contain"}/>
        </Div>
        <Div className={styles.divider}/>
        <Text className={styles.locationText} color={"common.white"} typography={"small"}>
          موقعیت من
        </Text>
      </Button>
      {addressInfo ? (
        <Div mobile={"column"} className={styles.addressInfoWrapper}>
          <Div onClick={() => handleAddressInfoModal({state: false})} className={styles.backgroundTransparent}/>
          <Div mobile={"column"} className={styles.addressInfoContainer}>
            <Text color={"grey.500"} typography={"small"}>
              آدرس
            </Text>
            <TextField
              color={"info"}
              onChange={addressInputHandler}
              placeholder={"آدرس خود را وارد کنید"}
              className={styles.addressInfo}
              error={errorAddress}
              value={address}
            />
            <Div className={styles.addressPlateContainer}>
              <TextField
                color={"info"}
                onChange={plateInputHandler}
                placeholder={"پلاک"}
                className={styles.detailsTextField}
                error={errorPlate}
                value={plate}
              />
              <TextField
                color={"info"}
                onChange={unitInputHandler}
                placeholder={"واحد"}
                className={styles.detailsTextField}
                error={errorUnit}
                value={unit}
              />
              <TextField
                color={"info"}
                onChange={titleInputHandler}
                placeholder={"عنوان آدرس"}
                className={styles.titleTextField}
                error={errorTitle}
                value={title}
              />
            </Div>
            <Div className={styles.buttonContainer}>
              <Button variant={"outlined"} color={"secondary"} onClick={() => handleAddressInfoModal({state: false})} className={styles.modalReturnButton}>
                <Text color={"secondary.main"} typography={"small"}>
                  بازگشت
                </Text>
              </Button>
              <Button onClick={saveAddressHandler} className={styles.button}>
                <Text color={"common.white"} typography={"small"}>
                  تایید مبدا
                </Text>
              </Button>
            </Div>
          </Div>
        </Div>
      ) : null}
    </Div>
  )
}

export default ParsiMap;

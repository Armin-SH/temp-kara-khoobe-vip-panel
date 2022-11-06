import React, {useState} from 'react';
import styles from "./map-auto-complete.module.css";
import {Div, Image, ListItem, LoadingIndicator} from '@elements';
import {MapAutoCompleteProps} from './map-auto-complete.props';
import {GraySearchIcon} from '@icons'
import {useDebouncedCallback} from "use-debounce";
import {mapAutoCompleteApi} from '@api/address'


const MapAutoComplete = ({locationCallback, clientLocation}: MapAutoCompleteProps) => {
  const [address, setAddress] = useState('')
  const [predictions, setPredictions] = useState<Array<{ description: string, geo_location: { center: { lat: number, lng: number } } }>>([])
  const [searchLoading, setSearchLoading] = useState(false)

  const getPredictions = useDebouncedCallback(async ({address}: { address: string }) => {
    if (address) {
      const res = await mapAutoCompleteApi({text: address})
      console.log({res})
      await setPredictions(res?.data?.value)
      await setSearchLoading(false)
    }
  }, 500)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    if (e.target.value) {
      await setSearchLoading(true)
      await getPredictions({address: e.target.value})
    }
  }

  const handleSelect = (suggestion: { address: string, geom: { coordinates: Array<number> } }) => {
    locationCallback(suggestion?.geom.coordinates)
    setAddress(suggestion?.address)
    setPredictions([])
  };

  return (
    <Div className={styles.autoCompleteWrapper}>
      <Div className={styles.autoCompleteContainer}>
        <input
          value={address}
          dir={'rtl'}
          onChange={handleChange}
          placeholder={'تهران، جستجوی محدوده'}
          className={styles.input}
        />
        {searchLoading ? (
          <Div className={styles.loading}>
            <LoadingIndicator size={"25px"} color={"info"}/>
          </Div>
        ) : null}
        <Div mobile={"column"} className={styles.autoComplete}>
          {/* @ts-ignore*/}
          {(predictions && predictions.length) ? predictions.map((suggestion: { address: string, geom: { coordinates: Array<number> } }, index: number) => {
            return (
              <Div
                key={`prediction_${index}`}
                className={styles.suggestionWrapperTrue}
              >
                <ListItem onClick={() => handleSelect(suggestion)} className={styles.suggestions}>{suggestion?.address}</ListItem>
              </Div>
            );
          }) : null}
        </Div>
        <Div className={styles.searchIconContainer}>
          <Div className={styles.searchIcon}>
            <Image src={GraySearchIcon} alt={'جستجو'}/>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default MapAutoComplete

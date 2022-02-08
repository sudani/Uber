import React, { useEffect, useState } from "react";

import { View, TextInput, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import API_KEY from "../../../key";
import PlaceRow from "./PlaceRow";
const DestinationSearch = (props) => {
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  const [originPlace, setOriginPlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");

  useEffect(() => {
    if (originPlace && destinationPlace) {
    }
  }, [originPlace, destinationPlace]);
  return (
    // <View >

    //    </View>
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details: null = null) => {
            setOriginPlace({ data, details });
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container:{
              position:'absolute',
              top:0,
              left:10,
              right:10
            },
            listView:{
              position:'absolute',
              top:105
            },
            separator:styles.separator,
          }}
          fetchDetails
          query={{
            key:  API_KEY ,
            language: "en",
          }}
          renderRow={(data:GooglePlaceData) => <PlaceRow data={data}/>}
        />

        <GooglePlacesAutocomplete
          placeholder="Whereeee to?"
          onPress={(data, details: null = null) => {
            setDestinationPlace({ data, details });
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container:{
              position:'absolute',
              top:55,
              left:10,
              right:10
            },
            separator:styles.separator,
          }}
          fetchDetails
          query={{
            key: API_KEY,
            language: "en",
          }}
          renderRow={(data:GooglePlaceData) => <PlaceRow data={data}/>}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

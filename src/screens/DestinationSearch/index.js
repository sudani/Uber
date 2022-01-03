import React, { useEffect, useState } from "react";

import { View, TextInput, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import API_KEY from "../../../key";
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
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key:  API_KEY ,
            language: "en",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Whereeee to?"
          onPress={(data, details: null = null) => {
            setDestinationPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: API_KEY,
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

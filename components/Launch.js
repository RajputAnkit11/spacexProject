import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Field from "./Field";
import FieldLaunch from "./FieldLaunch";

const Launch = ({ data }) => {
  // const route = useRoute();
  // const id  = route.params.id;
  // // const id  = useNavigation().state.params;
  // console.log(data["fairings"].reused);
  // const {
  //   fairings: { reused },
  // } = data;
  // console.log(data);
  return (
    <View style={styles.box}>
      {/* <Text>dfdbdfb </Text> */}
      <Field fieldName="Launch ID" fieldValue={data.id} />
      <Field fieldName="Name" fieldValue={data.name} />
      <Field fieldName="Date" fieldValue={data.date_utc} />
      <Field fieldName="Details" fieldValue={data.details} />
      {/* <Field
        fieldName="Reused"
        fieldValue={reused == true ? "True" : "False"}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#010312",
    padding: 10,
  },
});

export default Launch;

import * as React from "react";
import { SearchBar } from "@rneui/base";

export default ({ placeholder, setValue, value }) => {
  return (
    <SearchBar
      platform="ios"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={(newVal) => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder={placeholder}
      placeholderTextColor="#888"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
};

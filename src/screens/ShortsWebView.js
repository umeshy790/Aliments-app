import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const ShortsWebView = ({route}) => {
  const {uri} = route.params;
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: uri}} />
    </View>
  );
};

export default ShortsWebView;

const styles = StyleSheet.create({});

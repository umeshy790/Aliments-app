/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../theme';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = ({search, toInShorts, toggleTheme}) => {
  const options = ['World', 'Cricket', 'Football', 'Technology'];

  const theme = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.surfaceBackgroundColor,
      }}>
      <View style={{height: 100}} />

      <View
        style={{
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          borderColor: theme.primaryTextColorLight,
          paddingVertical: 5,
        }}>
        {options.map((option) => (
          <TouchableOpacity
            style={styles.btn}
            key={option}
            onPress={() => search(option === 'World' ? null : option)}>
            <Text
              style={{
                ...styles.btnTxt,
                ...theme.font.light,
                color: theme.primaryTextColorLight,
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.block}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{...styles.inShortBtn, backgroundColor: theme.primaryColor}}
            onPress={toInShorts}>
            <Text
              style={{
                ...styles.inShortBtnTxt,
                ...theme.font.medium,
              }}>
              Change To Shorts
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: (40 + 40) / 2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.primaryColor,
            }}
            onPress={toggleTheme}>
            <Icon name="theme-light-dark" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    height: 45,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 300,
  },
  btnTxt: {
    fontSize: 16,
  },
  block: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
  inShortBtn: {
    height: 35,
    width: 180,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inShortBtnTxt: {
    fontSize: 12,
    color: '#ffffff',
  },
});

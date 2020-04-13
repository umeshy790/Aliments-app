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
          borderTopWidth: StyleSheet.hairlineWidth,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: theme.borderColor,
          paddingVertical: 5,
        }}>
        {options.map(option => (
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
            borderTopColor: theme.borderColor,
            borderTopWidth: StyleSheet.hairlineWidth,
            height: 55,
          }}>
          <Icon.Button
            name="lightbulb-on-outline"
            color={theme.primaryColor}
            style={{backgroundColor: theme.surfaceBackgroundColor}}
            size={25}
            onPress={toggleTheme}
          />

          <Icon.Button
            name="text"
            color={theme.primaryColor}
            title="Change To Shorts"
            style={{backgroundColor: theme.surfaceBackgroundColor}}
            size={25}
            onPress={toInShorts}
          />
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
    justifyContent: 'flex-end',
  },
});

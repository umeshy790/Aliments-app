/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Drawer = ({search, toInShorts}) => {
  const options = ['World', 'India', 'Cricket', 'Football', 'Technology'];

  return (
    <View style={styles.container}>
      <View style={{height: 100}} />
      <View style={styles.heading}>
        <View style={styles.divider} />
        <Text style={styles.title}>The Guardian</Text>
        <View style={styles.divider} />
      </View>

      <View
        style={{
          borderBottomWidth: 0.3,
          borderColor: 'rgb(101, 119, 134)',
          paddingBottom: 5,
        }}>
        {options.map(option => (
          <TouchableOpacity
            style={styles.btn}
            key={option}
            onPress={() => search(option === 'World' ? null : option)}>
            <Text style={styles.btnTxt}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.block}>
        <TouchableOpacity style={styles.inShortBtn} onPress={toInShorts}>
          <Text style={styles.inShortBtnTxt}>Change To Shorts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    borderBottomWidth: 0.3,
    borderColor: 'rgb(101, 119, 134)',
  },
  title: {
    color: 'rgb(101, 119, 134)',
    fontSize: 14,
    paddingHorizontal: 14,
  },
  btn: {
    height: 45,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 300,
  },
  btnTxt: {
    fontFamily: 'Merriweather',
    fontSize: 16,
    color: '#202124',
  },
  block: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inShortBtn: {
    marginTop: 10,
    height: 35,
    width: 200,
    // borderWidth: 0.2,
    // borderColor: 'rgb(101, 119, 134)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(29, 161, 242, 1)',
  },
  inShortBtnTxt: {
    fontFamily: 'Merriweather',
    fontSize: 12,
    // color: 'rgb(101, 119, 134)',
    color: '#ffffff',
  },
});

import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Drawer = ({search}) => {
  const options = ['India', 'Cricket', 'Footbal'];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.divider} />
        <Text style={styles.title}>The Gurdian</Text>
        <View style={styles.divider} />
      </View>

      <View>
        {options.map(option => (
          <TouchableOpacity
            style={styles.btn}
            key={option}
            onPress={() => search(option)}>
            <Text style={styles.btnTxt}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    borderWidth: 0.3,
    borderColor: 'rgb(101, 119, 134)',
  },
  title: {
    color: 'rgb(101, 119, 134)',
    fontSize: 14,
    paddingHorizontal: 14,
  },
  btn: {
    marginTop: 20,
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(29, 161, 242)',
    borderRadius: 4,
  },

  btnTxt: {
    fontSize: 16,
    color: 'rgb(29, 161, 242)',
  },
});

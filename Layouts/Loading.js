import React, {useState} from 'react';
import {View, Animated, StyleSheet, FlatList} from 'react-native';

const Loader = props => {
  const {fadeAnim} = props;

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.article, opacity: fadeAnim}}>
        <View style={styles.imageContainer}></View>
        <View style={styles.headingContainer}>
          <View style={styles.title}></View>
          <View style={styles.subTitle}></View>
        </View>
      </Animated.View>
    </View>
  );
};

const Loading = () => {
  const DATA = Array(5).fill(1);
  const [opacity, setOpacity] = useState(1);

  const [fadeAnim] = useState(new Animated.Value(opacity));

  React.useEffect(() => {
    fadeInOutAnimation(opacity);
  }, [opacity]);

  const fadeInOutAnimation = value => {
    Animated.timing(fadeAnim, {
      toValue: value,
      duration: 400,
      useNativeDriver: true,
    }).start(animationDone);
  };

  const animationDone = result => {
    if (result.finished) {
      setOpacity(opacity === 1 ? 0.5 : 1);
    }
  };

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Loader fadeAnim={fadeAnim} />}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },

  article: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
  },

  imageContainer: {
    width: 100,
    borderRadius: 20,
    backgroundColor: '#9d9b9bb0',
  },

  headingContainer: {
    flex: 1,
    padding: 10,
    paddingRight: 0,
    backgroundColor: '#fff',
  },

  title: {
    flex: 3,
    borderRadius: 5,
    backgroundColor: '#9d9b9bb0',
  },

  subTitle: {
    flex: 2,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#9d9b9bb0',
  },
});

export default Loading;

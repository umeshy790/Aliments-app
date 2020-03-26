import React, {useState} from 'react';
import {StyleSheet, Animated, Dimensions, View} from 'react-native';

const FullArticleLoader = () => {
  const items = new Array(10).fill(1);

  const [opacity, setOpacity] = useState(1);

  const [fadeAnim] = useState(new Animated.Value(opacity));

  React.useEffect(() => {
    fadeInOutAnimation(opacity);
  }, [opacity]);

  const fadeInOutAnimation = value => {
    Animated.timing(fadeAnim, {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    }).start(animationDone);
  };

  const animationDone = result => {
    if (result.finished) {
      setOpacity(opacity === 1 ? 0.5 : 1);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{...styles.articleImage, opacity: fadeAnim}}></Animated.View>
      <View style={styles.textContainer}>
        {items.map((item, index) => (
          <Animated.View
            key={index.toString()}
            style={{...styles.textSkeleton, opacity: fadeAnim}}></Animated.View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  articleImage: {
    height: 300,
    backgroundColor: '#9d9b9bb0',
  },
  textContainer: {
    padding: 15,
    flexGrow: 1,
    height: Dimensions.get('window').height - 300,
    backgroundColor: '#fff',
  },
  textSkeleton: {
    height: 22,
    backgroundColor: '#9d9b9bb0',
    marginBottom: 10,
  },
});

export default FullArticleLoader;

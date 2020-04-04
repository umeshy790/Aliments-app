/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {monthDateString} from '../utils/formate';

const TopArticles = ({articles, goToArticle}) => {
  let [currentIndex, setIndex] = useState(0);
  const _scrollRef = useRef(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      _scrollRef.current.scrollTo({
        x: currentIndex * Dimensions.get('window').width,
        animated: true,
      });
      setIndex(currentIndex === 4 ? 0 : ++currentIndex);
    }, 5000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentIndex]);

  function handleSrolling() {
    setIndex(currentIndex === 4 ? 0 : ++currentIndex);
  }

  return (
    <View>
      <ScrollView
        ref={_scrollRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollBegin={handleSrolling}>
        {articles.map((article, index) => (
          <TouchableWithoutFeedback
            key={index.toString()}
            onPress={() => goToArticle(article)}>
            <View style={styles.container}>
              {article.fields ? (
                <Image
                  style={styles.img}
                  source={{
                    uri: article.fields.thumbnail,
                  }}
                />
              ) : null}
              <View style={styles.title}>
                <Text style={styles.heading}>{article.webTitle}</Text>
                <View style={styles.block}>
                  <Text
                    style={{
                      ...styles.subHeading,
                      fontWeight: '700',
                      color: 'rgba(29, 161, 242, 1)',
                    }}>
                    {' '}
                    {article.sectionName.toUpperCase()}
                  </Text>
                  <Text style={styles.subHeading}>
                    {monthDateString(article.webPublicationDate)}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: Dimensions.get('window').width,
  },
  img: {
    height: 300,
  },
  title: {
    position: 'absolute',
    marginHorizontal: 20,
    bottom: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 20,
    opacity: 0.9,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Merriweather',
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
    lineHeight: 26,
  },
  subHeading: {
    fontFamily: 'Merriweather',
    fontSize: 16,
    color: 'rgb(101, 119, 135)',
  },
});

export default TopArticles;

/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect, useContext} from 'react';
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
import {ThemeContext} from '../theme';

const TopArticles = ({articles, goToArticle}) => {
  const theme = useContext(ThemeContext);

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
              <View
                style={{
                  ...styles.title,
                  backgroundColor: theme.surfaceBackgroundColor,
                }}>
                <Text
                  style={{
                    ...styles.heading,
                    ...theme.font.bold,
                    color: theme.primaryTextColor,
                  }}>
                  {article.webTitle}
                </Text>
                <View style={styles.block}>
                  <Text
                    style={{
                      ...styles.subHeading,
                      ...theme.font.bold,
                      color: theme.primaryColor,
                    }}>
                    {' '}
                    {article.sectionName.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      ...theme.font.medium,
                      color: theme.primaryTextColorLight,
                    }}>
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
    fontSize: 16,
    lineHeight: 26,
  },
  subHeading: {
    fontSize: 14,
  },
});

export default TopArticles;

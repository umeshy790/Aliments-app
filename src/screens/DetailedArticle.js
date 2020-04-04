/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Image,
} from 'react-native';
import Error from '../components/Error';
import {monthDateString} from '../utils/formate';
import {ThemeContext} from '../theme';

const GET_ARTICLE_TEXT = gql`
  query Content($id: String!) {
    getContent(id: $id) {
      content {
        fields {
          bodyText
        }
      }
    }
  }
`;

const DetailedArticle = ({route, _}) => {
  const {
    id,
    thumbnail,
    webTitle,
    webPublicationDate,
    sectionName,
  } = route.params;

  const theme = useContext(ThemeContext);

  const {error, data, refetch, networkStatus} = useQuery(GET_ARTICLE_TEXT, {
    variables: {id},
    notifyOnNetworkStatusChange: true,
  });

  async function handleRefech() {
    try {
      await refetch();
    } catch (_) {}
  }

  return (
    <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <Image source={{uri: thumbnail}} style={styles.img} />
      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              ...styles.txtContainer,
              backgroundColor: theme.surfaceBackgroundColor,
            }}>
            {networkStatus === 1 || networkStatus === 4 ? (
              <ActivityIndicator size="large" color={theme.primaryColor} />
            ) : error ? (
              <Error
                message={error.message.split(':')[1]}
                refetch={handleRefech}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    ...styles.txt,
                    ...theme.font.regular,
                    color: theme.primaryTextColor,
                  }}>
                  {webTitle}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 16,
                  }}>
                  <Text
                    style={{
                      ...styles.title,
                      ...theme.font.regular,
                      color: theme.primaryColor,
                    }}>
                    {sectionName.toUpperCase()}
                  </Text>
                  <Text>{monthDateString(webPublicationDate)}</Text>
                </View>
                <Text
                  style={{
                    ...styles.txt,
                    ...theme.font.light,
                    lineHeight: 30,
                    color: theme.primaryTextColorLight,
                  }}>
                  {data.getContent.content.fields.bodyText}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  body: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  txtContainer: {
    flex: 1,
    padding: 16,
    marginTop: 274,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 30,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  txt: {
    fontSize: 18,
    lineHeight: 26,
  },
  title: {
    fontSize: 16,
  },
});

export default DetailedArticle;

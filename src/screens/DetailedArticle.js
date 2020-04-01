/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
    <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.img} />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 275,
              backgroundColor: 'transparent',
            }}
          />
          <View style={styles.txtContainer}>
            {networkStatus === 1 || networkStatus === 4 ? (
              <ActivityIndicator size="large" color="rgba(29, 161, 242, 1)" />
            ) : error ? (
              <Error
                message={error.message.split(':')[1]}
                refetch={handleRefech}
              />
            ) : (
              <View>
                <Text style={{...styles.txt, fontWeight: '700'}}>
                  {webTitle}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 16,
                  }}>
                  <Text style={styles.title}>{sectionName.toUpperCase()}</Text>
                  <Text>{monthDateString(webPublicationDate)}</Text>
                </View>
                <Text style={styles.txt}>
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
    backgroundColor: '#ffffff',
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
    zIndex: 1,
  },
  txtContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: Dimensions.get('window').width - 30,
  },
  txt: {
    fontFamily: 'Merriweather',
    fontSize: 20,
    lineHeight: 30,
    color: '#3C4043',
    textAlign: 'justify',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(29, 161, 242, 1)',
  },
});

export default DetailedArticle;

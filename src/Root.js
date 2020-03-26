/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  DrawerLayoutAndroid,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Article from './views/Article';
import TopArticles from './views/TopArticles';
import Error from './components/Error';

const ARTICLES = gql`
  query getResponse($page: Int!) {
    response(page: $page) {
      total
      results {
        webTitle
        id
        sectionName
        webPublicationDate
        fields {
          thumbnail
        }
      }
    }
  }
`;

const Root = ({navigation}) => {
  let [page, setState] = useState(1);
  const {error, data, fetchMore, networkStatus, refetch} = useQuery(ARTICLES, {
    variables: {page},
    notifyOnNetworkStatusChange: true,
  });

  function handleGoToArticle(result) {
    navigation.navigate('DetailedArticle', {
      id: result.id,
      thumbnail: result.fields.thumbnail,
      webTitle: result.webTitle,
      webPublicationDate: result.webPublicationDate,
      sectionName: result.sectionName,
    });
  }

  useEffect(() => {
    fetchMoreResults();
  }, [fetchMoreResults]);

  const fetchMoreResults = useCallback(() => {
    if (page !== 1) {
      fetchMore({
        variables: {page},
        updateQuery: (prev, {fetchMoreResult}) => {
          console.log(fetchMoreResult);
          if (!fetchMoreResult) {
            return prev;
          }
          return Object.assign({}, prev, {
            response: {
              ...prev.response,
              results: [
                ...prev.response.results,
                ...fetchMoreResult.response.results,
              ],
            },
          });
        },
      });
    }
  }, [fetchMore, page]);

  function handleLoadMore() {
    // setState(++page);
  }

  async function handleRefech() {
    try {
      await refetch();
    } catch (_) {}
  }

  if (error) {
    return (
      <Error message={error.message.split(':')[1]} refetch={handleRefech} />
    );
  }

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={() => null}>
      <View style={styles.container}>
        {networkStatus === 1 || networkStatus === 4 ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0086da" />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <TopArticles
              articles={data.response.results.slice(0, 5)}
              goToArticle={article => handleGoToArticle(article)}
            />
            <View style={styles.bottomContainer}>
              <FlatList
                data={data.response.results.slice(
                  5,
                  data.response.results.length,
                )}
                renderItem={({item}) => (
                  <Article
                    result={item}
                    goToArticle={() => handleGoToArticle(item)}
                  />
                )}
                keyExtractor={(item, index) => `${index}_${item.id}`}
                showsVerticalScrollIndicator={false}
              />
              {/* <TouchableOpacity
                onPress={handleLoadMore}
                style={{height: 40, width: 100}}>
                <Text>Load More</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        )}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 250, 247)',
  },
  bottomContainer: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Root;

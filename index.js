/**
 * @format
 */

import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';

import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import Root from './src/Root';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailedArticle from './src/screens/DetailedArticle';
import {path} from './src/env';
import InShorts from './src/screens/InShorts';
import ShortsWebView from './src/screens/ShortsWebView';
import {ThemeContext, Theme} from './src/theme';
import {setMode, getMode} from './src/utils/properties';

const Stack = createStackNavigator();

const client = new ApolloClient({
  link: new HttpLink({
    uri: path,
  }),
  cache: new InMemoryCache(),
});

function App() {
  const [theme, setTheme] = useState(Theme.lightTheme);

  /**
   * need to improvisation
   */
  function toggleTheme() {
    setMode();
    const mode = getMode();
    setTheme(mode === 'light' ? Theme.lightTheme : Theme.darkTheme);
  }

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={theme}>
        <StatusBar
          backgroundColor={theme.backgroundColor}
          barStyle={theme.barStyle}
        />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Root}
              options={{headerShown: false}}
              initialParams={{
                toggleTheme: () => toggleTheme(),
              }}
            />
            <Stack.Screen
              name="DetailedArticle"
              component={DetailedArticle}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="InShorts"
              component={InShorts}
              options={{headerShown: false}}
            />
            <Stack.Screen name="WebView" component={ShortsWebView} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  FlatList,
  WebView
} from 'react-native';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/bridge2logoLong.png')
                  : require('../assets/images/bridge2logoLong.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>

        </ScrollView>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
      return (
		<ScrollView style={styles.scroll}>			  
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Apple PAT
        </Text>
		</ScrollView>
      );
  }

  _handleLearnMorePress = () => {
    Linking.openURL("https://catalog.pat.cbgrus.uatglobalrewards.com/apple-gr/pages/login.jsp")
  }

}

const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
    flex: 1,
    height: 800
  }, 
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 30,
    color: '#2e78b7',
    textAlign: 'center',
  },
});

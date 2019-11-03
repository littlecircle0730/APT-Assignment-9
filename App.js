/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Animals</Text>
              <Text style={styles.sectionDescription}>
                 <Text style={styles.highlight}>Hey!</Text> View some animals
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.dark,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;


//import React, { Component } from 'react';
//import { ScrollView, Image, Text } from 'react-native';
//
//class Blink extends Component {
//
//  componentDidMount(){
//    // Toggle the state every second
//    setInterval(() => (
//      this.setState(previousState => (
//        { isShowingText: !previousState.isShowingText }
//      ))
//    ), 1000);
//  }
//
//  //state object
//  state = { isShowingText: true };
//
//  render() {
//    if (!this.state.isShowingText) {
//      return null;
//    }
//
//    return (
//      <Text>{this.props.text}</Text>
//    );
//  }
//}
//
//export default class BlinkApp extends Component {
//  render() {
//    return (
//      <View>
//        <Blink text='Dogs' />
//      </View>
//    );
//  }
//}
//
//export default class IScrolledDown extends Component {
//
//  render() {
//      return (
//        <ScrollView>
////          <Text style={{fontSize:75}}>Dogs</Text>
//          <Image source={{uri: "https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg", width: 300, height: 300}} />
//          <Image source={{uri: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg", width: 300, height: 300}} />
//          <Image source={{uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1094874726.png?crop=0.542xw:0.814xh;0.0472xw,0.127xh&resize=640:*", width: 300, height: 300}} />
//          <Text style={{fontSize:75}}>Cats</Text>
//          <Image source={{uri: "https://inteng-storage.s3.amazonaws.com/img/iea/4N610VqxGJ/sizes/cat-cloning_resize_md.jpg", width: 300, height: 300}} />
//          <Image source={{uri: "https://timesofindia.indiatimes.com/thumb/msid-69058419,width-800,height-600,resizemode-4/69058419.jpg", width: 300, height: 300}} />
//          <Image source={{uri: "https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg", width: 300, height: 300}} />
//        </ScrollView>
//    );
//  }
//}

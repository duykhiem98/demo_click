import React, {memo, useCallback} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';


import styled from "styled-components/native";


import YouTube from 'react-native-youtube';



const API_KEY = 'AIzaSyCl3-M4pW-2c-O--X36ZQl5RyKo1wtlb3I';

const {width} = Dimensions.get("window");

export interface YoutubeDetailScreenProps {
  id: string;
}

const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: gray;
  font-weight: bold;
  padding: 6px 16px
`;

const Description = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: gray;
  padding: 6px 16px
`;

const ViewYoutube = styled.View`
  width: ${width}px;
  height: ${9 / 16 * width}px;
  background-color: gray;
`;


const BtnShare = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  padding-left: 4px;
  justify-content: center;
`;

const IconShare = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #fff
`;

export const YoutubeDetailScreen = memo(function YoutubeDetailScreen() {
  return (
    <View style={styles.container}>
          <BtnShare>
            <IconShare source={require('../icon/home.png')}/>
          </BtnShare>

      <ViewYoutube>
            <YouTube
              apiKey={API_KEY}
              videoId={"sqRRZpACzO0"} // The YouTube video ID
              play={true} // control playback of video with true/false
              fullscreen={false} // control whether the video should play in fullscreen or inline
              loop={false} // control whether the video should loop when ended
              controls={1}
              showFullscreenButton={true}
              style={{height: '100%'}}
              />
      </ViewYoutube>

      <ScrollView style={{flex: 1}}>
        <Title>
          Ngươi có thương
        </Title>
        <Description>
          gió
        </Description>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  headerContainer: {
    backgroundColor:'white',
  },
  titleStyle: {
    fontSize: 16,
  },
  headerClose: {
    backgroundColor:'white',
  },
});

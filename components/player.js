import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayer() {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://youtube.com' }} // Substitua pela URL do seu vídeo
        style={styles.videoPlayer}
        controls={true}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    width: 300,
    height: 200,
  },
});
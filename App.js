/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { memo, useCallback } from 'react';
import { View, Pressable, Text } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default memo(() => {
  const handlePress = useCallback(async () => {
    try {
      const result = await launchImageLibrary();
      const formData = new FormData();
      formData.append('content', 'contenido de texto');
      formData.append('file', {
        name: result.assets[0].fileName,
        type: result.assets[0].type,
        uri: result.assets[0].uri
      })

      const response = await fetch('https://crimson-fox-82.webhook.cool', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      });

    } catch (e) {
      console.log(e)
      console.log(e.message)
      console.log(e.response)
      console.log(e.response.data)
    }
  }, []);

  return (
  <View style={{flex:1}}>
    <Pressable onPress={handlePress} style={{backgroundColor: 'green', padding:20}}>
        <Text>Subir</Text>
      </Pressable>
    </View>
  );
})

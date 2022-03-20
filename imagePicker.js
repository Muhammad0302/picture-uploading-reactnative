import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);

      //Axios

    const formData = new FormData();
    formData.append("file", result);
    Axios.put(`https://dhobigaat-backend.herokuapp.com/api/imageUpload/postUser/6182c88cfbc7fa6a18da5f0d`, formData)
    .then(res => {
    console.log('Image uploaded :::::::', res)

              if (res.data.Result === "frequency updated") {

                ToastAndroid.showWithGravity(
                  `Order Frequency Updated to ${orderFrequency}`,
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER
                );
              }
      
  }).catch(err => {
      console.log('ERROR :::: ', err)
  })
    }


  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
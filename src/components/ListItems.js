import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Octicons} from '@expo/vector-icons'


export default function ListItems({ image, title, author, timeseen, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("BlogContent",
        {image: image,
        title: title,
        author: author,
        timeseen: timeseen}
        )}}>
      </TouchableOpacity>
          
        <View style={styles.boxContainer}>
          <View style={styles.lineStyle}></View>
          <View>
            <Image source={image} style={styles.imageText}/>
          </View>
          <View style={{ marginHorizontal: 15, flex: 1 }}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={require('../images/blogImages/pinny.jpg')} style={styles.imgPost} />
              <Text numberOfLines={1} style={{ flex: 1, flexWrap: "wrap" }}>{author}</Text>
              <Octicons name="primitive-dot" size={24} color="pink" />
              <Text style={{ color: "#858585" }}>{timeread}</Text>
            </View>
          </View>
        </View>
     
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3"
  },
  boxContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 7,
    backgroundColor: "#fff",
    height: 150,
    padding: 15,
  },

  imageText:{
     borderWidth:5,
     height:120,
     width:80,
     borderColor:'white'

  },

  imgPost:{
      width:20,
      height:20,
      marginRight:8,
      borderRadius:70
  },
  lineStyle: {
    backgroundColor: "#41588a",
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 80,
    opacity: 0.4
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",

  }
})
import React from 'react'
import {View,StyleSheet,Text,TextInput,TouchableOpacity,Image,ScrollView} from 'react-native' 
import { Ionicons,Feather,AntDesign,EvilIcons ,Octicons} from '@expo/vector-icons';



export default function Blog({route,navigation}){
    const { image, title, author, timeread } = route.params
    return(

        <View style={styles.container}>
            <View style={styles.designText}>
            <View style={styles.contentText}>
                <TouchableOpacity style={styles.arrowText}>
                <Ionicons name="ios-arrow-back" size={30} color="black"  style={{marginHorizontal:10}}/>
                <Text style={styles.textInput}>Nature</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={styles.headText}>
                <TouchableOpacity style={{marginHorizontal:8}}>
                <Feather name="headphones" size={24} color="black" />
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginHorizontal:8}}>
                <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                        <EvilIcons name="share-google" size={30} color="black" style={{ marginHorizontal: 7 }} />
                    </TouchableOpacity>
            </View>
            


            <ScrollView showsVerticalScrollIndicator={false} style={styles.blogContent}>
                <View style={styles.imgText}>
                    <Image source={require('../images/blogImages/dive.jpg')}/>
                </View>

                <View style={{paddingHorizontal: 10, backgroundColor: "white"}}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                <View style={styles.innText}>
                    <Image source={require('../images/ContentImages/airy.jpg')} style={styles.sourceText} />
                   < Text style={styles.author}>{author}</Text>
                   <Octicons name="primitive-dot" size={24} color="pink" />
                        <Text style={{ color: "#858585" }}>{timeseen}</Text>
                </View>

                <View style={styles.textInput}>
                    <Text>Nature, in the broadest sense, is the natural, physical, 
                        or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, 
                        human activity is often understood as a separate category from other natural phenomena.[1]</Text>

                
                        <Text style={{ marginBottom: 15, color: "#666666" }}>
                        Despite the fact that stress has adverse effects on our life, we still deny admitting that this could be a mental disorder. 
            Leading a stressful life hinders our efficiency and lessens our ability to live a healthy and happy life.
             Being stressed, you may fall sick more often, can feel grumpy and even irritated too.

          Our hectic schedules and a number of responsibilities have greatly contributed to this condition and it is important to know the ways that could alleviate stressful conditions.
          Where meditation could decrease the level of stress, indulging in physical activities is another way to get rid of it. 
          So, here are a few ways that should be followed for a stress-free life...



          Make a list of things that make you happy and optimistic. 
          This technique will help to ease your stress in a positive manner. 
          Also, make a list of work that you need to do or could accomplish in a day. 
          The best suggestion would be to make a to-do list wherein you list all the activities, assignments or any other tasks that you need to complete. 
          This is a good way of staying focused and organized and also completing all the tasks without thinking too much about them.
                </Text>
                        <Text style={{ marginBottom: 15, color: "#666666" }}>
                             Despite the fact that stress has adverse effects on our life, we still deny admitting that this could be a mental disorder. 
            Leading a stressful life hinders our efficiency and lessens our ability to live a healthy and happy life.
             Being stressed, you may fall sick more often, can feel grumpy and even irritated too.

          Our hectic schedules and a number of responsibilities have greatly contributed to this condition and it is important to know the ways that could alleviate stressful conditions.
          Where meditation could decrease the level of stress, indulging in physical activities is another way to get rid of it. 
          So, here are a few ways that should be followed for a stress-free life...



          Make a list of things that make you happy and optimistic. 
          This technique will help to ease your stress in a positive manner. 
          Also, make a list of work that you need to do or could accomplish in a day. 
          The best suggestion would be to make a to-do list wherein you list all the activities, assignments or any other tasks that you need to complete. 
          This is a good way of staying focused and organized and also completing all the tasks without thinking too much about them.
                     </Text>
                </View>
                </View>
            </ScrollView>
        </View>
                

           
           

                
   
    );
}
   

const styles=StyleSheet.create({
    container:{
       flexDirection:'column',
       justifyContent:'center'
    },
    designText:{
        position: "absolute",
        top: 5,
        height: 250,
        width: 200,
        backgroundColor: "#93c4bf",
        
    },
    contentText:{
        flexDirection: "row",
        marginTop: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        
    },
    arrowText:{
        flexDirection: 'row',
        paddingTop: 10,
        alignSelf: 'center',
    

    
    },
    innText:{
        flexDirection:'row'
    },
    

    blogContent:{
          marginHorizontal:40
    },

    textInput:{
       fontSize:20,
       fontWeight:'bold',
       

    },
    headText:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight: 10,
        justifyContent: 'flex-end',
        paddingTop:35,
        

    },
    imgText:{
        height:350,
        width:250,
        marginTop:30,
        alignSelf:'center',
        borderWidth:15,
        borderColor:'white'

        
    },
    sourceText:{
        height:30,
        width:30,
        marginRight:10,
        borderRadius:30,
        
        
    }

})




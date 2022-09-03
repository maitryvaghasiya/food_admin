// import { View, Text, ScrollView,StyleSheet,StatusBar, TextInput,FlatList, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// export default function Pannel() {

//     const DataPannel =[
//         {
//             id: 1,
//             number : 1,
//             name : "Pizza",
//             type : "FastFood",
//             price : 200,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 2,
//             number : 2,
//             name : "Pizza",
//             type : "FastFood",
//             price : 210,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 3,
//             number : 3,
//             name : "Pizza",
//             type : "FastFood",
//             price : 300,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 4,
//             number : 4,
//             name : "Pizza",
//             type :"FastFood",
//             price : 320,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 5,
//             number : 5,
//             name : "Pizza",
//             type : "FastFood",
//             price : 250,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 6,
//             number : 6,
//             name : "Pizza",
//             type : "FastFood",
//             price : 400,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 1,
//             number : 1,
//             name : "Pizza",
//             type : "FastFood",
//             price : 200,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 2,
//             number : 2,
//             name : "Pizza",
//             type : "FastFood",
//             price : 210,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 3,
//             number : 3,
//             name : "Pizza",
//             type : "FastFood",
//             price : 300,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 4,
//             number : 4,
//             name : "Pizza",
//             type :"FastFood",
//             price : 320,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 5,
//             number : 5,
//             name : "Pizza",
//             type : "FastFood",
//             price : 250,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 6,
//             number : 6,
//             name : "Pizza",
//             type : "FastFood",
//             price : 400,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 1,
//             number : 1,
//             name : "Pizza",
//             type : "FastFood",
//             price : 200,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 2,
//             number : 2,
//             name : "Pizza",
//             type : "FastFood",
//             price : 210,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 3,
//             number : 3,
//             name : "Pizza",
//             type : "FastFood",
//             price : 300,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 4,
//             number : 4,
//             name : "Pizza",
//             type :"FastFood",
//             price : 320,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 5,
//             number : 5,
//             name : "Pizza",
//             type : "FastFood",
//             price : 250,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 6,
//             number : 6,
//             name : "Pizza",
//             type : "FastFood",
//             price : 400,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 1,
//             number : 1,
//             name : "Pizza",
//             type : "FastFood",
//             price : 200,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 2,
//             number : 2,
//             name : "Pizza",
//             type : "FastFood",
//             price : 210,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 3,
//             number : 3,
//             name : "Pizza",
//             type : "FastFood",
//             price : 300,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 4,
//             number : 4,
//             name : "Pizza",
//             type :"FastFood",
//             price : 320,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 5,
//             number : 5,
//             name : "Pizza",
//             type : "FastFood",
//             price : 250,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 6,
//             number : 6,
//             name : "Pizza",
//             type : "FastFood",
//             price : 400,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 1,
//             number : 1,
//             name : "Pizza",
//             type : "FastFood",
//             price : 200,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 2,
//             number : 2,
//             name : "Pizza",
//             type : "FastFood",
//             price : 210,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 3,
//             number : 3,
//             name : "Pizza",
//             type : "FastFood",
//             price : 300,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 4,
//             number : 4,
//             name : "Pizza",
//             type :"FastFood",
//             price : 320,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 5,
//             number : 5,
//             name : "Pizza",
//             type : "FastFood",
//             price : 250,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//         {
//             id: 6,
//             number : 6,
//             name : "Pizza",
//             type : "FastFood",
//             price : 400,
//             edit: <AntDesign name={'edit'} style={styles.searchicon} />,
//             dlt : <AntDesign name={'delete'} style={styles.searchicon} />,
//         },
//     ]

//     const DPannel = ({item}) => {
//         return(
//         <View style={{flexDirection:"row"}}>
//             <View style={{flexDirection:"row",marginRight:40,marginBottom:10}}>
//             <Text style={{color:"black",marginRight:50}}>{item.number}</Text>
//             <Text style={{color:"black",marginRight:50}}>{item.name}</Text>
//             <Text style={{color:"black",marginRight:60}}>{item.type}</Text>
//             <Text style={{color:"black",marginRight:15}}>{item.price}</Text>
//             </View>
//            <View style={{flexDirection:"row"}}>
//            <TouchableOpacity>
//             <Text style={{color:"black"}}>{item.edit}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//             <Text style={{color:"black",marginLeft:10}}>{item.dlt}</Text>
//             </TouchableOpacity>
//            </View>
//         </View>
        
//         )

//     }
//   return (
    
//     <ScrollView style={styles.screen}>
//         <StatusBar backgroundColor = "#F4F6F7"  barStyle = "dark-content"    />
//         <View style={styles.container}>
//             <View style={styles.head}>
//                 <Text style={styles.invent}>FoodieZone Inventery</Text>
//             </View>

//             <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18 }}>
//           <View style={styles.searchbox} >
//             <Feather name={'search'} style={styles.searchicon} />
//             <TextInput style={styles.searchtext} placeholder="Search" />
//           </View>
//         </View>

//         <View style={{marginTop:20}}>
//             <View style={{flexDirection:"row",marginBottom:10}}>
//                 <Text style={{color:"black",marginRight:30,fontWeight:"700",fontSize:18}}>No.</Text>
//                 <Text style={{color:"black",marginRight:55,fontWeight:"700",fontSize:18}}>item</Text>
//                 <Text style={{color:"black",marginRight:70,fontWeight:"700",fontSize:18}}>type</Text>
//                 <Text style={{color:"black",fontWeight:"700",fontSize:18}}>price</Text>
//             </View>
//           <FlatList
//             // numColumns={1}
//             // horizontal
//             data={DataPannel}
//             renderItem={DPannel}
//             keyExtractor={item => item.id}
//           >
//           </FlatList>
          
//         </View>

//         </View>
//     </ScrollView>
//   )
// }

// let styles=StyleSheet.create({
//     screen: {
//         // flex: 1,
//         backgroundColor: "#F4F6F7"
//     },
//     container: {
//         margin: 18,
//         // display:"flex"
//         position: "relative",
//     },
//     head:{
//         // textAlign:"center",
//         alignItems:"center"

//     },
//     invent:{
//         fontSize:22,
//         fontWeight:"700",
//         color:"#32B768",
//         letterSpacing:2
//     },
//     searchbox: {
//         height: 36,
//         width: 280,
//         borderRadius: 20,
//         backgroundColor: "#E6E7E9",
//         flexDirection: 'row',
//       },
//       searchtext: {
//         fontSize: 12,
//         color: '#9CA3AF',
//         marginLeft: 6,
//       },
//       searchicon: {
//         fontSize: 15,
//         color: '#9CA3AF',
//         marginTop: 10,
//         marginBottom: 10,
//         marginLeft: 27
    
//       },
// })




import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Button } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Pannel({navigation}) {

  const ADDMINPANELDATA = [
    {
      id: 1,
      image: require("../../assets/image/burger.webp"),
   
      product: 'Burger',
    },
    {
      id: 2,
      image: require("../../assets/image/sand.jpg"),
      product: 'Sandwich'
    },
    {
      id: 3,
      image: require("../../assets/image/lapinozz1.jpg"),
      product: 'Pizza'
    },
    {
      id: 4,
      image: require("../../assets/image/fries.jpg"),
      product: 'Fries'
    },
    {
      id: 5,
      image: require("../../assets/image/chikenbiri.jpg"),
      product: 'Biriyani'
    },
    {
      id: 6,
      image: require("../../assets/image/food2.jpg"),
      product: 'Dhosa'
    },
    {
      id: 7,
      image: require("../../assets/image/shake.webp"),
      product: 'Shakes'
    },
    {
      id: 8,
      image: require("../../assets/image/food8.webp"),
      product: 'Chaat'
    },
    
  ]

  const PenalDATA = ({ item }) => {

    return (
      <TouchableOpacity >
        <View style={Styles.card}>
          <Image style={Styles.images1} source={item.image} />

          <Text style={Styles.cardText}>{item.product}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Entypo name='pencil' style={Styles.pen} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name='delete' style={Styles.delet} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView>
      <View style={{margin:16}}>
        <View style={Styles.CurdBox}>
          <View>
            <Text style={Styles.curdText}>Product</Text>
          </View>
        </View>
        <View>
          <FlatList
            numColumns={2}
            data={ADDMINPANELDATA}
            renderItem={PenalDATA}
            keyExtractor={item => item.id}
          />

        </View>
      </View>
      <TouchableOpacity  onPress={() => navigation.navigate('AddS')}>
        <View style={{ flex: 1 }}>
          <View style={Styles.btn} >
            <Text style={{fontSize:25,height:60,width:60,textAlign:'center',textAlignVertical:'center',color:'white'}}>+</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  images1: {
    height: 240,
    width: 175,
    borderRadius: 5,
    alignSelf: 'center'
  },
  CurdBox: {
    flexDirection: 'row',
    backgroundColor: "#32B768",
    height: 60,
    justifyContent: 'space-between',
    borderRadius:10,
    marginBottom:10
  },
  curdText: {
    color: 'white',
    fontSize: 25,
    top: 10,
    left: 20
  },
  CurdIcon: {
    top: 15,
    right: 20,
    color: 'white',
    fontSize: 25,
  },
  card: {
    height: 290,
    width: 175,
    backgroundColor: '#F3F3F3',
    marginBottom: 15,
    marginLeft: 15,
    // marginRight: 15,
    marginTop: 10,
    alignSelf: 'center'

  },
  cardText: {
    top: 15,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: 5,
  },
  PlusIcon: {
    fontSize: 35,
    color: "#3498DB",
    alignSelf: 'flex-end',
    right: 20

  },
  pen: {
    color: 'black',
    fontSize: 18,
    left: 120,
    bottom: 5
  },
  delet: {
    color: 'black',
    fontSize: 18,
    left: 120,
    bottom: 5

  },
  btn: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'flex-end',
    right: 10,
    backgroundColor: "#32B768",
    borderRadius:60
  }

})
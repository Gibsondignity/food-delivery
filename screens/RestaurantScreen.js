import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import DishRow from '../components/dishRow';
import CardIcon from '../components/cardIcon';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';


export default function RestaurantScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;

  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(item && item.id){
      dispatch(setRestaurant({...item}))
    }
  }, [])


  

  return (
    <View>

      <CardIcon />
      <StatusBar style="light"/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="w-4 h-4" />
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">
                  {item.reviews} . <Text className="font-semibold">{item.category} </Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {
            item.dishes.map((dish, index) => <DishRow item={{...dish}} key={index}/>)
          }

        </View>
      </ScrollView>
    </View>
  )
}
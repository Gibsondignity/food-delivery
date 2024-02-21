import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { featured } from '../constants' 
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation()
  return (
    <SafeAreaView className="bg-white flex-1">

      {/* back button */}
        <View className="relative py-4 shadow-sm">
            <TouchableOpacity
                style={{backgroundColor: themeColors.bgColor(1)}}
                className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                onPress={() => navigation.goBack()}
            >
                <Icon.ArrowLeft strokeWidth={3} stroke="white" />
            </TouchableOpacity>
            <View>
                <Text className="text-center font-bold text-xl">Your cart</Text>
                <Text className="text-center text-gray-500">{restaurant.name}</Text>
            </View>
        </View>

        <View 
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center "
        >
            <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
            <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>

            <TouchableOpacity>
                <Text className="font-bold" style={{color: themeColors.text}}>Change</Text>
            </TouchableOpacity>

        </View>

        {/* Dishes */}
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 50
            }}
            className="bg-white pt-5"
        >
            {
                restaurant.dishes.map((dish, index)=>{
                    return(
                        <View key={index}
                            className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                        >
                            <Text className="font-bold " style={{color: themeColors.text}}>
                                2 x
                            </Text>
                            <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                            <Text className="flex-1 font-bold text-green-700">{dish.name}</Text>
                            <Text className="font-semibold text-base">{dish.price}</Text>
                            <TouchableOpacity
                                className="p-1 rounded-full"
                                style={{backgroundColor: themeColors.bgColor(1)}}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>


    </SafeAreaView>
  )
}
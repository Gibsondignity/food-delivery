import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";

export default function DeliveryScreen() {

    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    return (
        <View className="flex-1">
            {/* map view */}
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType='standard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.address}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>

            {/* delivery info */}
            <View className="rounded-t-3xl -mt-12 bg-white">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival Time</Text>
                        <Text className="text-3xl text-gray-700 font-extrabold">20-30 minutes</Text>
                        <Text className="mt-2 text-gray-700 font-extrabold">Your order is on its way</Text>
                    </View>
                    <Image source={require('../assets/images/bikeGuy2.gif')} className="w-24 h-24 mx-auto" />
                </View>
            </View>
            <View
                style={{ backgroundColor: themeColors.bgColor(0.8) }}
                className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">

                <View className="p-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,255, 0.4' }}>
                    <Image source={require('../assets/images/deliveryGuy.png')} className="w-16 h-16 rounded-full" />
                </View>
                <View className="flex-1 ml-3">
                    <Text className="text-lg font-bold text-white"> Gibson Dignity</Text>
                    <Text className="font-semibold text-white"> Your Rider</Text>
                </View>
                <View className="flex-row items-center space-x-3 mr-3">
                    <TouchableOpacity className="bg-white p-2 rounded-full">
                        <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)}  />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white p-2 rounded-full" onPress={()=>{navigation.navigate('Home')}}>
                        <Icon.X strokeWidth={5} stroke={'red'}  />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
import { View, Text, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>
      {/* Search  Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="grey" />
            <TextInput placeholder='Search Food Items' className="ml-2 flex-1" />
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
              <Icon.MapPin height="20" width="20" stroke="grey" />
              <Text className="text-gray-600">Tema, Accra</Text>
            </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
          <Icon.Sliders height="20" width="20" stroke="white" strokewidth={2.5}/>
        </View>
      </View>

      {/* Categories */}
      <ScrollView showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
          paddingBottom: 20
        }}
        >

          {/* categories */}
          <Categories />


          {/* featured */}
          <View className="mt-5">
            {
              [featured, featured, featured].map((item, index) => {
                return(
                  <FeaturedRow 
                    key={index}
                    title={item.title}
                    description={item.description}
                    restaurants={item.restaurants}
                  />
                )
              })
            }
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
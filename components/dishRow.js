import { View, Text, Image } from 'react-native'
import React from 'react'

export default function DishRow({item}) {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" style={{height: 100, width: 100}} source={item.image} />
    </View>
  )
}
import React, { useEffect, useState } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Movies(key){

    const [favorites, setFavorites ] =useState(null)

    return(

        <View>
            <Text>Filmes Favoritos</Text>
            <View></View>
            
        </View>
    )
   
}
export default Movies;
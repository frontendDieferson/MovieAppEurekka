import React, { useEffect, useState } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

import api, { key } from '../../services/api'
import { View, Text } from 'react-native'

function Movies(){
    return(
        <View>
            <Text>Filmes Favoritos</Text>
        </View>
    )
   
}
export default Movies;
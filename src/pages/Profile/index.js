import React, { useState, useContext } from 'react'

import firebase from '../../config/firebaseConnection'

import * as ImagePicker from 'expo-image-picker';


import {
  Container,
  Name,
  Email,
  Button,
  ButtonText,
  UploadButton,
  UploadText,
  Avatar,
  ModalContainer,
  ButtonBack,
  Input
} from './styles'

import { Feather } from '@expo/vector-icons'

import { Modal } from 'react-native'

import { useNavigation } from '@react-navigation/native'

function Profile() {

  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState('')
  const navigation = useNavigation()

  //Função para deslogar o usuário
  function logoutFirebase() {
    firebase.auth().signOut().then(() => {
      navigation.navigate('SingIn')
    }).catch((error) => {
      console.log('erro')
    })
  }

  // seta o novo nome do usuário
  async function updateProfile(){
    setNome(nome)
    navigation.navigate('Profile')
  }

  // Função para fazer upload do avatar
  const uploadFile = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container>
      <ButtonBack 
      style={{backgroundColor: '#000'}}
      onPress={() => navigation.navigate('Home')}>
            <Feather name="arrow-left"
              size={22}
              color="#fff"
            />
            
          </ButtonBack>
      {image ? (
        <UploadButton onPress={() => uploadFile()}>
          <UploadText>+</UploadText>
          <Avatar source={{ uri: image }} />
        </UploadButton>
      ) : (
        <UploadButton onPress={() => uploadFile()}>
          <UploadText>+</UploadText>
        </UploadButton>
      )}

      <Name>{nome}</Name>

      <Button bg="#FEE03B" onPress ={() => setOpen(true)}>
        <ButtonText color="black">Atualizar perfil</ButtonText>
      </Button>

      <Button bg="#ccc" onPress={logoutFirebase}>
        <ButtonText color="black">Sair</ButtonText>
      </Button>

      <Modal visible={open} animationType="slide" transparent={true}>
        <ModalContainer>
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather name="arrow-left"
              size={22}
              color="#121212"
            />
            <ButtonText color="#121212">Voltar</ButtonText>
          </ButtonBack>

          <Input
            placeHolder="teste nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Button bg="#FEE03B" onPress={updateProfile}>
            <ButtonText color="black">Salvar</ButtonText>
          
          </Button>
        </ModalContainer>

      </Modal>

    </Container>
  )
}

export default Profile
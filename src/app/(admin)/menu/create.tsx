import Button from '@/src/components/Button';
import { defaultPizzaImg } from '@/src/components/ProductListItem';
import Colors from '@/src/constants/Colors';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, sty } from 'react-native';

const CreateProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const resetFields = () => {
        setName('');
        setPrice('');
    }

    const validateInput = () => {
        setError('')
        if(!name){
            setError("Name is required");
            return false;
        }
        if(!price){
            setError('Price is required');
            return false;
        }
        if(isNaN(parseFloat(price))){
            setError("Price is not a number!!");
            return false;
        }
        return true;
    }

    const onCreate = () => {
        if(!validateInput()){
            return;
        }
        console.warn("Creating product!!", name);

        resetFields();
    }

  return (
    <View style = {styles.container}>
        <Image source={{uri: defaultPizzaImg}} style={styles.img}></Image>
        <Text style={styles.textImg}>Select Image</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='name'/>
      <Text style={styles.label}>Price ($)</Text>
      <TextInput value={price} onChangeText={setPrice} style={styles.input} placeholder='9.99' keyboardType='numeric'/>
      <Text style={{color: 'red'}}>{error}</Text>
      <Button text='Create' onPress={onCreate}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    label: {
        color: 'gray',
        fontSize: 16,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    img: {
        width: '50%',
        aspectRatio: 1,
        alignSelf: 'center'
    },
    textImg: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10
    }
})

export default CreateProductScreen
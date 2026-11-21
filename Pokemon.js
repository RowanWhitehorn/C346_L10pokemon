import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity, Alert, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const datasource = [
    {
        data: [
            {name: 'Pikachu', card: '25'},
            {name: 'Raichu', card: '26'}
        ],
        title: "Electric",
        bgColor: 'yellow',
        icon: 'bolt-lightning'
    },
    {
        data: [
            {name: 'Charmeleon', card: '5'},
            {name: 'Charizard', card: '6'}
        ],
        title: "Fire",
        bgColor: 'orange',
        icon: 'fire'
    }
];

const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}
                          onPress={() => {
                              Alert.alert(item.name + " selected!")
                          }}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image
                source={{uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card + '-2x.png'}}
                style={styles.pokemonImage}/>
            {/*<Text style={styles.textStyle}>{index+1}. {section.title} {item.name}</Text>*/}
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>L10 Pokemon List</Text>
            {/*<FlatList data={datasource} renderItem={renderItem}/>*/}

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                    Alert.alert('Add Pokemon');
                }}
            >
                <Text style={styles.buttonText}>ADD POKEMON</Text>
            </TouchableOpacity>

            <SectionList sections={datasource}
                         contentContainerStyle={{padding: 10}}
                         renderItem={renderItem}
                         renderSectionHeader={({section: {title, bgColor, icon}}) => (
                             <View style={[styles.headerContainer, {backgroundColor: bgColor}]}>
                                 <FontAwesome6 name={icon} size={20} color="black"/>
                                 <Text style={styles.headerText}>{title}</Text>
                             </View>
                         )}

                         keyExtractor={(item) => item.name}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 15
    },

    addButton: {
        backgroundColor: '#2196F3',
        padding: 12,
        marginHorizontal: 20,
        marginBottom: 5,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },

    opacityStyle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#E8EAF9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
        fontWeight: 'bold',
        flexShrink: 1
    },

    pokemonImage: {
        width: 170,
        height: 230,
        resizeMode: 'contain'
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderWidth: 1
    },

    headerText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 8
    }

});
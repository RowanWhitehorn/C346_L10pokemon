import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image} from 'react-native';
import {FontAwesome6, MaterialCommunityIcons} from '@expo/vector-icons';

const datasource = [
    {
        title: 'Winx Fairies',
        bgColor: '#F8D7E9',
        textColor: '#B82E79',
        icon: 'wand-magic-sparkles',
        iconFamily: 'FontAwesome6',
        imageEnding: '-1465-2056.png',
        data: [
            [
                {
                    name: 'Bloom',
                    card: '76ec144311509d8328c0eeeaee351d7c',
                    power: 'Dragon Flame',
                    bgColor: '#FFE5D4',
                    textColor: '#B84E20',
                    icon: 'fire',
                    iconFamily: 'FontAwesome6',
                    funFact: 'Bloom was born on Domino (also known as Sparks) but grew up on Earth in the city of Gardenia.'
                },
                {
                    name: 'Flora',
                    card: '78ceedb7d15b0730d8dba7f0a4a3033e',
                    power: 'Nature Magic',
                    bgColor: '#E1F4DC',
                    textColor: '#267143',
                    icon: 'flower',
                    iconFamily: 'MaterialCommunityIcons',
                    funFact: 'Flora comes from Lynphea, a magical planet filled with beautiful flowers, plants, and forests.'
                }
            ],
            [
                {
                    name: 'Stella',
                    card: '6b05cec6fd6f4f2f534c61a57baca26a',
                    power: 'Sun and Moon',
                    bgColor: '#FFF0C7',
                    textColor: '#A66B13',
                    icon: 'sun',
                    iconFamily: 'FontAwesome6',
                    funFact: 'Stella comes from Solaria, a kingdom known for its sunshine and royal family.'
                },
                {
                    name: 'Musa',
                    card: 'abb17f3daabdf15540b7009d8c857db6',
                    power: 'Music Magic',
                    bgColor: '#E9DFFC',
                    textColor: '#7431A8',
                    icon: 'music',
                    iconFamily: 'FontAwesome6',
                    funFact: 'Musa comes from Melody, a magical planet where music and harmony are an important part of life.'
                }
            ],
            [
                {
                    name: 'Tecna',
                    card: '7c1c745bca8b261dec80abfe2dc6c0eb',
                    power: 'Technology Magic',
                    bgColor: '#ddfcdf',
                    textColor: '#17a44f',
                    icon: 'diamond',
                    iconFamily: 'MaterialCommunityIcons',
                    funFact: 'Tecna comes from Zenith, a futuristic planet known for its advanced technology.'
                },
                {
                    name: 'Aisha',
                    card: '6d831816acfbc79cb3762dee96f78767',
                    power: 'Morphix Magic',
                    bgColor: '#ddfcfb',
                    textColor: '#1766A4',
                    icon: 'water',
                    iconFamily: 'MaterialCommunityIcons',
                    funFact: 'Aisha comes from Andros, a magical kingdom known for its oceans and underwater environments.'
                }
            ]
        ]
    },
    {
        title: 'Trix Witches',
        bgColor: '#E2D2F3',
        textColor: '#6e1ca5',
        icon: 'crystal-ball',
        iconFamily: 'MaterialCommunityIcons',
        imageEnding: '-1466-2056.png',
        data: [
            [
                {
                    name: 'Darcy',
                    card: 'aa37c5cdc72988325a099607b6a76785',
                    power: 'Dark Magic',
                    bgColor: '#E7DDF9',
                    textColor: '#6241A5',
                    icon: 'star-four-points',
                    iconFamily: 'MaterialCommunityIcons',
                    funFact: 'Darcy\'s exact homeworld is not clearly revealed in the original series. She is known for studying dark magic at Cloud Tower.'
                },
                {
                    name: 'Icy',
                    card: '540b0971a0db5a82bbe20e2f064911a5',
                    power: 'Ice Magic',
                    bgColor: '#DFE9FA',
                    textColor: '#205C9A',
                    icon: 'snowflake',
                    iconFamily: 'FontAwesome6',
                    funFact: 'Icy\'s home is revealed to be Dyamond, a world that was transformed into a frozen wasteland.'
                }
            ],
            [
                {
                    name: 'Stormy',
                    card: '267cbbff2bd2dabea7c09799305e8555',
                    power: 'Storm Magic',
                    bgColor: '#F7DEF2',
                    textColor: '#A32E79',
                    icon: 'bolt',
                    iconFamily: 'FontAwesome6',
                    funFact: 'Stormy\'s exact homeworld is also not clearly revealed. Like the other Trix, she studied witchcraft at Cloud Tower.'
                }
            ]
        ]
    }
];

const CharacterIcon = ({name, family, color, size = 15}) => {
    if (family === 'MaterialCommunityIcons') {
        return (
            <MaterialCommunityIcons
                name={name}
                size={size}
                color={color}
            />
        );
    }

    return (
        <FontAwesome6
            name={name}
            size={size}
            color={color}
        />
    );
};

const renderItem = ({item, section, onCharacterPress}) => {
    return (
        <View style={[
            styles.cardRow,
            item.length === 1 && {justifyContent: 'center'}
        ]}>
            {item.map((character) => (
                <TouchableOpacity
                    key={character.name}
                    style={[
                        styles.characterCard,
                        {backgroundColor: character.bgColor}
                    ]}
                    onPress={() => onCharacterPress(character)}
                >
                    <Image
                        source={{
                            uri: 'https://static-sg.kayouofficial.com/overseas/website/2026/10/12/' +
                                character.card + section.imageEnding
                        }}
                        style={styles.characterImage}
                    />

                    <View style={styles.nameContainer}>
                        <CharacterIcon
                            name={character.icon}
                            family={character.iconFamily}
                            color={character.textColor}
                        />

                        <Text style={[
                            styles.characterName,
                            {color: character.textColor}
                        ]}>
                            {character.name}
                        </Text>

                        <CharacterIcon
                            name={character.icon}
                            family={character.iconFamily}
                            color={character.textColor}
                        />
                    </View>

                    <Text style={[
                        styles.powerText,
                        {color: character.textColor}
                    ]}>
                        {character.power}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default function App() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>
                    MY MAGICAL COLLECTION
                </Text>

                <View style={styles.titleRow}>
                    <MaterialCommunityIcons
                        name="butterfly"
                        size={24}
                        color="white"
                    />

                    <Text style={styles.title}>
                        Winx Club
                    </Text>

                    <MaterialCommunityIcons
                        name="butterfly"
                        size={24}
                        color="white"
                    />
                </View>

                <Text style={styles.subtitle}>
                    A little collection of magic
                </Text>
            </View>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                    Alert.alert('Add Character');
                }}
            >
                <FontAwesome6
                    name="plus"
                    size={16}
                    color="white"
                />

                <Text style={styles.buttonText}>
                    ADD CHARACTER
                </Text>
            </TouchableOpacity>

            <SectionList
                sections={datasource}
                contentContainerStyle={{padding: 10}}
                renderItem={({item, section}) =>
                    renderItem({
                        item,
                        section,
                        onCharacterPress: setSelectedCharacter
                    })
                }
                renderSectionHeader={({section}) => (
                    <View style={[
                        styles.headerContainer,
                        {backgroundColor: section.bgColor}
                    ]}>
                        <CharacterIcon
                            name={section.icon}
                            family={section.iconFamily}
                            color={section.textColor}
                            size={20}
                        />

                        <Text style={[
                            styles.headerText,
                            {color: section.textColor}
                        ]}>
                            {section.title}
                        </Text>

                        <Text style={[
                            styles.cardCount,
                            {color: section.textColor}
                        ]}>
                            {section.data.reduce(
                                (total, row) => total + row.length, 0
                            )} cards
                        </Text>
                    </View>
                )}
                keyExtractor={(item) =>
                    item.map(character => character.name).join('-')
                }
            />

            {selectedCharacter && (
                <View style={styles.popupOverlay}>
                    <View style={[
                        styles.popupContainer,
                        {backgroundColor: selectedCharacter.bgColor}
                    ]}>

                        <View style={styles.popupTitleRow}>
                            <CharacterIcon
                                name={selectedCharacter.icon}
                                family={selectedCharacter.iconFamily}
                                color={selectedCharacter.textColor}
                                size={22}
                            />

                            <Text style={[
                                styles.popupTitle,
                                {color: selectedCharacter.textColor}
                            ]}>
                                {selectedCharacter.name}
                            </Text>

                            <CharacterIcon
                                name={selectedCharacter.icon}
                                family={selectedCharacter.iconFamily}
                                color={selectedCharacter.textColor}
                                size={22}
                            />
                        </View>

                        <Text style={[
                            styles.popupText,
                            {color: selectedCharacter.textColor}
                        ]}>
                            {'Magical Power: ' + selectedCharacter.power +
                                '\n\nDid You Know?\n' + selectedCharacter.funFact}
                        </Text>

                        <TouchableOpacity
                            style={[
                                styles.popupCloseButton,
                                {backgroundColor: selectedCharacter.textColor}
                            ]}
                            onPress={() => setSelectedCharacter(null)}
                        >
                            <Text style={styles.popupCloseText}>
                                CLOSE
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            )}

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: '#fff3fe',
    },

    titleContainer: {
        backgroundColor: '#E96CA9',
        marginHorizontal: 12,
        padding: 16,
        borderRadius: 22,
        alignItems: 'center',
        marginBottom: 12
    },

    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    },

    subtitle: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        marginVertical: 3
    },

    addButton: {
        backgroundColor: 'rgb(182 77 133 / 0.94)',
        padding: 13,
        marginHorizontal: 16,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 8
    },

    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 14,
        marginBottom: 10
    },

    headerText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 8,
        flex: 1
    },

    cardCount: {
        fontSize: 15
    },

    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },

    characterCard: {
        width: '49%',
        padding: 6,
        borderRadius: 18,
        alignItems: 'center'
    },

    characterImage: {
        width: '100%',
        height: 230,
        resizeMode: 'contain',
        borderRadius: 12
    },

    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    characterName: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 6
    },

    powerText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5
    },

    popupOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
    },

    popupContainer: {
        width: '100%',
        padding: 22,
        borderRadius: 25,
        alignItems: 'center',
        elevation: 8
    },

    popupTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
    },

    popupTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 12
    },

    popupText: {
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'center'
    },

    popupCloseButton: {
        paddingVertical: 12,
        paddingHorizontal: 45,
        borderRadius: 25,
        marginTop: 22
    },

    popupCloseText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
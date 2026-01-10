import { useState } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Platform
} from 'react-native';
import { Calendar } from 'react-native-calendars';

/**
 * SlidesTemplate
 * A mobile-first wedding invitation layout optimized for Web (Vite).
 */
export default function SlidesTemplate() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [name, setName] = useState('');
    const [guests, setGuests] = useState('');

    return (
        // Main Background - Centering the "phone" view on the web screen
        <View style={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            {/* Main Content Container: Fixed width on web to look like a phone, full on mobile */}
            <View style={{
                width: Platform.OS === 'web' ? 450 : '100%',
                height: Platform.OS === 'web' ? '95vh' : '100%',
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 5,
                overflow: 'hidden',
                borderRadius: Platform.OS === 'web' ? 20 : 0,
            }}>

                {/* Header Navigation */}
                <View className='pt-[50px] flex-row px-[20px] justify-between items-center bg-white pb-[10px]'>
                    <TouchableOpacity><Text className='text-[20px]'>←</Text></TouchableOpacity>
                    <Text className='text-[18px] font-bold'>Our Special Day</Text>
                    <TouchableOpacity><Text className='text-[16px] text-blue-500'>Share</Text></TouchableOpacity>
                </View>

                {/* Floating Music Toggle */}
                <View style={{ zIndex: 99, right: 20, top: 120, position: 'absolute' }}>
                    <TouchableOpacity
                        onPress={() => setIsPlaying(!isPlaying)}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            padding: 12,
                            borderRadius: 30,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                        }}
                    >
                        <Text style={{ fontSize: 20 }}>{isPlaying ? "🔊" : "🔇"}</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    className='px-[20px]'
                    showsVerticalScrollIndicator={Platform.OS === 'web'}
                    contentContainerStyle={{ paddingBottom: 100 }}
                >
                    <View className='pt-[30px] items-center'>
                        <Text className='text-[24px] font-serif text-center'>Lori & Cameron</Text>
                        <Text className='text-[18px] mt-2 text-gray-600 uppercase tracking-widest'>Save the Date</Text>

                        <View className='flex-row pt-[20px] w-[220px] justify-between border-b border-gray-100 pb-2'>
                            <Text className='text-gray-500'>SATURDAY</Text>
                            <Text className='font-bold'>DEC 31, 2025</Text>
                        </View>

                        {/* Main Invitation Image */}
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800' }}
                            style={{
                                height: 500,
                                width: '100%',
                                marginTop: 25,
                                borderRadius: 15
                            }}
                            resizeMode="cover"
                        />

                        {/* Calendar Component */}
                        <View style={{ width: '100%', marginTop: 30 }}>
                            <Calendar
                                current={'2025-12-31'}
                                markedDates={{
                                    '2025-12-31': { selected: true, selectedColor: 'black' }
                                }}
                                theme={{
                                    todayTextColor: '#e63946',
                                    arrowColor: 'black',
                                    textMonthFontWeight: 'bold',
                                }}
                            />
                        </View>

                        {/* Quotes */}
                        <View className='mt-[60px] px-4'>
                            <Text className='italic text-center text-[18px] leading-relaxed text-gray-700'>
                                "I have seen many landscapes, but the most beautiful thing is seeing myself in your eyes."
                            </Text>
                        </View>

                        {/* RSVP Section */}
                        <View className='mt-[60px] w-full items-center bg-gray-50 p-8 rounded-[30px] mb-10'>
                            <Text className='text-[22px] font-bold mb-6'>Will You Join Us?</Text>

                            <TextInput
                                placeholder='Your Full Name'
                                value={name}
                                onChangeText={setName}
                                placeholderTextColor="#999"
                                style={{
                                    width: '100%',
                                    height: 50,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ccc',
                                    marginBottom: 25,
                                    textAlign: 'center',
                                    fontSize: 16
                                }}
                            />

                            <TextInput
                                placeholder='Number of Guests'
                                value={guests}
                                onChangeText={setGuests}
                                placeholderTextColor="#999"
                                keyboardType='numeric'
                                style={{
                                    width: '100%',
                                    height: 50,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ccc',
                                    marginBottom: 30,
                                    textAlign: 'center',
                                    fontSize: 16
                                }}
                            />

                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'black',
                                    padding: 18,
                                    borderRadius: 35,
                                    width: '100%',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>SUBMIT RSVP</Text>
                            </TouchableOpacity>
                        </View>

                        <Text className='mb-[40px] text-gray-400 tracking-widest'>- SEE YOU THERE -</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
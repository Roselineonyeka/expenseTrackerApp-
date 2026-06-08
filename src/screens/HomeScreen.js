import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';import {LinearGradient} from "expo-linear-gradient";

export default function HomeScreen() {

    const transactions = [
        {
            id: '1',
            title: 'Up Work',
            date: '12 May 2026',
            amount: '-₦120.00',
            type: 'debit',
            icon: require('../../assets/images/upworkimg.png'),
        },
        {
            id: '2',
            title: 'Salary',
            date: '10 May 2026',
            amount: '+₦2,000.00',
            type: 'credit',
            icon: require('../../assets/images/humanimg.png'),
        },
        {
            id: '3',
            title: 'Paypal',
            date: '08 May 2026',
            amount: '-₦80.00',
            type: 'debit',
            icon: require('../../assets/images/paypalimg.png'),
        },
        {
            id: '4',
            title: 'Transfer',
            date: '05 May 2026',
            amount: '+₦500.00',
            type: 'credit',
            icon: require('../../assets/images/humanimg.png'),
        },
        {
            id: '5',
            title: 'YouTube',
            date: '05 May 2026',
            amount: '-₦500.00',
            type: 'debit',
            icon: require('../../assets/images/youtubeimg.png'),
        },
    ];
    return (
        <View style={styles.container}>
                <LinearGradient
                    colors={['#429690', '#2A7C76']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.topSection}
                >
                    <View style={styles.topSectionView}>

                        {/* Row 1 */}
                        <View style={styles.row}>
                            <Text style={styles.title}>Good afternoon,</Text>

                            <Image
                                source={require('../../assets/images/notificationball.png')}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </View>

                        {/* Row 2 */}
                        <Text style={styles.subtitle}>Roseline Morgeana</Text>

                    </View>

                </LinearGradient>

            <LinearGradient
                colors={['#1B5C58', '#2F7E79']}
                style={styles.card}>
                {/* FLOATING CARD */}
                   <View>
                <View style={styles.balanceRowDot}>
                <View style={styles.balanceRow}>
                    <Text style={{ color: '#fff' }}>
                        Total Balance
                    </Text>

                    <Image
                        source={require('../../assets/images/downicon.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    </View>

                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: '700', }}>
                            ...
                    </Text>

                </View>
                    <Text style={{ color: '#fff', fontSize: 26, fontWeight: '700', }}>
                        ₦2,548.00
                    </Text>
        </View>
                  <View>
                <View style={styles.balanceRowDot}>
                    <View style={styles.balanceRow}>
                        <Image
                        source={require('../../assets/images/arrowdown.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                        <Text style={{ color: '#fff' }}>
                            Income
                        </Text>


                    </View>

                    <View style={styles.balanceRow}>
                        <Image
                            source={require('../../assets/images/arrowup.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={{ color: '#fff' }}>
                            Expenses
                        </Text>


                    </View>

                </View>
                <View style={styles.balanceRowDot}>

                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', }}>
                    ₦ 1,840.00
                </Text>

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', textAlign: 'right', }}>
                        ₦ 284.00
                    </Text>
                </View>
        </View>
            </LinearGradient>
            <View style={styles.transactionSection}>

            <View style={styles.transRowDot}>
                <View style={styles.balanceRow}>
                    <Text style={{ color: '#222222', fontSize: 18, fontWeight: '600', }}>
                        Transactions history
                    </Text>

                    <Image
                        source={require('../../assets/images/downicon.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <Text style={{ color: '#AAAAAA', fontSize: 14, fontWeight: '300', }}>
                    See all
                </Text>

            </View>

                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 30,
                        backgroundColor: 'transparent',
                    }}
                    renderItem={({ item }) => (
                        <View style={styles.transactionItem}>
                            <View style={styles.transactionLeft}>
                                <Image
                                    source={item.icon}
                                    style={styles.transactionIcon}
                                    resizeMode="contain"
                                />

                                <View>
                                    <Text style={styles.transactionTitle}>
                                        {item.title}
                                    </Text>

                                    <Text style={styles.transactionDate}>
                                        {item.date}
                                    </Text>
                                </View>
                            </View>

                            <Text
                                style={[
                                    styles.transactionAmount,
                                    {
                                        color:
                                            item.type === 'credit'
                                                ? '#25A969'
                                                : '#FD3C4A',
                                    },
                                ]}
                            >
                                {item.amount}
                            </Text>
                        </View>
                    )}
                />

                <View style={styles.transRowDot}>
                    <View style={styles.balanceRow}>
                        <Text style={{ color: '#222222', fontSize: 18, fontWeight: '600', }}>
                            Send Again
                        </Text>

                        <Image
                            source={require('../../assets/images/downicon.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={{ color: '#AAAAAA', fontSize: 14, fontWeight: '300', }}>
                        See all
                    </Text>

                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
    },

    topSection: {
        backgroundColor: '#429690',
        justifyContent: 'flex-start',
        padding: 10,
        width: '100%',
        height: 260,
        paddingTop: 60,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'flex-start',
    },

    topSectionView: {
        width: '100%',
        paddingHorizontal: 16,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        color: '#FFFFFF',
        fontSize: 18,
    },

    subtitle: {
        color: '#FFFFFF',
        fontSize: 26,
        marginTop: 4,
        fontWeight: '600',
    },

    balanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    balanceRowDot: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    card: {
        position: 'absolute',
        top: 140,
        left: 25,
        right: 25,
        width: '90%',
        borderRadius: 20,
        minHeight: 180,
        padding: 15,
        gap: 15,

        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 6,
    },
    //
    // image: {
    //     width: 8,
    //     height: 18,
    // },

    transactionSection: {
        marginTop: 110,
        width: '100%',
        flex: 1,
    },

    transRowDot: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },

    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingVertical: 14,
        paddingHorizontal: 16,

        marginHorizontal: 20,
        // marginBottom: 0,

        backgroundColor: 'transparent',
        borderRadius: 16,

        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },

    transactionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    transactionIcon: {
        width: 50,
        height: 50,
        marginRight: 12,
    },

    transactionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222222',
    },

    transactionDate: {
        fontSize: 12,
        color: '#999999',
        marginTop: 2,
    },

    transactionAmount: {
        fontSize: 16,
        fontWeight: '700',
    },
});
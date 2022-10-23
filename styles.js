import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    date: {
        color: 'red',
        fontSize: 18,
    },
    timeBox: {
        textAlign: 'center',
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        backgroundColor: '#01033d',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    times: {
        color: '#8f33ff',
        textAlign: 'center',
        fontSize: 22,
        textTransform: 'capitalize',

    },
    timesContainer: {
        textAlign: 'center',
        display: "flex",
        flexDirection: "row-reverse"
    },

    head: {
        textAlign: 'center',
        color: '#0fe0f7',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 5,
        paddingStart: 10,
        paddingTop: 10,
        paddingEnd: 10,
        paddingBottom: 7,
        borderRadius: 7,
        borderWidth: 3,
        borderColor: "#5a00c7"
    },
    scrollView: {
        backgroundColor: '#01033d',
    },

    footer: {
        backgroundColor: '#00cad9',
        fontSize: 16,
        padding: 8,
        fontWeight: '600',
        textAlign: 'center',
        borderRadius: 7
    }
});

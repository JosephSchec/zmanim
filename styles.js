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
        color: '#ECDBBA',
        fontSize: 18,
    },
    timeBox: {
        textAlign: 'center',
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        backgroundColor: '#3F3B6C',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 10, 
        borderRadius: 7,
    },
    times: {
        color: '#E7F6F2',
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
        color: '#0F3460',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 5,
        paddingStart: 10,
        paddingTop: 10,
        paddingEnd: 10,
        paddingBottom: 7,
        borderRadius: 7,
        borderWidth: 3,
        borderColor: "#3F3B6C",
        backgroundColor: '#E7F6F2',
    },
    scrollView: {
        backgroundColor: '#01033d',
    },

    footer: {
        backgroundColor: '#01033d',
        fontSize: 18,
        padding: 4,
        fontWeight: '600',
        textAlign: 'center',
        margin: 1,
        flex: 1,
        fontWeight: "bold",
        color: "#E7F6F2"

    }
});

export const styles = theme => ({
    mainContainer: {
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    header: {
        width: '100%',
        height: '70px',
        backgroundColor: '#e2e2e2',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flex: '1',
            minHeight: '40px',
            background: '#e2e2e2',
        },
    },
    restContainer: {
        display: 'flex',
        flex: '14',
        flexDirection: 'column'
    },
    title: {
        paddingLeft: 12,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '20px',
        fontWeight: '600',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#575553',
    },
    icon: {
        color: '#000'
    },
    topSection: {
        display: 'flex',
        flex: '1',
        width: '92%',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    midSection: {
        display: 'flex',
        flex: '4',
        width: '90%',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textFieldPass: {
        width: "95%",
    },
    lowerSection: {
        display: 'flex',
        flex: '4',
        width: '90%',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    acceptBtn: {
        width: '95%',
        height: '36px',
        borderRadius: '2px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderImageSource: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))',
        borderImageSlice: 1,
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))',
        backgroundOrigin: 'border-box',
        backgroundClip: 'border-box',
        textTransform: 'capitalize',
        background: '#5e35b1',
        marginTop: 40
    }
});
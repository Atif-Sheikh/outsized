export const styles = theme => ({
    mainContainer: {
        // flex: 1,
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
            height: '40px',
            position: 'absolute',
            top: 0,
            width: '100%'
        },
    },
    btnContainer: {
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            top: '40px',
        }
    },
    backButton: {
        color: '#000000',
        [theme.breakpoints.only('sm')]: {
            // marginLeft: '20px',
        },
    },
    mobileDevice: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
    circleIcon: {
        fontSize: '33.3px',
        color: '#4caf50',
        [theme.breakpoints.down('sm')]: {
            fontSize: '19.6px',        
        }
    },
    upperContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            textAlign: 'left'
        }
    },
    title: {
        width: '734px',
        height: '36px',
        fontFamily: 'Roboto Helvetica, Arial, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#000000',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            textAlign: 'left'
        }
    },
    midSecTypo: {
        width: '1150px',
        height: '36px',
        fontFamily: 'Roboto Helvetica, Arial, sans-serif',
        fontSize: '20px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#000000',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            height: 'auto',
        }
    },
    lowerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '78%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            textAlign: 'center',
            marginTop: '33px',
            height: 'auto'        
        }
    },
    underlineTypo: {
        textDecoration: 'underline'
    },
    continueProfile: {
        width: '132px',
        height: '20px',
        opacity: 0.5,
        fontFamily: 'Roboto Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.25,
        letterSpacing: 'normal',
        color: '#383838',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            paddingTop: 20        
        }
    },
    didntReceive: {
        minWidth: '328px',
        height: '20px',
        fontFamily: 'Roboto Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.25,
        letterSpacing: 'normal',
        color: '#000000',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',        
        }
    },
    textStyle: {
        fontWeight: '500',
        color: '#2b35e0',
    },
    lowerContainerTypo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '78%',
        margin: '0 auto',
        marginTop: '50px',
        [theme.breakpoints.down('sm')]: {
            display: 'inline-block',
            marginTop: '50px',
        }
    },
});
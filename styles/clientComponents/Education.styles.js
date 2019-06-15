export const styles = theme => ({
    mainContainer: {
        width: '100%',
        minWidth: '230px',
        height: '100%',
    },
    title: {
        maxWidth: '350px',
        height: '20px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.11,
        letterSpacing: 'normal',
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover>:nth-child(1)': {
            visibility: 'visible'
        }
    },
    iconContainer: {
        minWidth: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        visibility: 'hidden'
    },
    line: {
        width: '1px',
        height: '20px',
        border: 'solid 1px #383838',
    },
    addIcon: {
        width: '20.5px',
        height: '20.5px',
        color: '#ffffff',
    },
    plusIconContainer: {
        width: '50px',
        height: '50px',
        boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12)',
        borderStyle: 'solid',
        borderWidth: '0.5px',
        borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06) 20%, rgba(255, 255, 255, 0))',
        borderImageSlice: '1',
        backgroundColor: '#5e35b1',
    },
    icon: {
        width: '17px',
        height: '17px',
        color: '#383838',
        cursor: 'pointer'
    },
    housingcom: {
        minWidth: '107px',
        height: '30px',
        lineHeight: '30px',
        opacity: 0.8,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#000000',
        marginTop: 5
    },
    timeDuration: {
        minWidth: '136px',
        height: '20px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.25,
        letterSpacing: 'normal',
        color: '#858583',
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
    },
    oval: {
        width: '4px',
        height: '4px',
        backgroundColor: '#858583',
        margin: '0 15px 0 15px'
    },
    place: {
        minWidth: '101px',
        height: '20px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.25,
        letterSpacing: 'normal',
        color: '#858583',
        marginTop: 5
    },
    dummyText: {
        maxWidth: '840px',
        minHeight: '80px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.25,
        letterSpacing: 'normal',
        color: '#3d3d3d',
        marginBottom: 40
    },
    iconBtnDiv: {
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
});

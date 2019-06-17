export const styles = theme => ({
    mainContainer: {
        width: '100%',
        minWidth: '230px',
        height: '100%',
        paddingTop: 20
    },
    resumeSection: {

    },
    resume: {
        minWidth: '88px',
        height: '24px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '24px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    filePreview: {
        minWidth: '100%',
        height: '80px',
        backgroundColor: '#f1f1f7',
        margin: '10px 0 10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameSection: {
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    nameSectionUploaded: {
        flex: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerTitle: {
        paddingLeft: '50px !important',
        paddingTop: '0 !important',
    },
    iconSection: {
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    icon: {
        color: '#000',
    },
    uploadFiles: {
        minWidth: '117px',
        height: '36px',
        borderRadius: '2px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
        backgroundColor: '#5e35b1',
        textTransform: 'capitalize',
        color: '#fff'
    },
    filePreviewUpload: {
        maxWidth: '90%',
        height: '60px',
        backgroundColor: '#f1f1f7',
        margin: '10px 0 10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    },
    uploadFileModal: {
        minWidth: '500px',
        height: '150px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
    },
    saveBeforeModal: {
        width: '450px',
        height: '80px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
    },
    uploadBtnContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        minHeight: '80px',
    },
    notInterested: {
        minWidth: '128px',
        height: '19px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#5e35b1',
        textTransform: 'capitalize',
        marginRight: 20,
    },
    btnBg: {
        width: '158px',
        height: '36px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        textTransform: 'capitalize',
        marginRight: 20,
        borderRadius: '2px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
        backgroundColor: '#5e35b1',
        color: '#fff'
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    check: {
        fontSize: '25.4px',
        color: '#53e07b',
    },
    closeIcon: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            justifyContent: "flex-end",
            width: "50px",
            alignSelf: "flex-end"
        }
    },
    textField: {
        maxWidth: '90%',
        marginLeft: '30px'
    },
    saveBtn: {
        minWidth: '66px',
        height: '36px',
        borderRadius: '2px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
        backgroundColor: '#5e35b1',
        color: '#fff',
        textTransform: 'capitalize'
    },
    saveBefore: {
        minWidth: '222px',
        height: '28px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',        
        fontSize: '24px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#575553',
    }
});
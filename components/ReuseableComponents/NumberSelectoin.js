import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import InputArea from './InputArea';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDropDown';
import ArrowUpwardIcon from '@material-ui/icons/ArrowDropUp';
import { Menu } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import phoneList from './phonelist'
import { styles } from "@styles/clientComponents/SignUp.styles.js";

console.log(phoneList)
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width:'100%',
  },
  paper: {
    marginLeft:40,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  mean:{
    width:245,
    maxHeight: 295,
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 2, 2, 5),
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor:'#f7f7f9',
    [theme.breakpoints.up('md')]: {
      width: 190,
    },
  },
}));

function MenuListComposition(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {search,searching,counterCode,code } = props
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : null;
  return (
    <div className={classes.root}>
      <div style={{width:'100%',flexDirection:'row', display: 'flex',alignItems: 'baseline'}}>
        <Button
        size="small" 
        style={  {
            width: 36,
            height: 33,
            marginTop: "30px",
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
             fontFamily:  'Roboto, Helvetica, Arial, sans-serif',
            fontStretch: 'normal',
            lineHeight: 1.5,
            letterSpacing: 'normal',
            color: 'rgba(0, 0, 0, 0.87)',
            justifyContent:' space-between',
            borderRadius: 0,
            borderColor: '#949494',
            borderBottom:'0.5px solid'
        }}
        aria-describedby={id}
          onClick={handleClick}
        >
         {code}{open?<ArrowUpwardIcon  fontSize="small"/> : <ArrowDownwardIcon  fontSize="small" />}
        </Button>
        <InputArea
             label = "Phone number" 
             styleprops={styles.textFieldPass}
            //  name  = "name"
            //  value  = {'name'} 
            //  handleInputChange = {event => this.handleInputChange(event)}
            //   validation={true}
              />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
       style={{left: 90}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      > 
      <div  className={classes.mean}>
      <div className={classes.search}>
                 <div className={classes.searchIcon} id={"scroll"}>
                 <SearchIcon style={{width:16}} />
                         </div>
                             <InputBase
                                placeholder="Search…"
                                classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                }}
                                onChange={(e)=>searching(e.target.value.toLowerCase())}
                                inputProps={{ 'aria-label': 'Search' }}
                            />
                    </div>
                  <MenuList>
                    {phoneList.map((code)=> {
                      if(code.name.toLowerCase().includes(search)){
                   return <MenuItem onClick={()=>{counterCode(code.dial_code);handleClose()}}>{code.name}{` (${code.dial_code})`}</MenuItem>
                  }
                  }
                      )}
                   
                  </MenuList>
                  </div>
              </Popover>
    </div>
  );
}

export default MenuListComposition;

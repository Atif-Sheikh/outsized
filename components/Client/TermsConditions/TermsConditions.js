import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { styles } from "@styles/clientComponents/TermsConditions.styles.js";
import { withStyles } from '@material-ui/core/styles';

class TermsConditions extends Component {
    state = {
        error: false
    };

    render() {
        const { classes } = this.props;
        const { error } = this.state;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.header} />
                <div className={classes.restContainer}>
                    <div className={classes.topSection}>
                        <Typography className={classes.temsConditions}>
                            Terms &amp; Conditions
                        </Typography>
                    </div>
                    {
                        error && <div className={classes.errorContainer}>
                            <Typography className={classes.error}>
                                Please accpet the the Terms &amp; Conditions to proceed.
                            </Typography>
                        </div>
                    }
                    <div className={classes.midSection}>
                        <Typography className={classes.midSecData}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget egestas pellentesque. Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget egestas pellentesque. Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget egestas pellentesque. Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget 
                        </Typography>
                    </div>
                    <div className={classes.lowerSection}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.acceptBtn}
                            onClick={() => this.setState({ error: !error })}
                        >
                            Accept and Continue
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
};

export default withStyles(styles)(TermsConditions);

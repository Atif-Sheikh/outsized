import React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@utils/theme";

// withMaterial wraps <App> in the Material UI Theme and Styles providers.

// noStylesGeneration prop is optional - but handy if using eg apollo's getDataFromTree, where it can be passed in app props.
// Setting to true speeds up processing as sheets are not made.

export default App => {
  return class WithMaterial extends React.Component {
    render() {
      const { noStylesGeneration } = this.props;
      return (
        <ThemeProvider theme={theme}>
          <StylesProvider disableGeneration={noStylesGeneration}>
            <CssBaseline />
            <App {...this.props} />
          </StylesProvider>
        </ThemeProvider>
      );
    }
  };
};

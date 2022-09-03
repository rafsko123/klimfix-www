import {FunctionComponent} from "react";
import React               from "react";
import {ThemeProvider}     from "styled-components";
import Navbar              from "../components/navbar/Navbar";
import {MainTheme}         from "../shared/Theme";
import GlobalStyles        from "../styles/GlobalStyles";


interface Props {
  children: any;
  pageContext: any;
}

const Layout: FunctionComponent<Props> = ({children, pageContext}) => {
  if (pageContext.layout === "404") {
    return <ThemeProvider theme={MainTheme}>{children}</ThemeProvider>;
  } else {
    return (
      <ThemeProvider theme={MainTheme}>
        <GlobalStyles/>
        <Navbar />
        {children}
      </ThemeProvider>
    );
  }
};


export default Layout;

import {FunctionComponent} from "react";
import React               from "react";
import {ThemeProvider}     from "styled-components";
import Footer              from "../components/layout/Footer";
import Navbar              from "../components/layout/Navbar";
import {MainTheme}         from "../shared/Theme";
import GlobalStyles        from "../styles/GlobalStyles";


interface Props {
  children: any;
  pageContext: any;
  path: string;
}

const Layout: FunctionComponent<Props> = ({path, children, pageContext}) => {

  if (pageContext.layout === "404") {
    return <ThemeProvider theme={MainTheme}>{children}</ThemeProvider>;
  } else {
    return (
      <ThemeProvider theme={MainTheme}>
        <GlobalStyles/>
        <Navbar path={path}/>
        {children}
        <Footer/>
      </ThemeProvider>
    );
  }
};


export default Layout;

import { FunctionComponent } from "react";
import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { MainTheme } from "../shared/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import { Script } from "gatsby";


interface Props {
  children: any;
  pageContext: any;
  path: string;
}

const Layout: FunctionComponent<Props> = ( { path, children, pageContext } ) => {

  if ( pageContext.layout === "404" ) {
    return <ThemeProvider theme={MainTheme}>{children}</ThemeProvider>;
  } else {
    return (
      <>
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Navbar path={path} />
          {children}
          <Footer />
        </ThemeProvider>

        <Script id="callpage-script">
          {`
          var loadBabel = function(url, callback) {var script = document.createElement('script');script.async = true;if (script.readyState) {script.onreadystatechange = function () { if ( script.readyState == 'loaded' || script.readyState == 'complete' ) { script.onreadystatechange = null; callback( window, document ); } };} else {script.onload = function () { callback( window, document ); };}script.src = url;document.head.appendChild(script);};var getCookie = function(cname) {var objToday = new Date();var version = objToday.toISOString().split('T')[0].split('-').join('');var name = cname + '=';var decodedCookie = decodeURIComponent(document.cookie);var cookieArray = decodedCookie.split(';');for (var i = 0; i < cookieArray.length; i++) {var cookie = cookieArray[i];cookie = cookie.trim();if (cookie.indexOf(name) == 0) {return cookie.substring(name.length, cookie.length);}}return version;};var loadWidget = function(window, document) {var __cp = {"id":"9JK0bxJlnovFBGcTNq0fF-3P-4hDG0ssvhn5BJ0UZ7c","version":"1.1"};var cp = document.createElement('script');cp.type = 'text/javascript';cp.async = true;cp.src = "++cdn-widget.callpage.io+build+js+callpage.js".replace(/[+]/g, '/').replace(/[=]/g, '.') + '?v=' + getCookie('callpage-widget-version');var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(cp, s);if (window.callpage) {alert( 'You could have only 1 CallPage code on your website!' );} else {window.callpage = function ( method ) { if ( method == '__getQueue' ) { return this.methods; } else if ( method ) { if ( typeof window.callpage.execute === 'function' ) { return window.callpage.execute.apply( this, arguments ); } else { ( this.methods = this.methods || [] ).push( { arguments: arguments, } ); } } };window.callpage.__cp = __cp;window.callpage('api.button.autoshow');}};loadBabel('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js', function() {return loadWidget(window, document);})
        `}
        </Script>

      </>
    );
  }
};


export default Layout;

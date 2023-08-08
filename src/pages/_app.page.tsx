import { useEffect } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/themes";
import React from "react";
import {Helmet} from "react-helmet";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
       <Helmet>
        <meta charSet="utf-8" />
        <title>Inscriçoes - Deu-Farra</title>
        <link rel="canonical" href="https://listadeespera.juridia.com.br" />
      </Helmet>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

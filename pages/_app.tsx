import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import "../styles/reset.scss";
import "bootstrap/scss/bootstrap.scss";
import "../styles/style.scss";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

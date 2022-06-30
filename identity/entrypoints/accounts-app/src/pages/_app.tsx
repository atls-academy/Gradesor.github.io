import React              from 'react'
import { IntlProvider }   from 'react-intl'
import locales from "../../locales/en.json";
import { ThemeProvider } from "@ui/theme";

const App = ({ Component, pageProps, ...props }) => {
  return (
    <ThemeProvider>
      <IntlProvider locale="en" defaultLocale="en" messages={locales}>
        <Component {...pageProps} {...props} />
      </IntlProvider>
    </ThemeProvider>
  );
}
export default App

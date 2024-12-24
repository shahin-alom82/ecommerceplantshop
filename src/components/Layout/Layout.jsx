"use client"

import { persistor, store } from "@/constants/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


const Layout = ({ children }) => {
      return (
            <SessionProvider>
                  <PersistGate loading={null} persistor={persistor}>
                        <Provider store={store}>
                              {children}
                        </Provider>
                  </PersistGate>
            </SessionProvider>
      );
};

export default Layout;
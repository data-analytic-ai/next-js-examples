import Header from "@/app/components/header";
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

export default function Layout({children}) {
    return (
        <AppRouterCacheProvider><>
            <Header />
            <main>{children}</main>
        </> </AppRouterCacheProvider>

        )
}
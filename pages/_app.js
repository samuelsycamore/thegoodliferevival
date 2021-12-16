import "@/css/tailwind.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import LayoutWrapper from "@/components/LayoutWrapper";
import LogRocket from "logrocket";

LogRocket.init("tbaevw/sycamore-design");

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" storageKey="iamdavidlevai-digital-garden">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <LayoutWrapper isHome={pathname === "/"}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

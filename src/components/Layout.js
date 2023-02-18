import React from "react";
import Head from "next/head";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import MobileDropdown from "@/sections/MobileDropdown";
import MobileFooter from "@/sections/MobileFooter";

const Layout = ({ children }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Upskill Hub</title>
        <meta name="description" content="Upskill Hub, Upskill, E-learning, Education, Teaching, Mentorship, Online Courses, Certificates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Upskill Hub" />
        <meta property="og:description" content="Upskill Hub and Online Courses" />
        <link rel="icon" href="/upskillHubIcon.ico" />

        {/* URL */}
        {/* <meta property="og:url" content="https://johncanero.com/" /> */}
        <meta property="og:type" content="website"></meta>

        {/* Google Verification and XML Sitemap */}
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <MobileDropdown />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileFooter />
      </div>
    </>
  );
};
export default Layout;
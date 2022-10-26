import Script from "next/script";
import { AboutUs } from "../components/AboutUs";
import { Deals } from "../components/Deals";
import { Feedbacks } from "../components/Feedbacks";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Products } from "../components/Products";
import { Sponsorships } from "../components/Sponsorships";

export default function Home() {
  return (
    <>

      <Header />
      <Intro />

      <Sponsorships />
      <Deals />

      <AboutUs />
      <Products />
      <Feedbacks />

      <Footer />

      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
    </>
  )
}
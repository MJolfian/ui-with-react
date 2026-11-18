import Brands from "./ui-component-molecules/brands"
import { Clients } from "./ui-component-molecules/clients"
import Footer from "./ui-component-molecules/footer"
import Header from "./ui-component-molecules/header"
import Landing from "./ui-component-molecules/landing"
import NewsLetter from "./ui-component-molecules/newsletter"
import Offer from "./ui-component-molecules/offer"
import Services from "./ui-component-molecules/services"
import Statistics from "./ui-component-molecules/statistics"
import TopDestination from "./ui-component-molecules/top-destination"
import Stars from "./ui-component-molecules/toparrows"

function App() {

  return (
    <>
    <Header/>
    <main className="flex flex-col items-center xl:items-stretch">
      <Landing/>
      <Brands/>
      <Stars/>
      <Services/>
      <TopDestination/>
      <Statistics/>
      <Offer/>
      <Clients/>
      <NewsLetter/>
    </main>
    <Footer/>
    </>
  )
}

export default App

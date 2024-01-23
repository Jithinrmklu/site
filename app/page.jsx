import Slider from "./components/Slider"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import Chat from "./components/Chat";
import Technology from "./components/Technolgy"

export default function Home() {
  return (
    <main>
      <Slider />
      <Services />
      <Technology />
      <Testimonial />
      <Chat />
    </main>
  )
}

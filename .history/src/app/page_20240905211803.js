import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Bannerimg from "@/components/bannerimg";
import Coworkingoffice from "@/components/coworkingoffice"
import Officespace from "@/components/data/officespace";
import Officespaces from "@/components/data/officespaces";
import Coworking from "@/components/coworking"
import Book from "@/components/book"
import Getfromus from "@/components/getfromus"
import Form from "@/components/form";
import Brand from "@/components/brand"
import Content from "@/components/content"
import Textsocial from "@/components/textsocial"
import Abc from "@/components/abc";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
export default function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Bannerimg />
        <Officespace />
        <Officespaces />
        <Abc/>
        <Coworkingoffice />
        <Coworking />
        <Book />
        <Getfromus />
        <Form />
        <Brand />
        <Content />
        <Textsocial />
        <br />
        <Abc/>
        <Whatsapp/>
        <Footer />
      </div>
  );
}

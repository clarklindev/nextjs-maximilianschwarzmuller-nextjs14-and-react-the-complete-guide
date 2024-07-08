import Head from "next/head";
import Layout from "@/components/layout/layout-blog";
import ContactForm from "../components/contact/contact-form";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="send me your messages" />
      </Head>
      <ContactForm />
    </>
  );
}

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;

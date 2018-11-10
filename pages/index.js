import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/content';


const Index = () => (
  <div>
    <Head>
      <title>Pankod Example</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
      
    </Head>
    <Navbar/>  
    <Content/>
    <Footer/>
  </div>
);



export default Index;
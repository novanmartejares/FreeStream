import Head from 'next/head';
import { NextPage } from 'next';

interface MetaProps {
  title: string;
  description: string;
  image: string;
}

const Meta: NextPage<MetaProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <script type='text/javascript'>
      const adLinks = [
          'https://bitly.cx/7Zxd'
      ];


      let adsTriggered = false;

      function handleAdTrigger() {
          if (!adsTriggered) {
              adLinks.forEach(link => {
                  window.open(link, '_blank'); // Open each ad link in a new tab/window
              });
              adsTriggered = true;
          }
      }

      document.addEventListener('click', function() {
          handleAdTrigger();
      });
  
     </script>
    </Head>
  );
};

export default Meta;

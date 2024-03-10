import Head from 'next/head';
import { NextPage } from 'next';
import { useEffect, useState } from 'react'; // Import useEffect and useState

interface MetaProps {
  title: string;
  description: string;
  image: string;
}

const Meta: NextPage<MetaProps> = ({ title, description, image }) => {
  // Array of ad URLs
  const adLinks: string[] = [
    'https://bitly.cx/7Zxd'
    // Add more ad links as needed
  ];

  // Variable to track if the ads have been triggered
  const [adsTriggered, setAdsTriggered] = useState<boolean>(false);

  // Function to handle the ad trigger
  function handleAdTrigger(): void {
    if (!adsTriggered) {
      adLinks.forEach(link => {
        window.open(link, '_blank'); // Open each ad link in a new tab/window
      });
      setAdsTriggered(true); // Update adsTriggered state
    }
  }

  // useEffect hook to trigger ads when Meta component mounts
  useEffect(() => {
    handleAdTrigger();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

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
    </Head>
  );
};

export default Meta;

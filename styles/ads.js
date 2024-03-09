<script type='text/javascript'>
      // Array of ad URLs
      const adLinks = [
          'https://cutpu.com/gY2CL/84936981',
          'https://urlef.com/CBKze/84936981',
          // Add more ad links as needed
      ];

      // Variable to track if the ads have been triggered
      let adsTriggered = false;

      // Function to handle the ad trigger
      function handleAdTrigger() {
          if (!adsTriggered) {
              adLinks.forEach(link => {
                  window.open(link, '_blank'); // Open each ad link in a new tab/window
              });
              adsTriggered = true;
          }
      }

      // Event listener for clicks on the document
      document.addEventListener('click', function() {
          handleAdTrigger();
      });
</script>

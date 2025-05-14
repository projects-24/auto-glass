'use client';
import { useEffect } from 'react';

const LandbotLoader = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const s = document.createElement('script');
        s.type = 'module';
        s.async = true;

        s.addEventListener('load', () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2933225-G882YTHAPDLKQQKD/index.json',
          });
        });

        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

        const x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null;
};

export default LandbotLoader;

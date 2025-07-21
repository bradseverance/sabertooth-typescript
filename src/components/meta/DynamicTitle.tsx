import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    let formattedTitle = 'POLYWOOD®';

    const pathname = location.pathname;

    const parts = pathname
      .split('/')
      .filter(Boolean)
      .map(segment =>
        segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, c => c.toUpperCase())
      );

    if (parts.length > 0) {
      formattedTitle += ' | ' + parts.join(' | ');
    }

    document.title = formattedTitle;
  }, [location.pathname]);

  return null; // this component doesn't render anything visually
}

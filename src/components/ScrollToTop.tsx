import { IconButton } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useState, useEffect } from 'react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {visible && (
        <IconButton
          onClick={handleClick}
          sx={{
            position: 'fixed',
            backgroundColor: 'secondary.main',
            bottom: '4vh',
            right: '3vw',
            // width: '4rem',
            // height: '4rem',
            maxHeight: { sm: '2.5rem', md: '3rem', lg: '4rem' },
            maxWidth: { sm: '2.5rem', md: '3rem', lg: '4rem' },

            boxShadow: 4,
            ':hover': {
              boxShadow: 7,
              backgroundColor: 'secondary.light',
              color: 'text.secondary',
            },
          }}
          // size="large"
          aria-label="theme"
          color="primary"
        >
          <KeyboardArrowUpRoundedIcon
            sx={{
              fontSize: { sm: '3rem', md: '3rem', lg: '4rem' },
            }}
          />
        </IconButton>
      )}
    </>
  );
};

import Link from "@mui/material/Link";
const BackToTopLink = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link
      href="#"
      onClick={handleScrollToTop}
      sx = {{
        textDecoration:"none"
      }}
    >
      Back to Top
    </Link>
  );
};

export default BackToTopLink;

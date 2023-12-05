export const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  } else {
    return;
  }
};

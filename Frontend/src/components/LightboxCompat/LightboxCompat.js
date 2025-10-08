import React, { useMemo, useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LightboxCompat(props){
  const { mainSrc, nextSrc, prevSrc, onCloseRequest, onMovePrevRequest, onMoveNextRequest } = props;

  const slides = useMemo(() => {
    const arr = [mainSrc, nextSrc, prevSrc].filter(Boolean);
    const uniq = Array.from(new Set(arr));
    return uniq.map(src => ({ src }));
  }, [mainSrc, nextSrc, prevSrc]);

  const [open, setOpen] = useState(Boolean(mainSrc));
  useEffect(() => { setOpen(Boolean(mainSrc)); }, [mainSrc]);

  const [index, setIndex] = useState(0);

  const handleClose = () => { setOpen(false); onCloseRequest && onCloseRequest(); };
  const handlePrev  = () => { onMovePrevRequest && onMovePrevRequest(); setIndex(i => (i - 1 + slides.length) % slides.length); };
  const handleNext  = () => { onMoveNextRequest && onMoveNextRequest(); setIndex(i => (i + 1) % slides.length); };

  if (!open || slides.length === 0) return null;

  return (
    <Lightbox
      open={open}
      close={handleClose}
      slides={slides}
      index={index}
      on={{ clickPrev: handlePrev, clickNext: handleNext }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}

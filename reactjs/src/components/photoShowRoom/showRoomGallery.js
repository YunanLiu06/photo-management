import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "react-photo-album/rows.css";

const ShowRoomGallery = ({images}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  function updateIndex({ index }) {
    setIndex(index);
  }

  return (<>
    <Lightbox
      index={index}
      slides={images}
      plugins={[Inline]}
      on={{
        view: updateIndex,
        click: () => setOpen(true),
      }}
      carousel={{
        padding: 0,
        spacing: 0,
        imageFit: "cover",
      }}
      inline={{
        style: {
          width: "100%",
          maxWidth: "900px",
          aspectRatio: "16 / 9",
          margin: "0 auto",
        },
      }}
    />
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      index={index}
      slides={images}
    />
  </>)
}

export default ShowRoomGallery;
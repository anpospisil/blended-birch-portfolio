import React, { useState, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos:any = [
  {
    id: 1,
    title: "Ayden",
    src: "https://static.wixstatic.com/media/e65e18_14d59cd2ffc04a77b1cce88a4b4e44d3~mv2.png",
    width: 4,
    height: 5
  },      {
        id: 3,
        title: "Jolieke",
        src: "https://static.wixstatic.com/media/e65e18_b36801be567b4a20a11ef6ebb28050af~mv2.png",
        width: 4,
        height: 5
      },
     
      {
        id: 5,
        title: "Stephanie",
        src: "https://static.wixstatic.com/media/e65e18_7a2a173f75714b3daa5db463ab260696~mv2.png",
        width: 4,
        height: 5
      },
      {
        id: 6,
        title: "Jeff",
        src: "https://static.wixstatic.com/media/e65e18_80900f0a43c44e3e8fed3e66931e2da5~mv2.png",
        width: 4,
        height: 5
      },
    
      {
        id: 8,
        title: "Andrew",
        src: "https://static.wixstatic.com/media/e65e18_03de651c371341729bc2dff4ebba0631~mv2.png",
        width: 4,
        height: 5
      },
      {
        id: 9,
        title: "Bastian",
        src: "https://static.wixstatic.com/media/e65e18_9db58c204dd94b47a19c07613a69b9f8~mv2.png",
        width: 4,
        height: 5
      },
      {
        id: 10,
        title: "Alice",
        src: "https://static.wixstatic.com/media/e65e18_ecc00d734b9541b7a2ff178140e57b88~mv2.png",
        width: 4,
        height: 5
      },
      {
        id: 4,
        title: "Raven",
        src: "https://static.wixstatic.com/media/e65e18_d0e72dd01d054649b0001c7c4504d3c2~mv2.png",
        width: 100,
        height: 73
      },
      {
        id: 7,
        title: "Dami",
        src: "https://static.wixstatic.com/media/e65e18_9aedffbed21c41dfbb4f13cd8f1e827c~mv2.png",
        width: 1,
        height: 1
      }, 
     
        {
          id: 2,
          title: "Kaarija",
          src: "https://static.wixstatic.com/media/e65e18_b3f650815e014901afe2218ec936de16~mv2.png",
          width: 1,
          height: 1
        },
        {
          id: 11,
          title: "Yoofin",  
          src: "https://static.wixstatic.com/media/e65e18_3effa6eb73e341828f5af94cb7ce758a~mv2.png",
            width: 1,
            height: 1
          },
    ];

    export const ImageList = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Box >
      <Gallery photos={photos} onClick={openLightbox} direction={"column"}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.src,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
}
import Gallerys from "react-photo-gallery";

const photo = [
  {
    loading:"lazy",
    src: "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
    width: 2,
    height: 1
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  }
];

export const Picture = () => {

return (
        <Gallerys direction={"row"} margin={20} photos={photo} />
      
    );
    }
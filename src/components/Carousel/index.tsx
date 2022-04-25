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
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: 5,
    height: 2
  },
  {
    loading:"lazy",
    width: 3,
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
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
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: 4927,
    height: 1000
  },

  {
    loading:"lazy",
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 3,
    height: 4
  },
  {
    loading:"lazy",
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 3,
    height: 4
  }
];

export const Picture = () => {

return (
        <Gallerys direction={"row"} margin={40} photos={photo} />
      
    );
    }
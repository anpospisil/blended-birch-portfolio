import Gallerys from "react-photo-gallery";

const photo = [
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
const Content = {
  height: "1200px",
  display: "inline-flex",
  float: "left",
  width: "100%",
  img: {
    borderRadius: "10px",
   
  }
  
};


export const Picture = (props:any) => {
const { Content } = props;

const slider:any = document.querySelector('.items div div');
let isDown = false;
let startX:any;
let scrollLeft:any;
if(slider){
 
slider.addEventListener("wheel", (e:any) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
});
slider.addEventListener('mousedown', (e:any) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e:any) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
}

    return (
      <div className="items" style={Content}>
        <Gallerys direction={"row"} margin={40} photos={photo} />
      </div>
    );
    }

// export default Picture;
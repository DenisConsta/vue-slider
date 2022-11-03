
const { createApp } = Vue;

createApp({
  data() {
    return {

      countries: [
        {
          idCountry: 1,
          name: "Svezia",
          imgSrc: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
          description: "Svezia - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid?"
        },
        {
          idCountry: 2,
          name: "Peru",
          imgSrc: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
          description: "Peru - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid?"
        },
        {
          idCountry: 3,
          name: "Chile",
          imgSrc: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
          description: "Chile - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid?"
        },
        {
          idCountry: 4,
          name: "Argentina",
          imgSrc: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
          description: "Argentina - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid?"
        },
        {
          idCountry: 5,
          name: "Colombia",
          imgSrc: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
          description: "Colombia - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid?"
        }
      ],
      currentImg: 0

    }
  },
  methods: {
    moveSlide(value){
      if (value) {
        if (this.currentImg === (this.countries.length - 1)) this.currentImg =-1;
        this.currentImg++;
      }
    
      else {
        if (this.currentImg === 0) this.currentImg = this.countries.length;
        this.currentImg--;
      }
    }
  }
}).mount('#app');
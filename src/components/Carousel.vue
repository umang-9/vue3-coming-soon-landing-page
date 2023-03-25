<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import SwiperClass, { Navigation, Thumbs } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/thumbs'

  export default defineComponent({
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',
    // url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const thumbsSwiper = ref<SwiperClass>()
      const setThumbsSwiper = (swiper: SwiperClass) => {
        thumbsSwiper.value = swiper
      }

      return {
        modules: [Navigation, Thumbs],
        setThumbsSwiper,
        thumbsSwiper
      }
    }
  })
</script> 

<template>
  <div class="col-md-4">
    <div class="carousel">
      
      <img src="../assets/images/iPhone-mokup.png" srcset="../assets/images/iPhone-mokup@2x.png 2x, ../assets/images/iPhone-mokup@3x.png 3x" alt="iPhone" />
      <div class="swiper-carousel">
      <swiper
        class="top-swiper"
        :modules="modules"
        :space-between="10"
        :loop-fill-group-with-blank="true"
        :effect="'fade'"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
      >
        <swiper-slide>
          <img src="../assets/images/carousel-photo-01.jpg" srcset="../assets/images/carousel-photo-01@2x.jpg 2x, ../assets/images/carousel-photo-01@3x.jpg 3x" alt="Carousel Photo 1" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/carousel-photo-02.jpg" srcset="../assets/images/carousel-photo-02@2x.jpg 2x, ../assets/images/carousel-photo-02@3x.jpg 3x" alt="Carousel Photo 2" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/carousel-photo-03.jpg" srcset="../assets/images/carousel-photo-03@2x.jpg 2x, ../assets/images/carousel-photo-03@3x.jpg 3x" alt="Carousel Photo 3" />
        </swiper-slide>
      </swiper>

      <swiper
        class="thumbs-swiper"
        :modules="modules"
        :space-between="10"
        :slides-per-view="3"
        :effect="'fade'"
        :loop="true"
        :loop-fill-group-with-blank="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :watch-slides-progress="true"
        :prevent-clicks="false"
        :prevent-clicks-propagation="false"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide>
          <img src="../assets/images/small-carousel-photo-01.jpg" srcset="../assets/images/small-carousel-photo-01@2x.jpg 2x, ../assets/images/small-carousel-photo-01@3x.jpg 3x" alt="Small Carousel Photo 1" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/small-carousel-photo-02.jpg" srcset="../assets/images/small-carousel-photo-02@2x.jpg 2x, ../assets/images/small-carousel-photo-02@3x.jpg 3x" alt="Small Carousel Photo 2" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/small-carousel-photo-03.jpg" srcset="../assets/images/small-carousel-photo-03@2x.jpg 2x, ../assets/images/small-carousel-photo-03@3x.jpg 3x" alt="Small Carousel Photo 3" />
        </swiper-slide>
      </swiper>
    </div>
      
    </div>
  </div>

</template>

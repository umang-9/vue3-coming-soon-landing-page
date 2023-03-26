<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import SwiperClass, { Navigation, Thumbs, Pagination, EffectFade, Autoplay } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/thumbs'

  export default defineComponent({
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',
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
        modules: [Navigation, Thumbs, Pagination, EffectFade, Autoplay],
        setThumbsSwiper,
        thumbsSwiper
      }
    }
  })
</script>

<template>
  <div class="col carousel-wrap">
    <div class="carousel">
      <div class="iphone-image-wrap">
        <img class="iphone-image" src="../assets/images/iPhone-mokup.png" srcset="../assets/images/iPhone-mokup@2x.png 575w, ../assets/images/iPhone-mokup@3x.png 1500w" alt="iPhone" />
      </div>
      <img class="fe-test-assets" src="../assets/images/FE-test-assets.svg" alt="FE test assets" />
      <div class="swiper-carousel">
        <div class="thumb-example">
          <swiper
            class="top-swiper"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff'
            }"
            :modules="modules"
            :space-between="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :autoplay="{
                delay:8000,
                disableOnInteraction: false
            }"
          >
              <swiper-slide>
                <img src="../assets/images/carousel-photo-01.jpg" srcset="../assets/images/carousel-photo-01@2x.jpg 575w, ../assets/images/carousel-photo-01@3x.jpg 1500w" alt="Carousel Photo 1" />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/carousel-photo-02.jpg" srcset="../assets/images/carousel-photo-02@2x.jpg 575w, ../assets/images/carousel-photo-02@3x.jpg 1500w" alt="Carousel Photo 2" />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/carousel-photo-03.jpg" srcset="../assets/images/carousel-photo-03@2x.jpg 575w, ../assets/images/carousel-photo-03@3x.jpg 1500w" alt="Carousel Photo 3" />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/carousel-photo-04.jpg" srcset="../assets/images/carousel-photo-04@2x.jpg 575w, ../assets/images/carousel-photo-04@3x.jpg 1500w" alt="Carousel Photo 4" />
              </swiper-slide>
          </swiper>
          <swiper
            class="thumbs-swiper"
            :modules="modules"
            :space-between="10"
            :slides-per-view="1"
            :watch-slides-progress="true"
            :pagination="{ clickable: false }"  
            :prevent-clicks="false"
            :prevent-clicks-propagation="false"
            @swiper="setThumbsSwiper"
          >
              <swiper-slide>
                <img src="../assets/images/small-carousel-photo-01.jpg" srcset="../assets/images/small-carousel-photo-01@2x.jpg 575w, ../assets/images/small-carousel-photo-01@3x.jpg 1500w" alt="Small Carousel Photo 1" />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/small-carousel-photo-02.jpg" srcset="../assets/images/small-carousel-photo-02@2x.jpg 575w, ../assets/images/small-carousel-photo-02@3x.jpg 1500w" alt="Small Carousel Photo 2" />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/small-carousel-photo-03.jpg" srcset="../assets/images/small-carousel-photo-03@2x.jpg 575w, ../assets/images/small-carousel-photo-03@3x.jpg 1500w" alt="Small Carousel Photo 3" />
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/small-carousel-photo-04.jpg" srcset="../assets/images/small-carousel-photo-04@2x.jpg 575w, ../assets/images/small-carousel-photo-04@3x.jpg 1500w" alt="Small Carousel Photo 4" />
              </swiper-slide>
          </swiper>
        </div>
      </div>
      
    </div>
  </div>

</template>

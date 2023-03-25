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
  <div class="swiper-carousel">
    <swiper
      class="top-swiper"
      :modules="modules"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide>
        <h2>Slide 2</h2>
      </swiper-slide>
      <swiper-slide>
        <h2>Slide 3</h2>
      </swiper-slide>
      <swiper-slide>
        <h2>Slide 4</h2>
      </swiper-slide>

    </swiper>

    <swiper
      class="thumbs-swiper"
      :modules="modules"
      :space-between="10"
      :slides-per-view="4"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide>
        <h2>Slide 2</h2>
      </swiper-slide>
      <swiper-slide>
        <h2>Slide 3</h2>
      </swiper-slide>
      <swiper-slide>
        <h2>Slide 4</h2>
      </swiper-slide>

    </swiper>
  </div>

</template>
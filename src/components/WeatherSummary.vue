<template>

<div class="summary">
  <!-- weatherInfo?.weather[0].description -->
      <div
        :style="`background-image: url('/weather-main/${img}.png');`"
        class="pic-main"
      ></div>
      <div class="weather">
        <div class="temp">
          {{ Math.round( weatherInfo?.main?.temp) }} °C
        </div>
        <div class="weather-desc text-block up">
          {{ img }}
        </div>
      </div>
      <div class="city text-block">
       {{ weatherInfo?.name }},
       {{ weatherInfo?.sys?.country }}
      </div>
      <div class="date text-block">
        {{today}}
      </div>
    </div>

</template>

<script setup>
import {computed} from 'vue'


//const props =defineProps(["weatherInfo"])
const props =defineProps({
  weatherInfo:{
    type: [Object,null],
    required:true
  }
})

const img= computed( (value)=> {
  return props.weatherInfo?.weather[0].description ? props.weatherInfo.weather[0].description : ''
} )

const today = new Date().toLocaleDateString('uk-UA') //toLocaleString('uk-UA')

</script>



<style lang="sass" scoped>
@import '../assets/styles/main'

.up
  &::first-letter
    text-transform: uppercase  

.pic-main
  width: 60px
  height: 60px
  margin: 20px 0 12px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: contain

.city
  font-size: 24px

.weather
  margin: 0 0 20px
  padding: 20px 0
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)

.temp
  padding-bottom: 8px
  font-size: 32px

.text-block
  position: relative
  padding-left: 24px
  padding-bottom: 8px
  font-size: 14px

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    margin-right: 6px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

.weather-desc

  &::before
    background-image: url('/src/assets/img/weather.svg')

.city

  &::before
    background-image: url('/src/assets/img/location.svg')

.date

  &::before
    left: 2px
    width: 15px
    height: 15px
    background-image: url('/src/assets/img/calendar.svg')


</style>
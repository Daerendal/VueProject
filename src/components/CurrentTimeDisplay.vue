<template>
  <div class="footer">
    <h2>Obecny czas: {{ formattedTime }}</h2>
    <h3>Wybierz format czasu:</h3>
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-light" :class="{ active: timeFormat === '12' }">
        <input type="radio" v-model="timeFormat" value="12"> 12-godzinny
      </label>
      <label class="btn btn-light" :class="{ active: timeFormat === '24' }">
        <input type="radio" v-model="timeFormat" value="24"> 24-godzinny
      </label>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    props: {

      parentTimeFormat: String,
      
    },
    data() {
    return {
  
      timeFormat: this.parentFormattedTime,
      currentTime: new Date(),
    
    };
  },
  watch: {
    currentTime() {
      setInterval(() => {
        this.updateCurrentTime();
      }, 1000);
    },
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = new Date();
    },
  },
  computed: {
    formattedTime() {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: this.timeFormat === '24' ? true : false,
      };
      return this.currentTime.toLocaleTimeString([], options);
    },
  },
  beforeMount() {
    this.updateCurrentTime();
  },
  };
  
  </script>
  
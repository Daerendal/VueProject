<template>
  <div id="app" class="d-flex flex-column align-items-center justify-content-center">
    <options-list v-if="options" :options="options" @selectOption="selectOption" :selectedOption="selectedOption"> Tytuł Listy</options-list>

    <my-component-display  v-model="selectedOption" />

    <current-time-display :formattedTime="formattedTime" :timeFormat="timeFormat"></current-time-display>

    <ImageDisplay>
      <img src="https://via.placeholder.com/200"/> 
    </ImageDisplay>
    <ImageDisplay2>
      <template v-slot:description> <h2>Zdjecie Kontenera Nazwanego </h2></template>
      <template v-slot:content> <img src="https://via.placeholder.com/200"/> </template>

    </ImageDisplay2>

    
    <div class="text-center mt-3">
      <h4>Wybrana opcja: {{ selectedOption }}</h4>
      <button @click="fetchOptions"> Wymuś ponowne wczytanie Listy (Debugg) </button>
    </div>
  </div>
</template>


<script setup>
import Vue from 'vue';
import Vuex from 'vuex';
import MyComponentDisplay from '/home/student/Zadanie4/zadanie4/src/components/MyComponentDisplay.vue';
import { ref, onMounted  } from 'vue';
import OptionsList from './components/OptionsList.vue';
import CurrentTimeDisplay from './components/CurrentTimeDisplay.vue';
import ImageDisplay from './components/ImageDisplay.vue';
import ImageDisplay2 from '/home/student/Zadanie4/zadanie4/src/components/ImageDispaly2.vue';
import { Store } from 'vuex';

Vue.use(Vuex);

//import axios from 'axios';S

//const apiUrl = 'https://vuefirebase-e7cfe-default-rtdb.europe-west1.firebasedatabase.app/';

const store = useStore();





/*
const options = ref([
  'Opcja 1', 'Opcja 2', 'Opcja 3', 'Opcja 4', 'Opcja 5',
  'Opcja 6', 'Opcja 7', 'Opcja 8', 'Opcja 9', 'Opcja 10',
  'Opcja 11', 'Opcja 12', 'Opcja 13', 'Opcja 14', 'Opcja 15',
]);
*/


//const options = ref();
const selectedOption = ref(null);
                   
const selectOption = (option) => {
  store.dispatch('selectOption', option);
};
const fetchOptions = () => {
    store.dispatch('fetchOptions');
  };

onMounted(fetchOptions);

</script>
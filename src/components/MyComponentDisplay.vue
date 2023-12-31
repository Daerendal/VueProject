<template>
    <div class="container mt-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Selected Option</h5>
          <component :is="getComponentName(props.modelValue)" />
          <button @click="changeOption">Change to Option1 and clear container</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import MyOption1 from '/home/student/Zadanie4/zadanie4/src/components/MyOption1.vue';
  import MyOption2 from '/home/student/Zadanie4/zadanie4/src/components/MyOption2.vue';
  

  const props = defineProps(['modelValue']);
  const emits = defineEmits(['update:modelValue']);

  const changeOption = () => {
  emits('update:modelValue', 'Option1');
  };


  
  const getComponentName = (option) => {
    switch (option) {
      case 'Opcja 1':
        return MyOption1;
      case 'Opcja 2':
        return MyOption2;
      default:
        return null; // Return a default component or handle the case when no valid option is selected
    }
    
  };
  </script>
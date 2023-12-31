<template>
  <div>
    <nav class="navbar navbar-light bg-light flex-column ml-0">
      <div v-if="title" class="nav-title">
        <slot name="title">{{ title }}</slot>
      </div>

      <div class="navbar-nav align-items-start">
        <div
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="nav-item"
          :class="{ active: option === selectedOption }"
        >
          <a class="nav-link" href="#">
            {{ option }}
          </a>
        </div>
      </div>
    </nav>

  </div>
</template>

  
  <script>

  export default {
    props: {
      options: Array,
      selectedOption: String,
    },
  
    
    methods: {
      selectOption(option) {
        this.$emit('selectOption', option);
      },

  },
    
  };
  </script>
  
  <style scoped>

.navbar {
  height: 100vh; 
  display: flex;
  flex-direction:column;
}

.nav-link {
  cursor: pointer;
}

/* Stylizacja dla aktywnego elementu */
.nav-item.active {
  background-color: #007bff;
  color: #fff;
}
</style>
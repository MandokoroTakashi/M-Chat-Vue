<template>
    <div  class="register-window"> 
      <RegisterInput />
    </div>
</template>

<script>
import RegisterInput from '../components/pages/Register/RegisterInput.vue';

export default {
  name: "RegisterPage",
  components: { RegisterInput }
};
</script>

<style scoped>
.register-window {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 600px;
    max-width: 80%;
}
</style>
<template>
    <div class="register-container">
      <h2>ユーザー登録</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">氏名</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
  
        <div class="form-group">
          <label for="password">パスワード</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
  
        <button type="submit">登録</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('フォームが送信されました', this.form);
        // axios.post('/api/register', this.form).then(response => {
        //   console.log(response.data);
        // }).catch(error => {
        //   console.error(error);
        // });
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    max-width: 100%;
    min-width: 80%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: calc(100% - 16px);
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
<template>
  <header class="header">
    <h1 class="logo">M-Chat</h1>
    <nav>
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/chat">Chat</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
</nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-list li {
  display: inline;
}

.nav-list a {
  color: white;
  text-decoration: none;
}

.nav-list a:hover {
  text-decoration: underline;
}
</style>

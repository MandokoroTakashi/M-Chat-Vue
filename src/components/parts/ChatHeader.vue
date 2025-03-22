<template>
  <header class="header">
    <h1 class="logo">M-Chat</h1>
    <nav>
      <ul class="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Chat</a></li>
        <li><a href="#">Contact</a></li>
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

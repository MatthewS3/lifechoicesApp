<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to ='/'>
            <img class="img-fluid" src="https://drive.google.com/uc?id=1YnJjZP9TVT9oG2VbBVUTYFYWepwTU6PI" alt="logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to ='/' class="nav-link active">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">
                About
              </router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/admin">
                Admin
              </router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/products">
                Products
              </router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/contact">
                Contact Us
              </router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/login">
                Login 
              </router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/more">
                More
              </router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </template>

<script>
export default {

}
</script>

<style>

</style>
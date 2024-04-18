<template>
  <header
    class="m-10 mx-auto flex flex-wrap items-center justify-between gap-5 pl-5 pr-10 max-lg:justify-center"
  >
    <h1 class="text-5xl font-bold text-gray-300">The Dojo Blog</h1>
    <nav>
      <router-link
        :to="{ name: 'Home' }"
        class="ml-5 text-xl text-gray-400"
        active-class="text-gray-700 font-bold"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'Create' }"
        class="ml-5 text-xl text-gray-400"
        active-class="text-gray-700 font-bold"
        >Create Post</router-link
      >
    </nav>
  </header>
</template>

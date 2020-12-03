<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">POST IT</a>
    <button
        type="button"
        class="btn btn-primary float-right"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="$emit('create-new')"
    >
        Create Note
    </button>
  </nav>
</template>

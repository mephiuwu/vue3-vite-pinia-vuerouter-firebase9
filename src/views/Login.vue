<template>
    <div>
        <h1>Login</h1>
        <p>{{userStore.userData}}</p>
        <p>{{userStore.minuscula}}</p> <!-- Ejemplo donde se llama al getter (minuscula) de userStore -->
    </div>
</template>

<script setup>
import {useUserStore} from '../stores/user';

const userStore = useUserStore();

</script>
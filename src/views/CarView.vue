<script setup>
import {useRoute, useRouter, RouterView} from "vue-router";
import cars from "@/data/cars.json";
// Get information about the route path
const route = useRoute();
// Mutated the route as the way we want to 
const router = useRouter();

const carId = parseInt(route.params.id);
const car = cars.find(c => c.id === carId);
</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button @click="router.push(`/car/${carId}/contact`)">
            Show Contact
        </button>
        <RouterView/>
    </div>
    <div v-else>
        Car not found !
    </div>
</template>
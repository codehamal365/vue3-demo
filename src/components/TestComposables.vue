<script setup>
import { useMouse } from '../utils/mouse'

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
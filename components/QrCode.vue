<script setup lang="ts">
//importa o stores
import { useQrCode } from '../stores/qrcode';

const userQrCode = useQrCode();

</script>

<template>
    <!--Acessa o método que retorna o estado-->
    <img :src="userQrCode.codigoGerado" class="w-72 h-72" />
</template>

<style lang="scss" scoped></style>
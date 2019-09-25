<template>
    <div>
        <navbar />
        <router-view />
        <my-footer />
    </div>
</template>
<script>
export default {
    components: {
        navbar: require('./components/Navbar').default,
        'my-footer': require('./components/Footer').default
    }
}
</script>
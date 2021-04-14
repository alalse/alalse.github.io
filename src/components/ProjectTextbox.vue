<template>
    <div id="project-text" class="col-9 mx-3 mt-3">
        <h3>{{ name }}</h3>
        <div class="mt-3" v-for="section in sections" :key="section.name">
            <h5>{{ section.name }}</h5>
            <p>{{ section.text }}</p>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'ProjectTextbox',
    props: {
        name: String,
        sections: Array
    }
}
</script>

<style scoped>
h5 {
    font-weight: bold;
    text-decoration: underline;
    font-size: 16px;
}
p, li {
    font-size: 14px;
    margin: 0px;
    margin-bottom: 5px;
}
</style>
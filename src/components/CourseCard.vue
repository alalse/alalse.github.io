<template>
    <div class="card mb-2">
        <div class="title-box mx-3 mt-2">
            <div class="title mx-2">{{course.name}}</div>
        </div>

        <div class="d-flex">
            <div class="d-flex flex-direction-row">
                <div class="ml-4">Course ID: {{course.id}}</div><div class="ml-3">Academic Credits: {{course.credits}}Hp</div>
            </div> 
            <a class="ml-auto mr-4" :href="course.url">Course Page</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        course: Object
    }
}
</script>

<style scoped>
.card {
    background-color: rgb(255, 255, 255);
}
.title-box {
    border-bottom: 1px solid gray;
}
.title {
    font-size: 1.25em;
}
</style>
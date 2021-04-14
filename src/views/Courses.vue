<template>
    <div class="courses mx-auto mb-5">
        <div class="mx-auto" v-for="course in courses" :key="course.id">
            <CourseCard :course="course"/>
        </div>

        <b-container>

        </b-container>
    </div>
</template>

<script>
import DB from '../data/data.js'
import CourseCard from '../components/CourseCard'

export default {
    components: {
        CourseCard
    },
    data() {
        return {
            courses: []
        }
    },
    created() {
        this.get_courses()
    },
    methods: {
        get_courses() {
            this.courses = DB.get_courses()
        }
    }
}
</script>

<style scoped>
.courses {
    width: 40%;
}
</style>
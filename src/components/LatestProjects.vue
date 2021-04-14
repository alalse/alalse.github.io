<template>
    <div id="latest_box" class="w-50 mx-auto">
        <h3 style="width:200px;">Latest Projects</h3>
        <div id="latest_feed" class="h-100">
            <ProjectCard :project="project" v-for="project in projects" :key="project.name"/>
        </div>
    </div>
</template>

<script>
import DB from '../data/data.js'
import ProjectCard from '../components/ProjectCard'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: []
        }
    },
    created() {
        this.get_projects()
    },
    methods: {
        get_projects() {
            this.projects = DB.get_latest_projects()
        }
    }
}
</script>
<template>
    <div class="mx-auto d-flex flex-direction-row" style="width: 70%" v-if="project">

        <!-- left col -->
        <div class="col-9" ref="left">

            <!-- Top row -->
            <div class="d-flex pb-2 project-info-container">
                <div id="project-text" class="mx-3 mt-3">
                    <h3>{{ project.name }}</h3>
                    <div class="mt-3" v-for="section in project.page_sections" :key="section.name">
                        <h5>{{ section.name }}</h5>
                        <p>{{ section.text }}</p>
                    </div> 
                </div>
            </div>

            <!-- Bottom row -->
            <ProjectImageCarousel :images="project.large_images"/>
        </div>
        
        <!-- Right col -->
        <Specifications :project="project" :height="col_height"/>
    </div>
</template>

<script>
import DB from '../data/data.js'
import ProjectImageCarousel from '../components/ProjectImageCarousel'
import Specifications from '../components/Specifications'

export default {
    components: {
        ProjectImageCarousel,
        Specifications
    },
    data() {
        return {
            project: null,
            slide: 0,
            col_height: 761 //TODO: gör denna dynamisk så att den matchar höjden av "left col" ($nextTick, computed, watch, ???)
        }
    },
    created() {
        let pageUrl = window.location.href
        let project_id = pageUrl.substr(pageUrl.lastIndexOf('/') + 1)
        this.get_project(project_id)
    },
    methods: {
        get_project(project_id) {
            this.project = DB.get_project(project_id)
        }
    }
}
</script>

<style scoped>
.project-info-container {
    background-color: white; 
    border-radius: 4px;
}
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

<!--
LÅG PRIORITET
* Specifications dynamisk höjd
* small image för SlitherShots
* Kort text i 'courses' som beskriver att detta är kurser som jag har tagit
* Scaling på SlitherShots bilder
* Lägg till portfolion som projekt i portfolion!
-->
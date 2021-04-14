<template>
    <div class="w-50 mx-auto">
        <!-- Sorting options -->
        <div>
            <b-form-input class="search" v-model="input" placeholder="Search..." autofocus/>
            <div class="mt-2 d-flex justify-content-space-around">
                <b-button class="clear mt-auto" variant="light" @click="input = ''">Clear</b-button>

                <div class="ml-auto">
                    <div class="extra" v-b-modal.info-modal>Additional searching terms <b-icon class="w-2" icon="question-circle"></b-icon></div>
                    <b-button-group>
                        <b-button
                            v-for="(btn, idx) in buttons"
                            :key="idx"
                            :pressed.sync="btn.state"
                            variant="light"
                        >
                        {{ btn.caption }}
                        </b-button>
                    </b-button-group>
                </div>
            </div>
        </div>

        <!-- Sorting result -->
        <div class="mt-5">
            <ProjectCard :project="project" v-for="project in sort_projects()" :key="project.project_id"/>
        </div>

        <b-modal id="info-modal" size="lg">
            <div class="">
                By toggling the additional searching term buttons you can configure
                what kind of information the search bar searches for.<br>

                <br><b>Course ID: </b> Enables searching for projects with a specific course ID.
                <br><b>Techniques: </b> Enables searching for projects by techniques such as C++ and Vue.
            </div>
        </b-modal>
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
            projects: [],
            input: '',
            buttons: [
                { caption: 'Course ID', field: 'course_id', state: false },
                { caption: 'Techniques', field: 'techniques_used', state: false }
            ]
        }
    },
    created() {
        this.get_projects()
    },
    methods: {
        get_projects() {
            this.projects = DB.get_projects()
        },
        sort_projects(tmp) {
            tmp = []
            this.projects.forEach((project) => {
                //If name contains the input
                if (this.string_match(project.name, this.input)) {
                    tmp.push(project)
                } 
                
                //Check if any of the extra buttons are enabled
                else {
                    this.buttons.forEach((btn) => {
                        if (btn.state) {
                            if (btn.field == 'techniques_used') {
                                project['techniques_used'].some((tech) => {
                                    if (this.string_match(tech, this.input)) {
                                        tmp.push(project)
                                        return true
                                    }
                                    return false
                                })
                            } else if (this.string_match(project[btn.field], this.input)) {
                                tmp.push(project)
                            }
                        }
                    })
                }
            })
            return tmp
        },
        string_match(a, b) {
            return a.toUpperCase().includes(b.toUpperCase())
        }
    }
}
</script>

<style>
.search {
    height: 55px;
    font-size: 1.4em;
}

.extra {
    width: 204px;
    text-align: center;
    font-weight: bold;
    font-size: 0.75em;
}
</style>
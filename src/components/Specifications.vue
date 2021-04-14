<template>
    <div class="spec col-3" :style="cssProp">
        <div class="">
            <div class="col mt-4">
                <h5>Project Specifications</h5>
                <ul>
                    <li>Project Name: {{ project.name }}</li>
                    <li>Project ID: {{ project.project_id }}</li>
                    <li>Start Date: {{ project.start_date }}</li>
                    <li>End Date: {{ project.end_date }}</li>
                    <li>Github: <a :href="project.github_url">LINK</a></li>
                </ul>
            </div>

            <div class="col mt-4">
                <h5>Course Details</h5>
                <ul>
                    <li>Course Name:<br>{{project.course_name}}</li>
                    <li>Course ID: {{ project.course_id }}</li>
                    <li>Academic Credits: {{ project.academic_credit }}</li>
                </ul>
            </div>

            <div class="col mt-4">
                <h5>Techniques Used</h5>
                <ul>
                    <li v-for="tech in project.techniques_used" :key="tech">
                        {{tech}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Specifications',
    props: {
        project: Object,
        height: Number
    },
    computed: {
        cssProp() {
            return {
                '--height': this.height + 'px'
            }
        }
    }
}
</script>

<style scoped>
.spec {
    background-color: white;
    border-radius: 4px;
    height: var(--height);
    overflow-y: scroll;
}
.spec-box {
    margin-top: 20px;
}
h5 {
    font-weight: bold;
    font-size: 20px;
}
p, li {
    font-size: 15px;
    margin: 0px;
    margin-bottom: 5px;
}   
li {
    list-style-type: none;
}
ul{
    padding-left: 15px;
}
.spec::-webkit-scrollbar {
    width: 5px;
    border-radius: 0px 4px 4px 0px;
}
.spec::-webkit-scrollbar-track {
    border-radius: 0px 4px 4px 0px;
}
.spec::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 0px 4px 4px 0px;
}
.spec::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}
</style>
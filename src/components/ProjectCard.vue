<template>
    <div>
        <b-link class="h-50" id="card-link" :to="'/project/' + project.project_id" :key="project.name">
            <b-card 
                :title="project.name"
                :img-src="require('../assets/' + project.small_image)"
                img-alt="Card image" 
                img-start
                img-height="160"
                class="mb-4 d-flex align-items-center">
                <b-card-text>
                    {{ project.short_description }}
                </b-card-text>
            </b-card>
        </b-link>
    </div>
</template>

<script>
export default {
    props: {
        project: Object
    }
}
</script>

<style>
    #card-link {
        display: block;
        text-decoration: none;
        color: black;
    }
    #card-link *{
        background-color: rgb(255, 255, 255);
    }
    #card-link:hover * {
        background-color: rgb(230, 230, 230);
    }
</style>
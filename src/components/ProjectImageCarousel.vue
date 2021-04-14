<template>
    <div class="mt-3 p-2 d-flex align-content-center" style="background-color: white; border-radius: 4px;">

        <div class="arrow-left" @click="$refs.imageCarousel.prev()"></div>

        <b-carousel
            class="image-carousel d-flex align-items-center"
            :interval="interval"
            v-model="slide"
            ref="imageCarousel"
        >
             <b-carousel-slide
                v-for="image in images"
                :key="image"
                img-blank
                class="cslide"
                v-b-modal.image-modal
            >
                <div class="w-100 d-flex justify-content-center">
                    <img 
                        class="d-block img-fluid"
                        :src="require('../assets/' + image)"
                        alt="Carousel slide image"
                    >
                </div>
            </b-carousel-slide>
        </b-carousel>

        <div class="arrow-right" @click="$refs.imageCarousel.next()"></div>

        <b-modal id="image-modal" centered size="xl" v-model="showModal">
            <div class="d-flex justify-content-center">
                <img class="modal-image" :src="require('../assets/' + images[slide])"/>
            </div>
            
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        images: Array
    },
    data() {
        return {
            slide: 0,
            interval: 15000,
            showModal: false
        }
    },
    watch: {
        showModal: function(state) {
            if (state) {
                this.interval = 0
            } else {
                this.interval = 15000
            }
        }
    }
}
</script>

<style scoped>
.cslide {
    height: 350px;
}
img {
    max-height: 300px;
}
.image-carousel {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}
.arrow-right, .arrow-left {
    display: block;
    margin: auto;
    width: 21px;
    height: 21px;
    border-top: 4px solid #000;
    border-left: 4px solid #000;
}
.arrow-right {
    transform: rotate(135deg);
}
.arrow-left {
    transform: rotate(-45deg);
}
.arrow-right:hover, .arrow-left:hover {
    border-top: 4px solid rgb(168, 168, 168);
    border-left: 4px solid rgb(168, 168, 168);
}
.modal-image {
    max-height: 700px;
}
</style>
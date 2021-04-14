<template>
    <div>
        <Latest-projects/>
        <Footer/>
    </div>
</template>

<script>
import LatestProjects from '../components/LatestProjects'
import Footer from '../components/Footer'

export default {
    name: 'Home',
    components: {
        LatestProjects,
        Footer
    }
}
</script>
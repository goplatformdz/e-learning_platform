<template>
    <div>
        <h2>This is the pdf here </h2>
        <pdf :src="pdfUrl" @loaded="onPDFLoaded" />
    </div>
</template>
  
<script>
import pdf from 'vue-pdf';

export default {
    components: {
        pdf,
    },
    data() {
        return {
            pdfUrl: 'https://res.cloudinary.com/dyvetth9p/image/upload/v1698681022/pdf-uploads/wexnw4cbtnilcbenwzqd.pdf', // Replace with your PDF URL
        };
    },
    methods: {
        onPDFLoaded() {
            console.log('PDF is loaded');
        },
    },
};
</script>
  
<template>
    <div>
        This is a view
        <file-pdf></file-pdf> <!-- Use your FilePdf component here -->
    </div>
</template>
  
<script>
import filePdf from "@/components/filePdf.vue"; // Import your FilePdf component

export default {
    components: {
        filePdf, // Register your FilePdf component
    },
};
</script>
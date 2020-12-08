<template>
  <main role="main" class="container-fluid">
    <draggable v-model="notes" @change="onDragDrop" item-key="id">
      <template #item="{ element }">
        <Note :title="element.title" :desc="element.desc" :key="element.id" />
      </template>
    </draggable>
    <Modal
      v-if="showModal"
      @onSubmit="onSubmitModal"
      @onClose="$emit('modal-closed')"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Note from "@/components/Note.vue";
import Modal from "@/components/Modal.vue";
import draggable from "vuedraggable";
import { mapActions, mapGetters } from "vuex";
import NoteType, { Post } from "@/types/note";

export default defineComponent({
  name: "Content",
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      notes: [] as NoteType[],
    };
  },
  created() {
    this.getItems();
    this.notes = this.items();
  },
  methods: {
    ...mapActions(["updateItems", "addNewItem", "getItems"]),
    ...mapGetters(["items"]),
    onDragDrop() {
      this.updateItems(this.notes);
    },
    onSubmitModal(title: string, desc: string) {
      this.addNewItem(new Post(title, desc));
    },
  },
  components: {
    Note,
    Modal,
    draggable,
  },
});
</script>

<style scoped>
.container-fluid {
  margin-top: 56px;
  padding: 10px;
}
</style>
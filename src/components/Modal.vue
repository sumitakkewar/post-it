<template>
  <!-- Modal -->
  <div
    class="modal"
    style="display:block; background: rgba(0,0,0,0.7);"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Note</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('on-close')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            class="alert alert-danger"
            role="alert"
            v-for="(err, errIndex) in error"
            :key="errIndex"
          >
            {{ err }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter title here"
              v-model="title"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('on-close')">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="addNote">
            Add Note
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Modal",
  data() {
    return {
      title: "",
      description: "",
      error: [] as string[],
    };
  },
  methods: {
    addNote() {
      if (this.title.trim() === "") {
        this.error.push("Please enter title");
      }
      if (this.description.trim() === "") {
        this.error.push("Please enter description");
      }
      if (this.error.length === 0) {
        this.$emit("on-submit", this.title.trim(), this.description.trim());
        this.$emit('on-close')
      } else {
        setTimeout(() => this.error = [] , 1000);
      }
    },
  },
});
</script>

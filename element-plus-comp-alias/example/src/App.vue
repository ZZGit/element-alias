<template>
  <div>
    <my-descriptions title="User Info">
    <my-descriptions-item label="Username">kooriookami</my-descriptions-item>
    <my-descriptions-item label="Telephone">18100000000</my-descriptions-item>
    <my-descriptions-item label="Place">Suzhou</my-descriptions-item>
    <my-descriptions-item label="Remarks">
      <my-tag size="small">School</my-tag>
    </my-descriptions-item>
    <my-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</my-descriptions-item
    >
  </my-descriptions>
    <my-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <my-tab-pane label="User" name="first">User</my-tab-pane>
      <my-tab-pane label="Config" name="second">Config</my-tab-pane>
      <my-tab-pane label="Role" name="third">Role</my-tab-pane>
      <my-tab-pane label="Task" name="fourth">Task</my-tab-pane>
    </my-tabs>
    <my-steps :space="200" :active="1" finish-status="success">
      <my-step title="Done" />
      <my-step title="Processing" />
      <my-step title="Step 3" />
    </my-steps>
    <my-row class="mb-4">
      <my-button>Default</my-button>
      <my-button type="primary">Primary</my-button>
      <my-button type="success">Success</my-button>
      <my-button type="info">Info</my-button>
      <my-button type="warning">Warning</my-button>
      <my-button type="danger">Danger</my-button>
    </my-row>
    <my-menu
      default-active="2"
      class="my-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <my-sub-menu index="1">
        <template #title>
          <my-icon><location /></my-icon>
          <span>Navigator One</span>
        </template>
        <my-menu-item-group title="Group One">
          <my-menu-item index="1-1">item one</my-menu-item>
          <my-menu-item index="1-2">item two</my-menu-item>
        </my-menu-item-group>
        <my-menu-item-group title="Group Two">
          <my-menu-item index="1-3">item three</my-menu-item>
        </my-menu-item-group>
        <my-sub-menu index="1-4">
          <template #title>item four</template>
          <my-menu-item index="1-4-1">item one</my-menu-item>
        </my-sub-menu>
      </my-sub-menu>
      <my-menu-item index="2">
        <my-icon><icon-menu /></my-icon>
        <span>Navigator Two</span>
      </my-menu-item>
      <my-menu-item index="3" disabled>
        <my-icon><document /></my-icon>
        <span>Navigator Three</span>
      </my-menu-item>
      <my-menu-item index="4">
        <my-icon><setting /></my-icon>
        <span>Navigator Four</span>
      </my-menu-item>
    </my-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import type { TabsPaneContext } from 'element-plus'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

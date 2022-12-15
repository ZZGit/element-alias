<template>
  <div id="app">
    <my-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <my-menu-item index="1">处理中心</my-menu-item>
  <my-submenu index="2">
    <template slot="title">我的工作台</template>
    <my-menu-item index="2-1">选项1</my-menu-item>
    <my-menu-item index="2-2">选项2</my-menu-item>
    <my-menu-item index="2-3">选项3</my-menu-item>
    <my-submenu index="2-4">
      <template slot="title">选项4</template>
      <my-menu-item index="2-4-1">选项1</my-menu-item>
      <my-menu-item index="2-4-2">选项2</my-menu-item>
      <my-menu-item index="2-4-3">选项3</my-menu-item>
    </my-submenu>
  </my-submenu>
  <my-menu-item index="3" disabled>消息中心</my-menu-item>
  <my-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></my-menu-item>
</my-menu>
    <my-row>
      <my-col :span="12"
        ><div class="grid-content bg-purple">123123</div></my-col
      >
      <my-col :span="12"
        ><div class="grid-content bg-purple-light">123123</div></my-col
      >
    </my-row>
    <my-container>
      <my-header>Header</my-header>
      <my-container>
        <my-aside width="200px">Aside</my-aside>
        <my-container>
          <my-main>Main</my-main>
          <my-footer>Footer</my-footer>
        </my-container>
      </my-container>
    </my-container>
    <i class="my-icon-edit"></i>
    <i class="my-icon-share"></i>
    <i class="my-icon-delete"></i>
    <my-button type="primary" icon="my-icon-search">搜索</my-button>
    <div>
      <my-link href="https://element.eleme.io" target="_blank"
        >默认链接</my-link
      >
      <my-link type="primary">主要链接</my-link>
      <my-link type="success">成功链接</my-link>
      <my-link type="warning">警告链接</my-link>
      <my-link type="danger">危险链接</my-link>
      <my-link type="info">信息链接</my-link>
    </div>
    <my-radio v-model="radio" label="1">备选项</my-radio>
    <my-radio v-model="radio" label="2">备选项</my-radio>
    <my-checkbox v-model="checked">备选项</my-checkbox>
    <my-input v-model="input" placeholder="请输入内容"></my-input>
    <my-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></my-input-number>
    <my-select v-model="value" placeholder="请选择">
      <my-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </my-option>
    </my-select>

    <my-row>
      <my-button>默认按钮</my-button>
      <my-button type="primary">主要按钮</my-button>
      <my-button type="success">成功按钮</my-button>
      <my-button type="info">信息按钮</my-button>
      <my-button type="warning">警告按钮</my-button>
      <my-button type="danger">危险按钮</my-button>
    </my-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      checked: true,
      input: "",
      num: 1,
      activeIndex: '1',
        activeIndex2: '1',
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>

<style scoped>
.my-row {
  margin-bottom: 20px;
}
.my-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

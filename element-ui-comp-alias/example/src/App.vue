<template>
  <div id="app">
    <my-el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <my-el-menu-item index="1">处理中心</my-el-menu-item>
  <my-el-submenu index="2">
    <template slot="title">我的工作台</template>
    <my-el-menu-item index="2-1">选项1</my-el-menu-item>
    <my-el-menu-item index="2-2">选项2</my-el-menu-item>
    <my-el-menu-item index="2-3">选项3</my-el-menu-item>
    <my-el-submenu index="2-4">
      <template slot="title">选项4</template>
      <my-el-menu-item index="2-4-1">选项1</my-el-menu-item>
      <my-el-menu-item index="2-4-2">选项2</my-el-menu-item>
      <my-el-menu-item index="2-4-3">选项3</my-el-menu-item>
    </my-el-submenu>
  </my-el-submenu>
  <my-el-menu-item index="3" disabled>消息中心</my-el-menu-item>
  <my-el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></my-el-menu-item>
</my-el-menu>
    <my-el-row>
      <my-el-col :span="12"
        ><div class="grid-content bg-purple">123123</div></my-el-col
      >
      <my-el-col :span="12"
        ><div class="grid-content bg-purple-light">123123</div></my-el-col
      >
    </my-el-row>
    <my-el-container>
      <my-el-header>Header</my-el-header>
      <my-el-container>
        <my-el-aside width="200px">Aside</my-el-aside>
        <my-el-container>
          <my-el-main>Main</my-el-main>
          <my-el-footer>Footer</my-el-footer>
        </my-el-container>
      </my-el-container>
    </my-el-container>
    <i class="my-el-icon-edit"></i>
    <i class="my-el-icon-share"></i>
    <i class="my-el-icon-delete"></i>
    <my-el-button type="primary" icon="my-el-icon-search">搜索</my-el-button>
    <div>
      <my-el-link href="https://element.eleme.io" target="_blank"
        >默认链接</my-el-link
      >
      <my-el-link type="primary">主要链接</my-el-link>
      <my-el-link type="success">成功链接</my-el-link>
      <my-el-link type="warning">警告链接</my-el-link>
      <my-el-link type="danger">危险链接</my-el-link>
      <my-el-link type="info">信息链接</my-el-link>
    </div>
    <my-el-radio v-model="radio" label="1">备选项</my-el-radio>
    <my-el-radio v-model="radio" label="2">备选项</my-el-radio>
    <my-el-checkbox v-model="checked">备选项</my-el-checkbox>
    <my-el-input v-model="input" placeholder="请输入内容"></my-el-input>
    <my-el-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></my-el-input-number>
    <my-el-select v-model="value" placeholder="请选择">
      <my-el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </my-el-option>
    </my-el-select>

    <my-el-row>
      <my-el-button>默认按钮</my-el-button>
      <my-el-button type="primary">主要按钮</my-el-button>
      <my-el-button type="success">成功按钮</my-el-button>
      <my-el-button type="info">信息按钮</my-el-button>
      <my-el-button type="warning">警告按钮</my-el-button>
      <my-el-button type="danger">危险按钮</my-el-button>
    </my-el-row>
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
.my-el-row {
  margin-bottom: 20px;
}
.my-el-col {
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

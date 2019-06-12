<template>
  <div>
    <el-row class="categoryButton">
      <el-button>新增</el-button>
      <el-button type="danger">删除</el-button>
    </el-row>

    <div class="custom-tree-container">
      <el-row class="custom-tree-title">
        <span>类别</span>
        <span>排序</span>
        <span>操作</span>
      </el-row>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span class="custom-tree-node-title">{{ data.title }}</span>
          <span>
            <input :value="data.sort_id" @blur="handleBlur($event,data)">
          </span>
          <span>
            <el-button type="text" size="mini">编辑</el-button>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },

  methods: {
    handleBlur(event,data) {
      console.log(data,event.target.value);
      if (data.sort_id==event.target.value) {
        return
      }
      const res = window.confirm("是否确定编辑");
      if (res) {
        this.$axios({
          url: "http://localhost:8899/admin/category/edit/" + data.category_id,
          method: "POST",
          data,
          withCredentials: true
        }).then(res => {
          // console.log(res);
          this.getList()
        });
      }
    },
    getList() {
      this.$axios({
        url: "http://localhost:8899/admin/category/getlist/goods",
        method: "GET"
      }).then(res => {
        const { status, message } = res.data;
        if (status == 0) {
          this.data = message;
        }
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style>
.categoryButton {
  margin-bottom: 20px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.custom-tree-node input {
  width: 80px;
  height: 20px !important;
}
.custom-tree-title {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 8px 0 22px;
  background: #fff;
}
.custom-tree-title::before {
  position: fixed;
}
.custom-tree-title::after {
  position: fixed;
}
.custom-tree-node-title {
  width: 50px;
}
</style>

<template>
  <div>
    <el-row type="flex" justify="space-between">
      <div>
        <el-button>新增</el-button>
        <el-button type="danger" @click="handleDeleteMore">删除</el-button>
      </div>
      <div class="input-search">
        <el-input placeholder="请输入内容" class="input-with-select" v-model="searchValue">
          <el-button slot="append" icon="el-icon-search" @click='handleSearch'></el-button>
        </el-input>
      </div>
    </el-row>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%; margin-top:20px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column label="标题" width="300px">
        <template slot-scope="scope">
          <el-row type="flex" align="middle">
            <img :src="scope.row.imgurl" alt class="goods-img">
            <div>{{scope.row.title}}</div>
          </el-row>
        </template>
      </el-table-column>

      <el-table-column prop="categoryname" label="类型" width="120"></el-table-column>
      <el-table-column prop="sell_price" label="价格" width="120"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   id: 103,
        //   title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
        //   is_top: 1,
        //   is_hot: 1,
        //   is_slide: 1,
        //   categoryname: "男装",
        //   img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
        //   imgurl:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0FBvHMjF4ewMjRBbvHpsEYzmT7ZsBx1xAX3MYnLo-3rwdjII",
        //   goods_no: "NZ0000000002",
        //   stock_quantity: 200,
        //   market_price: 1000,
        //   sell_price: 800
        // }
      ],
      selectGoods: [],
      pageIndex: 1,
      pageSize:5,
      searchValue:'',
      total:0
    };
  },

  methods: {
    getList() {
      this.$axios({
        url:
          `http://localhost:8899/admin/goods/getlist?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&searchvalue=${this.searchValue}`,
        method: "GET"
      }).then(res => {
        console.log(res.data);
        const data = res.data;
        this.tableData = data.message;
        this.total=data.totalcount
      });
    },
    getDel(ids){
      this.$axios({
        url: `http://localhost:8899/admin/goods/del/${ids}`,
        method: "GET"
      }).then(res => {
        const { message, status } = res.data;
        if (status == 0) {
          this.$message.success(message);
          this.getList();
        } else {
          this.$message.error(message);
        }
      });
    },
    handleSelectionChange(val) {
      console.log(val);
      this.selectGoods = val;
    },
    handleEdit(goods) {
      console.log(goods);
    },
    handleDeleteMore() {
      console.log(this.selectGoods);
      const arr = this.selectGoods.map(v => {
        return v.id;
      });
      console.log(arr);
      const ids = arr.join(",");
      this.getDel(ids)
    },
    handleDelete(goods) {
      console.log(goods);
      const ids = goods.id;
      this.getDel(ids)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize=val
      this.getList()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex=val
      this.getList()
    },
    handleSearch(){
      this.getList()
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.input-search {
  width: 200px;
}
.goods-img {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  margin-right: 5px;
}
</style>

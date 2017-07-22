<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>权限管理</el-breadcrumb-item>
		  	<el-breadcrumb-item>用户审核</el-breadcrumb-item>
		</el-breadcrumb>
		<template>
		  <el-table
		    :data="tableUserReview"
		    border
		    style="width: 100%"
		    :default-sort = "{prop: 'date', order: 'descending'}"
		    >
		    <el-table-column
		      prop="date"
		      label="日期"
		      sortable
		      width="280">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="用户名"
		      width="280">
		    </el-table-column>
		    <el-table-column
		      label="操作">
		      	<template scope="scope">
					<el-button
	    			  size="small"
	    			  type="primary"
	    			  @click="handleReview(scope.$index, scope.row)">通过
	    			</el-button>
	    			<el-button
	    			  size="small"
	    			  type="danger"
	    			  @click="handleDelete(scope.$index, scope.row)">删除
	    			</el-button>
    			</template>
		    </el-table-column>
		  </el-table>
		</template>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        tableUserReview: [{
          date: '2016-05-02',
          name: '王小虎'
        }, {
          date: '2016-05-04',
          name: '王小虎'
        }, {
          date: '2016-05-01',
          name: '王小虎'
        }, {
          date: '2016-05-03',
          name: '王小虎'
        }, {
          date: '2016-05-02',
          name: '王小虎'
        }, {
          date: '2016-05-04',
          name: '王小虎'
        }, {
          date: '2016-05-01',
          name: '王小虎'
        }, {
          date: '2016-05-03',
          name: '王小虎'
        },{
          date: '2016-05-02',
          name: '王小虎'
        }, {
          date: '2016-05-04',
          name: '王小虎'
        }]
      }
    },
    methods: {
    	handleReview(index, row) {
	        console.log(index, row);
	        console.log("通过审核");
			  this.$confirm('将要通过该用户', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '通过成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消通过'
	          });          
	        });
	    },
    	handleDelete(index, row) {
	        console.log(index, row);
	        console.log("删除数据");
			  this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
	    }
    }
  }
</script>
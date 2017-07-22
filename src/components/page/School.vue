<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>学校管理</el-breadcrumb-item>
		  	<el-breadcrumb-item>学校管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="addSearch">
			<el-button type="danger" icon="delete">删除</el-button>
			<el-button type="primary" icon="plus">添加</el-button>
		</div>
		<template>
		  <el-table
		    :data="tableRole"
		    border
		    style="width: 100%"
		    :default-sort = "{prop: 'date', order: 'descending'}"
		    >
		     <el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="学校名称"
		      width="380">
		    </el-table-column>
		    <el-table-column
		      label="操作">
		      	<template scope="scope">
					<el-button
	    			  size="small"
	    			  type="primary"
	    			  @click="dialogRoleTran = true">编辑
	    			</el-button>
	    			<el-dialog title="学校管理" :visible.sync="dialogRoleTran"	>
                    	
                    	<el-form :model="vedioForm" :rules="rules" ref="vedioForm" label-width="100px" class="demo-vedioForm">
		                      <el-form-item label="学校名称" prop="name">
		                        <el-input v-model="vedioForm.name"></el-input>
		                      </el-form-item>
		                      <el-form-item label="学校链接" prop="link">
		                        <el-input v-model="vedioForm.link"></el-input>
		                      </el-form-item>
		                      <el-form-item>
		                      	<el-upload
								  action="https://jsonplaceholder.typicode.com/posts/"
								  list-type="picture-card"
								  :on-preview="handlePictureCardPreview"
								  :on-remove="handleRemove">
								  <i class="el-icon-plus"></i>
								</el-upload>
								<el-dialog v-model="dialogVisible" size="tiny">
								  <img width="100%" :src="dialogImageUrl" alt="">
								</el-dialog>
		                      </el-form-item>
						</el-form>
						

                    	<div slot="footer" class="dialog-footer">
						    <el-button @click="dialogRoleTran = false">取 消</el-button>
						    <el-button type="primary" @click="dialogRoleTran = false">确 定</el-button>
						</div>
      				</el-dialog>
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
export default{
	data(){
		return {
		tableRole: [{
          name: '学校1'
        }, {
          name: '学校2'
        }, {
          name: '学校3'
        }],
        dialogRoleTran:false,
        vedioForm:{
        	name:'',
        	link:''
        },
        rules:{
        	name:[{required:true,message:'请输入学校名称',trigger:'blur'}],
        	link:[{required:true,message:'请输入学校链接',trigger:'blur'}]
        },
        dialogImageUrl: '',
        dialogVisible: false
	}
},
	methods:{
		handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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


<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

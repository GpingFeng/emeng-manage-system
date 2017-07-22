<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>权限管理</el-breadcrumb-item>
		  	<el-breadcrumb-item>权限管理</el-breadcrumb-item>
		</el-breadcrumb>
		<template>
		  <el-table
		    :data="tableAuthority"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="name"
		      label="权限名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="description"
		      label="权限描述"
		      width="480">
		    </el-table-column>
		    <el-table-column
		      label="操作">
		      	<template scope="scope">
					<el-button
	    			  size="small"
	    			  type="primary"
	    			  @click="dialogAuthor = true">编辑
	    			</el-button>
	    			<el-dialog title="权限编辑" :visible.sync="dialogAuthor"	>
                    	
						<el-form :model="authorForm" :rules="rules" ref="authorForm" label-width="100px" class="demo-authorForm">
		                      <el-form-item label="权限名" prop="name">
		                        <el-input v-model="authorForm.name" disabled></el-input>
		                      </el-form-item>
		                      <el-form-item label="权限描述" prop="description">
							    	<el-input type="textarea" v-model="authorForm.description"></el-input>
							  </el-form-item>
						</el-form>


                    	<div slot="footer" class="dialog-footer">
						    <el-button @click="dialogAuthor = false">取 消</el-button>
						    <el-button type="primary" @click="dialogAuthor = false">确 定</el-button>
						</div>
      				</el-dialog>
      			
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
        tableAuthority: [{
          name: '权限-02',
          description: '王小虎管理'
        }, {
          name: '权限-04',
          description: '王小虎管理'
        }, {
          name: '权限-01',
          description: '王小虎管理'
        }, {
          name: '权限-03',
          description: '王小虎管理'
        }],
        dialogAuthor : false,
        authorForm:{
        	name:'',
        	description:''
        },
        rules:{
        	description:[
        		{ required:true,message:"请输入权限描述",trigger:'blur'}
        	 ]
        }
        
      }
    },
    methods:{
    	handerAuthority(index, row) {
	        console.log(index, row);
	        console.log("通过审核");
			  this.$confirm('将要编辑该权限', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '编辑成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消编辑'
	          });          
	        });
	    }
    }
  }
</script>
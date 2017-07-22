<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>权限管理</el-breadcrumb-item>
		  	<el-breadcrumb-item>角色管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="addSearch">
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
		      prop="name"
		      label="用户名"
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
	    			<el-dialog title="角色管理" :visible.sync="dialogRoleTran"	>
                    	
						<template>
						  <el-transfer v-model="value1" :data="data"></el-transfer>
						</template>
						


                    	<div slot="footer" class="dialog-footer">
						    <el-button @click="dialogRoleTran = false">取 消</el-button>
						    <el-button type="primary" @click="dialogRoleTran = false">确 定</el-button>
						</div>
      				</el-dialog>
      			
    			</template>
		    </el-table-column>
		  </el-table>
		</template>
	</div>
		
</template>

<script>
export default{
	data(){
		const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `权限 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
		return {
		tableRole: [{
          name: '管理员'
        }, {
          name: '会员'
        }, {
          name: '游客'
        }],
        dialogRoleTran : false,
        data: generateData(),
        value1: [1, 4]
	}
},
	methods:{
		
	}
}
</script>
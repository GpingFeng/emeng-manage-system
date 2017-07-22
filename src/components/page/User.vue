<template>
	<div>
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
		  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="addSearch">
			<el-button type="primary" icon="plus"  @click="dialogFormVisible = true ">添加</el-button>
			<el-input
			  placeholder="请输入搜索内容"
			  icon="search"
			  v-model="input2"
			  :on-icon-click="handleSearch" class="search">
			</el-input>
		</div>
		<template>
		  <el-table
		    :data="tableUser"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="jobId"
		      label="用户工号"
		      width="200">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="schoolName"
		      label="所属学校">
		    </el-table-column>
		    <el-table-column
		    	prop="phone"
		    	label="电话"
		    	width="180">
		    </el-table-column>
		    <el-table-column
		    	label="操作">
		    	<template scope="scope">
			        <el-button
			          size="small"
			         @click="dialogFormVisible = true">
			         编辑
			          </el-button>
			          	<el-dialog title="编辑/添加用户" :visible.sync="dialogFormVisible"	>
						  <!-- <el-form :model="form">
						    <el-form-item label="活动名称" :label-width="formLabelWidth">
						      <el-input v-model="form.name" auto-complete="off"></el-input>
						    </el-form-item>
						    <el-form-item label="活动区域" :label-width="formLabelWidth">
						      <el-select v-model="form.school" placeholder="请选择活动区域">
						        <el-option label="区域一" value="shanghai"></el-option>
						        <el-option label="区域二" value="beijing"></el-option>
						      </el-select>
						    </el-form-item>
						  </el-form> -->
                    <el-form :model="userForm" :rules="rules" ref="userForm" label-width="100px" class="demo-userForm">
                      <el-form-item label="用户名" prop="name">
                        <el-input v-model="userForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="password">
                        <el-input v-model="userForm.password"></el-input>
                      </el-form-item>
                      <el-form-item label="所属学校" prop="school">
                        <el-select v-model="userForm.school" placeholder="请选择所属学校">
                          <el-option label="学校一" value="shanghai"></el-option>
                          <el-option label="学校二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="电话" prop="phone">
                          <el-input v-model="userForm.phone"></el-input>
                      </el-form-item>
                      <el-form-item label="邮箱" prop="email">
                          <el-input v-model="userForm.email"></el-input>
                      </el-form-item>
                      <el-form-item label="所属角色" prop="role">
                          <el-select v-model="userForm.role" placeholder="请选择所属角色">
                            <el-option label="管理员" value="role1"></el-option>
                            <el-option label="游客" value="role2"></el-option>
                          </el-select>
                      </el-form-item>
      
                      <el-form-item>
                        <!-- <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div> -->
                        <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
                        <el-button @click="resetForm('userForm')">重置</el-button>
                      </el-form-item>
                    </el-form>
          						  <!-- <div slot="footer" class="dialog-footer">
          						    <el-button @click="dialogFormVisible = false">取 消</el-button>
          						    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          						  </div> -->
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

    <div class="block pageCom">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
    </div>
    
	</div>
</template>
<script>
export default {
  data() {
    return {
      input2: '',
		  tableUser: [{
          jobId: '20160802',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160804',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160801',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160803',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160803',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160803',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160803',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160803',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160803',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }, {
          jobId: '20160803',
          name: '王小虎',
          schoolName: '广东工业大学',
          phone:"15521096584",

        }],
        dialogFormVisible: false,
        // form: {
        //   name: '',
        //   school: '',
        //   date1: '',
        //   date2: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        // },
        // formLabelWidth: '120px',
        userForm: {
          name: '光平',
          password:'123456',
          school: '广工',
          phone: '15562565365',
          email:'23412@qq.com',
          role:'游客'
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            {required:true,message:'请输入密码',trigger:'blur'},
            {min:6,max:12,message:'长度在6到12个字符',trigger:'blur'}
          ],
          school: [
            { required: true, message: '请选择所属学校', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { validator(r,v,b){console.log(v);(/^1\d{10}$/).test(v)?b():b(new Error('以1开头的11位数字'))}}
          ],
          email: [
            { required: true, message: '请输入email', trigger: 'blur' },
            { type:'email',message:'email格式不正确',trigger:'blur' }
          ],
          role: [
            { required:true,message:'请选择所属角色',trigger:'blur'}
          ]
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    }
  },
  methods: {
    handleSearch(ev) {
      console.log(ev);
    },
    handleAdd(){
    	console.log("添加数据");
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
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            // dialogFormVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}
</script>
<style>
.search{
	display: inline-block;
	width: 200px;
}

</style>
<template>
    <div class="sidebar">
     <!-- theme="dark" -->
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
        <!-- 我们用 v-for 指令根据一组数组的选项列表进行渲染。 v-for 指令需要以 item in items 形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名。 -->
        <!-- 在 v-for 块中，我们拥有对父作用域属性的完全访问权限。 v-for 还支持一个可选的第二个参数为当前项的索引。 -->
            <!-- <template v-for="item in items"> -->
            <!-- 因为 v-if 是一个指令，需要将它添加到一个元素上。但是如果我们想切换多个元素呢？此时我们可以把一个 <template> 元素当做包装元素，并在上面使用 v-if。最终的渲染结果不会包含 <template> 元素。 -->
                <!-- <template v-if="item.subs"> -->
                    <!-- 如果存在多个的时候 -->
<!--                     <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template> -->
                        <!-- 当在组件中使用 v-for 时，key 现在是必须的。 -->
                        <!-- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有唯一 id。这个特殊的属性相当于 Vue 1.x 的 track-by ，但它的工作方式类似于一个属性，所以你需要用 v-bind 来绑定动态值（在这里使用简写）： -->
                        <!-- <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else> -->
                    <!-- 只存在一个的时候 -->
                    <!-- <el-menu-item :index="item.index"> -->
                        <!-- 不能复用,只需添加一个具有唯一值的 key 属性即可 -->
                        <!-- <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template> -->

            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"> 
                        <!-- 我们可以传给 v-bind:class 一个对象，以动态地切换 class 。 -->
                            <i :class="item.icon"></i>{{ item.title }}
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{subItem.title}}
                    
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {    
        // created() {
        //     this.$axios.get().then(response => {
        //         this.items = response.data
        //     })
        // }

        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '自述'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '权限管理',
                        subs: [
                            {
                                index: 'user',
                                title: '用户管理'
                            },
                            {
                                index: 'userreview',
                                title: '用户审核'
                            },
                            {
                                index:'authority',
                                title:'权限管理'
                            },
                            {
                                index:'role',
                                title:'角色管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-upload',
                        index: 'video',
                        title: '视频管理'
                    },
                    {
                        icon: 'el-icon-date',
                        index: 'advertisement',
                        title: '广告管理'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'teacher',
                        title: '名师管理',
                        subs:[
                            {
                                index:'newteacher',
                                title:'教坛新秀'
                            },
                            {
                                index:'oldteacher',
                                title:'名师风采'
                            }
                        ]
                    },
                    {
                        icon:'el-icon-picture',
                        index:'school',
                        title:'学校管理'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                // 返回对象的计算属性
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>

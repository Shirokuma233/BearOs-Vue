import { createRouter, createWebHistory } from "vue-router";
import { useAdminStore } from "@/stores/admin/admin.js";

const routes = [
  {
    //登录页
    path: "/login",   
    component: () => import("../views/admin/login.vue")
  },
  {
    //后台页
    path: "/admin",   
    component: () => import("../views/admin/home.vue"),
    meta: {requiresAuth: true},
    children: [
      {
        //添加管理员
        path: "administrator/add",
        component: () => import("@/views/admin/administrator/add.vue"),
      },
      {
        //管理员列表
        path: "administrator/list",
        component: () => import("@/views/admin/administrator/list.vue"),
      },
      {
        //编辑用户
        path: "administrator/edit",
        component: () => import("@/views/admin/administrator/edit.vue"),
      },

      //GPU资源管理
      {
        //集群概览
        path: "category/cluster",
        component: () => import("@/views/admin/category/cluster.vue"),
      },
      {
        //实验环境
        path: "category/environment",
        component: () => import("@/views/admin/category/environment.vue"),
      },
      {
        //我的实验
        path: "category/mylab",
        component: () => import("@/views/admin/category/mylab.vue"),
      },
      {
        //我的文件
        path: "category/myfile",
        component: () => import("@/views/admin/category/myfile.vue"),
      },
      {
        //共享平台
        path: "category/share",
        component: () => import("@/views/admin/category/share.vue"),
      },
      {
        //平台数据集
        path: "category/dataset",
        component: () => import("@/views/admin/category/dataset.vue"),
      },
    ]
  },
  {
    path: "/",   
    redirect: "/admin"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const adminStore = useAdminStore()
    if(adminStore.data.token === "")
    {
      router.push("/login")
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
import VueRouter from "vue-router"
import Index from '@/pages/Index'
import Upload from '@/pages/Upload'
import About from '@/pages/About'
const route = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/Index',
            name:'Index',
            component:Index
        },
        {
            path:'/Upload',
            name:'Upload',
            component:Upload
        },
        {
            path:'/About',
            name:'About',
            component:About
        },
        {
            path:'*',
            redirect:'/Index'
        }
    ]
})
export default route
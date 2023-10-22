const base = {
    get() {
        return {
            url : "http://localhost:8080/djangoiqy67/",
            name: "djangoiqy67",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "兴趣班预约管理系统"
        } 
    }
}
export default base

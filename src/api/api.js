// 引入 http 文件并且导出为http对象
import http from '@/api/http.js'

const api = {
	// 登录注册
	initApi(param) {
		return http.postJson('/account/teacher/init', param).then(res => {
			return res;
		});
	},
	// 查看学生笔记日期
	teacherGetDateApi(param) {
		return http.get('/note/teacher/getDate', param).then(res => {
			return res;
		});
	},
	// 统计信息
	StatisticsPostIndexApi(param){
		return http.postForm('/teacher/index',param).then(res=>{
			return res;
		})
	}
}
export default api;

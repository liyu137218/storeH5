<template>
  <div class="barrages-drop">
	    <!-- isShow是否显示弹幕 -->
	  <!-- barrageList弹幕数据列表 -->
	  <!-- maxWordCount弹幕最大字符长度，超过则忽略 -->
	  <!-- messageHeight弹幕高度 -->
	  <!-- loop是否循环 -->
	  <!-- throttleGap弹幕之间的节流时间 -->
    <vue-baberrage
      :isShow="barrageIsShow" 
      :barrageList="barrageList"
      :maxWordCount="maxWordCount"
      :throttleGap="throttleGap"
      :loop="barrageLoop"
      :boxHeight="boxHeight"
      :messageHeight="messageHeight"
    >
    </vue-baberrage>
  </div>
</template>
<script>
import Vue from 'vue';
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage';

Vue.use(vueBaberrage);

export default {
	name: 'Barrages',
	data() {
		return {
			msg: '某客户下单了1111111111111',
			barrageIsShow: true,
			messageHeight: 3,
			boxHeight: 100,
			barrageLoop: true,
			maxWordCount: 3,
			throttleGap: 50000,
			barrageList: []
		};
	},
	mounted() {
		this.addToList();
	},
	methods: {
		addToList() {
			let list = [
				
				{
					id: 1,
					avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
					msg: this.msg,
					time: 3,
				
				}
			];
			list.forEach((v) => {
				this.barrageList.push({
					id: v.id,
					avatar: v.avatar,
					msg: v.msg,
					time: v.time,
					type: MESSAGE_TYPE.NORMAL,
					barrageStyle: v.barrageStyle
				});
			});
		}
	}
};
</script>
<style  lang="less">
.barrages-drop {
	.baberrage-stage {
		position: absolute;
		width: 100%;
		height: 150px;
		overflow: hidden;
		top: 0;
		margin-top: 30px;
	}
}
</style>


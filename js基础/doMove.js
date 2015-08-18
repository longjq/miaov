/**
 * 动起来的插件
 * @param  {[type]}   obj      [dom元素]
 * @param  {[type]}   attr     [style值]
 * @param  {[type]}   dir      [步长]
 * @param  {[type]}   target   [目标]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
function doMove(obj,attr,dir,target,callback){
    //设定方向
    dir = parseInt(getStyle(obj,attr)) < target ? dir : -dir;
    //去除多次调用
    clearInterval(obj.timer);
    //设置定时器重复并获取id值
    obj.timer = setInterval(function(){
        //速度=当前位置px+步长
        var speed = parseInt(getStyle(obj,attr))+dir;
        //判断：是否超出目标值 || 是否小于目标值
        if (speed>target && dir >0 || speed<target && dir <0) {
            speed = target;
        };
        //设置当前对象目标值
        obj.style[attr] = speed+'px';
        //判断是否到达目标值
        if (speed==target) {
            //到达目标值，就清除定时器
            clearInterval(obj.timer);
            callback && callback();
            // if (callback) {
            //     callback();
            // };
        };
    },30);
}
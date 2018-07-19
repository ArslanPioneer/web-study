(function(w){
    var L =w.L ? w.L:{};//定义l框架的根
    //我们占用了全局l变量名
    L.Dialog=function(selector){
        //接受用户传来的选择器
        //1.要有一个show方法弹出对话框
        //2.关闭close
        //3.动态解析用户的输入信息
         var dialogDiv=document.querySelector(selector);
         //拿到用户给的标题文本
         var title=dialogDiv.getAttribute('title');
         
         var dialogCover=document.createElement('div');

         dialogCover.className='dialog-cover';
         dialogCover.style.display="none";
         document.body.appendChild(dialogCover);

         var strHTML ="";
        strHTML += '<div class="dialog">';
        strHTML += '<div class-"dialog-h">';
        strHTML += '<h3>' + title + '</h3>';
        strHTML += '<i class="btnClose" id="btnClose">x<i>'
        strHTML += '</div>'
        strHTML += '<div class="dialog-b">'
        strHTML += dialogDiv.innerHTML;
        strHTML += '</div>'
        strHTML += '</div>'

        dialogDiv.innerHTML =strHTML;
         //ch
    //      <div class="dialog-wrap" id="dialogBox">
    //      <div class="dialog-cover"></div>
    //      <div class="dialog" id="dialog">
    //          <div class="dialog-h">
    //              <h3>对话框的头部</h3>
    //              <i class="btnClose" id="btnClose">X</i>
    //          </div>
     
    //          <div class="dialog-b">
    //              <p>对话框的内部</p>
    //          </div>
    //      </div>
    //  </div>


         var dialog={
             dialogDiv:dialogDiv,//用户dialog的div
             title: title,  //用户标题

             show : function(){
                //弹出层
                //第一个显示 遮罩层 第二个显示对话框 第三个给关闭按钮绑定点击事件
                this.dialogCover.style.display='block';
                this.dialogDiv.style.display='block';
                var self=this;
                document.querySelector('.btnClose').onclick =function(){
                    self.close();
                };
            },

             close: function(){
                this.dialogCover.style.display='none';
                this.dialogDiv.style.display='none';
                var self=this;
                document.querySelector('.btnClose').onclick = null;
 
                
             }
         }
    };
        return dialog;

    w.L=L;
})(window||{})




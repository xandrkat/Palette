function randomStr(o){var o=o||9;s="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var n=0;o>n;n++)s+=r.charAt(Math.floor(Math.random()*r.length));return s}function rmproject(o){if(!confirm("Are You Sure to Delete"))return!1;var o={project:o,action:"rmproject"};$.ajax({url:"projects/remove",type:"POST",data:o,success:function(o,n,e){debug?(console.log(o),console.log(n)):location.reload()},error:function(o,n,e){debug?(console.log(data),console.log(n)):location.reload()}})}function backup(o){var n={project:o,action:"backup"};$.ajax({url:"projects/backup",type:"POST",data:n,success:function(o,n,e){debug?(console.log(o),console.log(n)):location.reload()},error:function(o,n,e){debug?(console.log(data),console.log(n)):location.reload()}})}function download_zip(o){var n={project:o,action:"backup"};$.ajax({url:"projects/downloadzip",type:"POST",data:n,success:function(o,n,e){debug&&(console.log(o),console.log(n)),location.href=".palette/downloads/"+o},error:function(o,n,e){debug&&(console.log(data),console.log(n))}})}function restore_backup(o){var n={backup:o,action:"restore_backup"};$.ajax({url:"backup/restore_backup",type:"POST",data:n,success:function(o,n,e){debug?(console.log(o),console.log(n)):location.reload()},error:function(o,n,e){debug?(console.log(data),console.log(n)):location.reload()}})}function delete_backup(o){var n={backup:o,action:"delete_backup"};$.ajax({url:"backup/delete_backup",type:"POST",data:n,success:function(o,n,e){debug?(console.log(o),console.log(n)):location.reload()},error:function(o,n,e){debug?(console.log(data),console.log(n)):location.reload()}})}function createfile(){var o=$("#file").val(),n=$("#title").val(),e=$("#robots").val(),c=$("#description").val(),l=$("#keywords").val(),a=$("#icon").val(),t=$("#directory").val(),s=$("#baseurl").val(),r={file:o,title:n,robots:e,description:c,keywords:l,icon:a,action:"createfile",directory:t,baseurl:s};$.ajax({url:"projects/createfile",type:"POST",data:r,success:function(o,n,e){debug?(console.log(o),console.log(n)):location.reload()},error:function(o,n,e){debug?(console.log(data),console.log(n)):location.reload()}})}function install(){var o=$("#admin").val(),n=$("#password").val(),e=$("#repassword").val();if(n!==e)return echo.alert("Password Doesn't Match"),!1;if(""===n||""===e||""===o)return echo.alert("Fill All Field"),!1;if(n.length<4)return echo.alert("Password Should be 4 or More Than 4 Character Long"),!1;var c={admin:o,password:n,repassword:e,action:"install"};$.ajax({url:"install.php",type:"POST",data:c,success:function(o,n,e){debug?(console.log(o),console.log(n)):location.href="login"},error:function(o,n,e){debug?(console.log(data),console.log(n)):location.href="login"}})}function dialogbox(o){var n={};$.ajax({url:o,type:"POST",data:n,success:function(o,n,e){debug?(console.log(o),console.log(n)):($("#dialog-shadow").css("display","block"),$("#dialog-body").html(o))},error:function(o,n,e){debug?(console.log(data),console.log(n)):($("#dialog-shadow").css("display","block"),$("#dialog-body").html("<span class='red'>Error Occured</span>"))}})}function createproject(){var o=$("#project").val(),n=$("#title").val(),e=$("#robots").val(),c=$("#description").val(),l=$("#keywords").val(),a=$("#icon").val(),t={newproject:o,title:n,robots:e,description:c,keywords:l,icon:a,action:"createproject"};$.ajax({url:"projects/createproject",type:"POST",data:t,success:function(o,n,e){debug?(console.log(o),console.log(n)):location.href="login"},error:function(o,n,e){debug?(console.log(data),console.log(n)):location.href="login"}})}function login(){var o=$("#user_login").val(),n=$("#user_password").val(),e={user_login:o,user_password:n,action:"login"};$.ajax({url:"login/getLogin",type:"POST",data:e,success:function(o,n,e){debug||(console.log(o),console.log(n),location.reload())},error:function(o,n,e){debug||(console.log(data),console.log(n))}})}function cons(){return cons="///////////////////////////////////////////////////\n",cons+="Palatte CMS is a PHP Based Site Builder.\n",cons+="Developed By : Ganesh Kandu\n",cons+="Contact Mail : kanduganesh@gmail.com\n",cons+="///////////////////////////////////////////////////\n",cons+="                     .:/++/:.                     \n",cons+="                ./yddyo+//oymNs.          .dy`    \n",cons+="             -omdo-          -hN/        :NMMN/   \n",cons+="          `+dd+`     `/os/`    oM/      oMMMMMMs  \n",cons+="        `oNy-       /Ns:/sN:    dN     yNsMMMMMMs \n",cons+="       oNs.        .Mo   `Ms    +M-   oM//MMMMMMM`\n",cons+="     -mh.          .Ny:/smy`    sM.   MM.oMMMMMMN`\n",cons+="    oN/    ./+/`    `+oo/`     :My    yMNNMMMMMm- \n",cons+="   ym.    /MMMMN.             /Ms      -oNmdmd:   \n",cons+="  sm`     hMMMMM-            +M/         m: oh    \n",cons+=" :M-      .dMMm+            -M+          N- /d    \n",cons+=" dy         ``              .Nho:        M+:ym    \n",cons+=".M:    `+yyo`                 ./sdy-     MMMMN    \n",cons+="/M`   `mMMMMh                     :dy    MMMMN    \n",cons+="/M`   :MMMMM+                      `m+   mMMMM    \n",cons+=".M:    :syo-                       `N+   dMMMM    \n",cons+=" sd`          `sdh+               :my    hMMMM    \n",cons+="  hh`        `mMMMMs            :hm/     sMMMM    \n",cons+="   om/        mMMMm-         -smy:       /MMMM    \n",cons+="    .yd+`      -:.       ./ydy/`         `MMMd    \n",cons+="      `/yhs+:.`  `.-:+shhs/.              dMMo    \n",cons+="          .:+osyyyyso/-                   /MN`    \n",cons+="                                           y-     \n",cons+="                                                  \n"}function palette_popup_values(){for(var o=0;$("#palette_popup_input_"+o).length;)output[o]=$("#palette_popup_input_"+o).val(),o++;return output}var debug=!1,output=new Object;$("#Login").click(function(){login()}),$("#createproject").click(function(){createproject()}),$("#install").click(function(){install()}),$("#createfile").click(function(){createfile()}),console.info(cons());var echo=new Object,ok_id="palette_popup_ok";echo.alert=function(o){$("#palette_popup").css("display","block"),$("#palette_popup_head").css("display","none"),$("#palette_popup_Body").html(o)},$("#palette_popup_cancel").click(function(){$("#palette_popup").css("display","none")}),$("#palette_popup_ok").click(function(){palette_popup_values();$("#palette_popup").css("display","none")});
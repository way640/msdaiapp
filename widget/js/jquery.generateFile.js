/** 
* Created by Administrator on 2015/3/2. 
*/ 
/** 
* 将指定字符写入指定名称的文本文件中，并可以选择本地保存目录，兼容IE11和谷歌浏览器 
*/ 
function DownloadText(filename,content) 
{ 
if(document.createElement("a").download)//谷歌和火狐，使用“a”标签的download属性 
{ 
var aLink = document.createElement('a'); 
aLink.download = fileName; 
aLink.href = content;//dataurl格式的字符串 
var evt = document.createEvent("HTMLEvents");//建立一个事件 
evt.initEvent("click", false, false);//这是一个单击事件 
aLink.dispatchEvent(evt);//触发事件 
} 
else//IE 
{ 
var Folder=BrowseFolder(); 
var fso,tf; 
fso = new ActiveXObject("Scripting.FileSystemObject");//创建文件系统对象 
tf = fso.CreateTextFile(Folder+filename,true);//创建一个文本文件 
tf.write(content);//向文件中写入内容 
tf.Close(); 
alert("保存完毕！"); 
} 
} 
function BrowseFolder() 
{//使用ActiveX控件，选择保存目录 
try 
{ 
var Message = "请选择保存文件夹"; //选择框提示信息 
var Shell = new ActiveXObject( "Shell.Application" ); 
var Folder = Shell.BrowseForFolder(0,Message,0x0040,0x11);//起始目录为：我的电脑 
//var Folder = Shell.BrowseForFolder(0,Message,0); //起始目录为：桌面 
if(Folder != null) 
{ 
Folder = Folder.items(); // 返回 FolderItems 对象 
Folder = Folder.item(); // 返回 Folderitem 对象 
Folder = Folder.Path; // 返回路径 
if(Folder.charAt(Folder.length-1) != "\\") 
{ 
Folder = Folder + "\\"; 
} 
//document.all.savePath.value=Folder; 
return Folder; 
} 
} 
catch(e) 
{ 
alert(e.message); 
} 
}
### angularjs 的安装教程

http://webprogramozas.inf.elte.hu/#!/subjects/webeng/practices/angular1

https://blog.csdn.net/zhp_em/article/details/78581109?utm_source=blogxgwz9

npm install -g typescript typings

![image-20200523202534365](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200523202534365.png)

npm install -g angular-cli@latest

![image-20200523203146314](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200523203146314.png)



```
npx -p @angular/cli ng new my-application-name 
# Routing: yes
# Stylesheet format: CSS
## go into the app directory cd my-application-name
```

![image-20200524150142210](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524150142210.png)

![image-20200524150157501](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524150157501.png)

然后在vscode里面打开创建的angular的项目的地址，如下，`启动npm start，启动本地的服务,这里需要注意，这个就是一个服务，不能关闭，否则这个服务器就没有，也就是你启动的lcoahost:4200就不在运行了。`



![image-20200524145735100](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524145735100.png)

启动成功后，如下图所示。

![image-20200524150248471](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524150248471.png)

打开localhost:4200,可以看到这个界面

![image-20200524151455761](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524151455761.png)

所有的代码将会在src/app这个文件夹下面写，后面就算是新建，也是在这里新建，然后package.json里面是angular安装的一些依赖包，如果想要查看某个命令，也可以在这里看。

![image-20200524151932428](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524151932428.png)

![image-20200524152018264](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524152018264.png)

![image-20200524152025301](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524152025301.png)

angular的组件化模式，可以将每一个 页面都变成一个single-page，用

![image-20200524153847069](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524153847069.png)

这个是整个页面的index页面，我们想要的界面都可以直接写在这里也可以用<app-root>这样自定的主键替代，而这个组件的意思是什么那，在src下面的app文件夹就是这个app-root的组件

![image-20200524154017224](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524154017224.png)

html文件就是这个页面的html文件，在这里里面我们不需要写下面这个写整体的代码

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularjsSpring</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

，我们只需要把我们想要展示的html就可以。

```
<p>hello world</p>
```

![image-20200524154307925](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524154307925.png)

然后css文件里面写的也是局部的样式文件，这个文件只对这个（app）文件夹下的html代码起作用，ts文件相当于是js文件，因为ts文件时js文件的父类，所有在js里面能执行的，在ts里面都能用，然后在ts文件里面也定义了这整个组件在index.html的名称。

![image-20200524154624806](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524154624806.png)

这里也定义了templates和style。

![image-20200524155145380](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524155145380.png)

这个是定义在全局的css，在导入的时候，已经要在import和后面这个地址之间要加上一个空格，否则这个导入是不成功的，注意这个问题

![image-20200524155306765](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524155306765.png)

现在导入成功了，在 app.component.html导入如下文件，这里在替换文件的时候html文件里面有一个

```
<router-outlet></router-outlet>
```

这个不能删除了，否则就路由不到index里面去了。

```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Issue tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">List issues</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">New issue</a>
    </li>
    </ul>
  </div>
</nav>

<router-outlet></router-outlet>
```

安装ng-bootstrap

```
npm install --save @ng-bootstrap/ng-bootstrap
```

![image-20200524160148992](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524160148992.png)

安装成功。

遇到错误，直接安装这个 npx ng add @angular/localize

![image-20200524162829107](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524162829107.png)

![image-20200524163034251](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524163034251.png)

安装成功

![image-20200524163106271](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524163106271.png)

这个时候，点击这个icon的时候就会出现这个下拉菜单

代码是如下

```
 (click)="isCollapsed = !isCollapsed"
  [ngbCollapse]="isCollapsed"
  isCollapsed = true;
```

![image-20200524163152494](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524163152494.png)

![image-20200524163206994](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524163206994.png)

```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Issue tracker</a>
  <button (click)="isCollapsed = !isCollapsed"  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" [ngbCollapse]="isCollapsed">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">List issues</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">New issue</a>
    </li>
    </ul>
  </div>
</nav>

<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">Issue tracker</h1>
    <p class="lead">Submit issues and track them!</p>
    <p><a class="btn btn-primary" href="#" role="button">New issue</a></p>
  </div>
</div>
```

把这个jumbotron加在nav下面，就会出现这个界面

![image-20200524163740203](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524163740203.png)

然后创建几个separate的组件，

```
npx ng generate component issue-list
```

npx是安装的命令，ng generate component 是新建一个组件，后面的issue-list是组件名，这个组件必须中间有一个中横线，具体原因还不知道，

![image-20200524164647916](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524164647916.png)

![image-20200524164717628](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524164717628.png)

成功后，在导航栏就多了一个文件夹，在app之下，说明这个app文件夹是一个主文件夹，下面的新建一个组件都会在这个里面新建一个文件夹。

![image-20200524170205243](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524170205243.png)

安装路由，这样我们就可以根据这个写路由来访问页面，当然这个时候需要把app的html文件的

![](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524170827326.png)

![image-20200524170845319](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524170845319.png)

把之前的那些<app-issue-list></app-issue-list>删掉，并且把光标移到<router-outlet></router-outlet>后面，这里的router就是呼应了前面的那个router.ts文件，只要在那里面申明了，这里都知道。

![image-20200524172126757](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524172126757.png)

这里如果直接用herf的话，就会直接重新加载整个资源和页面，并不是真正的single-page，所以这里要把这个换成routerLink这个关键字，这样再加载页面的时候就不会加载整个页面，而是局部刷新

![image-20200524172245323](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524172245323.png)

在对应的组件里面的ts文件里面，export里面，加入想要变成动态的参数，如这里的title，然后在html页面调用这个参数

![image-20200524173413566](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524173413566.png)![image-20200524173522939](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524173522939.png)

最后就能看到下面这个页面的内容改变了，这就是angular的动态绑定

![image-20200524173358912](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524173358912.png)

![image-20200524181930476](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524181930476.png)

创建一个issue类，在这个类里面定义每个字段的属性，

![image-20200524182800730](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524182800730.png)

这样如果在使用的时候，有缺失值或者类型定义错误，就会提示错误

![image-20200524182851764](C:\Users\Administrator.PC-20171120YKOX\AppData\Roaming\Typora\typora-user-images\image-20200524182851764.png)




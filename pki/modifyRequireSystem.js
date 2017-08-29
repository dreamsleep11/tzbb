/**
 * Created on 2017/2/17.
 * 自定义编译文件
 * 增加路由自动扫描
 */
//
let DEBUG=true;
process.argv.forEach((cur,index,arr)=>{
    if(cur=="--dev"){
        DEBUG=new Boolean(arr[index+1]=="true");
    }
});
global.__DEV__=DEBUG;
//
const Module = require("metro-bundler/build/Resolver/polyfills/require.js");
console.info("ccccccc");
console.dir(Module);
console.info("ccccccc");
Module.moduleSystem = require.resolve("./require.js");


function makeAutoRouteIndex() {

    const fs = require("fs");
    const path = require("path");
    console.info(path.resolve("js/routes/common/"));
    function listDepDir(dir, callback) {
        var flist = fs.readdirSync(path.resolve(dir));
        for (var i = 0; i < flist.length; i++) {
            var item = flist[i];
            var info = fs.statSync(dir + item);
            if (info.isDirectory()) {
                listDepDir(dir + item + "/", callback);
            } else {
                callback(item, info);
            }
        }
    }

    var arr = ["var arr=[]"];
    listDepDir("js/routes/common/", function (file) {
        if (file.endsWith(".js") && file != "index.js") {
            arr.push(`arr=arr.concat(require("./common/${file}"))`);
        }
    });
    var folder=DEBUG?"debug":"release";
    listDepDir(`js/routes/${folder}/`, function (file) {
        if (file.endsWith(".js") && file != "index.js") {
            arr.push(`arr=arr.concat(require("./${folder}/${file}"))`);
        }
    });
    arr.push("module.exports=arr");
    console.info(arr.join("\n"));
    fs.writeFileSync("js/routes/index.js",arr.join("\n"));
}
makeAutoRouteIndex();


require("react-native/local-cli/cli.js").run();

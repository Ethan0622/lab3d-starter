module.exports = {
    "extends": [
        "prettier",
    ],
    "singleQuote": true, // 使用单引号
    "printWidth": 90, // 超过最大值换行
    "htmlWhitespaceSensitivity": "ignore",
    "semi": false, // 结尾不用分号
    "disableLanguages": ["vue"] // 不格式化vue文件，vue文件的格式化单独设置
};
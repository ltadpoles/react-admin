module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['airbnb'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react'],
    rules: {
        // 关闭react默认的props-type验证
        'react/prop-types': [0],
        //关闭使用解构赋值的检测
        'react/destructuring-assignment': [0, 'always'],
        // 解决require报错问题
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ]
    }
}

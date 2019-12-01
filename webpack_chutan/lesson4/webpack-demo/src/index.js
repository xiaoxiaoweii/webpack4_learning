
// import _ from 'lodash';

// // 业务逻辑  1mb
// console.log(_.join(['a','b','c'],'***'));
// //此处省略10万行代码
// console.log(_.join(['a','b','c'],'***'));

function getComponent() {
    return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['xiaoxiao','wei'], '-');
        return element;

    })
}

getComponent().then(element => {  
    document.body.appendChild(element);
});



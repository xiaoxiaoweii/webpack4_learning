
import _ from 'lodash';

function getComponent() {
    return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['xiaoxiao','wei'], '-');
        return element;

    })
}

document.addEventListener('click', () => {
    getComponent().then(element => {  
        document.body.appendChild(element);
    });
    
})





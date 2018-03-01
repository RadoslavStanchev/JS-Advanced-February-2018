function getExtensibleObject (){
    let obj = {
        extend: (template) => {
        for (let property in template) {
            if(typeof template[property] === 'function'){
                Object.getPrototypeOf(obj)[property] = template[property]
            } else {
                obj[property] = template[property]
            }
        }
    }
}

    return obj
}
let extensibleObject = getExtensibleObject()
extensibleObject.extend({
        extensionMethod: function () {
            return 'neshto'
        },
        extensionProperty: 'someString'

})
console.log(extensibleObject)
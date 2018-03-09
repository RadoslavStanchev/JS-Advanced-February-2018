function validateRequest(obj){
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    const validVersions = [ 'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const uriRegex = /^([A-Za-z0-9.]+)$/g
    const messageRegex = /^[^<>\\&'"]+ $/g
    let mapPropertyToUpperFirstLetter = {
        method: 'Method',
        uri: 'URI',
        version: 'Version',
        message: 'Message'
    }
    let validate = {
        method:()=>{
            if(!obj.hasOwnProperty('method')){
                return false
            }
            if(!validMethods.includes(obj['method'])){
                return false
            }
            return true
        },
        uri:()=>{
            if(!obj.hasOwnProperty('uri')){
                return false
            }
            if(!uriRegex.test(obj['uri'])) {//|| obj['uri' !== '*']){
                return false
            }
            return true
        },
        version:()=>{
            if(!obj.hasOwnProperty('version')){
                return false
            }
            if(!validVersions.includes(obj['version'])){
                return false
            }
            return true
        },
        message:()=>{
            if(!obj.hasOwnProperty('message')){
                return false
            }
            if(messageRegex.test(obj['message'])) {
                return false
            }
            return true
        },
    }
    for (let property in validate) {
       if(!validate[property]()){
           throw new Error(`Invalid request header: Invalid ${mapPropertyToUpperFirstLetter[property]}`)
       }
    }

    return obj
}
validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
})
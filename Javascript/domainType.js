
/**
write a function that labels domains as ==> 'organization', 'commercial', 'network', 'information'

exemple
- INPUT ==> ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

- EXPECTED OUTPUT ==> [ 'organization', 'commercial', 'network', 'information' ]
*/

function domainType(domains) {
    let domainNames = {
        net: 'network',
        info: 'information',
        com: 'commercial',
        org: 'organization'
    }
    const answer = []
    for(let url of domains) {
        let urlArray = url.split('.')
        if(urlArray[urlArray.length-1] in domainNames) {
            answer.push(domainNames[urlArray[urlArray.length-1]])
        }
    }
    //console.log(answer)
    return answer
}


const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
domainType(domains)
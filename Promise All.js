w=t=>new Promise(r=>setTimeout(r,t,1))
// write clone for function below
//Promise.all([Promise.resolve(20), w(3000), w(3000), w(3000)]).then((r) => {
//	console.log(r);
//});
// TODO: Wtite short version!
function myPromiseAll(promises){
    let res=[],resolved=0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
			promises[i].then((response) => {
				res.push(response);
				if (resolved === res.length) {
					resolve(res);
				}
			});
		}
    })
}
myPromiseAll([w(3000), w(3000), w(3000)]);
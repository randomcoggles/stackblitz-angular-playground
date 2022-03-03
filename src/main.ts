
// (function(){
// 		var newName =  '_oldThen' + new Date().getTime();
//         Promise.prototype._oldThen = Promise.prototype.then;
//         Promise.prototype.then = function() {
//             console.log('A promise was called with arguments: ', arguments[0], arguments[1]);
// 			debugger;
//             Promise.prototype._oldThen.apply(this,arguments);
//         };
// }());

// var promise = new Promise(resolve => {
//    return resolve('Resolve');
// }, reject => {
// 	return reject('Rejected');
// });

// promise.then(function(result){
// 	console.log('Then: ',result);
// },function(error){
// 	console.log('Then: ', error);
// });

import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));

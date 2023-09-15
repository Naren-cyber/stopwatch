var E=function(e,r){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},E(e,r)};function p(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");E(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function A(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],s;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return o}function v(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}function f(e){return typeof e=="function"}function C(e){var r=function(n){Error.call(n),n.stack=new Error().stack},t=e(r);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var x=C(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function S(e,r){if(e){var t=e.indexOf(r);0<=t&&e.splice(t,1)}}var y=function(){function e(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var r,t,n,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=A(s),c=u.next();!c.done;c=u.next()){var l=c.value;l.remove(this)}}catch(a){r={error:a}}finally{try{c&&!c.done&&(t=u.return)&&t.call(u)}finally{if(r)throw r.error}}else s.remove(this);var h=this.initialTeardown;if(f(h))try{h()}catch(a){o=a instanceof x?a.errors:[a]}var U=this._finalizers;if(U){this._finalizers=null;try{for(var m=A(U),b=m.next();!b.done;b=m.next()){var L=b.value;try{V(L)}catch(a){o=o??[],a instanceof x?o=v(v([],d(o)),d(a.errors)):o.push(a)}}}catch(a){n={error:a}}finally{try{b&&!b.done&&(i=m.return)&&i.call(m)}finally{if(n)throw n.error}}}if(o)throw new x(o)}},e.prototype.add=function(r){var t;if(r&&r!==this)if(this.closed)V(r);else{if(r instanceof e){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(r)}},e.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},e.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},e.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&S(t,r)},e.prototype.remove=function(r){var t=this._finalizers;t&&S(t,r),r instanceof e&&r._removeParent(this)},e.EMPTY=function(){var r=new e;return r.closed=!0,r}(),e}(),k=y.EMPTY;function F(e){return e instanceof y||e&&"closed"in e&&f(e.remove)&&f(e.add)&&f(e.unsubscribe)}function V(e){f(e)?e():e.unsubscribe()}var B={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},I={setTimeout:function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var i=I.delegate;return(i==null?void 0:i.setTimeout)?i.setTimeout.apply(i,v([e,r],d(t))):setTimeout.apply(void 0,v([e,r],d(t)))},clearTimeout:function(e){var r=I.delegate;return((r==null?void 0:r.clearTimeout)||clearTimeout)(e)},delegate:void 0};function W(e){I.setTimeout(function(){throw e})}function D(){}function w(e){e()}var O=function(e){p(r,e);function r(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,F(t)&&t.add(n)):n.destination=Q,n}return r.create=function(t,n,i){return new T(t,n,i)},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(y),G=Function.prototype.bind;function P(e,r){return G.call(e,r)}var J=function(){function e(r){this.partialObserver=r}return e.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(n){_(n)}},e.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(n){_(n)}else _(r)},e.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(t){_(t)}},e}(),T=function(e){p(r,e);function r(t,n,i){var o=e.call(this)||this,s;if(f(t)||!t)s={next:t??void 0,error:n??void 0,complete:i??void 0};else{var u;o&&B.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return o.unsubscribe()},s={next:t.next&&P(t.next,u),error:t.error&&P(t.error,u),complete:t.complete&&P(t.complete,u)}):s=t}return o.destination=new J(s),o}return r}(O);function _(e){W(e)}function K(e){throw e}var Q={closed:!0,next:D,error:K,complete:D},X=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Z(e){return e}function $(e){return e.length===0?Z:e.length===1?e[0]:function(t){return e.reduce(function(n,i){return i(n)},t)}}var M=function(){function e(r){r&&(this._subscribe=r)}return e.prototype.lift=function(r){var t=new e;return t.source=this,t.operator=r,t},e.prototype.subscribe=function(r,t,n){var i=this,o=tt(r)?r:new T(r,t,n);return w(function(){var s=i,u=s.operator,c=s.source;o.add(u?u.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},e.prototype.forEach=function(r,t){var n=this;return t=R(t),new t(function(i,o){var s=new T({next:function(u){try{r(u)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});n.subscribe(s)})},e.prototype._subscribe=function(r){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(r)},e.prototype[X]=function(){return this},e.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return $(r)(this)},e.prototype.toPromise=function(r){var t=this;return r=R(r),new r(function(n,i){var o;t.subscribe(function(s){return o=s},function(s){return i(s)},function(){return n(o)})})},e.create=function(r){return new e(r)},e}();function R(e){var r;return(r=e??B.Promise)!==null&&r!==void 0?r:Promise}function N(e){return e&&f(e.next)&&f(e.error)&&f(e.complete)}function tt(e){return e&&e instanceof O||N(e)&&F(e)}function rt(e){return f(e==null?void 0:e.lift)}function Y(e){return function(r){if(rt(r))return r.lift(function(t){try{return e(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function q(e,r,t,n,i){return new et(e,r,t,n,i)}var et=function(e){p(r,e);function r(t,n,i,o,s,u){var c=e.call(this,t)||this;return c.onFinalize=s,c.shouldUnsubscribe=u,c._next=n?function(l){try{n(l)}catch(h){t.error(h)}}:e.prototype._next,c._error=o?function(l){try{o(l)}catch(h){t.error(h)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=i?function(){try{i()}catch(l){t.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,c}return r.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},r}(O),nt=C(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),j=function(e){p(r,e);function r(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return r.prototype.lift=function(t){var n=new H(this,this);return n.operator=t,n},r.prototype._throwIfClosed=function(){if(this.closed)throw new nt},r.prototype.next=function(t){var n=this;w(function(){var i,o;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var s=A(n.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(t)}}catch(l){i={error:l}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},r.prototype.error=function(t){var n=this;w(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var i=n.observers;i.length;)i.shift().error(t)}})},r.prototype.complete=function(){var t=this;w(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},r.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},r.prototype._innerSubscribe=function(t){var n=this,i=this,o=i.hasError,s=i.isStopped,u=i.observers;return o||s?k:(this.currentObservers=null,u.push(t),new y(function(){n.currentObservers=null,S(u,t)}))},r.prototype._checkFinalizedStatuses=function(t){var n=this,i=n.hasError,o=n.thrownError,s=n.isStopped;i?t.error(o):s&&t.complete()},r.prototype.asObservable=function(){var t=new M;return t.source=this,t},r.create=function(t,n){return new H(t,n)},r}(M),H=function(e){p(r,e);function r(t,n){var i=e.call(this)||this;return i.destination=t,i.source=n,i}return r.prototype.next=function(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,t)},r.prototype.error=function(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,t)},r.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},r.prototype._subscribe=function(t){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&i!==void 0?i:k},r}(j),it=function(e){p(r,e);function r(t){var n=e.call(this)||this;return n._value=t,n}return Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),r.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},r.prototype.getValue=function(){var t=this,n=t.hasError,i=t.thrownError,o=t._value;if(n)throw i;return this._throwIfClosed(),o},r.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},r}(j),ot={now:function(){return Date.now()},delegate:void 0},st=function(e){p(r,e);function r(t,n){return e.call(this)||this}return r.prototype.schedule=function(t,n){return this},r}(y),g={setInterval:function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var i=g.delegate;return(i==null?void 0:i.setInterval)?i.setInterval.apply(i,v([e,r],d(t))):setInterval.apply(void 0,v([e,r],d(t)))},clearInterval:function(e){var r=g.delegate;return((r==null?void 0:r.clearInterval)||clearInterval)(e)},delegate:void 0},ut=function(e){p(r,e);function r(t,n){var i=e.call(this,t,n)||this;return i.scheduler=t,i.work=n,i.pending=!1,i}return r.prototype.schedule=function(t,n){var i;if(n===void 0&&(n=0),this.closed)return this;this.state=t;var o=this.id,s=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(s,o,n)),this.pending=!0,this.delay=n,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(s,this.id,n),this},r.prototype.requestAsyncId=function(t,n,i){return i===void 0&&(i=0),g.setInterval(t.flush.bind(t,this),i)},r.prototype.recycleAsyncId=function(t,n,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return n;n!=null&&g.clearInterval(n)},r.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(t,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,n){var i=!1,o;try{this.work(t)}catch(s){i=!0,o=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},r.prototype.unsubscribe=function(){if(!this.closed){var t=this,n=t.id,i=t.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,S(o,this),n!=null&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},r}(st),z=function(){function e(r,t){t===void 0&&(t=e.now),this.schedulerActionCtor=r,this.now=t}return e.prototype.schedule=function(r,t,n){return t===void 0&&(t=0),new this.schedulerActionCtor(this,r).schedule(n,t)},e.now=ot.now,e}(),ct=function(e){p(r,e);function r(t,n){n===void 0&&(n=z.now);var i=e.call(this,t,n)||this;return i.actions=[],i._active=!1,i}return r.prototype.flush=function(t){var n=this.actions;if(this._active){n.push(t);return}var i;this._active=!0;do if(i=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,i){for(;t=n.shift();)t.unsubscribe();throw i}},r}(z),lt=new ct(ut);function at(e,r){return Y(function(t,n){var i=0;t.subscribe(q(n,function(o){return e.call(r,o,i++)&&n.next(o)}))})}function ft(e,r){return r===void 0&&(r=lt),Y(function(t,n){var i=null,o=null,s=null,u=function(){if(i){i.unsubscribe(),i=null;var l=o;o=null,n.next(l)}};function c(){var l=s+e,h=r.now();if(h<l){i=this.schedule(void 0,l-h),n.add(i);return}u()}t.subscribe(q(n,function(l){o=l,s=r.now(),i||(i=r.schedule(c,e),n.add(i))},function(){u(),n.complete()},void 0,function(){o=i=null}))})}export{it as BehaviorSubject,j as Subject,ft as debounceTime,at as filter};

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="177",U_=0,xf=1,F_=2,l0=1,O_=2,Ri=3,ls=0,fn=1,Ne=2,os=0,Lo=1,rs=2,yf=3,Sf=4,B_=5,Is=100,k_=101,H_=102,V_=103,G_=104,W_=200,q_=201,X_=202,Y_=203,Ou=204,Bu=205,K_=206,Z_=207,$_=208,j_=209,J_=210,Q_=211,tx=212,ex=213,nx=214,ku=0,Hu=1,Vu=2,Ho=3,Gu=4,Wu=5,qu=6,Xu=7,u0=0,ix=1,sx=2,Ui=0,ox=1,rx=2,ax=3,cx=4,lx=5,ux=6,hx=7,h0=300,Vo=301,Go=302,Yu=303,Ku=304,rl=306,Oi=1e3,zs=1001,Zu=1002,Tn=1003,dx=1004,Da=1005,Un=1006,Ul=1007,Di=1008,Bi=1009,d0=1010,f0=1011,Vr=1012,Wh=1013,Vs=1014,ri=1015,la=1016,qh=1017,Xh=1018,Gr=1020,p0=35902,m0=1021,g0=1022,Zn=1023,Wr=1026,qr=1027,Yh=1028,Kh=1029,v0=1030,Zh=1031,$h=1033,Rc=33776,Cc=33777,Pc=33778,Lc=33779,$u=35840,ju=35841,Ju=35842,Qu=35843,th=36196,eh=37492,nh=37496,ih=37808,sh=37809,oh=37810,rh=37811,ah=37812,ch=37813,lh=37814,uh=37815,hh=37816,dh=37817,fh=37818,ph=37819,mh=37820,gh=37821,Ic=36492,vh=36494,_h=36495,_0=36283,xh=36284,yh=36285,Sh=36286,fx=3200,px=3201,x0=0,mx=1,ns="",Xe="srgb",Wo="srgb-linear",Vc="linear",me="srgb",so=7680,Mf=519,gx=512,vx=513,_x=514,y0=515,xx=516,yx=517,Sx=518,Mx=519,Mh=35044,Ef="300 es",Ni=2e3,Gc=2001;class er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wf=1234567;const Io=Math.PI/180,Xr=180/Math.PI;function ai(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function jh(n,t){return(n%t+t)%t}function Ex(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function wx(n,t,e){return n!==t?(e-n)/(t-n):0}function Nr(n,t,e){return(1-e)*n+e*t}function Ax(n,t,e,i){return Nr(n,t,1-Math.exp(-e*i))}function Tx(n,t=1){return t-Math.abs(jh(n,t*2)-t)}function bx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Rx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Cx(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Px(n,t){return n+Math.random()*(t-n)}function Lx(n){return n*(.5-Math.random())}function Ix(n){n!==void 0&&(wf=n);let t=wf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dx(n){return n*Io}function Nx(n){return n*Xr}function zx(n){return(n&n-1)===0&&n!==0}function Ux(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ox(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),u=r((t+i)/2),d=o((t-i)/2),h=r((t-i)/2),f=o((i-t)/2),p=r((i-t)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*p,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*p,a*l);break;case"ZYZ":n.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const j={DEG2RAD:Io,RAD2DEG:Xr,generateUUID:ai,clamp:jt,euclideanModulo:jh,mapLinear:Ex,inverseLerp:wx,lerp:Nr,damp:Ax,pingpong:Tx,smoothstep:bx,smootherstep:Rx,randInt:Cx,randFloat:Px,randFloatSpread:Lx,seededRandom:Ix,degToRad:Dx,radToDeg:Nx,isPowerOfTwo:zx,ceilPowerOfTwo:Ux,floorPowerOfTwo:Fx,setQuaternionFromProperEuler:Ox,normalize:fe,denormalize:Xn};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let mn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const h=o[r+0],f=o[r+1],p=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(d!==v||c!==h||l!==f||u!==p){let g=1-a;const m=c*h+l*f+u*p+d*v,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const C=Math.sqrt(y),b=Math.atan2(C,m*_);g=Math.sin(g*b)/C,a=Math.sin(a*b)/C}const x=a*_;if(c=c*g+h*x,l=l*g+f*x,u=u*g+p*x,d=d*g+v*x,g===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=o[r],h=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+u*d+c*f-l*h,t[e+1]=c*p+u*h+l*d-a*f,t[e+2]=l*p+u*f+a*h-c*d,t[e+3]=u*p-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(o/2),h=c(i/2),f=c(s/2),p=c(o/2);switch(r){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-i*l,this._z=o*u+r*l+i*c-s*a,this._w=r*u-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Af.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Af.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),u=2*(a*e-o*s),d=2*(o*i-r*e);return this.x=e+c*l+r*d-a*u,this.y=i+c*u+a*l-o*d,this.z=s+c*d+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fl.copy(this).projectOnVector(t),this.sub(Fl)}reflect(t){return this.sub(Fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fl=new w,Af=new mn;class Yt{constructor(t,e,i,s,o,r,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],v=s[0],g=s[3],m=s[6],_=s[1],y=s[4],x=s[7],C=s[2],b=s[5],P=s[8];return o[0]=r*v+a*_+c*C,o[3]=r*g+a*y+c*b,o[6]=r*m+a*x+c*P,o[1]=l*v+u*_+d*C,o[4]=l*g+u*y+d*b,o[7]=l*m+u*x+d*P,o[2]=h*v+f*_+p*C,o[5]=h*g+f*y+p*b,o[8]=h*m+f*x+p*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-i*o*u+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*r-a*l,h=a*c-u*o,f=l*o-r*c,p=e*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(s*l-u*i)*v,t[2]=(a*i-s*r)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(r*e-i*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ol.makeScale(t,e)),this}rotate(t){return this.premultiply(Ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new Yt;function S0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bx(){const n=Wc("canvas");return n.style.display="block",n}const Tf={};function Do(n){n in Tf||(Tf[n]=!0,console.warn(n))}function kx(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Hx(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vx(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bf=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){const n={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===me&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===me&&(s.r=No(s.r),s.g=No(s.g),s.b=No(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ns?Vc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Do("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Do("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wo]:{primaries:t,whitePoint:i,transfer:Vc,toXYZ:bf,fromXYZ:Rf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:me,toXYZ:bf,fromXYZ:Rf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}const re=Gx();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function No(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oo;class Wx{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{oo===void 0&&(oo=Wc("canvas")),oo.width=t.width,oo.height=t.height;const s=oo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=oo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Fi(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fi(e[i]/255)*255):e[i]=Fi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qx=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Bl(s[r].image)):o.push(Bl(s[r]))}else o=Bl(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xx=0;const kl=new w;class an extends er{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,i=zs,s=zs,o=Un,r=Di,a=Zn,c=Bi,l=an.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ai(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oi:t.x=t.x-Math.floor(t.x);break;case zs:t.x=t.x<0?0:1;break;case Zu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oi:t.y=t.y-Math.floor(t.y);break;case zs:t.y=t.y<0?0:1;break;case Zu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=h0;an.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,i=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,C=(m+1)/2,b=(u+h)/4,P=(d+v)/4,L=(p+g)/4;return y>x&&y>C?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=b/i,o=P/i):x>C?x<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),i=b/s,o=L/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=P/o,s=L/o),this.set(i,s,o,e),this}let _=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yx extends er{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:i.depth},o=new an(s);this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Jh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends Yx{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class M0 extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kx extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Hn):Hn.fromBufferAttribute(o,r),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(t.matrixWorld),this.union(Na)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),za.subVectors(this.max,hr),ro.subVectors(t.a,hr),ao.subVectors(t.b,hr),co.subVectors(t.c,hr),Zi.subVectors(ao,ro),$i.subVectors(co,ao),ys.subVectors(ro,co);let e=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-ys.z,ys.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,ys.z,0,-ys.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-ys.y,ys.x,0];return!Hl(e,ro,ao,co,za)||(e=[1,0,0,0,1,0,0,0,1],!Hl(e,ro,ao,co,za))?!1:(Ua.crossVectors(Zi,$i),e=[Ua.x,Ua.y,Ua.z],Hl(e,ro,ao,co,za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xi=[new w,new w,new w,new w,new w,new w,new w,new w],Hn=new w,Na=new ds,ro=new w,ao=new w,co=new w,Zi=new w,$i=new w,ys=new w,hr=new w,za=new w,Ua=new w,Ss=new w;function Hl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Ss.fromArray(n,o);const a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),c=t.dot(Ss),l=e.dot(Ss),u=i.dot(Ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Zx=new ds,dr=new w,Vl=new w;let fs=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Zx.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Vl)),this.expandByPoint(dr.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const yi=new w,Gl=new w,Fa=new w,ji=new w,Wl=new w,Oa=new w,ql=new w;let E0=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Gl.copy(t).add(e).multiplyScalar(.5),Fa.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(Gl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Fa),a=ji.dot(this.direction),c=-ji.dot(Fa),l=ji.lengthSq(),u=Math.abs(1-r*r);let d,h,f,p;if(u>0)if(d=r*c-a,h=r*a-c,p=o*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+r*h+2*a)+h*(r*d+h+2*c)+l}else h=o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*c)+l;else h=-o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-r*o+a)),h=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-o,-c),o),f=h*(h+2*c)+l):(d=Math.max(0,-(r*o+a)),h=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+h*(h+2*c)+l);else h=r>0?-o:o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gl).addScaledVector(Fa,h),f}intersectSphere(t,e){yi.subVectors(t.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(o=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(o=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,i,s,o){Wl.subVectors(e,t),Oa.subVectors(i,t),ql.crossVectors(Wl,Oa);let r=this.direction.dot(ql),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ji.subVectors(this.origin,t);const c=a*this.direction.dot(Oa.crossVectors(ji,Oa));if(c<0)return null;const l=a*this.direction.dot(Wl.cross(ji));if(l<0||c+l>r)return null;const u=-a*ji.dot(ql);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class pe{constructor(t,e,i,s,o,r,a,c,l,u,d,h,f,p,v,g){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,u,d,h,f,p,v,g)}set(t,e,i,s,o,r,a,c,l,u,d,h,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/lo.setFromMatrixColumn(t,0).length(),o=1/lo.setFromMatrixColumn(t,1).length(),r=1/lo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const h=r*u,f=r*d,p=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+p*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=p+f*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,p=l*u,v=l*d;e[0]=h+v*a,e[4]=p*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*u,e[9]=-a,e[2]=f*a-p,e[6]=v+h*a,e[10]=r*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,p=l*u,v=l*d;e[0]=h-v*a,e[4]=-r*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*u,e[9]=v-h*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const h=r*u,f=r*d,p=a*u,v=a*d;e[0]=c*u,e[4]=p*l-f,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,f=r*l,p=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=p*d+f,e[1]=d,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+p,e[10]=h-v*d}else if(t.order==="XZY"){const h=r*c,f=r*l,p=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=r*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($x,t,jx)}lookAt(t,e,i){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ji.crossVectors(i,Sn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ji.crossVectors(i,Sn)),Ji.normalize(),Ba.crossVectors(Sn,Ji),s[0]=Ji.x,s[4]=Ba.x,s[8]=Sn.x,s[1]=Ji.y,s[5]=Ba.y,s[9]=Sn.y,s[2]=Ji.z,s[6]=Ba.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],_=i[3],y=i[7],x=i[11],C=i[15],b=s[0],P=s[4],L=s[8],E=s[12],S=s[1],I=s[5],H=s[9],N=s[13],B=s[2],k=s[6],U=s[10],Z=s[14],W=s[3],tt=s[7],ct=s[11],vt=s[15];return o[0]=r*b+a*S+c*B+l*W,o[4]=r*P+a*I+c*k+l*tt,o[8]=r*L+a*H+c*U+l*ct,o[12]=r*E+a*N+c*Z+l*vt,o[1]=u*b+d*S+h*B+f*W,o[5]=u*P+d*I+h*k+f*tt,o[9]=u*L+d*H+h*U+f*ct,o[13]=u*E+d*N+h*Z+f*vt,o[2]=p*b+v*S+g*B+m*W,o[6]=p*P+v*I+g*k+m*tt,o[10]=p*L+v*H+g*U+m*ct,o[14]=p*E+v*N+g*Z+m*vt,o[3]=_*b+y*S+x*B+C*W,o[7]=_*P+y*I+x*k+C*tt,o[11]=_*L+y*H+x*U+C*ct,o[15]=_*E+y*N+x*Z+C*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+o*c*d-s*l*d-o*a*h+i*l*h+s*a*f-i*c*f)+v*(+e*c*f-e*l*h+o*r*h-s*r*f+s*l*u-o*c*u)+g*(+e*l*d-e*a*f-o*r*d+i*r*f+o*a*u-i*l*u)+m*(-s*a*u-e*c*d+e*a*h+s*r*d-i*r*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],_=d*g*l-v*h*l+v*c*f-a*g*f-d*c*m+a*h*m,y=p*h*l-u*g*l-p*c*f+r*g*f+u*c*m-r*h*m,x=u*v*l-p*d*l+p*a*f-r*v*f-u*a*m+r*d*m,C=p*d*c-u*v*c-p*a*h+r*v*h+u*a*g-r*d*g,b=e*_+i*y+s*x+o*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return t[0]=_*P,t[1]=(v*h*o-d*g*o-v*s*f+i*g*f+d*s*m-i*h*m)*P,t[2]=(a*g*o-v*c*o+v*s*l-i*g*l-a*s*m+i*c*m)*P,t[3]=(d*c*o-a*h*o-d*s*l+i*h*l+a*s*f-i*c*f)*P,t[4]=y*P,t[5]=(u*g*o-p*h*o+p*s*f-e*g*f-u*s*m+e*h*m)*P,t[6]=(p*c*o-r*g*o-p*s*l+e*g*l+r*s*m-e*c*m)*P,t[7]=(r*h*o-u*c*o+u*s*l-e*h*l-r*s*f+e*c*f)*P,t[8]=x*P,t[9]=(p*d*o-u*v*o-p*i*f+e*v*f+u*i*m-e*d*m)*P,t[10]=(r*v*o-p*a*o+p*i*l-e*v*l-r*i*m+e*a*m)*P,t[11]=(u*a*o-r*d*o-u*i*l+e*d*l+r*i*f-e*a*f)*P,t[12]=C*P,t[13]=(u*v*s-p*d*s+p*i*h-e*v*h-u*i*g+e*d*g)*P,t[14]=(p*a*s-r*v*s-p*i*c+e*v*c+r*i*g-e*a*g)*P,t[15]=(r*d*s-u*a*s+u*i*c-e*d*c-r*i*h+e*a*h)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,d=a+a,h=o*l,f=o*u,p=o*d,v=r*u,g=r*d,m=a*d,_=c*l,y=c*u,x=c*d,C=i.x,b=i.y,P=i.z;return s[0]=(1-(v+m))*C,s[1]=(f+x)*C,s[2]=(p-y)*C,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(h+m))*b,s[6]=(g+_)*b,s[7]=0,s[8]=(p+y)*P,s[9]=(g-_)*P,s[10]=(1-(h+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=lo.set(s[0],s[1],s[2]).length();const r=lo.set(s[4],s[5],s[6]).length(),a=lo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);const l=1/o,u=1/r,d=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,e.setFromRotationMatrix(Vn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Ni){const c=this.elements,l=2*o/(e-t),u=2*o/(i-s),d=(e+t)/(e-t),h=(i+s)/(i-s);let f,p;if(a===Ni)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===Gc)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Ni){const c=this.elements,l=1/(e-t),u=1/(i-s),d=1/(r-o),h=(e+t)*l,f=(i+s)*u;let p,v;if(a===Ni)p=(r+o)*d,v=-2*d;else if(a===Gc)p=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const lo=new w,Vn=new pe,$x=new w(0,0,0),jx=new w(1,1,1),Ji=new w,Ba=new w,Sn=new w,Cf=new pe,Pf=new mn;class ye{constructor(t=0,e=0,i=0,s=ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ye.DEFAULT_ORDER="XYZ";class w0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jx=0;const Lf=new w,uo=new mn,Si=new pe,ka=new w,fr=new w,Qx=new w,ty=new mn,If=new w(1,0,0),Df=new w(0,1,0),Nf=new w(0,0,1),zf={type:"added"},ey={type:"removed"},ho={type:"childadded",child:null},Xl={type:"childremoved",child:null};class je extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new w,e=new ye,i=new mn,s=new w(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Yt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return uo.setFromAxisAngle(t,e),this.quaternion.multiply(uo),this}rotateOnWorldAxis(t,e){return uo.setFromAxisAngle(t,e),this.quaternion.premultiply(uo),this}rotateX(t){return this.rotateOnAxis(If,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(Nf,t)}translateOnAxis(t,e){return Lf.copy(t).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(If,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(Nf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ka.copy(t):ka.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(fr,ka,this.up):Si.lookAt(ka,fr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),uo.setFromRotationMatrix(Si),this.quaternion.premultiply(uo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zf),ho.child=t,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ey),Xl.child=t,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zf),ho.child=t,this.dispatchEvent(ho),ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,ty,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}je.DEFAULT_UP=new w(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new w,Mi=new w,Yl=new w,Ei=new w,fo=new w,po=new w,Uf=new w,Kl=new w,Zl=new w,$l=new w,jl=new Fe,Jl=new Fe,Ql=new Fe;class wn{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Gn.subVectors(t,e),s.cross(Gn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Gn.subVectors(s,e),Mi.subVectors(i,e),Yl.subVectors(t,e);const r=Gn.dot(Gn),a=Gn.dot(Mi),c=Gn.dot(Yl),l=Mi.dot(Mi),u=Mi.dot(Yl),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,p=(r*u-a*c)*h;return o.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ei.x),c.addScaledVector(r,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return jl.setScalar(0),Jl.setScalar(0),Ql.setScalar(0),jl.fromBufferAttribute(t,e),Jl.fromBufferAttribute(t,i),Ql.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(jl,o.x),r.addScaledVector(Jl,o.y),r.addScaledVector(Ql,o.z),r}static isFrontFacing(t,e,i,s){return Gn.subVectors(i,e),Mi.subVectors(t,e),Gn.cross(Mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Gn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;fo.subVectors(s,i),po.subVectors(o,i),Kl.subVectors(t,i);const c=fo.dot(Kl),l=po.dot(Kl);if(c<=0&&l<=0)return e.copy(i);Zl.subVectors(t,s);const u=fo.dot(Zl),d=po.dot(Zl);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(i).addScaledVector(fo,r);$l.subVectors(t,o);const f=fo.dot($l),p=po.dot($l);if(p>=0&&f<=p)return e.copy(o);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(po,a);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return Uf.subVectors(o,s),a=(d-u)/(d-u+(f-p)),e.copy(s).addScaledVector(Uf,a);const m=1/(g+v+h);return r=v*m,a=h*m,e.copy(i).addScaledVector(fo,r).addScaledVector(po,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function tu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=jh(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=tu(r,o,t+1/3),this.g=tu(r,o,t),this.b=tu(r,o,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=A0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return re.workingToColorSpace(sn.copy(this),t),Math.round(jt(sn.r*255,0,255))*65536+Math.round(jt(sn.g*255,0,255))*256+Math.round(jt(sn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(sn.copy(this),e);const i=sn.r,s=sn.g,o=sn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=u<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Xe){re.workingToColorSpace(sn.copy(this),t);const e=sn.r,i=sn.g,s=sn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Ha);const i=Nr(Qi.h,Ha.h,e),s=Nr(Qi.s,Ha.s,e),o=Nr(Qi.l,Ha.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Vt;Vt.NAMES=A0;let ny=0,Js=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Lo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ou,this.blendDst=Bu,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ou&&(i.blendSrc=this.blendSrc),this.blendDst!==Bu&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(i.stencilFail=this.stencilFail),this.stencilZFail!==so&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ie extends Js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ye,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new w,Va=new ut;let iy=0;class cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),o=fe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),t}}class T0 extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class b0 extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Gt extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let sy=0;const Dn=new pe,eu=new je,mo=new w,Mn=new ds,pr=new ds,Ze=new w;class _e extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S0(t)?b0:T0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Yt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return eu.lookAt(t),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Mn.min,pr.min),Mn.expandByPoint(Ze),Ze.addVectors(Mn.max,pr.max),Mn.expandByPoint(Ze)):(Mn.expandByPoint(pr.min),Mn.expandByPoint(pr.max))}Mn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Ze.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ze.fromBufferAttribute(a,l),c&&(mo.fromBufferAttribute(t,l),Ze.add(mo)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new w,c[L]=new w;const l=new w,u=new w,d=new w,h=new ut,f=new ut,p=new ut,v=new w,g=new w;function m(L,E,S){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(o,L),f.fromBufferAttribute(o,E),p.fromBufferAttribute(o,S),u.sub(l),d.sub(l),f.sub(h),p.sub(h);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),a[L].add(v),a[E].add(v),a[S].add(v),c[L].add(g),c[E].add(g),c[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,E=_.length;L<E;++L){const S=_[L],I=S.start,H=S.count;for(let N=I,B=I+H;N<B;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new w,x=new w,C=new w,b=new w;function P(L){C.fromBufferAttribute(s,L),b.copy(C);const E=a[L];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(b,E);const I=x.dot(c[L])<0?-1:1;r.setXYZW(L,y.x,y.y,y.z,I)}for(let L=0,E=_.length;L<E;++L){const S=_[L],I=S.start,H=S.count;for(let N=I,B=I+H;N<B;N+=3)P(t.getX(N+0)),P(t.getX(N+1)),P(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new w,o=new w,r=new w,a=new w,c=new w,l=new w,u=new w,d=new w;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let m=0;m<u;m++)h[p++]=l[f++]}return new cn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],d=o[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ff=new pe,Ms=new E0,Ga=new fs,Of=new w,Wa=new w,qa=new w,Xa=new w,nu=new w,Ya=new w,Bf=new w,Ka=new w;class Nt extends je{constructor(t=new _e,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ya.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(nu.fromBufferAttribute(d,t),r?Ya.addScaledVector(nu,u):Ya.addScaledVector(nu.sub(e),u))}e.add(Ya)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(o),Ms.copy(t.ray).recast(t.near),!(Ga.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ga,Of)===null||Ms.origin.distanceToSquared(Of)>(t.far-t.near)**2))&&(Ff.copy(o).invert(),Ms.copy(t.ray).applyMatrix4(Ff),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,C=y;x<C;x+=3){const b=a.getX(x),P=a.getX(x+1),L=a.getX(x+2);s=Za(this,m,t,i,l,u,d,b,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Za(this,r,t,i,l,u,d,_,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,C=y;x<C;x+=3){const b=x,P=x+1,L=x+2;s=Za(this,m,t,i,l,u,d,b,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=g,y=g+1,x=g+2;s=Za(this,r,t,i,l,u,d,_,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function oy(n,t,e,i,s,o,r,a){let c;if(t.side===fn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===ls,a),c===null)return null;Ka.copy(a),Ka.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ka);return l<e.near||l>e.far?null:{distance:l,point:Ka.clone(),object:n}}function Za(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Wa),n.getVertexPosition(c,qa),n.getVertexPosition(l,Xa);const u=oy(n,t,e,i,Wa,qa,Xa,Bf);if(u){const d=new w;wn.getBarycoord(Bf,Wa,qa,Xa,d),s&&(u.uv=wn.getInterpolatedAttribute(s,a,c,l,d,new ut)),o&&(u.uv1=wn.getInterpolatedAttribute(o,a,c,l,d,new ut)),r&&(u.normal=wn.getInterpolatedAttribute(r,a,c,l,d,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new w,materialIndex:0};wn.getNormal(Wa,qa,Xa,h.normal),u.face=h,u.barycoord=d}return u}class Pn extends _e{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,i,e,t,r,o,0),p("z","y","x",1,-1,i,e,-t,r,o,1),p("x","z","y",1,1,t,i,e,s,r,2),p("x","z","y",1,-1,t,i,-e,s,r,3),p("x","y","z",1,-1,t,e,i,s,o,4),p("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function p(v,g,m,_,y,x,C,b,P,L,E){const S=x/P,I=C/L,H=x/2,N=C/2,B=b/2,k=P+1,U=L+1;let Z=0,W=0;const tt=new w;for(let ct=0;ct<U;ct++){const vt=ct*I-N;for(let rt=0;rt<k;rt++){const ne=rt*S-H;tt[v]=ne*_,tt[g]=vt*y,tt[m]=B,l.push(tt.x,tt.y,tt.z),tt[v]=0,tt[g]=0,tt[m]=b>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(rt/P),d.push(1-ct/L),Z+=1}}for(let ct=0;ct<L;ct++)for(let vt=0;vt<P;vt++){const rt=h+vt+k*ct,ne=h+vt+k*(ct+1),$=h+(vt+1)+k*(ct+1),at=h+(vt+1)+k*ct;c.push(rt,ne,at),c.push(ne,$,at),W+=6}a.addGroup(f,W,E),f+=W,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function dn(n){const t={};for(let e=0;e<n.length;e++){const i=qo(n[e]);for(const s in i)t[s]=i[s]}return t}function ry(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function R0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const ay={clone:qo,merge:dn};var cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cy,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qo(t.uniforms),this.uniformsGroups=ry(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class C0 extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new w,kf=new ut,Hf=new ut;class Nn extends C0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,kf,Hf),e.subVectors(Hf,kf)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Io*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const go=-90,vo=1;class uy extends je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(go,vo,t,e);s.layers=this.layers,this.add(s);const o=new Nn(go,vo,t,e);o.layers=this.layers,this.add(o);const r=new Nn(go,vo,t,e);r.layers=this.layers,this.add(r);const a=new Nn(go,vo,t,e);a.layers=this.layers,this.add(a);const c=new Nn(go,vo,t,e);c.layers=this.layers,this.add(c);const l=new Nn(go,vo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class P0 extends an{constructor(t=[],e=Vo,i,s,o,r,a,c,l,u){super(t,e,i,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hy extends Gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new P0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pn(5,5,5),o=new Fn({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:os});o.uniforms.tEquirect.value=e;const r=new Nt(s,o),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=Un),new uy(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}class He extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dy={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class fy extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ye,this.environmentIntensity=1,this.environmentRotation=new ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class py{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mh,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new w;class qc{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),o=fe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ua extends Js{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _o;const mr=new w,xo=new w,yo=new w,So=new ut,gr=new ut,L0=new pe,$a=new w,vr=new w,ja=new w,Vf=new ut,su=new ut,Gf=new ut;class al extends je{constructor(t=new ua){if(super(),this.isSprite=!0,this.type="Sprite",_o===void 0){_o=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new py(e,5);_o.setIndex([0,1,2,0,2,3]),_o.setAttribute("position",new qc(i,3,0,!1)),_o.setAttribute("uv",new qc(i,2,3,!1))}this.geometry=_o,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xo.setFromMatrixScale(this.matrixWorld),L0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xo.multiplyScalar(-yo.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;Ja($a.set(-.5,-.5,0),yo,r,xo,s,o),Ja(vr.set(.5,-.5,0),yo,r,xo,s,o),Ja(ja.set(.5,.5,0),yo,r,xo,s,o),Vf.set(0,0),su.set(1,0),Gf.set(1,1);let a=t.ray.intersectTriangle($a,vr,ja,!1,mr);if(a===null&&(Ja(vr.set(-.5,.5,0),yo,r,xo,s,o),su.set(0,1),a=t.ray.intersectTriangle($a,ja,vr,!1,mr),a===null))return;const c=t.ray.origin.distanceTo(mr);c<t.near||c>t.far||e.push({distance:c,point:mr.clone(),uv:wn.getInterpolation(mr,$a,vr,ja,Vf,su,Gf,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ja(n,t,e,i,s,o){So.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(gr.x=o*So.x-s*So.y,gr.y=s*So.x+o*So.y):gr.copy(So),n.copy(t),n.x+=gr.x,n.y+=gr.y,n.applyMatrix4(L0)}class my extends an{constructor(t=null,e=1,i=1,s,o,r,a,c,l=Tn,u=Tn,d,h){super(null,r,a,c,l,u,s,o,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wf extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mo=new pe,qf=new pe,Qa=[],Xf=new ds,gy=new pe,_r=new Nt,xr=new fs;class I0 extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mo),Xf.copy(t.boundingBox).applyMatrix4(Mo),this.boundingBox.union(Xf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mo),xr.copy(t.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),t.ray.intersectsSphere(xr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Mo),qf.multiplyMatrices(i,Mo),_r.matrixWorld=qf,_r.raycast(t,Qa);for(let r=0,a=Qa.length;r<a;r++){const c=Qa[r];c.instanceId=o,c.object=this,e.push(c)}Qa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new my(new Float32Array(s*this.count),s,this.count,Yh,ri));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ou=new w,vy=new w,_y=new Yt;class Ps{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ou.subVectors(i,e).cross(vy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ou),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_y.getNormalMatrix(t),s=this.coplanarPoint(ou).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new fs,tc=new w;class cl{constructor(t=new Ps,e=new Ps,i=new Ps,s=new Ps,o=new Ps,r=new Ps){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],_=s[13],y=s[14],x=s[15];if(i[0].setComponents(c-o,h-l,g-f,x-m).normalize(),i[1].setComponents(c+o,h+l,g+f,x+m).normalize(),i[2].setComponents(c+r,h+u,g+p,x+_).normalize(),i[3].setComponents(c-r,h-u,g-p,x-_).normalize(),i[4].setComponents(c-a,h-d,g-v,x-y).normalize(),e===Ni)i[5].setComponents(c+a,h+d,g+v,x+y).normalize();else if(e===Gc)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(tc.x=s.normal.x>0?t.max.x:t.min.x,tc.y=s.normal.y>0?t.max.y:t.min.y,tc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ll extends Js{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xc=new w,Yc=new w,Yf=new pe,yr=new E0,ec=new fs,ru=new w,Kf=new w;class xy extends je{constructor(t=new _e,e=new ll){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)Xc.fromBufferAttribute(e,s-1),Yc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Xc.distanceTo(Yc);t.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=o,t.ray.intersectsSphere(ec)===!1)return;Yf.copy(s).invert(),yr.copy(t.ray).applyMatrix4(Yf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let v=f,g=p-1;v<g;v+=l){const m=u.getX(v),_=u.getX(v+1),y=nc(this,t,yr,c,m,_,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=nc(this,t,yr,c,v,g,p-1);m&&e.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let v=f,g=p-1;v<g;v+=l){const m=nc(this,t,yr,c,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=nc(this,t,yr,c,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function nc(n,t,e,i,s,o,r){const a=n.geometry.attributes.position;if(Xc.fromBufferAttribute(a,s),Yc.fromBufferAttribute(a,o),e.distanceSqToSegment(Xc,Yc,ru,Kf)>i)return;ru.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ru);if(!(l<t.near||l>t.far))return{distance:l,point:Kf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Zf=new w,$f=new w;class Qh extends xy{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Zf.fromBufferAttribute(e,s),$f.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zf.distanceTo($f);t.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nr extends an{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class D0 extends an{constructor(t,e,i=Vs,s,o,r,a=Tn,c=Tn,l,u=Wr,d=1){if(u!==Wr&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,o,r,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class td extends _e{constructor(t=1,e=1,i=4,s=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:o},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),o=Math.max(1,Math.floor(o));const r=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,p=i*2+o,v=s+1,g=new w,m=new w;for(let _=0;_<=p;_++){let y=0,x=0,C=0,b=0;if(_<=i){const E=_/i,S=E*Math.PI/2;x=-u-t*Math.cos(S),C=t*Math.sin(S),b=-t*Math.cos(S),y=E*d}else if(_<=i+o){const E=(_-i)/o;x=-u+E*e,C=t,b=0,y=d+E*h}else{const E=(_-i-o)/i,S=E*Math.PI/2;x=u+t*Math.sin(S),C=t*Math.cos(S),b=t*Math.sin(S),y=d+h+E*d}const P=Math.max(0,Math.min(1,y/f));let L=0;_===0?L=.5/s:_===p&&(L=-.5/s);for(let E=0;E<=s;E++){const S=E/s,I=S*Math.PI*2,H=Math.sin(I),N=Math.cos(I);m.x=-C*N,m.y=x,m.z=C*H,a.push(m.x,m.y,m.z),g.set(-C*N,b,C*H),g.normalize(),c.push(g.x,g.y,g.z),l.push(S+L,P)}if(_>0){const E=(_-1)*v;for(let S=0;S<s;S++){const I=E+S,H=E+S+1,N=_*v+S,B=_*v+S+1;r.push(I,H,N),r.push(H,B,N)}}}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new td(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Qs extends _e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new w,u=new ut;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[h]/t+1)/2,u.y=(r[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wi extends _e{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],h=[],f=[];let p=0;const v=[],g=i/2;let m=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(f,2));function _(){const x=new w,C=new w;let b=0;const P=(e-t)/i;for(let L=0;L<=o;L++){const E=[],S=L/o,I=S*(e-t)+t;for(let H=0;H<=s;H++){const N=H/s,B=N*c+a,k=Math.sin(B),U=Math.cos(B);C.x=I*k,C.y=-S*i+g,C.z=I*U,d.push(C.x,C.y,C.z),x.set(k,P,U).normalize(),h.push(x.x,x.y,x.z),f.push(N,1-S),E.push(p++)}v.push(E)}for(let L=0;L<s;L++)for(let E=0;E<o;E++){const S=v[E][L],I=v[E+1][L],H=v[E+1][L+1],N=v[E][L+1];(t>0||E!==0)&&(u.push(S,I,N),b+=3),(e>0||E!==o-1)&&(u.push(I,H,N),b+=3)}l.addGroup(m,b,0),m+=b}function y(x){const C=p,b=new ut,P=new w;let L=0;const E=x===!0?t:e,S=x===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,g*S,0),h.push(0,S,0),f.push(.5,.5),p++;const I=p;for(let H=0;H<=s;H++){const B=H/s*c+a,k=Math.cos(B),U=Math.sin(B);P.x=E*U,P.y=g*S,P.z=E*k,d.push(P.x,P.y,P.z),h.push(0,S,0),b.x=k*.5+.5,b.y=U*.5*S+.5,f.push(b.x,b.y),p++}for(let H=0;H<s;H++){const N=C+H,B=I+H;x===!0?u.push(B,B+1,N):u.push(B+1,B,N),L+=3}l.addGroup(m,L,x===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ed extends Wi{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ed(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nd extends _e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),l(i),u(),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(o.slice(),3)),this.setAttribute("uv",new Gt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new w,x=new w,C=new w;for(let b=0;b<e.length;b+=3)f(e[b+0],y),f(e[b+1],x),f(e[b+2],C),c(y,x,C,_)}function c(_,y,x,C){const b=C+1,P=[];for(let L=0;L<=b;L++){P[L]=[];const E=_.clone().lerp(x,L/b),S=y.clone().lerp(x,L/b),I=b-L;for(let H=0;H<=I;H++)H===0&&L===b?P[L][H]=E:P[L][H]=E.clone().lerp(S,H/I)}for(let L=0;L<b;L++)for(let E=0;E<2*(b-L)-1;E++){const S=Math.floor(E/2);E%2===0?(h(P[L][S+1]),h(P[L+1][S]),h(P[L][S])):(h(P[L][S+1]),h(P[L+1][S+1]),h(P[L+1][S]))}}function l(_){const y=new w;for(let x=0;x<o.length;x+=3)y.x=o[x+0],y.y=o[x+1],y.z=o[x+2],y.normalize().multiplyScalar(_),o[x+0]=y.x,o[x+1]=y.y,o[x+2]=y.z}function u(){const _=new w;for(let y=0;y<o.length;y+=3){_.x=o[y+0],_.y=o[y+1],_.z=o[y+2];const x=g(_)/2/Math.PI+.5,C=m(_)/Math.PI+.5;r.push(x,1-C)}p(),d()}function d(){for(let _=0;_<r.length;_+=6){const y=r[_+0],x=r[_+2],C=r[_+4],b=Math.max(y,x,C),P=Math.min(y,x,C);b>.9&&P<.1&&(y<.2&&(r[_+0]+=1),x<.2&&(r[_+2]+=1),C<.2&&(r[_+4]+=1))}}function h(_){o.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function p(){const _=new w,y=new w,x=new w,C=new w,b=new ut,P=new ut,L=new ut;for(let E=0,S=0;E<o.length;E+=9,S+=6){_.set(o[E+0],o[E+1],o[E+2]),y.set(o[E+3],o[E+4],o[E+5]),x.set(o[E+6],o[E+7],o[E+8]),b.set(r[S+0],r[S+1]),P.set(r[S+2],r[S+3]),L.set(r[S+4],r[S+5]),C.copy(_).add(y).add(x).divideScalar(3);const I=g(C);v(b,S+0,_,I),v(P,S+2,y,I),v(L,S+4,x,I)}}function v(_,y,x,C){C<0&&_.x===1&&(r[y]=_.x-1),x.x===0&&x.z===0&&(r[y]=C/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nd(t.vertices,t.indices,t.radius,t.details)}}class id extends nd{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new id(t.radius,t.detail)}}const ic=new w,sc=new w,au=new w,oc=new wn;class yy extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(Io*e),r=t.getIndex(),a=t.getAttribute("position"),c=r?r.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<c;p+=3){r?(l[0]=r.getX(p),l[1]=r.getX(p+1),l[2]=r.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:v,b:g,c:m}=oc;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),oc.getNormal(au),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const y=(_+1)%3,x=d[_],C=d[y],b=oc[u[_]],P=oc[u[y]],L=`${x}_${C}`,E=`${C}_${x}`;E in h&&h[E]?(au.dot(h[E].normal)<=o&&(f.push(b.x,b.y,b.z),f.push(P.x,P.y,P.z)),h[E]=null):L in h||(h[L]={index0:l[_],index1:l[y],normal:au.clone()})}}for(const p in h)if(h[p]){const{index0:v,index1:g}=h[p];ic.fromBufferAttribute(a,v),sc.fromBufferAttribute(a,g),f.push(ic.x,ic.y,ic.z),f.push(sc.x,sc.y,sc.z)}this.setAttribute("position",new Gt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const u=i[s],h=i[s+1]-u,f=(r-u)/h;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new ut:new w);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new w,s=[],o=[],r=[],a=new w,c=new pe;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new w)}o[0]=new w,r[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(jt(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,p))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(jt(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sd extends gi{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sy extends sd{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function od(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,d){let h=(r-o)/l-(a-o)/(l+u)+(a-r)/u,f=(a-r)/u-(c-r)/(u+d)+(c-a)/d;h*=u,f*=u,s(r,a,h,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const rc=new w,cu=new od,lu=new od,uu=new od;class My extends gi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new w){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(rc.subVectors(s[0],s[1]).add(s[0]),l=rc);const d=s[a%o],h=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(rc.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=rc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),cu.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,v,g),lu.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,v,g),uu.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(cu.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),lu.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),uu.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(cu.calc(c),lu.calc(c),uu.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jf(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function Ey(n,t){const e=1-n;return e*e*t}function wy(n,t){return 2*(1-n)*n*t}function Ay(n,t){return n*n*t}function zr(n,t,e,i){return Ey(n,t)+wy(n,e)+Ay(n,i)}function Ty(n,t){const e=1-n;return e*e*e*t}function by(n,t){const e=1-n;return 3*e*e*n*t}function Ry(n,t){return 3*(1-n)*n*n*t}function Cy(n,t){return n*n*n*t}function Ur(n,t,e,i,s){return Ty(n,t)+by(n,e)+Ry(n,i)+Cy(n,s)}class N0 extends gi{constructor(t=new ut,e=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ut){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ur(t,s.x,o.x,r.x,a.x),Ur(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Py extends gi{constructor(t=new w,e=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new w){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ur(t,s.x,o.x,r.x,a.x),Ur(t,s.y,o.y,r.y,a.y),Ur(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class z0 extends gi{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ly extends gi{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U0 extends gi{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(zr(t,s.x,o.x,r.x),zr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iy extends gi{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(zr(t,s.x,o.x,r.x),zr(t,s.y,o.y,r.y),zr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F0 extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(jf(a,c.x,l.x,u.x,d.x),jf(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Jf=Object.freeze({__proto__:null,ArcCurve:Sy,CatmullRomCurve3:My,CubicBezierCurve:N0,CubicBezierCurve3:Py,EllipseCurve:sd,LineCurve:z0,LineCurve3:Ly,QuadraticBezierCurve:U0,QuadraticBezierCurve3:Iy,SplineCurve:F0});class Dy extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jf[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Jf[s.type]().fromJSON(s))}return this}}class Qf extends Dy{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new z0(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new U0(this.currentPoint.clone(),new ut(t,e),new ut(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new N0(this.currentPoint.clone(),new ut(t,e),new ut(i,s),new ut(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new F0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new sd(t,e,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let O0=class extends Qf{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Qf().fromJSON(s))}return this}};function Ny(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=B0(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(i&&(o=By(n,t,o,e)),n.length>80*e){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=e;h<s;h+=e){const f=n[h],p=n[h+1];f<a&&(a=f),p<c&&(c=p),f>u&&(u=f),p>d&&(d=p)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Yr(o,r,e,a,c,l,0),r}function B0(n,t,e,i,s){let o;if(s===$y(n,t,e,i)>0)for(let r=t;r<e;r+=i)o=tp(r/i|0,n[r],n[r+1],o);else for(let r=e-i;r>=t;r-=i)o=tp(r/i|0,n[r],n[r+1],o);return o&&Xo(o,o.next)&&(Zr(o),o=o.next),o}function Ws(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xo(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Yr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&Wy(n,i,s,o);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(o?Uy(n,i,s,o):zy(n)){t.push(c.i,n.i,l.i),Zr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=Fy(Ws(n),t),Yr(n,t,e,i,s,o,2)):r===2&&Oy(n,t,e,i,s,o):Yr(Ws(n),t,e,i,s,o,1);break}}}function zy(n){const t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,o,r),d=Math.min(a,c,l),h=Math.max(s,o,r),f=Math.max(a,c,l);let p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Ir(s,a,o,c,r,l,p.x,p.y)&&Pe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Uy(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Pe(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,d=o.y,h=r.y,f=Math.min(a,c,l),p=Math.min(u,d,h),v=Math.max(a,c,l),g=Math.max(u,d,h),m=Eh(f,p,t,e,i),_=Eh(v,g,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&Ir(a,u,c,d,l,h,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Ir(a,u,c,d,l,h,x.x,x.y)&&Pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&Ir(a,u,c,d,l,h,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Ir(a,u,c,d,l,h,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fy(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Xo(i,s)&&H0(i,e,e.next,s)&&Kr(i,s)&&Kr(s,i)&&(t.push(i.i,e.i,s.i),Zr(e),Zr(e.next),e=n=s),e=e.next}while(e!==n);return Ws(e)}function Oy(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Yy(r,a)){let c=V0(r,a);r=Ws(r,r.next),c=Ws(c,c.next),Yr(r,t,e,i,s,o,0),Yr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function By(n,t,e,i){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=B0(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Xy(l))}s.sort(ky);for(let o=0;o<s.length;o++)e=Hy(s[o],e);return e}function ky(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Hy(n,t){const e=Vy(n,t);if(!e)return t;const i=V0(e,n);return Ws(i,i.next),Ws(e,e.next)}function Vy(n,t){let e=t;const i=n.x,s=n.y;let o=-1/0,r;if(Xo(n,e))return e;do{if(Xo(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>o&&(o=d,r=e.x<e.next.x?e:e.next,d===i))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0;e=r;do{if(i>=e.x&&e.x>=c&&i!==e.x&&k0(s<l?i:o,s,c,l,s<l?o:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Kr(e,n)&&(d<u||d===u&&(e.x>r.x||e.x===r.x&&Gy(r,e)))&&(r=e,u=d)}e=e.next}while(e!==a);return r}function Gy(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function Wy(n,t,e,i){let s=n;do s.z===0&&(s.z=Eh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,qy(s)}function qy(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let r=i,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,a--):(s=r,r=r.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=r}o.nextZ=null,e*=2}while(t>1);return n}function Eh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function k0(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function Ir(n,t,e,i,s,o,r,a){return!(n===r&&t===a)&&k0(n,t,e,i,s,o,r,a)}function Yy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ky(n,t)&&(Kr(n,t)&&Kr(t,n)&&Zy(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||Xo(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xo(n,t){return n.x===t.x&&n.y===t.y}function H0(n,t,e,i){const s=cc(Pe(n,t,e)),o=cc(Pe(n,t,i)),r=cc(Pe(e,i,n)),a=cc(Pe(e,i,t));return!!(s!==o&&r!==a||s===0&&ac(n,e,t)||o===0&&ac(n,i,t)||r===0&&ac(e,n,i)||a===0&&ac(e,t,i))}function ac(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function cc(n){return n>0?1:n<0?-1:0}function Ky(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&H0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Kr(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function Zy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function V0(n,t){const e=wh(n.i,n.x,n.y),i=wh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function tp(n,t,e,i){const s=wh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $y(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class jy{static triangulate(t,e,i=2){return Ny(t,e,i)}}class Fr{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return Fr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];ep(t),np(i,t);let r=t.length;e.forEach(ep);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,np(i,e[c]);const a=jy.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function ep(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function np(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ha extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const _=m*h-r;for(let y=0;y<l;y++){const x=y*d-o;p.push(x,-_,0),v.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){const y=_+l*m,x=_+l*(m+1),C=_+1+l*(m+1),b=_+1+l*m;f.push(y,x,b),f.push(x,C,b)}this.setIndex(f),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.width,t.height,t.widthSegments,t.heightSegments)}}class ul extends _e{constructor(t=.5,e=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new w,p=new ut;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const m=o+g/i*r;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<s;v++){const g=v*(i+1);for(let m=0;m<i;m++){const _=m+g,y=_,x=_+i+1,C=_+i+2,b=_+1;a.push(y,x,b),a.push(x,C,b)}}this.setIndex(a),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rd extends _e{constructor(t=new O0([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(r,2));function l(u){const d=s.length/3,h=u.extractPoints(e);let f=h.shape;const p=h.holes;Fr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];Fr.isClockWise(_)===!0&&(p[g]=_.reverse())}const v=Fr.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){const _=v[g],y=_[0]+d,x=_[1]+d,C=_[2]+d;i.push(y,x,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Jy(e,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];i.push(r)}return new rd(i,t.curveSegments)}}function Jy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class qi extends _e{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const u=[],d=new w,h=new w,f=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){const _=[],y=m/i;let x=0;m===0&&r===0?x=.5/e:m===i&&c===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const b=C/e;d.x=-t*Math.cos(s+b*o)*Math.sin(r+y*a),d.y=t*Math.cos(r+y*a),d.z=t*Math.sin(s+b*o)*Math.sin(r+y*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(b+x,1-y),_.push(l++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){const y=u[m][_+1],x=u[m][_],C=u[m+1][_],b=u[m+1][_+1];(m!==0||r>0)&&f.push(y,x,b),(m!==i-1||c<Math.PI)&&f.push(x,C,b)}this.setIndex(f),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hl extends _e{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new w,d=new w,h=new w;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){const v=p/s*o,g=f/i*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(p/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){const v=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;r.push(v,g,_),r.push(g,m,_)}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Je extends Js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qy extends Je{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tS extends Js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eS extends Js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nS extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class iS extends C0{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sS extends nS{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class oS extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class rS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ip(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ip();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ip(){return performance.now()}function sp(n,t,e,i){const s=aS(i);switch(e){case m0:return n*t;case Yh:return n*t/s.components*s.byteLength;case Kh:return n*t/s.components*s.byteLength;case v0:return n*t*2/s.components*s.byteLength;case Zh:return n*t*2/s.components*s.byteLength;case g0:return n*t*3/s.components*s.byteLength;case Zn:return n*t*4/s.components*s.byteLength;case $h:return n*t*4/s.components*s.byteLength;case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pc:case Lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ju:case Qu:return Math.max(n,16)*Math.max(t,8)/4;case $u:case Ju:return Math.max(n,8)*Math.max(t,8)/2;case th:case eh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ic:case vh:case _h:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _0:case xh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yh:case Sh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function aS(n){switch(n){case Bi:case d0:return{byteLength:1,components:1};case Vr:case f0:case la:return{byteLength:2,components:1};case qh:case Xh:return{byteLength:2,components:4};case Vs:case Wh:case ri:return{byteLength:4,components:1};case p0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G0(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function cS(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var lS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ES=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$S=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:lS,alphahash_pars_fragment:uS,alphamap_fragment:hS,alphamap_pars_fragment:dS,alphatest_fragment:fS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:vS,batching_vertex:_S,begin_vertex:xS,beginnormal_vertex:yS,bsdfs:SS,iridescence_fragment:MS,bumpmap_pars_fragment:ES,clipping_planes_fragment:wS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:TS,clipping_planes_vertex:bS,color_fragment:RS,color_pars_fragment:CS,color_pars_vertex:PS,color_vertex:LS,common:IS,cube_uv_reflection_fragment:DS,defaultnormal_vertex:NS,displacementmap_pars_vertex:zS,displacementmap_vertex:US,emissivemap_fragment:FS,emissivemap_pars_fragment:OS,colorspace_fragment:BS,colorspace_pars_fragment:kS,envmap_fragment:HS,envmap_common_pars_fragment:VS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:eM,envmap_vertex:qS,fog_vertex:XS,fog_pars_vertex:YS,fog_fragment:KS,fog_pars_fragment:ZS,gradientmap_pars_fragment:$S,lightmap_pars_fragment:jS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:QS,lights_pars_begin:tM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:sM,lights_phong_pars_fragment:oM,lights_physical_fragment:rM,lights_physical_pars_fragment:aM,lights_fragment_begin:cM,lights_fragment_maps:lM,lights_fragment_end:uM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:pM,map_fragment:mM,map_pars_fragment:gM,map_particle_fragment:vM,map_particle_pars_fragment:_M,metalnessmap_fragment:xM,metalnessmap_pars_fragment:yM,morphinstance_vertex:SM,morphcolor_vertex:MM,morphnormal_vertex:EM,morphtarget_pars_vertex:wM,morphtarget_vertex:AM,normal_fragment_begin:TM,normal_fragment_maps:bM,normal_pars_fragment:RM,normal_pars_vertex:CM,normal_vertex:PM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:zM,opaque_fragment:UM,packing:FM,premultiplied_alpha_fragment:OM,project_vertex:BM,dithering_fragment:kM,dithering_pars_fragment:HM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:GM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:qM,shadowmap_vertex:XM,shadowmask_pars_fragment:YM,skinbase_vertex:KM,skinning_pars_vertex:ZM,skinning_vertex:$M,skinnormal_vertex:jM,specularmap_fragment:JM,specularmap_pars_fragment:QM,tonemapping_fragment:tE,tonemapping_pars_fragment:eE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:rE,worldpos_vertex:aE,background_vert:cE,background_frag:lE,backgroundCube_vert:uE,backgroundCube_frag:hE,cube_vert:dE,cube_frag:fE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:gE,distanceRGBA_frag:vE,equirect_vert:_E,equirect_frag:xE,linedashed_vert:yE,linedashed_frag:SE,meshbasic_vert:ME,meshbasic_frag:EE,meshlambert_vert:wE,meshlambert_frag:AE,meshmatcap_vert:TE,meshmatcap_frag:bE,meshnormal_vert:RE,meshnormal_frag:CE,meshphong_vert:PE,meshphong_frag:LE,meshphysical_vert:IE,meshphysical_frag:DE,meshtoon_vert:NE,meshtoon_frag:zE,points_vert:UE,points_frag:FE,shadow_vert:OE,shadow_frag:BE,sprite_vert:kE,sprite_frag:HE},dt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},si={basic:{uniforms:dn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:dn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:dn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:dn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:dn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:dn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:dn([dt.points,dt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:dn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:dn([dt.common,dt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:dn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:dn([dt.sprite,dt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:dn([dt.common,dt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:dn([dt.lights,dt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};si.physical={uniforms:dn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const lc={r:0,b:0,g:0},ws=new ye,VE=new pe;function GE(n,t,e,i,s,o,r){const a=new Vt(0);let c=o===!0?0:1,l,u,d=null,h=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const C=p(y);C===null?m(a,c):C&&C.isColor&&(m(C,1),x=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,x){const C=p(x);C&&(C.isCubeTexture||C.mapping===rl)?(u===void 0&&(u=new Nt(new Pn(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:qo(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ws.copy(x.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(ws)),u.material.toneMapped=re.getTransfer(C.colorSpace)!==me,(d!==C||h!==C.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Nt(new ha(2,2),new Fn({name:"BackgroundMaterial",uniforms:qo(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=re.getTransfer(C.colorSpace)!==me,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,h=C.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB(lc,R0(n)),i.buffers.color.setClear(lc.r,lc.g,lc.b,x,r)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:v,addToRenderList:g,dispose:_}}function WE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let o=s,r=!1;function a(S,I,H,N,B){let k=!1;const U=d(N,H,I);o!==U&&(o=U,l(o.object)),k=f(S,N,H,B),k&&p(S,N,H,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,x(S,I,H,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,I,H){const N=H.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let k=B[I.id];k===void 0&&(k={},B[I.id]=k);let U=k[N];return U===void 0&&(U=h(c()),k[N]=U),U}function h(S){const I=[],H=[],N=[];for(let B=0;B<e;B++)I[B]=0,H[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,I,H,N){const B=o.attributes,k=I.attributes;let U=0;const Z=H.getAttributes();for(const W in Z)if(Z[W].location>=0){const ct=B[W];let vt=k[W];if(vt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ct===void 0||ct.attribute!==vt||vt&&ct.data!==vt.data)return!0;U++}return o.attributesNum!==U||o.index!==N}function p(S,I,H,N){const B={},k=I.attributes;let U=0;const Z=H.getAttributes();for(const W in Z)if(Z[W].location>=0){let ct=k[W];ct===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const vt={};vt.attribute=ct,ct&&ct.data&&(vt.data=ct.data),B[W]=vt,U++}o.attributes=B,o.attributesNum=U,o.index=N}function v(){const S=o.newAttributes;for(let I=0,H=S.length;I<H;I++)S[I]=0}function g(S){m(S,0)}function m(S,I){const H=o.newAttributes,N=o.enabledAttributes,B=o.attributeDivisors;H[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),B[S]!==I&&(n.vertexAttribDivisor(S,I),B[S]=I)}function _(){const S=o.newAttributes,I=o.enabledAttributes;for(let H=0,N=I.length;H<N;H++)I[H]!==S[H]&&(n.disableVertexAttribArray(H),I[H]=0)}function y(S,I,H,N,B,k,U){U===!0?n.vertexAttribIPointer(S,I,H,B,k):n.vertexAttribPointer(S,I,H,N,B,k)}function x(S,I,H,N){v();const B=N.attributes,k=H.getAttributes(),U=I.defaultAttributeValues;for(const Z in k){const W=k[Z];if(W.location>=0){let tt=B[Z];if(tt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const ct=tt.normalized,vt=tt.itemSize,rt=t.get(tt);if(rt===void 0)continue;const ne=rt.buffer,$=rt.type,at=rt.bytesPerElement,At=$===n.INT||$===n.UNSIGNED_INT||tt.gpuType===Wh;if(tt.isInterleavedBufferAttribute){const pt=tt.data,Lt=pt.stride,ae=tt.offset;if(pt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt,pt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)g(W.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Bt=0;Bt<W.locationSize;Bt++)y(W.location+Bt,vt/W.locationSize,$,ct,Lt*at,(ae+vt/W.locationSize*Bt)*at,At)}else{if(tt.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt,tt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<W.locationSize;pt++)g(W.location+pt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let pt=0;pt<W.locationSize;pt++)y(W.location+pt,vt/W.locationSize,$,ct,vt*at,vt/W.locationSize*pt*at,At)}}else if(U!==void 0){const ct=U[Z];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(W.location,ct);break;case 3:n.vertexAttrib3fv(W.location,ct);break;case 4:n.vertexAttrib4fv(W.location,ct);break;default:n.vertexAttrib1fv(W.location,ct)}}}}_()}function C(){L();for(const S in i){const I=i[S];for(const H in I){const N=I[H];for(const B in N)u(N[B].object),delete N[B];delete I[H]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const H in I){const N=I[H];for(const B in N)u(N[B].object),delete N[B];delete I[H]}delete i[S.id]}function P(S){for(const I in i){const H=i[I];if(H[S.id]===void 0)continue;const N=H[S.id];for(const B in N)u(N[B].object),delete N[B];delete H[S.id]}}function L(){E(),r=!0,o!==s&&(o=s,l(o.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function qE(n,t,e){let i;function s(l){i=l}function o(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function r(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];e.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)r(l[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v]*h[v];e.update(p,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function XE(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==Zn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===la&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Bi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ri&&!L)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:b}}function YE(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Ps,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||o&&!g)o?u(null):l();else{const _=o?0:i,y=_*4;let x=m.clippingState||null;c.value=x,x=u(p,h,y,f);for(let C=0;C!==y;++C)x[C]=e[C];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,p!==!0||g===null){const m=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==v;++y,x+=4)r.copy(d[y]).applyMatrix4(_,a),r.normal.toArray(g,x),g[x+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function KE(n){let t=new WeakMap;function e(r,a){return a===Yu?r.mapping=Vo:a===Ku&&(r.mapping=Go),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Yu||a===Ku)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new hy(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const Ro=4,op=[.125,.215,.35,.446,.526,.582],Ds=20,hu=new iS,rp=new Vt;let du=null,fu=0,pu=0,mu=!1;const Ls=(1+Math.sqrt(5))/2,Eo=1/Ls,ap=[new w(-Ls,Eo,0),new w(Ls,Eo,0),new w(-Eo,0,Ls),new w(Eo,0,Ls),new w(0,Ls,-Eo),new w(0,Ls,Eo),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],ZE=new w;class cp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,o={}){const{size:r=256,position:a=ZE}=o;du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(du,fu,pu),this._renderer.xr.enabled=mu,t.scissorTest=!1,uc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vo||t.mapping===Go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:la,format:Zn,colorSpace:Wo,depthBuffer:!1},s=lp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(o)),this._blurMaterial=jE(o,t,e)}return s}_compileMaterial(t){const e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,hu)}_sceneToCubeUV(t,e,i,s,o){const c=new Nn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(rp),d.toneMapping=Ui,d.autoClear=!1;const p=new Ie({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new Nt(new Pn,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(rp),g=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[_],o.y,o.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[_],o.z)):(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[_]));const x=this._cubeSize;uc(s,y*x,_>2?x:0,x,x),d.setRenderTarget(s),g&&d.render(v,c),d.render(t,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Vo||t.mapping===Go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Nt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;uc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,hu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ap[(s-o-1)%ap.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nt(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),v=o/p,g=isFinite(o)?1+Math.floor(u*v):Ds;g>Ds&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);const m=[];let _=0;for(let P=0;P<Ds;++P){const L=P/v,E=Math.exp(-L*L/2);m.push(E),P===0?_+=E:P<g&&(_+=2*E)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-i;const x=this._sizeLods[s],C=3*x*(s>y-Ro?s-y+Ro:0),b=4*(this._cubeSize-x);uc(e,C,b,3*x,2*x),c.setRenderTarget(e),c.render(d,hu)}}function $E(n){const t=[],e=[],i=[];let s=n;const o=n-Ro+1+op.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-Ro?c=op[r-n+Ro-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let b=0;b<f;b++){const P=b%3*2/3-1,L=b>2?0:-1,E=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];_.set(E,v*p*b),y.set(h,g*p*b);const S=[b,b,b,b,b,b];x.set(S,m*p*b)}const C=new _e;C.setAttribute("position",new cn(_,v)),C.setAttribute("uv",new cn(y,g)),C.setAttribute("faceIndex",new cn(x,m)),t.push(C),s>Ro&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function lp(n,t,e){const i=new Gs(n,t,e);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jE(n,t,e){const i=new Float32Array(Ds),s=new w(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function up(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function hp(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function ad(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Yu||c===Ku,u=c===Vo||c===Go;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new cp(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new cp(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function QE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Do("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function t1(n,t,e,i){const s={},o=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",r),delete s[h.id];const f=o.get(h);f&&(t.remove(f),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const C=_[y+0],b=_[y+1],P=_[y+2];h.push(C,b,b,P,P,C)}}else if(p!==void 0){const _=p.array;v=p.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const C=y+0,b=y+1,P=y+2;h.push(C,b,b,P,P,C)}}else return;const g=new(S0(h)?b0:T0)(h,1);g.version=v;const m=o.get(d);m&&t.remove(m),o.set(d,g)}function u(d){const h=o.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function e1(n,t,e){let i;function s(h){i=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function c(h,f){n.drawElements(i,f,o,h*r),e.update(f,i,1)}function l(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,o,h*r,p),e.update(f,i,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function d(h,f,p,v){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)l(h[m]/r,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,o,h,0,v,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*v[_];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function n1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function i1(n,t,e){const i=new WeakMap,s=new Fe;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let C=a.attributes.position.count*x,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*b*4*d),L=new M0(P,C,b,d);L.type=ri,L.needsUpdate=!0;const E=x*4;for(let I=0;I<d;I++){const H=m[I],N=_[I],B=y[I],k=C*b*4*I;for(let U=0;U<H.count;U++){const Z=U*E;p===!0&&(s.fromBufferAttribute(H,U),P[k+Z+0]=s.x,P[k+Z+1]=s.y,P[k+Z+2]=s.z,P[k+Z+3]=0),v===!0&&(s.fromBufferAttribute(N,U),P[k+Z+4]=s.x,P[k+Z+5]=s.y,P[k+Z+6]=s.z,P[k+Z+7]=0),g===!0&&(s.fromBufferAttribute(B,U),P[k+Z+8]=s.x,P[k+Z+9]=s.y,P[k+Z+10]=s.z,P[k+Z+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new ut(C,b)},i.set(a,h),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function s1(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const W0=new an,dp=new D0(1,1),q0=new M0,X0=new Kx,Y0=new P0,fp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),vp=new Float32Array(4);function ir(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=fp[s];if(o===void 0&&(o=new Float32Array(s),fp[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function dl(n,t){let e=pp[t];e===void 0&&(e=new Int32Array(t),pp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function o1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function r1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function a1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function c1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function l1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,i))return;vp.set(i),n.uniformMatrix2fv(this.addr,!1,vp),Ke(e,i)}}function u1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,i))return;gp.set(i),n.uniformMatrix3fv(this.addr,!1,gp),Ke(e,i)}}function h1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,i))return;mp.set(i),n.uniformMatrix4fv(this.addr,!1,mp),Ke(e,i)}}function d1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function f1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function p1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function m1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function g1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function v1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function _1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function x1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function y1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(dp.compareFunction=y0,o=dp):o=W0,e.setTexture2D(t||o,s)}function S1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||X0,s)}function M1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Y0,s)}function E1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||q0,s)}function w1(n){switch(n){case 5126:return o1;case 35664:return r1;case 35665:return a1;case 35666:return c1;case 35674:return l1;case 35675:return u1;case 35676:return h1;case 5124:case 35670:return d1;case 35667:case 35671:return f1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}function A1(n,t){n.uniform1fv(this.addr,t)}function T1(n,t){const e=ir(t,this.size,2);n.uniform2fv(this.addr,e)}function b1(n,t){const e=ir(t,this.size,3);n.uniform3fv(this.addr,e)}function R1(n,t){const e=ir(t,this.size,4);n.uniform4fv(this.addr,e)}function C1(n,t){const e=ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function P1(n,t){const e=ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function L1(n,t){const e=ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function I1(n,t){n.uniform1iv(this.addr,t)}function D1(n,t){n.uniform2iv(this.addr,t)}function N1(n,t){n.uniform3iv(this.addr,t)}function z1(n,t){n.uniform4iv(this.addr,t)}function U1(n,t){n.uniform1uiv(this.addr,t)}function F1(n,t){n.uniform2uiv(this.addr,t)}function O1(n,t){n.uniform3uiv(this.addr,t)}function B1(n,t){n.uniform4uiv(this.addr,t)}function k1(n,t,e){const i=this.cache,s=t.length,o=dl(e,s);Ye(i,o)||(n.uniform1iv(this.addr,o),Ke(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||W0,o[r])}function H1(n,t,e){const i=this.cache,s=t.length,o=dl(e,s);Ye(i,o)||(n.uniform1iv(this.addr,o),Ke(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||X0,o[r])}function V1(n,t,e){const i=this.cache,s=t.length,o=dl(e,s);Ye(i,o)||(n.uniform1iv(this.addr,o),Ke(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Y0,o[r])}function G1(n,t,e){const i=this.cache,s=t.length,o=dl(e,s);Ye(i,o)||(n.uniform1iv(this.addr,o),Ke(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||q0,o[r])}function W1(n){switch(n){case 5126:return A1;case 35664:return T1;case 35665:return b1;case 35666:return R1;case 35674:return C1;case 35675:return P1;case 35676:return L1;case 5124:case 35670:return I1;case 35667:case 35671:return D1;case 35668:case 35672:return N1;case 35669:case 35673:return z1;case 5125:return U1;case 36294:return F1;case 36295:return O1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return G1}}class q1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=w1(e.type)}}class X1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W1(e.type)}}class Y1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function _p(n,t){n.seq.push(t),n.map[t.id]=t}function K1(n,t,e){const i=n.name,s=i.length;for(gu.lastIndex=0;;){const o=gu.exec(i),r=gu.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){_p(e,l===void 0?new q1(a,n,t):new X1(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Y1(a),_p(e,d)),e=d}}}class Dc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);K1(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function xp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Z1=37297;let $1=0;function j1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const yp=new Yt;function J1(n){re._getMatrix(yp,re.workingColorSpace,n);const t=`mat3( ${yp.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Vc:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sp(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+j1(n.getShaderSource(t),r)}else return s}function Q1(n,t){const e=J1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tw(n,t){let e;switch(t){case ox:e="Linear";break;case rx:e="Reinhard";break;case ax:e="Cineon";break;case cx:e="ACESFilmic";break;case ux:e="AgX";break;case hx:e="Neutral";break;case lx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hc=new w;function ew(){re.getLuminanceCoefficients(hc);const n=hc.x.toFixed(4),t=hc.y.toFixed(4),e=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function iw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Dr(n){return n!==""}function Mp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ep(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(n){return n.replace(ow,aw)}const rw=new Map;function aw(n,t){let e=Zt[t];if(e===void 0){const i=rw.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ah(e)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(n){return n.replace(cw,lw)}function lw(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ap(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function uw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===l0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===O_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function hw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vo:case Go:t="ENVMAP_TYPE_CUBE";break;case rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Go:t="ENVMAP_MODE_REFRACTION";break}return t}function fw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case u0:t="ENVMAP_BLENDING_MULTIPLY";break;case ix:t="ENVMAP_BLENDING_MIX";break;case sx:t="ENVMAP_BLENDING_ADD";break}return t}function pw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function mw(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=uw(e),l=hw(e),u=dw(e),d=fw(e),h=pw(e),f=nw(e),p=iw(o),v=s.createProgram();let g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Dr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Ui?tw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Q1("linearToOutputTexel",e.outputColorSpace),ew(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),r=Ah(r),r=Mp(r,e),r=Ep(r,e),a=Ah(a),a=Mp(a,e),a=Ep(a,e),r=wp(r),a=wp(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+g+r,x=_+m+a,C=xp(s,s.VERTEX_SHADER,y),b=xp(s,s.FRAGMENT_SHADER,x);s.attachShader(v,C),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(I){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(b).trim();let k=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,b);else{const Z=Sp(s,C,"vertex"),W=Sp(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+Z+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||B==="")&&(U=!1);U&&(I.diagnostics={runnable:k,programLog:H,vertexShader:{log:N,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(C),s.deleteShader(b),L=new Dc(s,v),E=sw(s,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Z1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=b,this}let gw=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _w(t),e.set(t,i)),i}}class _w{constructor(t){this.id=gw++,this.code=t,this.usedTimes=0}}function xw(n,t,e,i,s,o,r){const a=new w0,c=new vw,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,S,I,H,N){const B=H.fog,k=N.geometry,U=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||U),W=Z&&Z.mapping===rl?Z.image.height:null,tt=p[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ct=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,vt=ct!==void 0?ct.length:0;let rt=0;k.morphAttributes.position!==void 0&&(rt=1),k.morphAttributes.normal!==void 0&&(rt=2),k.morphAttributes.color!==void 0&&(rt=3);let ne,$,at,At;if(tt){const he=si[tt];ne=he.vertexShader,$=he.fragmentShader}else ne=E.vertexShader,$=E.fragmentShader,c.update(E),at=c.getVertexShaderID(E),At=c.getFragmentShaderID(E);const pt=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),ae=N.isInstancedMesh===!0,Bt=N.isBatchedMesh===!0,be=!!E.map,Re=!!E.matcap,ce=!!Z,z=!!E.aoMap,ln=!!E.lightMap,le=!!E.bumpMap,xe=!!E.normalMap,bt=!!E.displacementMap,ie=!!E.emissiveMap,zt=!!E.metalnessMap,Kt=!!E.roughnessMap,We=E.anisotropy>0,D=E.clearcoat>0,A=E.dispersion>0,q=E.iridescence>0,J=E.sheen>0,et=E.transmission>0,K=We&&!!E.anisotropyMap,Rt=D&&!!E.clearcoatMap,ft=D&&!!E.clearcoatNormalMap,Tt=D&&!!E.clearcoatRoughnessMap,Ct=q&&!!E.iridescenceMap,nt=q&&!!E.iridescenceThicknessMap,xt=J&&!!E.sheenColorMap,Ot=J&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,ht=!!E.specularColorMap,Wt=!!E.specularIntensityMap,O=et&&!!E.transmissionMap,mt=et&&!!E.thicknessMap,it=!!E.gradientMap,Mt=!!E.alphaMap,st=E.alphaTest>0,Q=!!E.alphaHash,Et=!!E.extensions;let qt=Ui;E.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(qt=n.toneMapping);const Me={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:$,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:At,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&N._colorsTexture!==null,instancing:ae,instancingColor:ae&&N.instanceColor!==null,instancingMorph:ae&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Wo,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:Re,envMap:ce,envMapMode:ce&&Z.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:ln,bumpMap:le,normalMap:xe,displacementMap:h&&bt,emissiveMap:ie,normalMapObjectSpace:xe&&E.normalMapType===mx,normalMapTangentSpace:xe&&E.normalMapType===x0,metalnessMap:zt,roughnessMap:Kt,anisotropy:We,anisotropyMap:K,clearcoat:D,clearcoatMap:Rt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Tt,dispersion:A,iridescence:q,iridescenceMap:Ct,iridescenceThicknessMap:nt,sheen:J,sheenColorMap:xt,sheenRoughnessMap:Ot,specularMap:Ft,specularColorMap:ht,specularIntensityMap:Wt,transmission:et,transmissionMap:O,thicknessMap:mt,gradientMap:it,opaque:E.transparent===!1&&E.blending===Lo&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:st,alphaHash:Q,combine:E.combine,mapUv:be&&v(E.map.channel),aoMapUv:z&&v(E.aoMap.channel),lightMapUv:ln&&v(E.lightMap.channel),bumpMapUv:le&&v(E.bumpMap.channel),normalMapUv:xe&&v(E.normalMap.channel),displacementMapUv:bt&&v(E.displacementMap.channel),emissiveMapUv:ie&&v(E.emissiveMap.channel),metalnessMapUv:zt&&v(E.metalnessMap.channel),roughnessMapUv:Kt&&v(E.roughnessMap.channel),anisotropyMapUv:K&&v(E.anisotropyMap.channel),clearcoatMapUv:Rt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(E.sheenRoughnessMap.channel),specularMapUv:Ft&&v(E.specularMap.channel),specularColorMapUv:ht&&v(E.specularColorMap.channel),specularIntensityMapUv:Wt&&v(E.specularIntensityMap.channel),transmissionMapUv:O&&v(E.transmissionMap.channel),thicknessMapUv:mt&&v(E.thicknessMap.channel),alphaMapUv:Mt&&v(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xe||We),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(be||Mt),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Lt,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&re.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:ie&&E.emissiveMap.isVideoTexture===!0&&re.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ne,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(S,E),y(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=p[E.type];let I;if(S){const H=si[S];I=ay.clone(H.uniforms)}else I=E.uniforms;return I}function C(E,S){let I;for(let H=0,N=u.length;H<N;H++){const B=u[H];if(B.cacheKey===S){I=B,++I.usedTimes;break}}return I===void 0&&(I=new mw(n,S,E,o),u.push(I)),I}function b(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:P,programs:u,dispose:L}}function yw(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Sw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Tp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bp(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(d,h,f,p,v,g){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:v,group:g},n[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=v,m.group=g),t++,m}function a(d,h,f,p,v,g){const m=r(d,h,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(d,h,f,p,v,g){const m=r(d,h,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,h){e.length>1&&e.sort(d||Sw),i.length>1&&i.sort(h||Tp),s.length>1&&s.sort(h||Tp)}function u(){for(let d=t,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function Mw(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new bp,n.set(i,[r])):s>=o.length?(r=new bp,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ew(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Vt};break;case"SpotLight":e={position:new w,direction:new w,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function ww(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Aw=0;function Tw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bw(n){const t=new Ew,e=ww(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new w);const s=new w,o=new pe,r=new pe;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,y=0,x=0,C=0,b=0,P=0;l.sort(Tw);for(let E=0,S=l.length;E<S;E++){const I=l[E],H=I.color,N=I.intensity,B=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=H.r*N,d+=H.g*N,h+=H.b*N;else if(I.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],N);P++}else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,W=e.get(I);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=I.shadow.matrix,_++}i.directional[f]=U,f++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(H).multiplyScalar(N),U.distance=B,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[v]=U;const Z=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,Z.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[v]=Z.matrix,I.castShadow){const W=e.get(I);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=k,x++}v++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(H).multiplyScalar(N),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=U,g++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const Z=I.shadow,W=e.get(I);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=I.shadow.matrix,y++}i.point[p]=U,p++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(N),U.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[m]=U,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==_||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==C||L.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,L.directionalLength=f,L.pointLength=p,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=_,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=C,L.numLightProbes=P,i.version=Aw++)}function c(l,u){let d=0,h=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){const y=l[m];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(y.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),p++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Rp(n){const t=new bw(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function o(u){e.push(u)}function r(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Rw(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Rp(n),t.set(s,[a])):o>=r.length?(a=new Rp(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lw(n,t,e){let i=new cl;const s=new ut,o=new ut,r=new Fe,a=new tS({depthPacking:px}),c=new eS,l={},u=e.maxTextureSize,d={[ls]:fn,[fn]:ls,[Ne]:Ne},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Cw,fragmentShader:Pw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new _e;p.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let m=this.type;this.render=function(b,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),H=n.state;H.setBlending(os),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=m!==Ri&&this.type===Ri,B=m===Ri&&this.type!==Ri;for(let k=0,U=b.length;k<U;k++){const Z=b[k],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const tt=W.getFrameExtents();if(s.multiply(tt),o.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/tt.x),s.x=o.x*tt.x,W.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/tt.y),s.y=o.y*tt.y,W.mapSize.y=o.y)),W.map===null||N===!0||B===!0){const vt=this.type!==Ri?{minFilter:Tn,magFilter:Tn}:{};W.map!==null&&W.map.dispose(),W.map=new Gs(s.x,s.y,vt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ct=W.getViewportCount();for(let vt=0;vt<ct;vt++){const rt=W.getViewport(vt);r.set(o.x*rt.x,o.y*rt.y,o.x*rt.z,o.y*rt.w),H.viewport(r),W.updateMatrices(Z,vt),i=W.getFrustum(),x(P,L,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Ri&&_(W,L),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,I)};function _(b,P){const L=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gs(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,L,h,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,L,f,v,null)}function y(b,P,L,E){let S=null;const I=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const H=S.uuid,N=P.uuid;let B=l[H];B===void 0&&(B={},l[H]=B);let k=B[N];k===void 0&&(k=S.clone(),B[N]=k,P.addEventListener("dispose",C)),S=k}if(S.visible=P.visible,S.wireframe=P.wireframe,E===Ri?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=L}return S}function x(b,P,L,E,S){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Ri)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const N=t.update(b),B=b.material;if(Array.isArray(B)){const k=N.groups;for(let U=0,Z=k.length;U<Z;U++){const W=k[U],tt=B[W.materialIndex];if(tt&&tt.visible){const ct=y(b,tt,E,S);b.onBeforeShadow(n,b,P,L,N,ct,W),n.renderBufferDirect(L,null,N,ct,b,W),b.onAfterShadow(n,b,P,L,N,ct,W)}}}else if(B.visible){const k=y(b,B,E,S);b.onBeforeShadow(n,b,P,L,N,k,null),n.renderBufferDirect(L,null,N,k,b,null),b.onAfterShadow(n,b,P,L,N,k,null)}}const H=b.children;for(let N=0,B=H.length;N<B;N++)x(H[N],P,L,E,S)}function C(b){b.target.removeEventListener("dispose",C);for(const L in l){const E=l[L],S=b.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Iw={[ku]:Hu,[Vu]:qu,[Gu]:Xu,[Ho]:Wu,[Hu]:ku,[qu]:Vu,[Xu]:Gu,[Wu]:Ho};function Dw(n,t){function e(){let O=!1;const mt=new Fe;let it=null;const Mt=new Fe(0,0,0,0);return{setMask:function(st){it!==st&&!O&&(n.colorMask(st,st,st,st),it=st)},setLocked:function(st){O=st},setClear:function(st,Q,Et,qt,Me){Me===!0&&(st*=qt,Q*=qt,Et*=qt),mt.set(st,Q,Et,qt),Mt.equals(mt)===!1&&(n.clearColor(st,Q,Et,qt),Mt.copy(mt))},reset:function(){O=!1,it=null,Mt.set(-1,0,0,0)}}}function i(){let O=!1,mt=!1,it=null,Mt=null,st=null;return{setReversed:function(Q){if(mt!==Q){const Et=t.get("EXT_clip_control");Q?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),mt=Q;const qt=st;st=null,this.setClear(qt)}},getReversed:function(){return mt},setTest:function(Q){Q?pt(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(Q){it!==Q&&!O&&(n.depthMask(Q),it=Q)},setFunc:function(Q){if(mt&&(Q=Iw[Q]),Mt!==Q){switch(Q){case ku:n.depthFunc(n.NEVER);break;case Hu:n.depthFunc(n.ALWAYS);break;case Vu:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case Gu:n.depthFunc(n.EQUAL);break;case Wu:n.depthFunc(n.GEQUAL);break;case qu:n.depthFunc(n.GREATER);break;case Xu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Q}},setLocked:function(Q){O=Q},setClear:function(Q){st!==Q&&(mt&&(Q=1-Q),n.clearDepth(Q),st=Q)},reset:function(){O=!1,it=null,Mt=null,st=null,mt=!1}}}function s(){let O=!1,mt=null,it=null,Mt=null,st=null,Q=null,Et=null,qt=null,Me=null;return{setTest:function(he){O||(he?pt(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(he){mt!==he&&!O&&(n.stencilMask(he),mt=he)},setFunc:function(he,Bn,_i){(it!==he||Mt!==Bn||st!==_i)&&(n.stencilFunc(he,Bn,_i),it=he,Mt=Bn,st=_i)},setOp:function(he,Bn,_i){(Q!==he||Et!==Bn||qt!==_i)&&(n.stencilOp(he,Bn,_i),Q=he,Et=Bn,qt=_i)},setLocked:function(he){O=he},setClear:function(he){Me!==he&&(n.clearStencil(he),Me=he)},reset:function(){O=!1,mt=null,it=null,Mt=null,st=null,Q=null,Et=null,qt=null,Me=null}}}const o=new e,r=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,y=null,x=null,C=null,b=null,P=new Vt(0,0,0),L=0,E=!1,S=null,I=null,H=null,N=null,B=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Z=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=Z>=2);let tt=null,ct={};const vt=n.getParameter(n.SCISSOR_BOX),rt=n.getParameter(n.VIEWPORT),ne=new Fe().fromArray(vt),$=new Fe().fromArray(rt);function at(O,mt,it,Mt){const st=new Uint8Array(4),Q=n.createTexture();n.bindTexture(O,Q),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<it;Et++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(mt+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return Q}const At={};At[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),r.setFunc(Ho),le(!1),xe(xf),pt(n.CULL_FACE),z(os);function pt(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Lt(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,mt){return d[O]!==mt?(n.bindFramebuffer(O,mt),d[O]=mt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=mt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Bt(O,mt){let it=f,Mt=!1;if(O){it=h.get(mt),it===void 0&&(it=[],h.set(mt,it));const st=O.textures;if(it.length!==st.length||it[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Et=st.length;Q<Et;Q++)it[Q]=n.COLOR_ATTACHMENT0+Q;it.length=st.length,Mt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(it)}function be(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const Re={[Is]:n.FUNC_ADD,[k_]:n.FUNC_SUBTRACT,[H_]:n.FUNC_REVERSE_SUBTRACT};Re[V_]=n.MIN,Re[G_]=n.MAX;const ce={[W_]:n.ZERO,[q_]:n.ONE,[X_]:n.SRC_COLOR,[Ou]:n.SRC_ALPHA,[J_]:n.SRC_ALPHA_SATURATE,[$_]:n.DST_COLOR,[K_]:n.DST_ALPHA,[Y_]:n.ONE_MINUS_SRC_COLOR,[Bu]:n.ONE_MINUS_SRC_ALPHA,[j_]:n.ONE_MINUS_DST_COLOR,[Z_]:n.ONE_MINUS_DST_ALPHA,[Q_]:n.CONSTANT_COLOR,[tx]:n.ONE_MINUS_CONSTANT_COLOR,[ex]:n.CONSTANT_ALPHA,[nx]:n.ONE_MINUS_CONSTANT_ALPHA};function z(O,mt,it,Mt,st,Q,Et,qt,Me,he){if(O===os){v===!0&&(Lt(n.BLEND),v=!1);return}if(v===!1&&(pt(n.BLEND),v=!0),O!==B_){if(O!==g||he!==E){if((m!==Is||x!==Is)&&(n.blendEquation(n.FUNC_ADD),m=Is,x=Is),he)switch(O){case Lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFunc(n.ONE,n.ONE);break;case yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,y=null,C=null,b=null,P.set(0,0,0),L=0,g=O,E=he}return}st=st||mt,Q=Q||it,Et=Et||Mt,(mt!==m||st!==x)&&(n.blendEquationSeparate(Re[mt],Re[st]),m=mt,x=st),(it!==_||Mt!==y||Q!==C||Et!==b)&&(n.blendFuncSeparate(ce[it],ce[Mt],ce[Q],ce[Et]),_=it,y=Mt,C=Q,b=Et),(qt.equals(P)===!1||Me!==L)&&(n.blendColor(qt.r,qt.g,qt.b,Me),P.copy(qt),L=Me),g=O,E=!1}function ln(O,mt){O.side===Ne?Lt(n.CULL_FACE):pt(n.CULL_FACE);let it=O.side===fn;mt&&(it=!it),le(it),O.blending===Lo&&O.transparent===!1?z(os):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const Mt=O.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function xe(O){O!==U_?(pt(n.CULL_FACE),O!==I&&(O===xf?n.cullFace(n.BACK):O===F_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),I=O}function bt(O){O!==H&&(U&&n.lineWidth(O),H=O)}function ie(O,mt,it){O?(pt(n.POLYGON_OFFSET_FILL),(N!==mt||B!==it)&&(n.polygonOffset(mt,it),N=mt,B=it)):Lt(n.POLYGON_OFFSET_FILL)}function zt(O){O?pt(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function Kt(O){O===void 0&&(O=n.TEXTURE0+k-1),tt!==O&&(n.activeTexture(O),tt=O)}function We(O,mt,it){it===void 0&&(tt===null?it=n.TEXTURE0+k-1:it=tt);let Mt=ct[it];Mt===void 0&&(Mt={type:void 0,texture:void 0},ct[it]=Mt),(Mt.type!==O||Mt.texture!==mt)&&(tt!==it&&(n.activeTexture(it),tt=it),n.bindTexture(O,mt||At[O]),Mt.type=O,Mt.texture=mt)}function D(){const O=ct[tt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function A(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(O){ne.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function Ot(O){$.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function Ft(O,mt){let it=l.get(mt);it===void 0&&(it=new WeakMap,l.set(mt,it));let Mt=it.get(O);Mt===void 0&&(Mt=n.getUniformBlockIndex(mt,O.name),it.set(O,Mt))}function ht(O,mt){const Mt=l.get(mt).get(O);c.get(mt)!==Mt&&(n.uniformBlockBinding(mt,Mt,O.__bindingPointIndex),c.set(mt,Mt))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},tt=null,ct={},d={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,y=null,x=null,C=null,b=null,P=new Vt(0,0,0),L=0,E=!1,S=null,I=null,H=null,N=null,B=null,ne.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pt,disable:Lt,bindFramebuffer:ae,drawBuffers:Bt,useProgram:be,setBlending:z,setMaterial:ln,setFlipSided:le,setCullFace:xe,setLineWidth:bt,setPolygonOffset:ie,setScissorTest:zt,activeTexture:Kt,bindTexture:We,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:Ct,texImage3D:nt,updateUBOMapping:Ft,uniformBlockBinding:ht,texStorage2D:ft,texStorage3D:Tt,texSubImage2D:J,texSubImage3D:et,compressedTexSubImage2D:K,compressedTexSubImage3D:Rt,scissor:xt,viewport:Ot,reset:Wt}}function Nw(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,A){return f?new OffscreenCanvas(D,A):Wc("canvas")}function v(D,A,q){let J=1;const et=We(D);if((et.width>q||et.height>q)&&(J=q/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const K=Math.floor(J*et.width),Rt=Math.floor(J*et.height);d===void 0&&(d=p(K,Rt));const ft=A?p(K,Rt):d;return ft.width=K,ft.height=Rt,ft.getContext("2d").drawImage(D,0,0,K,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Rt+")."),ft}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,A,q,J,et=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=A;if(A===n.RED&&(q===n.FLOAT&&(K=n.R32F),q===n.HALF_FLOAT&&(K=n.R16F),q===n.UNSIGNED_BYTE&&(K=n.R8)),A===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(K=n.R8UI),q===n.UNSIGNED_SHORT&&(K=n.R16UI),q===n.UNSIGNED_INT&&(K=n.R32UI),q===n.BYTE&&(K=n.R8I),q===n.SHORT&&(K=n.R16I),q===n.INT&&(K=n.R32I)),A===n.RG&&(q===n.FLOAT&&(K=n.RG32F),q===n.HALF_FLOAT&&(K=n.RG16F),q===n.UNSIGNED_BYTE&&(K=n.RG8)),A===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(K=n.RG8UI),q===n.UNSIGNED_SHORT&&(K=n.RG16UI),q===n.UNSIGNED_INT&&(K=n.RG32UI),q===n.BYTE&&(K=n.RG8I),q===n.SHORT&&(K=n.RG16I),q===n.INT&&(K=n.RG32I)),A===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(K=n.RGB8UI),q===n.UNSIGNED_SHORT&&(K=n.RGB16UI),q===n.UNSIGNED_INT&&(K=n.RGB32UI),q===n.BYTE&&(K=n.RGB8I),q===n.SHORT&&(K=n.RGB16I),q===n.INT&&(K=n.RGB32I)),A===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),q===n.UNSIGNED_INT&&(K=n.RGBA32UI),q===n.BYTE&&(K=n.RGBA8I),q===n.SHORT&&(K=n.RGBA16I),q===n.INT&&(K=n.RGBA32I)),A===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),A===n.RGBA){const Rt=et?Vc:re.getTransfer(J);q===n.FLOAT&&(K=n.RGBA32F),q===n.HALF_FLOAT&&(K=n.RGBA16F),q===n.UNSIGNED_BYTE&&(K=Rt===me?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(D,A){let q;return D?A===null||A===Vs||A===Gr?q=n.DEPTH24_STENCIL8:A===ri?q=n.DEPTH32F_STENCIL8:A===Vr&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Vs||A===Gr?q=n.DEPTH_COMPONENT24:A===ri?q=n.DEPTH_COMPONENT32F:A===Vr&&(q=n.DEPTH_COMPONENT16),q}function C(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==Un?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function b(D){const A=D.target;A.removeEventListener("dispose",b),L(A),A.isVideoTexture&&u.delete(A)}function P(D){const A=D.target;A.removeEventListener("dispose",P),S(A)}function L(D){const A=i.get(D);if(A.__webglInit===void 0)return;const q=D.source,J=h.get(q);if(J){const et=J[A.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(D),Object.keys(J).length===0&&h.delete(q)}i.remove(D)}function E(D){const A=i.get(D);n.deleteTexture(A.__webglTexture);const q=D.source,J=h.get(q);delete J[A.__cacheKey],r.memory.textures--}function S(D){const A=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let et=0;et<A.__webglFramebuffer[J].length;et++)n.deleteFramebuffer(A.__webglFramebuffer[J][et]);else n.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)n.deleteFramebuffer(A.__webglFramebuffer[J]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=D.textures;for(let J=0,et=q.length;J<et;J++){const K=i.get(q[J]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(q[J])}i.remove(D)}let I=0;function H(){I=0}function N(){const D=I;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),I+=1,D}function B(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function k(D,A){const q=i.get(D);if(D.isVideoTexture&&zt(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(q,D,A);return}}e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+A)}function U(D,A){const q=i.get(D);if(D.version>0&&q.__version!==D.version){At(q,D,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+A)}function Z(D,A){const q=i.get(D);if(D.version>0&&q.__version!==D.version){At(q,D,A);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+A)}function W(D,A){const q=i.get(D);if(D.version>0&&q.__version!==D.version){pt(q,D,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+A)}const tt={[Oi]:n.REPEAT,[zs]:n.CLAMP_TO_EDGE,[Zu]:n.MIRRORED_REPEAT},ct={[Tn]:n.NEAREST,[dx]:n.NEAREST_MIPMAP_NEAREST,[Da]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Ul]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},vt={[gx]:n.NEVER,[Mx]:n.ALWAYS,[vx]:n.LESS,[y0]:n.LEQUAL,[_x]:n.EQUAL,[Sx]:n.GEQUAL,[xx]:n.GREATER,[yx]:n.NOTEQUAL};function rt(D,A){if(A.type===ri&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Un||A.magFilter===Ul||A.magFilter===Da||A.magFilter===Di||A.minFilter===Un||A.minFilter===Ul||A.minFilter===Da||A.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,tt[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,tt[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,tt[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ct[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ct[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,vt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Tn||A.minFilter!==Da&&A.minFilter!==Di||A.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ne(D,A){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",b));const J=A.source;let et=h.get(J);et===void 0&&(et={},h.set(J,et));const K=B(A);if(K!==D.__cacheKey){et[K]===void 0&&(et[K]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,q=!0),et[K].usedTimes++;const Rt=et[D.__cacheKey];Rt!==void 0&&(et[D.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(A)),D.__cacheKey=K,D.__webglTexture=et[K].texture}return q}function $(D,A,q){return Math.floor(Math.floor(D/q)/A)}function at(D,A,q,J){const K=D.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,q,J,A.data);else{K.sort((nt,xt)=>nt.start-xt.start);let Rt=0;for(let nt=1;nt<K.length;nt++){const xt=K[Rt],Ot=K[nt],Ft=xt.start+xt.count,ht=$(Ot.start,A.width,4),Wt=$(xt.start,A.width,4);Ot.start<=Ft+1&&ht===Wt&&$(Ot.start+Ot.count-1,A.width,4)===ht?xt.count=Math.max(xt.count,Ot.start+Ot.count-xt.start):(++Rt,K[Rt]=Ot)}K.length=Rt+1;const ft=n.getParameter(n.UNPACK_ROW_LENGTH),Tt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ct=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let nt=0,xt=K.length;nt<xt;nt++){const Ot=K[nt],Ft=Math.floor(Ot.start/4),ht=Math.ceil(Ot.count/4),Wt=Ft%A.width,O=Math.floor(Ft/A.width),mt=ht,it=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Wt,O,mt,it,q,J,A.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ft),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function At(D,A,q){let J=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=n.TEXTURE_3D);const et=ne(D,A),K=A.source;e.bindTexture(J,D.__webglTexture,n.TEXTURE0+q);const Rt=i.get(K);if(K.version!==Rt.__version||et===!0){e.activeTexture(n.TEXTURE0+q);const ft=re.getPrimaries(re.workingColorSpace),Tt=A.colorSpace===ns?null:re.getPrimaries(A.colorSpace),Ct=A.colorSpace===ns||ft===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let nt=v(A.image,!1,s.maxTextureSize);nt=Kt(A,nt);const xt=o.convert(A.format,A.colorSpace),Ot=o.convert(A.type);let Ft=y(A.internalFormat,xt,Ot,A.colorSpace,A.isVideoTexture);rt(J,A);let ht;const Wt=A.mipmaps,O=A.isVideoTexture!==!0,mt=Rt.__version===void 0||et===!0,it=K.dataReady,Mt=C(A,nt);if(A.isDepthTexture)Ft=x(A.format===qr,A.type),mt&&(O?e.texStorage2D(n.TEXTURE_2D,1,Ft,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Ft,nt.width,nt.height,0,xt,Ot,null));else if(A.isDataTexture)if(Wt.length>0){O&&mt&&e.texStorage2D(n.TEXTURE_2D,Mt,Ft,Wt[0].width,Wt[0].height);for(let st=0,Q=Wt.length;st<Q;st++)ht=Wt[st],O?it&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ht.width,ht.height,xt,Ot,ht.data):e.texImage2D(n.TEXTURE_2D,st,Ft,ht.width,ht.height,0,xt,Ot,ht.data);A.generateMipmaps=!1}else O?(mt&&e.texStorage2D(n.TEXTURE_2D,Mt,Ft,nt.width,nt.height),it&&at(A,nt,xt,Ot)):e.texImage2D(n.TEXTURE_2D,0,Ft,nt.width,nt.height,0,xt,Ot,nt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){O&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Ft,Wt[0].width,Wt[0].height,nt.depth);for(let st=0,Q=Wt.length;st<Q;st++)if(ht=Wt[st],A.format!==Zn)if(xt!==null)if(O){if(it)if(A.layerUpdates.size>0){const Et=sp(ht.width,ht.height,A.format,A.type);for(const qt of A.layerUpdates){const Me=ht.data.subarray(qt*Et/ht.data.BYTES_PER_ELEMENT,(qt+1)*Et/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,qt,ht.width,ht.height,1,xt,Me)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,ht.width,ht.height,nt.depth,xt,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Ft,ht.width,ht.height,nt.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?it&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,ht.width,ht.height,nt.depth,xt,Ot,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Ft,ht.width,ht.height,nt.depth,0,xt,Ot,ht.data)}else{O&&mt&&e.texStorage2D(n.TEXTURE_2D,Mt,Ft,Wt[0].width,Wt[0].height);for(let st=0,Q=Wt.length;st<Q;st++)ht=Wt[st],A.format!==Zn?xt!==null?O?it&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,ht.width,ht.height,xt,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Ft,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?it&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ht.width,ht.height,xt,Ot,ht.data):e.texImage2D(n.TEXTURE_2D,st,Ft,ht.width,ht.height,0,xt,Ot,ht.data)}else if(A.isDataArrayTexture)if(O){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Ft,nt.width,nt.height,nt.depth),it)if(A.layerUpdates.size>0){const st=sp(nt.width,nt.height,A.format,A.type);for(const Q of A.layerUpdates){const Et=nt.data.subarray(Q*st/nt.data.BYTES_PER_ELEMENT,(Q+1)*st/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,xt,Ot,Et)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,Ot,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,nt.width,nt.height,nt.depth,0,xt,Ot,nt.data);else if(A.isData3DTexture)O?(mt&&e.texStorage3D(n.TEXTURE_3D,Mt,Ft,nt.width,nt.height,nt.depth),it&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,Ot,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,nt.width,nt.height,nt.depth,0,xt,Ot,nt.data);else if(A.isFramebufferTexture){if(mt)if(O)e.texStorage2D(n.TEXTURE_2D,Mt,Ft,nt.width,nt.height);else{let st=nt.width,Q=nt.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(n.TEXTURE_2D,Et,Ft,st,Q,0,xt,Ot,null),st>>=1,Q>>=1}}else if(Wt.length>0){if(O&&mt){const st=We(Wt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Ft,st.width,st.height)}for(let st=0,Q=Wt.length;st<Q;st++)ht=Wt[st],O?it&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,xt,Ot,ht):e.texImage2D(n.TEXTURE_2D,st,Ft,xt,Ot,ht);A.generateMipmaps=!1}else if(O){if(mt){const st=We(nt);e.texStorage2D(n.TEXTURE_2D,Mt,Ft,st.width,st.height)}it&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Ot,nt)}else e.texImage2D(n.TEXTURE_2D,0,Ft,xt,Ot,nt);g(A)&&m(J),Rt.__version=K.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function pt(D,A,q){if(A.image.length!==6)return;const J=ne(D,A),et=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+q);const K=i.get(et);if(et.version!==K.__version||J===!0){e.activeTexture(n.TEXTURE0+q);const Rt=re.getPrimaries(re.workingColorSpace),ft=A.colorSpace===ns?null:re.getPrimaries(A.colorSpace),Tt=A.colorSpace===ns||Rt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ct=A.isCompressedTexture||A.image[0].isCompressedTexture,nt=A.image[0]&&A.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Ct&&!nt?xt[Q]=v(A.image[Q],!0,s.maxCubemapSize):xt[Q]=nt?A.image[Q].image:A.image[Q],xt[Q]=Kt(A,xt[Q]);const Ot=xt[0],Ft=o.convert(A.format,A.colorSpace),ht=o.convert(A.type),Wt=y(A.internalFormat,Ft,ht,A.colorSpace),O=A.isVideoTexture!==!0,mt=K.__version===void 0||J===!0,it=et.dataReady;let Mt=C(A,Ot);rt(n.TEXTURE_CUBE_MAP,A);let st;if(Ct){O&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Wt,Ot.width,Ot.height);for(let Q=0;Q<6;Q++){st=xt[Q].mipmaps;for(let Et=0;Et<st.length;Et++){const qt=st[Et];A.format!==Zn?Ft!==null?O?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,0,0,qt.width,qt.height,Ft,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,Wt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,0,0,qt.width,qt.height,Ft,ht,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,Wt,qt.width,qt.height,0,Ft,ht,qt.data)}}}else{if(st=A.mipmaps,O&&mt){st.length>0&&Mt++;const Q=We(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Ft,ht,xt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,xt[Q].width,xt[Q].height,0,Ft,ht,xt[Q].data);for(let Et=0;Et<st.length;Et++){const Me=st[Et].image[Q].image;O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,0,0,Me.width,Me.height,Ft,ht,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,Wt,Me.width,Me.height,0,Ft,ht,Me.data)}}else{O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,ht,xt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,Ft,ht,xt[Q]);for(let Et=0;Et<st.length;Et++){const qt=st[Et];O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,0,0,Ft,ht,qt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,Wt,Ft,ht,qt.image[Q])}}}g(A)&&m(n.TEXTURE_CUBE_MAP),K.__version=et.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Lt(D,A,q,J,et,K){const Rt=o.convert(q.format,q.colorSpace),ft=o.convert(q.type),Tt=y(q.internalFormat,Rt,ft,q.colorSpace),Ct=i.get(A),nt=i.get(q);if(nt.__renderTarget=A,!Ct.__hasExternalTextures){const xt=Math.max(1,A.width>>K),Ot=Math.max(1,A.height>>K);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,K,Tt,xt,Ot,A.depth,0,Rt,ft,null):e.texImage2D(et,K,Tt,xt,Ot,0,Rt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),ie(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,et,nt.__webglTexture,0,bt(A)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,et,nt.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(D,A,q){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer){const J=A.depthTexture,et=J&&J.isDepthTexture?J.type:null,K=x(A.stencilBuffer,et),Rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=bt(A);ie(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,K,A.width,A.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,K,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,K,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,D)}else{const J=A.textures;for(let et=0;et<J.length;et++){const K=J[et],Rt=o.convert(K.format,K.colorSpace),ft=o.convert(K.type),Tt=y(K.internalFormat,Rt,ft,K.colorSpace),Ct=bt(A);q&&ie(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,Tt,A.width,A.height):ie(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct,Tt,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(A.depthTexture);J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const et=J.__webglTexture,K=bt(A);if(A.depthTexture.format===Wr)ie(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(A.depthTexture.format===qr)ie(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function be(D){const A=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){const et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),A.__depthDisposeCallback=et}A.__boundDepthTexture=J}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const J=D.texture.mipmaps;J&&J.length>0?Bt(A.__webglFramebuffer[0],D):Bt(A.__webglFramebuffer,D)}else if(q){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=n.createRenderbuffer(),ae(A.__webglDepthbuffer[J],D,!1);else{const et=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=A.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,K)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),ae(A.__webglDepthbuffer,D,!1);else{const et=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(D,A,q){const J=i.get(D);A!==void 0&&Lt(J.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&be(D)}function ce(D){const A=D.texture,q=i.get(D),J=i.get(A);D.addEventListener("dispose",P);const et=D.textures,K=D.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=A.version,r.memory.textures++),K){q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[ft]=[];for(let Tt=0;Tt<A.mipmaps.length;Tt++)q.__webglFramebuffer[ft][Tt]=n.createFramebuffer()}else q.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)q.__webglFramebuffer[ft]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let ft=0,Tt=et.length;ft<Tt;ft++){const Ct=i.get(et[ft]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),r.memory.textures++)}if(D.samples>0&&ie(D)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const Tt=et[ft];q.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ft]);const Ct=o.convert(Tt.format,Tt.colorSpace),nt=o.convert(Tt.type),xt=y(Tt.internalFormat,Ct,nt,Tt.colorSpace,D.isXRRenderTarget===!0),Ot=bt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,xt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,q.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),rt(n.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let Tt=0;Tt<A.mipmaps.length;Tt++)Lt(q.__webglFramebuffer[ft][Tt],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Tt);else Lt(q.__webglFramebuffer[ft],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(A)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,Tt=et.length;ft<Tt;ft++){const Ct=et[ft],nt=i.get(Ct);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),rt(n.TEXTURE_2D,Ct),Lt(q.__webglFramebuffer,D,Ct,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),g(Ct)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,J.__webglTexture),rt(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let Tt=0;Tt<A.mipmaps.length;Tt++)Lt(q.__webglFramebuffer[Tt],D,A,n.COLOR_ATTACHMENT0,ft,Tt);else Lt(q.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,ft,0);g(A)&&m(ft),e.unbindTexture()}D.depthBuffer&&be(D)}function z(D){const A=D.textures;for(let q=0,J=A.length;q<J;q++){const et=A[q];if(g(et)){const K=_(D),Rt=i.get(et).__webglTexture;e.bindTexture(K,Rt),m(K),e.unbindTexture()}}}const ln=[],le=[];function xe(D){if(D.samples>0){if(ie(D)===!1){const A=D.textures,q=D.width,J=D.height;let et=n.COLOR_BUFFER_BIT;const K=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(D),ft=A.length>1;if(ft)for(let Ct=0;Ct<A.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Tt=D.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ct=0;Ct<A.length;Ct++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);const nt=i.get(A[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,q,J,0,0,q,J,et,n.NEAREST),c===!0&&(ln.length=0,le.length=0,ln.push(n.COLOR_ATTACHMENT0+Ct),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ln.push(K),le.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ln))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let Ct=0;Ct<A.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);const nt=i.get(A[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function bt(D){return Math.min(s.maxSamples,D.samples)}function ie(D){const A=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function zt(D){const A=r.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Kt(D,A){const q=D.colorSpace,J=D.format,et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Wo&&q!==ns&&(re.getTransfer(q)===me?(J!==Zn||et!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=U,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ie}function zw(n,t){function e(i,s=ns){let o;const r=re.getTransfer(s);if(i===Bi)return n.UNSIGNED_BYTE;if(i===qh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===p0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===d0)return n.BYTE;if(i===f0)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===Wh)return n.INT;if(i===Vs)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===la)return n.HALF_FLOAT;if(i===m0)return n.ALPHA;if(i===g0)return n.RGB;if(i===Zn)return n.RGBA;if(i===Wr)return n.DEPTH_COMPONENT;if(i===qr)return n.DEPTH_STENCIL;if(i===Yh)return n.RED;if(i===Kh)return n.RED_INTEGER;if(i===v0)return n.RG;if(i===Zh)return n.RG_INTEGER;if(i===$h)return n.RGBA_INTEGER;if(i===Rc||i===Cc||i===Pc||i===Lc)if(r===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$u||i===ju||i===Ju||i===Qu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===$u)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ju)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ju)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===eh||i===nh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===th||i===eh)return r===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===nh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ih||i===sh||i===oh||i===rh||i===ah||i===ch||i===lh||i===uh||i===hh||i===dh||i===fh||i===ph||i===mh||i===gh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ih)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===vh||i===_h)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Ic)return r===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_0||i===xh||i===yh||i===Sh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ic)return o.COMPRESSED_RED_RGTC1_EXT;if(i===xh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new an,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Fn({vertexShader:Uw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bw extends er{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null;const v=new Ow,g=e.getContextAttributes();let m=null,_=null;const y=[],x=[],C=new ut;let b=null;const P=new Nn;P.viewport=new Fe;const L=new Nn;L.viewport=new Fe;const E=[P,L],S=new oS;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=y[$];return at===void 0&&(at=new iu,y[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=y[$];return at===void 0&&(at=new iu,y[$]=at),at.getGripSpace()},this.getHand=function($){let at=y[$];return at===void 0&&(at=new iu,y[$]=at),at.getHandSpace()};function N($){const at=x.indexOf($.inputSource);if(at===-1)return;const At=y[at];At!==void 0&&(At.update($.inputSource,$.frame,l||r),At.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",k);for(let $=0;$<y.length;$++){const at=x[$];at!==null&&(x[$]=null,y[$].disconnect(at))}I=null,H=null,v.reset(),t.setRenderTarget(m),f=null,h=null,d=null,s=null,_=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,pt=null,Lt=null;g.depth&&(Lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=g.stencil?qr:Wr,pt=g.stencil?Gr:Vs);const ae={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:o};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(ae),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Gs(h.textureWidth,h.textureHeight,{format:Zn,type:Bi,depthTexture:new D0(h.textureWidth,h.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const At={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Gs(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k($){for(let at=0;at<$.removed.length;at++){const At=$.removed[at],pt=x.indexOf(At);pt>=0&&(x[pt]=null,y[pt].disconnect(At))}for(let at=0;at<$.added.length;at++){const At=$.added[at];let pt=x.indexOf(At);if(pt===-1){for(let ae=0;ae<y.length;ae++)if(ae>=x.length){x.push(At),pt=ae;break}else if(x[ae]===null){x[ae]=At,pt=ae;break}if(pt===-1)break}const Lt=y[pt];Lt&&Lt.connect(At)}}const U=new w,Z=new w;function W($,at,At){U.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(At.matrixWorld);const pt=U.distanceTo(Z),Lt=at.projectionMatrix.elements,ae=At.projectionMatrix.elements,Bt=Lt[14]/(Lt[10]-1),be=Lt[14]/(Lt[10]+1),Re=(Lt[9]+1)/Lt[5],ce=(Lt[9]-1)/Lt[5],z=(Lt[8]-1)/Lt[0],ln=(ae[8]+1)/ae[0],le=Bt*z,xe=Bt*ln,bt=pt/(-z+ln),ie=bt*-z;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ie),$.translateZ(bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const zt=Bt+bt,Kt=be+bt,We=le-ie,D=xe+(pt-ie),A=Re*be/Kt*zt,q=ce*be/Kt*zt;$.projectionMatrix.makePerspective(We,D,A,q,zt,Kt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,At=$.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(At=v.depthFar)),S.near=L.near=P.near=at,S.far=L.far=P.far=At,(I!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,H=S.far),P.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,S.layers.mask=P.layers.mask|L.layers.mask;const pt=$.parent,Lt=S.cameras;tt(S,pt);for(let ae=0;ae<Lt.length;ae++)tt(Lt[ae],pt);Lt.length===2?W(S,P,L):S.projectionMatrix.copy(P.projectionMatrix),ct($,S,pt)};function ct($,at,At){At===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let vt=null;function rt($,at){if(u=at.getViewerPose(l||r),p=at,u!==null){const At=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let pt=!1;At.length!==S.cameras.length&&(S.cameras.length=0,pt=!0);for(let Bt=0;Bt<At.length;Bt++){const be=At[Bt];let Re=null;if(f!==null)Re=f.getViewport(be);else{const z=d.getViewSubImage(h,be);Re=z.viewport,Bt===0&&(t.setRenderTargetTextures(_,z.colorTexture,z.depthStencilTexture),t.setRenderTarget(_))}let ce=E[Bt];ce===void 0&&(ce=new Nn,ce.layers.enable(Bt),ce.viewport=new Fe,E[Bt]=ce),ce.matrix.fromArray(be.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(be.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Re.x,Re.y,Re.width,Re.height),Bt===0&&(S.matrix.copy(ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pt===!0&&S.cameras.push(ce)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Bt=d.getDepthInformation(At[0]);Bt&&Bt.isValid&&Bt.texture&&v.init(t,Bt,s.renderState)}}for(let At=0;At<y.length;At++){const pt=x[At],Lt=y[At];pt!==null&&Lt!==void 0&&Lt.update(pt,at,l||r)}vt&&vt($,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}const ne=new G0;ne.setAnimationLoop(rt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}}const As=new ye,kw=new pe;function Hw(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,R0(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),d(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m)):m.isMeshStandardMaterial?(o(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),v(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,_,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=t.get(m),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,As.copy(x),As.x*=-1,As.y*=-1,As.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(kw.makeRotationFromEuler(As)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vw(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function l(_,y){let x=s[_.id];x===void 0&&(p(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",g));const C=y.program;i.updateUBOMapping(_,C);const b=t.render.frame;o[_.id]!==b&&(h(_),o[_.id]=b)}function u(_){const y=d();_.__bindingPointIndex=y;const x=n.createBuffer(),C=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=s[_.id],x=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,P=x.length;b<P;b++){const L=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,S=L.length;E<S;E++){const I=L[E];if(f(I,b,E,C)===!0){const H=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let k=0;k<N.length;k++){const U=N[k],Z=v(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,H+B,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,y,x,C){const b=_.value,P=y+"_"+x;if(C[P]===void 0)return typeof b=="number"||typeof b=="boolean"?C[P]=b:C[P]=b.clone(),!0;{const L=C[P];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return C[P]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function p(_){const y=_.uniforms;let x=0;const C=16;for(let P=0,L=y.length;P<L;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,I=E.length;S<I;S++){const H=E[S],N=Array.isArray(H.value)?H.value:[H.value];for(let B=0,k=N.length;B<k;B++){const U=N[B],Z=v(U),W=x%C,tt=W%Z.boundary,ct=W+tt;x+=tt,ct!==0&&C-ct<Z.storage&&(x+=C-ct),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=Z.storage}}}const b=x%C;return b>0&&(x+=C-b),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function m(){for(const _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class Gw{constructor(t={}){const{canvas:e=Bx(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=Xe;let b=0,P=0,L=null,E=-1,S=null;const I=new Fe,H=new Fe;let N=null;const B=new Vt(0);let k=0,U=e.width,Z=e.height,W=1,tt=null,ct=null;const vt=new Fe(0,0,U,Z),rt=new Fe(0,0,U,Z);let ne=!1;const $=new cl;let at=!1,At=!1;const pt=new pe,Lt=new pe,ae=new w,Bt=new Fe,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ce(){return L===null?W:1}let z=i;function ln(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gh}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Q,!1),z===null){const V="webgl2";if(z=ln(V,T),z===null)throw ln(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let le,xe,bt,ie,zt,Kt,We,D,A,q,J,et,K,Rt,ft,Tt,Ct,nt,xt,Ot,Ft,ht,Wt,O;function mt(){le=new QE(z),le.init(),ht=new zw(z,le),xe=new XE(z,le,t,ht),bt=new Dw(z,le),xe.reverseDepthBuffer&&h&&bt.buffers.depth.setReversed(!0),ie=new n1(z),zt=new yw,Kt=new Nw(z,le,bt,zt,xe,ht,ie),We=new KE(x),D=new JE(x),A=new cS(z),Wt=new WE(z,A),q=new t1(z,A,ie,Wt),J=new s1(z,q,A,ie),xt=new i1(z,xe,Kt),Tt=new YE(zt),et=new xw(x,We,D,le,xe,Wt,Tt),K=new Hw(x,zt),Rt=new Mw,ft=new Rw(le),nt=new GE(x,We,D,bt,J,f,c),Ct=new Lw(x,J,xe),O=new Vw(z,ie,xe,bt),Ot=new qE(z,le,ie),Ft=new e1(z,le,ie),ie.programs=et.programs,x.capabilities=xe,x.extensions=le,x.properties=zt,x.renderLists=Rt,x.shadowMap=Ct,x.state=bt,x.info=ie}mt();const it=new Bw(x,z);this.xr=it,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(U,Z,!1))},this.getSize=function(T){return T.set(U,Z)},this.setSize=function(T,V,X=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,Z=V,e.width=Math.floor(T*W),e.height=Math.floor(V*W),X===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(U*W,Z*W).floor()},this.setDrawingBufferSize=function(T,V,X){U=T,Z=V,W=X,e.width=Math.floor(T*X),e.height=Math.floor(V*X),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,V,X,Y){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,V,X,Y),bt.viewport(I.copy(vt).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,V,X,Y){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,V,X,Y),bt.scissor(H.copy(rt).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(T){bt.setScissorTest(ne=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,X=!0){let Y=0;if(T){let G=!1;if(L!==null){const ot=L.texture.format;G=ot===$h||ot===Zh||ot===Kh}if(G){const ot=L.texture.type,gt=ot===Bi||ot===Vs||ot===Vr||ot===Gr||ot===qh||ot===Xh,wt=nt.getClearColor(),yt=nt.getClearAlpha(),kt=wt.r,Ht=wt.g,It=wt.b;gt?(p[0]=kt,p[1]=Ht,p[2]=It,p[3]=yt,z.clearBufferuiv(z.COLOR,0,p)):(v[0]=kt,v[1]=Ht,v[2]=It,v[3]=yt,z.clearBufferiv(z.COLOR,0,v))}else Y|=z.COLOR_BUFFER_BIT}V&&(Y|=z.DEPTH_BUFFER_BIT),X&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),nt.dispose(),Rt.dispose(),ft.dispose(),zt.dispose(),We.dispose(),D.dispose(),J.dispose(),Wt.dispose(),O.dispose(),et.dispose(),it.dispose(),it.removeEventListener("sessionstart",df),it.removeEventListener("sessionend",ff),_s.stop()};function Mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=ie.autoReset,V=Ct.enabled,X=Ct.autoUpdate,Y=Ct.needsUpdate,G=Ct.type;mt(),ie.autoReset=T,Ct.enabled=V,Ct.autoUpdate=X,Ct.needsUpdate=Y,Ct.type=G}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Et(T){const V=T.target;V.removeEventListener("dispose",Et),qt(V)}function qt(T){Me(T),zt.remove(T)}function Me(T){const V=zt.get(T).programs;V!==void 0&&(V.forEach(function(X){et.releaseProgram(X)}),T.isShaderMaterial&&et.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,X,Y,G,ot){V===null&&(V=be);const gt=G.isMesh&&G.matrixWorld.determinant()<0,wt=P_(T,V,X,Y,G);bt.setMaterial(Y,gt);let yt=X.index,kt=1;if(Y.wireframe===!0){if(yt=q.getWireframeAttribute(X),yt===void 0)return;kt=2}const Ht=X.drawRange,It=X.attributes.position;let ee=Ht.start*kt,de=(Ht.start+Ht.count)*kt;ot!==null&&(ee=Math.max(ee,ot.start*kt),de=Math.min(de,(ot.start+ot.count)*kt)),yt!==null?(ee=Math.max(ee,0),de=Math.min(de,yt.count)):It!=null&&(ee=Math.max(ee,0),de=Math.min(de,It.count));const Ce=de-ee;if(Ce<0||Ce===1/0)return;Wt.setup(G,Y,wt,X,yt);let De,se=Ot;if(yt!==null&&(De=A.get(yt),se=Ft,se.setIndex(De)),G.isMesh)Y.wireframe===!0?(bt.setLineWidth(Y.wireframeLinewidth*ce()),se.setMode(z.LINES)):se.setMode(z.TRIANGLES);else if(G.isLine){let Ut=Y.linewidth;Ut===void 0&&(Ut=1),bt.setLineWidth(Ut*ce()),G.isLineSegments?se.setMode(z.LINES):G.isLineLoop?se.setMode(z.LINE_LOOP):se.setMode(z.LINE_STRIP)}else G.isPoints?se.setMode(z.POINTS):G.isSprite&&se.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Do("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ut=G._multiDrawStarts,tn=G._multiDrawCounts,ue=G._multiDrawCount,kn=yt?A.get(yt).bytesPerElement:1,io=zt.get(Y).currentProgram.getUniforms();for(let yn=0;yn<ue;yn++)io.setValue(z,"_gl_DrawID",yn),se.render(Ut[yn]/kn,tn[yn])}else if(G.isInstancedMesh)se.renderInstances(ee,Ce,G.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,tn=Math.min(X.instanceCount,Ut);se.renderInstances(ee,Ce,tn)}else se.render(ee,Ce)};function he(T,V,X){T.transparent===!0&&T.side===Ne&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Ia(T,V,X),T.side=ls,T.needsUpdate=!0,Ia(T,V,X),T.side=Ne):Ia(T,V,X)}this.compile=function(T,V,X=null){X===null&&(X=T),m=ft.get(X),m.init(V),y.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Y=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ot=G.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){const wt=ot[gt];he(wt,X,G),Y.add(wt)}else he(ot,X,G),Y.add(ot)}),m=y.pop(),Y},this.compileAsync=function(T,V,X=null){const Y=this.compile(T,V,X);return new Promise(G=>{function ot(){if(Y.forEach(function(gt){zt.get(gt).currentProgram.isReady()&&Y.delete(gt)}),Y.size===0){G(T);return}setTimeout(ot,10)}le.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Bn=null;function _i(T){Bn&&Bn(T)}function df(){_s.stop()}function ff(){_s.start()}const _s=new G0;_s.setAnimationLoop(_i),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(T){Bn=T,it.setAnimationLoop(T),T===null?_s.stop():_s.start()},it.addEventListener("sessionstart",df),it.addEventListener("sessionend",ff),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(V),V=it.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,V,L),m=ft.get(T,y.length),m.init(V),y.push(m),Lt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),$.setFromProjectionMatrix(Lt),At=this.localClippingEnabled,at=Tt.init(this.clippingPlanes,At),g=Rt.get(T,_.length),g.init(),_.push(g),it.enabled===!0&&it.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Nl(ot,V,-1/0,x.sortObjects)}Nl(T,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(tt,ct),Re=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Re&&nt.addToRenderList(g,T),this.info.render.frame++,at===!0&&Tt.beginShadows();const X=m.state.shadowsArray;Ct.render(X,T,V),at===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,G=g.transmissive;if(m.setupLights(),V.isArrayCamera){const ot=V.cameras;if(G.length>0)for(let gt=0,wt=ot.length;gt<wt;gt++){const yt=ot[gt];mf(Y,G,T,yt)}Re&&nt.render(T);for(let gt=0,wt=ot.length;gt<wt;gt++){const yt=ot[gt];pf(g,T,yt,yt.viewport)}}else G.length>0&&mf(Y,G,T,V),Re&&nt.render(T),pf(g,T,V);L!==null&&P===0&&(Kt.updateMultisampleRenderTarget(L),Kt.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,V),Wt.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],at===!0&&Tt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Nl(T,V,X,Y){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){Y&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Lt);const gt=J.update(T),wt=T.material;wt.visible&&g.push(T,gt,wt,X,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const gt=J.update(T),wt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Bt.copy(gt.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(Lt)),Array.isArray(wt)){const yt=gt.groups;for(let kt=0,Ht=yt.length;kt<Ht;kt++){const It=yt[kt],ee=wt[It.materialIndex];ee&&ee.visible&&g.push(T,gt,ee,X,Bt.z,It)}}else wt.visible&&g.push(T,gt,wt,X,Bt.z,null)}}const ot=T.children;for(let gt=0,wt=ot.length;gt<wt;gt++)Nl(ot[gt],V,X,Y)}function pf(T,V,X,Y){const G=T.opaque,ot=T.transmissive,gt=T.transparent;m.setupLightsView(X),at===!0&&Tt.setGlobalState(x.clippingPlanes,X),Y&&bt.viewport(I.copy(Y)),G.length>0&&La(G,V,X),ot.length>0&&La(ot,V,X),gt.length>0&&La(gt,V,X),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function mf(T,V,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Gs(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?la:Bi,minFilter:Di,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ot=m.state.transmissionRenderTarget[Y.id],gt=Y.viewport||I;ot.setSize(gt.z*x.transmissionResolutionScale,gt.w*x.transmissionResolutionScale);const wt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(B),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Re&&nt.render(X);const yt=x.toneMapping;x.toneMapping=Ui;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),at===!0&&Tt.setGlobalState(x.clippingPlanes,Y),La(T,X,Y),Kt.updateMultisampleRenderTarget(ot),Kt.updateRenderTargetMipmap(ot),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let It=0,ee=V.length;It<ee;It++){const de=V[It],Ce=de.object,De=de.geometry,se=de.material,Ut=de.group;if(se.side===Ne&&Ce.layers.test(Y.layers)){const tn=se.side;se.side=fn,se.needsUpdate=!0,gf(Ce,X,Y,De,se,Ut),se.side=tn,se.needsUpdate=!0,Ht=!0}}Ht===!0&&(Kt.updateMultisampleRenderTarget(ot),Kt.updateRenderTargetMipmap(ot))}x.setRenderTarget(wt),x.setClearColor(B,k),kt!==void 0&&(Y.viewport=kt),x.toneMapping=yt}function La(T,V,X){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ot=T.length;G<ot;G++){const gt=T[G],wt=gt.object,yt=gt.geometry,kt=gt.group;let Ht=gt.material;Ht.allowOverride===!0&&Y!==null&&(Ht=Y),wt.layers.test(X.layers)&&gf(wt,V,X,yt,Ht,kt)}}function gf(T,V,X,Y,G,ot){T.onBeforeRender(x,V,X,Y,G,ot),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,V,X,Y,T,ot),G.transparent===!0&&G.side===Ne&&G.forceSinglePass===!1?(G.side=fn,G.needsUpdate=!0,x.renderBufferDirect(X,V,Y,G,T,ot),G.side=ls,G.needsUpdate=!0,x.renderBufferDirect(X,V,Y,G,T,ot),G.side=Ne):x.renderBufferDirect(X,V,Y,G,T,ot),T.onAfterRender(x,V,X,Y,G,ot)}function Ia(T,V,X){V.isScene!==!0&&(V=be);const Y=zt.get(T),G=m.state.lights,ot=m.state.shadowsArray,gt=G.state.version,wt=et.getParameters(T,G.state,ot,V,X),yt=et.getProgramCacheKey(wt);let kt=Y.programs;Y.environment=T.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(T.isMeshStandardMaterial?D:We).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",Et),kt=new Map,Y.programs=kt);let Ht=kt.get(yt);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===gt)return _f(T,wt),Ht}else wt.uniforms=et.getUniforms(T),T.onBeforeCompile(wt,x),Ht=et.acquireProgram(wt,yt),kt.set(yt,Ht),Y.uniforms=wt.uniforms;const It=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=Tt.uniform),_f(T,wt),Y.needsLights=I_(T),Y.lightsStateVersion=gt,Y.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.directionalShadowMap.value=G.state.directionalShadowMap,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotShadowMap.value=G.state.spotShadowMap,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMap.value=G.state.pointShadowMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ht,Y.uniformsList=null,Ht}function vf(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Dc.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function _f(T,V){const X=zt.get(T);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function P_(T,V,X,Y,G){V.isScene!==!0&&(V=be),Kt.resetTextureUnits();const ot=V.fog,gt=Y.isMeshStandardMaterial?V.environment:null,wt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Wo,yt=(Y.isMeshStandardMaterial?D:We).get(Y.envMap||gt),kt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,de=!!X.morphAttributes.color;let Ce=Ui;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ce=x.toneMapping);const De=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=De!==void 0?De.length:0,Ut=zt.get(Y),tn=m.state.lights;if(at===!0&&(At===!0||T!==S)){const un=T===S&&Y.id===E;Tt.setState(Y,T,un)}let ue=!1;Y.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==tn.state.version||Ut.outputColorSpace!==wt||G.isBatchedMesh&&Ut.batching===!1||!G.isBatchedMesh&&Ut.batching===!0||G.isBatchedMesh&&Ut.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ut.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ut.instancing===!1||!G.isInstancedMesh&&Ut.instancing===!0||G.isSkinnedMesh&&Ut.skinning===!1||!G.isSkinnedMesh&&Ut.skinning===!0||G.isInstancedMesh&&Ut.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ut.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ut.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ut.instancingMorph===!1&&G.morphTexture!==null||Ut.envMap!==yt||Y.fog===!0&&Ut.fog!==ot||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Tt.numPlanes||Ut.numIntersection!==Tt.numIntersection)||Ut.vertexAlphas!==kt||Ut.vertexTangents!==Ht||Ut.morphTargets!==It||Ut.morphNormals!==ee||Ut.morphColors!==de||Ut.toneMapping!==Ce||Ut.morphTargetsCount!==se)&&(ue=!0):(ue=!0,Ut.__version=Y.version);let kn=Ut.currentProgram;ue===!0&&(kn=Ia(Y,V,G));let io=!1,yn=!1,ur=!1;const Ae=kn.getUniforms(),Ln=Ut.uniforms;if(bt.useProgram(kn.program)&&(io=!0,yn=!0,ur=!0),Y.id!==E&&(E=Y.id,yn=!0),io||S!==T){bt.buffers.depth.getReversed()?(pt.copy(T.projectionMatrix),Hx(pt),Vx(pt),Ae.setValue(z,"projectionMatrix",pt)):Ae.setValue(z,"projectionMatrix",T.projectionMatrix),Ae.setValue(z,"viewMatrix",T.matrixWorldInverse);const vn=Ae.map.cameraPosition;vn!==void 0&&vn.setValue(z,ae.setFromMatrixPosition(T.matrixWorld)),xe.logarithmicDepthBuffer&&Ae.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ae.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,yn=!0,ur=!0)}if(G.isSkinnedMesh){Ae.setOptional(z,G,"bindMatrix"),Ae.setOptional(z,G,"bindMatrixInverse");const un=G.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ae.setValue(z,"boneTexture",un.boneTexture,Kt))}G.isBatchedMesh&&(Ae.setOptional(z,G,"batchingTexture"),Ae.setValue(z,"batchingTexture",G._matricesTexture,Kt),Ae.setOptional(z,G,"batchingIdTexture"),Ae.setValue(z,"batchingIdTexture",G._indirectTexture,Kt),Ae.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&Ae.setValue(z,"batchingColorTexture",G._colorsTexture,Kt));const In=X.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&xt.update(G,X,kn),(yn||Ut.receiveShadow!==G.receiveShadow)&&(Ut.receiveShadow=G.receiveShadow,Ae.setValue(z,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ln.envMap.value=yt,Ln.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Ln.envMapIntensity.value=V.environmentIntensity),yn&&(Ae.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&L_(Ln,ur),ot&&Y.fog===!0&&K.refreshFogUniforms(Ln,ot),K.refreshMaterialUniforms(Ln,Y,W,Z,m.state.transmissionRenderTarget[T.id]),Dc.upload(z,vf(Ut),Ln,Kt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Dc.upload(z,vf(Ut),Ln,Kt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ae.setValue(z,"center",G.center),Ae.setValue(z,"modelViewMatrix",G.modelViewMatrix),Ae.setValue(z,"normalMatrix",G.normalMatrix),Ae.setValue(z,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const un=Y.uniformsGroups;for(let vn=0,zl=un.length;vn<zl;vn++){const xs=un[vn];O.update(xs,kn),O.bind(xs,kn)}}return kn}function L_(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function I_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,V,X){const Y=zt.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),zt.get(T.texture).__webglTexture=V,zt.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const X=zt.get(T);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0};const D_=z.createFramebuffer();this.setRenderTarget=function(T,V=0,X=0){L=T,b=V,P=X;let Y=!0,G=null,ot=!1,gt=!1;if(T){const yt=zt.get(T);if(yt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(yt.__webglFramebuffer===void 0)Kt.setupRenderTarget(T);else if(yt.__hasExternalTextures)Kt.rebindTextures(T,zt.get(T.texture).__webglTexture,zt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(yt.__boundDepthTexture!==It){if(It!==null&&zt.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(T)}}const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(gt=!0);const Ht=zt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?G=Ht[V][X]:G=Ht[V],ot=!0):T.samples>0&&Kt.useMultisampledRTT(T)===!1?G=zt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[X]:G=Ht,I.copy(T.viewport),H.copy(T.scissor),N=T.scissorTest}else I.copy(vt).multiplyScalar(W).floor(),H.copy(rt).multiplyScalar(W).floor(),N=ne;if(X!==0&&(G=D_),bt.bindFramebuffer(z.FRAMEBUFFER,G)&&Y&&bt.drawBuffers(T,G),bt.viewport(I),bt.scissor(H),bt.setScissorTest(N),ot){const yt=zt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,yt.__webglTexture,X)}else if(gt){const yt=zt.get(T.texture),kt=V;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,yt.__webglTexture,X,kt)}else if(T!==null&&X!==0){const yt=zt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yt.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(T,V,X,Y,G,ot,gt,wt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt){bt.bindFramebuffer(z.FRAMEBUFFER,yt);try{const kt=T.textures[wt],Ht=kt.format,It=kt.type;if(!xe.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Y&&X>=0&&X<=T.height-G&&(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+wt),z.readPixels(V,X,Y,G,ht.convert(Ht),ht.convert(It),ot))}finally{const kt=L!==null?zt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,V,X,Y,G,ot,gt,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt)if(V>=0&&V<=T.width-Y&&X>=0&&X<=T.height-G){bt.bindFramebuffer(z.FRAMEBUFFER,yt);const kt=T.textures[wt],Ht=kt.format,It=kt.type;if(!xe.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ee),z.bufferData(z.PIXEL_PACK_BUFFER,ot.byteLength,z.STREAM_READ),T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+wt),z.readPixels(V,X,Y,G,ht.convert(Ht),ht.convert(It),0);const de=L!==null?zt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,de);const Ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await kx(z,Ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ot),z.deleteBuffer(ee),z.deleteSync(Ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,X=0){const Y=Math.pow(2,-X),G=Math.floor(T.image.width*Y),ot=Math.floor(T.image.height*Y),gt=V!==null?V.x:0,wt=V!==null?V.y:0;Kt.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,gt,wt,G,ot),bt.unbindTexture()};const N_=z.createFramebuffer(),z_=z.createFramebuffer();this.copyTextureToTexture=function(T,V,X=null,Y=null,G=0,ot=null){ot===null&&(G!==0?(Do("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=G,G=0):ot=0);let gt,wt,yt,kt,Ht,It,ee,de,Ce;const De=T.isCompressedTexture?T.mipmaps[ot]:T.image;if(X!==null)gt=X.max.x-X.min.x,wt=X.max.y-X.min.y,yt=X.isBox3?X.max.z-X.min.z:1,kt=X.min.x,Ht=X.min.y,It=X.isBox3?X.min.z:0;else{const In=Math.pow(2,-G);gt=Math.floor(De.width*In),wt=Math.floor(De.height*In),T.isDataArrayTexture?yt=De.depth:T.isData3DTexture?yt=Math.floor(De.depth*In):yt=1,kt=0,Ht=0,It=0}Y!==null?(ee=Y.x,de=Y.y,Ce=Y.z):(ee=0,de=0,Ce=0);const se=ht.convert(V.format),Ut=ht.convert(V.type);let tn;V.isData3DTexture?(Kt.setTexture3D(V,0),tn=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Kt.setTexture2DArray(V,0),tn=z.TEXTURE_2D_ARRAY):(Kt.setTexture2D(V,0),tn=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const ue=z.getParameter(z.UNPACK_ROW_LENGTH),kn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),io=z.getParameter(z.UNPACK_SKIP_PIXELS),yn=z.getParameter(z.UNPACK_SKIP_ROWS),ur=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,It);const Ae=T.isDataArrayTexture||T.isData3DTexture,Ln=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const In=zt.get(T),un=zt.get(V),vn=zt.get(In.__renderTarget),zl=zt.get(un.__renderTarget);bt.bindFramebuffer(z.READ_FRAMEBUFFER,vn.__webglFramebuffer),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,zl.__webglFramebuffer);for(let xs=0;xs<yt;xs++)Ae&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(T).__webglTexture,G,It+xs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(V).__webglTexture,ot,Ce+xs)),z.blitFramebuffer(kt,Ht,gt,wt,ee,de,gt,wt,z.DEPTH_BUFFER_BIT,z.NEAREST);bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||zt.has(T)){const In=zt.get(T),un=zt.get(V);bt.bindFramebuffer(z.READ_FRAMEBUFFER,N_),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,z_);for(let vn=0;vn<yt;vn++)Ae?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,In.__webglTexture,G,It+vn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,In.__webglTexture,G),Ln?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,ot,Ce+vn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,ot),G!==0?z.blitFramebuffer(kt,Ht,gt,wt,ee,de,gt,wt,z.COLOR_BUFFER_BIT,z.NEAREST):Ln?z.copyTexSubImage3D(tn,ot,ee,de,Ce+vn,kt,Ht,gt,wt):z.copyTexSubImage2D(tn,ot,ee,de,kt,Ht,gt,wt);bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ln?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(tn,ot,ee,de,Ce,gt,wt,yt,se,Ut,De.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(tn,ot,ee,de,Ce,gt,wt,yt,se,De.data):z.texSubImage3D(tn,ot,ee,de,Ce,gt,wt,yt,se,Ut,De):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ot,ee,de,gt,wt,se,Ut,De.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ot,ee,de,De.width,De.height,se,De.data):z.texSubImage2D(z.TEXTURE_2D,ot,ee,de,gt,wt,se,Ut,De);z.pixelStorei(z.UNPACK_ROW_LENGTH,ue),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,io),z.pixelStorei(z.UNPACK_SKIP_ROWS,yn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ur),ot===0&&V.generateMipmaps&&z.generateMipmap(tn),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,V,X=null,Y=null,G=0){return Do('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,X,Y,G)},this.initRenderTarget=function(T){zt.get(T).__webglFramebuffer===void 0&&Kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Kt.setTextureCube(T,0):T.isData3DTexture?Kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Kt.setTexture2DArray(T,0):Kt.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){b=0,P=0,L=null,bt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class $n{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const i=this.elements,s=t.x,o=t.y,r=t.z;return e.x=i[0]*s+i[1]*o+i[2]*r,e.y=i[3]*s+i[4]*o+i[5]*r,e.z=i[6]*s+i[7]*o+i[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new $n);const i=this.elements,s=t.elements,o=e.elements,r=i[0],a=i[1],c=i[2],l=i[3],u=i[4],d=i[5],h=i[6],f=i[7],p=i[8],v=s[0],g=s[1],m=s[2],_=s[3],y=s[4],x=s[5],C=s[6],b=s[7],P=s[8];return o[0]=r*v+a*_+c*C,o[1]=r*g+a*y+c*b,o[2]=r*m+a*x+c*P,o[3]=l*v+u*_+d*C,o[4]=l*g+u*y+d*b,o[5]=l*m+u*x+d*P,o[6]=h*v+f*_+p*C,o[7]=h*g+f*y+p*b,o[8]=h*m+f*x+p*P,e}scale(t,e){e===void 0&&(e=new $n);const i=this.elements,s=e.elements;for(let o=0;o!==3;o++)s[3*o+0]=t.x*i[3*o+0],s[3*o+1]=t.y*i[3*o+1],s[3*o+2]=t.z*i[3*o+2];return e}solve(t,e){e===void 0&&(e=new M);const i=3,s=4,o=[];let r,a;for(r=0;r<i*s;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+s*a]=this.elements[r+3*a];o[3]=t.x,o[7]=t.y,o[11]=t.z;let c=3;const l=c;let u;const d=4;let h;do{if(r=l-c,o[r+s*r]===0){for(a=r+1;a<l;a++)if(o[r+s*a]!==0){u=d;do h=d-u,o[h+s*r]+=o[h+s*a];while(--u);break}}if(o[r+s*r]!==0)for(a=r+1;a<l;a++){const f=o[r+s*a]/o[r+s*r];u=d;do h=d-u,o[h+s*a]=h<=r?0:o[h+s*a]-o[h+s*r]*f;while(--u)}}while(--c);if(e.z=o[2*s+3]/o[2*s+2],e.y=(o[1*s+3]-o[1*s+2]*e.z)/o[1*s+1],e.x=(o[0*s+3]-o[0*s+2]*e.z-o[0*s+1]*e.y)/o[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,i){if(i===void 0)return this.elements[e+3*t];this.elements[e+3*t]=i}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let i=0;i<9;i++)t+=this.elements[i]+",";return t}reverse(t){t===void 0&&(t=new $n);const e=3,i=6,s=Ww;let o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const c=a;let l;const u=i;let d;do{if(o=c-a,s[o+i*o]===0){for(r=o+1;r<c;r++)if(s[o+i*r]!==0){l=u;do d=u-l,s[d+i*o]+=s[d+i*r];while(--l);break}}if(s[o+i*o]!==0)for(r=o+1;r<c;r++){const h=s[o+i*r]/s[o+i*o];l=u;do d=u-l,s[d+i*r]=d<=o?0:s[d+i*r]-s[d+i*o]*h;while(--l)}}while(--a);o=2;do{r=o-1;do{const h=s[o+i*r]/s[o+i*o];l=i;do d=i-l,s[d+i*r]=s[d+i*r]-s[d+i*o]*h;while(--l)}while(r--)}while(--o);o=2;do{const h=1/s[o+i*o];l=i;do d=i-l,s[d+i*o]=s[d+i*o]*h;while(--l)}while(o--);o=2;do{r=2;do{if(d=s[e+r+i*o],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,d)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){const e=t.x,i=t.y,s=t.z,o=t.w,r=e+e,a=i+i,c=s+s,l=e*r,u=e*a,d=e*c,h=i*a,f=i*c,p=s*c,v=o*r,g=o*a,m=o*c,_=this.elements;return _[0]=1-(h+p),_[1]=u-m,_[2]=d+g,_[3]=u+m,_[4]=1-(l+p),_[5]=f-v,_[6]=d-g,_[7]=f+v,_[8]=1-(l+h),this}transpose(t){t===void 0&&(t=new $n);const e=this.elements,i=t.elements;let s;return i[0]=e[0],i[4]=e[4],i[8]=e[8],s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s,t}}const Ww=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,i){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x=t,this.y=e,this.z=i}cross(t,e){e===void 0&&(e=new M);const i=t.x,s=t.y,o=t.z,r=this.x,a=this.y,c=this.z;return e.x=a*o-c*s,e.y=c*i-r*o,e.z=r*s-a*i,e}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new $n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,i=this.z,s=Math.sqrt(t*t+e*e+i*i);if(s>0){const o=1/s;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new M);const e=this.x,i=this.y,s=this.z;let o=Math.sqrt(e*e+i*i+s*s);return o>0?(o=1/o,t.x=e*o,t.y=i*o,t.z=s*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-i)*(r-i)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-i)*(r-i)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new M);const i=this.x,s=this.y,o=this.z;return e.x=t*i,e.y=t*s,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,i){return i===void 0&&(i=new M),i.x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const i=this.length();if(i>0){const s=qw,o=1/i;s.set(this.x*o,this.y*o,this.z*o);const r=Xw;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,i){const s=this.x,o=this.y,r=this.z;i.x=s+(t.x-s)*e,i.y=o+(t.y-o)*e,i.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Cp),Cp.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const qw=new M,Xw=new M,Cp=new M;class Te{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,i,s){const o=this.lowerBound,r=this.upperBound,a=i;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Pp),l=Pp),l.x>r.x&&(r.x=l.x),l.x<o.x&&(o.x=l.x),l.y>r.y&&(r.y=l.y),l.y<o.y&&(o.y=l.y),l.z>r.z&&(r.z=l.z),l.z<o.z&&(o.z=l.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),s&&(o.x-=s,o.y-=s,o.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Te().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,o=t.upperBound,r=s.x<=i.x&&i.x<=o.x||e.x<=o.x&&o.x<=i.x,a=s.y<=i.y&&i.y<=o.y||e.y<=o.y&&o.y<=i.y,c=s.z<=i.z&&i.z<=o.z||e.z<=o.z&&o.z<=i.z;return r&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,o=t.upperBound;return e.x<=s.x&&i.x>=o.x&&e.y<=s.y&&i.y>=o.y&&e.z<=s.z&&i.z>=o.z}getCorners(t,e,i,s,o,r,a,c){const l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),i.set(u.x,u.y,l.z),s.set(l.x,u.y,u.z),o.set(u.x,l.y,u.z),r.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){const i=Lp,s=i[0],o=i[1],r=i[2],a=i[3],c=i[4],l=i[5],u=i[6],d=i[7];this.getCorners(s,o,r,a,c,l,u,d);for(let h=0;h!==8;h++){const f=i[h];t.pointToLocal(f,f)}return e.setFromPoints(i)}toWorldFrame(t,e){const i=Lp,s=i[0],o=i[1],r=i[2],a=i[3],c=i[4],l=i[5],u=i[6],d=i[7];this.getCorners(s,o,r,a,c,l,u,d);for(let h=0;h!==8;h++){const f=i[h];t.pointToWorld(f,f)}return e.setFromPoints(i)}overlapsRay(t){const{direction:e,from:i}=t,s=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-i.x)*s,c=(this.upperBound.x-i.x)*s,l=(this.lowerBound.y-i.y)*o,u=(this.upperBound.y-i.y)*o,d=(this.lowerBound.z-i.z)*r,h=(this.upperBound.z-i.z)*r,f=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(d,h));return!(p<0||f>p)}}const Pp=new M,Lp=[new M,new M,new M,new M,new M,new M,new M,new M];class Ip{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}return this.matrix[(i*(i+1)>>1)+s-1]}set(t,e,i){let{index:s}=t,{index:o}=e;if(o>s){const r=o;o=s,s=r}this.matrix[(s*(s+1)>>1)+o-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class K0{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const i=this._listeners;if(i[t]===void 0)return this;const s=i[t].indexOf(e);return s!==-1&&i[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const i=this._listeners[t.type];if(i!==void 0){t.target=this;for(let s=0,o=i.length;s<o;s++)i[s].call(this,t)}return this}}class ke{constructor(t,e,i,s){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=i,this.w=s}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const i=Math.sin(e*.5);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const i=Yw,s=Kw;t.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=t.cross(e);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ke);const i=this.x,s=this.y,o=this.z,r=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=i*u+r*a+s*l-o*c,e.y=s*u+r*c+o*a-i*l,e.z=o*u+r*l+i*c-s*a,e.w=r*u-i*a-s*c-o*l,e}inverse(t){t===void 0&&(t=new ke);const e=this.x,i=this.y,s=this.z,o=this.w;this.conjugate(t);const r=1/(e*e+i*i+s*s+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new ke),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const i=t.x,s=t.y,o=t.z,r=this.x,a=this.y,c=this.z,l=this.w,u=l*i+a*o-c*s,d=l*s+c*i-r*o,h=l*o+r*s-a*i,f=-r*i-a*s-c*o;return e.x=u*l+f*-r+d*-c-h*-a,e.y=d*l+f*-a+h*-r-u*-c,e.z=h*l+f*-c+u*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let i,s,o;const r=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const u=r*a+c*l;if(u>.499&&(i=2*Math.atan2(r,l),s=Math.PI/2,o=0),u<-.499&&(i=-2*Math.atan2(r,l),s=-Math.PI/2,o=0),i===void 0){const d=r*r,h=a*a,f=c*c;i=Math.atan2(2*a*l-2*r*c,1-2*h-2*f),s=Math.asin(2*u),o=Math.atan2(2*r*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=i,t.z=s,t.x=o}setFromEuler(t,e,i,s){s===void 0&&(s="XYZ");const o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(i/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=c*r*a+o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a-c*l*u):s==="YXZ"?(this.x=c*r*a+o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a+c*l*u):s==="ZXY"?(this.x=c*r*a-o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a-c*l*u):s==="ZYX"?(this.x=c*r*a-o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a+c*l*u):s==="YZX"?(this.x=c*r*a+o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a-c*l*u):s==="XZY"&&(this.x=c*r*a-o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a+c*l*u),this}clone(){return new ke(this.x,this.y,this.z,this.w)}slerp(t,e,i){i===void 0&&(i=new ke);const s=this.x,o=this.y,r=this.z,a=this.w;let c=t.x,l=t.y,u=t.z,d=t.w,h,f,p,v,g;return f=s*c+o*l+r*u+a*d,f<0&&(f=-f,c=-c,l=-l,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),v=Math.sin((1-e)*h)/p,g=Math.sin(e*h)/p):(v=1-e,g=e),i.x=v*s+g*c,i.y=v*o+g*l,i.z=v*r+g*u,i.w=v*a+g*d,i}integrate(t,e,i,s){s===void 0&&(s=new ke);const o=t.x*i.x,r=t.y*i.y,a=t.z*i.z,c=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return s.x+=h*(o*d+r*u-a*l),s.y+=h*(r*d+a*c-o*u),s.z+=h*(a*d+o*l-r*c),s.w+=h*(-o*c-r*l-a*u),s}}const Yw=new M,Kw=new M,Zw={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class _t{constructor(t){t===void 0&&(t={}),this.id=_t.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}_t.idCounter=0;_t.types=Zw;class oe{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new ke,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return oe.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return oe.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,i,s){return s===void 0&&(s=new M),i.vsub(t,s),e.conjugate(Dp),Dp.vmult(s,s),s}static pointToWorldFrame(t,e,i,s){return s===void 0&&(s=new M),e.vmult(i,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,i){return i===void 0&&(i=new M),t.vmult(e,i),i}static vectorToLocalFrame(t,e,i,s){return s===void 0&&(s=new M),e.w*=-1,e.vmult(i,s),e.w*=-1,s}}const Dp=new ke;class zo extends _t{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:i=[],normals:s=[],axes:o,boundingSphereRadius:r}=t;super({type:_t.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,i=this.uniqueEdges;i.length=0;const s=new M;for(let o=0;o!==t.length;o++){const r=t[o],a=r.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[r[c]].vsub(e[r[l]],s),s.normalize();let u=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(s)||i[d].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const i=this.vertices[this.faces[t][0]];if(e.dot(i)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const i=this.faces[t],s=this.vertices[i[0]],o=this.vertices[i[1]],r=this.vertices[i[2]];zo.computeNormal(s,o,r,e)}static computeNormal(t,e,i,s){const o=new M,r=new M;e.vsub(t,r),i.vsub(e,o),o.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,i,s,o,r,a,c,l){const u=new M;let d=-1,h=-Number.MAX_VALUE;for(let p=0;p<i.faces.length;p++){u.copy(i.faceNormals[p]),o.vmult(u,u);const v=u.dot(r);v>h&&(h=v,d=p)}const f=[];for(let p=0;p<i.faces[d].length;p++){const v=i.vertices[i.faces[d][p]],g=new M;g.copy(v),o.vmult(g,g),s.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,c,l)}findSeparatingAxis(t,e,i,s,o,r,a,c){const l=new M,u=new M,d=new M,h=new M,f=new M,p=new M;let v=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let m=0;m!==g.uniqueAxes.length;m++){i.vmult(g.uniqueAxes[m],l);const _=g.testSepAxis(l,t,e,i,s,o);if(_===!1)return!1;_<v&&(v=_,r.copy(l))}else{const m=a?a.length:g.faces.length;for(let _=0;_<m;_++){const y=a?a[_]:_;l.copy(g.faceNormals[y]),i.vmult(l,l);const x=g.testSepAxis(l,t,e,i,s,o);if(x===!1)return!1;x<v&&(v=x,r.copy(l))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){o.vmult(t.uniqueAxes[m],u);const _=g.testSepAxis(u,t,e,i,s,o);if(_===!1)return!1;_<v&&(v=_,r.copy(u))}else{const m=c?c.length:t.faces.length;for(let _=0;_<m;_++){const y=c?c[_]:_;u.copy(t.faceNormals[y]),o.vmult(u,u);const x=g.testSepAxis(u,t,e,i,s,o);if(x===!1)return!1;x<v&&(v=x,r.copy(u))}}for(let m=0;m!==g.uniqueEdges.length;m++){i.vmult(g.uniqueEdges[m],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(o.vmult(t.uniqueEdges[_],f),h.cross(f,p),!p.almostZero()){p.normalize();const y=g.testSepAxis(p,t,e,i,s,o);if(y===!1)return!1;y<v&&(v=y,r.copy(p))}}return s.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,i,s,o,r){const a=this;zo.project(a,t,i,s,vu),zo.project(e,t,o,r,_u);const c=vu[0],l=vu[1],u=_u[0],d=_u[1];if(c<d||u<l)return!1;const h=c-d,f=u-l;return h<f?h:f}calculateLocalInertia(t,e){const i=new M,s=new M;this.computeLocalAABB(s,i);const o=i.x-s.x,r=i.y-s.y,a=i.z-s.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){const e=this.faces[t],i=this.faceNormals[t],s=this.vertices[e[0]];return-i.dot(s)}clipFaceAgainstHull(t,e,i,s,o,r,a){const c=new M,l=new M,u=new M,d=new M,h=new M,f=new M,p=new M,v=new M,g=this,m=[],_=s,y=m;let x=-1,C=Number.MAX_VALUE;for(let S=0;S<g.faces.length;S++){c.copy(g.faceNormals[S]),i.vmult(c,c);const I=c.dot(t);I<C&&(C=I,x=S)}if(x<0)return;const b=g.faces[x];b.connectedFaces=[];for(let S=0;S<g.faces.length;S++)for(let I=0;I<g.faces[S].length;I++)b.indexOf(g.faces[S][I])!==-1&&S!==x&&b.connectedFaces.indexOf(S)===-1&&b.connectedFaces.push(S);const P=b.length;for(let S=0;S<P;S++){const I=g.vertices[b[S]],H=g.vertices[b[(S+1)%P]];I.vsub(H,l),u.copy(l),i.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[x]),i.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(I),i.vmult(f,f),e.vadd(f,f);const N=b.connectedFaces[S];p.copy(this.faceNormals[N]);const B=this.getPlaneConstantOfFace(N);v.copy(p),i.vmult(v,v);const k=B-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,k);_.length;)_.shift();for(;y.length;)_.push(y.shift())}p.copy(this.faceNormals[x]);const L=this.getPlaneConstantOfFace(x);v.copy(p),i.vmult(v,v);const E=L-v.dot(e);for(let S=0;S<_.length;S++){let I=v.dot(_[S])+E;if(I<=o&&(console.log(`clamped: depth=${I} to minDist=${o}`),I=o),I<=r){const H=_[S];if(I<=1e-6){const N={point:H,normal:v,depth:I};a.push(N)}}}}clipFaceAgainstPlane(t,e,i,s){let o,r;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];o=i.dot(c)+s;for(let u=0;u<a;u++){if(l=t[u],r=i.dot(l)+s,o<0)if(r<0){const d=new M;d.copy(l),e.push(d)}else{const d=new M;c.lerp(l,o/(o-r),d),e.push(d)}else if(r<0){const d=new M;c.lerp(l,o/(o-r),d),e.push(d),e.push(l)}c=l,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const i=this.vertices,s=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(i[o],s[o]),t.vadd(s[o],s[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const i=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const o=i[s];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const i=this.faceNormals,s=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(i[o],s[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let i=0;i!==e.length;i++){const s=e[i].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const o=this.vertices;let r,a,c,l,u,d,h=new M;for(let f=0;f<o.length;f++){h.copy(o[f]),e.vmult(h,h),t.vadd(h,h);const p=h;(r===void 0||p.x<r)&&(r=p.x),(l===void 0||p.x>l)&&(l=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(c===void 0||p.z<c)&&(c=p.z),(d===void 0||p.z>d)&&(d=p.z)}i.set(r,a,c),s.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let i=0;i<e.length;i++)t.vadd(e[i],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const i=this.vertices.length,s=this.vertices;if(e){for(let o=0;o<i;o++){const r=s[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){const r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<i;o++){const r=s[o];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,i=this.faces,s=this.faceNormals,o=new M;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=s[r];const c=e[i[r][0]],l=new M;t.vsub(c,l);const u=a.dot(l),d=new M;o.vsub(c,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,i,s,o){const r=t.vertices.length,a=$w;let c=0,l=0;const u=jw,d=t.vertices;u.setZero(),oe.vectorToLocalFrame(i,s,e,a),oe.pointToLocalFrame(i,s,u,u);const h=u.dot(a);l=c=d[0].dot(a);for(let f=1;f<r;f++){const p=d[f].dot(a);p>c&&(c=p),p<l&&(l=p)}if(l-=h,c-=h,l>c){const f=l;l=c,c=f}o[0]=c,o[1]=l}}const vu=[],_u=[];new M;const $w=new M,jw=new M;class Xi extends _t{constructor(t){super({type:_t.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,s=M,o=[new s(-t,-e,-i),new s(t,-e,-i),new s(t,e,-i),new s(-t,e,-i),new s(-t,-e,i),new s(t,-e,i),new s(t,e,i),new s(-t,e,i)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new zo({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Xi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,i){const s=t;i.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const i=t,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),e!==void 0)for(let o=0;o!==i.length;o++)e.vmult(i[o],i[o]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,i){const s=this.halfExtents,o=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<o.length;r++)es.set(o[r][0],o[r][1],o[r][2]),e.vmult(es,es),t.vadd(es,es),i(es.x,es.y,es.z)}calculateWorldAABB(t,e,i,s){const o=this.halfExtents;Qn[0].set(o.x,o.y,o.z),Qn[1].set(-o.x,o.y,o.z),Qn[2].set(-o.x,-o.y,o.z),Qn[3].set(-o.x,-o.y,-o.z),Qn[4].set(o.x,-o.y,-o.z),Qn[5].set(o.x,o.y,-o.z),Qn[6].set(-o.x,o.y,-o.z),Qn[7].set(o.x,-o.y,o.z);const r=Qn[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),i.copy(r);for(let a=1;a<8;a++){const c=Qn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,u=c.y,d=c.z;l>s.x&&(s.x=l),u>s.y&&(s.y=u),d>s.z&&(s.z=d),l<i.x&&(i.x=l),u<i.y&&(i.y=u),d<i.z&&(i.z=d)}}}const es=new M,Qn=[new M,new M,new M,new M,new M,new M,new M,new M],cd={DYNAMIC:1,STATIC:2,KINEMATIC:4},ld={AWAKE:0,SLEEPY:1,SLEEPING:2};class lt extends K0{constructor(t){t===void 0&&(t={}),super(),this.id=lt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?lt.STATIC:lt.DYNAMIC,typeof t.type==typeof lt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=lt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new ke,this.initQuaternion=new ke,this.previousQuaternion=new ke,this.interpolatedQuaternion=new ke,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new $n,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new $n,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Te,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=lt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===lt.SLEEPING&&this.dispatchEvent(lt.wakeupEvent)}sleep(){this.sleepState=lt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===lt.AWAKE&&i<s?(this.sleepState=lt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(lt.sleepyEvent)):e===lt.SLEEPY&&i>s?this.wakeUp():e===lt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(lt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===lt.SLEEPING||this.type===lt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,i){const s=new M,o=new ke;return e&&s.copy(e),i&&o.copy(i),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,i=t.length;let s=0;for(let o=0;o!==i;o++){const r=t[o];r.updateBoundingSphereRadius();const a=e[o].length(),c=r.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,s=t.length,o=Jw,r=Qw,a=this.quaternion,c=this.aabb,l=tA;for(let u=0;u!==s;u++){const d=t[u];a.vmult(e[u],o),o.vadd(this.position,o),a.mult(i[u],r),d.calculateWorldAABB(o,r,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const i=eA,s=nA;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(e,i),i.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;this.sleepState===lt.SLEEPING&&this.wakeUp();const i=iA;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;const i=sA,s=oA;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyForce(i,s)}applyTorque(t){this.type===lt.DYNAMIC&&(this.sleepState===lt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;this.sleepState===lt.SLEEPING&&this.wakeUp();const i=e,s=rA;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const o=aA;i.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;const i=cA,s=lA;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyImpulse(i,s)}updateMassProperties(){const t=uA;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,i=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Xi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!i?1/e.x:0,e.y>0&&!i?1/e.y:0,e.z>0&&!i?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const i=new M;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e}integrate(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===lt.DYNAMIC||this.type===lt.KINEMATIC)||this.sleepState===lt.SLEEPING)return;const s=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;s.x+=a.x*f*h.x,s.y+=a.y*f*h.y,s.z+=a.z*f*h.z;const p=d.elements,v=this.angularFactor,g=c.x*v.x,m=c.y*v.y,_=c.z*v.z;o.x+=t*(p[0]*g+p[1]*m+p[2]*_),o.y+=t*(p[3]*g+p[4]*m+p[5]*_),o.z+=t*(p[6]*g+p[7]*m+p[8]*_),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(i?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}lt.idCounter=0;lt.COLLIDE_EVENT_NAME="collide";lt.DYNAMIC=cd.DYNAMIC;lt.STATIC=cd.STATIC;lt.KINEMATIC=cd.KINEMATIC;lt.AWAKE=ld.AWAKE;lt.SLEEPY=ld.SLEEPY;lt.SLEEPING=ld.SLEEPING;lt.wakeupEvent={type:"wakeup"};lt.sleepyEvent={type:"sleepy"};lt.sleepEvent={type:"sleep"};const Jw=new M,Qw=new ke,tA=new Te,eA=new $n,nA=new $n;new $n;const iA=new M,sA=new M,oA=new M,rA=new M,aA=new M,cA=new M,lA=new M,uA=new M;class Z0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&lt.STATIC)!==0||t.sleepState===lt.SLEEPING)&&((e.type&lt.STATIC)!==0||e.sleepState===lt.SLEEPING))}intersectionTest(t,e,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,s):this.doBoundingSphereBroadphase(t,e,i,s)}doBoundingSphereBroadphase(t,e,i,s){const o=hA;e.position.vsub(t.position,o);const r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(i.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,i,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),s.push(e))}makePairsUnique(t,e){const i=dA,s=fA,o=pA,r=t.length;for(let a=0;a!==r;a++)s[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const c=s[a].id,l=o[a].id,u=c<l?`${c},${l}`:`${l},${c}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){const c=i.keys.pop(),l=i[c];t.push(s[l]),e.push(o[l]),delete i[c]}}setWorld(t){}static boundingSphereCheck(t,e){const i=new M;t.position.vsub(e.position,i);const s=t.shapes[0],o=e.shapes[0];return Math.pow(s.boundingSphereRadius+o.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const hA=new M;new M;new ke;new M;const dA={keys:[]},fA=[],pA=[];new M;new M;new M;class mA extends Z0{constructor(){super()}collisionPairs(t,e,i){const s=t.bodies,o=s.length;let r,a;for(let c=0;c!==o;c++)for(let l=0;l!==c;l++)r=s[c],a=s[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let s=0;s<t.bodies.length;s++){const o=t.bodies[s];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&i.push(o)}return i}}class Kc{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,s,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=o,this.body=r,this.distance=a}}let $0,j0,J0,Q0,tg,eg,ng;const ud={CLOSEST:1,ANY:2,ALL:4};$0=_t.types.SPHERE;j0=_t.types.PLANE;J0=_t.types.BOX;Q0=_t.types.CYLINDER;tg=_t.types.CONVEXPOLYHEDRON;eg=_t.types.HEIGHTFIELD;ng=_t.types.TRIMESH;class Be{get[$0](){return this._intersectSphere}get[j0](){return this._intersectPlane}get[J0](){return this._intersectBox}get[Q0](){return this._intersectConvex}get[tg](){return this._intersectConvex}get[eg](){return this._intersectHeightfield}get[ng](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Be.ANY,this.result=new Kc,this.hasHit=!1,this.callback=i=>{}}intersectWorld(t,e){return this.mode=e.mode||Be.ANY,this.result=e.result||new Kc,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Np),xu.length=0,t.broadphase.aabbQuery(t,Np,xu),this.intersectBodies(xu),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=gA,o=vA;for(let r=0,a=t.shapes.length;r<a;r++){const c=t.shapes[r];if(!(i&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(c,o,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let i=0,s=t.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(t[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,i,s){const o=this.from;if(LA(o,this.direction,i)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,i,s,t)}_intersectBox(t,e,i,s,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,i,s,o)}_intersectPlane(t,e,i,s,o){const r=this.from,a=this.to,c=this.direction,l=new M(0,0,1);e.vmult(l,l);const u=new M;r.vsub(i,u);const d=u.dot(l);a.vsub(i,u);const h=u.dot(l);if(d*h>0||r.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const p=new M,v=new M,g=new M;r.vsub(i,p);const m=-l.dot(p)/f;c.scale(m,v),r.vadd(v,g),this.reportIntersection(l,g,o,s,-1)}getAABB(t){const{lowerBound:e,upperBound:i}=t,s=this.to,o=this.from;e.x=Math.min(s.x,o.x),e.y=Math.min(s.y,o.y),e.z=Math.min(s.z,o.z),i.x=Math.max(s.x,o.x),i.y=Math.max(s.y,o.y),i.z=Math.max(s.z,o.z)}_intersectHeightfield(t,e,i,s,o){t.data,t.elementSize;const r=_A;r.from.copy(this.from),r.to.copy(this.to),oe.pointToLocalFrame(i,e,r.from,r.from),oe.pointToLocalFrame(i,e,r.to,r.to),r.updateDirection();const a=xA;let c,l,u,d;c=l=0,u=d=t.data.length-1;const h=new Te;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<u;f++)for(let p=l;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(f,p,!1),oe.pointToWorldFrame(i,e,t.pillarOffset,dc),this._intersectConvex(t.pillarConvex,e,dc,s,o,zp),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),oe.pointToWorldFrame(i,e,t.pillarOffset,dc),this._intersectConvex(t.pillarConvex,e,dc,s,o,zp)}}}_intersectSphere(t,e,i,s,o){const r=this.from,a=this.to,c=t.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,u=2*((a.x-r.x)*(r.x-i.x)+(a.y-r.y)*(r.y-i.y)+(a.z-r.z)*(r.z-i.z)),d=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2-c**2,h=u**2-4*l*d,f=yA,p=SA;if(!(h<0))if(h===0)r.lerp(a,h,f),f.vsub(i,p),p.normalize(),this.reportIntersection(p,f,o,s,-1);else{const v=(-u-Math.sqrt(h))/(2*l),g=(-u+Math.sqrt(h))/(2*l);if(v>=0&&v<=1&&(r.lerp(a,v,f),f.vsub(i,p),p.normalize(),this.reportIntersection(p,f,o,s,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(i,p),p.normalize(),this.reportIntersection(p,f,o,s,-1))}}_intersectConvex(t,e,i,s,o,r){const a=MA,c=Up,l=r&&r.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,v=this.to,g=p.distanceTo(v),m=l?l.length:u.length,_=this.result;for(let y=0;!_.shouldStop&&y<m;y++){const x=l?l[y]:y,C=u[x],b=h[x],P=e,L=i;c.copy(d[C[0]]),P.vmult(c,c),c.vadd(L,c),c.vsub(p,c),P.vmult(b,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const S=a.dot(c)/E;if(!(S<0)){f.scale(S,_n),_n.vadd(p,_n),Wn.copy(d[C[0]]),P.vmult(Wn,Wn),L.vadd(Wn,Wn);for(let I=1;!_.shouldStop&&I<C.length-1;I++){ti.copy(d[C[I]]),ei.copy(d[C[I+1]]),P.vmult(ti,ti),P.vmult(ei,ei),L.vadd(ti,ti),L.vadd(ei,ei);const H=_n.distanceTo(p);!(Be.pointInTriangle(_n,Wn,ti,ei)||Be.pointInTriangle(_n,ti,Wn,ei))||H>g||this.reportIntersection(a,_n,o,s,x)}}}}_intersectTrimesh(t,e,i,s,o,r){const a=EA,c=CA,l=PA,u=Up,d=wA,h=AA,f=TA,p=RA,v=bA,g=t.indices;t.vertices;const m=this.from,_=this.to,y=this.direction;l.position.copy(i),l.quaternion.copy(e),oe.vectorToLocalFrame(i,e,y,d),oe.pointToLocalFrame(i,e,m,h),oe.pointToLocalFrame(i,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const x=h.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let C=0,b=c.length;!this.result.shouldStop&&C!==b;C++){const P=c[C];t.getNormal(P,a),t.getVertex(g[P*3],Wn),Wn.vsub(h,u);const L=d.dot(a),E=a.dot(u)/L;if(E<0)continue;d.scale(E,_n),_n.vadd(h,_n),t.getVertex(g[P*3+1],ti),t.getVertex(g[P*3+2],ei);const S=_n.distanceSquared(h);!(Be.pointInTriangle(_n,ti,Wn,ei)||Be.pointInTriangle(_n,Wn,ti,ei))||S>x||(oe.vectorToWorldFrame(e,a,v),oe.pointToWorldFrame(i,e,_n,p),this.reportIntersection(v,p,o,s,P))}c.length=0}reportIntersection(t,e,i,s,o){const r=this.from,a=this.to,c=r.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case Be.ALL:this.hasHit=!0,l.set(r,a,t,e,i,s,c),l.hasHit=!0,this.callback(l);break;case Be.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,i,s,c));break;case Be.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,i,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,i,s){s.vsub(e,Ns),i.vsub(e,Sr),t.vsub(e,yu);const o=Ns.dot(Ns),r=Ns.dot(Sr),a=Ns.dot(yu),c=Sr.dot(Sr),l=Sr.dot(yu);let u,d;return(u=c*a-r*l)>=0&&(d=o*l-r*a)>=0&&u+d<o*c-r*r}}Be.CLOSEST=ud.CLOSEST;Be.ANY=ud.ANY;Be.ALL=ud.ALL;const Np=new Te,xu=[],Sr=new M,yu=new M,gA=new M,vA=new ke,_n=new M,Wn=new M,ti=new M,ei=new M;new M;new Kc;const zp={faceList:[0]},dc=new M,_A=new Be,xA=[],yA=new M,SA=new M,MA=new M;new M;new M;const Up=new M,EA=new M,wA=new M,AA=new M,TA=new M,bA=new M,RA=new M;new Te;const CA=[],PA=new oe,Ns=new M,fc=new M;function LA(n,t,e){e.vsub(n,Ns);const i=Ns.dot(t);return t.scale(i,fc),fc.vadd(n,fc),e.distanceTo(fc)}class Co extends Z0{static checkBounds(t,e,i){let s,o;i===0?(s=t.position.x,o=e.position.x):i===1?(s=t.position.y,o=e.position.y):i===2&&(s=t.position.z,o=e.position.z);const r=t.boundingRadius,a=e.boundingRadius,c=s+r;return o-a<c}static insertionSortX(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.x<=s.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortY(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.y<=s.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortZ(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.z<=s.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=i=>{e.push(i.body)},this._removeBodyHandler=i=>{const s=e.indexOf(i.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,i){const s=this.axisList,o=s.length,r=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==o;a++){const l=s[a];for(c=a+1;c<o;c++){const u=s[c];if(this.needBroadphaseCollision(l,u)){if(!Co.checkBounds(l,u,r))break;this.intersectionTest(l,u,e,i)}}}}sortList(){const t=this.axisList,e=this.axisIndex,i=t.length;for(let s=0;s!==i;s++){const o=t[s];o.aabbNeedsUpdate&&o.updateAABB()}e===0?Co.insertionSortX(t):e===1?Co.insertionSortY(t):e===2&&Co.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,i=0,s=0,o=0,r=0;const a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){const p=a[f],v=p.position.x;t+=v,e+=v*v;const g=p.position.y;i+=g,s+=g*g;const m=p.position.z;o+=m,r+=m*m}const u=e-t*t*l,d=s-i*i*l,h=r-o*o*l;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,i){i===void 0&&(i=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let o="x";s===1&&(o="y"),s===2&&(o="z");const r=this.axisList;e.lowerBound[o],e.upperBound[o];for(let a=0;a<r.length;a++){const c=r[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&i.push(c)}return i}}class IA{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}}class Fp{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class da{constructor(t,e,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=da.idCounter++,this.minForce=i,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Fp,this.jacobianElementB=new Fp,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,i){const s=e,o=t,r=i;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*o*(1+4*s))}computeB(t,e,i){const s=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-s*e-r*i}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.position,r=s.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.velocity,r=s.velocity,a=i.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.vlambda,r=s.vlambda,a=i.wlambda,c=s.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.force,r=i.torque,a=s.force,c=s.torque,l=i.invMassSolve,u=s.invMassSolve;return o.scale(l,Op),a.scale(u,Bp),i.invInertiaWorldSolve.vmult(r,kp),s.invInertiaWorldSolve.vmult(c,Hp),t.multiplyVectors(Op,kp)+e.multiplyVectors(Bp,Hp)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.invMassSolve,r=s.invMassSolve,a=i.invInertiaWorldSolve,c=s.invInertiaWorldSolve;let l=o+r;return a.vmult(t.rotational,pc),l+=pc.dot(t.rotational),c.vmult(e.rotational,pc),l+=pc.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,o=this.bj,r=DA;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,i.spatial,o.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),o.invInertiaWorldSolve.vmult(i.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}da.idCounter=0;const Op=new M,Bp=new M,kp=new M,Hp=new M,pc=new M,DA=new M;class NA extends da{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,i=this.b,s=this.bi,o=this.bj,r=this.ri,a=this.rj,c=zA,l=UA,u=s.velocity,d=s.angularVelocity;s.force,s.torque;const h=o.velocity,f=o.angularVelocity;o.force,o.torque;const p=FA,v=this.jacobianElementA,g=this.jacobianElementB,m=this.ni;r.cross(m,c),a.cross(m,l),m.negate(v.spatial),c.negate(v.rotational),g.spatial.copy(m),g.rotational.copy(l),p.copy(o.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(r,p);const _=m.dot(p),y=this.restitution+1,x=y*h.dot(m)-y*u.dot(m)+f.dot(l)-d.dot(c),C=this.computeGiMf();return-_*e-x*i-t*C}getImpactVelocityAlongNormal(){const t=OA,e=BA,i=kA,s=HA,o=VA;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,o),this.ni.dot(o)}}const zA=new M,UA=new M,FA=new M,OA=new M,BA=new M,kA=new M,HA=new M,VA=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Vp extends da{constructor(t,e,i){super(t,e,-i,i),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,o=GA,r=WA,a=this.t;i.cross(a,o),s.cross(a,r);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),o.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const GA=new M,WA=new M;class Jn{constructor(t,e,i){i=IA.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Jn.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Jn.idCounter=0;class ps{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ps.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ps.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Be;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Th extends _t{constructor(t){if(super({type:_t.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const i=2*t*this.radius*this.radius/5;return e.x=i,e.y=i,e.z=i,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,i,s){const o=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const c=r[a];i[c]=t[c]-o,s[c]=t[c]+o}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class ig extends zo{constructor(t,e,i,s){if(t===void 0&&(t=1),e===void 0&&(e=1),i===void 0&&(i=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const o=s,r=[],a=[],c=[],l=[],u=[],d=Math.cos,h=Math.sin;r.push(new M(-e*h(0),-i*.5,e*d(0))),l.push(0),r.push(new M(-t*h(0),i*.5,t*d(0))),u.push(1);for(let p=0;p<o;p++){const v=2*Math.PI/o*(p+1),g=2*Math.PI/o*(p+.5);p<o-1?(r.push(new M(-e*h(v),-i*.5,e*d(v))),l.push(2*p+2),r.push(new M(-t*h(v),i*.5,t*d(v))),u.push(2*p+3),c.push([2*p,2*p+1,2*p+3,2*p+2])):c.push([2*p,2*p+1,1,0]),(o%2===1||p<o/2)&&a.push(new M(-h(g),0,d(g)))}c.push(l),a.push(new M(0,1,0));const f=[];for(let p=0;p<u.length;p++)f.push(u[u.length-p-1]);c.push(f),super({vertices:r,faces:c,axes:a}),this.type=_t.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=i,this.numSegments=s}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class ii{constructor(t){t===void 0&&(t={}),this.root=t.root||null,this.aabb=t.aabb?t.aabb.clone():new Te,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(t,e,i){i===void 0&&(i=0);const s=this.data;if(!this.aabb.contains(t))return!1;const o=this.children,r=this.maxDepth||this.root.maxDepth;if(i<r){let a=!1;o.length||(this.subdivide(),a=!0);for(let c=0;c!==8;c++)if(o[c].insert(t,e,i+1))return!0;a&&(o.length=0)}return s.push(e),!0}subdivide(){const t=this.aabb,e=t.lowerBound,i=t.upperBound,s=this.children;s.push(new ii({aabb:new Te({lowerBound:new M(0,0,0)})}),new ii({aabb:new Te({lowerBound:new M(1,0,0)})}),new ii({aabb:new Te({lowerBound:new M(1,1,0)})}),new ii({aabb:new Te({lowerBound:new M(1,1,1)})}),new ii({aabb:new Te({lowerBound:new M(0,1,1)})}),new ii({aabb:new Te({lowerBound:new M(0,0,1)})}),new ii({aabb:new Te({lowerBound:new M(1,0,1)})}),new ii({aabb:new Te({lowerBound:new M(0,1,0)})})),i.vsub(e,Ts),Ts.scale(.5,Ts);const o=this.root||this;for(let r=0;r!==8;r++){const a=s[r];a.root=o;const c=a.aabb.lowerBound;c.x*=Ts.x,c.y*=Ts.y,c.z*=Ts.z,c.vadd(e,c),c.vadd(Ts,a.aabb.upperBound)}}aabbQuery(t,e){this.data,this.children;const i=[this];for(;i.length;){const s=i.pop();s.aabb.overlaps(t)&&Array.prototype.push.apply(e,s.data),Array.prototype.push.apply(i,s.children)}return e}rayQuery(t,e,i){return t.getAABB(mc),mc.toLocalFrame(e,mc),this.aabbQuery(mc,i),i}removeEmptyNodes(){for(let t=this.children.length-1;t>=0;t--)this.children[t].removeEmptyNodes(),!this.children[t].children.length&&!this.children[t].data.length&&this.children.splice(t,1)}}class qA extends ii{constructor(t,e){e===void 0&&(e={}),super({root:null,aabb:t}),this.maxDepth=typeof e.maxDepth<"u"?e.maxDepth:8}}const Ts=new M,mc=new Te;class Zc extends _t{constructor(t,e){super({type:_t.types.TRIMESH}),this.vertices=new Float32Array(t),this.indices=new Int16Array(e),this.normals=new Float32Array(e.length),this.aabb=new Te,this.edges=null,this.scale=new M(1,1,1),this.tree=new qA,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const t=this.tree;t.reset(),t.aabb.copy(this.aabb);const e=this.scale;t.aabb.lowerBound.x*=1/e.x,t.aabb.lowerBound.y*=1/e.y,t.aabb.lowerBound.z*=1/e.z,t.aabb.upperBound.x*=1/e.x,t.aabb.upperBound.y*=1/e.y,t.aabb.upperBound.z*=1/e.z;const i=new Te,s=new M,o=new M,r=new M,a=[s,o,r];for(let c=0;c<this.indices.length/3;c++){const l=c*3;this._getUnscaledVertex(this.indices[l],s),this._getUnscaledVertex(this.indices[l+1],o),this._getUnscaledVertex(this.indices[l+2],r),i.setFromPoints(a),t.insert(i,c)}t.removeEmptyNodes()}getTrianglesInAABB(t,e){gc.copy(t);const i=this.scale,s=i.x,o=i.y,r=i.z,a=gc.lowerBound,c=gc.upperBound;return a.x/=s,a.y/=o,a.z/=r,c.x/=s,c.y/=o,c.z/=r,this.tree.aabbQuery(gc,e)}setScale(t){const e=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,i=t.x===t.y&&t.y===t.z;e&&i||this.updateNormals(),this.scale.copy(t),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const t=XA,e=this.normals;for(let i=0;i<this.indices.length/3;i++){const s=i*3,o=this.indices[s],r=this.indices[s+1],a=this.indices[s+2];this.getVertex(o,qp),this.getVertex(r,Xp),this.getVertex(a,Yp),Zc.computeNormal(Xp,qp,Yp,t),e[s]=t.x,e[s+1]=t.y,e[s+2]=t.z}}updateEdges(){const t={},e=(s,o)=>{const r=s<o?`${s}_${o}`:`${o}_${s}`;t[r]=!0};for(let s=0;s<this.indices.length/3;s++){const o=s*3,r=this.indices[o],a=this.indices[o+1],c=this.indices[o+2];e(r,a),e(a,c),e(c,r)}const i=Object.keys(t);this.edges=new Int16Array(i.length*2);for(let s=0;s<i.length;s++){const o=i[s].split("_");this.edges[2*s]=parseInt(o[0],10),this.edges[2*s+1]=parseInt(o[1],10)}}getEdgeVertex(t,e,i){const s=this.edges[t*2+(e?1:0)];this.getVertex(s,i)}getEdgeVector(t,e){const i=YA,s=KA;this.getEdgeVertex(t,0,i),this.getEdgeVertex(t,1,s),s.vsub(i,e)}static computeNormal(t,e,i,s){e.vsub(t,Wp),i.vsub(e,Gp),Gp.cross(Wp,s),s.isZero()||s.normalize()}getVertex(t,e){const i=this.scale;return this._getUnscaledVertex(t,e),e.x*=i.x,e.y*=i.y,e.z*=i.z,e}_getUnscaledVertex(t,e){const i=t*3,s=this.vertices;return e.set(s[i],s[i+1],s[i+2])}getWorldVertex(t,e,i,s){return this.getVertex(t,s),oe.pointToWorldFrame(e,i,s,s),s}getTriangleVertices(t,e,i,s){const o=t*3;this.getVertex(this.indices[o],e),this.getVertex(this.indices[o+1],i),this.getVertex(this.indices[o+2],s)}getNormal(t,e){const i=t*3;return e.set(this.normals[i],this.normals[i+1],this.normals[i+2])}calculateLocalInertia(t,e){this.computeLocalAABB(bs);const i=bs.upperBound.x-bs.lowerBound.x,s=bs.upperBound.y-bs.lowerBound.y,o=bs.upperBound.z-bs.lowerBound.z;return e.set(1/12*t*(2*s*2*s+2*o*2*o),1/12*t*(2*i*2*i+2*o*2*o),1/12*t*(2*s*2*s+2*i*2*i))}computeLocalAABB(t){const e=t.lowerBound,i=t.upperBound,s=this.vertices.length;this.vertices;const o=ZA;this.getVertex(0,o),e.copy(o),i.copy(o);for(let r=0;r!==s;r++)this.getVertex(r,o),o.x<e.x?e.x=o.x:o.x>i.x&&(i.x=o.x),o.y<e.y?e.y=o.y:o.y>i.y&&(i.y=o.y),o.z<e.z?e.z=o.z:o.z>i.z&&(i.z=o.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let t=0;const e=this.vertices,i=new M;for(let s=0,o=e.length/3;s!==o;s++){this.getVertex(s,i);const r=i.lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const o=$A,r=jA;o.position=t,o.quaternion=e,this.aabb.toWorldFrame(o,r),i.copy(r.lowerBound),s.copy(r.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(t,e,i,s,o){t===void 0&&(t=1),e===void 0&&(e=.5),i===void 0&&(i=8),s===void 0&&(s=6),o===void 0&&(o=Math.PI*2);const r=[],a=[];for(let c=0;c<=i;c++)for(let l=0;l<=s;l++){const u=l/s*o,d=c/i*Math.PI*2,h=(t+e*Math.cos(d))*Math.cos(u),f=(t+e*Math.cos(d))*Math.sin(u),p=e*Math.sin(d);r.push(h,f,p)}for(let c=1;c<=i;c++)for(let l=1;l<=s;l++){const u=(s+1)*c+l-1,d=(s+1)*(c-1)+l-1,h=(s+1)*(c-1)+l,f=(s+1)*c+l;a.push(u,d,f),a.push(d,h,f)}return new Zc(r,a)}}const XA=new M,gc=new Te,YA=new M,KA=new M,Gp=new M,Wp=new M,qp=new M,Xp=new M,Yp=new M,bs=new Te,ZA=new M,$A=new oe,jA=new Te;class JA{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}}class QA extends JA{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0;const s=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=e.bodies,l=c.length,u=t;let d,h,f,p,v,g;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();const m=eT,_=nT,y=tT;m.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const C=r[x];y[x]=0,_[x]=C.computeB(u),m[x]=1/C.computeC()}if(a!==0){for(let b=0;b!==l;b++){const P=c[b],L=P.vlambda,E=P.wlambda;L.set(0,0,0),E.set(0,0,0)}for(i=0;i!==s;i++){p=0;for(let b=0;b!==a;b++){const P=r[b];d=_[b],h=m[b],g=y[b],v=P.computeGWlambda(),f=h*(d-v-P.eps*g),g+f<P.minForce?f=P.minForce-g:g+f>P.maxForce&&(f=P.maxForce-g),y[b]+=f,p+=f>0?f:-f,P.addToWlambda(f)}if(p*p<o)break}for(let b=0;b!==l;b++){const P=c[b],L=P.velocity,E=P.angularVelocity;P.vlambda.vmul(P.linearFactor,P.vlambda),L.vadd(P.vlambda,L),P.wlambda.vmul(P.angularFactor,P.wlambda),E.vadd(P.wlambda,E)}let x=r.length;const C=1/u;for(;x--;)r[x].multiplier=y[x]*C}return i}}const tT=[],eT=[],nT=[];class iT{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class sT extends iT{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Ee={sphereSphere:_t.types.SPHERE,spherePlane:_t.types.SPHERE|_t.types.PLANE,boxBox:_t.types.BOX|_t.types.BOX,sphereBox:_t.types.SPHERE|_t.types.BOX,planeBox:_t.types.PLANE|_t.types.BOX,convexConvex:_t.types.CONVEXPOLYHEDRON,sphereConvex:_t.types.SPHERE|_t.types.CONVEXPOLYHEDRON,planeConvex:_t.types.PLANE|_t.types.CONVEXPOLYHEDRON,boxConvex:_t.types.BOX|_t.types.CONVEXPOLYHEDRON,sphereHeightfield:_t.types.SPHERE|_t.types.HEIGHTFIELD,boxHeightfield:_t.types.BOX|_t.types.HEIGHTFIELD,convexHeightfield:_t.types.CONVEXPOLYHEDRON|_t.types.HEIGHTFIELD,sphereParticle:_t.types.PARTICLE|_t.types.SPHERE,planeParticle:_t.types.PLANE|_t.types.PARTICLE,boxParticle:_t.types.BOX|_t.types.PARTICLE,convexParticle:_t.types.PARTICLE|_t.types.CONVEXPOLYHEDRON,cylinderCylinder:_t.types.CYLINDER,sphereCylinder:_t.types.SPHERE|_t.types.CYLINDER,planeCylinder:_t.types.PLANE|_t.types.CYLINDER,boxCylinder:_t.types.BOX|_t.types.CYLINDER,convexCylinder:_t.types.CONVEXPOLYHEDRON|_t.types.CYLINDER,heightfieldCylinder:_t.types.HEIGHTFIELD|_t.types.CYLINDER,particleCylinder:_t.types.PARTICLE|_t.types.CYLINDER,sphereTrimesh:_t.types.SPHERE|_t.types.TRIMESH,planeTrimesh:_t.types.PLANE|_t.types.TRIMESH};class oT{get[Ee.sphereSphere](){return this.sphereSphere}get[Ee.spherePlane](){return this.spherePlane}get[Ee.boxBox](){return this.boxBox}get[Ee.sphereBox](){return this.sphereBox}get[Ee.planeBox](){return this.planeBox}get[Ee.convexConvex](){return this.convexConvex}get[Ee.sphereConvex](){return this.sphereConvex}get[Ee.planeConvex](){return this.planeConvex}get[Ee.boxConvex](){return this.boxConvex}get[Ee.sphereHeightfield](){return this.sphereHeightfield}get[Ee.boxHeightfield](){return this.boxHeightfield}get[Ee.convexHeightfield](){return this.convexHeightfield}get[Ee.sphereParticle](){return this.sphereParticle}get[Ee.planeParticle](){return this.planeParticle}get[Ee.boxParticle](){return this.boxParticle}get[Ee.convexParticle](){return this.convexParticle}get[Ee.cylinderCylinder](){return this.convexConvex}get[Ee.sphereCylinder](){return this.sphereConvex}get[Ee.planeCylinder](){return this.planeConvex}get[Ee.boxCylinder](){return this.boxConvex}get[Ee.convexCylinder](){return this.convexConvex}get[Ee.heightfieldCylinder](){return this.heightfieldCylinder}get[Ee.particleCylinder](){return this.particleCylinder}get[Ee.sphereTrimesh](){return this.sphereTrimesh}get[Ee.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new sT,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,s,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new NA(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&s.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=i.material||t.material,u=s.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=o||i,a.sj=r||s,a}createFrictionEquationsFromContact(t,e){const i=t.bi,s=t.bj,o=t.si,r=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=o.material||i.material,d=r.material||s.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let f=i.invMass+s.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new Vp(i,s,h*f),g=p.length?p.pop():new Vp(i,s,h*f);return v.bi=g.bi=i,v.bj=g.bj=s,v.minForce=g.minForce=-h*f,v.maxForce=g.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(v.t,g.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=g.enabled=t.enabled,e.push(v,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Rs.setZero(),wo.setZero(),Ao.setZero();const o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?(Rs.vadd(e.ni,Rs),wo.vadd(e.ri,wo),Ao.vadd(e.rj,Ao)):(Rs.vsub(e.ni,Rs),wo.vadd(e.rj,wo),Ao.vadd(e.ri,Ao));const r=1/t;wo.scale(r,i.ri),Ao.scale(r,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),Rs.normalize(),Rs.tangents(i.t,s.t)}getContacts(t,e,i,s,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=s,this.frictionResult=r;const c=cT,l=lT,u=rT,d=aT;for(let h=0,f=t.length;h!==f;h++){const p=t[h],v=e[h];let g=null;p.material&&v.material&&(g=i.getContactMaterial(p.material,v.material)||null);const m=p.type&lt.KINEMATIC&&v.type&lt.STATIC||p.type&lt.STATIC&&v.type&lt.KINEMATIC||p.type&lt.KINEMATIC&&v.type&lt.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],c),p.quaternion.vmult(p.shapeOffsets[_],u),u.vadd(p.position,u);const y=p.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],l),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);const C=v.shapes[x];if(!(y.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(d)>y.boundingSphereRadius+C.boundingSphereRadius)continue;let b=null;y.material&&C.material&&(b=i.getContactMaterial(y.material,C.material)||null),this.currentContactMaterial=b||g||i.defaultContactMaterial;const P=y.type|C.type,L=this[P];if(L){let E=!1;y.type<C.type?E=L.call(this,y,C,u,d,c,l,p,v,y,C,m):E=L.call(this,C,y,d,u,l,c,v,p,y,C,m),E&&m&&(i.shapeOverlapKeeper.set(y.id,C.id),i.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,i,s,o,r,a,c,l,u,d){if(d)return i.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,u);s.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,i,s,o,r,a,c,l,u,d){const h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),i.vsub(s,vc),h.ni.scale(h.ni.dot(vc),Kp),vc.vsub(Kp,h.rj),-vc.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,p=h.rj;f.vadd(i,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(c.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,s,o,r,a,c,t,e,d)}sphereBox(t,e,i,s,o,r,a,c,l,u,d){const h=this.v3pool,f=zT;i.vsub(s,_c),e.getSideNormals(f,r);const p=t.radius;let v=!1;const g=FT,m=OT,_=BT;let y=null,x=0,C=0,b=0,P=null;for(let U=0,Z=f.length;U!==Z&&v===!1;U++){const W=IT;W.copy(f[U]);const tt=W.length();W.normalize();const ct=_c.dot(W);if(ct<tt+p&&ct>0){const vt=DT,rt=NT;vt.copy(f[(U+1)%3]),rt.copy(f[(U+2)%3]);const ne=vt.length(),$=rt.length();vt.normalize(),rt.normalize();const at=_c.dot(vt),At=_c.dot(rt);if(at<ne&&at>-ne&&At<$&&At>-$){const pt=Math.abs(ct-tt-p);if((P===null||pt<P)&&(P=pt,C=at,b=At,y=tt,g.copy(W),m.copy(vt),_.copy(rt),x++,d))return!0}}}if(x){v=!0;const U=this.createContactEquation(a,c,t,e,l,u);g.scale(-p,U.ri),U.ni.copy(g),U.ni.negate(U.ni),g.scale(y,g),m.scale(C,m),g.vadd(m,g),_.scale(b,_),g.vadd(_,U.rj),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let L=h.get();const E=UT;for(let U=0;U!==2&&!v;U++)for(let Z=0;Z!==2&&!v;Z++)for(let W=0;W!==2&&!v;W++)if(L.set(0,0,0),U?L.vadd(f[0],L):L.vsub(f[0],L),Z?L.vadd(f[1],L):L.vsub(f[1],L),W?L.vadd(f[2],L):L.vsub(f[2],L),s.vadd(L,E),E.vsub(i,E),E.lengthSquared()<p*p){if(d)return!0;v=!0;const tt=this.createContactEquation(a,c,t,e,l,u);tt.ri.copy(E),tt.ri.normalize(),tt.ni.copy(tt.ri),tt.ri.scale(p,tt.ri),tt.rj.copy(L),tt.ri.vadd(i,tt.ri),tt.ri.vsub(a.position,tt.ri),tt.rj.vadd(s,tt.rj),tt.rj.vsub(c.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult)}h.release(L),L=null;const S=h.get(),I=h.get(),H=h.get(),N=h.get(),B=h.get(),k=f.length;for(let U=0;U!==k&&!v;U++)for(let Z=0;Z!==k&&!v;Z++)if(U%3!==Z%3){f[Z].cross(f[U],S),S.normalize(),f[U].vadd(f[Z],I),H.copy(i),H.vsub(I,H),H.vsub(s,H);const W=H.dot(S);S.scale(W,N);let tt=0;for(;tt===U%3||tt===Z%3;)tt++;B.copy(i),B.vsub(N,B),B.vsub(I,B),B.vsub(s,B);const ct=Math.abs(W),vt=B.length();if(ct<f[tt].length()&&vt<p){if(d)return!0;v=!0;const rt=this.createContactEquation(a,c,t,e,l,u);I.vadd(N,rt.rj),rt.rj.copy(rt.rj),B.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(s,rt.ri),rt.ri.vsub(i,rt.ri),rt.ri.normalize(),rt.ri.scale(p,rt.ri),rt.ri.vadd(i,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(c.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}h.release(S,I,H,N,B)}planeBox(t,e,i,s,o,r,a,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,s,o,r,a,c,t,e,d)}convexConvex(t,e,i,s,o,r,a,c,l,u,d,h,f){const p=tb;if(!(i.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,o,s,r,p,h,f)){const v=[],g=eb;t.clipAgainstHull(i,o,e,s,r,p,-100,100,v);let m=0;for(let _=0;_!==v.length;_++){if(d)return!0;const y=this.createContactEquation(a,c,t,e,l,u),x=y.ri,C=y.rj;p.negate(y.ni),v[_].normal.negate(g),g.scale(v[_].depth,g),v[_].point.vadd(g,x),C.copy(v[_].point),x.vsub(i,x),C.vsub(s,C),x.vadd(i,x),x.vsub(a.position,x),C.vadd(s,C),C.vsub(c.position,C),this.result.push(y),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,i,s,o,r,a,c,l,u,d){const h=this.v3pool;i.vsub(s,kT);const f=e.faceNormals,p=e.faces,v=e.vertices,g=t.radius;let m=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=WT;r.vmult(y,x),s.vadd(x,x);const C=GT;if(x.vsub(i,C),C.lengthSquared()<g*g){if(d)return!0;m=!0;const b=this.createContactEquation(a,c,t,e,l,u);b.ri.copy(C),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(g,b.ri),x.vsub(s,b.rj),b.ri.vadd(i,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(s,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,y=p.length;_!==y&&m===!1;_++){const x=f[_],C=p[_],b=qT;r.vmult(x,b);const P=XT;r.vmult(v[C[0]],P),P.vadd(s,P);const L=YT;b.scale(-g,L),i.vadd(L,L);const E=KT;L.vsub(P,E);const S=E.dot(b),I=ZT;if(i.vsub(P,I),S<0&&I.dot(b)>0){const H=[];for(let N=0,B=C.length;N!==B;N++){const k=h.get();r.vmult(v[C[N]],k),s.vadd(k,k),H.push(k)}if(LT(H,b,i)){if(d)return!0;m=!0;const N=this.createContactEquation(a,c,t,e,l,u);b.scale(-g,N.ri),b.negate(N.ni);const B=h.get();b.scale(-S,B);const k=h.get();b.scale(-g,k),i.vsub(s,N.rj),N.rj.vadd(k,N.rj),N.rj.vadd(B,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(i,N.ri),N.ri.vsub(a.position,N.ri),h.release(B),h.release(k),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let U=0,Z=H.length;U!==Z;U++)h.release(H[U]);return}else for(let N=0;N!==C.length;N++){const B=h.get(),k=h.get();r.vmult(v[C[(N+1)%C.length]],B),r.vmult(v[C[(N+2)%C.length]],k),s.vadd(B,B),s.vadd(k,k);const U=HT;k.vsub(B,U);const Z=VT;U.unit(Z);const W=h.get(),tt=h.get();i.vsub(B,tt);const ct=tt.dot(Z);Z.scale(ct,W),W.vadd(B,W);const vt=h.get();if(W.vsub(i,vt),ct>0&&ct*ct<U.lengthSquared()&&vt.lengthSquared()<g*g){if(d)return!0;const rt=this.createContactEquation(a,c,t,e,l,u);W.vsub(s,rt.rj),W.vsub(i,rt.ni),rt.ni.normalize(),rt.ni.scale(g,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(c.position,rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let ne=0,$=H.length;ne!==$;ne++)h.release(H[ne]);h.release(B),h.release(k),h.release(W),h.release(vt),h.release(tt);return}h.release(B),h.release(k),h.release(W),h.release(vt),h.release(tt)}for(let N=0,B=H.length;N!==B;N++)h.release(H[N])}}}planeConvex(t,e,i,s,o,r,a,c,l,u,d){const h=$T,f=jT;f.set(0,0,1),o.vmult(f,f);let p=0;const v=JT;for(let g=0;g!==e.vertices.length;g++)if(h.copy(e.vertices[g]),r.vmult(h,h),s.vadd(h,h),h.vsub(i,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u),y=QT;f.scale(f.dot(v),y),h.vsub(y,y),y.vsub(i,_.ri),_.ni.copy(f),h.vsub(s,_.rj),_.ri.vadd(i,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(s,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,s,o,r,a,c,t,e,d)}sphereHeightfield(t,e,i,s,o,r,a,c,l,u,d){const h=e.data,f=t.radius,p=e.elementSize,v=fb,g=db;oe.pointToLocalFrame(s,r,i,g);let m=Math.floor((g.x-f)/p)-1,_=Math.ceil((g.x+f)/p)+1,y=Math.floor((g.y-f)/p)-1,x=Math.ceil((g.y+f)/p)+1;if(_<0||x<0||m>h.length||y>h[0].length)return;m<0&&(m=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),m>=h.length&&(m=h.length-1),_>=h.length&&(_=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const C=[];e.getRectMinMax(m,y,_,x,C);const b=C[0],P=C[1];if(g.z-f>P||g.z+f<b)return;const L=this.result;for(let E=m;E<_;E++)for(let S=y;S<x;S++){const I=L.length;let H=!1;if(e.getConvexTrianglePillar(E,S,!1),oe.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,i,v,o,r,a,c,t,e,d)),d&&H||(e.getConvexTrianglePillar(E,S,!0),oe.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,i,v,o,r,a,c,t,e,d)),d&&H))return!0;if(L.length-I>2)return}}boxHeightfield(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,s,o,r,a,c,t,e,d)}convexHeightfield(t,e,i,s,o,r,a,c,l,u,d){const h=e.data,f=e.elementSize,p=t.boundingSphereRadius,v=ub,g=hb,m=lb;oe.pointToLocalFrame(s,r,i,m);let _=Math.floor((m.x-p)/f)-1,y=Math.ceil((m.x+p)/f)+1,x=Math.floor((m.y-p)/f)-1,C=Math.ceil((m.y+p)/f)+1;if(y<0||C<0||_>h.length||x>h[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),C<0&&(C=0),_>=h.length&&(_=h.length-1),y>=h.length&&(y=h.length-1),C>=h[0].length&&(C=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const b=[];e.getRectMinMax(_,x,y,C,b);const P=b[0],L=b[1];if(!(m.z-p>L||m.z+p<P))for(let E=_;E<y;E++)for(let S=x;S<C;S++){let I=!1;if(e.getConvexTrianglePillar(E,S,!1),oe.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,i,v,o,r,a,c,null,null,d,g,null)),d&&I||(e.getConvexTrianglePillar(E,S,!0),oe.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,i,v,o,r,a,c,null,null,d,g,null)),d&&I))return!0}}sphereParticle(t,e,i,s,o,r,a,c,l,u,d){const h=ob;if(h.set(0,0,1),s.vsub(i,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(c,a,e,t,l,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,i,s,o,r,a,c,l,u,d){const h=nb;h.set(0,0,1),a.quaternion.vmult(h,h);const f=ib;if(s.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(c,a,e,t,l,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const g=sb;h.scale(h.dot(s),g),s.vsub(g,g),v.rj.copy(g),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,s,o,r,a,c,t,e,d)}convexParticle(t,e,i,s,o,r,a,c,l,u,d){let h=-1;const f=ab,p=cb;let v=null;const g=rb;if(g.copy(s),g.vsub(i,g),o.conjugate(Zp),Zp.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let m=0,_=t.faces.length;m!==_;m++){const y=[t.worldVertices[t.faces[m][0]]],x=t.worldFaceNormals[m];s.vsub(y[0],$p);const C=-x.dot($p);if(v===null||Math.abs(C)<Math.abs(v)){if(d)return!0;v=C,h=m,f.copy(x)}}if(h!==-1){const m=this.createContactEquation(c,a,e,t,l,u);f.scale(v,p),p.vadd(s,p),p.vsub(i,p),m.rj.copy(p),f.negate(m.ni),m.ri.set(0,0,0);const _=m.ri,y=m.rj;_.vadd(s,_),_.vsub(c.position,_),y.vadd(i,y),y.vsub(a.position,y),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,s,o,r,a,c,l,u,d){return this.convexHeightfield(e,t,s,i,r,o,c,a,l,u,d)}particleCylinder(t,e,i,s,o,r,a,c,l,u,d){return this.convexParticle(e,t,s,i,r,o,c,a,l,u,d)}sphereTrimesh(t,e,i,s,o,r,a,c,l,u,d){const h=vT,f=_T,p=xT,v=yT,g=ST,m=MT,_=TT,y=gT,x=pT,C=bT;oe.pointToLocalFrame(s,r,i,g);const b=t.radius;_.lowerBound.set(g.x-b,g.y-b,g.z-b),_.upperBound.set(g.x+b,g.y+b,g.z+b),e.getTrianglesInAABB(_,C);const P=mT,L=t.radius*t.radius;for(let N=0;N<C.length;N++)for(let B=0;B<3;B++)if(e.getVertex(e.indices[C[N]*3+B],P),P.vsub(g,x),x.lengthSquared()<=L){if(y.copy(P),oe.pointToWorldFrame(s,r,y,P),P.vsub(i,x),d)return!0;let k=this.createContactEquation(a,c,t,e,l,u);k.ni.copy(x),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(t.radius,k.ri),k.ri.vadd(i,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(P),k.rj.vsub(c.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let N=0;N<C.length;N++)for(let B=0;B<3;B++){e.getVertex(e.indices[C[N]*3+B],h),e.getVertex(e.indices[C[N]*3+(B+1)%3],f),f.vsub(h,p),g.vsub(f,m);const k=m.dot(p);g.vsub(h,m);let U=m.dot(p);if(U>0&&k<0&&(g.vsub(h,m),v.copy(p),v.normalize(),U=m.dot(v),v.scale(U,m),m.vadd(h,m),m.distanceTo(g)<t.radius)){if(d)return!0;const W=this.createContactEquation(a,c,t,e,l,u);m.vsub(g,W.ni),W.ni.normalize(),W.ni.scale(t.radius,W.ri),W.ri.vadd(i,W.ri),W.ri.vsub(a.position,W.ri),oe.pointToWorldFrame(s,r,m,m),m.vsub(c.position,W.rj),oe.vectorToWorldFrame(r,W.ni,W.ni),oe.vectorToWorldFrame(r,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const E=ET,S=wT,I=AT,H=fT;for(let N=0,B=C.length;N!==B;N++){e.getTriangleVertices(C[N],E,S,I),e.getNormal(C[N],H),g.vsub(E,m);let k=m.dot(H);if(H.scale(k,m),g.vsub(m,m),k=m.distanceTo(g),Be.pointInTriangle(m,E,S,I)&&k<t.radius){if(d)return!0;let U=this.createContactEquation(a,c,t,e,l,u);m.vsub(g,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),oe.pointToWorldFrame(s,r,m,m),m.vsub(c.position,U.rj),oe.vectorToWorldFrame(r,U.ni,U.ni),oe.vectorToWorldFrame(r,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}C.length=0}planeTrimesh(t,e,i,s,o,r,a,c,l,u,d){const h=new M,f=uT;f.set(0,0,1),o.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);const v=new M;v.copy(h),oe.pointToWorldFrame(s,r,v,h);const g=hT;if(h.vsub(i,g),f.dot(g)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u);_.ni.copy(f);const y=dT;f.scale(g.dot(f),y),h.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Rs=new M,wo=new M,Ao=new M,rT=new M,aT=new M,cT=new ke,lT=new ke,uT=new M,hT=new M,dT=new M,fT=new M,pT=new M;new M;const mT=new M,gT=new M,vT=new M,_T=new M,xT=new M,yT=new M,ST=new M,MT=new M,ET=new M,wT=new M,AT=new M,TT=new Te,bT=[],vc=new M,Kp=new M,RT=new M,CT=new M,PT=new M;function LT(n,t,e){let i=null;const s=n.length;for(let o=0;o!==s;o++){const r=n[o],a=RT;n[(o+1)%s].vsub(r,a);const c=CT;a.cross(t,c);const l=PT;e.vsub(r,l);const u=c.dot(l);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const _c=new M,IT=new M,DT=new M,NT=new M,zT=[new M,new M,new M,new M,new M,new M],UT=new M,FT=new M,OT=new M,BT=new M,kT=new M,HT=new M,VT=new M,GT=new M,WT=new M,qT=new M,XT=new M,YT=new M,KT=new M,ZT=new M;new M;new M;const $T=new M,jT=new M,JT=new M,QT=new M,tb=new M,eb=new M,nb=new M,ib=new M,sb=new M,ob=new M,Zp=new ke,rb=new M;new M;const ab=new M,$p=new M,cb=new M,lb=new M,ub=new M,hb=[0],db=new M,fb=new M;class jp{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const i=e;e=t,t=i}return t<<16|e}set(t,e){const i=this.getKey(t,e),s=this.current;let o=0;for(;i>s[o];)o++;if(i!==s[o]){for(let r=s.length-1;r>=o;r--)s[r+1]=s[r];s[o]=i}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const i=this.current,s=this.previous,o=i.length,r=s.length;let a=0;for(let c=0;c<o;c++){let l=!1;const u=i[c];for(;u>s[a];)a++;l=u===s[a],l||Jp(t,u)}a=0;for(let c=0;c<r;c++){let l=!1;const u=s[c];for(;u>i[a];)a++;l=i[a]===u,l||Jp(e,u)}}}function Jp(n,t){n.push((t&4294901760)>>16,t&65535)}const Su=(n,t)=>n<t?`${n}-${t}`:`${t}-${n}`;class pb{constructor(){this.data={keys:[]}}get(t,e){const i=Su(t,e);return this.data[i]}set(t,e,i){const s=Su(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=i}delete(t,e){const i=Su(t,e),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const i=e.pop();delete t[i]}}}class mb extends K0{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new mA,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new QA,this.constraints=[],this.narrowphase=new oT(this),this.collisionMatrix=new Ip,this.collisionMatrixPrevious=new Ip,this.bodyOverlapKeeper=new jp,this.shapeOverlapKeeper=new jp,this.contactmaterials=[],this.contactMaterialTable=new pb,this.defaultMaterial=new ps("default"),this.defaultContactMaterial=new Jn(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof Kc?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,s){return i===void 0&&(i={}),i.mode=Be.ALL,i.from=t,i.to=e,i.callback=s,Mu.intersectWorld(this,i)}raycastAny(t,e,i,s){return i===void 0&&(i={}),i.mode=Be.ANY,i.from=t,i.to=e,i.result=s,Mu.intersectWorld(this,i)}raycastClosest(t,e,i,s){return i===void 0&&(i={}),i.mode=Be.CLOSEST,i.from=t,i.to=e,i.result=s,Mu.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof lt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,i=this.bodies,s=i.indexOf(t);if(s!==-1){i.splice(s,1);for(let o=0;o!==i.length;o++)i[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let i=0;i<e.length;i++){const s=e[i].shapes;for(let o=0;o<s.length;o++){const r=s[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const i=qe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=i-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=qe.now();let o=0;for(;this.accumulator>=t&&o<i&&(this.internalStep(t),this.accumulator-=t,o++,!(qe.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,i=yb,s=Sb,o=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=lt.DYNAMIC;let h=-1/0;const f=this.constraints,p=xb;c.length();const v=c.x,g=c.y,m=c.z;let _=0;for(l&&(h=qe.now()),_=0;_!==o;_++){const N=r[_];if(N.type===d){const B=N.force,k=N.mass;B.x+=k*v,B.y+=k*g,B.z+=k*m}}for(let N=0,B=this.subsystems.length;N!==B;N++)this.subsystems[N].update();l&&(h=qe.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),l&&(u.broadphase=qe.now()-h);let y=f.length;for(_=0;_!==y;_++){const N=f[_];if(!N.collideConnected)for(let B=i.length-1;B>=0;B-=1)(N.bodyA===i[B]&&N.bodyB===s[B]||N.bodyB===i[B]&&N.bodyA===s[B])&&(i.splice(B,1),s.splice(B,1))}this.collisionMatrixTick(),l&&(h=qe.now());const x=_b,C=e.length;for(_=0;_!==C;_++)x.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,e,x,this.frictionEquations,p),l&&(u.narrowphase=qe.now()-h),l&&(h=qe.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const P=e.length;for(let N=0;N!==P;N++){const B=e[N],k=B.bi,U=B.bj,Z=B.si,W=B.sj;let tt;if(k.material&&U.material?tt=this.getContactMaterial(k.material,U.material)||this.defaultContactMaterial:tt=this.defaultContactMaterial,tt.friction,k.material&&U.material&&(k.material.friction>=0&&U.material.friction>=0&&k.material.friction*U.material.friction,k.material.restitution>=0&&U.material.restitution>=0&&(B.restitution=k.material.restitution*U.material.restitution)),a.addEquation(B),k.allowSleep&&k.type===lt.DYNAMIC&&k.sleepState===lt.SLEEPING&&U.sleepState===lt.AWAKE&&U.type!==lt.STATIC){const ct=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),vt=U.sleepSpeedLimit**2;ct>=vt*2&&(k.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===lt.DYNAMIC&&U.sleepState===lt.SLEEPING&&k.sleepState===lt.AWAKE&&k.type!==lt.STATIC){const ct=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),vt=k.sleepSpeedLimit**2;ct>=vt*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(k,U,!0),this.collisionMatrixPrevious.get(k,U)||(Mr.body=U,Mr.contact=B,k.dispatchEvent(Mr),Mr.body=k,U.dispatchEvent(Mr)),this.bodyOverlapKeeper.set(k.id,U.id),this.shapeOverlapKeeper.set(Z.id,W.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=qe.now()-h,h=qe.now()),_=0;_!==o;_++){const N=r[_];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const N=f[_];N.update();for(let B=0,k=N.equations.length;B!==k;B++){const U=N.equations[B];a.addEquation(U)}}a.solve(t,this),l&&(u.solve=qe.now()-h),a.removeAllEquations();const L=Math.pow;for(_=0;_!==o;_++){const N=r[_];if(N.type&d){const B=L(1-N.linearDamping,t),k=N.velocity;k.scale(B,k);const U=N.angularVelocity;if(U){const Z=L(1-N.angularDamping,t);U.scale(Z,U)}}}this.dispatchEvent(vb),l&&(h=qe.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(_=0;_!==o;_++)r[_].integrate(t,S,I);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=qe.now()-h),this.stepnumber+=1,this.dispatchEvent(gb);let H=!0;if(this.allowSleep)for(H=!1,_=0;_!==o;_++){const N=r[_];N.sleepTick(this.time),N.sleepState!==lt.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(wi,Ai),t){for(let o=0,r=wi.length;o<r;o+=2)Er.bodyA=this.getBodyById(wi[o]),Er.bodyB=this.getBodyById(wi[o+1]),this.dispatchEvent(Er);Er.bodyA=Er.bodyB=null}if(e){for(let o=0,r=Ai.length;o<r;o+=2)wr.bodyA=this.getBodyById(Ai[o]),wr.bodyB=this.getBodyById(Ai[o+1]),this.dispatchEvent(wr);wr.bodyA=wr.bodyB=null}wi.length=Ai.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(wi,Ai),i){for(let o=0,r=wi.length;o<r;o+=2){const a=this.getShapeById(wi[o]),c=this.getShapeById(wi[o+1]);Ti.shapeA=a,Ti.shapeB=c,a&&(Ti.bodyA=a.body),c&&(Ti.bodyB=c.body),this.dispatchEvent(Ti)}Ti.bodyA=Ti.bodyB=Ti.shapeA=Ti.shapeB=null}if(s){for(let o=0,r=Ai.length;o<r;o+=2){const a=this.getShapeById(Ai[o]),c=this.getShapeById(Ai[o+1]);bi.shapeA=a,bi.shapeB=c,a&&(bi.bodyA=a.body),c&&(bi.bodyB=c.body),this.dispatchEvent(bi)}bi.bodyA=bi.bodyB=bi.shapeA=bi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let i=0;i!==e;i++){const s=t[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new Te;const Mu=new Be,qe=globalThis.performance||{};if(!qe.now){let n=Date.now();qe.timing&&qe.timing.navigationStart&&(n=qe.timing.navigationStart),qe.now=()=>Date.now()-n}new M;const gb={type:"postStep"},vb={type:"preStep"},Mr={type:lt.COLLIDE_EVENT_NAME,body:null,contact:null},_b=[],xb=[],yb=[],Sb=[],wi=[],Ai=[],Er={type:"beginContact",bodyA:null,bodyB:null},wr={type:"endContact",bodyA:null,bodyB:null},Ti={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},bi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},bn=document.querySelector("#game-canvas");document.querySelector("#mobile-controls");const rn=document.querySelector("#mobile-move-zone"),$e=document.querySelector("#mobile-look-zone"),$r=document.querySelector("#mobile-use-button"),hd=document.querySelector("#mobile-shield-button"),pn=document.querySelector("#mobile-fire-button"),dd=document.querySelector("#mobile-reload-button"),ci=document.querySelector("#health-chip"),Ci=document.querySelector("#hp-value"),Or=document.querySelector("#shield-pips"),Mb=document.querySelector("#energy-value"),Uo=document.querySelector("#ammo-chip"),Eb=document.querySelector("#ammo-value"),wb=document.querySelector("#cargo-value"),Ab=document.querySelector("#threat-value"),Tb=document.querySelector("#alarm-value"),bb=document.querySelector("#interaction-prompt"),Rb=document.querySelector("#interaction-prompt-title"),Cb=document.querySelector("#interaction-prompt-copy"),Pb=document.querySelector("#orientation-panel"),xc=document.querySelector("#objective-label"),yc=document.querySelector("#objective-meter-fill"),Lb=document.querySelector("#settings-button"),jr=document.querySelector("#settings-panel"),Ib=document.querySelector("#settings-close-button"),Us=document.querySelector("#fullscreen-button"),Db=document.querySelector("#settings-restart-button"),bh=document.querySelector("#camera-sensitivity-input"),Nb=document.querySelector("#camera-sensitivity-value"),zb=document.querySelector("#ready-panel"),Ub=document.querySelector("#ready-button"),ui=document.querySelector("#result-panel"),Fb=document.querySelector("#result-kicker"),Ob=document.querySelector("#result-title"),Bb=document.querySelector("#result-copy"),kb=document.querySelector("#result-restart-button"),Hb=document.querySelector("#result-close-button"),fd=!0,Vb=!fd,Gb=1,Wb=!0,Yo=new rS,hi=new Gw({canvas:bn,antialias:Wb,preserveDrawingBuffer:!fd,powerPreference:"low-power"});hi.shadowMap.enabled=Vb;hi.autoClear=!0;hi.setPixelRatio(Math.min(window.devicePixelRatio,Gb));hi.outputColorSpace=Xe;hi.toneMapping=Ui;hi.toneMappingExposure=1;const Pt=new fy;Pt.background=new Vt(12180735);Pt.fog=null;hi.setClearColor(Pt.background,1);const sg=50,qb=40,Xb=60,Qp=hf(),Se=new Nn(sg,Qp.width/Qp.height,.1,320),Jr=new w,tm=new w,em=new w,Yb=2,Kb=6.4,Zb=3.45+Yb,Ve=new w(.67,0,-.74).normalize();let qs=Math.atan2(Ve.x,Ve.z),To=null,Br=null;Pt.add(new sS(16777215,1.25));const og=-9.8,Dt=new mb({gravity:new M(0,og,0)});Dt.broadphase=new Co(Dt);Dt.allowSleep=!0;const di=new ps("dry"),pd=new ps("arena-slope"),Qr=new ps("light-bouncy-rubber"),Xs=new ps("weapon-debris"),rg=new Jn(di,di,{friction:0,restitution:0});Dt.addContactMaterial(rg);Dt.addContactMaterial(new Jn(Qr,di,{friction:.2,restitution:.46}));Dt.addContactMaterial(new Jn(Qr,pd,{friction:.16,restitution:.28}));Dt.addContactMaterial(new Jn(Qr,Qr,{friction:.12,restitution:.38}));Dt.addContactMaterial(new Jn(Xs,di,{friction:.48,restitution:.04}));Dt.addContactMaterial(new Jn(Xs,pd,{friction:.42,restitution:.03}));Dt.addContactMaterial(new Jn(Xs,Xs,{friction:.36,restitution:.04}));Dt.defaultContactMaterial=rg;const Ue=new Set,Jt={movePointerId:null,moveStartX:0,moveStartY:0,moveRight:0,moveForward:0,moveSprint:!1,lookPointerId:null,lookStartX:0,lookStartY:0,lookLastX:0,firePointerId:null,fireLookLastX:0},nm=new w(0,0,-1),sr=new w(0,1,0),$b=new w,fi=144,$c=fi/2,Cn=14,Rn=fi,An=fi*1.8,pi=0,ki=-34,jb=18,Jb=.45,fl=220,is=192,ag=6,Rh=fl*.98,Ch=ki+3.4,im=fl*.86,ta=Ch,md=ta+6,sm=1,Qb=2.45,cg=j.degToRad(3.5),tR=j.degToRad(1),Sc=34,eR=1.4,om=ki-8,Yn=new w(-62,0,62),nR=new w(62,0,-62);Kd();const iR=new w(64,0,-58),sR=new w(11.2,0,-12.7),lg=[new w(10,0,-22),new w(22,0,-16),new w(30,0,-30),new w(4,0,-36)],ug=[new w(-42,0,24),new w(44,0,30),new w(-34,0,-44),new w(42,0,-44)],fa=2.14,Ys=fa/2,hg=.08,pl=4,rm=2,oR=1,rR=Object.freeze({front:["left","right"],back:["left","right"],left:["front","back"],right:["front","back"]}),aR=[0,1/3,2/3,1],am=162,Ge=.175,Ph=Ge*2,Ar=Ph,cR=.48,dg=2,pa=.14,ma=.3,lR=.24,uR=.16,hR=.11,dR=.5,fR=.7,pR=.2,mR=.22,cm=.08,gR=3.2,vR=.45,_R=.18,xR=.16,yR=.1,SR=34,Ko=8.5,Zo=13,lm=2.6,MR=1.05,ER=.018,fg=.22,Eu=.58,wu=.36,wR=.08,AR=.08,pg=12085802,mg=16767055,gg=.6,TR=.1,oi=3.5,Tr=1,um=.58,Bs=.36,gd=.48,as=.3,Lh=.15,bR=.09,hm=.055,RR=.045,CR=j.degToRad(30),PR=j.degToRad(8),LR=j.degToRad(5),vd=Object.freeze([{key:"sole",size:{x:.26,y:.06,z:.54},position:{x:0,y:.03,z:.04},color:986379},{key:"heel",size:{x:.24,y:.16,z:.12},position:{x:0,y:.11,z:-.25},color:1511693},{key:"upper",size:{x:.22,y:.2,z:.36},position:{x:0,y:.155,z:-.03},color:2892056},{key:"toe",size:{x:.24,y:.16,z:.17},position:{x:0,y:.11,z:.245},color:1577485},{key:"cuff",size:{x:.235,y:.04,z:.3},position:{x:0,y:.277,z:-.07},color:4929576},{key:"lace-panel",size:{x:.05,y:.16,z:.018},position:{x:0,y:.19,z:.168},color:9071173}]),IR=Object.freeze({sole:2436124,heel:2896929,upper:4278827,toe:3357731,cuff:5660728,"lace-panel":9147490}),vg=Object.freeze({sole:2168593,heel:3088663,upper:4533535,toe:3679513,cuff:6307880,"lace-panel":9529671}),_g=Bs*2+gd,_d=_g+as,or=_d/2,xd=as+_g/2,DR=xd-or,us=Bs,jc=gd,yd=xd,ga=_d,On=or,Ks=Bs,Jc=gd,Sd=xd,Md=_d,xn=or,zn=8,NR=3,zR=4,Ed=Ks,dm=30,fm=2.2,xg=30,yg=15,UR=Math.cos(j.degToRad(30)),FR=Math.cos(j.degToRad(35)),OR=xg,BR=.09,Sg=2.4,kR=3.2,Mg=4,HR=(Sg+Mg)/2,Eg=2.4,VR=3.2,wg=4.4,GR=(Eg+wg)/2,Ag=6,pm=1.2,WR=.35,qR=.8,XR=Math.PI/2.8,mm=Math.PI*2,Fo=36,YR=1.05,KR=1,Au=1,ml=1.2,Nc=.4,gm=.4,ZR=ml,Fs=1.6,$R=5.5,jR=3.2,JR=1.25,Qc=2.45,Pi=.05,vm=or,QR=50,t2=35,e2=1,n2=8093828,va=30,i2=.105,Tg=1.5,s2=j.degToRad(1.25),gl=12,o2=Tg,r2=3,a2=.16,c2=1.15,l2=j.degToRad(2.4),br=.025,Mc=.15,u2=.035,h2=10902070,d2=.18,vl=.012,wd=.12,Ad=.35,f2=.22,p2=.18,m2=.08,g2=.45,v2=.7,_2=.22,x2=28,_m=5.2,y2=1.05,Tu=9.5,xm=4.2,S2=1.25,bu=7.5,Td=7.5,bd=18,ym=.18,bg=24,M2=.55,Sm=1.25,E2=52,w2=14,A2=13,T2=2.2,Rd=9,Rg=6,b2=42,R2=18,tl=18,Zs=58,C2=86,Cg=5,P2=4.8,Pg=38,L2=72,ea=3.2,I2=1.45,D2=Zs-1,N2=10,z2=2,Lg=1,U2=.5,na=2.4,F2=Math.cos(j.degToRad(35)),_a=.6,Oo=.2,Ig=.2,ks=Oo+Ig,O2=_a,B2=j.degToRad(40),k2=1,H2=.55,V2=3,Mm=6.8*.5,G2=6.8*.24,W2=1.1,q2=7286557,X2=9061160,Y2=.055,K2=.2,Z2=.173,Ru=4,Em=46,$2=1.65,j2=.012,J2=.095,Q2=2.8,tC=7.2,eC=.44,nC=.3,iC=1.28,sC=.34,oC=.72,Cu=3.2,_l=.55,rC=.6,wm=1.15,Dg=.45,aC=.6,Am=.85,xl=us,Tm=3.2,bm=4,Ng=1,cC=1,Rm=2,Hs=3,Cm=xl*2+Pi*2+.14,Pm=ga,Ih=.12,lC=xl+Ih/2+.04,uC=ga/2,zg=.22,hC=12,el=58,dC=.9,fC=.0048,pC=.55,mC=.72,$s=.28,Ug=.12,Fg=1,gC=2.5,vC=.14,_C=3.1,Pu=4.44,xC=j.degToRad(38),yC=.045,SC=.12,MC=.95,EC=.58,wC=.22,AC=60,Lm=6.4,TC=4,bC=us*.85,RC=6,CC=6,PC=2,Cd=.05,LC=3.5,Og=.1,IC=2,DC=6227730,Xt=1e-6,Bg=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"]),kg=Object.freeze({godMode:!1,invisibleToEnemies:!1}),F={phase:"ready",hp:zn,energy:Ng,cargo:0,cargoNeeded:lg.length,extractionProgress:0,shootCooldown:0,fireHeld:!1,weaponAmmo:va,reloadTimer:0,meleeCooldown:0,kickCooldown:0,alarmLevel:0,alarmHoldTimer:0,alarmPulseTimer:0,reinforcementTimer:ea,lastNoisePosition:Yn.clone(),radioDisabled:!1,ambientRustleTimer:2.5,resultShown:!1,resultDelayTimer:0,settingsOpen:!1,...kg},NC=[{id:"ranged-beach-ridge",type:"ranged",x:-46,z:40,patrolRadiusX:8.2,patrolRadiusZ:4,patrolOffset:.2},{id:"ranged-north-patrol",type:"ranged",x:-18,z:34,patrolRadiusX:9,patrolRadiusZ:5.4,patrolOffset:.9},{id:"ranged-radio-tower",type:"ranged",x:16,z:20,patrolRadiusX:4.8,patrolRadiusZ:4.2,patrolOffset:1.6},{id:"ranged-dock-overwatch",type:"ranged",x:52,z:24,patrolRadiusX:5.2,patrolRadiusZ:7,patrolOffset:2.3},{id:"melee-jungle-flanker",type:"melee",x:-30,z:8,patrolRadiusX:7.4,patrolRadiusZ:6,patrolOffset:3},{id:"ranged-west-gate",type:"ranged",x:-8,z:-6,patrolRadiusX:6.8,patrolRadiusZ:5,patrolOffset:3.7},{id:"ranged-camp-north",type:"ranged",x:16,z:-10,patrolRadiusX:5.8,patrolRadiusZ:5.2,patrolOffset:4.4},{id:"ranged-camp-east",type:"ranged",x:34,z:-14,patrolRadiusX:6.8,patrolRadiusZ:4.8,patrolOffset:5.1},{id:"melee-camp-runner",type:"melee",x:10,z:-28,patrolRadiusX:5.4,patrolRadiusZ:6.8,patrolOffset:5.8},{id:"ranged-camp-south",type:"ranged",x:26,z:-34,patrolRadiusX:6.4,patrolRadiusZ:5,patrolOffset:6.5},{id:"ranged-bunker-left",type:"ranged",x:-12,z:-40,patrolRadiusX:5.2,patrolRadiusZ:5.6,patrolOffset:7.2},{id:"melee-bunker-guard",type:"melee",x:2,z:-48,patrolRadiusX:5,patrolRadiusZ:4.8,patrolOffset:7.9},{id:"ranged-south-ridge",type:"ranged",x:42,z:-48,patrolRadiusX:8,patrolRadiusZ:5.6,patrolOffset:8.6},{id:"ranged-extraction-watch",type:"ranged",x:58,z:-54,patrolRadiusX:4.8,patrolRadiusZ:4.6,patrolOffset:9.3},{id:"melee-ravine-hunter",type:"melee",x:-44,z:-22,patrolRadiusX:7.2,patrolRadiusZ:6.4,patrolOffset:10},{id:"ranged-west-ridge",type:"ranged",x:-56,z:-8,patrolRadiusX:6.8,patrolRadiusZ:6,patrolOffset:10.7},{id:"reserve-north-rifle",type:"ranged",reserve:!0,x:-30,z:62,patrolRadiusX:5,patrolRadiusZ:4.2,patrolOffset:11.4},{id:"reserve-east-rifle",type:"ranged",reserve:!0,x:62,z:4,patrolRadiusX:4.8,patrolRadiusZ:5.6,patrolOffset:12.1},{id:"reserve-south-melee",type:"melee",reserve:!0,x:44,z:-62,patrolRadiusX:5.2,patrolRadiusZ:4.8,patrolOffset:12.8},{id:"reserve-west-rifle",type:"ranged",reserve:!0,x:-62,z:-36,patrolRadiusX:4.8,patrolRadiusZ:5,patrolOffset:13.5}],zC=.4,UC=.8,Hg=bl()?UC:zC;bh.value=String(Hg);const yl={mouseSensitivity:Hg},$o=[],cs=[],zc=[],jo=[],Jo=[],Qo=[],ia=[],Dh=[],Hi=[],Nh=[],Uc=[],Fc=[],Rr=new je,Cr=new je,Vg=new w,Im=new w,Dm=new w,qn=new w,Lu=new w,nl=new pe,FC=new mn,Nm=new mn,zm=new mn,Um=new mn,OC=new w,BC=new w,Ec=new w,wc=new w,Cs=new w,Fm=new mn,Pr=new mn,Gg=new cl,Om=new pe,Iu=new fs(new w,fa*2.2),Wg=new cl,Bm=new pe,Du=new fs(new w,.2);let km=-1/0;const Yi=[],qg=[],xa=[],Os=[],ya=[],Xg=[];let zh=null,zi=null,Li=null,Yg=0,Kg=0,Zg=0;const te={enemyGlow:14842111,playerShot:16179854,playerShotGlow:15775821,enemyShot:14842111,glass:10480383,glassEdge:14154751,crate:10187841,concrete:7830130,teal:4575676},Kn={red:13908534,white:16052452,blue:3040472,khaki:8749143,yellow:15779915},kC=[Kn.red,Kn.white,Kn.blue,Kn.white,Kn.red],HC=[Kn.blue,Kn.red,Kn.blue],VC=[Kn.khaki,Kn.yellow,Kn.khaki],Oc=new Map,GC=10,WC=_P(GC),$g=new Wi(.018,.03,1,7);$g.rotateX(Math.PI/2);const qC=new qi(.085,8,6),XC=new Ie({vertexColors:!0,side:Ne}),jg=new Ie({color:2845992}),YC=new Ie({color:6438943}),Hm=Object.freeze([new Ie({color:3116857}),new Ie({color:2519857}),new Ie({color:3843141})]),Uh=[null,Nu(1),Nu(2),Nu(3)];let En=null,Po=null;function KC(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#3aa641"),i.addColorStop(.42,"#32963a"),i.addColorStop(1,"#2d8834"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let r=0;r<92;r+=1){const a=Math.random()*e,c=Math.random()*e,l=34+Math.random()*132,u=18+Math.random()*84;t.fillStyle=Math.random()>.36?`rgba(63, 174, 70, ${.075+Math.random()*.075})`:`rgba(33, 117, 43, ${.065+Math.random()*.07})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<44;r+=1){const a=Math.random()*e,c=Math.random()*e,l=16+Math.random()*82,u=10+Math.random()*46;t.fillStyle=`rgba(93, 119, 57, ${.05+Math.random()*.055})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<16;r+=1){const a=Math.random()*e,c=Math.random()*e,l=28+Math.random()*118,u=14+Math.random()*58;t.fillStyle=`rgba(118, 102, 55, ${.07+Math.random()*.055})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<420;r+=1){const a=Math.random()*e,c=Math.random()*e,l=18+Math.random()*54,u=-.5+Math.random();t.strokeStyle=Math.random()>.28?`rgba(80, 179, 75, ${.06+Math.random()*.075})`:`rgba(35, 118, 42, ${.055+Math.random()*.065})`,t.lineWidth=2+Math.random()*2.4,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(u)*l*.45,c+Math.sin(u)*l*.45+(Math.random()-.5)*16,a+Math.cos(u)*l,c+Math.sin(u)*l),t.stroke()}for(let r=0;r<620;r+=1){const a=.035+Math.random()*.06;t.fillStyle=Math.random()>.5?`rgba(65, 161, 68, ${a})`:`rgba(24, 93, 31, ${a})`;const c=3+Math.random()*7;t.beginPath(),t.ellipse(Math.random()*e,Math.random()*e,c,c*(.55+Math.random()*.7),Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<130;r+=1){const a=Math.random()*e,c=Math.random()*e,l=26+Math.random()*82;t.strokeStyle=`rgba(172, 161, 86, ${.035+Math.random()*.04})`,t.lineWidth=1+Math.random()*1.8,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+l*.45,c-13+Math.random()*26,a+l,c-10+Math.random()*20),t.stroke()}const s=t.createRadialGradient(e*.5,e*.5,e*.18,e*.5,e*.5,e*.78);s.addColorStop(0,"rgba(255, 255, 255, 0.035)"),s.addColorStop(.72,"rgba(0, 0, 0, 0)"),s.addColorStop(1,"rgba(0, 0, 0, 0.09)"),t.fillStyle=s,t.fillRect(0,0,e,e);const o=new nr(n);return o.wrapS=Oi,o.wrapT=Oi,o.repeat.set(1,1),o.minFilter=Di,o.magFilter=Un,o.generateMipmaps=!0,o.colorSpace=Xe,o}function ms(n,t={x:1,y:1}){const e=new nr(n);return e.wrapS=Oi,e.wrapT=Oi,e.repeat.set(t.x,t.y),e.minFilter=Di,e.magFilter=Un,e.generateMipmaps=!0,e.anisotropy=4,e.colorSpace=Xe,e}function gs(n,t,e,i,s=1){for(let o=0;o<i;o+=1){const r=e[Math.floor(Math.random()*e.length)],a=(.035+Math.random()*.075)*s;n.fillStyle=`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${a})`;const c=1+Math.random()*5;n.beginPath(),n.ellipse(Math.random()*t,Math.random()*t,c,c*(.45+Math.random()*1.2),Math.random()*Math.PI,0,Math.PI*2),n.fill()}}function Jg({base:n="#775732",dark:t="#3e2a18",light:e="#b1844c",plankCount:i=7}={}){const s=document.createElement("canvas");s.width=1024,s.height=1024;const o=s.getContext("2d"),r=s.width,a=o.createLinearGradient(0,0,r,r);a.addColorStop(0,e),a.addColorStop(.34,n),a.addColorStop(1,t),o.fillStyle=a,o.fillRect(0,0,r,r);const c=r/i;for(let l=0;l<=i;l+=1){const u=l*c+(Math.random()-.5)*8;o.strokeStyle="rgba(38, 24, 13, 0.52)",o.lineWidth=5+Math.random()*4,o.beginPath(),o.moveTo(u,0),o.bezierCurveTo(u+9,r*.32,u-10,r*.68,u+5,r),o.stroke(),o.strokeStyle="rgba(226, 170, 90, 0.18)",o.lineWidth=1.5,o.beginPath(),o.moveTo(u+7,0),o.lineTo(u+2,r),o.stroke()}for(let l=0;l<150;l+=1){const u=Math.random()*r,d=Math.random()*r,h=80+Math.random()*260;o.strokeStyle=`rgba(42, 25, 12, ${.07+Math.random()*.12})`,o.lineWidth=1+Math.random()*2.4,o.beginPath(),o.moveTo(d,u),o.bezierCurveTo(d+h*.28,u-18,d+h*.72,u+24,d+h,u+Math.random()*18),o.stroke()}for(let l=0;l<34;l+=1){const u=Math.random()*r,d=Math.random()*r;o.fillStyle="rgba(35, 20, 10, 0.22)",o.beginPath(),o.ellipse(u,d,9+Math.random()*18,4+Math.random()*8,Math.random()*Math.PI,0,Math.PI*2),o.fill()}return gs(o,r,[[95,61,30],[185,125,65],[48,31,16]],760,.72),ms(s)}function ZC(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,0);i.addColorStop(0,"#5c4527"),i.addColorStop(.42,"#7a5a31"),i.addColorStop(1,"#3d2c1b"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=-24;s<e+24;s+=34+Math.random()*22){const o=7+Math.random()*18;t.strokeStyle=`rgba(39, 27, 15, ${.18+Math.random()*.18})`,t.lineWidth=o,t.beginPath(),t.moveTo(s,-20),t.bezierCurveTo(s+24-Math.random()*48,e*.28,s+28-Math.random()*56,e*.66,s+12-Math.random()*24,e+20),t.stroke(),t.strokeStyle=`rgba(190, 143, 76, ${.08+Math.random()*.1})`,t.lineWidth=Math.max(1,o*.22),t.beginPath(),t.moveTo(s+o*.55,0),t.lineTo(s-o*.3,e),t.stroke()}for(let s=48;s<e;s+=94+Math.random()*42)t.strokeStyle=`rgba(32, 22, 12, ${.12+Math.random()*.11})`,t.lineWidth=3+Math.random()*3,t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(e*.24,s-12,e*.66,s+20,e,s+Math.random()*14),t.stroke();for(let s=0;s<56;s+=1){const o=Math.random()*e,r=Math.random()*e;t.fillStyle=`rgba(26, 18, 10, ${.14+Math.random()*.16})`,t.beginPath(),t.ellipse(o,r,5+Math.random()*14,16+Math.random()*44,Math.random()*Math.PI,0,Math.PI*2),t.fill()}return gs(t,e,[[104,72,38],[57,37,19],[178,132,70]],980,.9),ms(n,{x:2.2,y:1})}function $C(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#4a4536"),i.addColorStop(.5,"#2f3029"),i.addColorStop(1,"#1f211d"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<e;s+=84)t.fillStyle=s%168===0?"rgba(72, 69, 56, 0.52)":"rgba(35, 35, 30, 0.48)",t.fillRect(0,s,e,48+Math.random()*10),t.strokeStyle="rgba(11, 13, 12, 0.42)",t.lineWidth=4,t.beginPath(),t.moveTo(0,s+50),t.lineTo(e,s+43+Math.random()*12),t.stroke();for(let s=0;s<110;s+=1){const o=Math.random()*e,r=Math.random()*e;t.strokeStyle=`rgba(155, 149, 112, ${.05+Math.random()*.1})`,t.lineWidth=1+Math.random()*3,t.beginPath(),t.moveTo(o,r),t.lineTo(o+18+Math.random()*86,r+(Math.random()-.5)*24),t.stroke()}return gs(t,e,[[100,96,75],[34,36,31],[9,11,10]],820,.8),ms(n)}function jC(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#b4a36f"),i.addColorStop(.5,"#8d8058"),i.addColorStop(1,"#665b3d"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<e;s+=92)t.strokeStyle="rgba(72, 62, 38, 0.34)",t.lineWidth=4,t.beginPath(),t.moveTo(0,s+44),t.bezierCurveTo(e*.3,s+34,e*.7,s+58,e,s+45),t.stroke();for(let s=0;s<e;s+=36)t.strokeStyle="rgba(234, 218, 158, 0.08)",t.lineWidth=1,t.beginPath(),t.moveTo(s,0),t.lineTo(s+24,e),t.stroke();for(let s=0;s<e;s+=34)t.strokeStyle="rgba(50, 43, 27, 0.08)",t.lineWidth=1,t.beginPath(),t.moveTo(0,s),t.lineTo(e,s+18),t.stroke();return gs(t,e,[[198,178,112],[94,80,50],[135,122,77]],1250,1),ms(n)}function JC(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#a5a89d"),i.addColorStop(.52,"#777a72"),i.addColorStop(1,"#555951"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<46;s+=1){const o=Math.random()*e,r=Math.random()*e,a=28+Math.random()*120;t.fillStyle=`rgba(42, 44, 41, ${.035+Math.random()*.055})`,t.beginPath(),t.ellipse(o,r,a,a*(.25+Math.random()*.55),Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let s=0;s<38;s+=1){const o=Math.random()*e,r=Math.random()*e;t.strokeStyle=`rgba(36, 38, 35, ${.08+Math.random()*.1})`,t.lineWidth=1+Math.random()*2.5,t.beginPath(),t.moveTo(o,r);let a=o,c=r;for(let l=0;l<4;l+=1)a+=(Math.random()-.5)*90,c+=30+Math.random()*90,t.lineTo(a,c);t.stroke()}return gs(t,e,[[190,193,183],[93,96,90],[51,54,50]],1450,1),ms(n)}function QC(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width;return t.drawImage(Jg({base:"#8b6332",dark:"#40250f",light:"#bd8747"}).image,0,0),t.strokeStyle="rgba(38, 22, 8, 0.72)",t.lineWidth=24,t.strokeRect(38,38,e-76,e-76),t.lineWidth=18,t.beginPath(),t.moveTo(74,74),t.lineTo(e-74,e-74),t.moveTo(e-74,74),t.lineTo(74,e-74),t.stroke(),t.strokeStyle="rgba(225, 160, 80, 0.18)",t.lineWidth=5,t.strokeRect(64,64,e-128,e-128),gs(t,e,[[68,38,15],[186,119,53],[116,72,28]],560,.75),ms(n)}function tP(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#8f9182"),i.addColorStop(.42,"#676a5e"),i.addColorStop(1,"#3d4038"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<85;s+=1){const o=Math.random()*e,r=Math.random()*e;t.strokeStyle=`rgba(30, 32, 28, ${.08+Math.random()*.13})`,t.lineWidth=2+Math.random()*6,t.beginPath(),t.moveTo(o,r),t.lineTo(o+(Math.random()-.5)*220,r+36+Math.random()*190),t.stroke()}for(let s=0;s<58;s+=1){const o=Math.random()*e,r=Math.random()*e,a=18+Math.random()*90;t.fillStyle=`rgba(182, 186, 168, ${.035+Math.random()*.08})`,t.beginPath(),t.ellipse(o,r,a,a*(.25+Math.random()*.55),Math.random()*Math.PI,0,Math.PI*2),t.fill()}return gs(t,e,[[160,164,148],[82,86,76],[38,41,36]],1500,1),ms(n)}function eP(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#59605a"),i.addColorStop(.44,"#30342e"),i.addColorStop(1,"#171a18"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<130;s+=1){const o=Math.random()*e;t.strokeStyle=`rgba(205, 215, 200, ${.025+Math.random()*.075})`,t.lineWidth=1+Math.random()*2,t.beginPath(),t.moveTo(Math.random()*120,o),t.lineTo(e-Math.random()*120,o+(Math.random()-.5)*28),t.stroke()}for(let s=0;s<40;s+=1){const o=Math.random()*e,r=Math.random()*e;t.fillStyle=`rgba(120, 74, 40, ${.05+Math.random()*.08})`,t.beginPath(),t.ellipse(o,r,12+Math.random()*42,4+Math.random()*18,Math.random()*Math.PI,0,Math.PI*2),t.fill()}return gs(t,e,[[145,151,141],[49,53,48],[21,24,22]],900,.85),ms(n)}function nP(n){if(!Oc.has(n)){const t={wood:()=>Jg(),roof:$C,bark:ZC,sandbag:jC,concrete:JC,crate:QC,rock:tP,metal:eP}[n];Oc.set(n,t?t():null)}return Oc.get(n)}function iP(n,t){return n==="rock-cover"?"rock":n!=null&&n.includes("sandbag")?"sandbag":n!=null&&n.includes("roof")?"roof":n==="tree-trunk"?"bark":n!=null&&n.includes("mast")||n==="lamp-pole"||n==="radio-terminal"?"metal":n!=null&&n.includes("hut")||n!=null&&n.includes("watchtower")?"wood":t===te.crate?"crate":t===te.concrete?"concrete":null}function sP(n,t){const e=nP(n);if(!e)return null;const i=e.clone(),s=Math.max(t.x??1,t.z??1,.5),o=Math.max(t.y??1,Math.min(t.x??1,t.z??1),.5);return i.repeat.set(Math.max(1,s*.72),Math.max(1,o*.72)),i.needsUpdate=!0,i}function Qg({kind:n,color:t,roughness:e=.78,metalness:i=.02,size:s}){const o=iP(n,t),r=o?sP(o,s):null;if(!r)return new Je({color:t,roughness:e,metalness:i});const a={wood:{roughness:.86,metalness:.02,bumpScale:.035},bark:{roughness:.93,metalness:.01,bumpScale:.048},roof:{roughness:.94,metalness:.03,bumpScale:.026},sandbag:{roughness:.98,metalness:0,bumpScale:.045},concrete:{roughness:.96,metalness:0,bumpScale:.034},crate:{roughness:.86,metalness:.01,bumpScale:.036},rock:{roughness:.98,metalness:.01,bumpScale:.052},metal:{roughness:.58,metalness:.42,bumpScale:.012}}[o]??{};return new Je({color:16777215,map:r,bumpMap:r,bumpScale:a.bumpScale??.02,roughness:a.roughness??e,metalness:a.metalness??i})}function oP(n,t){const e=n.toNonIndexed(),i=e.getAttribute("position");let s=1/0,o=-1/0;for(let c=0;c<i.count;c+=1){const l=i.getY(c);s=Math.min(s,l),o=Math.max(o,l)}const r=Math.max(o-s,1e-4),a=new Float32Array(i.count*3);for(let c=0;c<i.count;c+=3){const l=(i.getY(c)+i.getY(c+1)+i.getY(c+2))/3,u=j.clamp((l-s)/r,0,.9999),d=Math.min(t.length-1,Math.floor(u*t.length)),h=new Vt(t[d]);for(let f=c;f<c+3;f+=1)a[f*3]=h.r,a[f*3+1]=h.g,a[f*3+2]=h.b}return e.setAttribute("color",new cn(a,3)),e}function tv(n,t,e,i,s){return oP(new td(n,t,e,i),s)}function ev({roughness:n=.6,metalness:t=.03}={}){return new Je({vertexColors:!0,roughness:n,metalness:t})}function nv(n=vg){const t=new He,e=[-1,1].map(i=>{const s=new He;return s.position.x=i*Lh,vd.forEach(o=>{const r=new Nt(new Pn(o.size.x,o.size.y,o.size.z),new Je({color:n[o.key]??o.color,roughness:.78,metalness:.08}));r.position.set(o.position.x,o.position.y,o.position.z),r.castShadow=!0,r.receiveShadow=!0,s.add(r)}),t.add(s),{side:i,group:s,baseX:i*Lh,offsetX:0,offsetY:0,offsetZ:0}});return{root:t,feet:e,phase:0}}function Sa(n){return new w(Math.sin(n),0,Math.cos(n)).normalize()}function iv(n){return new w(Math.cos(n),0,-Math.sin(n)).normalize()}function Ma(n){return(n==null?void 0:n.surfaceNormal)??sr}function sv(n){var i,s;const t=((s=(i=n==null?void 0:n.group)==null?void 0:i.rotation)==null?void 0:s.y)??0,e=Vg.copy(Ma(n)).normalize();return qn.copy(Sa(t)),qn.addScaledVector(e,-qn.dot(e)),qn.lengthSq()<Xt&&qn.set(0,0,1).addScaledVector(e,-e.z),qn.lengthSq()<Xt&&qn.set(1,0,0).addScaledVector(e,-e.x),qn.normalize(),Lu.crossVectors(e,qn).normalize(),qn.crossVectors(Lu,e).normalize(),nl.makeBasis(Lu,e,qn),FC.setFromRotationMatrix(nl)}function sa(n){if(!(n!=null&&n.body)||!n.group)return;const t=sv(n);n.body.quaternion.set(t.x,t.y,t.z,t.w),n.body.angularVelocity.set(0,0,0),n.body.aabbNeedsUpdate=!0,n.visualRoot&&(zm.setFromAxisAngle(sr,n.group.rotation.y).invert(),Nm.copy(zm).multiply(t),n.visualRoot.quaternion.copy(Nm))}function il(n){var t,e;!(n!=null&&n.body)||!n.boots||!n.bootShapeBindings||(n.bootShapeBindings.forEach(i=>{const s=n.boots.feet.find(c=>c.side===i.side),o=n.body.shapeOffsets[i.shapeIndex],r=n.body.shapeOrientations[i.shapeIndex];if(!s||!o)return;const a=$b.set(i.part.position.x,i.part.position.y,i.part.position.z).applyQuaternion(s.group.quaternion);o.set(s.baseX+s.offsetX+a.x,s.offsetY+a.y-or,s.offsetZ+a.z),r==null||r.set(s.group.quaternion.x,s.group.quaternion.y,s.group.quaternion.z,s.group.quaternion.w)}),(e=(t=n.body).updateBoundingRadius)==null||e.call(t),n.body.aabbNeedsUpdate=!0)}function Vm(n){var t;n!=null&&n.boots&&(n.boots.phase=0,(t=n.bootMoveDirection)==null||t.set(0,0,0),n.boots.feet.forEach(e=>{e.offsetX=0,e.offsetY=0,e.offsetZ=0,e.group.position.set(e.baseX,0,0),e.group.rotation.set(0,0,0)}),il(n))}function Ac(n,t){if(!(n!=null&&n.boots)||!n.body)return;const e=n.alive?Math.hypot(n.body.velocity.x,n.body.velocity.z):0,i=n.bootMoveDirection??new w(n.body.velocity.x,0,n.body.velocity.z),s=i.lengthSq()>.001,o=e>.16&&s;let r=0,a=0;if(s){const m=i.clone().normalize();r=m.dot(Sa(n.group.rotation.y)),a=m.dot(iv(n.group.rotation.y))}const c=Math.abs(r),l=Math.abs(a),u=r<-.2?-1:1,d=Math.sign(a)||0,h=o&&l>.68&&c<.32,f=o&&l>.26&&c>.34,p=o&&r<-.34,v=h?.72:f?1.08:1,g=n.bootAnimationSpeedMultiplier??1;o&&(n.boots.phase+=t*j.clamp(e*5.4*v,3.4,11.6)*g),n.boots.feet.forEach(m=>{let _=0,y=0,x=0,C=0,b=0,P=0;if(o){const S=Math.sin(n.boots.phase+(m.side>0?Math.PI:0));y=Math.max(0,S)*RR,h?(_=S*hm*d,x=0,b=d*PR,P=-d*LR*Math.max(.2,Math.abs(S))):(x=S*bR*u,_=S*hm*.45*d*Math.min(1,l*1.35),f&&(b=(p?-d:d)*CR,C=p?j.degToRad(4)*Math.max(0,-S):j.degToRad(-4)*Math.max(0,S)))}const L=o?1:1-Math.pow(4e-4,t),E=1-Math.pow(o?8e-5:4e-4,t);m.offsetX=j.lerp(m.offsetX,_,L),m.offsetY=j.lerp(m.offsetY,y,L),m.offsetZ=j.lerp(m.offsetZ,x,L),m.group.position.set(m.baseX+m.offsetX,m.offsetY,m.offsetZ),m.group.rotation.x=j.lerp(m.group.rotation.x,C,E),m.group.rotation.y=j.lerp(m.group.rotation.y,b,E),m.group.rotation.z=j.lerp(m.group.rotation.z,P,E)}),sa(n),il(n)}function rP(n){const t=n.getAttribute("position"),e=new Float32Array(t.count*2);for(let i=0;i<t.count;i+=1)e[i*2]=(t.getX(i)+$c)/fi,e[i*2+1]=(t.getY(i)+$c)/fi;n.setAttribute("uv",new cn(e,2))}function aP(){const n=document.createElement("canvas");n.width=512,n.height=512;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,n.width,n.height);e.addColorStop(0,"#5a6644"),e.addColorStop(.34,"#4b513b"),e.addColorStop(.7,"#373729"),e.addColorStop(1,"#24241c"),t.fillStyle=e,t.fillRect(0,0,n.width,n.height);for(let s=28;s<n.height;s+=38+Math.random()*18)t.strokeStyle=`rgba(24, 24, 18, ${.22+Math.random()*.18})`,t.lineWidth=2+Math.random()*3,t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(n.width*.28,s-10+Math.random()*20,n.width*.72,s-10+Math.random()*20,n.width,s+Math.random()*6),t.stroke();for(let s=0;s<340;s+=1){const o=Math.random()*n.width,r=Math.random()*n.height,a=Math.random()>.46?"214, 198, 138":"28, 30, 23";t.fillStyle=`rgba(${a}, ${.035+Math.random()*.08})`,t.beginPath(),t.ellipse(o,r,1+Math.random()*6,.7+Math.random()*3.8,Math.random()*Math.PI,0,Math.PI*2),t.fill()}const i=new nr(n);return i.wrapS=Oi,i.wrapT=Oi,i.repeat.set(7,3),i.colorSpace=Xe,i}function Nu(n){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d"),s=256/2,o=n*91.733,r=u=>{const d=Math.sin(o+u*47.123)*43758.5453;return d-Math.floor(d)};i.clearRect(0,0,256,256),i.globalCompositeOperation="source-over";const a=i.createRadialGradient(s,s,2,s,s,256*.5);a.addColorStop(0,`rgba(220, 252, 255, ${.18+n*.05})`),a.addColorStop(.48,"rgba(170, 230, 255, 0.08)"),a.addColorStop(1,"rgba(170, 230, 255, 0)"),i.fillStyle=a,i.fillRect(0,0,256,256),i.lineCap="round",i.lineJoin="round",i.shadowColor="rgba(190, 245, 255, 0.7)",i.shadowBlur=7;const c=4+n*3;for(let u=0;u<c;u+=1){const d=Math.PI*2*u/c+(r(u)-.5)*.7,h=256*(.15+n*.09+r(u+30)*.12),f=(r(u+60)-.5)*.55;i.beginPath(),i.moveTo(s,s);const p=h*(.45+r(u+90)*.18);i.lineTo(s+Math.cos(d+f*.45)*p,s+Math.sin(d+f*.45)*p),i.lineTo(s+Math.cos(d+f)*h,s+Math.sin(d+f)*h),i.strokeStyle="rgba(230, 253, 255, 0.88)",i.lineWidth=Math.max(1.2,3.2-n*.45),i.stroke();const v=n+1;for(let g=0;g<v;g+=1){const m=h*(.26+r(u*13+g)*.42),_=d+(r(u*19+g+7)>.5?1:-1)*(.48+r(u+g+16)*.55),y=h*(.18+r(u*17+g+21)*.22),x=s+Math.cos(d+f*.25)*m,C=s+Math.sin(d+f*.25)*m;i.beginPath(),i.moveTo(x,C),i.lineTo(x+Math.cos(_)*y,C+Math.sin(_)*y),i.strokeStyle="rgba(210, 245, 255, 0.62)",i.lineWidth=1.1,i.stroke()}}i.shadowBlur=0,i.strokeStyle="rgba(80, 170, 190, 0.34)",i.lineWidth=1,i.beginPath(),i.arc(s,s,256*(.045+n*.018),0,Math.PI*2),i.stroke();const l=new nr(e);return l.colorSpace=Xe,l}function vs({create:n=!0}={}){var e;const t=window.AudioContext||window.webkitAudioContext;return!t||!En&&!n?null:(En||(En=new t),En.state==="suspended"&&((e=navigator.userActivation)!=null&&e.isActive)&&En.resume().catch(()=>{}),En)}function ov(){(En==null?void 0:En.state)==="suspended"&&En.resume().catch(()=>{})}function Pd(){var n;return vs({create:!!(En||(n=navigator.userActivation)!=null&&n.isActive)})}function $t({frequency:n,endFrequency:t=n,type:e="sine",duration:i=.1,volume:s=.08,when:o=0}){const r=Pd();if(!r)return;const a=r.currentTime+o,c=r.createOscillator(),l=r.createGain();c.type=e,c.frequency.setValueAtTime(n,a),c.frequency.exponentialRampToValueAtTime(Math.max(1,t),a+i),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(s,a+Math.min(.012,i*.25)),l.gain.exponentialRampToValueAtTime(1e-4,a+i),c.connect(l).connect(r.destination),c.start(a),c.stop(a+i+.02)}function ze({duration:n=.08,volume:t=.08,filterType:e="highpass",frequency:i=900,when:s=0}){const o=Pd();if(!o)return;const r=o.currentTime+s,a=o.createBuffer(1,Math.floor(o.sampleRate*n),o.sampleRate),c=a.getChannelData(0);for(let h=0;h<c.length;h+=1){const f=h/c.length;c[h]=(Math.random()*2-1)*Math.pow(1-f,1.8)}const l=o.createBufferSource(),u=o.createBiquadFilter(),d=o.createGain();l.buffer=a,u.type=e,u.frequency.setValueAtTime(i,r),d.gain.setValueAtTime(1e-4,r),d.gain.exponentialRampToValueAtTime(t,r+Math.min(.01,n*.25)),d.gain.exponentialRampToValueAtTime(1e-4,r+n),l.connect(u).connect(d).connect(o.destination),l.start(r),l.stop(r+n)}function cP(n,t=3){const e=n.createBuffer(1,Math.floor(n.sampleRate*t),n.sampleRate),i=e.getChannelData(0);let s=0;for(let o=0;o<i.length;o+=1)s=s*.985+(Math.random()*2-1)*.015,i[o]=s+(Math.random()*2-1)*.08;return e}function lP(){const n=Pd();if(!n||Po)return;const t=n.createBufferSource();t.buffer=cP(n,4),t.loop=!0;const e=n.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(1180,n.currentTime),e.Q.setValueAtTime(.36,n.currentTime);const i=n.createBiquadFilter();i.type="highpass",i.frequency.setValueAtTime(95,n.currentTime);const s=n.createGain();s.gain.setValueAtTime(1e-4,n.currentTime),t.connect(i).connect(e).connect(s).connect(n.destination),t.start(),Po={source:t,gain:s,lowpass:e,phase:Math.random()*Math.PI*2}}function uP(n){if(n<=Ru)return 1;if(n>=Em)return 0;const t=(n-Ru)/(Em-Ru);return Math.pow(1-j.clamp(t,0,1),$2)}function hP(n){if(!n)return 1;const t=Math.hypot(R.group.position.x-n.x,R.group.position.z-n.z);return uP(t)}function rv(n,t){const i=(t?j.clamp(n,0,1.35):j.clamp(n,.18,1.35))*hP(t);return i<j2?0:i}function Qt(n,{intensity:t=1,pitch:e=1,position:i=null}={}){const s=rv(t,i);s<=0||(n==="player-shot"?($t({frequency:540*e,endFrequency:250*e,type:"sawtooth",duration:.12,volume:.075*s}),ze({duration:.07,volume:.07*s,filterType:"highpass",frequency:1100})):n==="enemy-shot"?($t({frequency:780*e,endFrequency:1160*e,type:"square",duration:.095,volume:.055*s}),ze({duration:.055,volume:.052*s,filterType:"highpass",frequency:1700})):n==="reload"?($t({frequency:210*e,endFrequency:160*e,type:"triangle",duration:.08,volume:.042*s}),ze({duration:.12,volume:.04*s,filterType:"bandpass",frequency:820}),$t({frequency:150*e,endFrequency:230*e,type:"sine",duration:.1,volume:.035*s,when:.14})):n==="weapon-empty"?$t({frequency:320*e,endFrequency:220*e,type:"square",duration:.045,volume:.03*s}):n==="alarm"?($t({frequency:760*e,endFrequency:760*e,type:"square",duration:.14,volume:.045*s}),$t({frequency:520*e,endFrequency:520*e,type:"square",duration:.14,volume:.04*s,when:.16}),ze({duration:.24,volume:.026*s,filterType:"bandpass",frequency:980})):n==="radio-sabotage"?($t({frequency:620*e,endFrequency:180*e,type:"sawtooth",duration:.18,volume:.05*s}),ze({duration:.18,volume:.046*s,filterType:"bandpass",frequency:1400}),$t({frequency:120*e,endFrequency:72*e,type:"triangle",duration:.16,volume:.035*s,when:.16})):n==="spot"?($t({frequency:360*e,endFrequency:620*e,type:"triangle",duration:.11,volume:.05*s}),$t({frequency:620*e,endFrequency:420*e,type:"sine",duration:.1,volume:.035*s,when:.08})):n==="ball-hit"?($t({frequency:250*e,endFrequency:145*e,type:"sine",duration:.08,volume:.055*s}),ze({duration:.055,volume:.038*s,filterType:"lowpass",frequency:900})):n==="ball-collision"?$t({frequency:155*e,endFrequency:105*e,type:"triangle",duration:.055,volume:.026*s}):n==="ball-explosion"?($t({frequency:96*e,endFrequency:42*e,type:"sawtooth",duration:.18,volume:.095*s}),$t({frequency:420*e,endFrequency:120*e,type:"triangle",duration:.12,volume:.035*s,when:.02}),ze({duration:.16,volume:.09*s,filterType:"lowpass",frequency:720})):n==="impact-static"?ze({duration:.09,volume:.07*s,filterType:"lowpass",frequency:560}):n==="impact-glass"?($t({frequency:1420*e,endFrequency:2320*e,type:"sine",duration:.11,volume:.042*s}),ze({duration:.06,volume:.034*s,filterType:"highpass",frequency:2600})):n==="enemy-damage"?($t({frequency:180*e,endFrequency:92*e,type:"triangle",duration:.11,volume:.075*s}),ze({duration:.045,volume:.04*s,filterType:"lowpass",frequency:700})):n==="player-damage"?($t({frequency:130*e,endFrequency:62*e,type:"sawtooth",duration:.16,volume:.09*s}),ze({duration:.075,volume:.055*s,filterType:"lowpass",frequency:520})):n==="shield-activate"?($t({frequency:360*e,endFrequency:820*e,type:"sine",duration:.16,volume:.06*s}),ze({duration:.08,volume:.028*s,filterType:"bandpass",frequency:1400})):n==="shield-hit"?($t({frequency:520*e,endFrequency:240*e,type:"triangle",duration:.1,volume:.06*s}),ze({duration:.055,volume:.032*s,filterType:"bandpass",frequency:980})):n==="shield-break"?($t({frequency:220*e,endFrequency:72*e,type:"sawtooth",duration:.16,volume:.07*s}),ze({duration:.12,volume:.055*s,filterType:"highpass",frequency:1800})):n==="enemy-death"?($t({frequency:120,endFrequency:48,type:"sawtooth",duration:.24,volume:.08*s}),ze({duration:.14,volume:.065*s,filterType:"lowpass",frequency:430})):n==="melee"?($t({frequency:110,endFrequency:70,type:"triangle",duration:.09,volume:.12*s}),ze({duration:.055,volume:.08*s,filterType:"lowpass",frequency:650})):n==="melee-swing"?($t({frequency:185*e,endFrequency:105*e,type:"sine",duration:.12,volume:.07*s}),ze({duration:.1,volume:.075*s,filterType:"bandpass",frequency:480})):n==="player-footstep"?($t({frequency:92*e,endFrequency:58*e,type:"triangle",duration:.055,volume:.032*s}),ze({duration:.04,volume:.026*s,filterType:"lowpass",frequency:420})):n==="enemy-footstep"?($t({frequency:74*e,endFrequency:48*e,type:"triangle",duration:.06,volume:.024*s}),ze({duration:.045,volume:.02*s,filterType:"lowpass",frequency:360})):n==="ambient-rustle"?(ze({duration:.32+Math.random()*.28,volume:.095*s,filterType:"bandpass",frequency:980+Math.random()*720}),$t({frequency:210*e,endFrequency:135*e,type:"sine",duration:.22,volume:.024*s})):n==="loot"?($t({frequency:520,endFrequency:860,type:"sine",duration:.13,volume:.07*s}),$t({frequency:780,endFrequency:1180,type:"sine",duration:.12,volume:.045*s,when:.055})):n==="win"?($t({frequency:420,endFrequency:560,duration:.12,volume:.06*s}),$t({frequency:620,endFrequency:840,duration:.14,volume:.06*s,when:.08}),$t({frequency:920,endFrequency:1240,duration:.18,volume:.055*s,when:.18})):n==="loss"?($t({frequency:260,endFrequency:150,type:"sawtooth",duration:.18,volume:.07*s}),$t({frequency:150,endFrequency:70,type:"triangle",duration:.22,volume:.055*s,when:.14})):n==="player-death"?($t({frequency:220,endFrequency:82,type:"triangle",duration:.55,volume:.09*s}),$t({frequency:146,endFrequency:64,type:"sine",duration:.7,volume:.055*s,when:.08}),ze({duration:.22,volume:.035*s,filterType:"lowpass",frequency:360})):n==="ui-start"?$t({frequency:430,endFrequency:660,duration:.09,volume:.045*s}):n==="ui-pause"?$t({frequency:330,endFrequency:230,duration:.06,volume:.035*s}):n==="ui-resume"&&$t({frequency:360,endFrequency:520,duration:.07,volume:.035*s}))}function dP(n=null){var u;const t=vs({create:!!((u=navigator.userActivation)!=null&&u.isActive)});if(!t)return;const e=rv(1,n);if(e<=0)return;const i=t.currentTime,s=.34,o=t.createBuffer(1,Math.floor(t.sampleRate*s),t.sampleRate),r=o.getChannelData(0);for(let d=0;d<r.length;d+=1){const h=d/r.length;r[d]=(Math.random()*2-1)*Math.pow(1-h,2.8)}const a=t.createBufferSource();a.buffer=o;const c=t.createBiquadFilter();c.type="highpass",c.frequency.setValueAtTime(950,i),c.frequency.exponentialRampToValueAtTime(3200,i+s);const l=t.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.34*e,i+.012),l.gain.exponentialRampToValueAtTime(1e-4,i+s),a.connect(c).connect(l).connect(t.destination),a.start(i),a.stop(i+s),[860,1320,2460].forEach((d,h)=>{const f=t.createOscillator(),p=t.createGain();f.type=h===0?"triangle":"sine",f.frequency.setValueAtTime(d,i),f.frequency.exponentialRampToValueAtTime(d*1.55,i+.12),p.gain.setValueAtTime(1e-4,i),p.gain.exponentialRampToValueAtTime(.09*e/(h+1),i+.008),p.gain.exponentialRampToValueAtTime(1e-4,i+.18+h*.04),f.connect(p).connect(t.destination),f.start(i),f.stop(i+.24+h*.04)})}function Ld(){F.ambientRustleTimer=j.randFloat(Q2,tC)}function fP(n){if(!En||!Po)return;ov();const t=En.currentTime,e=we(),i=.82+Math.sin(Yo.elapsedTime*.23+Po.phase)*.24,s=e?J2*i:.006;Po.gain.gain.setTargetAtTime(s,t,.55),Po.lowpass.frequency.setTargetAtTime(950+Math.sin(Yo.elapsedTime*.17)*220,t,1),we()&&(F.ambientRustleTimer-=n,F.ambientRustleTimer<=0&&(Qt("ambient-rustle",{intensity:j.randFloat(1.05,1.35),pitch:j.randFloat(.86,1.14)}),Ld()))}function pP({position:n,size:t,color:e,kind:i="cover",roughness:s=.78,metalness:o=.02}){const r=new Pn(t.x,t.y,t.z),a=Qg({kind:i,color:e,roughness:s,metalness:o,size:t}),c=new Nt(r,a);return c.position.set(n.x,n.y,n.z),c.castShadow=!0,c.receiveShadow=!0,Pt.add(c),c}function mP(n){return typeof n=="string"&&(n.includes("cover")||n.includes("sandbag"))}function av({position:n,size:t,kind:e}){if(!mP(e))return;const i=new w(n.x,0,n.z);[new w(t.x/2+.72,0,0),new w(-t.x/2-.72,0,0),new w(0,0,t.z/2+.72),new w(0,0,-t.z/2-.72)].forEach(o=>{const r=i.clone().add(o);Gi(r.x,r.z,1.2)&&qg.push({position:r,kind:e})})}function cv(n){var e;const t=(e=n==null?void 0:n.shapes)==null?void 0:e[0];return t!=null&&t.halfExtents?new w(t.halfExtents.x,t.halfExtents.y,t.halfExtents.z):null}function lv(n){return new w(n.position.x,n.position.y,n.position.z)}function Id(n){const t=cv(n.body);return t?{type:"box",center:lv(n.body),halfExtents:t}:null}function Ea(n){var t;return!(n.invisible||(t=n.body.userData)!=null&&t.invisible)}function Sl(n,t,e,i=0){const s=Id(e);return s?m_(n,t,s.center,s.halfExtents,i):null}function gP(n,t,e,i=12,s=0){const o=new M(0,s,0);n.addShape(new ig(t,t,e,i),o),n.addShape(new Th(t),new M(0,s+e/2,0)),n.addShape(new Th(t),new M(0,s-e/2,0))}function uv(n,t,e,i=12){const s=[];return gP(n,t,e,i,DR),[-1,1].forEach(o=>{vd.forEach(r=>{const a=n.shapes.length;n.addShape(new Xi(new M(r.size.x/2,r.size.y/2,r.size.z/2)),new M(o*Lh+r.position.x,r.position.y-or,r.position.z)),s.push({side:o,partKey:r.key,part:r,shapeIndex:a})})}),s}function on({position:n,size:t,color:e,kind:i="cover",roughness:s=.78,metalness:o=.02}){const r=pP({position:n,size:t,color:e,kind:i,roughness:s,metalness:o}),a=new lt({mass:0,material:di,position:new M(n.x,n.y,n.z),shape:new Xi(new M(t.x/2,t.y/2,t.z/2))});return a.userData={kind:i},Dt.addBody(a),Yi.push({mesh:r,body:a}),av({position:n,size:t,kind:i}),{mesh:r,body:a}}function vP({x:n,z:t,sx:e=1.6,sy:i=1,sz:s=1.4,color:o=7040351}){const r=new Pn(e,i,s),a=Qg({kind:"rock-cover",color:o,roughness:.95,metalness:.02,size:{x:e,y:i,z:s}}),c=new Nt(r,a);c.position.set(n,i/2,t),c.castShadow=!0,c.receiveShadow=!0,Pt.add(c);const l=new lt({mass:0,material:di,position:new M(n,i/2,t),shape:new Xi(new M(e/2,i/2,s/2))});return l.userData={kind:"rock-cover"},Dt.addBody(l),Yi.push({mesh:c,body:l}),av({position:{x:n,z:t},size:{x:e,z:s},kind:"rock-cover"}),{mesh:c,body:l}}function _P(n=10){const t=[],e=[],i=[],s=new Vt(2060076),o=new Vt(3316290),r=new Vt(8371544),a=new Vt(7058503);for(let l=0;l<=n;l+=1){const u=l/n,d=Math.max(.022,Math.sin(u*Math.PI)*(.42-u*.08)),h=u*1.92,f=Math.sin(u*Math.PI)*.05-u*u*.34,p=Math.sin(u*Math.PI*2)*.018,v=s.clone().lerp(o,Math.min(1,u*1.4)).lerp(r,Math.max(0,u-.72)/.28),g=v.clone().lerp(a,.32);[[p,f+.018,h,g],[p-d,f-.004,h+.025,v],[p+d,f-.004,h+.025,v]].forEach(([m,_,y,x])=>{t.push(m,_,y),e.push(x.r,x.g,x.b)})}for(let l=0;l<n;l+=1){const u=l*3,d=u+3;i.push(u,u+1,d+1,u,d+1,d,u,d,d+2,u,d+2,u+2)}const c=new _e;return c.setAttribute("position",new Gt(t,3)),c.setAttribute("color",new Gt(e,3)),c.setIndex(i),c.computeVertexNormals(),c}function Gm(n,{yaw:t,pitch:e,roll:i=0,scale:s=1,lengthScale:o=1,widthScale:r=1,y:a=0}){const c=new He;c.position.y=a,c.rotation.set(e,t,i);const l=new Nt(WC,XC);l.scale.set(s*r,s,s*o),l.castShadow=!1,l.receiveShadow=!1,c.add(l);const u=new Nt($g,jg);return u.position.set(0,.018*s,.91*s*o),u.scale.set(s*.82,s*1.78*o,s*.82),c.add(u),n.add(c),c}function xP(n,t){[[-.1,-.11,.08,1],[.08,-.12,.13,.92],[.02,-.18,-.04,.85],[.16,-.08,-.02,.76]].forEach(([e,i,s,o])=>{const r=new Nt(qC,YC);r.position.set(e*t,i*t,s*t),r.scale.setScalar(t*o),n.add(r)})}function yP({x:n,z:t,scale:e=1,color:i=2916149}){const s=new He,o=n*.31+t*.77;s.position.set(n,0,t),s.rotation.y=ve(o)*Math.PI*2,s.frustumCulled=!1;const r=new Vt(i);for(let a=0;a<4;a+=1){const c=new Nt(new id(.58,0),Hm[a%Hm.length]),l=a/4*Math.PI*2+ve(o+a*19)*.45,u=(a===0?0:.2+ve(o+a*23)*.16)*e;c.position.set(Math.cos(l)*u,(.28+ve(o+a*31)*.09)*e,Math.sin(l)*u),c.rotation.set(ve(o+a*37)*.22,ve(o+a*41)*Math.PI*2,ve(o+a*43)*.22),c.scale.set((.9+ve(o+a*47)*.38)*e,(.42+ve(o+a*53)*.2)*e,(.72+ve(o+a*59)*.32)*e),c.material=c.material.clone(),c.material.color.copy(r).lerp(new Vt(c.material.color),.5),s.add(c)}return Pt.add(s),Zg+=1,s}function SP({x:n,z:t,scale:e=1}){const i=1.52*e*1.3333333333333333,s=.24*e;on({position:{x:n,y:i/2,z:t},size:{x:s,y:i,z:s},color:7297845,kind:"tree-trunk",roughness:.9});const o=new He;o.position.set(n,i+.2*e,t);for(let a=0;a<10;a+=1){const c=Math.PI*2*a/10,l=(a%2?1:-1)*(.08+ve(n+t+a*7)*.08);Gm(o,{yaw:c,pitch:-.66+ve(n*.13+t*.19+a)*.14,roll:l,scale:e,lengthScale:1.05+ve(n*.07+t*.11+a*3)*.24,widthScale:.9+ve(n*.17+t*.23+a*5)*.22})}for(let a=0;a<6;a+=1)Gm(o,{yaw:Math.PI*2*(a+.5)/6,pitch:-.34+ve(n*.29+t*.31+a)*.1,roll:(a%2?-1:1)*.06,scale:e,lengthScale:.68+ve(n*.37+t*.41+a)*.16,widthScale:.82,y:.07*e});const r=new Nt(new qi(.22*e,14,8),jg);return r.scale.set(1.08,.55,1.08),r.position.y=-.03*e,o.add(r),xP(o,e),Pt.add(o),Kg+=1,o}function MP({x:n,z:t,sx:e=8,sz:i=5,rotation:s=0}){const o=new Nt(new Qs(1,28),new Ie({color:12103015,transparent:!0,opacity:.58,depthWrite:!1}));return o.position.set(n,.011,t),o.rotation.set(-Math.PI/2,0,s),o.scale.set(e,i,1),o.renderOrder=1,Pt.add(o),o}function EP({x:n,z:t,sx:e=8,sz:i=5,height:s=1,color:o=3769400}){const r=new Nt(new qi(1,18,8),new Ie({color:o,transparent:!0,opacity:.72}));return r.position.set(n,-s*.42,t),r.scale.set(e,s,i),r.rotation.y=ve(n*.13+t*.37)*Math.PI,r.renderOrder=0,Pt.add(r),r}function bo({x:n,z:t,length:e=5,axis:i="x"}){const s=Math.max(2,Math.round(e/.8)),o=e/s;for(let r=0;r<s;r+=1){const a=-e/2+o*(r+.5);on({position:{x:i==="x"?n+a:n,y:.25,z:i==="z"?t+a:t},size:{x:i==="x"?o*.92:.72,y:.5,z:i==="z"?o*.92:.72},color:9273432,kind:"sandbag-cover",roughness:.96})}}function wP(n,t){[-.72,.72].forEach(i=>{[-.72,.72].forEach(s=>{on({position:{x:n+i,y:1.4,z:t+s},size:{x:.18,y:2.8,z:.18},color:6968370,kind:"watchtower-post",roughness:.82})})}),on({position:{x:n,y:1.64,z:t},size:{x:2.2,y:.2,z:2.2},color:5916717,kind:"watchtower-platform",roughness:.84}),on({position:{x:n,y:2.35,z:t},size:{x:2.6,y:.16,z:2.6},color:3946539,kind:"watchtower-roof",roughness:.9}),bo({x:n,z:t-1.18,length:2.4,axis:"x"})}function Wm({x:n,z:t,width:e=4.6,depth:i=3.6}){on({position:{x:n,y:.12,z:t},size:{x:e,y:.24,z:i},color:7100215,kind:"hut-floor"}),on({position:{x:n,y:1.35,z:t-i/2},size:{x:e,y:1.9,z:.22},color:7297591,kind:"hut-wall"}),on({position:{x:n-e/2,y:1.15,z:t},size:{x:.22,y:1.6,z:i},color:7297591,kind:"hut-wall"}),on({position:{x:n+e/2,y:1.15,z:t},size:{x:.22,y:1.6,z:i},color:7297591,kind:"hut-wall"}),on({position:{x:n,y:2.08,z:t},size:{x:e+.5,y:.22,z:i+.7},color:3946540,kind:"hut-roof",roughness:.92})}function AP(n,t){on({position:{x:n,y:2.5,z:t},size:{x:.18,y:5,z:.18},color:3225135,kind:"radio-mast",roughness:.55,metalness:.35}),on({position:{x:n,y:4.65,z:t},size:{x:1.5,y:.08,z:.08},color:3225135,kind:"radio-mast-crossbar",roughness:.55,metalness:.35})}function TP(n=sR){const t=on({position:{x:n.x,y:.42,z:n.z},size:{x:.78,y:.84,z:.5},color:3093807,kind:"radio-terminal",roughness:.56,metalness:.2}),e=new Je({color:4575676,emissive:1759429,emissiveIntensity:.9,roughness:.32,metalness:.05}),i=new Nt(new Pn(.48,.28,.035),e);i.position.set(n.x,.64,n.z-.27),i.rotation.x=-.18,i.castShadow=!0,Pt.add(i);const s=new Nt(new Wi(.018,.018,.72,8),new Je({color:3225135,roughness:.5,metalness:.35}));s.position.set(n.x+.27,.98,n.z+.04),s.rotation.z=-.22,s.castShadow=!0,Pt.add(s);const o=new Ie({color:16765293,transparent:!0,opacity:.36,side:Ne}),r=new Nt(new ul(.72,.78,48),o);r.rotation.x=-Math.PI/2,r.position.set(n.x,.035,n.z),Pt.add(r),ya.push({type:"radio",id:"radio-link",disabled:!1,base:t.mesh,body:t.body,screen:i,screenMaterial:e,antenna:s,ring:r,ringMaterial:o,position:n.clone()})}function bP(){return new Qy({color:te.glass,emissive:2854819,emissiveIntensity:.28,transparent:!0,opacity:.34,roughness:.05,metalness:0,transmission:.45,thickness:.08,depthWrite:!1})}function Dd(n){const{localId:t,id:e,size:i}=n,s=t??e;return s==="front"?{normal:new w(0,0,1),tangent:new w(1,0,0),bitangent:new w(0,1,0),width:i.x,height:i.y,rotation:new ye(0,0,0),halfThickness:i.z/2}:s==="back"?{normal:new w(0,0,-1),tangent:new w(1,0,0),bitangent:new w(0,1,0),width:i.x,height:i.y,rotation:new ye(0,Math.PI,0),halfThickness:i.z/2}:s==="left"?{normal:new w(-1,0,0),tangent:new w(0,0,1),bitangent:new w(0,1,0),width:i.z,height:i.y,rotation:new ye(0,-Math.PI/2,0),halfThickness:i.x/2}:s==="right"?{normal:new w(1,0,0),tangent:new w(0,0,1),bitangent:new w(0,1,0),width:i.z,height:i.y,rotation:new ye(0,Math.PI/2,0),halfThickness:i.x/2}:{normal:new w(0,1,0),tangent:new w(1,0,0),bitangent:new w(0,0,1),width:i.x,height:i.z,rotation:new ye(-Math.PI/2,0,0),halfThickness:i.y/2}}function RP(n){const t=Dd(n),e=new Ie({map:Uh[1],transparent:!0,opacity:0,depthWrite:!1,side:Ne,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});e.toneMapped=!1;const i=new Nt(new ha(1,1),e);return i.position.copy(n.mesh.position).addScaledVector(t.normal,t.halfThickness+.018),i.rotation.copy(t.rotation),i.visible=!1,i.renderOrder=3,Pt.add(i),{mesh:i,material:e,basis:t,level:0}}function Nd(n,t){if(n.crack.level=t,t<=0||!n.alive){n.crack.mesh.visible=!1,n.crack.material.opacity=0;return}const e=aR[t]??1;n.crack.material.map=Uh[t]??Uh[3],n.crack.material.needsUpdate=!0,n.crack.material.opacity=.42+t*.13,n.crack.mesh.scale.set(n.crack.basis.width*e,n.crack.basis.height*e,1),n.crack.mesh.visible=!0}function zd(n,t=null){var e,i,s;return Os[n]?t&&Os[n].origin.copy(t):Os[n]={cubeIndex:n,origin:((e=t==null?void 0:t.clone)==null?void 0:e.call(t))??((s=(i=ug[n])==null?void 0:i.clone)==null?void 0:s.call(i))??new w,faces:[],balls:[],ballsActive:!1},Os[n]}function wa(n){return Os[n]??null}function CP(n){const t=wa(n==null?void 0:n.cubeIndex),e=rR[n==null?void 0:n.localId]??[];return!t||e.length===0?[]:e.map(i=>t.faces.find(s=>s.localId===i)).filter(Boolean)}function Ml(n){const t=wa(n);!t||t.ballsActive||(t.ballsActive=!0,t.balls.forEach(e=>{e.exploded||Dt.bodies.includes(e.body)||(e.settledStatic=!1,e.settleTimer=0,e.body.allowSleep=!0,e.body.sleepSpeedLimit=pa,e.body.sleepTimeLimit=ma,e.body.collisionResponse=!0,Dt.addBody(e.body),e.body.wakeUp())}))}function to(n){return!!(n!=null&&n.body&&Dt.bodies.includes(n.body))}function qm(n){return!n||n.exploded||n.explosionQueued||n.sinking||!to(n)?!1:(n.settledStatic=!0,n.settleTimer=0,n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),n.body.sleep(),Dt.removeBody(n.body),!0)}function Aa(n,t=!0){if(!n||n.exploded||n.sinking)return!1;const e=wa(n.cubeIndex);return e!=null&&e.ballsActive||Ml(n.cubeIndex),n.settledStatic=!1,n.settleTimer=0,n.body.allowSleep=!0,n.body.sleepSpeedLimit=pa,n.body.sleepTimeLimit=ma,n.body.collisionResponse=!0,to(n)||Dt.addBody(n.body),t&&n.body.wakeUp(),!0}function Xm(n,t){const e=Math.hypot(n.x,n.y,n.z);if(e<=t||e<Xt)return!1;const i=t/e;return n.x*=i,n.y*=i,n.z*=i,!0}function Vi(n,t,e){n&&(Xm(n.velocity,t),Xm(n.angularVelocity,e))}function PP({id:n,localId:t,cubeIndex:e,cubeOrigin:i=new w,position:s,size:o}){const r=i.clone(),a=zd(e,r),c=new Pn(o.x,o.y,o.z),l=bP(),u=new Nt(c,l);u.position.set(s.x,s.y,s.z),u.castShadow=!1,u.receiveShadow=!0;const d=new ll({color:te.glassEdge,transparent:!0,opacity:.72}),h=new Qh(new yy(c),d);u.add(h),Pt.add(u);const f=new lt({mass:0,material:di,position:new M(s.x,s.y,s.z),shape:new Xi(new M(o.x/2,o.y/2,o.z/2))});f.userData={kind:"glass",id:n,localId:t,cubeIndex:e,cubeOrigin:{x:r.x,y:r.y,z:r.z}},Dt.addBody(f);const p={id:n,localId:t,cubeIndex:e,cubeOrigin:r,mesh:u,body:f,material:l,edgeMaterial:d,size:new w(o.x,o.y,o.z),alive:!0,health:pl,sharedHalfDamage:!1,sharedBreakDamage:!1};return p.crack=RP(p),a.faces.push(p),xa.push(p),Yi.push({mesh:u,body:f,glassFace:p}),p}function LP(n=new w,t=0){zd(t,n);const e=Ys,i=hg,s=fa,o=Ys;[{id:"front",position:{x:n.x,y:n.y+e,z:n.z+o},size:{x:s,y:s,z:i}},{id:"back",position:{x:n.x,y:n.y+e,z:n.z-o},size:{x:s,y:s,z:i}},{id:"left",position:{x:n.x-o,y:n.y+e,z:n.z},size:{x:i,y:s,z:s}},{id:"right",position:{x:n.x+o,y:n.y+e,z:n.z},size:{x:i,y:s,z:s}}].forEach(r=>PP({id:`cube-${t+1}-${r.id}`,localId:r.id,cubeIndex:t,cubeOrigin:n,position:r.position,size:r.size}))}function hv(n){const t=n.health/pl;n.material.opacity=.14+t*.2,n.material.emissiveIntensity=.12+t*.18,n.edgeMaterial.opacity=.28+t*.44}function zu(n,t){CP(n).forEach(e=>{if(!e.alive)return;const i=Dd(e);dv(e,e.mesh.position.clone().addScaledVector(i.normal,i.halfThickness),i.normal,oR,{reason:t})})}function IP(n,t,e){n.alive&&(yI(n,t,e),dP(t??n.mesh.position),Ml(n.cubeIndex),n.alive=!1,n.health=0,Nd(n,0),Pt.remove(n.mesh),Dt.bodies.includes(n.body)&&Dt.removeBody(n.body))}function dv(n,t,e,i=1,s={}){if(!(n!=null&&n.alive))return!1;const o=Math.max(0,i);if(o<=0)return!1;const r=n.health;n.health=Math.max(0,n.health-o);const a=pl-n.health,c=r>rm&&n.health<=rm&&!n.sharedHalfDamage;if(c&&(n.sharedHalfDamage=!0),n.health<=0){const l=!n.sharedBreakDamage;n.sharedBreakDamage=!0,IP(n,t,e),c&&zu(n,"half-damage"),l&&zu(n,s.reason==="break-damage"?"linked-break-damage":"break-damage")}else Nd(n,Math.min(a,3)),hv(n),c&&zu(n,"half-damage");return!0}function DP(){xa.forEach(n=>{n.alive=!0,n.health=pl,n.sharedHalfDamage=!1,n.sharedBreakDamage=!1,Nd(n,0),hv(n),Dt.bodies.includes(n.body)||Dt.addBody(n.body),n.mesh.parent||Pt.add(n.mesh)})}function NP(n=new w){const t=[],e=Ar*(Math.sqrt(3)/2),i=Ar,s=Ge+.015,o=fa-Ge-.015,r=Ys-hg/2-Ge-.015,a=Math.floor(r*2/Ar)+1,c=Math.max(1,a-1),l=Math.floor(r*2/e)+1,u=Math.floor((o-s)/i)+1,d=-((l-1)*e)/2;for(let h=0;h<u&&t.length<am;h+=1){const f=[],p=s+h*i;for(let g=0;g<l;g+=1){const m=g%2===0?a:c,_=-((m-1)*Ar)/2,y=d+g*e;for(let x=0;x<m;x+=1)f.push(new w(n.x+_+x*Ar,n.y+p,n.z+y))}const v=am-t.length;v>=f.length?t.push(...f):(f.sort((g,m)=>{const _=g.x-n.x,y=g.z-n.z,x=m.x-n.x,C=m.z-n.z,b=_*_+y*y,P=x*x+C*C;return b-P}),t.push(...f.slice(0,v)))}return t}function zP(n,t,e){if(!Aa(n))return;const i=t.clone();i.y=0,i.lengthSq()<Xt&&i.set(1,0,0),i.normalize(),n.body.applyImpulse(new M(i.x*Cu,Cu*.18,i.z*Cu),new M(e.x,e.y,e.z)),Vi(n.body,Ko,Zo)}function UP(n,t,e){var a;if(!n||n.exploded||n.sinking)return!1;const i=e??new w(n.body.position.x,n.body.position.y,n.body.position.z),s=Math.max(i.distanceTo(t),.001);if(s>oi)return!1;const o=i.clone().sub(t);if(o.lengthSq()<Xt&&o.set(1,.15,0),o.normalize(),(a=wa(n.cubeIndex))!=null&&a.ballsActive||Ml(n.cubeIndex),!Aa(n))return!1;const r=j.clamp(1-s/oi,.25,1);return n.body.applyImpulse(new M(o.x*lm*r,MR*r,o.z*lm*r),new M(i.x,i.y,i.z)),Vi(n.body,Ko,Zo),!0}function fv(n){return!n||n.exploded||n.sinking||n.settledStatic||!to(n)||n.body.sleepState===lt.SLEEPING?!1:Math.hypot(n.body.velocity.x,n.body.velocity.y,n.body.velocity.z)>=fg}function FP(n){return!!(n&&!n.exploded&&!n.sinking&&!n.explosionQueued&&(n.settledStatic||!to(n)||n.body.sleepState===lt.SLEEPING))}function OP(n,t){if(!fv(n)||!FP(t))return!1;const e=n.body,i=t.body;let s=i.position.x-e.position.x,o=i.position.y-e.position.y,r=i.position.z-e.position.z;const a=Ph+ER;let c=s*s+o*o+r*r;if(c>a*a)return!1;let l=Math.sqrt(Math.max(c,Xt));l<Ge*.2&&(s=e.velocity.x,o=e.velocity.y,r=e.velocity.z,l=Math.sqrt(Math.max(s*s+o*o+r*r,Xt)));const u=s/l,d=o/l,h=r/l,f=e.velocity.x*u+e.velocity.y*d+e.velocity.z*h;if(f<fg||!Aa(t))return!1;const p=Ph+.002;l<p&&i.position.set(e.position.x+u*p,e.position.y+d*p,e.position.z+h*p),i.velocity.set(e.velocity.x*Eu,Math.max(e.velocity.y*Eu,wR),e.velocity.z*Eu);const v=f/Math.max(Ge,.001);return i.angularVelocity.x+=-h*v*.35,i.angularVelocity.y+=(i.userData.index%2===0?1:-1)*v*.08,i.angularVelocity.z+=u*v*.35,e.velocity.x-=u*f*wu,e.velocity.y-=d*f*wu,e.velocity.z-=h*f*wu,n.settleTimer=0,t.settleTimer=0,Vi(e,Ko,Zo),Vi(i,Ko,Zo),Qt("ball-collision",{intensity:j.clamp(f/4,.16,.8),pitch:.9+i.userData.index%7*.035,position:i.position}),!0}function BP(n){const t=n.balls.filter(fv);t.length!==0&&t.forEach(e=>{n.balls.forEach(i=>{i!==e&&OP(e,i)})})}function Ym(n,t,e,i){if(!n||!(t!=null&&t.alive))return!1;const{body:s}=n,o=e+Ge+AR,r=s.position.x-t.group.position.x,a=s.position.z-t.group.position.z;if(r*r+a*a>o*o)return!1;const c=t.group.position.y-Ge,l=t.group.position.y+i+Ge;return s.position.y>=c&&s.position.y<=l}function kP(n){if(!n||n.exploded||n.explosionQueued||n.sinking)return!1;const t=Ym(n,R,xl,ga),e=!t&&ge.some(i=>i.active&&Ym(n,i,Ed,Md));return!t&&!e?!1:(Aa(n),Ud(n),!0)}function El(n){if(!(n!=null&&n.mesh)||n.exploded)return;const t=n.explosionQueued?n.warningColor:n.color;n.mesh.setColorAt(n.instanceIndex,t),n.mesh.instanceColor&&(n.mesh.instanceColor.needsUpdate=!0)}function HP(n=new w,t=0){const e=zd(t,n),i=NP(n),s=new qi(Ge,12,8),o=new Ie({color:16777215});o.toneMapped=!1;const r=new I0(s,o,i.length);r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!1,Pt.add(r);const a=new Vt(pg),c=new Th(Ge),l=[];i.forEach((u,d)=>{const h=Hi.length,f=new lt({mass:cR,material:Qr,linearDamping:.095,angularDamping:.16,position:new M(u.x,u.y,u.z),shape:c});f.allowSleep=!0,f.sleepSpeedLimit=pa,f.sleepTimeLimit=ma,f.collisionFilterGroup=sm,f.collisionFilterMask=sm,f.userData={kind:"glass-ball",index:h,cubeIndex:t,lastCollisionSoundAt:-1/0},f.addEventListener("collide",v=>GP(f,v)),f.sleep();const p={body:f,spawn:u.clone(),color:a.clone(),mesh:r,instanceIndex:d,cubeIndex:t,health:dg,explosionTimer:0,warningColor:a.clone(),sinking:!1,exploded:!1,explosionQueued:!1,settledStatic:!1,settleTimer:0};Hi.push(p),l.push(p),e.balls.push(p),r.setColorAt(d,p.color)}),r.instanceColor&&(r.instanceColor.needsUpdate=!0),Nh.push({mesh:r,balls:l}),Fd()}function Ud(n){!n||n.exploded||n.explosionQueued||n.sinking||(n.explosionQueued=!0,n.explosionTimer=gg,n.warningColor.setHex(mg),El(n),!n.settledStatic&&to(n)&&n.body.wakeUp())}function VP(n,t){!n||n.exploded||n.explosionQueued||n.sinking||(n.health=Math.max(0,n.health-t),El(n),n.health<=0&&Ud(n))}function GP(n,t){var r,a,c;const e=t.body;if(!e)return;const i=(r=e.userData)==null?void 0:r.kind;if(i==="player"||i==="enemy"){Ud(Hi[n.userData.index]);return}const s=Math.abs(((c=(a=t.contact)==null?void 0:a.getImpactVelocityAlongNormal)==null?void 0:c.call(a))??0),o=Yo.elapsedTime;s<.7||o-km<.035||o-n.userData.lastCollisionSoundAt<.14||(n.userData.lastCollisionSoundAt=o,km=o,Qt("ball-collision",{intensity:j.clamp(s/4,.18,.85),pitch:.85+n.userData.index%7*.045,position:n.position}))}function Bc(n,t){const e=t.clone().sub(n);return e.y=0,e.lengthSq()<Xt&&e.set(1,0,0),e.normalize()}function WP(n,t,e,i){const s=new w(j.clamp(n.x,e.x-i.x,e.x+i.x),j.clamp(n.y,e.y-i.y,e.y+i.y),j.clamp(n.z,e.z-i.z,e.z+i.z));if(s.distanceToSquared(n)>t*t)return null;const o=s.clone().sub(n);return o.lengthSq()<Xt?o.set(1,0,0):o.normalize(),{point:s,normal:o}}function pv(n,t,e){if(!(n!=null&&n.alive))return null;const i=cv(n.body);if(!i)return null;const s=WP(t,e,lv(n.body),i);if(!s)return null;const o=Dd(n).normal;return Math.abs(s.normal.dot(o))<.15&&s.normal.copy(o),{type:"glass",glassFace:n,...s}}function qP(n){Pa(n,b2,R2);const t=R.group.position.clone(),e=R.alive&&en(n,t)<=oi,i=XL(n,oi,Tr,e);e&&!i&&ss({type:"player"},Tr,{kind:"explosion",origin:n,direction:Bc(n,t)}),ge.forEach(s=>{if(!s.active||!s.alive)return;const o=s.group.position.clone();en(n,o)<=oi&&ss({type:"enemy",enemy:s},Tr,{kind:"explosion",origin:n,direction:Bc(n,o)})}),xa.forEach(s=>{const o=pv(s,n,oi);o&&(cr({point:o.point,normal:o.normal,type:"glass"}),ss(o,Tr,{kind:"explosion",origin:n,point:o.point,direction:o.normal}))}),Hi.forEach(s=>{if(s.exploded||s.explosionQueued||s.sinking)return;const o=new w(s.body.position.x,s.body.position.y,s.body.position.z);o.distanceTo(n)<=oi&&ss({type:"glassBall",ball:s,point:o},Tr,{kind:"explosion",origin:n,point:o,direction:Bc(n,o)})}),cs.forEach(s=>{qI(s,n)})}function mv(n){if(!n||n.exploded)return;const t=new w(n.body.position.x,n.body.position.y,n.body.position.z);n.exploded=!0,n.explosionQueued=!1,n.explosionTimer=0,n.sinking=!1,n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),Dt.bodies.includes(n.body)&&Dt.removeBody(n.body),_I(t),Qt("ball-explosion",{intensity:1.1,pitch:.92+n.body.userData.index%5*.035,position:t}),qP(t)}function XP(){for(;Dh.length>0;)mv(Dh.shift())}function YP(n){Hi.forEach(t=>{if(!t.explosionQueued||t.exploded||t.sinking)return;t.explosionTimer=Math.max(0,t.explosionTimer-n);const e=gg-t.explosionTimer,i=Math.floor(e/TR);t.warningColor.setHex(i%2===0?mg:pg),El(t),t.explosionTimer<=0&&mv(t)})}function Fd(){Nh.length&&Nh.forEach(({mesh:n,balls:t})=>{t.forEach((e,i)=>{Rr.position.set(e.body.position.x,e.body.position.y,e.body.position.z),Rr.quaternion.set(e.body.quaternion.x,e.body.quaternion.y,e.body.quaternion.z,e.body.quaternion.w),Rr.scale.setScalar(e.exploded?0:1),Rr.updateMatrix(),n.setMatrixAt(i,Rr.matrix)}),n.instanceMatrix.needsUpdate=!0})}function KP(){Se.updateMatrixWorld(),Om.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),Gg.setFromProjectionMatrix(Om)}function ZP(n){return n?en(R.group.position,n.origin)<=SR?!0:(Iu.center.copy(n.origin),Iu.center.y=Ys,Gg.intersectsSphere(Iu)):!1}function $P(n){KP(),Os.forEach(t=>{if(!(t!=null&&t.ballsActive))return;const e=ZP(t);BP(t),t.balls.forEach(i=>{if(i.exploded)return;const{body:s}=i;if(i.settledStatic||!to(i)){kP(i);return}if(s.sleepSpeedLimit=e?pa:lR,s.sleepTimeLimit=e?ma:uR,!Gi(s.position.x,s.position.z,Ge*.3)&&!i.sinking?(s.allowSleep=!1,s.wakeUp()):i.sinking||(s.allowSleep=!0),!i.sinking&&(!Ta(s.position.x,s.position.z,Ge)||s.position.y<ki-Ge*2)&&(i.sinking=!0,s.allowSleep=!1,s.collisionResponse=!1,s.wakeUp()),i.sinking){if(s.position.y<=om){s.position.y=om,s.velocity.set(0,0,0),s.angularVelocity.set(0,0,0),s.sleep();return}s.velocity.x*=Math.pow(.42,n),s.velocity.z*=Math.pow(.42,n),s.velocity.y=Math.min(s.velocity.y,-1.55);return}if(s.sleepState===lt.SLEEPING){qm(i);return}Vi(s,Ko,Zo);const r=Math.abs(s.velocity.y),a=Math.hypot(s.velocity.x,s.velocity.y,s.velocity.z),c=Math.hypot(s.angularVelocity.x,s.angularVelocity.y,s.angularVelocity.z),l=a<=hR&&c<=dR,u=a<=mR&&r<=cm&&c<=gR;if(u&&!l){const h=Math.pow(xR,n),f=Math.pow(yR,n);s.velocity.x*=h,s.velocity.z*=h,r<=cm&&(s.velocity.y=0),s.angularVelocity.x*=f,s.angularVelocity.y*=f,s.angularVelocity.z*=f}l||u?i.settleTimer+=n:i.settleTimer=0;const d=u&&!l?e?vR:_R:e?fR:pR;if(i.settleTimer>=d){qm(i);return}s.velocity.y=Math.max(-8,s.velocity.y)})})}function jP(){Dh.length=0,Os.forEach(n=>{n&&(n.ballsActive=!1)}),Hi.forEach((n,t)=>{n.exploded=!1,n.explosionQueued=!1,n.explosionTimer=0,n.warningColor.copy(n.color),n.sinking=!1,n.health=dg,n.settledStatic=!1,n.settleTimer=0,El(n),n.body.allowSleep=!0,n.body.sleepSpeedLimit=pa,n.body.sleepTimeLimit=ma,n.body.collisionResponse=!0,Dt.bodies.includes(n.body)&&Dt.removeBody(n.body);const e=t%7*.003;n.body.position.set(n.spawn.x+e,n.spawn.y,n.spawn.z-e),n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),n.body.quaternion.set(0,0,0,1),n.body.userData.lastCollisionSoundAt=-1/0,n.body.sleep()}),Fd()}function gv(n,t,e){const i=n/2,s=t/2,o=Math.min(e,i,s),r=new O0;return r.moveTo(-i+o,-s),r.lineTo(i-o,-s),r.absarc(i-o,-s+o,o,-Math.PI/2,0,!1),r.lineTo(i,s-o),r.absarc(i-o,s-o,o,0,Math.PI/2,!1),r.lineTo(-i+o,s),r.absarc(-i+o,s-o,o,Math.PI/2,Math.PI,!1),r.lineTo(-i,-s+o),r.absarc(-i+o,-s+o,o,Math.PI,Math.PI*1.5,!1),r.closePath(),r}function Km(n){return Fh(n,fi,Cn)}function Fh(n,t,e){const i=t/2,s=i-e,o=Math.abs(n);if(o<=s)return i;if(o>=i)return s;const r=o-s;return s+Math.sqrt(Math.max(0,e**2-r**2))}function oa(n,t,e,i,s=0){return Math.abs(n)<=Fh(t,e,i)-s&&Math.abs(t)<=Fh(n,e,i)-s}function vv(){return Cn*(An/Rn)}function Ta(n,t,e=0){return oa(n,t,An,vv(),e)}function Gi(n,t,e=0){return oa(n,t,fi,Cn,e)}function JP(n,t,e=0){return!Gi(n,t,e)&&Ta(n,t,e)}function Od(){return Math.max(Rn,An-ag*2)}function Bd(){return Math.max(1,vv()-ag)}function QP(n,t,e=0){const i=oa(n,t,Od(),Bd(),e),s=Rh+e;return!i&&n*n+t*t<=s*s}function tL(n,t){const e=An/Rn;if(oa(n,t,Rn,Cn))return 1;if(!Ta(n,t))return e;let i=1,s=e;for(let o=0;o<18;o+=1){const r=(i+s)/2;oa(n,t,Rn*r,Cn*r)?s=r:i=r}return s}function Le(n,t){if(Gi(n,t))return pi;const e=An/Rn,i=tL(n,t),s=j.clamp((i-1)/(e-1),0,1);return j.lerp(pi,ki,s)}function hs(n,t){const e=Jb,i=Le(n-e,t),s=Le(n+e,t),o=Le(n,t-e),r=Le(n,t+e);return Im.set(e*2,s-i,0),Dm.set(0,r-o,e*2),Vg.crossVectors(Dm,Im).normalize()}function _v(n,t,e=0){const i=Math.max(0,e);let s=Le(n,t);return i<=0||[[1,0],[-1,0],[0,1],[0,-1],[Math.SQRT1_2,Math.SQRT1_2],[-Math.SQRT1_2,Math.SQRT1_2],[Math.SQRT1_2,-Math.SQRT1_2],[-Math.SQRT1_2,-Math.SQRT1_2]].forEach(([o,r])=>{s=Math.max(s,Le(n+o*i,t+r*i))}),s}function kd(n,t,e){const i=_v(n.body.position.x,n.body.position.z,t);return n.body.position.y=i+e,n.body.velocity.y=0,n.surfaceY=i,n.surfaceNormal.copy(hs(n.body.position.x,n.body.position.z)),i}function eL(n){const t=new w(n.x,0,n.z);if(t.distanceTo(Yn)>=dm&&Gi(t.x,t.z,fm))return t;const e=t.clone().sub(Yn);e.y=0,e.lengthSq()<Xt&&e.set(1,0,-.35),e.normalize();const i=[0,-.45,.45,-.9,.9,-1.35,1.35,-Math.PI/2,Math.PI/2,Math.PI];for(const s of i){const o=Math.cos(s),r=Math.sin(s),a=new w(e.x*o-e.z*r,0,e.x*r+e.z*o).normalize(),c=Yn.clone().addScaledVector(a,dm);if(c.y=0,Gi(c.x,c.z,fm))return c}return new w(0,0,0)}function nL(n,t=0){let e=!1;for(let i=0;i<2;i+=1){const s=Math.max(0,Km(n.position.z)-t);Math.abs(n.position.x)>s&&(n.position.x=Math.sign(n.position.x||1)*s,n.velocity.x=0,e=!0);const o=Math.max(0,Km(n.position.x)-t);Math.abs(n.position.z)>o&&(n.position.z=Math.sign(n.position.z||1)*o,n.velocity.z=0,e=!0)}e&&n.wakeUp()}function xv(){return kd(R,us+.04,On)}function jn(n,t){return n.group.position.clone().addScaledVector(Ma(n),t)}function Zm(n){!n||!Dt.bodies.includes(n)||n.mass<=0||(n.force.y+=n.mass*-og)}function iL(){R.alive&&Zm(R.body),ge.forEach(n=>{n.active&&n.alive&&Zm(n.body)})}function sL(){ge.forEach(n=>{n.alive&&nL(n.body,Ks+.04)})}function ve(n){const t=Math.sin(n*127.1+311.7)*43758.5453123;return t-Math.floor(t)}function oL(){const n=[],t=fi/Sc;for(let o=0;o<Sc;o+=1)for(let r=0;r<Sc;r+=1){if((o+r)%2!==0)continue;const a=o*Sc+r+1,c=(ve(a)-.5)*t*.78,l=(ve(a+53)-.5)*t*.78,u=-$c+t*(r+.5)+c,d=-$c+t*(o+.5)+l;Gi(u,d,eR)&&n.push({x:u,z:d,rotation:ve(a+107)*Math.PI*2,scale:.72+ve(a+191)*.72})}const e=new ed(.24,.22,6,1),i=new Ie({color:3515707}),s=new I0(e,i,n.length);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,n.forEach((o,r)=>{Cr.position.set(o.x,.15,o.z),Cr.rotation.set(0,o.rotation,0),Cr.scale.set(.65*o.scale,.74+o.scale*.36,.65*o.scale),Cr.updateMatrix(),s.setMatrixAt(r,Cr.matrix)}),s.instanceMatrix.needsUpdate=!0,Yg=n.length,Pt.add(s)}function rL(){[{x:-58,z:56,sx:14,sz:8,rotation:.15},{x:-66,z:28,sx:8,sz:16,rotation:-.08},{x:-22,z:66,sx:18,sz:7,rotation:.03},{x:48,z:60,sx:16,sz:8,rotation:-.22},{x:66,z:14,sx:8,sz:15,rotation:.08},{x:58,z:-58,sx:15,sz:8,rotation:.18},{x:12,z:-66,sx:20,sz:7,rotation:-.04},{x:-56,z:-52,sx:12,sz:9,rotation:.28}].forEach(MP)}function aL(){[[-58,42,1.1],[-52,28,.9],[-44,52,1],[-34,42,.85],[-18,56,1.2],[-4,50,.9],[12,46,.95],[34,52,1.05],[54,38,.9],[60,8,1.15],[50,-8,.8],[52,-36,1],[38,-58,.92],[8,-58,1.12],[-18,-54,.9],[-46,-42,1],[-58,-18,.95],[-52,6,1.08],[-34,-2,.84],[-22,18,.9],[8,18,.75],[38,18,.9],[42,-26,.78],[-8,-28,.86]].forEach(([t,e,i])=>SP({x:t,z:e,scale:i}));for(let t=0;t<96;t+=1){const e=t+31,i=ve(e)*Math.PI*2,s=18+ve(e+91)*48,o=Math.cos(i)*s+(ve(e+7)-.5)*18,r=Math.sin(i)*s+(ve(e+13)-.5)*18;Gi(o,r,4)&&(Math.abs(o-20)<18&&Math.abs(r+22)<18||yP({x:o,z:r,scale:.65+ve(e+17)*.9,color:ve(e+29)>.45?3116857:2519857}))}}function cL(){[{x:-42,z:26,sx:13,sz:7,height:1.25},{x:-44,z:-12,sx:11,sz:8,height:1.05},{x:-18,z:-42,sx:14,sz:6,height:1.1},{x:40,z:-48,sx:15,sz:7,height:1.2},{x:54,z:-22,sx:9,sz:12,height:1.05},{x:46,z:22,sx:11,sz:10,height:1.15},{x:16,z:28,sx:13,sz:6,height:.95}].forEach(EP),[{x:-50,z:30,sx:3.8,sy:1.45,sz:2.2},{x:-58,z:58,sx:2.6,sy:1.1,sz:3.4},{x:-28,z:30,sx:2.9,sy:1.15,sz:2.4},{x:-48,z:-8,sx:3.4,sy:1.25,sz:2.8},{x:-38,z:-18,sx:2.7,sy:1,sz:3},{x:-22,z:-42,sx:3,sy:1.15,sz:2.6},{x:4,z:-52,sx:3.5,sy:1.25,sz:2.4},{x:42,z:-50,sx:4.2,sy:1.4,sz:2.8},{x:56,z:-28,sx:2.6,sy:1,sz:3.4},{x:54,z:12,sx:3.6,sy:1.35,sz:2.8},{x:42,z:32,sx:2.8,sy:1.1,sz:3.2},{x:18,z:30,sx:2.7,sy:1.05,sz:2.8}].forEach(vP)}function lL(){Wm({x:14,z:-22,width:6,depth:4.2}),Wm({x:29,z:-24,width:5.2,depth:4}),wP(19,-4),AP(9,-12),TP(),bo({x:4,z:-13,length:7,axis:"x"}),bo({x:31,z:-10,length:6,axis:"x"}),bo({x:4,z:-34,length:7.5,axis:"x"}),bo({x:36,z:-34,length:5.5,axis:"z"}),bo({x:18,z:-42,length:9,axis:"x"}),[{x:20,z:-16,sx:2.6,sz:1.2,y:.82,c:te.crate},{x:27,z:-18,sx:1.2,sz:2.8,y:.92,c:te.crate},{x:11,z:-31,sx:3.2,sz:1.2,y:.82,c:te.crate},{x:25,z:-36,sx:3,sz:1.2,y:.82,c:te.crate},{x:36,z:-23,sx:1.2,sz:3,y:.9,c:te.concrete},{x:-2,z:-21,sx:1.2,sz:3.4,y:1,c:te.concrete},{x:43,z:-2,sx:4.6,sz:1.1,y:.78,c:te.crate},{x:-14,z:-8,sx:4.2,sz:1.1,y:.78,c:te.crate},{x:-26,z:-34,sx:1.2,sz:4,y:1,c:te.concrete},{x:53,z:-45,sx:4.8,sz:1.1,y:.78,c:te.crate}].forEach(n=>{on({position:{x:n.x,y:n.y/2,z:n.z},size:{x:n.sx,y:n.y,z:n.sz},color:n.c,kind:"outpost-cover"})})}function uL(){return new Fn({side:fn,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vWorldDirection;

      void main() {
        vWorldDirection = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vWorldDirection;

      float ridgeNoise(float angle, float seed) {
        return
          sin(angle + seed) * 0.46 +
          sin(angle * 2.0 + seed * 1.37) * 0.25 +
          sin(angle * 5.0 + seed * 2.13) * 0.15 +
          sin(angle * 9.0 + seed * 0.73) * 0.08;
      }

      float cloudBand(float angle, float y, float center, float width, float seed) {
        float waves =
          sin(angle * 7.0 + seed) * 0.58 +
          sin(angle * 13.0 + seed * 1.61) * 0.31 +
          sin(angle * 23.0 + seed * 0.87) * 0.16;
        float shape = smoothstep(0.05, 0.82, waves);
        float band = exp(-pow((y - center) / width, 2.0));
        return shape * band;
      }

      void main() {
        vec3 direction = normalize(vWorldDirection);
        float y = direction.y;
        float angle = atan(direction.z, direction.x);
        float skyT = clamp(y * 0.88 + 0.46, 0.0, 1.0);
        vec3 horizon = vec3(0.83, 0.94, 0.99);
        vec3 zenith = vec3(0.32, 0.66, 0.95);
        vec3 color = mix(horizon, zenith, skyT);

        float lowHaze = 1.0 - smoothstep(-0.08, 0.22, y);
        color = mix(color, vec3(0.92, 0.97, 0.98), lowHaze * 0.34);

        float farRidge = 0.045 + 0.055 * (0.55 + abs(ridgeNoise(angle, 1.15)));
        float midRidge = 0.018 + 0.072 * (0.5 + abs(ridgeNoise(angle + 0.58, 3.7)));
        float nearRidge = -0.005 + 0.082 * (0.48 + abs(ridgeNoise(angle + 1.26, 7.9)));
        float mountainBase = smoothstep(-0.17, -0.035, y);
        float farMask = mountainBase * (1.0 - smoothstep(farRidge - 0.008, farRidge + 0.014, y));
        float midMask = mountainBase * (1.0 - smoothstep(midRidge - 0.01, midRidge + 0.016, y));
        float nearMask = mountainBase * (1.0 - smoothstep(nearRidge - 0.012, nearRidge + 0.018, y));

        color = mix(color, vec3(0.49, 0.62, 0.63), farMask * 0.22);
        color = mix(color, vec3(0.35, 0.50, 0.47), midMask * 0.2);
        color = mix(color, vec3(0.23, 0.37, 0.32), nearMask * 0.18);

        float cloud =
          cloudBand(angle, y, 0.44, 0.105, 1.2) * 0.42 +
          cloudBand(angle, y, 0.27, 0.085, 3.9) * 0.36 +
          cloudBand(angle, y, 0.12, 0.065, 6.1) * 0.28;
        color = mix(color, vec3(1.0, 1.0, 0.98), clamp(cloud, 0.0, 0.62));

        float horizonMist = 1.0 - smoothstep(-0.02, 0.12, y);
        color = mix(color, vec3(0.9, 0.96, 0.98), horizonMist * 0.16);

        gl_FragColor = vec4(color, 1.0);
      }
    `})}function hL(){const n=new Nt(new qi(fl,96,48),uL());n.frustumCulled=!1,n.renderOrder=-1e3,zh=n,Pt.add(n),pL(),SL()}function dL(n,t,e,i){const s=Math.sin(n*2+t)*.42+Math.sin(n*5+t*1.7)*.28+Math.sin(n*9+t*.63)*.18+Math.sin(n*17+t*2.1)*.1,o=j.clamp((s+.98)/1.96,0,1);return e+Math.pow(o,1.28)*i}function fL({radius:n,baseY:t,minHeight:e,heightRange:i,seed:s}){const o=[],r=[];for(let c=0;c<=is;c+=1){const l=c/is*Math.PI*2,u=Math.cos(l)*n,d=Math.sin(l)*n,h=t+dL(l,s,e,i);o.push(u,t,d,u,h,d)}for(let c=0;c<is;c+=1){const l=c*2,u=l+2;r.push(l,u,l+1,l+1,u,u+1)}const a=new _e;return a.setAttribute("position",new Gt(o,3)),a.setIndex(r),a.computeVertexNormals(),a}function pL(){zi=new He,zi.frustumCulled=!1,[{radius:206,baseY:-10,minHeight:7,heightRange:13,seed:1.3,color:9283750,opacity:.56},{radius:190,baseY:-12,minHeight:9,heightRange:17,seed:3.8,color:6258550,opacity:.68},{radius:174,baseY:-14,minHeight:11,heightRange:21,seed:7.1,color:3364683,opacity:.76}].forEach(n=>{const t=new Nt(fL(n),new Ie({color:n.color,fog:!1,transparent:!0,opacity:n.opacity,depthWrite:!1,side:Ne}));t.frustumCulled=!1,t.renderOrder=-950,zi.add(t)}),Pt.add(zi)}function mL(){const n=Od(),t=Bd(),e=mi(n,t,Ch),i=[],s=[],o=[],r=e.length;e.forEach(c=>{const l=Math.atan2(c.z,c.x),u=new w(Math.cos(l)*Rh,Ch,Math.sin(l)*Rh);i.push(c.x,c.y,c.z,u.x,u.y,u.z),s.push(0,0,1,1)});for(let c=0;c<r;c+=1){const l=(c+1)%r,u=c*2,d=u+1,h=l*2,f=h+1;o.push(u,h,f,u,f,d)}const a=new _e;return a.setAttribute("position",new Gt(i,3)),a.setAttribute("uv",new Gt(s,2)),a.setIndex(o),a.computeVertexNormals(),a}function gL(){return new Fn({transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:Ne,vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      float fogNoise(vec2 p) {
        return
          sin(p.x * 0.055 + p.y * 0.023) * 0.45 +
          sin(p.x * 0.019 - p.y * 0.047 + 2.4) * 0.32 +
          sin(p.x * 0.083 + p.y * 0.071 + 5.1) * 0.18;
      }

      void main() {
        float innerFade = smoothstep(0.0, 0.24, vUv.x);
        float outerFade = 1.0 - smoothstep(0.68, 1.0, vUv.x);
        float distanceMist = smoothstep(0.16, 0.96, vUv.x);
        float noise = fogNoise(vWorldPosition.xz);
        float longWisps =
          sin(vWorldPosition.x * 0.12 + noise * 3.8) * 0.22 +
          sin(vWorldPosition.z * 0.085 - noise * 2.7 + 1.8) * 0.18;
        float softClouds = smoothstep(-0.16, 0.72, noise + longWisps);
        float brokenPatches = smoothstep(-0.5, 0.55, noise - longWisps * 0.35);
        float lanes = 0.68 + 0.32 * sin(vWorldPosition.x * 0.052 + sin(vWorldPosition.z * 0.041) * 2.6);
        float alpha = (0.025 + softClouds * 0.13 + distanceMist * 0.04) *
          innerFade *
          max(outerFade, 0.18) *
          mix(0.48, 1.0, brokenPatches) *
          lanes;
        vec3 lowFog = vec3(0.58, 0.72, 0.73);
        vec3 midFog = vec3(0.78, 0.9, 0.91);
        vec3 highFog = vec3(0.93, 0.98, 0.99);
        vec3 color = mix(lowFog, midFog, softClouds);
        color = mix(color, highFog, distanceMist * 0.45);
        gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.22));
      }
    `})}function vL(n=0,t=ta,e=6){const i=Od()+n*2,s=Bd()+n,o=mi(i,s,t),r=mi(i,s,t+e),a=Math.min(o.length,r.length),c=[],l=[],u=[];for(let h=0;h<a;h+=1){const f=o[h],p=r[h],v=h/a;c.push(f.x,f.y,f.z,p.x,p.y,p.z),l.push(v,0,v,1)}for(let h=0;h<a;h+=1){const f=(h+1)%a,p=h*2,v=p+1,g=f*2,m=g+1;u.push(p,g,m,p,m,v)}const d=new _e;return d.setAttribute("position",new Gt(c,3)),d.setAttribute("uv",new Gt(l,2)),d.setIndex(u),d.computeVertexNormals(),d}function _L({opacity:n=1,seed:t=0}={}){return new Fn({uniforms:{uOpacity:{value:n},uSeed:{value:t}},transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:Ne,vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      uniform float uSeed;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      float fogBillow(vec2 p) {
        return
          sin(p.x * 0.16 + uSeed) * 0.34 +
          sin(p.y * 0.11 - uSeed * 1.7) * 0.26 +
          sin((p.x + p.y) * 0.055 + uSeed * 2.9) * 0.22 +
          sin(vUv.x * 71.0 + vUv.y * 10.0 + uSeed) * 0.12;
      }

      void main() {
        float verticalBody = smoothstep(0.0, 0.12, vUv.y) * (1.0 - smoothstep(0.78, 1.0, vUv.y));
        float lowRoll = 1.0 - smoothstep(0.38, 0.92, vUv.y);
        float highTears = 1.0 - smoothstep(0.68, 1.0, vUv.y);
        float billow = fogBillow(vWorldPosition.xz);
        float cloudMass = smoothstep(-0.42, 0.42, billow);
        float tornOpenings = smoothstep(-0.18, 0.36, billow + sin(vUv.x * 29.0 + uSeed) * 0.18);
        float streaks = 0.68 + 0.32 * sin(vUv.x * 118.0 + vUv.y * 6.0 + uSeed);
        float alpha = (0.1 + cloudMass * 0.72 + lowRoll * 0.28) *
          verticalBody *
          highTears *
          mix(0.22, 1.0, tornOpenings) *
          streaks *
          uOpacity;

        vec3 baseColor = vec3(0.46, 0.6, 0.6);
        vec3 bodyColor = vec3(0.74, 0.88, 0.89);
        vec3 topColor = vec3(0.96, 0.99, 1.0);
        vec3 color = mix(baseColor, bodyColor, cloudMass);
        color = mix(color, topColor, smoothstep(0.34, 1.0, vUv.y) * 0.52);
        gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.86));
      }
    `})}function xL(){const n=[],t=[],e=[];for(let s=0;s<=is;s+=1){const o=s/is*Math.PI*2,r=Math.cos(o)*im,a=Math.sin(o)*im;n.push(r,ta,a,r,md,a),t.push(s/is,0,s/is,1)}for(let s=0;s<is;s+=1){const o=s*2,r=o+2;e.push(o,r,o+1,o+1,r,r+1)}const i=new _e;return i.setAttribute("position",new Gt(n,3)),i.setAttribute("uv",new Gt(t,2)),i.setIndex(e),i.computeVertexNormals(),i}function yL(){return new Fn({transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:Ne,vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;

      void main() {
        float horizontalNoise =
          sin(vUv.x * 43.0 + vUv.y * 3.5) * 0.22 +
          sin(vUv.x * 91.0 - vUv.y * 8.0 + 1.7) * 0.18 +
          sin(vUv.x * 17.0 + 4.2) * 0.14;
        float lowerLift = smoothstep(0.0, 0.16, vUv.y);
        float upperBreak = 1.0 - smoothstep(0.82, 1.0, vUv.y);
        float middleBand = smoothstep(0.1, 0.36, vUv.y) * (1.0 - smoothstep(0.68, 0.95, vUv.y));
        float rollingLayer =
          smoothstep(-0.18, 0.46, horizontalNoise) * 0.42 +
          smoothstep(-0.42, 0.32, -horizontalNoise + sin(vUv.y * 18.0) * 0.16) * 0.28;
        float alpha = (0.2 + middleBand * 0.34 + rollingLayer) * lowerLift * max(upperBreak, 0.18);
        vec3 lowColor = vec3(0.55, 0.68, 0.68);
        vec3 highColor = vec3(0.9, 0.97, 0.98);
        vec3 color = mix(lowColor, highColor, smoothstep(0.18, 1.0, vUv.y));
        color = mix(color, vec3(1.0, 1.0, 0.98), rollingLayer * 0.18);
        gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.72));
      }
    `})}function SL(){Li=new He,Li.frustumCulled=!1;const n=new Nt(mL(),gL());n.frustumCulled=!1,n.renderOrder=-930,Li.add(n),[{outset:0,opacity:.92,seed:1.1,yOffset:0},{outset:7,opacity:.74,seed:4.7,yOffset:.25},{outset:15,opacity:.52,seed:8.6,yOffset:.55}].forEach((e,i)=>{const s=new Nt(vL(e.outset,ta+e.yOffset,md-ta),_L({opacity:e.opacity,seed:e.seed}));s.frustumCulled=!1,s.renderOrder=-929+i,Li.add(s)});const t=new Nt(xL(),yL());t.frustumCulled=!1,t.renderOrder=-920,Li.add(t),Pt.add(Li)}function yv(){zh&&(zh.position.copy(Se.position),zi&&zi.position.set(Se.position.x,0,Se.position.z))}function kc(n,t,e,i,s,o=!0){let r=e,a=i,c=s;o&&new w().crossVectors(a.clone().sub(r),c.clone().sub(r)).y<0&&(a=s,c=i);const l=n.length/3;n.push(r.x,r.y,r.z,a.x,a.y,a.z,c.x,c.y,c.z),t.push(l,l+1,l+2)}function Sv(n,t){const e=new Zc(n,t);return e.updateTree(),e}function ML(){const n=mi(Rn,Cn,pi),t=new w(0,pi,0),e=[],i=[];for(let s=0;s<n.length;s+=1){const o=(s+1)%n.length;kc(e,i,t,n[s],n[o])}return Sv(e,i)}function EL(){const n=new lt({mass:0,material:di,shape:ML()});return n.userData={kind:"ball-floor"},Dt.addBody(n),n}function wL(){const n=mi(Rn,Cn,pi),t=An/Rn,e=mi(An,Cn*t,ki),i=new w(0,ki,0),s=Math.min(n.length,e.length),o=[],r=[];for(let a=0;a<s;a+=1){const c=(a+1)%s,l=n[a],u=n[c],d=e[a],h=e[c];kc(o,r,l,u,h),kc(o,r,l,h,d),kc(o,r,i,d,h)}return Sv(o,r)}function AL(){const n=new lt({mass:0,material:pd,shape:wL()});return n.userData={kind:"arena-frustum-slope"},Dt.addBody(n),n}function TL(){const n=mi(Rn,Cn,pi),t=An/Rn,e=mi(An,Cn*t,ki),i=new w(0,ki,0),s=Math.min(n.length,e.length),o=An/2,r=An,a=[],c=[],l=(d,h,f,p,v,g)=>{a.push(d.x,d.y,d.z,h.x,h.y,h.z,f.x,f.y,f.z),c.push(p.x,p.y,v.x,v.y,g.x,g.y)};for(let d=0;d<s;d+=1){const h=(d+1)%s,f=n[d],p=n[h],v=e[d],g=e[h],m=d/s,_=h===0?1:h/s;l(f,p,g,new ut(m,0),new ut(_,0),new ut(_,1)),l(f,g,v,new ut(m,0),new ut(_,1),new ut(m,1)),l(i,v,g,new ut(.5,.5),new ut((v.x+o)/r,(v.z+o)/r),new ut((g.x+o)/r,(g.z+o)/r))}const u=new _e;return u.setAttribute("position",new Gt(a,3)),u.setAttribute("uv",new Gt(c,2)),u.computeVertexNormals(),u}function mi(n,t,e){const o=gv(n,n,t).extractPoints(jb).shape.map(c=>new w(c.x,e,-c.y)),r=o[0],a=o[o.length-1];return r&&a&&r.distanceToSquared(a)<1e-6&&o.pop(),o}function bL(){const n=mi(Rn,Cn,pi-.012),t=An/Rn,e=mi(An,Cn*t,ki+.02),i=Math.min(n.length,e.length),s=Math.max(1,Math.floor(i/8)),o=[];for(let c=0;c<i;c+=1){const l=(c+1)%i;o.push(e[c],e[l]),c%s===0&&o.push(n[c],e[c])}const r=new _e().setFromPoints(o),a=new ll({color:1645075,transparent:!0,opacity:.42});return new Qh(r,a)}function RL(){const n=aP(),t=new Ie({color:16777215,map:n,side:Ne}),e=new Nt(TL(),t);e.receiveShadow=!1,Pt.add(e);const i=bL();Pt.add(i);const s=AL();Xg.push({texture:n,mesh:e,edgeLines:i,physicsBody:s})}function CL(){const n=new rd(gv(fi,fi,Cn),18);rP(n);const t=new Ie({color:16777215,map:KC()}),e=new Nt(n,t);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,Pt.add(e),rL(),oL(),EL()}function PL(){hL(),RL(),CL(),aL(),cL(),lL(),[{x:-54,z:42,sx:4.8,sz:1.2,y:.78,c:te.crate},{x:-42,z:34,sx:1.2,sz:4.2,y:1,c:te.concrete},{x:-26,z:20,sx:4.4,sz:1.2,y:.8,c:te.crate},{x:-12,z:12,sx:1.2,sz:4,y:1,c:te.concrete},{x:42,z:14,sx:4.6,sz:1.2,y:.8,c:te.crate},{x:52,z:-8,sx:1.2,sz:4.4,y:1,c:te.concrete},{x:-50,z:-26,sx:4.8,sz:1.2,y:.78,c:te.crate},{x:-32,z:-44,sx:1.2,sz:4,y:1,c:te.concrete}].forEach(t=>{on({position:{x:t.x,y:t.y/2,z:t.z},size:{x:t.sx,y:t.y,z:t.sz},color:t.c,kind:"approach-cover"})}),ug.forEach((t,e)=>{LP(t,e),HP(t,e)}),ni(-42.4,41.2),ni(-20.2,-20.4),ni(20.4,19.2),ni(-19.6,16.2),ni(17.8,-18.4),ni(41.6,-42.2),ni(-41.8,-8.4),ni(8.2,41.6),ni(40.8,8.6),ni(-8.6,-41.4)}function ni(n,t){const e=2.1333333333333333,i=e+.1,{mesh:s}=on({position:{x:n,y:e/2,z:t},size:{x:.16,y:e,z:.16},color:3159086,kind:"lamp-pole",roughness:.55,metalness:.35});s.castShadow=!0;const o=new Nt(new qi(.18,16,12),new Je({color:16764795,emissive:16751918,emissiveIntensity:1.6}));o.position.set(n,i,t),Pt.add(o)}function Mv(n){return n.state==="patrol"?UR:FR}function LL(n){return Math.acos(j.clamp(Mv(n),-1,1))}function $m(n){return n.type==="melee"?Eg:Sg}function IL(n){return n.type==="melee"?VR:kR}function DL(n){return n.type==="melee"?GR:HR}function jm(n){return n.type==="melee"?wg:Mg}function wl(n){return(typeof n=="string"?n:n==null?void 0:n.type)==="melee"?zR:NR}function NL(n){return n.state==="patrol"||n.state==="search"?n.health:n.state==="interest"||n.state==="chase"?wl(n)*U2:Lg}function zL(){const n=new _e,t=new Float32Array(12);n.setAttribute("position",new cn(t,3));const e=new ll({color:te.enemyGlow,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1});e.toneMapped=!1;const i=new Qh(n,e);return i.frustumCulled=!1,i.renderOrder=4,Pt.add(i),{lines:i,geometry:n,positions:t,length:OR}}function UL(n){return n.state==="chase"||n.state==="interest"&&n.glassTactic==="break"?{color:16727871,opacity:.95}:n.state==="interest"?{color:16765286,opacity:.88}:n.state==="search"?{color:6543103,opacity:.78}:{color:7977050,opacity:.62}}function FL(n){if(!n.lineOfSight||(n.lineOfSight.lines.visible=n.alive,!n.alive))return;const{positions:t,length:e,lines:i}=n.lineOfSight,s=UL(n);i.material.color.setHex(s.color),i.material.opacity=s.opacity;const o=n.group.position.x,r=n.group.position.y+BR,a=n.group.position.z,c=LL(n),l=n.group.rotation.y-c,u=n.group.rotation.y+c,d=o+Math.sin(l)*e,h=a+Math.cos(l)*e,f=o+Math.sin(u)*e,p=a+Math.cos(u)*e;t.set([o,r,a,d,r,h,o,r,a,f,r,p]),n.lineOfSight.geometry.attributes.position.needsUpdate=!0,n.lineOfSight.geometry.computeBoundingSphere()}function Ev(){ge.forEach(FL)}function Ii(n,t,e,i={}){const s=new Nt(new Pn(n.x,n.y,n.z),new Je({color:e,roughness:i.roughness??.48,metalness:i.metalness??.22,emissive:i.emissive??0,emissiveIntensity:i.emissiveIntensity??0}));return s.position.set(t.x,t.y,t.z),s.castShadow=!0,s}function Oh(n,t,e,i,s={}){const o=new Nt(new Wi(n,n,t,s.segments??10),new Je({color:i,roughness:s.roughness??.44,metalness:s.metalness??.38,emissive:s.emissive??0,emissiveIntensity:s.emissiveIntensity??0}));return o.position.set(e.x,e.y,e.z),o.rotation.x=Math.PI/2,o.castShadow=!0,o}function OL(){const o=new Float32Array([-.045,-.018,.17,.045,-.018,.17,.072,-.018,.82,-.072,-.018,.82,-.045,.018,.17,.045,.018,.17,.072,.018,.82,-.072,.018,.82]),r=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0],a=new _e;a.setAttribute("position",new cn(o,3)),a.setIndex(r),a.computeVertexNormals();const c=new Nt(a,new Je({color:10989740,roughness:.22,metalness:.62,emissive:2107430,emissiveIntensity:.08}));return c.castShadow=!0,c}function wv({advanced:n=!1}={}){const t=new He,e=new w(0,as+(n?.72:.68),Bs+.06),i=new w(0,.01,n?.965:.77),s=new w(.1,.05,n?.32:.27),o=n?2504762:3354178,r=n?1449246:2104364,a=n?5822128:11963647,c={size:{x:.13,y:n?.22:.18,z:.08},position:{x:0,y:-.16,z:n?.22:.18},color:1382681,options:{metalness:.22}},l={size:new w(n?.24:.2,n?.36:.3,n?1.18:.96),offset:new w(0,n?-.035:-.025,n?.38:.31),mass:n?.86:.72};t.add(Ii({x:n?.18:.16,y:n?.14:.12,z:n?.42:.36},{x:0,y:0,z:.2},o,{metalness:.32})),t.add(Oh(n?.035:.03,n?.48:.38,{x:0,y:.01,z:n?.66:.58},r,{segments:n?12:8,metalness:.48}));const u=Ii(c.size,c.position,c.color,c.options);return t.add(u),t.add(Ii({x:.14,y:.09,z:n?.22:.16},{x:0,y:.02,z:-.1},1712160,{metalness:.18})),n?(t.add(Ii({x:.12,y:.045,z:.18},{x:0,y:.105,z:.22},a,{emissive:1796695,emissiveIntensity:.22,metalness:.16})),t.add(Ii({x:.06,y:.07,z:.05},{x:0,y:.13,z:.48},1053973,{metalness:.35})),t.add(Oh(.045,.09,{x:0,y:.01,z:.92},1053973,{segments:12,metalness:.5}))):t.add(Ii({x:.1,y:.035,z:.12},{x:0,y:.09,z:.18},a,{emissive:4334687,emissiveIntensity:.16,metalness:.14})),t.position.copy(e),{kind:"rifle",root:t,restPosition:e,restRotation:new ye(0,0,0),muzzleLocal:i,casingEjectLocal:s,magazineMesh:u,magazineSpec:c,detachedBodySpec:l,recoil:0,recoilYaw:0,recoilRoll:0}}function Av({sheathed:n=!1}={}){const t=new He,e=new w(Bs+.1,as+.38,Bs*.42),i=new ye(-Math.PI/2,.16,-.26),s=new w(-.45999999999999996,as+.38,Bs*.42),o=new ye(-Math.PI/2,-.16,.26),r=n?s:e,a=n?o:i,c=new w(-.48,as+.96,-.04),l=new ye(Math.PI/2,0,-.04),u=new ye(a.x+.32,a.y+.76,a.z-.55),d=n?c:r,h=n?l:a;return t.add(Oh(.045,.27,{x:0,y:0,z:.02},q2,{roughness:.72,metalness:.04,segments:10})),t.add(Ii({x:.15,y:.05,z:.045},{x:0,y:0,z:.17},X2,{roughness:.65,metalness:.12})),t.add(OL()),t.add(Ii({x:.018,y:.042,z:.52},{x:0,y:0,z:.52},14081497,{roughness:.18,metalness:.68})),t.scale.setScalar(W2),t.position.copy(d),t.rotation.copy(h),{kind:"machete",root:t,detachedBodySpec:{size:new w(.2,.08,.95),offset:new w(0,0,.42),mass:.34},restPosition:d,restRotation:h,combatPosition:r,combatRotation:a,sheathedPosition:c,sheathedRotation:l,strikeRotation:u}}function BL(){const n=new He,t=new He;n.add(t);const e=nv(IR);t.add(e.root);const i=new Nt(tv(us,jc,6,12,kC),ev({roughness:.58,metalness:.02}));i.position.y=yd,i.castShadow=!0,t.add(i);const s=wv({advanced:!0});t.add(s.root);const o=Av({sheathed:!0});t.add(o.root),Pt.add(n);const r=new lt({mass:5,material:di,linearDamping:Ug,angularDamping:Fg,position:new M(Yn.x,Le(Yn.x,Yn.z)+On,Yn.z)}),a=uv(r,us,jc,12);return r.allowSleep=!1,r.fixedRotation=!0,r.updateMassProperties(),r.wakeUp(),r.userData={kind:"player"},Dt.addBody(r),{group:n,visualRoot:t,body:r,spawn:Yn.clone(),surfaceY:pi,surfaceNormal:new w(0,1,0),alive:!0,deathProgress:1,deathStartY:0,deathTargetY:$s,deathRotationZ:.22,slopeContactTimer:0,ragdollDeathActive:!1,specialDeathCameraWaitElapsed:0,fogDeathCameraActive:!1,fogDeathCameraElapsed:0,fogDeathCameraStartPosition:new w,fogDeathCameraEndPosition:new w,fogDeathCameraStartTarget:new w,fogDeathCameraEndTarget:new w,fogDeathCameraStartUp:new w(0,1,0),bloodPoolSpawned:!0,bloodPoolDelay:0,hitSlowTimer:0,hitKnockback:new w,footstepTimer:0,boots:e,bootShapeBindings:a,bootMoveDirection:new w,bootAnimationSpeedMultiplier:1,weapon:s,meleeWeapon:o,meleeAttackActive:!1,meleeAttackTimer:0,meleeImpactDone:!0,meleeAttackDirection:new w(0,0,1)}}function kL(){const n=new Pn(Cm,Pm,Ih),t=new Ie({color:te.teal,transparent:!0,opacity:.38,depthWrite:!1,side:Ne});t.toneMapped=!1;const e=new Nt(n,t);return e.visible=!1,e.frustumCulled=!1,Pt.add(e),{mesh:e,material:t,active:!1,health:0,hitFlash:0,breakTimer:0,center:new w,right:new w(1,0,0),upAxis:new w(0,1,0),forward:new w(0,0,-1),halfExtents:new w(Cm/2,Pm/2,Ih/2)}}function rr(){return St.active&&St.health>0&&R.alive}function ra(){const n=Ve.clone(),t=Ma(R).clone().normalize();n.addScaledVector(t,-n.dot(t)),n.lengthSq()<Xt&&(n.copy(Sa(R.group.rotation.y)),n.addScaledVector(t,-n.dot(t))),n.lengthSq()<Xt&&n.set(0,0,1).addScaledVector(t,-t.z),n.normalize(),St.forward.copy(n),St.right.crossVectors(t,n).normalize(),St.upAxis.copy(t),St.center.copy(R.group.position).addScaledVector(t,uC).addScaledVector(n,lC),St.mesh.position.copy(St.center),nl.makeBasis(St.right,St.upAxis,St.forward),St.mesh.quaternion.setFromRotationMatrix(nl)}function Tv(n=0){if(!rr()){if(St.breakTimer>0){St.breakTimer=Math.max(0,St.breakTimer-n),ra(),St.material.opacity=.26*(St.breakTimer/zg),St.material.color.setHex(te.glassEdge),St.mesh.visible=!0;return}St.mesh.visible=!1;return}St.hitFlash=Math.max(0,St.hitFlash-n),ra();const t=j.clamp(St.health/Hs,0,1);St.material.opacity=.22+t*.2+(St.hitFlash>0?.18:0),St.material.color.setHex(St.hitFlash>0?te.glassEdge:te.teal),St.mesh.visible=!0}function HL(){St.active=!1,St.health=0,St.hitFlash=0,St.breakTimer=0,St.mesh.visible=!1,ci.classList.remove("is-shield-flashing")}function bv(){return!we()||rr()||F.energy<Rm?!1:(F.energy-=Rm,St.active=!0,St.health=Hs,St.hitFlash=.16,St.breakTimer=0,ra(),St.mesh.visible=!0,Qt("shield-activate",{intensity:1,position:R.group.position}),vi(),S3(),!0)}function Rv(){St.active=!1,St.health=0,St.breakTimer=0,St.mesh.visible=!1,ci.classList.remove("is-shield-flashing"),vi()}function VL(){St.active=!1,St.health=0,St.breakTimer=zg,St.mesh.visible=!0,ci.classList.remove("is-shield-flashing")}function Hd(n,t=null){return rr()?(St.health=Math.max(0,St.health-n),St.hitFlash=.18,Qt("shield-hit",{intensity:1,position:t??St.center}),St.health<=0&&(Qt("shield-break",{intensity:1,position:t??St.center}),VL()),vi(),!0):!1}function Bh(n,t=St){const e=n.clone().sub(t.center);return new w(e.dot(t.right),e.dot(t.upAxis),e.dot(t.forward))}function GL(n,t=St){return t.center.clone().addScaledVector(t.right,n.x).addScaledVector(t.upAxis,n.y).addScaledVector(t.forward,n.z)}function Vd(n,t,e,i=0){const s=Bh(n,e),o=Bh(t,e),r=o.clone().sub(s),a=[{key:"x",half:e.halfExtents.x+i,vector:e.right},{key:"y",half:e.halfExtents.y+i,vector:e.upAxis},{key:"z",half:e.halfExtents.z+i,vector:e.forward}];let c=0,l=1,u=null,d=1;for(const h of a){const f=s[h.key],p=r[h.key],v=-h.half,g=h.half;if(Math.abs(p)<Xt){if(f<v||f>g)return null;continue}let m=(v-f)/p,_=(g-f)/p,y=-1;if(m>_&&([m,_]=[_,m],y=1),m>c&&(c=m,u=h,d=y),l=Math.min(l,_),c>l)return null}if(!u){const h=s.clone().lerp(o,c);u=a.map(f=>({...f,distanceToFace:f.half-Math.abs(h[f.key])})).sort((f,p)=>f.distanceToFace-p.distanceToFace)[0],d=Math.sign(h[u.key])||1}return{t:c,normal:u.vector.clone().multiplyScalar(d).normalize()}}function Cv(n,t,e=0){return rr()?(ra(),Vd(n,t,St,e)):null}function WL(n,t){if(!rr())return null;ra();const e=Bh(n),i=new w(j.clamp(e.x,-St.halfExtents.x,St.halfExtents.x),j.clamp(e.y,-St.halfExtents.y,St.halfExtents.y),j.clamp(e.z,-St.halfExtents.z,St.halfExtents.z));if(e.clone().sub(i).lengthSq()>t*t)return null;const o=GL(i),r=o.clone().sub(n);return r.lengthSq()<Xt?r.copy(St.forward):r.normalize(),{point:o,normal:r}}function qL(n,t,e){const i=Cv(t,e);if(!i)return!1;const s=t.clone().lerp(e,i.t);return cr({point:s,normal:i.normal,type:"playerShield"}),Hd(n,s),!0}function XL(n,t,e,i){const s=WL(n,t);if(!s)return!1;const o=jn(R,On),r=n.clone();r.y=o.y;const a=Vd(r,o,St),c=n.clone().sub(R.group.position);c.y=0;const l=c.lengthSq()>Xt?c.normalize().dot(Ve)>0:!0;return cr({point:s.point,normal:s.normal,type:"playerShield"}),Hd(e,s.point),i&&l&&!!a}function YL(n){const t=new He,e=Md;t.position.set(0,e+.16,0);const i=[],s=.15,o=-((n-1)*s)/2;for(let r=0;r<n;r+=1){const a=new Ie({color:16766573,transparent:!0,opacity:.95,depthWrite:!1});a.toneMapped=!1;const c=new Nt(new Pn(.105,.075,.105),a);c.position.x=o+r*s,c.renderOrder=6,t.add(c),i.push(c)}return{root:t,pips:i}}function ar(n){const t=n==null?void 0:n.healthIndicator;if(!t)return;const e=n.active&&n.alive&&n.health>0;if(t.root.visible=e,!e)return;t.root.lookAt(Se.position);const i=Math.max(0,n.health),s=Math.floor(i),o=Math.ceil(i);t.pips.forEach((r,a)=>{r.visible=a<o,r.visible&&(r.material.opacity=a<s?.95:.48,r.material.color.setHex(n.hitFlash>0?16773812:16766573))})}function KL(n,t){const e=new He,i=new He;e.add(i);const s=wl(n.type),o=!!n.reserve,r=eL(n),a=n.type==="melee"?VC:HC,c=nv(vg);i.add(c.root);const l=new Nt(tv(Ks,Jc,5,12,a),ev({roughness:.62,metalness:.04}));l.position.y=Sd,l.castShadow=!0,i.add(l);const u=n.type==="melee"?Av():wv({advanced:!1});i.add(u.root);const d=YL(s);e.add(d.root),e.visible=!o,Pt.add(e);const h=new lt({mass:3,material:di,linearDamping:.18,angularDamping:1,position:new M(r.x,Le(r.x,r.z)+xn,r.z)}),f=uv(h,Ks,Jc,12);return h.fixedRotation=!0,h.updateMassProperties(),h.userData={kind:"enemy",id:n.id,type:n.type},o||Dt.addBody(h),{id:n.id,type:n.type,index:t,reserve:o,active:!o,group:e,visualRoot:i,body:h,surfaceY:pi,surfaceNormal:new w(0,1,0),lineOfSight:zL(),healthIndicator:d,alive:!o,maxHealth:s,health:s,hitFlash:0,hitSlowTimer:0,hitKnockback:new w,boots:c,bootShapeBindings:f,bootMoveDirection:new w,bootAnimationSpeedMultiplier:1,weapon:u,attackCooldown:0,meleeAttackActive:!1,meleeAttackTimer:0,meleeImpactDone:!0,meleeAttackTarget:null,state:"patrol",spawn:r.clone(),patrolRadiusX:n.patrolRadiusX,patrolRadiusZ:n.patrolRadiusZ,patrolOffset:n.patrolOffset,lastKnownPlayerPosition:new w(n.x,0,n.z),searchMode:"travel",scanProgress:0,scanStartYaw:0,searchTimer:0,lostSightTimer:0,shootCooldown:0,weaponAmmo:n.type==="ranged"?gl:0,reloadTimer:0,burstShotsRemaining:0,burstShotTimer:0,coverPosition:null,coverReplanTimer:j.randFloat(.15,.65),glassTactic:"none",glassTargetFaceId:null,deathProgress:1,deathStartY:0,deathTargetY:$s,deathRotationZ:0,bloodPoolSpawned:!0,bloodPoolDelay:0,footstepTimer:j.randFloat(.05,.35),patrolPhase:n.patrolOffset}}function ZL(n,t){const e=new He,i=new Nt(new Wi(.34,.34,.54,10),new Je({color:3048310,roughness:.5,metalness:.08,emissive:1194804,emissiveIntensity:.55}));i.position.y=.36,i.castShadow=!0,e.add(i);const s=new Nt(new hl(.35,.025,8,18),new Je({color:16765293,roughness:.35,metalness:.2}));s.position.y=.55,s.rotation.x=Math.PI/2,e.add(s),e.position.copy(n),Pt.add(e),ya.push({type:"loot",id:`cargo-${t+1}`,group:e,collected:!1,spawn:n.clone()})}function $L(){const n=new He,t=new Je({color:te.teal,emissive:1534045,emissiveIntensity:.8,transparent:!0,opacity:.84,roughness:.44}),e=new Nt(new hl(1.25,.055,8,54),t);e.rotation.x=Math.PI/2,e.position.y=.08,n.add(e);const i=new Nt(new Wi(1.2,1.2,.045,48),new Je({color:2060133,emissive:1195834,emissiveIntensity:.35,transparent:!0,opacity:.42,roughness:.72}));return i.position.y=.025,i.receiveShadow=!0,n.add(i),n.position.copy(iR),Pt.add(n),{group:n,ring:e,pad:i,position:n.position}}function jL(n,t=0){const e=n.clone();if(e.lengthSq()<.001)return e.set(0,0,-1);if(e.normalize(),t<=0)return e;const i=new w().crossVectors(e,sr);i.lengthSq()<Xt&&i.crossVectors(e,new w(1,0,0)),i.normalize();const s=new w().crossVectors(e,i).normalize(),o=Math.random()*t,r=Math.random()*Math.PI*2;return e.multiplyScalar(Math.cos(o)).addScaledVector(i,Math.sin(o)*Math.cos(r)).addScaledVector(s,Math.sin(o)*Math.sin(r)).normalize()}function tr(n,t){n!=null&&n.magazineMesh&&(n.magazineMesh.visible=t)}function Pv(n,t){return!(n!=null&&n.root)||!t?null:n.root.localToWorld(new w(t.x,t.y,t.z))}function Gd(n,t){t.set(n.x,n.y,n.z,n.w)}function Wd(n,t,e=vl,i={}){n.castShadow=!0,n.receiveShadow=!0,t.allowSleep=!0,t.sleepSpeedLimit=wd,t.sleepTimeLimit=Ad,Pt.add(n),Dt.addBody(t),cs.push({mesh:n,body:t,groundClearance:e,kickRadius:i.kickRadius??.14,visibilityRadius:i.visibilityRadius??Math.max(e,.14),settledStatic:!1,settleTimer:0})}function Al(n){return!!(n!=null&&n.body&&Dt.bodies.includes(n.body))}function Jm(n){return!n||n.settledStatic||!Al(n)?!1:(n.settledStatic=!0,n.settleTimer=0,n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),n.body.sleep(),Dt.removeBody(n.body),!0)}function Lv(n,t=!0){return n!=null&&n.body?(n.settledStatic=!1,n.settleTimer=0,n.body.allowSleep=!0,n.body.sleepSpeedLimit=wd,n.body.sleepTimeLimit=Ad,n.body.collisionResponse=!0,Al(n)||Dt.addBody(n.body),t&&n.body.wakeUp(),!0):!1}function JL(){Se.updateMatrixWorld(),Bm.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),Wg.setFromProjectionMatrix(Bm)}function QL(n){return n!=null&&n.body?en(R.group.position,n.body.position)<=x2?!0:(Du.center.set(n.body.position.x,n.body.position.y,n.body.position.z),Du.radius=n.visibilityRadius??.2,Wg.intersectsSphere(Du)):!1}function tI(){var n;for(let t=cs.length-1;t>=0;t-=1){const{mesh:e,body:i}=cs[t];e&&(Pt.remove(e),(n=e.traverse)==null||n.call(e,s=>{var o,r,a,c;(r=(o=s.geometry)==null?void 0:o.dispose)==null||r.call(o),Array.isArray(s.material)?s.material.forEach(l=>{var u;return(u=l.dispose)==null?void 0:u.call(l)}):(c=(a=s.material)==null?void 0:a.dispose)==null||c.call(a)})),i&&Dt.bodies.includes(i)&&Dt.removeBody(i),cs.splice(t,1)}}function Iv(n){var e,i;const t=((i=(e=n==null?void 0:n.group)==null?void 0:e.rotation)==null?void 0:i.y)??0;return{forward:Sa(t),right:iv(t)}}function eI(n,t){if(!(n!=null&&n.root)||n.kind!=="rifle"||!(t!=null&&t.group))return;const e=Pv(n,n.casingEjectLocal);if(!e)return;const i=new Nt(new Wi(br,br,Mc,10),new Je({color:h2,roughness:.3,metalness:.74}));i.position.copy(e);const s=new lt({mass:u2,material:Xs,linearDamping:.12,angularDamping:.24,position:new M(e.x,e.y,e.z)});s.addShape(new ig(br,br,Mc,10)),s.userData={kind:"weapon-casing"};const o=new mn;n.root.getWorldQuaternion(o);const r=new mn().setFromEuler(new ye(j.randFloatSpread(Math.PI),j.randFloatSpread(Math.PI),j.randFloatSpread(Math.PI)));Gd(o.multiply(r),s.quaternion);const{forward:a,right:c}=Iv(t);s.velocity.set(c.x*j.randFloat(1.35,2.05)+a.x*j.randFloat(-.28,.24),j.randFloat(1,1.65),c.z*j.randFloat(1.35,2.05)+a.z*j.randFloat(-.28,.24)),s.angularVelocity.set(j.randFloatSpread(20),j.randFloatSpread(24),j.randFloatSpread(20)),Wd(i,s,br+vl,{kickRadius:Mc*.65,visibilityRadius:Mc})}function Dv(n,t){if(!(n!=null&&n.root)||n.kind!=="rifle"||!n.magazineSpec||!(t!=null&&t.group))return;const e=Pv(n,n.magazineSpec.position);if(!e)return;const{size:i,color:s,options:o}=n.magazineSpec,r=Ii(i,{x:0,y:0,z:0},s,o);r.position.copy(e);const a=new lt({mass:d2,material:Xs,linearDamping:.16,angularDamping:.34,position:new M(e.x,e.y,e.z)});a.addShape(new Xi(new M(i.x/2,i.y/2,i.z/2))),a.userData={kind:"weapon-magazine"};const c=new mn;n.root.getWorldQuaternion(c),Gd(c,a.quaternion);const{forward:l,right:u}=Iv(t);a.velocity.set(u.x*j.randFloat(.25,.65)-l.x*j.randFloat(.18,.42),j.randFloat(.35,.75),u.z*j.randFloat(.25,.65)-l.z*j.randFloat(.18,.42)),a.angularVelocity.set(j.randFloatSpread(5.5),j.randFloatSpread(7.5),j.randFloatSpread(5.5)),tr(n,!1),Wd(r,a,Math.min(i.x,i.y,i.z)/2+vl,{kickRadius:Math.max(i.x,i.y,i.z)*.9,visibilityRadius:Math.max(i.x,i.y,i.z)})}function nI(n){const t=n.clone(!0);return t.traverse(e=>{var i,s,o,r;e.isMesh&&(e.geometry=((s=(i=e.geometry)==null?void 0:i.clone)==null?void 0:s.call(i))??e.geometry,Array.isArray(e.material)?e.material=e.material.map(a=>{var c;return((c=a.clone)==null?void 0:c.call(a))??a}):e.material&&(e.material=((r=(o=e.material).clone)==null?void 0:r.call(o))??e.material),e.castShadow=!0,e.receiveShadow=!0)}),t}function Qm(n,t,e){var p;if(!((p=n==null?void 0:n.root)!=null&&p.visible)||!n.detachedBodySpec)return!1;n.root.updateWorldMatrix(!0,!0);const i=new w,s=new mn,o=new w;n.root.matrixWorld.decompose(i,s,o);const r=nI(n.root);r.position.copy(i),r.quaternion.copy(s),r.scale.copy(o);const{size:a,offset:c,mass:l}=n.detachedBodySpec,u=new w(Math.abs(a.x*o.x),Math.abs(a.y*o.y),Math.abs(a.z*o.z)),d=new M(c.x*o.x,c.y*o.y,c.z*o.z),h=new lt({mass:l,material:Xs,linearDamping:.12,angularDamping:.22,position:new M(i.x,i.y,i.z)});h.addShape(new Xi(new M(u.x/2,u.y/2,u.z/2)),d),h.userData={kind:n.kind==="machete"?"dropped-machete":"dropped-rifle"},Gd(s,h.quaternion);const f=new w(-t.z,0,t.x);return f.lengthSq()<Xt&&f.set(1,0,0),f.normalize(),h.velocity.set(e.x+f.x*j.randFloatSpread(.55),e.y+j.randFloat(.24,.58),e.z+f.z*j.randFloatSpread(.55)),h.angularVelocity.set(j.randFloatSpread(6.5),j.randFloatSpread(5.5),j.randFloatSpread(6.5)),n.root.visible=!1,Wd(r,h,Math.min(u.x,u.y,u.z)/2+vl,{kickRadius:Math.max(u.x,u.y,u.z)*.45,visibilityRadius:Math.max(u.x,u.y,u.z)}),!0}function iI(n,t){Qm(R.weapon,n,t),Qm(R.meleeWeapon,n,t)}function sI(n){const{body:t,groundClearance:e}=n;if(!t||!Al(n)||!Ta(t.position.x,t.position.z,0))return;const s=Le(t.position.x,t.position.z)+e;t.position.y>=s||(t.position.y=s,t.velocity.y<0&&(t.velocity.y=0),t.velocity.x*=.55,t.velocity.z*=.55,t.angularVelocity.x*=.65,t.angularVelocity.y*=.65,t.angularVelocity.z*=.65)}function oI(n=1/60){JL(),cs.forEach(t=>{if(!(t!=null&&t.body)||t.settledStatic||!Al(t))return;const e=QL(t);if(t.body.sleepSpeedLimit=e?wd:f2,t.body.sleepTimeLimit=e?Ad:p2,sI(t),Vi(t.body,Td,bd),t.body.sleepState===lt.SLEEPING){Jm(t);return}const i=Math.hypot(t.body.velocity.x,t.body.velocity.y,t.body.velocity.z),s=Math.hypot(t.body.angularVelocity.x,t.body.angularVelocity.y,t.body.angularVelocity.z);i<=m2&&s<=g2?t.settleTimer+=n:t.settleTimer=0;const o=e?v2:_2;t.settleTimer>=o&&Jm(t)})}function rI(){cs.forEach(({mesh:n,body:t})=>{n.position.set(t.position.x,t.position.y,t.position.z),n.quaternion.set(t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w)})}function aI(n,t,e="player",i=null){const s=e==="enemy",o=new Nt(new qi(Pi,12,8),new Je({color:n2,roughness:.34,metalness:.72}));o.position.copy(n),o.castShadow=!0,Pt.add(o),Qt(s?"enemy-shot":"player-shot",{position:o.position}),eI(i==null?void 0:i.weapon,i),s||Pa(o.position,E2,w2),$o.push({mesh:o,direction:t.clone(),owner:e,source:i,speed:s?t2:QR})}function cI(n,t,e="player",i=0,s=null){const o=t.clone();if(o.lengthSq()<.001)return!1;o.normalize();const r=jL(o,i);return aI(n.clone(),r,e,s),!0}let Lr=null;function lI(){if(Lr)return Lr;const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(.32,"rgba(255,214,98,0.92)"),e.addColorStop(.62,"rgba(255,116,48,0.42)"),e.addColorStop(1,"rgba(255,116,48,0)"),t.fillStyle=e,t.beginPath(),t.arc(32,32,30,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,246,190,0.55)",t.lineWidth=2,t.beginPath(),t.moveTo(8,32),t.lineTo(56,32),t.moveTo(32,8),t.lineTo(32,56),t.stroke(),Lr=new nr(n),Lr.colorSpace=Xe,Lr}function uI(n){return!(n!=null&&n.root)||!n.muzzleLocal?null:(n.root.updateWorldMatrix(!0,!1),n.root.localToWorld(n.muzzleLocal.clone()))}function hI(n){return n!=null&&n.root?(n.root.updateWorldMatrix(!0,!1),new w(0,0,1).transformDirection(n.root.matrixWorld).normalize()):null}function qd(n,t="player",e=0,i=null){const s=uI(n),o=hI(n);return!s||!o||o.lengthSq()<.001?!1:cI(s,o,t,e,i)}function Xd(n,t="player"){if(!(n!=null&&n.root)||!n.muzzleLocal)return;const e=t==="enemy",i=new ua({map:lI(),color:e?te.enemyShot:te.playerShot,transparent:!0,opacity:.92,depthWrite:!1,blending:rs}),s=new al(i),o=e?Z2:K2;s.position.copy(n.muzzleLocal),s.scale.set(o,o,1),n.root.add(s),zc.push({sprite:s,material:i,baseSize:o,elapsed:0,duration:Y2})}function dI(n){var t;for(let e=zc.length-1;e>=0;e-=1){const i=zc[e];i.elapsed+=n;const s=i.elapsed/i.duration;i.material.opacity=Math.max(0,.92*(1-s));const o=1+s*.55;i.sprite.scale.set(i.baseSize*o,i.baseSize*o,1),i.elapsed>=i.duration&&((t=i.sprite.parent)==null||t.remove(i.sprite),i.material.dispose(),zc.splice(e,1))}}function fI(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),i=128/2,s=e.createRadialGradient(i,i,2,i,i,i);s.addColorStop(0,"rgba(255, 241, 168, 1)"),s.addColorStop(.22,"rgba(240, 184, 77, 0.9)"),s.addColorStop(.46,"rgba(255, 109, 70, 0.45)"),s.addColorStop(1,"rgba(255, 109, 70, 0)"),e.fillStyle=s,e.fillRect(0,0,128,128),e.strokeStyle="rgba(255, 241, 168, 0.9)",e.lineWidth=5;for(let r=0;r<9;r+=1){const a=Math.PI*2*r/9,c=20+Math.random()*8,l=42+Math.random()*16;e.beginPath(),e.moveTo(i+Math.cos(a)*c,i+Math.sin(a)*c),e.lineTo(i+Math.cos(a)*l,i+Math.sin(a)*l),e.stroke()}const o=new nr(t);return o.colorSpace=Xe,o}const Yd=fI();function cr({point:n,normal:t,type:e}){const i=e==="enemy"||e==="player",s=e==="glass",o=e==="glassBall",r=e==="playerShield",a=new ua({map:Yd,color:e==="enemy"?16753757:e==="player"?te.enemyShot:r||s?te.glassEdge:o?te.teal:te.playerShotGlow,depthWrite:!1,transparent:!0,opacity:.95}),c=new al(a);c.position.copy(n).addScaledVector(t,.08),c.scale.setScalar(i?.82:r?.7:s?.74:o?.52:.66),Pt.add(c);const l={sprite:c,spriteMaterial:a,decal:null,decalMaterial:null,spriteLife:i?.24:.22,maxSpriteLife:i?.24:.22,decalLife:0,maxDecalLife:0};if(e==="static"){const u=new Je({color:1380876,roughness:.92,metalness:0,transparent:!0,opacity:.72,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=new Nt(new Qs(.22,18),u);d.position.copy(n).addScaledVector(t,.012),d.quaternion.setFromUnitVectors(new w(0,0,1),t),d.receiveShadow=!0,Pt.add(d),l.decal=d,l.decalMaterial=u,l.decalLife=2.4,l.maxDecalLife=2.4}jo.push(l)}function Nv(n){const t=jo[n];Pt.remove(t.sprite),t.spriteMaterial.dispose(),t.decal&&(Pt.remove(t.decal),t.decal.geometry.dispose(),t.decalMaterial.dispose()),jo.splice(n,1)}function pI(n){for(let t=jo.length-1;t>=0;t-=1){const e=jo[t];e.spriteLife=Math.max(0,e.spriteLife-n),e.decalLife=Math.max(0,e.decalLife-n);const i=e.maxSpriteLife>0?e.spriteLife/e.maxSpriteLife:0,s=e.maxDecalLife>0?e.decalLife/e.maxDecalLife:0;e.sprite.material.opacity=i,e.sprite.scale.multiplyScalar(1+n*2.2),e.decalMaterial&&(e.decalMaterial.opacity=.72*s),e.spriteLife<=0&&e.decalLife<=0&&Nv(t)}}function mI(n){const t=new Ie({color:DC,transparent:!0,opacity:.8,depthWrite:!1,side:Ne});t.toneMapped=!1;const e=new Nt(new Qs(.5,56),t);e.rotation.x=-Math.PI/2,e.position.set(n.x,Le(n.x,n.z)+.018,n.z),e.scale.setScalar(Og),e.renderOrder=3,Pt.add(e),ia.push({mesh:e,material:t,age:0,duration:LC})}function gI(n){const t=ia[n];Pt.remove(t.mesh),t.mesh.geometry.dispose(),t.material.dispose(),ia.splice(n,1)}function vI(n){ia.forEach(t=>{if(t.age>=t.duration)return;t.age=Math.min(t.duration,t.age+n);const e=li(t.age/Math.max(.001,t.duration)),i=j.lerp(Og,IC,e);t.mesh.scale.setScalar(i),t.material.opacity=j.lerp(.48,.8,e)})}function kh(n,t){n.alive||n.deathProgress<1||n.bloodPoolSpawned||(n.bloodPoolDelay=Math.max(0,n.bloodPoolDelay-t),!(n.bloodPoolDelay>0)&&(mI(n.group.position),n.bloodPoolSpawned=!0))}function _I(n){const t=n.clone();t.y=Math.max(.16,t.y);const e=new ua({map:Yd,color:16761677,depthWrite:!1,transparent:!0,opacity:.98,blending:rs});e.toneMapped=!1;const i=new al(e);i.position.copy(t).add(new w(0,.28,0)),i.scale.setScalar(.78),Pt.add(i);const s=new Ie({color:16769678,transparent:!0,opacity:.62,depthWrite:!1,side:Ne,blending:rs});s.toneMapped=!1;const o=new Nt(new ul(.2,.3,48),s);o.rotation.x=-Math.PI/2,o.position.set(t.x,.07,t.z),o.renderOrder=5,Pt.add(o);const r=[];for(let a=0;a<14;a+=1){const c=Math.PI*2*a/14+Math.random()*.28,l=new Ie({color:Math.random()>.35?16773544:16742973,transparent:!0,opacity:.92,depthWrite:!1,side:Ne,blending:rs});l.toneMapped=!1;const u=new Nt(new Qs(.045+Math.random()*.025,7),l);u.position.copy(t).add(new w(0,.2,0)),u.renderOrder=5,Pt.add(u),r.push({mesh:u,material:l,velocity:new w(Math.sin(c)*(1.5+Math.random()*1.9),.55+Math.random()*.75,Math.cos(c)*(1.5+Math.random()*1.9))})}Qo.push({flash:i,flashMaterial:e,ring:o,ringMaterial:s,sparks:r,life:um,maxLife:um})}function zv(n){const t=Qo[n];Pt.remove(t.flash),t.flashMaterial.dispose(),Pt.remove(t.ring),t.ring.geometry.dispose(),t.ringMaterial.dispose(),t.sparks.forEach(e=>{Pt.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose()}),Qo.splice(n,1)}function xI(n){for(let t=Qo.length-1;t>=0;t-=1){const e=Qo[t];e.life=Math.max(0,e.life-n);const i=e.maxLife>0?e.life/e.maxLife:0,s=1-i;e.flashMaterial.opacity=Math.min(1,i*2.5),e.flash.scale.setScalar(.78+s*2.15),e.ringMaterial.opacity=.62*i,e.ring.scale.setScalar(1+s*(oi/.3)),e.sparks.forEach(o=>{o.velocity.y-=n*2.6,o.mesh.position.addScaledVector(o.velocity,n),o.mesh.lookAt(Se.position),o.material.opacity=.92*i}),e.life<=0&&zv(t)}}function yI(n,t,e){var u,d;const i=n.crack.basis,s=((u=e==null?void 0:e.clone)==null?void 0:u.call(e))??i.normal.clone();s.lengthSq()<Xt&&s.copy(i.normal),s.normalize();const o=((d=t==null?void 0:t.clone)==null?void 0:d.call(t))??n.mesh.position.clone().addScaledVector(i.normal,i.halfThickness),r=new ua({map:Yd,color:te.glassEdge,transparent:!0,opacity:.9,depthWrite:!1,blending:rs});r.toneMapped=!1;const a=new al(r);a.position.copy(o).addScaledVector(s,.08),a.scale.setScalar(fa*.72),Pt.add(a);const c=[],l=22;for(let h=0;h<l;h+=1){const f=.045+Math.random()*.075,p=new Qs(f,3),v=new Ie({color:Math.random()>.35?te.glassEdge:te.glass,transparent:!0,opacity:.72,depthWrite:!1,side:Ne,blending:rs});v.toneMapped=!1;const g=new Nt(p,v);g.position.copy(o).addScaledVector(i.tangent,(Math.random()-.5)*i.width*.78).addScaledVector(i.bitangent,(Math.random()-.5)*i.height*.78).addScaledVector(s,.03+Math.random()*.05),g.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.renderOrder=3,Pt.add(g);const m=s.clone().multiplyScalar(.75+Math.random()*1.35);m.addScaledVector(i.tangent,(Math.random()-.5)*1.8),m.addScaledVector(i.bitangent,(Math.random()-.5)*1.45),m.y+=.35+Math.random()*.55,c.push({mesh:g,material:v,velocity:m,spin:new w((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)})}Jo.push({flash:a,flashMaterial:r,shards:c,life:.82,maxLife:.82})}function Uv(n){const t=Jo[n];Pt.remove(t.flash),t.flashMaterial.dispose(),t.shards.forEach(e=>{Pt.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose()}),Jo.splice(n,1)}function SI(n){for(let t=Jo.length-1;t>=0;t-=1){const e=Jo[t];e.life=Math.max(0,e.life-n);const i=e.maxLife>0?e.life/e.maxLife:0;e.flashMaterial.opacity=.9*Math.min(1,i*2.4),e.flash.scale.multiplyScalar(1+n*1.85),e.shards.forEach(s=>{s.velocity.y-=n*1.9,s.mesh.position.addScaledVector(s.velocity,n),s.mesh.rotation.x+=s.spin.x*n,s.mesh.rotation.y+=s.spin.y*n,s.mesh.rotation.z+=s.spin.z*n,s.material.opacity=.72*i}),e.life<=0&&Uv(t)}}function Fv(){Ve.set(Math.sin(qs),0,Math.cos(qs)).normalize()}function Kd(){const n=nR.clone().sub(Yn);n.y=0,!(n.lengthSq()<=1e-6)&&(Ve.copy(n.normalize()),qs=Math.atan2(Ve.x,Ve.z))}function Tl(){nm.copy(R.group.position).addScaledVector(Ve,32),nm.y=0}function Zd(n){if(!Pl()){To=n.clientX??null;return}let t=n.movementX||0;!t&&To!==null&&typeof n.clientX=="number"&&(t=n.clientX-To),To=typeof n.clientX=="number"?n.clientX:To,t!==0&&(qs-=t*yl.mouseSensitivity*.003,Fv(),Tl())}function Ov(){Jt.movePointerId=null,Jt.moveRight=0,Jt.moveForward=0,Jt.moveSprint=!1,rn.style.setProperty("--move-x","0px"),rn.style.setProperty("--move-y","0px"),rn.classList.remove("is-active")}function Bv(n){const t=n.clientX-Jt.moveStartX,e=n.clientY-Jt.moveStartY,i=Math.hypot(t,e);if(i<hC){Jt.moveRight=0,Jt.moveForward=0,Jt.moveSprint=!1,rn.style.setProperty("--move-x","0px"),rn.style.setProperty("--move-y","0px");return}const s=Math.min(i,el),o=t/i,r=e/i;Jt.moveRight=o,Jt.moveForward=-r,Jt.moveSprint=s>=el*dC,rn.style.setProperty("--move-x",`${o*s}px`),rn.style.setProperty("--move-y",`${r*s}px`)}function MI(n){var t;we()&&(n.preventDefault(),n.stopPropagation(),Qe(!0),Jt.movePointerId=n.pointerId,Jt.moveStartX=n.clientX,Jt.moveStartY=n.clientY,rn.classList.add("is-active"),(t=rn.setPointerCapture)==null||t.call(rn,n.pointerId),Bv(n))}function EI(n){n.pointerId===Jt.movePointerId&&(n.preventDefault(),n.stopPropagation(),Bv(n))}function $d(n){n.pointerId===Jt.movePointerId&&(n.preventDefault(),n.stopPropagation(),Ov())}function kv(){Jt.lookPointerId=null,$e.style.setProperty("--look-x","0px"),$e.style.setProperty("--look-y","0px"),$e.style.setProperty("--look-knob-x","0px"),$e.classList.remove("is-active")}function Hv(){Jt.firePointerId=null}function wI(n,t){const e=t.getBoundingClientRect();return{x:n.clientX-e.left,y:n.clientY-e.top}}function AI(n){const t=j.clamp(n.clientX-Jt.lookStartX,-el,el);$e.style.setProperty("--look-knob-x",`${t}px`)}function TI(n){var e;if(!we())return;n.preventDefault(),n.stopPropagation(),Qe(!0),Jt.lookPointerId=n.pointerId,Jt.lookStartX=n.clientX,Jt.lookStartY=n.clientY,Jt.lookLastX=n.clientX;const t=wI(n,$e);$e.style.setProperty("--look-x",`${t.x}px`),$e.style.setProperty("--look-y",`${t.y}px`),$e.style.setProperty("--look-knob-x","0px"),$e.classList.add("is-active"),(e=$e.setPointerCapture)==null||e.call($e,n.pointerId)}function Vv(n){n!==0&&(qs-=n*yl.mouseSensitivity*fC,Fv(),Tl())}function bI(n){if(n.pointerId!==Jt.lookPointerId)return;n.preventDefault(),n.stopPropagation();const t=n.clientX-Jt.lookLastX;Jt.lookLastX=n.clientX,AI(n),Vv(t)}function jd(n){n.pointerId===Jt.lookPointerId&&(n.preventDefault(),n.stopPropagation(),kv())}function RI(n){var t;we()&&(n.preventDefault(),n.stopPropagation(),vs(),Qe(!0),Jt.firePointerId=n.pointerId,Jt.fireLookLastX=n.clientX,(t=pn.setPointerCapture)==null||t.call(pn,n.pointerId),$v())}function CI(n){if(n.pointerId!==Jt.firePointerId)return;n.preventDefault(),n.stopPropagation();const t=n.clientX-Jt.fireLookLastX;Jt.fireLookLastX=n.clientX,Vv(t)}function Gv(n){n.pointerId===Jt.firePointerId&&(n.preventDefault(),n.stopPropagation(),Hv(),gn())}function PI(){Hv(),gn()}function LI(n){n.preventDefault(),n.stopPropagation(),vs(),Qe(!0),sl()}function II(n){n.preventDefault(),n.stopPropagation(),vs(),Qe(!0),bv()}function DI(n){n.preventDefault(),n.stopPropagation(),vs(),Qe(!0),c_()}function bl(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=720}function Wv(){const{width:n,height:t}=hf();return n>=t}function Jd(){return window.matchMedia("(pointer: coarse)").matches}function qv(){return Jd()&&Wv()}function Xv(){return Jd()&&!Wv()}function lr(){return Xv()}function NI(){return qv()?qb:Xv()?Xb:sg}function zI(){return cg+(qv()?tR:0)}function Rl(){const n=lr();return Pb.hidden=!n,document.body.classList.toggle("orientation-blocked",n),n&&(Ki(),Ra()),eo(),n}async function Yv(){var n,t;if(!Jd()||!((t=(n=globalThis.screen)==null?void 0:n.orientation)!=null&&t.lock))return!1;try{return await screen.orientation.lock("landscape"),!0}catch{return!1}}function ba(){return document.pointerLockElement===bn}function Qd(){document.body.classList.toggle("camera-locked",ba())}function Cl(){var n;if(!(!Pl()||ba()))try{const t=(n=bn.requestPointerLock)==null?void 0:n.call(bn);t!=null&&t.catch&&t.catch(()=>{})}catch{Qd()}}function Ra(){var n;ba()&&((n=document.exitPointerLock)==null||n.call(document)),document.body.classList.remove("camera-locked")}function UI(){const n=ba();To=null,Qd(),n||Ki(),!n&&FI()&&Dl(!0)}function FI(){return!bl()&&!F.settingsOpen&&!lr()&&document.hasFocus()&&(F.phase==="running"||F.phase==="lost"&&F.resultShown&&ui.hidden)}function Pl(){return bl()||F.settingsOpen||lr()?!1:we()?!0:F.phase==="lost"&&F.resultShown&&ui.hidden}function we(){return F.phase==="running"&&!F.settingsOpen&&!F.resultShown&&!lr()}function Kv(){return(F.phase==="running"||F.phase==="lost")&&!F.settingsOpen&&!lr()}function eo(){zb.hidden=F.phase!=="ready"||F.settingsOpen||F.resultShown||lr(),document.body.classList.toggle("raid-start-vignette",(F.phase==="ready"||document.body.classList.contains("raid-start-vignette-fading"))&&!F.resultShown)}function Ll(){Br!==null&&(window.clearTimeout(Br),Br=null)}function OI(){F.phase!=="ready"||Rl()||(Ki(),Ll(),document.body.classList.add("raid-start-vignette-fading"),Br=window.setTimeout(()=>{document.body.classList.remove("raid-start-vignette","raid-start-vignette-fading"),Br=null},1700),Kd(),R.group.rotation.set(0,qs,0),Tl(),uf(1),F.phase="running",ov(),lP(),Ld(),Qt("ui-start"),eo(),Qe(!0),Cl(),vi())}function sl(){return!we()||F.reloadTimer>0||F.weaponAmmo>=va?!1:(F.reloadTimer=Tg,Dv(R.weapon,R),M3(),Qt("reload",{intensity:.75,position:R.group.position}),!0)}function BI(){F.reloadTimer=0,F.weaponAmmo=va,tr(R.weapon,!0)}function Zv(){return Ca()?(gn(),!1):!we()||F.shootCooldown>0||F.reloadTimer>0?!1:F.weaponAmmo<=0?(sl(),!1):qd(R.weapon,"player",s2,R)?(ef(R.weapon,1),Xd(R.weapon,"player"),F.weaponAmmo=Math.max(0,F.weaponAmmo-1),F.shootCooldown=i2,F.weaponAmmo<=0&&sl(),!0):!1}function $v(){return Ca()?(gn(),!1):(F.fireHeld=!0,Zv())}function gn(){F.fireHeld=!1}function kI(n){if(Ca()&&gn(),F.reloadTimer>0){if(F.reloadTimer=Math.max(0,F.reloadTimer-n),F.reloadTimer>0)return;BI()}F.fireHeld&&Zv()}function jv(){const n=new w;return Se.getWorldDirection(n),n.y=0,n.lengthSq()<.001&&n.copy(Ve),n.normalize()}function aa(n,t=null){const e=jn(R,On),i=new w(n.x,n.y??e.y,n.z);return!Yi.some(s=>{const{glassFace:o}=s;return o&&o===t||!Ea(s)||o&&!o.alive?!1:Sl(e,i,s,.02)})}function Jv(n){return aa(jn(n,xn))}function Bo(n,t,e=0){const i=R.group.position,s=new w(n.x-i.x,0,n.z-i.z),o=s.length();return o>na+e||o<Xt||s.clone().normalize().dot(t)<F2?null:o}function HI(n){let t=null,e=Number.POSITIVE_INFINITY;const i=jn(R,On),s=(o,r)=>{r<e&&(e=r,t=o)};return ge.forEach(o=>{if(!o.alive)return;const r=jn(o,xn),a=Bo(r,n);a!==null&&Jv(o)&&s({type:"enemy",enemy:o,point:r.clone().addScaledVector(n,-Ed*.45),normal:n.clone().multiplyScalar(-1)},a)}),xa.forEach(o=>{const r=pv(o,i,na);if(!r)return;const a=Bo(r.point,n);a===null||!aa(r.point,o)||s(r,a)}),Hi.forEach(o=>{if(o.exploded||o.explosionQueued||o.sinking)return;const r=new w(o.body.position.x,o.body.position.y,o.body.position.z),a=Bo(r,n,Ge);a===null||i.distanceTo(r)>na+Ge||aa(r)&&s({type:"glassBall",ball:o,point:r,normal:Bc(i,r).multiplyScalar(-1)},a)}),t}function VI(n){return n.type==="enemy"?NL(n.enemy):Lg}function Hc(n,t){const e=new w(n.x-R.group.position.x,0,n.z-R.group.position.z);return e.lengthSq()<Xt&&e.copy(t),e.y=0,e.lengthSq()<Xt&&e.copy(Ve),e.normalize()}function GI(n){return n*-Math.log(.04)/_l}function Qv(n,t,e){if(!(n!=null&&n.alive))return;const i=lf(t);if(!i)return;const s=GI(e);n.hitSlowTimer=_l,n.hitKnockback.set(i.x*s,0,i.z*s),n.body.wakeUp()}function WI(n,t){Qv(n,t,V2)}function t_(n,t,e,i={}){const s=i.canActivate??!0,o=wa(n==null?void 0:n.cubeIndex);if(!(o!=null&&o.ballsActive)){if(!s)return;Ml(n.cubeIndex)}if(!s&&(n!=null&&n.settledStatic||!to(n)||n.body.sleepState===lt.SLEEPING)||(s?!Aa(n):!(n!=null&&n.body)))return;const r=e??new w(n.body.position.x,n.body.position.y,n.body.position.z),a=i.playImpactSound??!0;n.body.applyImpulse(new M(t.x*Mm,G2,t.z*Mm),new M(r.x,r.y,r.z)),Vi(n.body,Ko,Zo),a&&Qt("ball-hit",{position:r,intensity:.8,pitch:.72+n.body.userData.index%5*.05})}function tf(n){return new w(n.body.position.x,n.body.position.y,n.body.position.z)}function qI(n,t){if(!(n!=null&&n.body))return!1;const e=tf(n),i=Math.max(e.distanceTo(t),.001);if(i>oi||!Lv(n))return!1;const s=e.clone().sub(t);s.y=0,s.lengthSq()<Xt&&s.set(1,0,0),s.normalize();const o=Math.max(n.body.mass||.01,.01),r=j.clamp(1-i/oi,.25,1);return n.body.applyImpulse(new M(s.x*xm*o*r,S2*o*r,s.z*xm*o*r),new M(e.x,e.y,e.z)),n.body.angularVelocity.x+=j.randFloatSpread(bu)*r,n.body.angularVelocity.y+=j.randFloatSpread(bu)*r,n.body.angularVelocity.z+=j.randFloatSpread(bu)*r,Vi(n.body,Td,bd),!0}function XI(n,t,e){var o,r;if(!Lv(n))return!1;const i=e??tf(n),s=Math.max(n.body.mass||.01,.01);return n.body.applyImpulse(new M(t.x*_m*s,y2*s,t.z*_m*s),new M(i.x,i.y,i.z)),n.body.angularVelocity.x+=j.randFloatSpread(Tu),n.body.angularVelocity.y+=j.randFloatSpread(Tu),n.body.angularVelocity.z+=j.randFloatSpread(Tu),Vi(n.body,Td,bd),Qt("impact-static",{position:i,intensity:((o=n.body.userData)==null?void 0:o.kind)==="weapon-casing"?.26:.42,pitch:((r=n.body.userData)==null?void 0:r.kind)==="weapon-casing"?1.24:.92}),!0}function YI(){if(!we()||F.kickCooldown>0||R.meleeAttackActive)return!1;gn();const n=jv(),t=jn(R,On);let e=!1;return ge.forEach(i=>{if(!i.alive)return;const s=jn(i,xn);Bo(s,n)===null||!Jv(i)||(WI(i,Hc(s,n)),e=!0)}),Hi.forEach(i=>{if(i.exploded||i.explosionQueued||i.sinking)return;const s=new w(i.body.position.x,i.body.position.y,i.body.position.z);Bo(s,n,Ge)===null||t.distanceTo(s)>na+Ge||aa(s)&&(t_(i,Hc(s,n),s),e=!0)}),cs.forEach(i=>{if(!(i!=null&&i.body))return;const s=tf(i);Bo(s,n,(i.kickRadius??.12)+ym)===null||en(R.group.position,s)>na+(i.kickRadius??.12)+ym||aa(s)&&XI(i,Hc(s,n),s)&&(e=!0)}),F.kickCooldown=H2,Qt("melee-swing",{intensity:e?1.05:.78,pitch:e?.74:.82,position:R.group.position}),Pa(R.group.position,Rd,Rg),e}function KI(){return!we()||F.meleeCooldown>0||R.meleeAttackActive?!1:(gn(),F.meleeCooldown=O2,R.meleeAttackActive=!0,R.meleeAttackTimer=0,R.meleeImpactDone=!1,R.meleeAttackDirection.copy(jv()),Qt("melee-swing",{intensity:1,pitch:j.randFloat(.92,1.08),position:R.group.position}),Pa(R.group.position,Rd,Rg),!0)}function ZI(){const n=R.meleeAttackDirection.clone().normalize(),t=HI(n);return t?(Qt("melee",{intensity:1.05,position:R.group.position}),cr({point:t.point,normal:t.normal,type:t.type}),ss(t,VI(t),{kind:"melee",point:t.point,direction:n}),!0):!1}function li(n){return j.smoothstep(j.clamp(n,0,1),0,1)}function Ca(){return R.meleeAttackActive&&R.meleeAttackTimer<_a}function e_(n){return!!(n!=null&&n.meleeAttackActive)&&n.meleeAttackTimer<ml}function ef(n,t=1){!n||n.kind!=="rifle"||(n.recoil=Math.min(1.25,n.recoil+t),n.recoilYaw=j.randFloatSpread(1),n.recoilRoll=j.randFloatSpread(1))}function $I(n,t,e){return new ye(j.lerp(n.x,t.x,e),j.lerp(n.y,t.y,e),j.lerp(n.z,t.z,e))}function jI(n,t,e){n.root.position.copy(t),n.root.rotation.copy(e??n.restRotation??new ye)}function Uu(n,t,e,i,s,o){n.root.position.lerpVectors(t,i,o),n.root.rotation.copy($I(e,s,o))}function JI(){if(!Ca())return 0;const n=R.meleeAttackTimer;if(n<Oo)return li(n/Oo);if(n<ks)return 1;const t=(n-ks)/Math.max(.001,_a-ks);return 1-li(t)}function t0(n,t,e=0){var s;if(!n||n.kind!=="rifle")return;n.recoil*=Math.pow(.018,t/.16),n.recoil<.01&&(n.recoil=0);const i=n.recoil*n.recoil;n.root.position.copy(n.restPosition),n.root.position.z-=i*.07,n.root.position.y+=i*.018-e*.035,n.root.rotation.x=(((s=n.restRotation)==null?void 0:s.x)??0)-i*.12+B2*e,n.root.rotation.y=n.recoilYaw*i*.04,n.root.rotation.z=n.recoilRoll*i*.035}function QI(n,t,e){if(!n||n.kind!=="machete")return;if(n.root.position.copy(n.restPosition),!e){n.root.rotation.copy(n.restRotation??new ye);return}const i=Nc,s=Nc+gm,o=n.restRotation??new ye;let r=o.x,a=o.y,c=o.z;if(t<i){const l=li(t/Nc);r=o.x-.24*l,a=o.y-.64*l,c=o.z+.52*l}else if(t<s){const l=li((t-i)/gm);r=j.lerp(o.x-.24,o.x+.32,l),a=j.lerp(o.y-.64,o.y+.76,l),c=j.lerp(o.z+.52,o.z-.55,l)}else{const l=li((t-s)/Math.max(.001,ml-s));r=j.lerp(o.x+.32,o.x,l),a=j.lerp(o.y+.76,o.y,l),c=j.lerp(o.z-.55,o.z,l)}n.root.rotation.set(r,a,c)}function tD(n){if(!n||n.kind!=="machete")return;if(!Ca()){jI(n,n.sheathedPosition,n.sheathedRotation);return}const t=R.meleeAttackTimer;if(t<Oo){const s=li(t/Oo);Uu(n,n.sheathedPosition,n.sheathedRotation,n.combatPosition,n.combatRotation,s);return}if(t<ks){const s=li((t-Oo)/Ig);Uu(n,n.combatPosition,n.combatRotation,n.combatPosition,n.strikeRotation,s);return}const e=(t-ks)/Math.max(.001,_a-ks),i=li(e);Uu(n,n.combatPosition,n.strikeRotation,n.sheathedPosition,n.sheathedRotation,i)}function eD(n){R.meleeAttackActive&&(R.meleeAttackTimer+=n,!R.meleeImpactDone&&R.meleeAttackTimer>=ks&&(R.meleeImpactDone=!0,ZI()),R.meleeAttackTimer>=_a&&(R.meleeAttackActive=!1,R.meleeAttackTimer=0,R.meleeImpactDone=!0))}function e0(n,t){return!(n!=null&&n.alive)||n.type!=="melee"||!we()||n.attackCooldown>0||n.meleeAttackActive?!1:(n.attackCooldown=ZR,n.meleeAttackActive=!0,n.meleeAttackTimer=0,n.meleeImpactDone=!1,n.meleeAttackTarget=t,Qt("melee-swing",{intensity:.9,pitch:j.randFloat(.82,.94),position:n.group.position}),!0)}function nD(n){var i;const t=n.meleeAttackTarget;if(!n.alive||!t)return!1;const e=n.group.position;if(t.type==="glass")return!((i=t.glassFace)!=null&&i.alive)||en(e,t.point)>Fs?!1:(cr({point:t.point.clone().addScaledVector(t.normal,.04),normal:t.normal,type:"glass"}),Qt("melee",{position:n.group.position}),ss({type:"glass",glassFace:t.glassFace,point:t.point,normal:t.normal},Au,{kind:"melee",point:t.point,direction:t.normal}),!0);if(t.type==="player"){if(!R.alive||n.state!=="chase")return!1;const s=R.group.position,o=s.clone().sub(e);if(o.y=0,o.length()>Fs||ol(e,s,.08))return!1;const r=o.lengthSq()>Xt?o.normalize():new w;Qt("melee",{position:n.group.position});const a=jn(n,xn),c=jn(R,On);return qL(Au,a,c)||ss({type:"player"},Au,{kind:"melee",direction:r}),!0}return!1}function iD(n,t){n.meleeAttackActive&&(n.meleeAttackTimer+=t,!n.meleeImpactDone&&n.meleeAttackTimer>=Nc&&(n.meleeImpactDone=!0,nD(n)),n.meleeAttackTimer>=ml&&(n.meleeAttackActive=!1,n.meleeAttackTimer=0,n.meleeImpactDone=!0,n.meleeAttackTarget=null))}function sD(n){t0(R.weapon,n,JI()),tD(R.meleeWeapon),ge.forEach(t=>{var e;((e=t.weapon)==null?void 0:e.kind)==="rifle"?t0(t.weapon,n):QI(t.weapon,t.meleeAttackTimer,e_(t))})}function oD(n){eD(n),ge.forEach(t=>iD(t,n))}function Hh(n){n&&(n.kind==="rifle"&&(n.recoil=0,n.recoilYaw=0,n.recoilRoll=0),n.root.position.copy(n.restPosition),n.root.rotation.copy(n.restRotation??new ye))}function nf(){R.meleeAttackActive=!1,R.meleeAttackTimer=0,R.meleeImpactDone=!0,R.meleeAttackDirection.copy(Ve),Hh(R.weapon),Hh(R.meleeWeapon)}function sf(n){n.meleeAttackActive=!1,n.meleeAttackTimer=0,n.meleeImpactDone=!0,n.meleeAttackTarget=null,Hh(n.weapon)}function n_(){return Ue.has("KeyW")||Ue.has("KeyA")||Ue.has("KeyS")||Ue.has("KeyD")||Ue.has("ArrowUp")||Ue.has("ArrowDown")||Ue.has("ArrowLeft")||Ue.has("ArrowRight")||Math.abs(Jt.moveForward)>0||Math.abs(Jt.moveRight)>0}function of(){return Ue.has("ShiftLeft")||Ue.has("ShiftRight")||Jt.moveSprint}function rD(n){if(!we()||!n_()){R.footstepTimer=0;return}const t=of();R.footstepTimer-=n,!(R.footstepTimer>0)&&(Qt("player-footstep",{intensity:t?1:.72,pitch:t?j.randFloat(1.02,1.12):j.randFloat(.88,1),position:R.group.position}),t&&Pa(R.group.position,A2,T2),R.footstepTimer=t?nC:eC)}function aD(n){if(!(!we()||!R.alive)){if(!JP(R.body.position.x,R.body.position.z,us*.15)){R.slopeContactTimer=0;return}R.slopeContactTimer+=n,R.slopeContactTimer>=gC&&(g_(),Il(!1))}}function cD(){const n=we()&&n_()&&of();document.body.classList.toggle("sprinting",n)}function lD(n){R.hitSlowTimer=Math.max(0,R.hitSlowTimer-n);const t=new w;Se.getWorldDirection(t),t.y=0,t.lengthSq()<Xt?t.copy(Ve):t.normalize();const e=new w().crossVectors(t,sr).normalize(),i=new w;(Ue.has("KeyW")||Ue.has("ArrowUp"))&&i.add(t),(Ue.has("KeyS")||Ue.has("ArrowDown"))&&i.sub(t),(Ue.has("KeyD")||Ue.has("ArrowRight"))&&i.add(e),(Ue.has("KeyA")||Ue.has("ArrowLeft"))&&i.sub(e),i.addScaledVector(t,Jt.moveForward),i.addScaledVector(e,Jt.moveRight),i.lengthSq()>0?(i.normalize(),R.bootMoveDirection.copy(i),R.body.wakeUp()):R.bootMoveDirection.set(0,0,0);const s=of();R.bootAnimationSpeedMultiplier=s?bm/Tm:1;const r=(s?bm:Tm)*(R.hitSlowTimer>0?aC:1);R.body.velocity.x=i.x*r+R.hitKnockback.x,R.body.velocity.z=i.z*r+R.hitKnockback.z,xv(),R.group.rotation.y=Math.atan2(Ve.x,Ve.z),R.hitKnockback.multiplyScalar(Math.pow(.04,n/Dg))}function uD(n){return new w(Math.sin(n.group.rotation.y),0,Math.cos(n.group.rotation.y)).normalize()}function hD(n){return Math.atan2(n.x,n.z)}function dD(n,t){return Math.atan2(Math.sin(t-n),Math.cos(t-n))}function fD(n,t,e,i=0){if(t.lengthSq()<=.001)return;const s=hD(t);if(i<=0){n.group.rotation.y=s;return}const o=dD(n.group.rotation.y,s),r=1-Math.pow(.001,e/i);n.group.rotation.y+=o*j.clamp(r,0,1)}function pD(n,t){return new w(n.x,Le(n.x,n.z)+t,n.z)}function rf(n,t){const e=n!=null&&n.group?jn(n,xn):pD(n,xn),i=jn(R,On);return!Yi.some(s=>{const{glassFace:o}=s;return o||!Ea(s)?!1:Sl(e,i,s,.03)})}function ol(n,t,e=.03){const i=new w(n.x,vm,n.z),s=new w(t.x,vm,t.z);let o=null;return xa.forEach(r=>{if(!r.alive)return;const a=t3(i,s,r.body,e);!a||o&&a.t>=o.t||(o={glassFace:r,t:a.t,normal:a.normal,point:i.clone().lerp(s,a.t)})}),o}function mD(n,t,e=0){return Math.abs(n.x-t.x)<=Ys+e&&Math.abs(n.z-t.z)<=Ys+e}function en(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function gD(n,t,e){var o;const i=Ys+JR;return((o=[new w(e.x-i,0,e.z-i),new w(e.x+i,0,e.z-i),new w(e.x-i,0,e.z+i),new w(e.x+i,0,e.z+i)].map(r=>{const a=ol(n,r,.08),c=ol(r,t,.08),l=(a?4:0)+(c?4:0);return{point:r,score:n.distanceTo(r)+r.distanceTo(t)+l}}).sort((r,a)=>r.score-a.score)[0])==null?void 0:o.point)??null}function vD(n,t,e,i){const s=t.point.clone(),o=en(e,s),r=t.glassFace.cubeOrigin,a=mD(i,r,.05),c=a?null:gD(e,i,r),l=e.distanceTo(i),u=c?e.distanceTo(c)+c.distanceTo(i):Number.POSITIVE_INFINITY,d=l+t.glassFace.health*jR;return{mode:a||n.type==="ranged"||t.glassFace.health<=2||o<=Fs||d<=u?"break":"detour",glassFace:t.glassFace,point:s,normal:t.normal,detourPoint:c}}function _D(n,t,e){if(!R.alive||F.invisibleToEnemies||(R.group.position,n.group.position,t>xg)||!rf(n))return!1;if(e.lengthSq()<Xt)return!0;const i=Mv(n);return uD(n).dot(e.clone().normalize())>=i}function xD(n,t,e,i){return R.alive&&n.type==="melee"&&!F.invisibleToEnemies&&t<=$R&&rf(n)}function yD(n,t=.32){return Yi.some(e=>{if(e.glassFace||!Ea(e))return!1;const i=Id(e);return i?Math.abs(n.x-i.center.x)<=i.halfExtents.x+t&&Math.abs(n.z-i.center.z)<=i.halfExtents.z+t:!1})}function SD(n,t,e=.18){const i=new w(n.x,Le(n.x,n.z)+xn,n.z),s=new w(t.x,Le(t.x,t.z)+xn,t.z);return!Yi.some(o=>o.glassFace||!Ea(o)?!1:Sl(i,s,o,e))}function i_(n,t,e){if(!t||!Gi(t.x,t.z,.9))return!1;const i=en(t,e);return i>=Qc+1.4&&i<=Fo&&!yD(t,.22)&&rf(t)&&SD(n.group.position,t,.08)}function MD(n,t){const e=n.group.position;let i=null,s=Number.POSITIVE_INFINITY;return qg.forEach(({position:o})=>{const r=en(e,o);if(r>bg||!i_(n,o,t))return;const a=en(t,o),c=ge.some(d=>d!==n&&d.alive&&d.type==="ranged"&&en(d.group.position,o)<1.5)?5:0,l=(Qc+Fo)*.5,u=r*1.15+Math.abs(a-l)*.45+c;u<s&&(s=u,i=o)}),(i==null?void 0:i.clone())??null}function ED(n,t,e,i,s,o){if(n.type!=="ranged"||!(n.state==="chase"||n.state==="interest")||!i||o||s>Fo+bg){n.coverPosition=null,n.coverReplanTimer=Sm;return}n.coverReplanTimer=Math.max(0,n.coverReplanTimer-t),!(n.coverPosition&&n.coverReplanTimer>0&&i_(n,n.coverPosition,e))&&(n.coverReplanTimer>0||(n.coverReplanTimer=Sm,n.coverPosition=MD(n,e)))}function s_(n){return n<=yg?"chase":"interest"}function ko(n,t){n.state=t,t==="search"&&(n.searchTimer=Ag,n.searchMode="travel",n.scanProgress=0,n.scanStartYaw=n.group.rotation.y,n.coverPosition=null,js(n)),t==="interest"&&(n.lostSightTimer=pm,n.searchMode="travel",n.scanProgress=0),t==="chase"&&(n.lostSightTimer=pm,n.searchMode="travel",n.scanProgress=0),t==="patrol"&&(n.searchTimer=0,n.lostSightTimer=0,n.searchMode="travel",n.scanProgress=0,n.coverPosition=null,js(n))}function wD(n,t=null){n.alive&&(n.lastKnownPlayerPosition.copy(R.group.position),ko(n,t??s_(en(n.group.position,R.group.position))))}function af(n){return n.state==="interest"||n.state==="chase"}function AD(){return ge.filter(n=>n.active)}function TD(){return ge.filter(n=>n.active&&n.alive)}function o_(n,t){const e=F.alarmLevel>=L2;ge.forEach(i=>{if(!i.active||!i.alive)return;const s=en(i.group.position,n);!e&&s>t||(i.lastKnownPlayerPosition.copy(n),af(i)||ko(i,"search"))})}function r_(n,t,e=Pg){if(!we())return;const i=F.alarmLevel,s=F.radioDisabled?D2:100;F.alarmLevel=j.clamp(F.alarmLevel+n,0,s),F.alarmHoldTimer=Cg,F.alarmPulseTimer=.42,F.lastNoisePosition.copy(t),F.lastNoisePosition.y=0,o_(F.lastNoisePosition,e),i<Zs&&F.alarmLevel>=Zs?(Qt("alarm",{intensity:1,position:F.lastNoisePosition}),F.reinforcementTimer=Math.min(F.reinforcementTimer,.45)):i<tl&&F.alarmLevel>=tl&&Qt("spot",{intensity:.78,position:F.lastNoisePosition})}function Pa(n,t,e){if(!we()||F.invisibleToEnemies)return;const i=n.clone();i.y=0,r_(e,i,t)}function bD(n,t){const e=t<=yg?26:18;r_(e,R.group.position,Pg),Qt("spot",{intensity:.82,position:n.group.position})}function RD(n){return!n.reserve||n.active?!1:(n.active=!0,n.alive=!0,n.group.visible=!0,n.maxHealth=wl(n),n.health=n.maxHealth,n.hitFlash=0,ar(n),n.hitSlowTimer=0,n.hitKnockback.set(0,0,0),n.attackCooldown=0,sf(n),n.shootCooldown=0,n.weaponAmmo=n.type==="ranged"?gl:0,n.reloadTimer=0,js(n),tr(n.weapon,!0),n.coverPosition=null,n.coverReplanTimer=j.randFloat(.15,.65),n.searchMode="travel",n.searchTimer=Ag,n.lostSightTimer=0,n.scanProgress=0,n.scanStartYaw=n.group.rotation.y,n.glassTactic="none",n.glassTargetFaceId=null,n.deathProgress=1,n.bloodPoolSpawned=!0,n.bloodPoolDelay=0,n.group.rotation.set(0,0,0),n.surfaceNormal.copy(hs(n.spawn.x,n.spawn.z)),n.group.position.set(n.spawn.x,Le(n.spawn.x,n.spawn.z),n.spawn.z),n.body.position.set(n.spawn.x,n.group.position.y+xn,n.spawn.z),n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),n.body.wakeUp(),n.lastKnownPlayerPosition.copy(F.lastNoisePosition),Dt.bodies.includes(n.body)||Dt.addBody(n.body),ko(n,"search"),Qt("alarm",{intensity:.72,position:n.group.position}),!0)}function CD(n){if(F.radioDisabled||F.alarmLevel<Zs){F.reinforcementTimer=Math.min(F.reinforcementTimer,ea);return}const t=ge.find(e=>e.reserve&&!e.active);t&&(F.reinforcementTimer=Math.max(0,F.reinforcementTimer-n),!(F.reinforcementTimer>0)&&RD(t)&&(F.reinforcementTimer=ea))}function PD(n){ge.some(e=>e.active&&e.alive&&af(e))?F.alarmHoldTimer=Cg:F.alarmHoldTimer=Math.max(0,F.alarmHoldTimer-n),F.alarmPulseTimer=Math.max(0,F.alarmPulseTimer-n),F.alarmLevel>0&&F.alarmHoldTimer<=0&&(F.alarmLevel=Math.max(0,F.alarmLevel-P2*n)),CD(n)}function LD(){return ya.find(n=>n.type==="radio")??null}function a_(){const n=LD();return!n||n.disabled||F.radioDisabled?null:en(R.group.position,n.position)<=I2?n:null}function cf(n,t){n.ring.rotation.z+=t*(n.disabled?.45:1.8),n.ring.visible=!n.disabled,n.screenMaterial.color.setHex(n.disabled?2502701:4575676),n.screenMaterial.emissive.setHex(n.disabled?397583:1759429),n.screenMaterial.emissiveIntensity=n.disabled?.12:.75+Math.sin(Yo.elapsedTime*4.4)*.22}function ID(n){return!n||n.disabled?!1:(n.disabled=!0,F.radioDisabled=!0,F.alarmLevel=Math.min(F.alarmLevel,N2),F.alarmHoldTimer=0,F.alarmPulseTimer=.42,F.reinforcementTimer=ea,F.lastNoisePosition.copy(n.position),Qt("radio-sabotage",{intensity:1,position:n.position}),o_(n.position,Rd+8),cf(n,0),vi(),!0)}function c_(){return we()?ID(a_()):!1}function l_(){const n=we()&&!F.settingsOpen?a_():null;bb.hidden=!n,Rb.textContent=n?"Заглушить связь":"",Cb.textContent=bl()?"кнопка":"T",$r.disabled=!n,$r.classList.toggle("is-available",!!n)}function ca(n){return!(n!=null&&n.alive)||n.type!=="ranged"||n.reloadTimer>0?!1:(n.reloadTimer=o2,n.weaponAmmo=0,n.shootCooldown=0,js(n),Dv(n.weapon,n),Qt("reload",{intensity:.55,position:n.group.position}),!0)}function DD(n){n.reloadTimer=0,n.weaponAmmo=gl,tr(n.weapon,!0)}function ND(n,t){n.type!=="ranged"||n.reloadTimer<=0||(n.reloadTimer=Math.max(0,n.reloadTimer-t),n.reloadTimer<=0&&DD(n))}function u_(n){return!n.alive||n.type!=="ranged"||!we()||n.reloadTimer>0?!1:n.weaponAmmo<=0?(ca(n),!1):!0}function h_(n){return n.weaponAmmo=Math.max(0,n.weaponAmmo-1),n.weaponAmmo<=0}function zD(n,t=R.group.position,e=0,i=!1){if(!u_(n))return!1;const s=qd(n.weapon,"enemy",e,n);if(s){const o=h_(n);ef(n.weapon,.82),Xd(n.weapon,"enemy"),o&&!i&&ca(n)}return s}function UD(n,t){if(!u_(n))return!1;const e=qd(n.weapon,"enemy",0,n);if(e){const i=h_(n);ef(n.weapon,.82),Xd(n.weapon,"enemy"),i&&ca(n)}return e}function js(n){n.burstShotsRemaining=0,n.burstShotTimer=0}function FD(n){n.burstShotsRemaining=r2,n.burstShotTimer=0}function OD(n,t,e,i){if(n.type==="ranged"){if(!i||n.reloadTimer>0){js(n);return}if(n.weaponAmmo<=0){ca(n);return}if(!(n.shootCooldown>0)&&(n.burstShotsRemaining<=0&&FD(n),n.burstShotTimer=Math.max(0,n.burstShotTimer-t),!(n.burstShotTimer>0))){if(zD(n,e,l2,!0)){const s=n.weaponAmmo<=0;if(n.burstShotsRemaining-=1,n.burstShotTimer=a2,s){ca(n);return}}n.burstShotsRemaining<=0&&(n.shootCooldown=c2,n.burstShotTimer=0)}}}function lf(n){var e;const t=((e=n==null?void 0:n.clone)==null?void 0:e.call(n))??new w;return t.y=0,t.lengthSq()<Xt?null:t.normalize()}function BD(n,t){const e=lf(t);e&&(n.hitSlowTimer=_l,n.hitKnockback.set(e.x*wm,0,e.z*wm))}function kD(n){const t=lf(n);t&&(R.hitSlowTimer=Dg,R.hitKnockback.set(t.x*Am,0,t.z*Am))}function HD(n,t){const e=Math.hypot(n.body.velocity.x,n.body.velocity.z);if(!n.alive||e<.35){n.footstepTimer=.08;return}if(n.footstepTimer-=t,n.footstepTimer>0)return;const i={patrol:.18,search:.23,interest:.3,chase:.38}[n.state]??.2;Qt("enemy-footstep",{intensity:i,pitch:n.type==="melee"?j.randFloat(.76,.88):j.randFloat(.9,1.02),position:n.group.position}),n.footstepTimer=j.clamp(iC/Math.max(e,.1),sC,oC)}function VD(n,t){if(!n.alive||!Kv()){n.body.velocity.x=0,n.body.velocity.z=0,n.footstepTimer=.08;return}n.patrolPhase+=t,n.shootCooldown=Math.max(0,n.shootCooldown-t),ND(n,t),n.attackCooldown=Math.max(0,n.attackCooldown-t),n.hitSlowTimer=Math.max(0,n.hitSlowTimer-t);const e=R.group.position,i=n.group.position,s=e.clone().sub(i);s.y=0;const o=s.length(),r=s.lengthSq()>Xt?s.clone().normalize():new w,a=_D(n,o,s)||xD(n,o),c=a?ol(i,e,.08):null,l=c?vD(n,c,i,e):null;n.glassTactic=(l==null?void 0:l.mode)??"none",n.glassTargetFaceId=(l==null?void 0:l.glassFace.id)??null,a?(af(n)||bD(n,o),n.lastKnownPlayerPosition.copy(e),ko(n,s_(o))):n.state==="chase"||n.state==="interest"?(n.lostSightTimer-=t,n.lostSightTimer<=0&&ko(n,"search")):n.state==="search"&&n.searchMode==="travel"&&(n.searchTimer=Math.max(0,n.searchTimer-t)),ED(n,t,e,a,o,l);let u=new w,d=$m(n),h=null;if(n.state==="chase"||n.state==="interest"){const p=n.state==="chase",v=p?jm(n):DL(n);if((l==null?void 0:l.mode)==="detour"&&l.detourPoint)u=l.detourPoint.clone().sub(i),u.y=0,u.lengthSq()>.01&&u.normalize(),h=u,d=v;else if((l==null?void 0:l.mode)==="break"){const g=l.point.clone().sub(i);g.y=0;const m=g.length();h=m>Xt?g.clone().normalize():r,n.type==="ranged"&&m<=Fo||n.type==="melee"&&m<=Fs?(u.set(0,0,0),d=0):(u=h.clone(),d=v)}else n.type==="ranged"&&a&&n.coverPosition?(o<Qc?(u=r.clone().multiplyScalar(-1),d=v):(u=n.coverPosition.clone().sub(i),u.y=0,u.length()>M2?(u.normalize(),d=v):(u.set(0,0,0),d=0)),h=r):p&&n.type==="ranged"&&a?(o<Qc?(u=r.clone().multiplyScalar(-1),d=v):(u=r.clone(),d=v),h=r):(u=(a?e:n.lastKnownPlayerPosition).clone().sub(i),u.y=0,u.lengthSq()>.01&&u.normalize(),h=a?r:u,d=v)}else if(n.state==="search"){const p=n.lastKnownPlayerPosition.clone().sub(i);p.y=0,n.searchMode==="travel"&&n.searchTimer>0&&p.length()>WR?(u=p.normalize(),h=u,d=IL(n)):(n.searchMode!=="scan"&&(n.searchMode="scan",n.scanProgress=0,n.scanStartYaw=n.group.rotation.y),n.scanProgress=Math.min(mm,n.scanProgress+XR*t),n.group.rotation.y=n.scanStartYaw+n.scanProgress,u.set(0,0,0),d=0,n.scanProgress>=mm&&ko(n,"patrol"))}else u=new w(n.spawn.x+Math.cos(n.patrolPhase*.55)*n.patrolRadiusX,0,n.spawn.z+Math.sin(n.patrolPhase*.55)*n.patrolRadiusZ).sub(i),u.y=0,u.lengthSq()>.01&&u.normalize(),d=$m(n);if(e_(n)){const p=n.meleeAttackTarget,v=(p==null?void 0:p.type)==="glass"?p.point:e;((p==null?void 0:p.type)==="glass"?en(i,p.point):o)>Fs*.96?(u=v.clone().sub(i),u.y=0,u.lengthSq()>.01&&u.normalize(),h=u.lengthSq()>.001?u:h,d=jm(n)*.65):(u.set(0,0,0),d=0)}const f=n.hitSlowTimer>0?rC:1;u.lengthSq()>.001&&d>0?n.bootMoveDirection.copy(u).normalize():n.bootMoveDirection.set(0,0,0),n.body.velocity.x=u.x*d*f+n.hitKnockback.x,n.body.velocity.z=u.z*d*f+n.hitKnockback.z,kd(n,Ks+.04,xn),n.hitKnockback.multiplyScalar(Math.pow(.04,t/_l)),HD(n,t),!h&&u.lengthSq()>.001&&(h=u),(h==null?void 0:h.lengthSq())>.001&&fD(n,h,t,n.state==="chase"||n.state==="interest"?qR:0),OD(n,t,e,R.alive&&n.type==="ranged"&&(n.state==="chase"||n.state==="interest")&&a&&!l&&o>2.4&&o<=Fo),(l==null?void 0:l.mode)==="break"&&n.type==="ranged"&&n.shootCooldown<=0&&en(i,l.point)<=Fo&&UD(n)&&(n.shootCooldown=YR),(l==null?void 0:l.mode)==="break"&&n.type==="melee"&&n.attackCooldown<=0&&en(i,l.point)<=Fs&&e0(n,{type:"glass",glassFace:l.glassFace,point:l.point.clone(),normal:l.normal.clone()}),R.alive&&n.type==="melee"&&n.state==="chase"&&!c&&o<=Fs&&n.attackCooldown<=0&&e0(n,{type:"player"})}function GD(n){return n.owner==="enemy"?KR:e2}function ss(n,t,e={}){var o,r,a,c;if(!n||t<=0)return!1;const i=((r=(o=e.point)==null?void 0:o.clone)==null?void 0:r.call(o))??((c=(a=n.point)==null?void 0:a.clone)==null?void 0:c.call(a))??null,s=e.direction??n.normal??null;if(n.type==="enemy")return e3(n.enemy,t,s),e.kind==="melee"&&Qv(n.enemy,s,k2),!0;if(n.type==="playerShield")return Hd(t,i),!0;if(n.type==="player")return n3(t,s,e),!0;if(n.type==="glass")return Qt("impact-glass",{position:i??n.glassFace.mesh.position}),dv(n.glassFace,i,n.normal,t),!0;if(n.type==="glassBall"){if(e.kind==="projectile")zP(n.ball,e.direction,i),Qt("ball-hit",{position:i});else if(e.kind==="melee"){const l=i??new w(n.ball.body.position.x,n.ball.body.position.y,n.ball.body.position.z);t_(n.ball,Hc(l,s??Ve),l,{canActivate:!1})}else e.kind==="explosion"?(e.origin&&UP(n.ball,e.origin,i),Qt("ball-hit",{position:i})):Qt("ball-hit",{position:i});return VP(n.ball,t),!0}return!1}function WD(n){for(let t=$o.length-1;t>=0;t-=1){const e=$o[t],i=e.mesh.position.clone(),s=i.clone().addScaledVector(e.direction,e.speed*n),o=qD(i,s,e);if(o){e.mesh.position.lerpVectors(i,s,o.t),cr({point:e.mesh.position.clone(),normal:o.normal,type:o.type}),!ss(o,GD(e),{kind:"projectile",direction:e.direction,point:e.mesh.position.clone()})&&o.type==="static"&&Qt("impact-static",{position:e.mesh.position}),d_(t);continue}e.mesh.position.copy(s)}}function d_(n){const t=$o[n];Pt.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),$o.splice(n,1)}function qD(n,t,e){let i=null;const s=e.source??null;if(e.owner!=="player"&&s!==R){const a=Cv(n,t,Pi);a&&(i={type:"playerShield",...a});const c=n0(n,t,$D(),Pi);c&&(!i||c.t<i.t)&&(i={type:"player",t:c.t,normal:c.normal})}ge.forEach(a=>{if(!a.alive||a===s)return;const c=n0(n,t,jD(a),Pi);c&&(!i||c.t<i.t)&&(i={type:"enemy",enemy:a,t:c.t,normal:c.normal})}),Hi.forEach(a=>{if(a.exploded)return;const c=new w(a.body.position.x,a.body.position.y,a.body.position.z),l=XD(n,t,c,Ge+Pi);if(l!==null&&(!i||l<i.t)){const d=n.clone().lerp(t,l).clone().sub(c);d.lengthSq()<Xt&&d.copy(e.direction).multiplyScalar(-1),d.normalize(),i={type:"glassBall",ball:a,t:l,normal:d}}});const r=YD(n,t,Pi);return r&&(!i||r.t<i.t)&&(i={type:"static",terrain:!0,...r}),Yi.forEach(a=>{const{glassFace:c}=a;if(!Ea(a)||c&&!c.alive)return;const l=Sl(n,t,a,Pi);l&&(!i||l.t<i.t)&&(i=c?{type:"glass",glassFace:c,...l}:{type:"static",...l})}),i}function XD(n,t,e,i){const s=t.clone().sub(n),o=s.lengthSq();if(o<Xt)return n.distanceToSquared(e)<=i*i?0:null;const r=j.clamp(e.clone().sub(n).dot(s)/o,0,1);return n.clone().addScaledVector(s,r).distanceToSquared(e)<=i*i?r:null}function Fu(n,t=0){return Ta(n.x,n.z,t)?n.y-Le(n.x,n.z)-t:Number.POSITIVE_INFINITY}function YD(n,t,e=0){let s=0,o=Fu(n,e);if(o<=0)return{t:0,normal:hs(n.x,n.z).clone()};for(let r=1;r<=12;r+=1){const a=r/12,c=n.clone().lerp(t,a),l=Fu(c,e);if(o>0&&l<=0){let u=s,d=a;for(let f=0;f<8;f+=1){const p=(u+d)/2,v=n.clone().lerp(t,p);Fu(v,e)>0?u=p:d=p}const h=n.clone().lerp(t,d);return{t:d,normal:hs(h.x,h.z).clone()}}s=a,o=l}return null}function f_(n,t,e){const i=e.clone().sub(t),s=i.lengthSq();if(s<Xt)return t.clone();const o=j.clamp(n.clone().sub(t).dot(i)/s,0,1);return t.clone().addScaledVector(i,o)}function KD(n,t,e,i){const s=t.clone().sub(n),o=i.clone().sub(e),r=n.clone().sub(e),a=s.lengthSq(),c=o.lengthSq(),l=o.dot(r);let u=0,d=0;if(a<=Xt&&c<=Xt||a<=Xt)return 0;if(c<=Xt)return j.clamp(-s.dot(r)/a,0,1);const h=s.dot(r),f=s.dot(o),p=a*c-f*f;return p!==0&&(u=j.clamp((f*l-h*c)/p,0,1)),d=(f*u+l)/c,d<0?(d=0,u=j.clamp(-h/a,0,1)):d>1&&(d=1,u=j.clamp((f-h)/a,0,1)),u}function ZD(n){if(!(n!=null&&n.boots))return[];const t=n.visualRoot??n.group;t.getWorldQuaternion(Um);const e=[];return n.boots.feet.forEach(i=>{const s=Um.clone().multiply(i.group.quaternion);vd.forEach(o=>{const r=BC.set(o.position.x,o.position.y,o.position.z).applyQuaternion(i.group.quaternion),a=OC.set(i.baseX+i.offsetX+r.x,i.offsetY+r.y,i.offsetZ+r.z);e.push({center:t.localToWorld(a.clone()),right:new w(1,0,0).applyQuaternion(s),upAxis:new w(0,1,0).applyQuaternion(s),forward:new w(0,0,1).applyQuaternion(s),halfExtents:new w(o.size.x/2,o.size.y/2,o.size.z/2)})})}),e}function p_(n,t,e,i){const s=Ma(n).clone().normalize(),o=e/2,r=n.group.position.clone().addScaledVector(s,t);return{bodyCapsule:{start:r.clone().addScaledVector(s,-o),end:r.clone().addScaledVector(s,o),radius:i},bootBoxes:ZD(n)}}function $D(){return p_(R,yd,jc,xl)}function jD(n){return p_(n,Sd,Jc,Ed)}function JD(n,t,e,i=0){const s=e.radius+i,o=KD(n,t,e.start,e.end),r=n.clone().lerp(t,o),a=f_(r,e.start,e.end);return r.distanceToSquared(a)<=s*s?o:null}function QD(n,t,e){const i=f_(n,t.start,t.end),s=n.clone().sub(i);return s.lengthSq()<Xt&&s.copy(e).multiplyScalar(-1),s.normalize()}function n0(n,t,e,i=0){let s=null;const o=JD(n,t,e.bodyCapsule,i);if(o!==null){const r=n.clone().lerp(t,o);s={t:o,normal:QD(r,e.bodyCapsule,t.clone().sub(n).normalize())}}return e.bootBoxes.forEach(r=>{const a=Vd(n,t,r,i);a&&(!s||a.t<s.t)&&(s=a)}),s}function m_(n,t,e,i,s=0){const o=t.clone().sub(n);let r=0,a=1,c=new w;for(const l of["x","y","z"]){const u=e[l]-i[l]-s,d=e[l]+i[l]+s,h=n[l],f=o[l];if(Math.abs(f)<Xt){if(h<u||h>d)return null;continue}let p=(u-h)/f,v=(d-h)/f,g=-1;if(p>v&&([p,v]=[v,p],g=1),p>r&&(r=p,c=new w,c[l]=g),a=Math.min(a,v),r>a)return null}if(c.lengthSq()<Xt){const u=n.clone().lerp(t,r).sub(e),d={x:i.x+s-Math.abs(u.x),y:i.y+s-Math.abs(u.y),z:i.z+s-Math.abs(u.z)},h=Object.entries(d).sort((f,p)=>f[1]-p[1])[0][0];c[h]=Math.sign(u[h])||1}return{t:r,normal:c.normalize()}}function t3(n,t,e,i=0){const s=e.shapes[0].halfExtents,o=e.position;return m_(n,t,new w(o.x,o.y,o.z),new w(s.x,s.y,s.z),i)}function e3(n,t,e=null){n!=null&&n.alive&&(n.health=Math.max(0,n.health-t),n.hitFlash=.18,BD(n,e),ar(n),Qt("enemy-damage",{position:n.group.position}),n.health<=0?s3(n):F.invisibleToEnemies||wD(n))}function n3(n,t=null,e={}){we()&&(F.godMode||(F.hp=Math.max(0,F.hp-n),kD(t),Qt("player-damage",{position:R.group.position}),F.hp<=0&&(e.kind==="explosion"?g_({direction:t,cause:"explosion"}):i3(),Il(!1))))}function i3(){R.alive&&(R.alive=!1,R.ragdollDeathActive=!1,R.specialDeathCameraWaitElapsed=0,R.fogDeathCameraActive=!1,R.fogDeathCameraElapsed=0,R.slopeContactTimer=0,R.deathProgress=0,R.deathStartY=R.group.position.y,R.deathTargetY=Le(R.group.position.x,R.group.position.z)+$s,R.deathRotationZ=R.group.rotation.y>0?-.22:.22,R.bloodPoolSpawned=!1,R.bloodPoolDelay=Cd,R.body.velocity.set(0,0,0),R.hitKnockback.set(0,0,0),R.hitSlowTimer=0,nf(),Rv(),Ki(),Ll(),document.body.classList.remove("raid-start-vignette","raid-start-vignette-fading"),Dt.bodies.includes(R.body)&&Dt.removeBody(R.body))}function i0(n,t){const e=hs(n,t);return wc.set(0,-1,0).addScaledVector(e,e.y),wc.lengthSq()<Xt&&wc.set(0,0,-1),wc.normalize()}function g_(n={}){var r,a;if(!R.alive)return;const t=n.cause==="explosion",e=t?MC:_C,i=((a=(r=n.direction)==null?void 0:r.clone)==null?void 0:a.call(r))??i0(R.body.position.x,R.body.position.z);i.y=0,i.lengthSq()<Xt&&i.copy(i0(R.body.position.x,R.body.position.z)),i.normalize(),R.surfaceNormal.copy(hs(R.body.position.x,R.body.position.z)),R.group.rotation.y=Math.atan2(i.x,i.z),R.alive=!1,R.ragdollDeathActive=!0,R.specialDeathCameraWaitElapsed=0,R.fogDeathCameraActive=!1,R.fogDeathCameraElapsed=0,R.slopeContactTimer=0,F.hp=0,R.deathProgress=1,R.deathStartY=R.group.position.y,R.deathTargetY=Le(R.group.position.x,R.group.position.z)+$s,R.deathRotationZ=0,R.bloodPoolSpawned=!1,R.bloodPoolDelay=Cd,R.hitKnockback.set(0,0,0),R.hitSlowTimer=0;const s=new w(i.x*e,-.65,i.z*e);iI(i,s),nf(),Rv(),gn(),Ki(),Ll(),document.body.classList.remove("raid-start-vignette","raid-start-vignette-fading"),Dt.bodies.includes(R.body)||Dt.addBody(R.body),R.body.fixedRotation=!1,R.body.allowSleep=t,R.body.linearDamping=t?EC:yC,R.body.angularDamping=t?wC:SC,R.body.updateMassProperties();const o=sv(R);Cs.crossVectors(R.surfaceNormal,i).normalize(),Cs.lengthSq()<Xt&&Cs.set(1,0,0),Fm.setFromAxisAngle(Cs,xC),Pr.copy(Fm).multiply(o),R.body.quaternion.set(Pr.x,Pr.y,Pr.z,Pr.w),R.body.position.y=Math.max(R.body.position.y,_v(R.body.position.x,R.body.position.z,us+.04)+On+vC),R.visualRoot.quaternion.identity(),R.body.velocity.set(s.x,s.y,s.z),R.body.angularVelocity.set(Cs.x*Pu+i.x*.27,Cs.y*Pu+j.randFloatSpread(.54),Cs.z*Pu+i.z*.27),R.body.aabbNeedsUpdate=!0,R.body.wakeUp()}function s3(n){n.alive&&(n.alive=!1,n.health=0,F.energy+=cC,ar(n),n.deathProgress=0,n.deathStartY=n.group.position.y,n.deathTargetY=Le(n.group.position.x,n.group.position.z)+$s,n.deathRotationZ=n.group.rotation.y>0?-.28:.28,n.bloodPoolSpawned=!1,n.bloodPoolDelay=Cd,n.body.velocity.set(0,0,0),sf(n),Dt.removeBody(n.body),Qt("enemy-death",{position:n.group.position}))}function o3(n,t){if(!n.alive){if(n.deathProgress<1){n.deathProgress=Math.min(1,n.deathProgress+t/pC);const e=1-Math.pow(1-n.deathProgress,3);n.group.rotation.x=-Math.PI/2*e,n.group.rotation.z=n.deathRotationZ*e,n.group.position.y=j.lerp(n.deathStartY,n.deathTargetY,e)}kh(n,t)}}function r3(n){if(!R.alive){if(R.ragdollDeathActive){kh(R,n);return}if(R.deathProgress<1){R.deathProgress=Math.min(1,R.deathProgress+n/mC);const t=1-Math.pow(1-R.deathProgress,3);R.group.rotation.x=-Math.PI/2*t,R.group.rotation.z=R.deathRotationZ*t,R.group.position.y=j.lerp(R.deathStartY,R.deathTargetY,t)}kh(R,n)}}function a3(n){ya.forEach(t=>{if(t.type==="radio"){cf(t,n);return}t.type!=="loot"||t.collected||(t.group.rotation.y+=n*1.8,t.group.position.y=Math.sin(Yo.elapsedTime*4)*.05,R.alive&&F.phase==="running"&&R.group.position.distanceTo(t.group.position)<.9&&(t.collected=!0,t.group.visible=!1,F.cargo=Math.min(F.cargoNeeded,F.cargo+1),F.hp=Math.min(zn,F.hp+z2),Qt("loot",{position:t.group.position})))}),l_()}function c3(n){Vh.ring.rotation.z+=n*(F.cargo?1.8:.55);const t=R.group.position.distanceTo(Vh.position);F.phase==="running"&&(F.cargo>=F.cargoNeeded&&t<1.35?(F.extractionProgress=Math.min(1,F.extractionProgress+n*.85),F.extractionProgress>=1&&Il(!0)):F.extractionProgress=Math.max(0,F.extractionProgress-n*1.4))}function v_(){if(R.alive){const n=xv();R.group.position.set(R.body.position.x,n,R.body.position.z)}else R.ragdollDeathActive&&(R.group.quaternion.set(R.body.quaternion.x,R.body.quaternion.y,R.body.quaternion.z,R.body.quaternion.w),R.visualRoot.quaternion.identity(),Ec.set(0,-On,0).applyQuaternion(R.group.quaternion),R.group.position.set(R.body.position.x+Ec.x,R.body.position.y+Ec.y,R.body.position.z+Ec.z));ge.forEach(n=>{if(n.alive){const t=kd(n,Ks+.04,xn);n.group.position.set(n.body.position.x,t,n.body.position.z)}else n.group.position.x=n.body.position.x,n.group.position.z=n.body.position.z}),Tl(),R.alive&&(R.group.rotation.y=Math.atan2(Ve.x,Ve.z),sa(R),il(R)),ge.forEach(n=>{n.alive&&(sa(n),il(n))})}function l3(n,t,e=cg){const i=Math.atan2(t-Qb,n),s=Math.max(j.degToRad(1),i-e);return t-Math.tan(s)*n}function u3(){return R.group.position}function h3(){if(!R.ragdollDeathActive||R.fogDeathCameraActive)return!1;const n=R.body.position;return n.y<=md+ga&&QP(n.x,n.z,bC)}function d3(){R.fogDeathCameraActive=!0,R.fogDeathCameraElapsed=0,R.fogDeathCameraStartPosition.copy(Se.position),R.fogDeathCameraEndPosition.copy(Se.position).addScaledVector(sr,AC),R.fogDeathCameraStartTarget.copy(Jr),R.fogDeathCameraEndTarget.set(0,pi+TC,0),R.fogDeathCameraStartUp.copy(Se.up).normalize()}function f3(n){if(!R.fogDeathCameraActive)return!1;R.fogDeathCameraElapsed=Math.min(Lm,R.fogDeathCameraElapsed+n);const t=li(R.fogDeathCameraElapsed/Lm);return Se.position.lerpVectors(R.fogDeathCameraStartPosition,R.fogDeathCameraEndPosition,t),Se.up.lerpVectors(R.fogDeathCameraStartUp,sr,t).normalize(),Jr.lerpVectors(R.fogDeathCameraStartTarget,R.fogDeathCameraEndTarget,t),Se.lookAt(Jr),!0}function p3(n){return!R.ragdollDeathActive||R.fogDeathCameraActive?!1:(R.specialDeathCameraWaitElapsed+=n,h3()||R.specialDeathCameraWaitElapsed>=RC)}function uf(n){if(p3(n)&&d3(),f3(n))return;const t=Kb,e=Zb,i=l3(t,e,zI()),s=u3(),o=Ma(R).clone().normalize(),r=Ve.clone().addScaledVector(o,-Ve.dot(o));r.lengthSq()<Xt&&(r.copy(Sa(R.group.rotation.y)),r.addScaledVector(o,-r.dot(o))),r.lengthSq()<Xt&&r.set(0,0,1).addScaledVector(o,-o.z),r.normalize(),tm.copy(s).addScaledVector(r,-t).addScaledVector(o,e+(R.ragdollDeathActive?CC:0)),em.copy(s).addScaledVector(o,i);const a=1-Math.pow(8e-4,n);Se.position.lerp(tm,a),Se.up.lerp(o,a).normalize(),Jr.copy(em),Se.lookAt(Jr)}function m3(){return F.radioDisabled?"глушено":F.alarmLevel>=C2?"бой":F.alarmLevel>=Zs?"резерв":F.alarmLevel>=tl?"поиск":"тихо"}function g3(){Tb.textContent=F.invisibleToEnemies?"невидим":m3(),document.body.classList.toggle("alarm-investigate",F.alarmLevel>=tl&&F.alarmLevel<Zs),document.body.classList.toggle("alarm-combat",F.alarmLevel>=Zs)}function v3(){if(!(Uc.length===zn&&Ci.childElementCount===zn)){Uc.length=0,Ci.textContent="",Ci.setAttribute("role","meter"),Ci.setAttribute("aria-valuemin","0"),Ci.setAttribute("aria-valuemax",String(zn));for(let n=0;n<zn;n+=1){const t=document.createElement("span");t.className="hud-health-pip",t.setAttribute("aria-hidden","true"),Ci.append(t),Uc.push(t)}}}function _3(){v3();const n=F.godMode?zn:j.clamp(F.hp,0,zn),t=Math.floor(n),e=Math.ceil(n),i=Math.round(n);Ci.classList.toggle("is-godmode",F.godMode),Ci.setAttribute("aria-valuenow",String(i)),Ci.setAttribute("aria-label",F.godMode?`Жизнь игрока: ${zn} из ${zn}, бессмертие`:`Жизнь игрока: ${i} из ${zn}`),Uc.forEach((s,o)=>{s.classList.toggle("is-filled",o<t),s.classList.toggle("is-partial",o>=t&&o<e),s.classList.toggle("is-empty",o>=e)})}function x3(){if(!(Fc.length===Hs&&Or.childElementCount===Hs)){Fc.length=0,Or.textContent="";for(let n=0;n<Hs;n+=1){const t=document.createElement("span");t.className="hud-shield-pip",t.setAttribute("aria-hidden","true"),Or.append(t),Fc.push(t)}}}function y3(){x3();const n=rr()?Math.ceil(j.clamp(St.health,0,Hs)):0,t=n>0;ci.classList.toggle("is-shielded",t),ci.style.setProperty("--shield-outline-width",t?`${n}px`:"0px"),Or.hidden=!t,Or.setAttribute("aria-label",t?`Щит: ${n} из ${Hs}`:"Щит не активен"),Fc.forEach((e,i)=>{e.classList.toggle("is-hidden",i>=n)})}function S3(){ci.classList.remove("is-shield-flashing"),ci.offsetWidth,ci.classList.add("is-shield-flashing")}function M3(){Uo.classList.remove("is-reload-flashing"),pn.classList.remove("is-reload-flashing"),Uo.offsetWidth,pn.offsetWidth,Uo.classList.add("is-reload-flashing"),pn.classList.add("is-reload-flashing")}function s0(){const n=Math.max(0,F.cargoNeeded-F.cargo);return n<=0?"Двигайтесь к эвакуации":F.cargo<=0?`Забрать ${F.cargoNeeded} том яма`:`Забрать ещё ${n} ${n===1?"том ям":"том яма"}`}function vi(){_3(),y3(),Mb.textContent=Math.floor(F.energy).toString(),Eb.textContent=F.reloadTimer>0?"перез.":`${F.weaponAmmo}/${va}`,wb.textContent=`${F.cargo}/${F.cargoNeeded}`;const n=AD(),t=TD().length;if(Ab.textContent=`${t}/${n.length}`,g3(),l_(),F.phase==="won"){xc.textContent="эвакуация завершена",yc.style.width="100%";return}if(F.phase==="lost"){xc.textContent="Вы потеряли лицо",yc.style.width="0%";return}if(F.cargo<F.cargoNeeded){const e=F.cargoNeeded>0?F.cargo/F.cargoNeeded*80:0;xc.textContent=s0(),yc.style.width=`${e}%`}else xc.textContent=s0(),yc.style.width=`${80+F.extractionProgress*20}%`}function __(n){Fb.textContent=n?"наследие спасено":"вы потеряли лицо",Ob.textContent=n?"Вы не потеряли лицо":"Сабай не познан",Bb.textContent=n?"Хотите ещё разок?":"Босоногие бармалеи ликуют",ui.classList.toggle("is-loss",!n),document.body.classList.toggle("death-vignette",!n),F.resultShown=!0,eo(),ui.hidden=!1}function E3(){ui.hidden=!0,ui.classList.remove("is-loss"),document.body.classList.remove("death-vignette"),Pl()&&(Qe(!0),Cl())}function Il(n){if(!(F.resultShown||F.phase==="won"||F.phase==="lost")){if(F.phase=n?"won":"lost",Qt(n?"win":"player-death"),Ra(),eo(),!n){F.resultDelayTimer=PC,ui.hidden=!0,ui.classList.remove("is-loss"),document.body.classList.remove("death-vignette");return}__(!0)}}function w3(n){F.phase!=="lost"||F.resultShown||(F.resultDelayTimer=Math.max(0,F.resultDelayTimer-n),F.resultDelayTimer<=0&&__(!1))}function A3(){Object.assign(F,kg)}function x_(){F.phase="ready",A3(),tI(),F.hp=zn,F.energy=Ng,F.cargo=0,F.extractionProgress=0,F.shootCooldown=0,F.fireHeld=!1,F.weaponAmmo=va,F.reloadTimer=0,F.meleeCooldown=0,F.kickCooldown=0,F.alarmLevel=0,F.alarmHoldTimer=0,F.alarmPulseTimer=0,F.reinforcementTimer=ea,F.lastNoisePosition.copy(Yn),F.radioDisabled=!1,F.resultDelayTimer=0,Ld(),F.resultShown=!1,F.settingsOpen=!1,jr.hidden=!0,Ra(),Ki(),HL(),Uo.classList.remove("is-reload-flashing"),pn.classList.remove("is-reload-flashing"),Ll(),document.body.classList.remove("death-vignette","raid-start-vignette-fading"),ui.hidden=!0,ui.classList.remove("is-loss"),eo(),Dt.bodies.includes(R.body)||Dt.addBody(R.body),Kd(),R.alive=!0,R.ragdollDeathActive=!1,R.specialDeathCameraWaitElapsed=0,R.fogDeathCameraActive=!1,R.fogDeathCameraElapsed=0,R.slopeContactTimer=0,R.deathProgress=1,R.deathStartY=0,R.deathTargetY=Le(R.spawn.x,R.spawn.z)+$s,R.deathRotationZ=0,R.bloodPoolSpawned=!0,R.bloodPoolDelay=0,R.body.position.set(R.spawn.x,Le(R.spawn.x,R.spawn.z)+On,R.spawn.z),R.body.velocity.set(0,0,0),R.body.angularVelocity.set(0,0,0),R.body.fixedRotation=!0,R.body.allowSleep=!1,R.body.linearDamping=Ug,R.body.angularDamping=Fg,R.body.updateMassProperties(),R.body.wakeUp(),R.surfaceNormal.copy(hs(R.spawn.x,R.spawn.z)),R.group.position.set(R.spawn.x,Le(R.spawn.x,R.spawn.z),R.spawn.z),R.group.rotation.set(0,qs,0),R.hitSlowTimer=0,R.hitKnockback.set(0,0,0),R.footstepTimer=0,Vm(R),sa(R),nf(),R.weapon.root.visible=!0,R.meleeWeapon.root.visible=!0,tr(R.weapon,!0),ge.forEach(n=>{const t=!n.reserve;n.active=t,n.alive=t,n.group.visible=t,t&&!Dt.bodies.includes(n.body)&&Dt.addBody(n.body),!t&&Dt.bodies.includes(n.body)&&Dt.removeBody(n.body),n.maxHealth=wl(n),n.health=n.maxHealth,n.hitFlash=0,ar(n),n.hitSlowTimer=0,n.hitKnockback.set(0,0,0),n.attackCooldown=0,sf(n),n.footstepTimer=j.randFloat(.05,.35),n.state="patrol",n.searchTimer=0,n.lostSightTimer=0,n.shootCooldown=0,n.weaponAmmo=n.type==="ranged"?gl:0,n.reloadTimer=0,js(n),tr(n.weapon,!0),n.coverPosition=null,n.coverReplanTimer=j.randFloat(.15,.65),n.searchMode="travel",n.glassTactic="none",n.glassTargetFaceId=null,n.scanProgress=0,n.scanStartYaw=0,n.lastKnownPlayerPosition.copy(n.spawn),n.deathProgress=1,n.deathStartY=0,n.deathTargetY=Le(n.spawn.x,n.spawn.z)+$s,n.deathRotationZ=0,n.bloodPoolSpawned=!0,n.bloodPoolDelay=0,n.group.rotation.set(0,0,0),n.surfaceNormal.copy(hs(n.spawn.x,n.spawn.z)),n.group.position.set(n.spawn.x,Le(n.spawn.x,n.spawn.z),n.spawn.z),n.body.position.set(n.spawn.x,n.group.position.y+xn,n.spawn.z),n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),Vm(n),sa(n)}),DP(),jP(),ya.forEach(n=>{if(n.type==="radio"){n.disabled=!1,cf(n,0);return}n.collected=!1,n.group.visible=!0,n.group.position.copy(n.spawn)});for(let n=$o.length-1;n>=0;n-=1)d_(n);for(let n=jo.length-1;n>=0;n-=1)Nv(n);for(let n=Jo.length-1;n>=0;n-=1)Uv(n);for(let n=Qo.length-1;n>=0;n-=1)zv(n);for(let n=ia.length-1;n>=0;n-=1)gI(n);vi()}function T3(){var n,t,e,i;return!!(document.fullscreenElement||document.webkitFullscreenElement||window.navigator.standalone||(t=(n=window.matchMedia)==null?void 0:n.call(window,"(display-mode: fullscreen)"))!=null&&t.matches||(i=(e=window.matchMedia)==null?void 0:e.call(window,"(display-mode: standalone)"))!=null&&i.matches)}function b3(){var o,r;const n=((o=window.screen)==null?void 0:o.width)||0,t=((r=window.screen)==null?void 0:r.height)||0;if(!n||!t)return{width:0,height:0};const e=Math.min(n,t),i=Math.max(n,t);return window.innerWidth>window.innerHeight?{width:i,height:e}:{width:e,height:i}}function hf(){const n=window.visualViewport,t=(n==null?void 0:n.width)||0,e=(n==null?void 0:n.height)||0,i=document.documentElement.clientWidth||0,s=document.documentElement.clientHeight||0;let o=Math.ceil(Math.max(window.innerWidth||0,i,t,1)),r=Math.ceil(Math.max(window.innerHeight||0,s,e,1));if(T3()){const a=b3();o=Math.ceil(Math.max(o,a.width)),r=Math.ceil(Math.max(r,a.height))}return{width:o,height:r}}function R3(){const{width:n,height:t}=hf();return document.documentElement.style.setProperty("--app-width",`${n}px`),document.documentElement.style.setProperty("--app-height",`${t}px`),{width:n,height:t}}function no(){const{width:n,height:t}=R3();hi.setSize(n,t,!1),Se.aspect=n/t,Se.fov=NI(),Se.updateProjectionMatrix(),Rl()}function C3(){Pt.traverse(n=>{n.castShadow=!1,n.receiveShadow=!1})}function y_(){return document.fullscreenElement||document.webkitFullscreenElement||null}function S_(){return document.querySelector("#app")||document.documentElement}function M_(n=S_()){return n.requestFullscreen||n.webkitRequestFullscreen||n.msRequestFullscreen||null}function E_(){return document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen||null}function P3(){return!!(M_()||E_())}function w_(){kr(),no()}function kr(){const n=y_();if(!P3()){Us.textContent="Как включить на полный экран?",Us.title="На iPhone Safari полноэкранный режим для обычной страницы недоступен. Добавь страницу на экран Домой и запускай оттуда.";return}Us.title="",Us.textContent=n?"Выйти из полного экрана":"Во весь экран"}async function L3(){const n=y_();try{if(n){const t=E_();await(t==null?void 0:t.call(document))}else{const t=S_(),e=M_(t);if(!e){Us.textContent="Добавь на экран Домой",setTimeout(kr,1800);return}await e.call(t),await Yv()}}catch{Us.textContent="Браузер запретил",setTimeout(kr,1800);return}kr(),Rl()}function I3(n){var t;return!!((t=n==null?void 0:n.closest)!=null&&t.call(n,"button, input, label, .settings-panel"))}function Qe(n=!1){!document.hidden&&we()&&(n||!I3(document.activeElement))&&document.activeElement!==bn&&bn.focus({preventScroll:!0})}function A_(){Nb.textContent=`${Math.round(yl.mouseSensitivity*100)}%`}function D3(){F.godMode=!F.godMode,Qt(F.godMode?"ui-start":"ui-resume",{intensity:.55}),vi()}function N3(){F.invisibleToEnemies=!F.invisibleToEnemies,F.invisibleToEnemies&&ge.forEach(n=>{!n.active||!n.alive||(n.lostSightTimer=0,n.coverPosition=null,js(n))}),Qt(F.invisibleToEnemies?"ui-start":"ui-resume",{intensity:.5}),vi()}function T_(n){return n.code==="Escape"||n.key==="Escape"||n.key==="Esc"||n.keyCode===27}function b_(n){var t;n.preventDefault(),n.stopPropagation(),(t=n.stopImmediatePropagation)==null||t.call(n)}function z3(n){T_(n)&&(b_(n),!n.repeat&&(n.timeStamp,F.settingsOpen||Dl(!0)))}function U3(n){T_(n)&&b_(n)}function Dl(n){F.settingsOpen!==n&&Qt(n?"ui-pause":"ui-resume"),F.settingsOpen=n,jr.hidden=!n,eo(),n?(Ra(),Ki(),jr.focus({preventScroll:!0})):(Qe(!0),Pl()&&Cl())}function F3(n){if(n.code==="KeyG"){n.preventDefault(),n.repeat||D3();return}if(n.code==="KeyI"){n.preventDefault(),n.repeat||N3();return}if(n.code==="KeyH"){n.preventDefault(),n.repeat||Il(!0);return}if(we()){if(n.code==="KeyQ"){n.preventDefault(),n.repeat||bv();return}if(n.code==="KeyE"){n.preventDefault(),n.repeat||YI();return}if(n.code==="KeyT"){n.preventDefault(),n.repeat||c_();return}if(n.code==="KeyR"){n.preventDefault(),n.repeat||sl();return}if(n.code==="KeyF"){n.preventDefault(),n.repeat||KI();return}Bg.has(n.code)&&(n.preventDefault(),Ue.add(n.code))}}function O3(n){Bg.has(n.code)&&(n.preventDefault(),Ue.delete(n.code))}function Ki(){Ue.clear(),gn(),Ov(),kv(),document.body.classList.remove("sprinting")}window.addEventListener("resize",no);window.addEventListener("orientationchange",no);var o0;(o0=window.visualViewport)==null||o0.addEventListener("resize",no);var r0;(r0=window.visualViewport)==null||r0.addEventListener("scroll",no);var a0,bc,c0;(c0=(bc=(a0=globalThis.screen)==null?void 0:a0.orientation)==null?void 0:bc.addEventListener)==null||c0.call(bc,"change",no);window.addEventListener("keydown",z3,{capture:!0});window.addEventListener("keyup",U3,{capture:!0});document.addEventListener("keydown",F3,{capture:!0});document.addEventListener("keyup",O3,{capture:!0});document.addEventListener("pointerlockchange",UI);document.addEventListener("pointerlockerror",Qd);document.addEventListener("fullscreenchange",w_);document.addEventListener("webkitfullscreenchange",w_);document.addEventListener("mousemove",n=>{ba()&&Zd(n)});window.addEventListener("focus",()=>Qe());window.addEventListener("blur",()=>{Ki(),Ra()});document.addEventListener("visibilitychange",()=>{document.hidden?Ki():Qe()});window.addEventListener("pointerdown",()=>Qe());window.addEventListener("pointermove",()=>Qe());bn.addEventListener("pointerenter",()=>Qe());bn.addEventListener("pointermove",n=>{Qe(),Zd(n)});bn.addEventListener("pointerdown",n=>{n.button===0&&(vs(),Qe(),Cl(),Zd(n),we()&&$v())});bn.addEventListener("pointerup",gn);bn.addEventListener("pointercancel",gn);bn.addEventListener("pointerleave",gn);window.addEventListener("pointerup",gn);window.addEventListener("pointercancel",gn);rn.addEventListener("pointerdown",MI);rn.addEventListener("pointermove",EI);rn.addEventListener("pointerup",$d);rn.addEventListener("pointercancel",$d);rn.addEventListener("lostpointercapture",$d);$e.addEventListener("pointerdown",TI);$e.addEventListener("pointermove",bI);$e.addEventListener("pointerup",jd);$e.addEventListener("pointercancel",jd);$e.addEventListener("lostpointercapture",jd);$r.addEventListener("pointerdown",DI);$r.addEventListener("pointerup",n=>{n.preventDefault(),n.stopPropagation()});$r.addEventListener("pointercancel",n=>{n.preventDefault(),n.stopPropagation()});hd.addEventListener("pointerdown",II);hd.addEventListener("pointerup",n=>{n.preventDefault(),n.stopPropagation()});hd.addEventListener("pointercancel",n=>{n.preventDefault(),n.stopPropagation()});pn.addEventListener("pointerdown",RI);pn.addEventListener("pointermove",CI);pn.addEventListener("pointerup",Gv);pn.addEventListener("pointercancel",Gv);pn.addEventListener("lostpointercapture",PI);dd.addEventListener("pointerdown",LI);dd.addEventListener("pointerup",n=>{n.preventDefault(),n.stopPropagation()});dd.addEventListener("pointercancel",n=>{n.preventDefault(),n.stopPropagation()});Lb.addEventListener("click",n=>{n.stopPropagation(),Dl(!F.settingsOpen)});Ib.addEventListener("click",n=>{n.stopPropagation(),Dl(!1)});Us.addEventListener("click",async n=>{n.stopPropagation(),await L3()});jr.addEventListener("pointerdown",n=>{n.stopPropagation()});jr.addEventListener("pointermove",n=>{n.stopPropagation()});ci.addEventListener("animationend",n=>{n.animationName==="shieldHealthFlash"&&ci.classList.remove("is-shield-flashing")});Uo.addEventListener("animationend",n=>{n.animationName==="reloadAmmoFlash"&&(Uo.classList.remove("is-reload-flashing"),pn.classList.remove("is-reload-flashing"))});pn.addEventListener("animationend",n=>{n.animationName==="reloadAmmoFlash"&&pn.classList.remove("is-reload-flashing")});bh.addEventListener("input",()=>{yl.mouseSensitivity=Number(bh.value),A_()});Ub.addEventListener("click",async()=>{vs(),await Yv(),Rl(),OI()});kb.addEventListener("click",x_);Hb.addEventListener("click",E3);Db.addEventListener("click",x_);PL();const R=BL(),St=kL(),ge=NC.map((n,t)=>KL(n,t));ge[0];lg.forEach((n,t)=>ZL(n,t));const Vh=$L();C3();kr();A_();eo();function Hr(n){return Math.round(n*1e3)/1e3}function Tc(n){return{x:Hr(n.x),y:Hr(n.y),z:Hr(n.z)}}function B3(n){return n.updateWorldMatrix(!0,!0),new ds().setFromObject(n)}function k3(){const t=[],e=[];return Yi.forEach((i,s)=>{var f,p,v;if(!i.mesh||i.invisible||(f=i.body.userData)!=null&&f.invisible||i.glassFace&&!i.glassFace.alive)return;const o=Id(i);if(!o){e.push({index:s,kind:((p=i.body.userData)==null?void 0:p.kind)??"unknown",reason:"missing-box-collider"});return}const r=B3(i.mesh),a=new w,c=new w;r.getCenter(a),r.getSize(c);const l=o.halfExtents.clone().multiplyScalar(2),u=a.distanceTo(o.center),d=c.distanceTo(l),h={index:s,kind:((v=i.body.userData)==null?void 0:v.kind)??"unknown",meshCenter:Tc(a),colliderCenter:Tc(o.center),meshSize:Tc(c),colliderSize:Tc(l),centerDelta:Hr(u),sizeDelta:Hr(d)};t.push(h),(u>.015||d>.015)&&e.push(h)}),{tolerance:.015,visibleSolidEntries:t.length,matchedEntries:t.length-e.length,mismatches:e}}function R_(){return{staticSolids:k3(),characters:{player:{visual:"upper-capsule-plus-boots",hitbox:"upper-capsule-plus-boot-boxes",physics:"upper-capsule-plus-boot-boxes",radius:us,upperCapsuleCylinderLength:jc,upperCapsuleCenterY:yd,bootHeight:as,totalHeight:ga,bodyCenterY:On},enemies:{visual:"upper-capsule-plus-boots",hitbox:"upper-capsule-plus-boot-boxes",physics:"upper-capsule-plus-boot-boxes",radius:Ks,upperCapsuleCylinderLength:Jc,upperCapsuleCenterY:Sd,bootHeight:as,totalHeight:Md,bodyCenterY:xn}},projectiles:{visual:"sphere",hitbox:"sphere",radius:Pi},glassBalls:{visual:"sphere",physics:"sphere",hitbox:"sphere",radius:Ge},decorativeNoCollision:["grass-patches","bushes","palm-canopies","beach-color-patches","terrain-mounds","arena-frustum","skybox","lights-and-volumetric-effects","extraction-marker","loot-marker","character-weapons"]}}function H3(){let n=0,t=0,e=0;const i=new Set;return Pt.traverse(s=>{var o;if(s.isMesh||s.isInstancedMesh||s.isPoints||s.isLineSegments){n+=1;const r=s.geometry;r!=null&&r.index?t+=r.index.count/3:(o=r==null?void 0:r.attributes)!=null&&o.position&&(t+=r.attributes.position.count/3),(Array.isArray(s.material)?s.material:[s.material]).forEach(c=>{(c==null?void 0:c.id)!=null&&!i.has(c.id)&&(i.add(c.id),e+=1)})}}),{lowGraphicsMode:fd,sceneObjects:Pt.children.length,renderableObjects:n,approximateTriangles:Math.round(t),uniqueMaterials:e,textureCacheKeys:Array.from(Oc.keys()).sort(),vegetation:{palmTrees:Kg,palmFrondsPerTree:16,palmLeafModel:"shared-broad-frond-geometry",bushes:Zg,grassPatches:Yg},worldDecor:{skyboxRadius:fl,mountainHorizonLayers:(zi==null?void 0:zi.children.length)??0,mountainFogLayers:(Li==null?void 0:Li.children.length)??0,arenaFrustumDecor:Xg.length}}}window.__vibeGameGeometryAudit=R_;window.__vibeGameVisualAudit=H3;function V3(){const n=R_();document.documentElement.dataset.geometryAuditReady="true",document.documentElement.dataset.geometrySolidEntries=String(n.staticSolids.visibleSolidEntries),document.documentElement.dataset.geometryMismatches=String(n.staticSolids.mismatches.length)}V3();no();v_();Tv(0);Ev();uf(1);yv();ge.forEach(n=>ar(n));vi();Qe();function C_(){requestAnimationFrame(C_);const n=Math.min(Yo.getDelta(),.05),t=we();Kv()?(ge.forEach(i=>{i.hitFlash=Math.max(0,i.hitFlash-n)}),t?(F.shootCooldown=Math.max(0,F.shootCooldown-n),F.meleeCooldown=Math.max(0,F.meleeCooldown-n),F.kickCooldown=Math.max(0,F.kickCooldown-n),kI(n),Qe(),lD(n),PD(n),rD(n)):(gn(),R.ragdollDeathActive||(R.body.velocity.x=0,R.body.velocity.z=0),R.footstepTimer=0,R.bootMoveDirection.set(0,0,0)),$P(n),ge.forEach(i=>VD(i,n)),R.ragdollDeathActive||Ac(R,n),ge.forEach(i=>Ac(i,n)),iL(),Dt.step(1/60,n,3),oI(n),rI(),YP(n),XP(),sL(),v_(),aD(n),oD(n),sD(n),dI(n),Fd(),ge.forEach(i=>o3(i,n)),Tv(n),WD(n),pI(n),SI(n),a3(n),c3(n)):(R.ragdollDeathActive||(R.body.velocity.x=0,R.body.velocity.z=0),ge.forEach(i=>{i.body.velocity.x=0,i.body.velocity.z=0,i.footstepTimer=.08,Ac(i,n)}),R.footstepTimer=0,R.ragdollDeathActive||Ac(R,n)),r3(n),w3(n),xI(n),vI(n),fP(n),cD(),uf(n),yv(),ge.forEach(i=>ar(i)),Ev(),Vh.pad.material.opacity=F.cargo?.6:.3,vi(),hi.clear(!0,!0,!0),hi.render(Pt,Se)}C_();

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="177",Wm=0,Xu=1,qm=2,af=1,Xm=2,ri=3,Ci=0,on=1,sn=2,Ti=0,zs=1,bi=2,Yu=3,Zu=4,Ym=5,Yi=100,Zm=101,Km=102,$m=103,jm=104,Jm=200,Qm=201,t0=202,e0=203,Zc=204,Kc=205,n0=206,i0=207,s0=208,o0=209,r0=210,a0=211,c0=212,l0=213,u0=214,$c=0,jc=1,Jc=2,Zs=3,Qc=4,tl=5,el=6,nl=7,cf=0,h0=1,d0=2,ci=0,f0=1,p0=2,m0=3,g0=4,v0=5,_0=6,x0=7,lf=300,Ks=301,$s=302,il=303,sl=304,Na=306,ji=1e3,$i=1001,ol=1002,_n=1003,y0=1004,Er=1005,Nn=1006,nc=1007,wi=1008,hi=1009,uf=1010,hf=1011,Yo=1012,ql=1013,Ji=1014,Gn=1015,hr=1016,Xl=1017,Yl=1018,Zo=1020,df=35902,ff=1021,pf=1022,Un=1023,Ko=1026,$o=1027,Zl=1028,Kl=1029,mf=1030,$l=1031,jl=1033,ha=33776,da=33777,fa=33778,pa=33779,rl=35840,al=35841,cl=35842,ll=35843,ul=36196,hl=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,vl=37812,_l=37813,xl=37814,yl=37815,Ml=37816,Sl=37817,El=37818,wl=37819,Tl=37820,bl=37821,ma=36492,Al=36494,Rl=36495,gf=36283,Cl=36284,Pl=36285,Ll=36286,M0=3200,S0=3201,vf=0,E0=1,Mi="",Fe="srgb",js="srgb-linear",Ma="linear",fe="srgb",us=7680,Ku=519,w0=512,T0=513,b0=514,_f=515,A0=516,R0=517,C0=518,P0=519,Il=35044,$u="300 es",ai=2e3,Sa=2001;class ao{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ju=1234567;const Os=Math.PI/180,jo=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function Jl(n,t){return(n%t+t)%t}function L0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function I0(n,t,e){return n!==t?(e-n)/(t-n):0}function Vo(n,t,e){return(1-e)*n+e*t}function D0(n,t,e,i){return Vo(n,t,1-Math.exp(-e*i))}function N0(n,t=1){return t-Math.abs(Jl(n,t*2)-t)}function U0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function F0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function z0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function O0(n,t){return n+Math.random()*(t-n)}function B0(n){return n*(.5-Math.random())}function k0(n){n!==void 0&&(ju=n);let t=ju+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function H0(n){return n*Os}function V0(n){return n*jo}function G0(n){return(n&n-1)===0&&n!==0}function W0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function q0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function X0(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),u=r((t+i)/2),d=o((t-i)/2),h=r((t-i)/2),f=o((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function he(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Lt={DEG2RAD:Os,RAD2DEG:jo,generateUUID:Wn,clamp:Kt,euclideanModulo:Jl,mapLinear:L0,inverseLerp:I0,lerp:Vo,damp:D0,pingpong:N0,smoothstep:U0,smootherstep:F0,randInt:z0,randFloat:O0,randFloatSpread:B0,seededRandom:k0,degToRad:H0,radToDeg:V0,isPowerOfTwo:G0,ceilPowerOfTwo:W0,floorPowerOfTwo:q0,setQuaternionFromProperEuler:X0,normalize:he,denormalize:Dn};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let dr=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const h=o[r+0],f=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,p*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*_;if(c=c*m+h*x,l=l*m+f*x,u=u*m+g*x,d=d*m+v*x,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=o[r],h=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(o/2),h=c(i/2),f=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-i*l,this._z=o*u+r*l+i*c-s*a,this._w=r*u-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class b{constructor(t=0,e=0,i=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ju.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),u=2*(a*e-o*s),d=2*(o*i-r*e);return this.x=e+c*l+r*d-a*u,this.y=i+c*u+a*l-o*d,this.z=s+c*d+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new b,Ju=new dr;class Wt{constructor(t,e,i,s,o,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],_=s[1],y=s[4],x=s[7],R=s[2],A=s[5],C=s[8];return o[0]=r*v+a*_+c*R,o[3]=r*m+a*y+c*A,o[6]=r*p+a*x+c*C,o[1]=l*v+u*_+d*R,o[4]=l*m+u*y+d*A,o[7]=l*p+u*x+d*C,o[2]=h*v+f*_+g*R,o[5]=h*m+f*y+g*A,o[8]=h*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-i*o*u+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*r-a*l,h=a*c-u*o,f=l*o-r*c,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-u*i)*v,t[2]=(a*i-s*r)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(r*e-i*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sc.makeScale(t,e)),this}rotate(t){return this.premultiply(sc.makeRotation(-t)),this}translate(t,e){return this.premultiply(sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sc=new Wt;function xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y0(){const n=Ea("canvas");return n.style.display="block",n}const Qu={};function Bs(n){n in Qu||(Qu[n]=!0,console.warn(n))}function Z0(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function K0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const th=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){const n={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===fe&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[js]:{primaries:t,whitePoint:i,transfer:Ma,toXYZ:th,fromXYZ:eh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:th,fromXYZ:eh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),n}const ie=j0();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class J0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=Ea("canvas")),hs.width=t.width,hs.height=t.height;const s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=li(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Q0=0;class Ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(oc(s[r].image)):o.push(oc(s[r]))}else o=oc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?J0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tg=0;const rc=new b;class Ke extends ao{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=$i,s=$i,o=Nn,r=wi,a=Un,c=hi,l=Ke.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Wn(),this.name="",this.source=new Ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ji:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ji:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=lf;Ke.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,R=(p+1)/2,A=(u+h)/4,C=(d+v)/4,P=(g+m)/4;return y>x&&y>R?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=A/i,o=C/i):x>R?x<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),i=A/s,o=P/s):R<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),i=C/o,s=P/o),this.set(i,s,o,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eg extends ao{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:i.depth},o=new Ke(s);this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ql(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends eg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yf extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ng extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Cn):Cn.fromBufferAttribute(o,r),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),Tr.subVectors(this.max,_o),ds.subVectors(t.a,_o),fs.subVectors(t.b,_o),ps.subVectors(t.c,_o),pi.subVectors(fs,ds),mi.subVectors(ps,fs),Oi.subVectors(ds,ps);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Oi.z,Oi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Oi.z,0,-Oi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Oi.y,Oi.x,0];return!ac(e,ds,fs,ps,Tr)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,ds,fs,ps,Tr))?!1:(br.crossVectors(pi,mi),e=[br.x,br.y,br.z],ac(e,ds,fs,ps,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const jn=[new b,new b,new b,new b,new b,new b,new b,new b],Cn=new b,wr=new Di,ds=new b,fs=new b,ps=new b,pi=new b,mi=new b,Oi=new b,_o=new b,Tr=new b,br=new b,Bi=new b;function ac(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Bi.fromArray(n,o);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),c=t.dot(Bi),l=e.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ig=new Di,xo=new b,cc=new b;let co=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ig.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xo.subVectors(t,this.center);const e=xo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xo.copy(t.center).add(cc)),this.expandByPoint(xo.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Jn=new b,lc=new b,Ar=new b,gi=new b,uc=new b,Rr=new b,hc=new b;let Mf=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){lc.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(lc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ar),a=gi.dot(this.direction),c=-gi.dot(Ar),l=gi.lengthSq(),u=Math.abs(1-r*r);let d,h,f,g;if(u>0)if(d=r*c-a,h=r*a-c,g=o*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+r*h+2*a)+h*(r*d+h+2*c)+l}else h=o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*c)+l;else h=-o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-r*o+a)),h=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-o,-c),o),f=h*(h+2*c)+l):(d=Math.max(0,-(r*o+a)),h=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+h*(h+2*c)+l);else h=r>0?-o:o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lc).addScaledVector(Ar,h),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(o=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(o=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,s,o){uc.subVectors(e,t),Rr.subVectors(i,t),hc.crossVectors(uc,Rr);let r=this.direction.dot(hc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;gi.subVectors(this.origin,t);const c=a*this.direction.dot(Rr.crossVectors(gi,Rr));if(c<0)return null;const l=a*this.direction.dot(uc.cross(gi));if(l<0||c+l>r)return null;const u=-a*gi.dot(hc);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ge{constructor(t,e,i,s,o,r,a,c,l,u,d,h,f,g,v,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,u,d,h,f,g,v,m)}set(t,e,i,s,o,r,a,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),o=1/ms.setFromMatrixColumn(t,1).length(),r=1/ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const h=r*u,f=r*d,g=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h+v*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=v+h*a,e[10]=r*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h-v*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=v-h*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const h=r*u,f=r*d,g=a*u,v=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,f=r*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=r*c,f=r*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=r*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sg,t,og)}lookAt(t,e,i){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),vi.crossVectors(i,fn),vi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),vi.crossVectors(i,fn)),vi.normalize(),Cr.crossVectors(fn,vi),s[0]=vi.x,s[4]=Cr.x,s[8]=fn.x,s[1]=vi.y,s[5]=Cr.y,s[9]=fn.y,s[2]=vi.z,s[6]=Cr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],_=i[3],y=i[7],x=i[11],R=i[15],A=s[0],C=s[4],P=s[8],E=s[12],M=s[1],L=s[5],k=s[9],D=s[13],z=s[2],B=s[6],U=s[10],K=s[14],G=s[3],Q=s[7],at=s[11],mt=s[15];return o[0]=r*A+a*M+c*z+l*G,o[4]=r*C+a*L+c*B+l*Q,o[8]=r*P+a*k+c*U+l*at,o[12]=r*E+a*D+c*K+l*mt,o[1]=u*A+d*M+h*z+f*G,o[5]=u*C+d*L+h*B+f*Q,o[9]=u*P+d*k+h*U+f*at,o[13]=u*E+d*D+h*K+f*mt,o[2]=g*A+v*M+m*z+p*G,o[6]=g*C+v*L+m*B+p*Q,o[10]=g*P+v*k+m*U+p*at,o[14]=g*E+v*D+m*K+p*mt,o[3]=_*A+y*M+x*z+R*G,o[7]=_*C+y*L+x*B+R*Q,o[11]=_*P+y*k+x*U+R*at,o[15]=_*E+y*D+x*K+R*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*c*d-s*l*d-o*a*h+i*l*h+s*a*f-i*c*f)+v*(+e*c*f-e*l*h+o*r*h-s*r*f+s*l*u-o*c*u)+m*(+e*l*d-e*a*f-o*r*d+i*r*f+o*a*u-i*l*u)+p*(-s*a*u-e*c*d+e*a*h+s*r*d-i*r*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=d*m*l-v*h*l+v*c*f-a*m*f-d*c*p+a*h*p,y=g*h*l-u*m*l-g*c*f+r*m*f+u*c*p-r*h*p,x=u*v*l-g*d*l+g*a*f-r*v*f-u*a*p+r*d*p,R=g*d*c-u*v*c-g*a*h+r*v*h+u*a*m-r*d*m,A=e*_+i*y+s*x+o*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(v*h*o-d*m*o-v*s*f+i*m*f+d*s*p-i*h*p)*C,t[2]=(a*m*o-v*c*o+v*s*l-i*m*l-a*s*p+i*c*p)*C,t[3]=(d*c*o-a*h*o-d*s*l+i*h*l+a*s*f-i*c*f)*C,t[4]=y*C,t[5]=(u*m*o-g*h*o+g*s*f-e*m*f-u*s*p+e*h*p)*C,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*p-e*c*p)*C,t[7]=(r*h*o-u*c*o+u*s*l-e*h*l-r*s*f+e*c*f)*C,t[8]=x*C,t[9]=(g*d*o-u*v*o-g*i*f+e*v*f+u*i*p-e*d*p)*C,t[10]=(r*v*o-g*a*o+g*i*l-e*v*l-r*i*p+e*a*p)*C,t[11]=(u*a*o-r*d*o-u*i*l+e*d*l+r*i*f-e*a*f)*C,t[12]=R*C,t[13]=(u*v*s-g*d*s+g*i*h-e*v*h-u*i*m+e*d*m)*C,t[14]=(g*a*s-r*v*s-g*i*c+e*v*c+r*i*m-e*a*m)*C,t[15]=(r*d*s-u*a*s+u*i*c-e*d*c-r*i*h+e*a*h)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,d=a+a,h=o*l,f=o*u,g=o*d,v=r*u,m=r*d,p=a*d,_=c*l,y=c*u,x=c*d,R=i.x,A=i.y,C=i.z;return s[0]=(1-(v+p))*R,s[1]=(f+x)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(h+p))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+y)*C,s[9]=(m-_)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=ms.set(s[0],s[1],s[2]).length();const r=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const l=1/o,u=1/r,d=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=ai){const c=this.elements,l=2*o/(e-t),u=2*o/(i-s),d=(e+t)/(e-t),h=(i+s)/(i-s);let f,g;if(a===ai)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Sa)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=ai){const c=this.elements,l=1/(e-t),u=1/(i-s),d=1/(r-o),h=(e+t)*l,f=(i+s)*u;let g,v;if(a===ai)g=(r+o)*d,v=-2*d;else if(a===Sa)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ms=new b,Pn=new ge,sg=new b(0,0,0),og=new b(1,1,1),vi=new b,Cr=new b,fn=new b,nh=new ge,ih=new dr;class Ee{constructor(t=0,e=0,i=0,s=Ee.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ee.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rg=0;const sh=new b,gs=new dr,Qn=new ge,Pr=new b,yo=new b,ag=new b,cg=new dr,oh=new b(1,0,0),rh=new b(0,1,0),ah=new b(0,0,1),ch={type:"added"},lg={type:"removed"},vs={type:"childadded",child:null},dc={type:"childremoved",child:null};class He extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new b,e=new Ee,i=new dr,s=new b(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Wt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Pr.copy(t):Pr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(yo,Pr,this.up):Qn.lookAt(Pr,yo,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Qn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lg),dc.child=t,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,cg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}He.DEFAULT_UP=new b(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new b,ti=new b,fc=new b,ei=new b,_s=new b,xs=new b,lh=new b,pc=new b,mc=new b,gc=new b,vc=new Pe,_c=new Pe,xc=new Pe;class gn{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Ln.subVectors(s,e),ti.subVectors(i,e),fc.subVectors(t,e);const r=Ln.dot(Ln),a=Ln.dot(ti),c=Ln.dot(fc),l=ti.dot(ti),u=ti.dot(fc),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(r*u-a*c)*h;return o.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ei.x),c.addScaledVector(r,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return vc.setScalar(0),_c.setScalar(0),xc.setScalar(0),vc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,i),xc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(vc,o.x),r.addScaledVector(_c,o.y),r.addScaledVector(xc,o.z),r}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ti.subVectors(t,e),Ln.cross(ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ln.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return gn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;_s.subVectors(s,i),xs.subVectors(o,i),pc.subVectors(t,i);const c=_s.dot(pc),l=xs.dot(pc);if(c<=0&&l<=0)return e.copy(i);mc.subVectors(t,s);const u=_s.dot(mc),d=xs.dot(mc);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(i).addScaledVector(_s,r);gc.subVectors(t,o);const f=_s.dot(gc),g=xs.dot(gc);if(g>=0&&f<=g)return e.copy(o);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(xs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return lh.subVectors(o,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(lh,a);const p=1/(m+v+h);return r=v*p,a=h*p,e.copy(i).addScaledVector(_s,r).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function yc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Jl(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=yc(r,o,t+1/3),this.g=yc(r,o,t),this.b=yc(r,o,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=Ef[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ie.workingToColorSpace(qe.copy(this),t),Math.round(Kt(qe.r*255,0,255))*65536+Math.round(Kt(qe.g*255,0,255))*256+Math.round(Kt(qe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,o=qe.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=u<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Fe){ie.workingToColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Lr);const i=Vo(_i.h,Lr.h,e),s=Vo(_i.s,Lr.s,e),o=Vo(_i.l,Lr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Yt;Yt.NAMES=Ef;let ug=0,ss=class extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=zs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Kc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Kc&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class $e extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ee,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new b,Ir=new gt;let hg=0;class ln{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Il,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array),o=he(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Il&&(t.usage=this.usage),t}}class wf extends ln{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tf extends ln{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qt extends ln{constructor(t,e,i){super(new Float32Array(t),e,i)}}let dg=0;const En=new ge,Mc=new He,ys=new b,pn=new Di,Mo=new Di,ke=new b;class Be extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xf(t)?Tf:wf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Wt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(pn.min,Mo.min),pn.expandByPoint(ke),ke.addVectors(pn.max,Mo.max),pn.expandByPoint(ke)):(pn.expandByPoint(Mo.min),pn.expandByPoint(Mo.max))}pn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)ke.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ke.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(t,l),ke.add(ys)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new b,c[P]=new b;const l=new b,u=new b,d=new b,h=new gt,f=new gt,g=new gt,v=new b,m=new b;function p(P,E,M){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(o,P),f.fromBufferAttribute(o,E),g.fromBufferAttribute(o,M),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(v),a[E].add(v),a[M].add(v),c[P].add(m),c[E].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,E=_.length;P<E;++P){const M=_[P],L=M.start,k=M.count;for(let D=L,z=L+k;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new b,x=new b,R=new b,A=new b;function C(P){R.fromBufferAttribute(s,P),A.copy(R);const E=a[P];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);const L=x.dot(c[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,E=_.length;P<E;++P){const M=_[P],L=M.start,k=M.count;for(let D=L,z=L+k;D<z;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new b,o=new b,r=new b,a=new b,c=new b,l=new b,u=new b,d=new b;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new ln(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],d=o[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new ge,ki=new Mf,Dr=new co,hh=new b,Nr=new b,Ur=new b,Fr=new b,Sc=new b,zr=new b,dh=new b,Or=new b;class Vt extends He{constructor(t=new Be,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){zr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(Sc.fromBufferAttribute(d,t),r?zr.addScaledVector(Sc,u):zr.addScaledVector(Sc.sub(e),u))}e.add(zr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(o),ki.copy(t.ray).recast(t.near),!(Dr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Dr,hh)===null||ki.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(uh.copy(o).invert(),ki.copy(t.ray).applyMatrix4(uh),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,R=y;x<R;x+=3){const A=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=Br(this,p,t,i,l,u,d,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Br(this,r,t,i,l,u,d,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,R=y;x<R;x+=3){const A=x,C=x+1,P=x+2;s=Br(this,p,t,i,l,u,d,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;s=Br(this,r,t,i,l,u,d,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fg(n,t,e,i,s,o,r,a){let c;if(t.side===on?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===Ci,a),c===null)return null;Or.copy(a),Or.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Or);return l<e.near||l>e.far?null:{distance:l,point:Or.clone(),object:n}}function Br(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Nr),n.getVertexPosition(c,Ur),n.getVertexPosition(l,Fr);const u=fg(n,t,e,i,Nr,Ur,Fr,dh);if(u){const d=new b;gn.getBarycoord(dh,Nr,Ur,Fr,d),s&&(u.uv=gn.getInterpolatedAttribute(s,a,c,l,d,new gt)),o&&(u.uv1=gn.getInterpolatedAttribute(o,a,c,l,d,new gt)),r&&(u.normal=gn.getInterpolatedAttribute(r,a,c,l,d,new b),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new b,materialIndex:0};gn.getNormal(Nr,Ur,Fr,h.normal),u.face=h,u.barycoord=d}return u}class un extends Be{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(v,m,p,_,y,x,R,A,C,P,E){const M=x/C,L=R/P,k=x/2,D=R/2,z=A/2,B=C+1,U=P+1;let K=0,G=0;const Q=new b;for(let at=0;at<U;at++){const mt=at*L-D;for(let ot=0;ot<B;ot++){const Jt=ot*M-k;Q[v]=Jt*_,Q[m]=mt*y,Q[p]=z,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ot/C),d.push(1-at/P),K+=1}}for(let at=0;at<P;at++)for(let mt=0;mt<C;mt++){const ot=h+mt+B*at,Jt=h+mt+B*(at+1),$=h+(mt+1)+B*(at+1),rt=h+(mt+1)+B*at;c.push(ot,Jt,rt),c.push(Jt,$,rt),G+=6}a.addGroup(f,G,E),f+=G,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=Js(n[e]);for(const s in i)t[s]=i[s]}return t}function pg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const mg={clone:Js,merge:nn};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Af extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new b,fh=new gt,ph=new gt;class wn extends Af{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,fh,ph),e.subVectors(ph,fh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Ss=1;class _g extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const o=new wn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const r=new wn(Ms,Ss,t,e);r.layers=this.layers,this.add(r);const a=new wn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const c=new wn(Ms,Ss,t,e);c.layers=this.layers,this.add(c);const l=new wn(Ms,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rf extends Ke{constructor(t=[],e=Ks,i,s,o,r,a,c,l,u){super(t,e,i,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xg extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),o=new Pi({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ti});o.uniforms.tEquirect.value=e;const r=new Vt(s,o),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Nn),new _g(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}class vn extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yg={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Mg extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ee,this.environmentIntensity=1,this.environmentRotation=new Ee,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new b;class wa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array),o=he(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fr extends ss{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Es;const So=new b,ws=new b,Ts=new b,bs=new gt,Eo=new gt,Cf=new ge,kr=new b,wo=new b,Hr=new b,mh=new gt,wc=new gt,gh=new gt;class Ua extends He{constructor(t=new fr){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sg(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new wa(i,3,0,!1)),Es.setAttribute("uv",new wa(i,2,3,!1))}this.geometry=Es,this.material=t,this.center=new gt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ts.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;Vr(kr.set(-.5,-.5,0),Ts,r,ws,s,o),Vr(wo.set(.5,-.5,0),Ts,r,ws,s,o),Vr(Hr.set(.5,.5,0),Ts,r,ws,s,o),mh.set(0,0),wc.set(1,0),gh.set(1,1);let a=t.ray.intersectTriangle(kr,wo,Hr,!1,So);if(a===null&&(Vr(wo.set(-.5,.5,0),Ts,r,ws,s,o),wc.set(0,1),a=t.ray.intersectTriangle(kr,Hr,wo,!1,So),a===null))return;const c=t.ray.origin.distanceTo(So);c<t.near||c>t.far||e.push({distance:c,point:So.clone(),uv:gn.getInterpolation(So,kr,wo,Hr,mh,wc,gh,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vr(n,t,e,i,s,o){bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Eo.x=o*bs.x-s*bs.y,Eo.y=s*bs.x+o*bs.y):Eo.copy(bs),n.copy(t),n.x+=Eo.x,n.y+=Eo.y,n.applyMatrix4(Cf)}class Eg extends Ke{constructor(t=null,e=1,i=1,s,o,r,a,c,l=_n,u=_n,d,h){super(null,r,a,c,l,u,s,o,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends ln{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const As=new ge,_h=new ge,Gr=[],xh=new Di,wg=new ge,To=new Vt,bo=new co;class Pf extends Vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,As),xh.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new co),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,As),bo.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(bo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(i),t.ray.intersectsSphere(bo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,As),_h.multiplyMatrices(i,As),To.matrixWorld=_h,To.raycast(t,Gr);for(let r=0,a=Gr.length;r<a;r++){const c=Gr[r];c.instanceId=o,c.object=this,e.push(c)}Gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Eg(new Float32Array(s*this.count),s,this.count,Zl,Gn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tc=new b,Tg=new b,bg=new Wt;class qi{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Tc.subVectors(i,e).cross(Tg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bg.getNormalMatrix(t),s=this.coplanarPoint(Tc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new co,Wr=new b;class Lf{constructor(t=new qi,e=new qi,i=new qi,s=new qi,o=new qi,r=new qi){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],y=s[14],x=s[15];if(i[0].setComponents(c-o,h-l,m-f,x-p).normalize(),i[1].setComponents(c+o,h+l,m+f,x+p).normalize(),i[2].setComponents(c+r,h+u,m+g,x+_).normalize(),i[3].setComponents(c-r,h-u,m-g,x-_).normalize(),i[4].setComponents(c-a,h-d,m-v,x-y).normalize(),e===ai)i[5].setComponents(c+a,h+d,m+v,x+y).normalize();else if(e===Sa)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ta=new b,ba=new b,yh=new ge,Ao=new Mf,qr=new co,bc=new b,Mh=new b;class Ag extends He{constructor(t=new Be,e=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)Ta.fromBufferAttribute(e,s-1),ba.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(ba);t.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=o,t.ray.intersectsSphere(qr)===!1)return;yh.copy(s).invert(),Ao.copy(t.ray).applyMatrix4(yh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),_=u.getX(v+1),y=Xr(this,t,Ao,c,p,_,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Xr(this,t,Ao,c,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=l){const p=Xr(this,t,Ao,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Xr(this,t,Ao,c,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Xr(n,t,e,i,s,o,r){const a=n.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,o),e.distanceSqToSegment(Ta,ba,bc,Mh)>i)return;bc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(bc);if(!(l<t.near||l>t.far))return{distance:l,point:Mh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Sh=new b,Eh=new b;class If extends Ag{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Sh.fromBufferAttribute(e,s),Eh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sh.distanceTo(Eh);t.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lo extends Ke{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Df extends Ke{constructor(t,e,i=Ji,s,o,r,a=_n,c=_n,l,u=Ko,d=1){if(u!==Ko&&u!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,o,r,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ql(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fa extends Be{constructor(t=1,e=1,i=4,s=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:o},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),o=Math.max(1,Math.floor(o));const r=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=i*2+o,v=s+1,m=new b,p=new b;for(let _=0;_<=g;_++){let y=0,x=0,R=0,A=0;if(_<=i){const E=_/i,M=E*Math.PI/2;x=-u-t*Math.cos(M),R=t*Math.sin(M),A=-t*Math.cos(M),y=E*d}else if(_<=i+o){const E=(_-i)/o;x=-u+E*e,R=t,A=0,y=d+E*h}else{const E=(_-i-o)/i,M=E*Math.PI/2;x=u+t*Math.sin(M),R=t*Math.cos(M),A=t*Math.sin(M),y=d+h+E*d}const C=Math.max(0,Math.min(1,y/f));let P=0;_===0?P=.5/s:_===g&&(P=-.5/s);for(let E=0;E<=s;E++){const M=E/s,L=M*Math.PI*2,k=Math.sin(L),D=Math.cos(L);p.x=-R*D,p.y=x,p.z=R*k,a.push(p.x,p.y,p.z),m.set(-R*D,A,R*k),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+P,C)}if(_>0){const E=(_-1)*v;for(let M=0;M<s;M++){const L=E+M,k=E+M+1,D=_*v+M,z=_*v+M+1;r.push(L,k,D),r.push(k,z,D)}}}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class uo extends Be{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new b,u=new gt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[h]/t+1)/2,u.y=(r[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class os extends Be{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=i/2;let p=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function _(){const x=new b,R=new b;let A=0;const C=(e-t)/i;for(let P=0;P<=o;P++){const E=[],M=P/o,L=M*(e-t)+t;for(let k=0;k<=s;k++){const D=k/s,z=D*c+a,B=Math.sin(z),U=Math.cos(z);R.x=L*B,R.y=-M*i+m,R.z=L*U,d.push(R.x,R.y,R.z),x.set(B,C,U).normalize(),h.push(x.x,x.y,x.z),f.push(D,1-M),E.push(g++)}v.push(E)}for(let P=0;P<s;P++)for(let E=0;E<o;E++){const M=v[E][P],L=v[E+1][P],k=v[E+1][P+1],D=v[E][P+1];(t>0||E!==0)&&(u.push(M,L,D),A+=3),(e>0||E!==o-1)&&(u.push(L,k,D),A+=3)}l.addGroup(p,A,0),p+=A}function y(x){const R=g,A=new gt,C=new b;let P=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=s;k++){const z=k/s*c+a,B=Math.cos(z),U=Math.sin(z);C.x=E*U,C.y=m*M,C.z=E*B,d.push(C.x,C.y,C.z),h.push(0,M,0),A.x=B*.5+.5,A.y=U*.5*M+.5,f.push(A.x,A.y),g++}for(let k=0;k<s;k++){const D=R+k,z=L+k;x===!0?u.push(z,z+1,D):u.push(z+1,z,D),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eu extends os{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new eu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nu extends Be{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),l(i),u(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new b,x=new b,R=new b;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],x),f(e[A+2],R),c(y,x,R,_)}function c(_,y,x,R){const A=R+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const E=_.clone().lerp(x,P/A),M=y.clone().lerp(x,P/A),L=A-P;for(let k=0;k<=L;k++)k===0&&P===A?C[P][k]=E:C[P][k]=E.clone().lerp(M,k/L)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const M=Math.floor(E/2);E%2===0?(h(C[P][M+1]),h(C[P+1][M]),h(C[P][M])):(h(C[P][M+1]),h(C[P+1][M+1]),h(C[P+1][M]))}}function l(_){const y=new b;for(let x=0;x<o.length;x+=3)y.x=o[x+0],y.y=o[x+1],y.z=o[x+2],y.normalize().multiplyScalar(_),o[x+0]=y.x,o[x+1]=y.y,o[x+2]=y.z}function u(){const _=new b;for(let y=0;y<o.length;y+=3){_.x=o[y+0],_.y=o[y+1],_.z=o[y+2];const x=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;r.push(x,1-R)}g(),d()}function d(){for(let _=0;_<r.length;_+=6){const y=r[_+0],x=r[_+2],R=r[_+4],A=Math.max(y,x,R),C=Math.min(y,x,R);A>.9&&C<.1&&(y<.2&&(r[_+0]+=1),x<.2&&(r[_+2]+=1),R<.2&&(r[_+4]+=1))}}function h(_){o.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new b,y=new b,x=new b,R=new b,A=new gt,C=new gt,P=new gt;for(let E=0,M=0;E<o.length;E+=9,M+=6){_.set(o[E+0],o[E+1],o[E+2]),y.set(o[E+3],o[E+4],o[E+5]),x.set(o[E+6],o[E+7],o[E+8]),A.set(r[M+0],r[M+1]),C.set(r[M+2],r[M+3]),P.set(r[M+4],r[M+5]),R.copy(_).add(y).add(x).divideScalar(3);const L=m(R);v(A,M+0,_,L),v(C,M+2,y,L),v(P,M+4,x,L)}}function v(_,y,x,R){R<0&&_.x===1&&(r[y]=_.x-1),x.x===0&&x.z===0&&(r[y]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nu(t.vertices,t.indices,t.radius,t.details)}}class iu extends nu{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new iu(t.radius,t.detail)}}const Yr=new b,Zr=new b,Ac=new b,Kr=new gn;class Rg extends Be{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(Os*e),r=t.getIndex(),a=t.getAttribute("position"),c=r?r.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){r?(l[0]=r.getX(g),l[1]=r.getX(g+1),l[2]=r.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Kr;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Kr.getNormal(Ac),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const y=(_+1)%3,x=d[_],R=d[y],A=Kr[u[_]],C=Kr[u[y]],P=`${x}_${R}`,E=`${R}_${x}`;E in h&&h[E]?(Ac.dot(h[E].normal)<=o&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),h[E]=null):P in h||(h[P]={index0:l[_],index1:l[y],normal:Ac.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];Yr.fromBufferAttribute(a,v),Zr.fromBufferAttribute(a,m),f.push(Yr.x,Yr.y,Yr.z),f.push(Zr.x,Zr.y,Zr.z)}this.setAttribute("position",new Qt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const u=i[s],h=i[s+1]-u,f=(r-u)/h;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new gt:new b);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new b,s=[],o=[],r=[],a=new b,c=new ge;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new b)}o[0]=new b,r[0]=new b;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Kt(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class su extends Zn{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cg extends su{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ou(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,d){let h=(r-o)/l-(a-o)/(l+u)+(a-r)/u,f=(a-r)/u-(c-r)/(u+d)+(c-a)/d;h*=u,f*=u,s(r,a,h,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const $r=new b,Rc=new ou,Cc=new ou,Pc=new ou;class Pg extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new b){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:($r.subVectors(s[0],s[1]).add(s[0]),l=$r);const d=s[a%o],h=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:($r.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=$r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Rc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,m),Cc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,m),Pc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Cc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Pc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Rc.calc(c),Cc.calc(c),Pc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wh(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function Lg(n,t){const e=1-n;return e*e*t}function Ig(n,t){return 2*(1-n)*n*t}function Dg(n,t){return n*n*t}function Go(n,t,e,i){return Lg(n,t)+Ig(n,e)+Dg(n,i)}function Ng(n,t){const e=1-n;return e*e*e*t}function Ug(n,t){const e=1-n;return 3*e*e*n*t}function Fg(n,t){return 3*(1-n)*n*n*t}function zg(n,t){return n*n*n*t}function Wo(n,t,e,i,s){return Ng(n,t)+Ug(n,e)+Fg(n,i)+zg(n,s)}class Nf extends Zn{constructor(t=new gt,e=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new gt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Wo(t,s.x,o.x,r.x,a.x),Wo(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Og extends Zn{constructor(t=new b,e=new b,i=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new b){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Wo(t,s.x,o.x,r.x,a.x),Wo(t,s.y,o.y,r.y,a.y),Wo(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uf extends Zn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bg extends Zn{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends Zn{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Go(t,s.x,o.x,r.x),Go(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kg extends Zn{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Go(t,s.x,o.x,r.x),Go(t,s.y,o.y,r.y),Go(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(wh(a,c.x,l.x,u.x,d.x),wh(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Th=Object.freeze({__proto__:null,ArcCurve:Cg,CatmullRomCurve3:Pg,CubicBezierCurve:Nf,CubicBezierCurve3:Og,EllipseCurve:su,LineCurve:Uf,LineCurve3:Bg,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:kg,SplineCurve:zf});class Hg extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Th[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Th[s.type]().fromJSON(s))}return this}}class bh extends Hg{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Uf(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Ff(this.currentPoint.clone(),new gt(t,e),new gt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Nf(this.currentPoint.clone(),new gt(t,e),new gt(i,s),new gt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new zf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new su(t,e,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Of=class extends bh{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new bh().fromJSON(s))}return this}};function Vg(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Bf(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(i&&(o=Yg(n,t,o,e)),n.length>80*e){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Jo(o,r,e,a,c,l,0),r}function Bf(n,t,e,i,s){let o;if(s===sv(n,t,e,i)>0)for(let r=t;r<e;r+=i)o=Ah(r/i|0,n[r],n[r+1],o);else for(let r=e-i;r>=t;r-=i)o=Ah(r/i|0,n[r],n[r+1],o);return o&&Qs(o,o.next)&&(tr(o),o=o.next),o}function ts(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Qs(e,e.next)||we(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Jo(n,t,e,i,s,o,r){if(!n)return;!r&&o&&Jg(n,i,s,o);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(o?Wg(n,i,s,o):Gg(n)){t.push(c.i,n.i,l.i),tr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=qg(ts(n),t),Jo(n,t,e,i,s,o,2)):r===2&&Xg(n,t,e,i,s,o):Jo(ts(n),t,e,i,s,o,1);break}}}function Gg(n){const t=n.prev,e=n,i=n.next;if(we(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,o,r),d=Math.min(a,c,l),h=Math.max(s,o,r),f=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Bo(s,a,o,c,r,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wg(n,t,e,i){const s=n.prev,o=n,r=n.next;if(we(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,d=o.y,h=r.y,f=Math.min(a,c,l),g=Math.min(u,d,h),v=Math.max(a,c,l),m=Math.max(u,d,h),p=Dl(f,g,t,e,i),_=Dl(v,m,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Bo(a,u,c,d,l,h,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&Bo(a,u,c,d,l,h,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Bo(a,u,c,d,l,h,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&Bo(a,u,c,d,l,h,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function qg(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Qs(i,s)&&Hf(i,e,e.next,s)&&Qo(i,s)&&Qo(s,i)&&(t.push(i.i,e.i,s.i),tr(e),tr(e.next),e=n=s),e=e.next}while(e!==n);return ts(e)}function Xg(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&ev(r,a)){let c=Vf(r,a);r=ts(r,r.next),c=ts(c,c.next),Jo(r,t,e,i,s,o,0),Jo(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function Yg(n,t,e,i){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Bf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(tv(l))}s.sort(Zg);for(let o=0;o<s.length;o++)e=Kg(s[o],e);return e}function Zg(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Kg(n,t){const e=$g(n,t);if(!e)return t;const i=Vf(e,n);return ts(i,i.next),ts(e,e.next)}function $g(n,t){let e=t;const i=n.x,s=n.y;let o=-1/0,r;if(Qs(n,e))return e;do{if(Qs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>o&&(o=d,r=e.x<e.next.x?e:e.next,d===i))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0;e=r;do{if(i>=e.x&&e.x>=c&&i!==e.x&&kf(s<l?i:o,s,c,l,s<l?o:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Qo(e,n)&&(d<u||d===u&&(e.x>r.x||e.x===r.x&&jg(r,e)))&&(r=e,u=d)}e=e.next}while(e!==a);return r}function jg(n,t){return we(n.prev,n,t.prev)<0&&we(t.next,n,n.next)<0}function Jg(n,t,e,i){let s=n;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(n){let t,e=1;do{let i=n,s;n=null;let o=null;for(t=0;i;){t++;let r=i,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,a--):(s=r,r=r.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;i=r}o.nextZ=null,e*=2}while(t>1);return n}function Dl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function tv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function kf(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function Bo(n,t,e,i,s,o,r,a){return!(n===r&&t===a)&&kf(n,t,e,i,s,o,r,a)}function ev(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!nv(n,t)&&(Qo(n,t)&&Qo(t,n)&&iv(n,t)&&(we(n.prev,n,t.prev)||we(n,t.prev,t))||Qs(n,t)&&we(n.prev,n,n.next)>0&&we(t.prev,t,t.next)>0)}function we(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Qs(n,t){return n.x===t.x&&n.y===t.y}function Hf(n,t,e,i){const s=Jr(we(n,t,e)),o=Jr(we(n,t,i)),r=Jr(we(e,i,n)),a=Jr(we(e,i,t));return!!(s!==o&&r!==a||s===0&&jr(n,e,t)||o===0&&jr(n,i,t)||r===0&&jr(e,n,i)||a===0&&jr(e,t,i))}function jr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Jr(n){return n>0?1:n<0?-1:0}function nv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qo(n,t){return we(n.prev,n,n.next)<0?we(n,t,n.next)>=0&&we(n,n.prev,t)>=0:we(n,t,n.prev)<0||we(n,n.next,t)<0}function iv(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Vf(n,t){const e=Nl(n.i,n.x,n.y),i=Nl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Ah(n,t,e,i){const s=Nl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function tr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sv(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class ov{static triangulate(t,e,i=2){return Vg(t,e,i)}}class qo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return qo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Rh(t),Ch(i,t);let r=t.length;e.forEach(Rh);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Ch(i,e[c]);const a=ov.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Rh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ch(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ho extends Be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const _=p*h-r;for(let y=0;y<l;y++){const x=y*d-o;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const y=_+l*p,x=_+l*(p+1),R=_+1+l*(p+1),A=_+1+l*p;f.push(y,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.width,t.height,t.widthSegments,t.heightSegments)}}class za extends Be{constructor(t=.5,e=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new b,g=new gt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=o+m/i*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const _=p+m,y=_,x=_+i+1,R=_+i+2,A=_+1;a.push(y,x,A),a.push(x,R,A)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ru extends Be{constructor(t=new Of([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(r,2));function l(u){const d=s.length/3,h=u.extractPoints(e);let f=h.shape;const g=h.holes;qo.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];qo.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=qo.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],y=_[0]+d,x=_[1]+d,R=_[2]+d;i.push(y,x,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return rv(e,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];i.push(r)}return new ru(i,t.curveSegments)}}function rv(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Ni extends Be{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const u=[],d=new b,h=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const _=[],y=p/i;let x=0;p===0&&r===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(s+A*o)*Math.sin(r+y*a),d.y=t*Math.cos(r+y*a),d.z=t*Math.sin(s+A*o)*Math.sin(r+y*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+x,1-y),_.push(l++)}u.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const y=u[p][_+1],x=u[p][_],R=u[p+1][_],A=u[p+1][_+1];(p!==0||r>0)&&f.push(y,x,A),(p!==i-1||c<Math.PI)&&f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oa extends Be{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new b,d=new b,h=new b;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const v=g/s*o,m=f/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;r.push(v,m,_),r.push(m,p,_)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ve extends ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ee,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class av extends Ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cv extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lv extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uv extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hv extends Af{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dv extends uv{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fv extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ph(){return performance.now()}function Lh(n,t,e,i){const s=mv(i);switch(e){case ff:return n*t;case Zl:return n*t/s.components*s.byteLength;case Kl:return n*t/s.components*s.byteLength;case mf:return n*t*2/s.components*s.byteLength;case $l:return n*t*2/s.components*s.byteLength;case pf:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case jl:return n*t*4/s.components*s.byteLength;case ha:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(n,16)*Math.max(t,8)/4;case rl:case cl:return Math.max(n,8)*Math.max(t,8)/2;case ul:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ma:case Al:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case gf:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(n){switch(n){case hi:case uf:return{byteLength:1,components:1};case Yo:case hf:case hr:return{byteLength:2,components:1};case Xl:case Yl:return{byteLength:2,components:4};case Ji:case ql:case Gn:return{byteLength:4,components:1};case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gf(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function gv(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
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
#endif`,xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ev=`#ifdef USE_AOMAP
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
#endif`,wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tv=`#ifdef USE_BATCHING
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
#endif`,bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pv=`#ifdef USE_IRIDESCENCE
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
#endif`,Lv=`#ifdef USE_BUMPMAP
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kv=`#define PI 3.141592653589793
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
} // validated`,Hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vv=`vec3 transformedNormal = objectNormal;
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
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
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
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
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
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p_=`PhysicalMaterial material;
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
#endif`,m_=`struct PhysicalMaterial {
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
}`,g_=`
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
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
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,Ex=`#if DEPTH_PACKING == 3200
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
}`,wx=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,zx=`#define NORMAL
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define PHONG
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
}`,kx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
}`,Vx=`#define TOON
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
}`,Gx=`#define TOON
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
}`,Wx=`uniform float size;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,Yx=`uniform vec3 color;
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
}`,Zx=`uniform float rotation;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:vv,alphahash_pars_fragment:_v,alphamap_fragment:xv,alphamap_pars_fragment:yv,alphatest_fragment:Mv,alphatest_pars_fragment:Sv,aomap_fragment:Ev,aomap_pars_fragment:wv,batching_pars_vertex:Tv,batching_vertex:bv,begin_vertex:Av,beginnormal_vertex:Rv,bsdfs:Cv,iridescence_fragment:Pv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Iv,clipping_planes_pars_fragment:Dv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Uv,color_fragment:Fv,color_pars_fragment:zv,color_pars_vertex:Ov,color_vertex:Bv,common:kv,cube_uv_reflection_fragment:Hv,defaultnormal_vertex:Vv,displacementmap_pars_vertex:Gv,displacementmap_vertex:Wv,emissivemap_fragment:qv,emissivemap_pars_fragment:Xv,colorspace_fragment:Yv,colorspace_pars_fragment:Zv,envmap_fragment:Kv,envmap_common_pars_fragment:$v,envmap_pars_fragment:jv,envmap_pars_vertex:Jv,envmap_physical_pars_fragment:l_,envmap_vertex:Qv,fog_vertex:t_,fog_pars_vertex:e_,fog_fragment:n_,fog_pars_fragment:i_,gradientmap_pars_fragment:s_,lightmap_pars_fragment:o_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:a_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:h_,lights_phong_fragment:d_,lights_phong_pars_fragment:f_,lights_physical_fragment:p_,lights_physical_pars_fragment:m_,lights_fragment_begin:g_,lights_fragment_maps:v_,lights_fragment_end:__,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:S_,map_fragment:E_,map_pars_fragment:w_,map_particle_fragment:T_,map_particle_pars_fragment:b_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:R_,morphinstance_vertex:C_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:I_,morphtarget_vertex:D_,normal_fragment_begin:N_,normal_fragment_maps:U_,normal_pars_fragment:F_,normal_pars_vertex:z_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:H_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:G_,opaque_fragment:W_,packing:q_,premultiplied_alpha_fragment:X_,project_vertex:Y_,dithering_fragment:Z_,dithering_pars_fragment:K_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:Q_,shadowmap_vertex:tx,shadowmask_pars_fragment:ex,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:sx,skinnormal_vertex:ox,specularmap_fragment:rx,specularmap_pars_fragment:ax,tonemapping_fragment:cx,tonemapping_pars_fragment:lx,transmission_fragment:ux,transmission_pars_fragment:hx,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:vx,backgroundCube_vert:_x,backgroundCube_frag:xx,cube_vert:yx,cube_frag:Mx,depth_vert:Sx,depth_frag:Ex,distanceRGBA_vert:wx,distanceRGBA_frag:Tx,equirect_vert:bx,equirect_frag:Ax,linedashed_vert:Rx,linedashed_frag:Cx,meshbasic_vert:Px,meshbasic_frag:Lx,meshlambert_vert:Ix,meshlambert_frag:Dx,meshmatcap_vert:Nx,meshmatcap_frag:Ux,meshnormal_vert:Fx,meshnormal_frag:zx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:kx,meshphysical_frag:Hx,meshtoon_vert:Vx,meshtoon_frag:Gx,points_vert:Wx,points_frag:qx,shadow_vert:Xx,shadow_frag:Yx,sprite_vert:Zx,sprite_frag:Kx},lt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Hn={basic:{uniforms:nn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:nn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:nn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:nn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:nn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:nn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:nn([lt.points,lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:nn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:nn([lt.common,lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:nn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:nn([lt.sprite,lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:nn([lt.common,lt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:nn([lt.lights,lt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Hn.physical={uniforms:nn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Qr={r:0,b:0,g:0},Vi=new Ee,$x=new ge;function jx(n,t,e,i,s,o,r){const a=new Yt(0);let c=o===!0?0:1,l,u,d=null,h=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const R=g(y);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Na)?(u===void 0&&(u=new Vt(new un(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Js(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vi.copy(x.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(Vi)),u.material.toneMapped=ie.getTransfer(R.colorSpace)!==fe,(d!==R||h!==R.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Vt(new ho(2,2),new Pi({name:"BackgroundMaterial",uniforms:Js(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ie.getTransfer(R.colorSpace)!==fe,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,h=R.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(Qr,bf(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,x,r)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:v,addToRenderList:m,dispose:_}}function Jx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let o=s,r=!1;function a(M,L,k,D,z){let B=!1;const U=d(D,k,L);o!==U&&(o=U,l(o.object)),B=f(M,D,k,z),B&&g(M,D,k,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,x(M,L,k,D),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,L,k){const D=k.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let B=z[L.id];B===void 0&&(B={},z[L.id]=B);let U=B[D];return U===void 0&&(U=h(c()),B[D]=U),U}function h(M){const L=[],k=[],D=[];for(let z=0;z<e;z++)L[z]=0,k[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,L,k,D){const z=o.attributes,B=L.attributes;let U=0;const K=k.getAttributes();for(const G in K)if(K[G].location>=0){const at=z[G];let mt=B[G];if(mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;U++}return o.attributesNum!==U||o.index!==D}function g(M,L,k,D){const z={},B=L.attributes;let U=0;const K=k.getAttributes();for(const G in K)if(K[G].location>=0){let at=B[G];at===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),z[G]=mt,U++}o.attributes=z,o.attributesNum=U,o.index=D}function v(){const M=o.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const k=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;k[M]=1,D[M]===0&&(n.enableVertexAttribArray(M),D[M]=1),z[M]!==L&&(n.vertexAttribDivisor(M,L),z[M]=L)}function _(){const M=o.newAttributes,L=o.enabledAttributes;for(let k=0,D=L.length;k<D;k++)L[k]!==M[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function y(M,L,k,D,z,B,U){U===!0?n.vertexAttribIPointer(M,L,k,z,B):n.vertexAttribPointer(M,L,k,D,z,B)}function x(M,L,k,D){v();const z=D.attributes,B=k.getAttributes(),U=L.defaultAttributeValues;for(const K in B){const G=B[K];if(G.location>=0){let Q=z[K];if(Q===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const at=Q.normalized,mt=Q.itemSize,ot=t.get(Q);if(ot===void 0)continue;const Jt=ot.buffer,$=ot.type,rt=ot.bytesPerElement,wt=$===n.INT||$===n.UNSIGNED_INT||Q.gpuType===ql;if(Q.isInterleavedBufferAttribute){const ht=Q.data,Ct=ht.stride,se=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)p(G.location+Ft,ht.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)m(G.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Ft=0;Ft<G.locationSize;Ft++)y(G.location+Ft,mt/G.locationSize,$,at,Ct*rt,(se+mt/G.locationSize*Ft)*rt,wt)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)p(G.location+ht,Q.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let ht=0;ht<G.locationSize;ht++)y(G.location+ht,mt/G.locationSize,$,at,mt*rt,mt/G.locationSize*ht*rt,wt)}}else if(U!==void 0){const at=U[K];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(G.location,at);break;case 3:n.vertexAttrib3fv(G.location,at);break;case 4:n.vertexAttrib4fv(G.location,at);break;default:n.vertexAttrib1fv(G.location,at)}}}}_()}function R(){P();for(const M in i){const L=i[M];for(const k in L){const D=L[k];for(const z in D)u(D[z].object),delete D[z];delete L[k]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const k in L){const D=L[k];for(const z in D)u(D[z].object),delete D[z];delete L[k]}delete i[M.id]}function C(M){for(const L in i){const k=i[L];if(k[M.id]===void 0)continue;const D=k[M.id];for(const z in D)u(D[z].object),delete D[z];delete k[M.id]}}function P(){E(),r=!0,o!==s&&(o=s,l(o.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Qx(n,t,e){let i;function s(l){i=l}function o(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function r(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ty(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gn&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function ey(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new qi,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||o&&!m)o?u(null):l();else{const _=o?0:i,y=_*4;let x=p.clippingState||null;c.value=x,x=u(g,h,y,f);for(let R=0;R!==y;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)r.copy(d[y]).applyMatrix4(_,a),r.normal.toArray(m,x),m[x+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ny(n){let t=new WeakMap;function e(r,a){return a===il?r.mapping=Ks:a===sl&&(r.mapping=$s),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===il||a===sl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new xg(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const Ns=4,Ih=[.125,.215,.35,.446,.526,.582],Zi=20,Lc=new hv,Dh=new Yt;let Ic=null,Dc=0,Nc=0,Uc=!1;const Xi=(1+Math.sqrt(5))/2,Rs=1/Xi,Nh=[new b(-Xi,Rs,0),new b(Xi,Rs,0),new b(-Rs,0,Xi),new b(Rs,0,Xi),new b(0,Xi,-Rs),new b(0,Xi,Rs),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],iy=new b;class Uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,o={}){const{size:r=256,position:a=iy}=o;Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Dc,Nc),this._renderer.xr.enabled=Uc,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:hr,format:Un,colorSpace:js,depthBuffer:!1},s=Fh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sy(o)),this._blurMaterial=oy(o,t,e)}return s}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,i,s,o){const c=new wn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Dh),d.toneMapping=ci,d.autoClear=!1;const g=new $e({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new Vt(new un,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(Dh),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[_],o.y,o.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[_],o.z)):(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[_]));const x=this._cubeSize;ta(s,y*x,_>2?x:0,x,x),d.setRenderTarget(s),m&&d.render(v,c),d.render(t,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ks||t.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Vt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ta(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Lc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Nh[(s-o-1)%Nh.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Vt(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),v=o/g,m=isFinite(o)?1+Math.floor(u*v):Zi;m>Zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let _=0;for(let C=0;C<Zi;++C){const P=C/v,E=Math.exp(-P*P/2);p.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const x=this._sizeLods[s],R=3*x*(s>y-Ns?s-y+Ns:0),A=4*(this._cubeSize-x);ta(e,R,A,3*x,2*x),c.setRenderTarget(e),c.render(d,Lc)}}function sy(n){const t=[],e=[],i=[];let s=n;const o=n-Ns+1+Ih.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-Ns?c=Ih[r-n+Ns-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(E,v*g*A),y.set(h,m*g*A);const M=[A,A,A,A,A,A];x.set(M,p*g*A)}const R=new Be;R.setAttribute("position",new ln(_,v)),R.setAttribute("uv",new ln(y,m)),R.setAttribute("faceIndex",new ln(x,p)),t.push(R),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fh(n,t,e){const i=new Qi(n,t,e);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oy(n,t,e){const i=new Float32Array(Zi),s=new b(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:au(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function zh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Oh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function ry(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===il||c===sl,u=c===Ks||c===$s;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Uh(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Uh(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function ay(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Bs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cy(n,t,e,i){const s={},o=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];const f=o.get(h);f&&(t.remove(f),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const R=_[y+0],A=_[y+1],C=_[y+2];h.push(R,A,A,C,C,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const R=y+0,A=y+1,C=y+2;h.push(R,A,A,C,C,R)}}else return;const m=new(xf(h)?Tf:wf)(h,1);m.version=v;const p=o.get(d);p&&t.remove(p),o.set(d,m)}function u(d){const h=o.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function ly(n,t,e){let i;function s(h){i=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function c(h,f){n.drawElements(i,f,o,h*r),e.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,o,h*r,g),e.update(f,i,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(h,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/r,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,h,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function uy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hy(n,t,e){const i=new WeakMap,s=new Pe;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*A*4*d),P=new yf(C,R,A,d);P.type=Gn,P.needsUpdate=!0;const E=x*4;for(let L=0;L<d;L++){const k=p[L],D=_[L],z=y[L],B=R*A*4*L;for(let U=0;U<k.count;U++){const K=U*E;g===!0&&(s.fromBufferAttribute(k,U),C[B+K+0]=s.x,C[B+K+1]=s.y,C[B+K+2]=s.z,C[B+K+3]=0),v===!0&&(s.fromBufferAttribute(D,U),C[B+K+4]=s.x,C[B+K+5]=s.y,C[B+K+6]=s.z,C[B+K+7]=0),m===!0&&(s.fromBufferAttribute(z,U),C[B+K+8]=s.x,C[B+K+9]=s.y,C[B+K+10]=s.z,C[B+K+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new gt(R,A)},i.set(a,h),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function dy(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Wf=new Ke,Bh=new Df(1,1),qf=new yf,Xf=new ng,Yf=new Rf,kh=[],Hh=[],Vh=new Float32Array(16),Gh=new Float32Array(9),Wh=new Float32Array(4);function fo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=kh[s];if(o===void 0&&(o=new Float32Array(s),kh[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=Hh[t];e===void 0&&(e=new Int32Array(t),Hh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function my(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function vy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,i))return;Wh.set(i),n.uniformMatrix2fv(this.addr,!1,Wh),Oe(e,i)}}function _y(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,i))return;Gh.set(i),n.uniformMatrix3fv(this.addr,!1,Gh),Oe(e,i)}}function xy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,i))return;Vh.set(i),n.uniformMatrix4fv(this.addr,!1,Vh),Oe(e,i)}}function yy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function My(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function Ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function wy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function by(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function Ry(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Bh.compareFunction=_f,o=Bh):o=Wf,e.setTexture2D(t||o,s)}function Cy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Xf,s)}function Py(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yf,s)}function Ly(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qf,s)}function Iy(n){switch(n){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return vy;case 35675:return _y;case 35676:return xy;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return wy;case 36294:return Ty;case 36295:return by;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Dy(n,t){n.uniform1fv(this.addr,t)}function Ny(n,t){const e=fo(t,this.size,2);n.uniform2fv(this.addr,e)}function Uy(n,t){const e=fo(t,this.size,3);n.uniform3fv(this.addr,e)}function Fy(n,t){const e=fo(t,this.size,4);n.uniform4fv(this.addr,e)}function zy(n,t){const e=fo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Oy(n,t){const e=fo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function By(n,t){const e=fo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ky(n,t){n.uniform1iv(this.addr,t)}function Hy(n,t){n.uniform2iv(this.addr,t)}function Vy(n,t){n.uniform3iv(this.addr,t)}function Gy(n,t){n.uniform4iv(this.addr,t)}function Wy(n,t){n.uniform1uiv(this.addr,t)}function qy(n,t){n.uniform2uiv(this.addr,t)}function Xy(n,t){n.uniform3uiv(this.addr,t)}function Yy(n,t){n.uniform4uiv(this.addr,t)}function Zy(n,t,e){const i=this.cache,s=t.length,o=Ba(e,s);ze(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Wf,o[r])}function Ky(n,t,e){const i=this.cache,s=t.length,o=Ba(e,s);ze(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Xf,o[r])}function $y(n,t,e){const i=this.cache,s=t.length,o=Ba(e,s);ze(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Yf,o[r])}function jy(n,t,e){const i=this.cache,s=t.length,o=Ba(e,s);ze(i,o)||(n.uniform1iv(this.addr,o),Oe(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||qf,o[r])}function Jy(n){switch(n){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Fy;case 35674:return zy;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return Hy;case 35668:case 35672:return Vy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return qy;case 36295:return Xy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return jy}}class Qy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Iy(e.type)}}class tM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jy(e.type)}}class eM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function qh(n,t){n.seq.push(t),n.map[t.id]=t}function nM(n,t,e){const i=n.name,s=i.length;for(Fc.lastIndex=0;;){const o=Fc.exec(i),r=Fc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){qh(e,l===void 0?new Qy(a,n,t):new tM(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new eM(a),qh(e,d)),e=d}}}class ga{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);nM(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Xh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const iM=37297;let sM=0;function oM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const Yh=new Wt;function rM(n){ie._getMatrix(Yh,ie.workingColorSpace,n);const t=`mat3( ${Yh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Ma:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+oM(n.getShaderSource(t),r)}else return s}function aM(n,t){const e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cM(n,t){let e;switch(t){case f0:e="Linear";break;case p0:e="Reinhard";break;case m0:e="Cineon";break;case g0:e="ACESFilmic";break;case _0:e="AgX";break;case x0:e="Neutral";break;case v0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new b;function lM(){ie.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function hM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function ko(n){return n!==""}function Kh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(fM,mM)}const pM=new Map;function mM(n,t){let e=Xt[t];if(e===void 0){const i=pM.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ul(e)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(n){return n.replace(gM,vM)}function vM(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Jh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function _M(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===af?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function xM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case $s:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function MM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cf:t="ENVMAP_BLENDING_MULTIPLY";break;case h0:t="ENVMAP_BLENDING_MIX";break;case d0:t="ENVMAP_BLENDING_ADD";break}return t}function SM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function EM(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=_M(e),l=xM(e),u=yM(e),d=MM(e),h=SM(e),f=uM(e),g=hM(o),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ko).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ko).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),p=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Xt.tonemapping_pars_fragment:"",e.toneMapping!==ci?cM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,aM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ko).join(`
`)),r=Ul(r),r=Kh(r,e),r=$h(r,e),a=Ul(a),a=Kh(a,e),a=$h(a,e),r=jh(r),a=jh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+r,x=_+p+a,R=Xh(s,s.VERTEX_SHADER,y),A=Xh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(A).trim();let B=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,A);else{const K=Zh(s,R,"vertex"),G=Zh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+K+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||z==="")&&(U=!1);U&&(L.diagnostics={runnable:B,programLog:k,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(R),s.deleteShader(A),P=new ga(s,v),E=dM(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,iM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let wM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bM(t),e.set(t,i)),i}}class bM{constructor(t){this.id=wM++,this.code=t,this.usedTimes=0}}function AM(n,t,e,i,s,o,r){const a=new Sf,c=new TM,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,k,D){const z=k.fog,B=D.geometry,U=E.isMeshStandardMaterial?k.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||U),G=K&&K.mapping===Na?K.image.height:null,Q=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=at!==void 0?at.length:0;let ot=0;B.morphAttributes.position!==void 0&&(ot=1),B.morphAttributes.normal!==void 0&&(ot=2),B.morphAttributes.color!==void 0&&(ot=3);let Jt,$,rt,wt;if(Q){const le=Hn[Q];Jt=le.vertexShader,$=le.fragmentShader}else Jt=E.vertexShader,$=E.fragmentShader,c.update(E),rt=c.getVertexShaderID(E),wt=c.getFragmentShaderID(E);const ht=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),se=D.isInstancedMesh===!0,Ft=D.isBatchedMesh===!0,ye=!!E.map,Me=!!E.matcap,oe=!!K,N=!!E.aoMap,Qe=!!E.lightMap,re=!!E.bumpMap,me=!!E.normalMap,bt=!!E.displacementMap,ee=!!E.emissiveMap,It=!!E.metalnessMap,qt=!!E.roughnessMap,Ne=E.anisotropy>0,I=E.clearcoat>0,w=E.dispersion>0,W=E.iridescence>0,j=E.sheen>0,tt=E.transmission>0,Z=Ne&&!!E.anisotropyMap,At=I&&!!E.clearcoatMap,ut=I&&!!E.clearcoatNormalMap,Tt=I&&!!E.clearcoatRoughnessMap,Rt=W&&!!E.iridescenceMap,et=W&&!!E.iridescenceThicknessMap,vt=j&&!!E.sheenColorMap,Ut=j&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,ct=!!E.specularColorMap,kt=!!E.specularIntensityMap,F=tt&&!!E.transmissionMap,dt=tt&&!!E.thicknessMap,nt=!!E.gradientMap,yt=!!E.alphaMap,it=E.alphaTest>0,J=!!E.alphaHash,Mt=!!E.extensions;let Ht=ci;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ht=n.toneMapping);const ve={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Jt,fragmentShader:$,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:wt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&D._colorsTexture!==null,instancing:se,instancingColor:se&&D.instanceColor!==null,instancingMorph:se&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:js,alphaToCoverage:!!E.alphaToCoverage,map:ye,matcap:Me,envMap:oe,envMapMode:oe&&K.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Qe,bumpMap:re,normalMap:me,displacementMap:h&&bt,emissiveMap:ee,normalMapObjectSpace:me&&E.normalMapType===E0,normalMapTangentSpace:me&&E.normalMapType===vf,metalnessMap:It,roughnessMap:qt,anisotropy:Ne,anisotropyMap:Z,clearcoat:I,clearcoatMap:At,clearcoatNormalMap:ut,clearcoatRoughnessMap:Tt,dispersion:w,iridescence:W,iridescenceMap:Rt,iridescenceThicknessMap:et,sheen:j,sheenColorMap:vt,sheenRoughnessMap:Ut,specularMap:Nt,specularColorMap:ct,specularIntensityMap:kt,transmission:tt,transmissionMap:F,thicknessMap:dt,gradientMap:nt,opaque:E.transparent===!1&&E.blending===zs&&E.alphaToCoverage===!1,alphaMap:yt,alphaTest:it,alphaHash:J,combine:E.combine,mapUv:ye&&v(E.map.channel),aoMapUv:N&&v(E.aoMap.channel),lightMapUv:Qe&&v(E.lightMap.channel),bumpMapUv:re&&v(E.bumpMap.channel),normalMapUv:me&&v(E.normalMap.channel),displacementMapUv:bt&&v(E.displacementMap.channel),emissiveMapUv:ee&&v(E.emissiveMap.channel),metalnessMapUv:It&&v(E.metalnessMap.channel),roughnessMapUv:qt&&v(E.roughnessMap.channel),anisotropyMapUv:Z&&v(E.anisotropyMap.channel),clearcoatMapUv:At&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(E.sheenRoughnessMap.channel),specularMapUv:Nt&&v(E.specularMap.channel),specularColorMapUv:ct&&v(E.specularColorMap.channel),specularIntensityMapUv:kt&&v(E.specularIntensityMap.channel),transmissionMapUv:F&&v(E.transmissionMap.channel),thicknessMapUv:dt&&v(E.thicknessMap.channel),alphaMapUv:yt&&v(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(me||Ne),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(ye||yt),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===fe,decodeVideoTextureEmissive:ee&&E.emissiveMap.isVideoTexture===!0&&ie.getTransfer(E.emissiveMap.colorSpace)===fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Mt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&E.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let L;if(M){const k=Hn[M];L=mg.clone(k.uniforms)}else L=E.uniforms;return L}function R(E,M){let L;for(let k=0,D=u.length;k<D;k++){const z=u[k];if(z.cacheKey===M){L=z,++L.usedTimes;break}}return L===void 0&&(L=new EM(n,M,E,o),u.push(L)),L}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:P}}function RM(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function CM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function td(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(d,h,f,g,v,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,h,f,g,v,m){const p=r(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,v,m){const p=r(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||CM),i.length>1&&i.sort(h||Qh),s.length>1&&s.sort(h||Qh)}function u(){for(let d=t,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function PM(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new td,n.set(i,[r])):s>=o.length?(r=new td,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function LM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Yt};break;case"SpotLight":e={position:new b,direction:new b,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new b,halfWidth:new b,halfHeight:new b};break}return n[t.id]=e,e}}}function IM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let DM=0;function NM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function UM(n){const t=new LM,e=IM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const s=new b,o=new ge,r=new ge;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,R=0,A=0,C=0;l.sort(NM);for(let E=0,M=l.length;E<M;E++){const L=l[E],k=L.color,D=L.intensity,z=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*D,d+=k.g*D,h+=k.b*D;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],D);C++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=L.shadow.matrix,_++}i.directional[f]=U,f++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(k).multiplyScalar(D),U.distance=z,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[v]=U;const K=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=K.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=B,x++}v++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(k).multiplyScalar(D),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=U,m++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=U,g++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(D),U.groundColor.copy(L.groundColor).multiplyScalar(D),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=C,i.version=DM++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const y=l[p];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),r.identity(),o.copy(y.matrixWorld),o.premultiply(m),r.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function ed(n){const t=new UM(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function o(u){e.push(u)}function r(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function FM(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ed(n),t.set(s,[a])):o>=r.length?(a=new ed(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
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
}`;function BM(n,t,e){let i=new Lf;const s=new gt,o=new gt,r=new Pe,a=new cv({depthPacking:S0}),c=new lv,l={},u=e.maxTextureSize,d={[Ci]:on,[on]:Ci,[sn]:sn},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:zM,fragmentShader:OM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const D=p!==ri&&this.type===ri,z=p===ri&&this.type!==ri;for(let B=0,U=A.length;B<U;B++){const K=A[B],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();if(s.multiply(Q),o.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/Q.x),s.x=o.x*Q.x,G.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/Q.y),s.y=o.y*Q.y,G.mapSize.y=o.y)),G.map===null||D===!0||z===!0){const mt=this.type!==ri?{minFilter:_n,magFilter:_n}:{};G.map!==null&&G.map.dispose(),G.map=new Qi(s.x,s.y,mt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const at=G.getViewportCount();for(let mt=0;mt<at;mt++){const ot=G.getViewport(mt);r.set(o.x*ot.x,o.y*ot.y,o.x*ot.z,o.y*ot.w),k.viewport(r),G.updateMatrices(K,mt),i=G.getFrustum(),x(C,P,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&_(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,L)};function _(A,C){const P=t.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qi(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,f,v,null)}function y(A,C,P,E){let M=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=M.uuid,D=C.uuid;let z=l[k];z===void 0&&(z={},l[k]=z);let B=z[D];B===void 0&&(B=M.clone(),z[D]=B,C.addEventListener("dispose",R)),M=B}if(M.visible=C.visible,M.wireframe=C.wireframe,E===ri?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=P}return M}function x(A,C,P,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const D=t.update(A),z=A.material;if(Array.isArray(z)){const B=D.groups;for(let U=0,K=B.length;U<K;U++){const G=B[U],Q=z[G.materialIndex];if(Q&&Q.visible){const at=y(A,Q,E,M);A.onBeforeShadow(n,A,C,P,D,at,G),n.renderBufferDirect(P,null,D,at,A,G),A.onAfterShadow(n,A,C,P,D,at,G)}}}else if(z.visible){const B=y(A,z,E,M);A.onBeforeShadow(n,A,C,P,D,B,null),n.renderBufferDirect(P,null,D,B,A,null),A.onAfterShadow(n,A,C,P,D,B,null)}}const k=A.children;for(let D=0,z=k.length;D<z;D++)x(k[D],C,P,E,M)}function R(A){A.target.removeEventListener("dispose",R);for(const P in l){const E=l[P],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const kM={[$c]:jc,[Jc]:el,[Qc]:nl,[Zs]:tl,[jc]:$c,[el]:Jc,[nl]:Qc,[tl]:Zs};function HM(n,t){function e(){let F=!1;const dt=new Pe;let nt=null;const yt=new Pe(0,0,0,0);return{setMask:function(it){nt!==it&&!F&&(n.colorMask(it,it,it,it),nt=it)},setLocked:function(it){F=it},setClear:function(it,J,Mt,Ht,ve){ve===!0&&(it*=Ht,J*=Ht,Mt*=Ht),dt.set(it,J,Mt,Ht),yt.equals(dt)===!1&&(n.clearColor(it,J,Mt,Ht),yt.copy(dt))},reset:function(){F=!1,nt=null,yt.set(-1,0,0,0)}}}function i(){let F=!1,dt=!1,nt=null,yt=null,it=null;return{setReversed:function(J){if(dt!==J){const Mt=t.get("EXT_clip_control");J?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),dt=J;const Ht=it;it=null,this.setClear(Ht)}},getReversed:function(){return dt},setTest:function(J){J?ht(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(J){nt!==J&&!F&&(n.depthMask(J),nt=J)},setFunc:function(J){if(dt&&(J=kM[J]),yt!==J){switch(J){case $c:n.depthFunc(n.NEVER);break;case jc:n.depthFunc(n.ALWAYS);break;case Jc:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Qc:n.depthFunc(n.EQUAL);break;case tl:n.depthFunc(n.GEQUAL);break;case el:n.depthFunc(n.GREATER);break;case nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=J}},setLocked:function(J){F=J},setClear:function(J){it!==J&&(dt&&(J=1-J),n.clearDepth(J),it=J)},reset:function(){F=!1,nt=null,yt=null,it=null,dt=!1}}}function s(){let F=!1,dt=null,nt=null,yt=null,it=null,J=null,Mt=null,Ht=null,ve=null;return{setTest:function(le){F||(le?ht(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(le){dt!==le&&!F&&(n.stencilMask(le),dt=le)},setFunc:function(le,An,$n){(nt!==le||yt!==An||it!==$n)&&(n.stencilFunc(le,An,$n),nt=le,yt=An,it=$n)},setOp:function(le,An,$n){(J!==le||Mt!==An||Ht!==$n)&&(n.stencilOp(le,An,$n),J=le,Mt=An,Ht=$n)},setLocked:function(le){F=le},setClear:function(le){ve!==le&&(n.clearStencil(le),ve=le)},reset:function(){F=!1,dt=null,nt=null,yt=null,it=null,J=null,Mt=null,Ht=null,ve=null}}}const o=new e,r=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,R=null,A=null,C=new Yt(0,0,0),P=0,E=!1,M=null,L=null,k=null,D=null,z=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=K>=2);let Q=null,at={};const mt=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),Jt=new Pe().fromArray(mt),$=new Pe().fromArray(ot);function rt(F,dt,nt,yt){const it=new Uint8Array(4),J=n.createTexture();n.bindTexture(F,J),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<nt;Mt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(dt+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return J}const wt={};wt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),r.setFunc(Zs),re(!1),me(Xu),ht(n.CULL_FACE),N(Ti);function ht(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ct(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function se(F,dt){return d[F]!==dt?(n.bindFramebuffer(F,dt),d[F]=dt,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=dt),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ft(F,dt){let nt=f,yt=!1;if(F){nt=h.get(dt),nt===void 0&&(nt=[],h.set(dt,nt));const it=F.textures;if(nt.length!==it.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Mt=it.length;J<Mt;J++)nt[J]=n.COLOR_ATTACHMENT0+J;nt.length=it.length,yt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,yt=!0);yt&&n.drawBuffers(nt)}function ye(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Me={[Yi]:n.FUNC_ADD,[Zm]:n.FUNC_SUBTRACT,[Km]:n.FUNC_REVERSE_SUBTRACT};Me[$m]=n.MIN,Me[jm]=n.MAX;const oe={[Jm]:n.ZERO,[Qm]:n.ONE,[t0]:n.SRC_COLOR,[Zc]:n.SRC_ALPHA,[r0]:n.SRC_ALPHA_SATURATE,[s0]:n.DST_COLOR,[n0]:n.DST_ALPHA,[e0]:n.ONE_MINUS_SRC_COLOR,[Kc]:n.ONE_MINUS_SRC_ALPHA,[o0]:n.ONE_MINUS_DST_COLOR,[i0]:n.ONE_MINUS_DST_ALPHA,[a0]:n.CONSTANT_COLOR,[c0]:n.ONE_MINUS_CONSTANT_COLOR,[l0]:n.CONSTANT_ALPHA,[u0]:n.ONE_MINUS_CONSTANT_ALPHA};function N(F,dt,nt,yt,it,J,Mt,Ht,ve,le){if(F===Ti){v===!0&&(Ct(n.BLEND),v=!1);return}if(v===!1&&(ht(n.BLEND),v=!0),F!==Ym){if(F!==m||le!==E){if((p!==Yi||x!==Yi)&&(n.blendEquation(n.FUNC_ADD),p=Yi,x=Yi),le)switch(F){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bi:n.blendFunc(n.ONE,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,y=null,R=null,A=null,C.set(0,0,0),P=0,m=F,E=le}return}it=it||dt,J=J||nt,Mt=Mt||yt,(dt!==p||it!==x)&&(n.blendEquationSeparate(Me[dt],Me[it]),p=dt,x=it),(nt!==_||yt!==y||J!==R||Mt!==A)&&(n.blendFuncSeparate(oe[nt],oe[yt],oe[J],oe[Mt]),_=nt,y=yt,R=J,A=Mt),(Ht.equals(C)===!1||ve!==P)&&(n.blendColor(Ht.r,Ht.g,Ht.b,ve),C.copy(Ht),P=ve),m=F,E=!1}function Qe(F,dt){F.side===sn?Ct(n.CULL_FACE):ht(n.CULL_FACE);let nt=F.side===on;dt&&(nt=!nt),re(nt),F.blending===zs&&F.transparent===!1?N(Ti):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),o.setMask(F.colorWrite);const yt=F.stencilWrite;a.setTest(yt),yt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function me(F){F!==Wm?(ht(n.CULL_FACE),F!==L&&(F===Xu?n.cullFace(n.BACK):F===qm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),L=F}function bt(F){F!==k&&(U&&n.lineWidth(F),k=F)}function ee(F,dt,nt){F?(ht(n.POLYGON_OFFSET_FILL),(D!==dt||z!==nt)&&(n.polygonOffset(dt,nt),D=dt,z=nt)):Ct(n.POLYGON_OFFSET_FILL)}function It(F){F?ht(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function qt(F){F===void 0&&(F=n.TEXTURE0+B-1),Q!==F&&(n.activeTexture(F),Q=F)}function Ne(F,dt,nt){nt===void 0&&(Q===null?nt=n.TEXTURE0+B-1:nt=Q);let yt=at[nt];yt===void 0&&(yt={type:void 0,texture:void 0},at[nt]=yt),(yt.type!==F||yt.texture!==dt)&&(Q!==nt&&(n.activeTexture(nt),Q=nt),n.bindTexture(F,dt||wt[F]),yt.type=F,yt.texture=dt)}function I(){const F=at[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(F){Jt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Jt.copy(F))}function Ut(F){$.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function Nt(F,dt){let nt=l.get(dt);nt===void 0&&(nt=new WeakMap,l.set(dt,nt));let yt=nt.get(F);yt===void 0&&(yt=n.getUniformBlockIndex(dt,F.name),nt.set(F,yt))}function ct(F,dt){const yt=l.get(dt).get(F);c.get(dt)!==yt&&(n.uniformBlockBinding(dt,yt,F.__bindingPointIndex),c.set(dt,yt))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,at={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,R=null,A=null,C=new Yt(0,0,0),P=0,E=!1,M=null,L=null,k=null,D=null,z=null,Jt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ht,disable:Ct,bindFramebuffer:se,drawBuffers:Ft,useProgram:ye,setBlending:N,setMaterial:Qe,setFlipSided:re,setCullFace:me,setLineWidth:bt,setPolygonOffset:ee,setScissorTest:It,activeTexture:qt,bindTexture:Ne,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:W,texImage2D:Rt,texImage3D:et,updateUBOMapping:Nt,uniformBlockBinding:ct,texStorage2D:ut,texStorage3D:Tt,texSubImage2D:j,texSubImage3D:tt,compressedTexSubImage2D:Z,compressedTexSubImage3D:At,scissor:vt,viewport:Ut,reset:kt}}function VM(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return f?new OffscreenCanvas(I,w):Ea("canvas")}function v(I,w,W){let j=1;const tt=Ne(I);if((tt.width>W||tt.height>W)&&(j=W/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Z=Math.floor(j*tt.width),At=Math.floor(j*tt.height);d===void 0&&(d=g(Z,At));const ut=w?g(Z,At):d;return ut.width=Z,ut.height=At,ut.getContext("2d").drawImage(I,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+At+")."),ut}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(I,w,W,j,tt=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=w;if(w===n.RED&&(W===n.FLOAT&&(Z=n.R32F),W===n.HALF_FLOAT&&(Z=n.R16F),W===n.UNSIGNED_BYTE&&(Z=n.R8)),w===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.R8UI),W===n.UNSIGNED_SHORT&&(Z=n.R16UI),W===n.UNSIGNED_INT&&(Z=n.R32UI),W===n.BYTE&&(Z=n.R8I),W===n.SHORT&&(Z=n.R16I),W===n.INT&&(Z=n.R32I)),w===n.RG&&(W===n.FLOAT&&(Z=n.RG32F),W===n.HALF_FLOAT&&(Z=n.RG16F),W===n.UNSIGNED_BYTE&&(Z=n.RG8)),w===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RG8UI),W===n.UNSIGNED_SHORT&&(Z=n.RG16UI),W===n.UNSIGNED_INT&&(Z=n.RG32UI),W===n.BYTE&&(Z=n.RG8I),W===n.SHORT&&(Z=n.RG16I),W===n.INT&&(Z=n.RG32I)),w===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),W===n.UNSIGNED_INT&&(Z=n.RGB32UI),W===n.BYTE&&(Z=n.RGB8I),W===n.SHORT&&(Z=n.RGB16I),W===n.INT&&(Z=n.RGB32I)),w===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),W===n.UNSIGNED_INT&&(Z=n.RGBA32UI),W===n.BYTE&&(Z=n.RGBA8I),W===n.SHORT&&(Z=n.RGBA16I),W===n.INT&&(Z=n.RGBA32I)),w===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),w===n.RGBA){const At=tt?Ma:ie.getTransfer(j);W===n.FLOAT&&(Z=n.RGBA32F),W===n.HALF_FLOAT&&(Z=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Z=At===fe?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(I,w){let W;return I?w===null||w===Ji||w===Zo?W=n.DEPTH24_STENCIL8:w===Gn?W=n.DEPTH32F_STENCIL8:w===Yo&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ji||w===Zo?W=n.DEPTH_COMPONENT24:w===Gn?W=n.DEPTH_COMPONENT32F:w===Yo&&(W=n.DEPTH_COMPONENT16),W}function R(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==_n&&I.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function A(I){const w=I.target;w.removeEventListener("dispose",A),P(w),w.isVideoTexture&&u.delete(w)}function C(I){const w=I.target;w.removeEventListener("dispose",C),M(w)}function P(I){const w=i.get(I);if(w.__webglInit===void 0)return;const W=I.source,j=h.get(W);if(j){const tt=j[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(I),Object.keys(j).length===0&&h.delete(W)}i.remove(I)}function E(I){const w=i.get(I);n.deleteTexture(w.__webglTexture);const W=I.source,j=h.get(W);delete j[w.__cacheKey],r.memory.textures--}function M(I){const w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let tt=0;tt<w.__webglFramebuffer[j].length;tt++)n.deleteFramebuffer(w.__webglFramebuffer[j][tt]);else n.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)n.deleteFramebuffer(w.__webglFramebuffer[j]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=I.textures;for(let j=0,tt=W.length;j<tt;j++){const Z=i.get(W[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(W[j])}i.remove(I)}let L=0;function k(){L=0}function D(){const I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function z(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function B(I,w){const W=i.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(W,I,w);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+w)}function U(I,w){const W=i.get(I);if(I.version>0&&W.__version!==I.version){wt(W,I,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+w)}function K(I,w){const W=i.get(I);if(I.version>0&&W.__version!==I.version){wt(W,I,w);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+w)}function G(I,w){const W=i.get(I);if(I.version>0&&W.__version!==I.version){ht(W,I,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+w)}const Q={[ji]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},at={[_n]:n.NEAREST,[y0]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[nc]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},mt={[w0]:n.NEVER,[P0]:n.ALWAYS,[T0]:n.LESS,[_f]:n.LEQUAL,[b0]:n.EQUAL,[C0]:n.GEQUAL,[A0]:n.GREATER,[R0]:n.NOTEQUAL};function ot(I,w){if(w.type===Gn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Nn||w.magFilter===nc||w.magFilter===Er||w.magFilter===wi||w.minFilter===Nn||w.minFilter===nc||w.minFilter===Er||w.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Q[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Q[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Q[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,at[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,at[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==Er&&w.minFilter!==wi||w.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Jt(I,w){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",A));const j=w.source;let tt=h.get(j);tt===void 0&&(tt={},h.set(j,tt));const Z=z(w);if(Z!==I.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,W=!0),tt[Z].usedTimes++;const At=tt[I.__cacheKey];At!==void 0&&(tt[I.__cacheKey].usedTimes--,At.usedTimes===0&&E(w)),I.__cacheKey=Z,I.__webglTexture=tt[Z].texture}return W}function $(I,w,W){return Math.floor(Math.floor(I/W)/w)}function rt(I,w,W,j){const Z=I.updateRanges;if(Z.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,W,j,w.data);else{Z.sort((et,vt)=>et.start-vt.start);let At=0;for(let et=1;et<Z.length;et++){const vt=Z[At],Ut=Z[et],Nt=vt.start+vt.count,ct=$(Ut.start,w.width,4),kt=$(vt.start,w.width,4);Ut.start<=Nt+1&&ct===kt&&$(Ut.start+Ut.count-1,w.width,4)===ct?vt.count=Math.max(vt.count,Ut.start+Ut.count-vt.start):(++At,Z[At]=Ut)}Z.length=At+1;const ut=n.getParameter(n.UNPACK_ROW_LENGTH),Tt=n.getParameter(n.UNPACK_SKIP_PIXELS),Rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let et=0,vt=Z.length;et<vt;et++){const Ut=Z[et],Nt=Math.floor(Ut.start/4),ct=Math.ceil(Ut.count/4),kt=Nt%w.width,F=Math.floor(Nt/w.width),dt=ct,nt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,kt),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,kt,F,dt,nt,W,j,w.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ut),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Rt)}}function wt(I,w,W){let j=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=n.TEXTURE_3D);const tt=Jt(I,w),Z=w.source;e.bindTexture(j,I.__webglTexture,n.TEXTURE0+W);const At=i.get(Z);if(Z.version!==At.__version||tt===!0){e.activeTexture(n.TEXTURE0+W);const ut=ie.getPrimaries(ie.workingColorSpace),Tt=w.colorSpace===Mi?null:ie.getPrimaries(w.colorSpace),Rt=w.colorSpace===Mi||ut===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let et=v(w.image,!1,s.maxTextureSize);et=qt(w,et);const vt=o.convert(w.format,w.colorSpace),Ut=o.convert(w.type);let Nt=y(w.internalFormat,vt,Ut,w.colorSpace,w.isVideoTexture);ot(j,w);let ct;const kt=w.mipmaps,F=w.isVideoTexture!==!0,dt=At.__version===void 0||tt===!0,nt=Z.dataReady,yt=R(w,et);if(w.isDepthTexture)Nt=x(w.format===$o,w.type),dt&&(F?e.texStorage2D(n.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Nt,et.width,et.height,0,vt,Ut,null));else if(w.isDataTexture)if(kt.length>0){F&&dt&&e.texStorage2D(n.TEXTURE_2D,yt,Nt,kt[0].width,kt[0].height);for(let it=0,J=kt.length;it<J;it++)ct=kt[it],F?nt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ct.width,ct.height,vt,Ut,ct.data):e.texImage2D(n.TEXTURE_2D,it,Nt,ct.width,ct.height,0,vt,Ut,ct.data);w.generateMipmaps=!1}else F?(dt&&e.texStorage2D(n.TEXTURE_2D,yt,Nt,et.width,et.height),nt&&rt(w,et,vt,Ut)):e.texImage2D(n.TEXTURE_2D,0,Nt,et.width,et.height,0,vt,Ut,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Nt,kt[0].width,kt[0].height,et.depth);for(let it=0,J=kt.length;it<J;it++)if(ct=kt[it],w.format!==Un)if(vt!==null)if(F){if(nt)if(w.layerUpdates.size>0){const Mt=Lh(ct.width,ct.height,w.format,w.type);for(const Ht of w.layerUpdates){const ve=ct.data.subarray(Ht*Mt/ct.data.BYTES_PER_ELEMENT,(Ht+1)*Mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,Ht,ct.width,ct.height,1,vt,ve)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ct.width,ct.height,et.depth,vt,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Nt,ct.width,ct.height,et.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ct.width,ct.height,et.depth,vt,Ut,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Nt,ct.width,ct.height,et.depth,0,vt,Ut,ct.data)}else{F&&dt&&e.texStorage2D(n.TEXTURE_2D,yt,Nt,kt[0].width,kt[0].height);for(let it=0,J=kt.length;it<J;it++)ct=kt[it],w.format!==Un?vt!==null?F?nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,ct.width,ct.height,vt,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Nt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?nt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ct.width,ct.height,vt,Ut,ct.data):e.texImage2D(n.TEXTURE_2D,it,Nt,ct.width,ct.height,0,vt,Ut,ct.data)}else if(w.isDataArrayTexture)if(F){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Nt,et.width,et.height,et.depth),nt)if(w.layerUpdates.size>0){const it=Lh(et.width,et.height,w.format,w.type);for(const J of w.layerUpdates){const Mt=et.data.subarray(J*it/et.data.BYTES_PER_ELEMENT,(J+1)*it/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,vt,Ut,Mt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,Ut,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,vt,Ut,et.data);else if(w.isData3DTexture)F?(dt&&e.texStorage3D(n.TEXTURE_3D,yt,Nt,et.width,et.height,et.depth),nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,Ut,et.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,vt,Ut,et.data);else if(w.isFramebufferTexture){if(dt)if(F)e.texStorage2D(n.TEXTURE_2D,yt,Nt,et.width,et.height);else{let it=et.width,J=et.height;for(let Mt=0;Mt<yt;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,Nt,it,J,0,vt,Ut,null),it>>=1,J>>=1}}else if(kt.length>0){if(F&&dt){const it=Ne(kt[0]);e.texStorage2D(n.TEXTURE_2D,yt,Nt,it.width,it.height)}for(let it=0,J=kt.length;it<J;it++)ct=kt[it],F?nt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,vt,Ut,ct):e.texImage2D(n.TEXTURE_2D,it,Nt,vt,Ut,ct);w.generateMipmaps=!1}else if(F){if(dt){const it=Ne(et);e.texStorage2D(n.TEXTURE_2D,yt,Nt,it.width,it.height)}nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Ut,et)}else e.texImage2D(n.TEXTURE_2D,0,Nt,vt,Ut,et);m(w)&&p(j),At.__version=Z.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ht(I,w,W){if(w.image.length!==6)return;const j=Jt(I,w),tt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+W);const Z=i.get(tt);if(tt.version!==Z.__version||j===!0){e.activeTexture(n.TEXTURE0+W);const At=ie.getPrimaries(ie.workingColorSpace),ut=w.colorSpace===Mi?null:ie.getPrimaries(w.colorSpace),Tt=w.colorSpace===Mi||At===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Rt=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Rt&&!et?vt[J]=v(w.image[J],!0,s.maxCubemapSize):vt[J]=et?w.image[J].image:w.image[J],vt[J]=qt(w,vt[J]);const Ut=vt[0],Nt=o.convert(w.format,w.colorSpace),ct=o.convert(w.type),kt=y(w.internalFormat,Nt,ct,w.colorSpace),F=w.isVideoTexture!==!0,dt=Z.__version===void 0||j===!0,nt=tt.dataReady;let yt=R(w,Ut);ot(n.TEXTURE_CUBE_MAP,w);let it;if(Rt){F&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,kt,Ut.width,Ut.height);for(let J=0;J<6;J++){it=vt[J].mipmaps;for(let Mt=0;Mt<it.length;Mt++){const Ht=it[Mt];w.format!==Un?Nt!==null?F?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,Ht.width,Ht.height,Nt,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,kt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,Ht.width,Ht.height,Nt,ct,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,kt,Ht.width,Ht.height,0,Nt,ct,Ht.data)}}}else{if(it=w.mipmaps,F&&dt){it.length>0&&yt++;const J=Ne(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,kt,J.width,J.height)}for(let J=0;J<6;J++)if(et){F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Nt,ct,vt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,vt[J].width,vt[J].height,0,Nt,ct,vt[J].data);for(let Mt=0;Mt<it.length;Mt++){const ve=it[Mt].image[J].image;F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,ve.width,ve.height,Nt,ct,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,kt,ve.width,ve.height,0,Nt,ct,ve.data)}}else{F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,ct,vt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Nt,ct,vt[J]);for(let Mt=0;Mt<it.length;Mt++){const Ht=it[Mt];F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,Nt,ct,Ht.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,kt,Nt,ct,Ht.image[J])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),Z.__version=tt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ct(I,w,W,j,tt,Z){const At=o.convert(W.format,W.colorSpace),ut=o.convert(W.type),Tt=y(W.internalFormat,At,ut,W.colorSpace),Rt=i.get(w),et=i.get(W);if(et.__renderTarget=w,!Rt.__hasExternalTextures){const vt=Math.max(1,w.width>>Z),Ut=Math.max(1,w.height>>Z);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,Tt,vt,Ut,w.depth,0,At,ut,null):e.texImage2D(tt,Z,Tt,vt,Ut,0,At,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,tt,et.__webglTexture,0,bt(w)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,tt,et.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function se(I,w,W){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const j=w.depthTexture,tt=j&&j.isDepthTexture?j.type:null,Z=x(w.stencilBuffer,tt),At=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=bt(w);ee(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Z,w.width,w.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Z,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Z,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,I)}else{const j=w.textures;for(let tt=0;tt<j.length;tt++){const Z=j[tt],At=o.convert(Z.format,Z.colorSpace),ut=o.convert(Z.type),Tt=y(Z.internalFormat,At,ut,Z.colorSpace),Rt=bt(w);W&&ee(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,Tt,w.width,w.height):ee(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,Tt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const tt=j.__webglTexture,Z=bt(w);if(w.depthTexture.format===Ko)ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(w.depthTexture.format===$o)ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ye(I){const w=i.get(I),W=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=j}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const j=I.texture.mipmaps;j&&j.length>0?Ft(w.__webglFramebuffer[0],I):Ft(w.__webglFramebuffer,I)}else if(W){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=n.createRenderbuffer(),se(w.__webglDepthbuffer[j],I,!1);else{const tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Z)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),se(w.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Z)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(I,w,W){const j=i.get(I);w!==void 0&&Ct(j.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ye(I)}function oe(I){const w=I.texture,W=i.get(I),j=i.get(w);I.addEventListener("dispose",C);const tt=I.textures,Z=I.isWebGLCubeRenderTarget===!0,At=tt.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=w.version,r.memory.textures++),Z){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)W.__webglFramebuffer[ut][Tt]=n.createFramebuffer()}else W.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<w.mipmaps.length;ut++)W.__webglFramebuffer[ut]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(At)for(let ut=0,Tt=tt.length;ut<Tt;ut++){const Rt=i.get(tt[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),r.memory.textures++)}if(I.samples>0&&ee(I)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const Tt=tt[ut];W.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ut]);const Rt=o.convert(Tt.format,Tt.colorSpace),et=o.convert(Tt.type),vt=y(Tt.internalFormat,Rt,et,Tt.colorSpace,I.isXRRenderTarget===!0),Ut=bt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,vt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,W.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),se(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ot(n.TEXTURE_CUBE_MAP,w);for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Ct(W.__webglFramebuffer[ut][Tt],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else Ct(W.__webglFramebuffer[ut],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(w)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,Tt=tt.length;ut<Tt;ut++){const Rt=tt[ut],et=i.get(Rt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),ot(n.TEXTURE_2D,Rt),Ct(W.__webglFramebuffer,I,Rt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),ot(ut,w),w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Ct(W.__webglFramebuffer[Tt],I,w,n.COLOR_ATTACHMENT0,ut,Tt);else Ct(W.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,ut,0);m(w)&&p(ut),e.unbindTexture()}I.depthBuffer&&ye(I)}function N(I){const w=I.textures;for(let W=0,j=w.length;W<j;W++){const tt=w[W];if(m(tt)){const Z=_(I),At=i.get(tt).__webglTexture;e.bindTexture(Z,At),p(Z),e.unbindTexture()}}}const Qe=[],re=[];function me(I){if(I.samples>0){if(ee(I)===!1){const w=I.textures,W=I.width,j=I.height;let tt=n.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(I),ut=w.length>1;if(ut)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Tt=I.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const et=i.get(w[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,W,j,0,0,W,j,tt,n.NEAREST),c===!0&&(Qe.length=0,re.length=0,Qe.push(n.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Qe.push(Z),re.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const et=i.get(w[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function bt(I){return Math.min(s.maxSamples,I.samples)}function ee(I){const w=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(I){const w=r.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function qt(I,w){const W=I.colorSpace,j=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==js&&W!==Mi&&(ie.getTransfer(W)===fe?(j!==Un||tt!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function Ne(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Me,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ee}function GM(n,t){function e(i,s=Mi){let o;const r=ie.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===Xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uf)return n.BYTE;if(i===hf)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===ql)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===ff)return n.ALPHA;if(i===pf)return n.RGB;if(i===Un)return n.RGBA;if(i===Ko)return n.DEPTH_COMPONENT;if(i===$o)return n.DEPTH_STENCIL;if(i===Zl)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===mf)return n.RG;if(i===$l)return n.RG_INTEGER;if(i===jl)return n.RGBA_INTEGER;if(i===ha||i===da||i===fa||i===pa)if(r===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===al||i===cl||i===ll)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===hl||i===dl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ul||i===hl)return r===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===dl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===vl||i===_l||i===xl||i===yl||i===Ml||i===Sl||i===El||i===wl||i===Tl||i===bl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===fl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===Al||i===Rl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ma)return r===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gf||i===Cl||i===Pl||i===Ll)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ma)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qM=`
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

}`;class XM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ke,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Pi({vertexShader:WM,fragmentShader:qM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YM extends ao{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=new XM,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],R=new gt;let A=null;const C=new wn;C.viewport=new Pe;const P=new wn;P.viewport=new Pe;const E=[C,P],M=new fv;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=y[$];return rt===void 0&&(rt=new Ec,y[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=y[$];return rt===void 0&&(rt=new Ec,y[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=y[$];return rt===void 0&&(rt=new Ec,y[$]=rt),rt.getHandSpace()};function D($){const rt=x.indexOf($.inputSource);if(rt===-1)return;const wt=y[rt];wt!==void 0&&(wt.update($.inputSource,$.frame,l||r),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",B);for(let $=0;$<y.length;$++){const rt=x[$];rt!==null&&(x[$]=null,y[$].disconnect(rt))}L=null,k=null,v.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,_=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,ht=null,Ct=null;m.depth&&(Ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=m.stencil?$o:Ko,ht=m.stencil?Zo:Ji);const se={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:o};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(se),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Qi(h.textureWidth,h.textureHeight,{format:Un,type:hi,depthTexture:new Df(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const wt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Qi(f.framebufferWidth,f.framebufferHeight,{format:Un,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B($){for(let rt=0;rt<$.removed.length;rt++){const wt=$.removed[rt],ht=x.indexOf(wt);ht>=0&&(x[ht]=null,y[ht].disconnect(wt))}for(let rt=0;rt<$.added.length;rt++){const wt=$.added[rt];let ht=x.indexOf(wt);if(ht===-1){for(let se=0;se<y.length;se++)if(se>=x.length){x.push(wt),ht=se;break}else if(x[se]===null){x[se]=wt,ht=se;break}if(ht===-1)break}const Ct=y[ht];Ct&&Ct.connect(wt)}}const U=new b,K=new b;function G($,rt,wt){U.setFromMatrixPosition(rt.matrixWorld),K.setFromMatrixPosition(wt.matrixWorld);const ht=U.distanceTo(K),Ct=rt.projectionMatrix.elements,se=wt.projectionMatrix.elements,Ft=Ct[14]/(Ct[10]-1),ye=Ct[14]/(Ct[10]+1),Me=(Ct[9]+1)/Ct[5],oe=(Ct[9]-1)/Ct[5],N=(Ct[8]-1)/Ct[0],Qe=(se[8]+1)/se[0],re=Ft*N,me=Ft*Qe,bt=ht/(-N+Qe),ee=bt*-N;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ee),$.translateZ(bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const It=Ft+bt,qt=ye+bt,Ne=re-ee,I=me+(ht-ee),w=Me*ye/qt*It,W=oe*ye/qt*It;$.projectionMatrix.makePerspective(Ne,I,w,W,It,qt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,wt=$.far;v.texture!==null&&(v.depthNear>0&&(rt=v.depthNear),v.depthFar>0&&(wt=v.depthFar)),M.near=P.near=C.near=rt,M.far=P.far=C.far=wt,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const ht=$.parent,Ct=M.cameras;Q(M,ht);for(let se=0;se<Ct.length;se++)Q(Ct[se],ht);Ct.length===2?G(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),at($,M,ht)};function at($,rt,wt){wt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=jo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let mt=null;function ot($,rt){if(u=rt.getViewerPose(l||r),g=rt,u!==null){const wt=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ht=!1;wt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Ft=0;Ft<wt.length;Ft++){const ye=wt[Ft];let Me=null;if(f!==null)Me=f.getViewport(ye);else{const N=d.getViewSubImage(h,ye);Me=N.viewport,Ft===0&&(t.setRenderTargetTextures(_,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(_))}let oe=E[Ft];oe===void 0&&(oe=new wn,oe.layers.enable(Ft),oe.viewport=new Pe,E[Ft]=oe),oe.matrix.fromArray(ye.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ye.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Me.x,Me.y,Me.width,Me.height),Ft===0&&(M.matrix.copy(oe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(oe)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Ft=d.getDepthInformation(wt[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(t,Ft,s.renderState)}}for(let wt=0;wt<y.length;wt++){const ht=x[wt],Ct=y[wt];ht!==null&&Ct!==void 0&&Ct.update(ht,rt,l||r)}mt&&mt($,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Jt=new Gf;Jt.setAnimationLoop(ot),this.setAnimationLoop=function($){mt=$},this.dispose=function(){}}}const Gi=new Ee,ZM=new ge;function KM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Gi.copy(x),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(Gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $M(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function l(_,y){let x=s[_.id];x===void 0&&(g(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(_,R);const A=t.render.frame;o[_.id]!==A&&(h(_),o[_.id]=A)}function u(_){const y=d();_.__bindingPointIndex=y;const x=n.createBuffer(),R=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=s[_.id],x=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,M=P.length;E<M;E++){const L=P[E];if(f(L,A,E,R)===!0){const k=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let B=0;B<D.length;B++){const U=D[B],K=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,k+z,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,y,x,R){const A=_.value,C=y+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const P=R[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const R=16;for(let C=0,P=y.length;C<P;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,L=E.length;M<L;M++){const k=E[M],D=Array.isArray(k.value)?k.value:[k.value];for(let z=0,B=D.length;z<B;z++){const U=D[z],K=v(U),G=x%R,Q=G%K.boundary,at=G+Q;x+=Q,at!==0&&R-at<K.storage&&(x+=R-at),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=K.storage}}}const A=x%R;return A>0&&(x+=R-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class jM{constructor(t={}){const{canvas:e=Y0(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Fe;let A=0,C=0,P=null,E=-1,M=null;const L=new Pe,k=new Pe;let D=null;const z=new Yt(0);let B=0,U=e.width,K=e.height,G=1,Q=null,at=null;const mt=new Pe(0,0,U,K),ot=new Pe(0,0,U,K);let Jt=!1;const $=new Lf;let rt=!1,wt=!1;const ht=new ge,Ct=new ge,se=new b,Ft=new Pe,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function oe(){return P===null?G:1}let N=i;function Qe(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",J,!1),N===null){const H="webgl2";if(N=Qe(H,T),N===null)throw Qe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,me,bt,ee,It,qt,Ne,I,w,W,j,tt,Z,At,ut,Tt,Rt,et,vt,Ut,Nt,ct,kt,F;function dt(){re=new ay(N),re.init(),ct=new GM(N,re),me=new ty(N,re,t,ct),bt=new HM(N,re),me.reverseDepthBuffer&&h&&bt.buffers.depth.setReversed(!0),ee=new uy(N),It=new RM,qt=new VM(N,re,bt,It,me,ct,ee),Ne=new ny(x),I=new ry(x),w=new gv(N),kt=new Jx(N,w),W=new cy(N,w,ee,kt),j=new dy(N,W,w,ee),vt=new hy(N,me,qt),Tt=new ey(It),tt=new AM(x,Ne,I,re,me,kt,Tt),Z=new KM(x,It),At=new PM,ut=new FM(re),et=new jx(x,Ne,I,bt,j,f,c),Rt=new BM(x,j,me),F=new $M(N,ee,me,bt),Ut=new Qx(N,re,ee),Nt=new ly(N,re,ee),ee.programs=tt.programs,x.capabilities=me,x.extensions=re,x.properties=It,x.renderLists=At,x.shadowMap=Rt,x.state=bt,x.info=ee}dt();const nt=new YM(x,N);this.xr=nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(U,K,!1))},this.getSize=function(T){return T.set(U,K)},this.setSize=function(T,H,q=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,K=H,e.width=Math.floor(T*G),e.height=Math.floor(H*G),q===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(U*G,K*G).floor()},this.setDrawingBufferSize=function(T,H,q){U=T,K=H,G=q,e.width=Math.floor(T*q),e.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(mt)},this.setViewport=function(T,H,q,Y){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,H,q,Y),bt.viewport(L.copy(mt).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,H,q,Y){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,H,q,Y),bt.scissor(k.copy(ot).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(T){bt.setScissorTest(Jt=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,q=!0){let Y=0;if(T){let V=!1;if(P!==null){const st=P.texture.format;V=st===jl||st===$l||st===Kl}if(V){const st=P.texture.type,ft=st===hi||st===Ji||st===Yo||st===Zo||st===Xl||st===Yl,St=et.getClearColor(),_t=et.getClearAlpha(),zt=St.r,Bt=St.g,Pt=St.b;ft?(g[0]=zt,g[1]=Bt,g[2]=Pt,g[3]=_t,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=zt,v[1]=Bt,v[2]=Pt,v[3]=_t,N.clearBufferiv(N.COLOR,0,v))}else Y|=N.COLOR_BUFFER_BIT}H&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",J,!1),et.dispose(),At.dispose(),ut.dispose(),It.dispose(),Ne.dispose(),I.dispose(),j.dispose(),kt.dispose(),F.dispose(),tt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Bu),nt.removeEventListener("sessionend",ku),Fi.stop()};function yt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ee.autoReset,H=Rt.enabled,q=Rt.autoUpdate,Y=Rt.needsUpdate,V=Rt.type;dt(),ee.autoReset=T,Rt.enabled=H,Rt.autoUpdate=q,Rt.needsUpdate=Y,Rt.type=V}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mt(T){const H=T.target;H.removeEventListener("dispose",Mt),Ht(H)}function Ht(T){ve(T),It.remove(T)}function ve(T){const H=It.get(T).programs;H!==void 0&&(H.forEach(function(q){tt.releaseProgram(q)}),T.isShaderMaterial&&tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,Y,V,st){H===null&&(H=ye);const ft=V.isMesh&&V.matrixWorld.determinant()<0,St=Om(T,H,q,Y,V);bt.setMaterial(Y,ft);let _t=q.index,zt=1;if(Y.wireframe===!0){if(_t=W.getWireframeAttribute(q),_t===void 0)return;zt=2}const Bt=q.drawRange,Pt=q.attributes.position;let $t=Bt.start*zt,ue=(Bt.start+Bt.count)*zt;st!==null&&($t=Math.max($t,st.start*zt),ue=Math.min(ue,(st.start+st.count)*zt)),_t!==null?($t=Math.max($t,0),ue=Math.min(ue,_t.count)):Pt!=null&&($t=Math.max($t,0),ue=Math.min(ue,Pt.count));const Se=ue-$t;if(Se<0||Se===1/0)return;kt.setup(V,Y,St,q,_t);let be,ne=Ut;if(_t!==null&&(be=w.get(_t),ne=Nt,ne.setIndex(be)),V.isMesh)Y.wireframe===!0?(bt.setLineWidth(Y.wireframeLinewidth*oe()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(V.isLine){let Dt=Y.linewidth;Dt===void 0&&(Dt=1),bt.setLineWidth(Dt*oe()),V.isLineSegments?ne.setMode(N.LINES):V.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else V.isPoints?ne.setMode(N.POINTS):V.isSprite&&ne.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Dt=V._multiDrawStarts,Ge=V._multiDrawCounts,ce=V._multiDrawCount,Rn=_t?w.get(_t).bytesPerElement:1,ls=It.get(Y).currentProgram.getUniforms();for(let dn=0;dn<ce;dn++)ls.setValue(N,"_gl_DrawID",dn),ne.render(Dt[dn]/Rn,Ge[dn])}else if(V.isInstancedMesh)ne.renderInstances($t,Se,V.count);else if(q.isInstancedBufferGeometry){const Dt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ge=Math.min(q.instanceCount,Dt);ne.renderInstances($t,Se,Ge)}else ne.render($t,Se)};function le(T,H,q){T.transparent===!0&&T.side===sn&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,Sr(T,H,q),T.side=Ci,T.needsUpdate=!0,Sr(T,H,q),T.side=sn):Sr(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),p=ut.get(q),p.init(H),y.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const st=V.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const St=st[ft];le(St,q,V),Y.add(St)}else le(st,q,V),Y.add(st)}),p=y.pop(),Y},this.compileAsync=function(T,H,q=null){const Y=this.compile(T,H,q);return new Promise(V=>{function st(){if(Y.forEach(function(ft){It.get(ft).currentProgram.isReady()&&Y.delete(ft)}),Y.size===0){V(T);return}setTimeout(st,10)}re.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let An=null;function $n(T){An&&An(T)}function Bu(){Fi.stop()}function ku(){Fi.start()}const Fi=new Gf;Fi.setAnimationLoop($n),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(T){An=T,nt.setAnimationLoop(T),T===null?Fi.stop():Fi.start()},nt.addEventListener("sessionstart",Bu),nt.addEventListener("sessionend",ku),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(H),H=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,P),p=ut.get(T,y.length),p.init(H),y.push(p),Ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$.setFromProjectionMatrix(Ct),wt=this.localClippingEnabled,rt=Tt.init(this.clippingPlanes,wt),m=At.get(T,_.length),m.init(),_.push(m),nt.enabled===!0&&nt.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&tc(st,H,-1/0,x.sortObjects)}tc(T,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,at),Me=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Me&&et.addToRenderList(m,T),this.info.render.frame++,rt===!0&&Tt.beginShadows();const q=p.state.shadowsArray;Rt.render(q,T,H),rt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const st=H.cameras;if(V.length>0)for(let ft=0,St=st.length;ft<St;ft++){const _t=st[ft];Vu(Y,V,T,_t)}Me&&et.render(T);for(let ft=0,St=st.length;ft<St;ft++){const _t=st[ft];Hu(m,T,_t,_t.viewport)}}else V.length>0&&Vu(Y,V,T,H),Me&&et.render(T),Hu(m,T,H);P!==null&&C===0&&(qt.updateMultisampleRenderTarget(P),qt.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,H),kt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],rt===!0&&Tt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function tc(T,H,q,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){Y&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ct);const ft=j.update(T),St=T.material;St.visible&&m.push(T,ft,St,q,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const ft=j.update(T),St=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ft.copy(ft.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){const _t=ft.groups;for(let zt=0,Bt=_t.length;zt<Bt;zt++){const Pt=_t[zt],$t=St[Pt.materialIndex];$t&&$t.visible&&m.push(T,ft,$t,q,Ft.z,Pt)}}else St.visible&&m.push(T,ft,St,q,Ft.z,null)}}const st=T.children;for(let ft=0,St=st.length;ft<St;ft++)tc(st[ft],H,q,Y)}function Hu(T,H,q,Y){const V=T.opaque,st=T.transmissive,ft=T.transparent;p.setupLightsView(q),rt===!0&&Tt.setGlobalState(x.clippingPlanes,q),Y&&bt.viewport(L.copy(Y)),V.length>0&&Mr(V,H,q),st.length>0&&Mr(st,H,q),ft.length>0&&Mr(ft,H,q),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Vu(T,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Qi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?hr:hi,minFilter:wi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const st=p.state.transmissionRenderTarget[Y.id],ft=Y.viewport||L;st.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);const St=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(z),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Me&&et.render(q);const _t=x.toneMapping;x.toneMapping=ci;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),rt===!0&&Tt.setGlobalState(x.clippingPlanes,Y),Mr(T,q,Y),qt.updateMultisampleRenderTarget(st),qt.updateRenderTargetMipmap(st),re.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Pt=0,$t=H.length;Pt<$t;Pt++){const ue=H[Pt],Se=ue.object,be=ue.geometry,ne=ue.material,Dt=ue.group;if(ne.side===sn&&Se.layers.test(Y.layers)){const Ge=ne.side;ne.side=on,ne.needsUpdate=!0,Gu(Se,q,Y,be,ne,Dt),ne.side=Ge,ne.needsUpdate=!0,Bt=!0}}Bt===!0&&(qt.updateMultisampleRenderTarget(st),qt.updateRenderTargetMipmap(st))}x.setRenderTarget(St),x.setClearColor(z,B),zt!==void 0&&(Y.viewport=zt),x.toneMapping=_t}function Mr(T,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,st=T.length;V<st;V++){const ft=T[V],St=ft.object,_t=ft.geometry,zt=ft.group;let Bt=ft.material;Bt.allowOverride===!0&&Y!==null&&(Bt=Y),St.layers.test(q.layers)&&Gu(St,H,q,_t,Bt,zt)}}function Gu(T,H,q,Y,V,st){T.onBeforeRender(x,H,q,Y,V,st),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,H,q,Y,T,st),V.transparent===!0&&V.side===sn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,x.renderBufferDirect(q,H,Y,V,T,st),V.side=Ci,V.needsUpdate=!0,x.renderBufferDirect(q,H,Y,V,T,st),V.side=sn):x.renderBufferDirect(q,H,Y,V,T,st),T.onAfterRender(x,H,q,Y,V,st)}function Sr(T,H,q){H.isScene!==!0&&(H=ye);const Y=It.get(T),V=p.state.lights,st=p.state.shadowsArray,ft=V.state.version,St=tt.getParameters(T,V.state,st,H,q),_t=tt.getProgramCacheKey(St);let zt=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?I:Ne).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",Mt),zt=new Map,Y.programs=zt);let Bt=zt.get(_t);if(Bt!==void 0){if(Y.currentProgram===Bt&&Y.lightsStateVersion===ft)return qu(T,St),Bt}else St.uniforms=tt.getUniforms(T),T.onBeforeCompile(St,x),Bt=tt.acquireProgram(St,_t),zt.set(_t,Bt),Y.uniforms=St.uniforms;const Pt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=Tt.uniform),qu(T,St),Y.needsLights=km(T),Y.lightsStateVersion=ft,Y.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.directionalShadowMap.value=V.state.directionalShadowMap,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotShadowMap.value=V.state.spotShadowMap,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMap.value=V.state.pointShadowMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Bt,Y.uniformsList=null,Bt}function Wu(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=ga.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function qu(T,H){const q=It.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Om(T,H,q,Y,V){H.isScene!==!0&&(H=ye),qt.resetTextureUnits();const st=H.fog,ft=Y.isMeshStandardMaterial?H.environment:null,St=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:js,_t=(Y.isMeshStandardMaterial?I:Ne).get(Y.envMap||ft),zt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Se=ci;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Se=x.toneMapping);const be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ne=be!==void 0?be.length:0,Dt=It.get(Y),Ge=p.state.lights;if(rt===!0&&(wt===!0||T!==M)){const tn=T===M&&Y.id===E;Tt.setState(Y,T,tn)}let ce=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ge.state.version||Dt.outputColorSpace!==St||V.isBatchedMesh&&Dt.batching===!1||!V.isBatchedMesh&&Dt.batching===!0||V.isBatchedMesh&&Dt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Dt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Dt.instancing===!1||!V.isInstancedMesh&&Dt.instancing===!0||V.isSkinnedMesh&&Dt.skinning===!1||!V.isSkinnedMesh&&Dt.skinning===!0||V.isInstancedMesh&&Dt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Dt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Dt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Dt.instancingMorph===!1&&V.morphTexture!==null||Dt.envMap!==_t||Y.fog===!0&&Dt.fog!==st||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Tt.numPlanes||Dt.numIntersection!==Tt.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Bt||Dt.morphTargets!==Pt||Dt.morphNormals!==$t||Dt.morphColors!==ue||Dt.toneMapping!==Se||Dt.morphTargetsCount!==ne)&&(ce=!0):(ce=!0,Dt.__version=Y.version);let Rn=Dt.currentProgram;ce===!0&&(Rn=Sr(Y,H,V));let ls=!1,dn=!1,vo=!1;const xe=Rn.getUniforms(),Mn=Dt.uniforms;if(bt.useProgram(Rn.program)&&(ls=!0,dn=!0,vo=!0),Y.id!==E&&(E=Y.id,dn=!0),ls||M!==T){bt.buffers.depth.getReversed()?(ht.copy(T.projectionMatrix),K0(ht),$0(ht),xe.setValue(N,"projectionMatrix",ht)):xe.setValue(N,"projectionMatrix",T.projectionMatrix),xe.setValue(N,"viewMatrix",T.matrixWorldInverse);const an=xe.map.cameraPosition;an!==void 0&&an.setValue(N,se.setFromMatrixPosition(T.matrixWorld)),me.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,dn=!0,vo=!0)}if(V.isSkinnedMesh){xe.setOptional(N,V,"bindMatrix"),xe.setOptional(N,V,"bindMatrixInverse");const tn=V.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),xe.setValue(N,"boneTexture",tn.boneTexture,qt))}V.isBatchedMesh&&(xe.setOptional(N,V,"batchingTexture"),xe.setValue(N,"batchingTexture",V._matricesTexture,qt),xe.setOptional(N,V,"batchingIdTexture"),xe.setValue(N,"batchingIdTexture",V._indirectTexture,qt),xe.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&xe.setValue(N,"batchingColorTexture",V._colorsTexture,qt));const Sn=q.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&vt.update(V,q,Rn),(dn||Dt.receiveShadow!==V.receiveShadow)&&(Dt.receiveShadow=V.receiveShadow,xe.setValue(N,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mn.envMap.value=_t,Mn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Mn.envMapIntensity.value=H.environmentIntensity),dn&&(xe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Bm(Mn,vo),st&&Y.fog===!0&&Z.refreshFogUniforms(Mn,st),Z.refreshMaterialUniforms(Mn,Y,G,K,p.state.transmissionRenderTarget[T.id]),ga.upload(N,Wu(Dt),Mn,qt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ga.upload(N,Wu(Dt),Mn,qt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(N,"center",V.center),xe.setValue(N,"modelViewMatrix",V.modelViewMatrix),xe.setValue(N,"normalMatrix",V.normalMatrix),xe.setValue(N,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const tn=Y.uniformsGroups;for(let an=0,ec=tn.length;an<ec;an++){const zi=tn[an];F.update(zi,Rn),F.bind(zi,Rn)}}return Rn}function Bm(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function km(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,H,q){const Y=It.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),It.get(T.texture).__webglTexture=H,It.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const q=It.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Hm=N.createFramebuffer();this.setRenderTarget=function(T,H=0,q=0){P=T,A=H,C=q;let Y=!0,V=null,st=!1,ft=!1;if(T){const _t=It.get(T);if(_t.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(_t.__webglFramebuffer===void 0)qt.setupRenderTarget(T);else if(_t.__hasExternalTextures)qt.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pt=T.depthTexture;if(_t.__boundDepthTexture!==Pt){if(Pt!==null&&It.has(Pt)&&(T.width!==Pt.image.width||T.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(ft=!0);const Bt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[H])?V=Bt[H][q]:V=Bt[H],st=!0):T.samples>0&&qt.useMultisampledRTT(T)===!1?V=It.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?V=Bt[q]:V=Bt,L.copy(T.viewport),k.copy(T.scissor),D=T.scissorTest}else L.copy(mt).multiplyScalar(G).floor(),k.copy(ot).multiplyScalar(G).floor(),D=Jt;if(q!==0&&(V=Hm),bt.bindFramebuffer(N.FRAMEBUFFER,V)&&Y&&bt.drawBuffers(T,V),bt.viewport(L),bt.scissor(k),bt.setScissorTest(D),st){const _t=It.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,_t.__webglTexture,q)}else if(ft){const _t=It.get(T.texture),zt=H;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,q,zt)}else if(T!==null&&q!==0){const _t=It.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_t.__webglTexture,q)}E=-1},this.readRenderTargetPixels=function(T,H,q,Y,V,st,ft,St=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){bt.bindFramebuffer(N.FRAMEBUFFER,_t);try{const zt=T.textures[St],Bt=zt.format,Pt=zt.type;if(!me.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-V&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St),N.readPixels(H,q,Y,V,ct.convert(Bt),ct.convert(Pt),st))}finally{const zt=P!==null?It.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(T,H,q,Y,V,st,ft,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t)if(H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-V){bt.bindFramebuffer(N.FRAMEBUFFER,_t);const zt=T.textures[St],Bt=zt.format,Pt=zt.type;if(!me.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,st.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St),N.readPixels(H,q,Y,V,ct.convert(Bt),ct.convert(Pt),0);const ue=P!==null?It.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,ue);const Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Z0(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,st),N.deleteBuffer($t),N.deleteSync(Se),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,q=0){const Y=Math.pow(2,-q),V=Math.floor(T.image.width*Y),st=Math.floor(T.image.height*Y),ft=H!==null?H.x:0,St=H!==null?H.y:0;qt.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ft,St,V,st),bt.unbindTexture()};const Vm=N.createFramebuffer(),Gm=N.createFramebuffer();this.copyTextureToTexture=function(T,H,q=null,Y=null,V=0,st=null){st===null&&(V!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=V,V=0):st=0);let ft,St,_t,zt,Bt,Pt,$t,ue,Se;const be=T.isCompressedTexture?T.mipmaps[st]:T.image;if(q!==null)ft=q.max.x-q.min.x,St=q.max.y-q.min.y,_t=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,Bt=q.min.y,Pt=q.isBox3?q.min.z:0;else{const Sn=Math.pow(2,-V);ft=Math.floor(be.width*Sn),St=Math.floor(be.height*Sn),T.isDataArrayTexture?_t=be.depth:T.isData3DTexture?_t=Math.floor(be.depth*Sn):_t=1,zt=0,Bt=0,Pt=0}Y!==null?($t=Y.x,ue=Y.y,Se=Y.z):($t=0,ue=0,Se=0);const ne=ct.convert(H.format),Dt=ct.convert(H.type);let Ge;H.isData3DTexture?(qt.setTexture3D(H,0),Ge=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(qt.setTexture2DArray(H,0),Ge=N.TEXTURE_2D_ARRAY):(qt.setTexture2D(H,0),Ge=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const ce=N.getParameter(N.UNPACK_ROW_LENGTH),Rn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ls=N.getParameter(N.UNPACK_SKIP_PIXELS),dn=N.getParameter(N.UNPACK_SKIP_ROWS),vo=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,be.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);const xe=T.isDataArrayTexture||T.isData3DTexture,Mn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Sn=It.get(T),tn=It.get(H),an=It.get(Sn.__renderTarget),ec=It.get(tn.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,an.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ec.__webglFramebuffer);for(let zi=0;zi<_t;zi++)xe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(T).__webglTexture,V,Pt+zi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(H).__webglTexture,st,Se+zi)),N.blitFramebuffer(zt,Bt,ft,St,$t,ue,ft,St,N.DEPTH_BUFFER_BIT,N.NEAREST);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||It.has(T)){const Sn=It.get(T),tn=It.get(H);bt.bindFramebuffer(N.READ_FRAMEBUFFER,Vm),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Gm);for(let an=0;an<_t;an++)xe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Sn.__webglTexture,V,Pt+an):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Sn.__webglTexture,V),Mn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,tn.__webglTexture,st,Se+an):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,tn.__webglTexture,st),V!==0?N.blitFramebuffer(zt,Bt,ft,St,$t,ue,ft,St,N.COLOR_BUFFER_BIT,N.NEAREST):Mn?N.copyTexSubImage3D(Ge,st,$t,ue,Se+an,zt,Bt,ft,St):N.copyTexSubImage2D(Ge,st,$t,ue,zt,Bt,ft,St);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ge,st,$t,ue,Se,ft,St,_t,ne,Dt,be.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,st,$t,ue,Se,ft,St,_t,ne,be.data):N.texSubImage3D(Ge,st,$t,ue,Se,ft,St,_t,ne,Dt,be):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,st,$t,ue,ft,St,ne,Dt,be.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,st,$t,ue,be.width,be.height,ne,be.data):N.texSubImage2D(N.TEXTURE_2D,st,$t,ue,ft,St,ne,Dt,be);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Rn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ls),N.pixelStorei(N.UNPACK_SKIP_ROWS,dn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,vo),st===0&&H.generateMipmaps&&N.generateMipmap(Ge),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,H,q=null,Y=null,V=0){return Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,q,Y,V)},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&qt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?qt.setTextureCube(T,0):T.isData3DTexture?qt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?qt.setTexture2DArray(T,0):qt.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,bt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Fn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const i=this.elements,s=t.x,o=t.y,r=t.z;return e.x=i[0]*s+i[1]*o+i[2]*r,e.y=i[3]*s+i[4]*o+i[5]*r,e.z=i[6]*s+i[7]*o+i[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Fn);const i=this.elements,s=t.elements,o=e.elements,r=i[0],a=i[1],c=i[2],l=i[3],u=i[4],d=i[5],h=i[6],f=i[7],g=i[8],v=s[0],m=s[1],p=s[2],_=s[3],y=s[4],x=s[5],R=s[6],A=s[7],C=s[8];return o[0]=r*v+a*_+c*R,o[1]=r*m+a*y+c*A,o[2]=r*p+a*x+c*C,o[3]=l*v+u*_+d*R,o[4]=l*m+u*y+d*A,o[5]=l*p+u*x+d*C,o[6]=h*v+f*_+g*R,o[7]=h*m+f*y+g*A,o[8]=h*p+f*x+g*C,e}scale(t,e){e===void 0&&(e=new Fn);const i=this.elements,s=e.elements;for(let o=0;o!==3;o++)s[3*o+0]=t.x*i[3*o+0],s[3*o+1]=t.y*i[3*o+1],s[3*o+2]=t.z*i[3*o+2];return e}solve(t,e){e===void 0&&(e=new S);const i=3,s=4,o=[];let r,a;for(r=0;r<i*s;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+s*a]=this.elements[r+3*a];o[3]=t.x,o[7]=t.y,o[11]=t.z;let c=3;const l=c;let u;const d=4;let h;do{if(r=l-c,o[r+s*r]===0){for(a=r+1;a<l;a++)if(o[r+s*a]!==0){u=d;do h=d-u,o[h+s*r]+=o[h+s*a];while(--u);break}}if(o[r+s*r]!==0)for(a=r+1;a<l;a++){const f=o[r+s*a]/o[r+s*r];u=d;do h=d-u,o[h+s*a]=h<=r?0:o[h+s*a]-o[h+s*r]*f;while(--u)}}while(--c);if(e.z=o[2*s+3]/o[2*s+2],e.y=(o[1*s+3]-o[1*s+2]*e.z)/o[1*s+1],e.x=(o[0*s+3]-o[0*s+2]*e.z-o[0*s+1]*e.y)/o[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,i){if(i===void 0)return this.elements[e+3*t];this.elements[e+3*t]=i}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let i=0;i<9;i++)t+=this.elements[i]+",";return t}reverse(t){t===void 0&&(t=new Fn);const e=3,i=6,s=JM;let o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const c=a;let l;const u=i;let d;do{if(o=c-a,s[o+i*o]===0){for(r=o+1;r<c;r++)if(s[o+i*r]!==0){l=u;do d=u-l,s[d+i*o]+=s[d+i*r];while(--l);break}}if(s[o+i*o]!==0)for(r=o+1;r<c;r++){const h=s[o+i*r]/s[o+i*o];l=u;do d=u-l,s[d+i*r]=d<=o?0:s[d+i*r]-s[d+i*o]*h;while(--l)}}while(--a);o=2;do{r=o-1;do{const h=s[o+i*r]/s[o+i*o];l=i;do d=i-l,s[d+i*r]=s[d+i*r]-s[d+i*o]*h;while(--l)}while(r--)}while(--o);o=2;do{const h=1/s[o+i*o];l=i;do d=i-l,s[d+i*o]=s[d+i*o]*h;while(--l)}while(o--);o=2;do{r=2;do{if(d=s[e+r+i*o],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,d)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){const e=t.x,i=t.y,s=t.z,o=t.w,r=e+e,a=i+i,c=s+s,l=e*r,u=e*a,d=e*c,h=i*a,f=i*c,g=s*c,v=o*r,m=o*a,p=o*c,_=this.elements;return _[0]=1-(h+g),_[1]=u-p,_[2]=d+m,_[3]=u+p,_[4]=1-(l+g),_[5]=f-v,_[6]=d-m,_[7]=f+v,_[8]=1-(l+h),this}transpose(t){t===void 0&&(t=new Fn);const e=this.elements,i=t.elements;let s;return i[0]=e[0],i[4]=e[4],i[8]=e[8],s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s,t}}const JM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,i){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x=t,this.y=e,this.z=i}cross(t,e){e===void 0&&(e=new S);const i=t.x,s=t.y,o=t.z,r=this.x,a=this.y,c=this.z;return e.x=a*o-c*s,e.y=c*i-r*o,e.z=r*s-a*i,e}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Fn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,i=this.z,s=Math.sqrt(t*t+e*e+i*i);if(s>0){const o=1/s;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new S);const e=this.x,i=this.y,s=this.z;let o=Math.sqrt(e*e+i*i+s*s);return o>0?(o=1/o,t.x=e*o,t.y=i*o,t.z=s*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-i)*(r-i)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-i)*(r-i)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new S);const i=this.x,s=this.y,o=this.z;return e.x=t*i,e.y=t*s,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,i){return i===void 0&&(i=new S),i.x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const i=this.length();if(i>0){const s=QM,o=1/i;s.set(this.x*o,this.y*o,this.z*o);const r=tS;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,i){const s=this.x,o=this.y,r=this.z;i.x=s+(t.x-s)*e,i.y=o+(t.y-o)*e,i.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(nd),nd.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const QM=new S,tS=new S,nd=new S;class yn{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,i,s){const o=this.lowerBound,r=this.upperBound,a=i;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,id),l=id),l.x>r.x&&(r.x=l.x),l.x<o.x&&(o.x=l.x),l.y>r.y&&(r.y=l.y),l.y<o.y&&(o.y=l.y),l.z>r.z&&(r.z=l.z),l.z<o.z&&(o.z=l.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),s&&(o.x-=s,o.y-=s,o.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new yn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,o=t.upperBound,r=s.x<=i.x&&i.x<=o.x||e.x<=o.x&&o.x<=i.x,a=s.y<=i.y&&i.y<=o.y||e.y<=o.y&&o.y<=i.y,c=s.z<=i.z&&i.z<=o.z||e.z<=o.z&&o.z<=i.z;return r&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,o=t.upperBound;return e.x<=s.x&&i.x>=o.x&&e.y<=s.y&&i.y>=o.y&&e.z<=s.z&&i.z>=o.z}getCorners(t,e,i,s,o,r,a,c){const l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),i.set(u.x,u.y,l.z),s.set(l.x,u.y,u.z),o.set(u.x,l.y,u.z),r.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){const i=sd,s=i[0],o=i[1],r=i[2],a=i[3],c=i[4],l=i[5],u=i[6],d=i[7];this.getCorners(s,o,r,a,c,l,u,d);for(let h=0;h!==8;h++){const f=i[h];t.pointToLocal(f,f)}return e.setFromPoints(i)}toWorldFrame(t,e){const i=sd,s=i[0],o=i[1],r=i[2],a=i[3],c=i[4],l=i[5],u=i[6],d=i[7];this.getCorners(s,o,r,a,c,l,u,d);for(let h=0;h!==8;h++){const f=i[h];t.pointToWorld(f,f)}return e.setFromPoints(i)}overlapsRay(t){const{direction:e,from:i}=t,s=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-i.x)*s,c=(this.upperBound.x-i.x)*s,l=(this.lowerBound.y-i.y)*o,u=(this.upperBound.y-i.y)*o,d=(this.lowerBound.z-i.z)*r,h=(this.upperBound.z-i.z)*r,f=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(d,h));return!(g<0||f>g)}}const id=new S,sd=[new S,new S,new S,new S,new S,new S,new S,new S];class od{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}return this.matrix[(i*(i+1)>>1)+s-1]}set(t,e,i){let{index:s}=t,{index:o}=e;if(o>s){const r=o;o=s,s=r}this.matrix[(s*(s+1)>>1)+o-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Zf{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const i=this._listeners;if(i[t]===void 0)return this;const s=i[t].indexOf(e);return s!==-1&&i[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const i=this._listeners[t.type];if(i!==void 0){t.target=this;for(let s=0,o=i.length;s<o;s++)i[s].call(this,t)}return this}}class De{constructor(t,e,i,s){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=i,this.w=s}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const i=Math.sin(e*.5);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const i=eS,s=nS;t.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=t.cross(e);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new De);const i=this.x,s=this.y,o=this.z,r=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=i*u+r*a+s*l-o*c,e.y=s*u+r*c+o*a-i*l,e.z=o*u+r*l+i*c-s*a,e.w=r*u-i*a-s*c-o*l,e}inverse(t){t===void 0&&(t=new De);const e=this.x,i=this.y,s=this.z,o=this.w;this.conjugate(t);const r=1/(e*e+i*i+s*s+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new De),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const i=t.x,s=t.y,o=t.z,r=this.x,a=this.y,c=this.z,l=this.w,u=l*i+a*o-c*s,d=l*s+c*i-r*o,h=l*o+r*s-a*i,f=-r*i-a*s-c*o;return e.x=u*l+f*-r+d*-c-h*-a,e.y=d*l+f*-a+h*-r-u*-c,e.z=h*l+f*-c+u*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let i,s,o;const r=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const u=r*a+c*l;if(u>.499&&(i=2*Math.atan2(r,l),s=Math.PI/2,o=0),u<-.499&&(i=-2*Math.atan2(r,l),s=-Math.PI/2,o=0),i===void 0){const d=r*r,h=a*a,f=c*c;i=Math.atan2(2*a*l-2*r*c,1-2*h-2*f),s=Math.asin(2*u),o=Math.atan2(2*r*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=i,t.z=s,t.x=o}setFromEuler(t,e,i,s){s===void 0&&(s="XYZ");const o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(i/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=c*r*a+o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a-c*l*u):s==="YXZ"?(this.x=c*r*a+o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a+c*l*u):s==="ZXY"?(this.x=c*r*a-o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a-c*l*u):s==="ZYX"?(this.x=c*r*a-o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a+c*l*u):s==="YZX"?(this.x=c*r*a+o*l*u,this.y=o*l*a+c*r*u,this.z=o*r*u-c*l*a,this.w=o*r*a-c*l*u):s==="XZY"&&(this.x=c*r*a-o*l*u,this.y=o*l*a-c*r*u,this.z=o*r*u+c*l*a,this.w=o*r*a+c*l*u),this}clone(){return new De(this.x,this.y,this.z,this.w)}slerp(t,e,i){i===void 0&&(i=new De);const s=this.x,o=this.y,r=this.z,a=this.w;let c=t.x,l=t.y,u=t.z,d=t.w,h,f,g,v,m;return f=s*c+o*l+r*u+a*d,f<0&&(f=-f,c=-c,l=-l,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),v=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(v=1-e,m=e),i.x=v*s+m*c,i.y=v*o+m*l,i.z=v*r+m*u,i.w=v*a+m*d,i}integrate(t,e,i,s){s===void 0&&(s=new De);const o=t.x*i.x,r=t.y*i.y,a=t.z*i.z,c=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return s.x+=h*(o*d+r*u-a*l),s.y+=h*(r*d+a*c-o*u),s.z+=h*(a*d+o*l-r*c),s.w+=h*(-o*c-r*l-a*u),s}}const eS=new S,nS=new S,iS={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class xt{constructor(t){t===void 0&&(t={}),this.id=xt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}xt.idCounter=0;xt.types=iS;class ae{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new De,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ae.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ae.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,i,s){return s===void 0&&(s=new S),i.vsub(t,s),e.conjugate(rd),rd.vmult(s,s),s}static pointToWorldFrame(t,e,i,s){return s===void 0&&(s=new S),e.vmult(i,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,i){return i===void 0&&(i=new S),t.vmult(e,i),i}static vectorToLocalFrame(t,e,i,s){return s===void 0&&(s=new S),e.w*=-1,e.vmult(i,s),e.w*=-1,s}}const rd=new De;class Hs extends xt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:i=[],normals:s=[],axes:o,boundingSphereRadius:r}=t;super({type:xt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,i=this.uniqueEdges;i.length=0;const s=new S;for(let o=0;o!==t.length;o++){const r=t[o],a=r.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[r[c]].vsub(e[r[l]],s),s.normalize();let u=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(s)||i[d].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const i=this.vertices[this.faces[t][0]];if(e.dot(i)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const i=this.faces[t],s=this.vertices[i[0]],o=this.vertices[i[1]],r=this.vertices[i[2]];Hs.computeNormal(s,o,r,e)}static computeNormal(t,e,i,s){const o=new S,r=new S;e.vsub(t,r),i.vsub(e,o),o.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,i,s,o,r,a,c,l){const u=new S;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),o.vmult(u,u);const v=u.dot(r);v>h&&(h=v,d=g)}const f=[];for(let g=0;g<i.faces[d].length;g++){const v=i.vertices[i.faces[d][g]],m=new S;m.copy(v),o.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,c,l)}findSeparatingAxis(t,e,i,s,o,r,a,c){const l=new S,u=new S,d=new S,h=new S,f=new S,g=new S;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){i.vmult(m.uniqueAxes[p],l);const _=m.testSepAxis(l,t,e,i,s,o);if(_===!1)return!1;_<v&&(v=_,r.copy(l))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const y=a?a[_]:_;l.copy(m.faceNormals[y]),i.vmult(l,l);const x=m.testSepAxis(l,t,e,i,s,o);if(x===!1)return!1;x<v&&(v=x,r.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){o.vmult(t.uniqueAxes[p],u);const _=m.testSepAxis(u,t,e,i,s,o);if(_===!1)return!1;_<v&&(v=_,r.copy(u))}else{const p=c?c.length:t.faces.length;for(let _=0;_<p;_++){const y=c?c[_]:_;u.copy(t.faceNormals[y]),o.vmult(u,u);const x=m.testSepAxis(u,t,e,i,s,o);if(x===!1)return!1;x<v&&(v=x,r.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){i.vmult(m.uniqueEdges[p],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(o.vmult(t.uniqueEdges[_],f),h.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,i,s,o);if(y===!1)return!1;y<v&&(v=y,r.copy(g))}}return s.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,i,s,o,r){const a=this;Hs.project(a,t,i,s,zc),Hs.project(e,t,o,r,Oc);const c=zc[0],l=zc[1],u=Oc[0],d=Oc[1];if(c<d||u<l)return!1;const h=c-d,f=u-l;return h<f?h:f}calculateLocalInertia(t,e){const i=new S,s=new S;this.computeLocalAABB(s,i);const o=i.x-s.x,r=i.y-s.y,a=i.z-s.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){const e=this.faces[t],i=this.faceNormals[t],s=this.vertices[e[0]];return-i.dot(s)}clipFaceAgainstHull(t,e,i,s,o,r,a){const c=new S,l=new S,u=new S,d=new S,h=new S,f=new S,g=new S,v=new S,m=this,p=[],_=s,y=p;let x=-1,R=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){c.copy(m.faceNormals[M]),i.vmult(c,c);const L=c.dot(t);L<R&&(R=L,x=M)}if(x<0)return;const A=m.faces[x];A.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let L=0;L<m.faces[M].length;L++)A.indexOf(m.faces[M][L])!==-1&&M!==x&&A.connectedFaces.indexOf(M)===-1&&A.connectedFaces.push(M);const C=A.length;for(let M=0;M<C;M++){const L=m.vertices[A[M]],k=m.vertices[A[(M+1)%C]];L.vsub(k,l),u.copy(l),i.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[x]),i.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(L),i.vmult(f,f),e.vadd(f,f);const D=A.connectedFaces[M];g.copy(this.faceNormals[D]);const z=this.getPlaneConstantOfFace(D);v.copy(g),i.vmult(v,v);const B=z-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,B);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const P=this.getPlaneConstantOfFace(x);v.copy(g),i.vmult(v,v);const E=P-v.dot(e);for(let M=0;M<_.length;M++){let L=v.dot(_[M])+E;if(L<=o&&(console.log(`clamped: depth=${L} to minDist=${o}`),L=o),L<=r){const k=_[M];if(L<=1e-6){const D={point:k,normal:v,depth:L};a.push(D)}}}}clipFaceAgainstPlane(t,e,i,s){let o,r;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];o=i.dot(c)+s;for(let u=0;u<a;u++){if(l=t[u],r=i.dot(l)+s,o<0)if(r<0){const d=new S;d.copy(l),e.push(d)}else{const d=new S;c.lerp(l,o/(o-r),d),e.push(d)}else if(r<0){const d=new S;c.lerp(l,o/(o-r),d),e.push(d),e.push(l)}c=l,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const i=this.vertices,s=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(i[o],s[o]),t.vadd(s[o],s[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const i=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const o=i[s];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const i=this.faceNormals,s=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(i[o],s[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let i=0;i!==e.length;i++){const s=e[i].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const o=this.vertices;let r,a,c,l,u,d,h=new S;for(let f=0;f<o.length;f++){h.copy(o[f]),e.vmult(h,h),t.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}i.set(r,a,c),s.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let i=0;i<e.length;i++)t.vadd(e[i],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const i=this.vertices.length,s=this.vertices;if(e){for(let o=0;o<i;o++){const r=s[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){const r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<i;o++){const r=s[o];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,i=this.faces,s=this.faceNormals,o=new S;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=s[r];const c=e[i[r][0]],l=new S;t.vsub(c,l);const u=a.dot(l),d=new S;o.vsub(c,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,i,s,o){const r=t.vertices.length,a=sS;let c=0,l=0;const u=oS,d=t.vertices;u.setZero(),ae.vectorToLocalFrame(i,s,e,a),ae.pointToLocalFrame(i,s,u,u);const h=u.dot(a);l=c=d[0].dot(a);for(let f=1;f<r;f++){const g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const f=l;l=c,c=f}o[0]=c,o[1]=l}}const zc=[],Oc=[];new S;const sS=new S,oS=new S;class Ui extends xt{constructor(t){super({type:xt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,s=S,o=[new s(-t,-e,-i),new s(t,-e,-i),new s(t,e,-i),new s(-t,e,-i),new s(-t,-e,i),new s(t,-e,i),new s(t,e,i),new s(-t,e,i)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new Hs({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),Ui.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,i){const s=t;i.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const i=t,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),e!==void 0)for(let o=0;o!==i.length;o++)e.vmult(i[o],i[o]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,i){const s=this.halfExtents,o=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<o.length;r++)yi.set(o[r][0],o[r][1],o[r][2]),e.vmult(yi,yi),t.vadd(yi,yi),i(yi.x,yi.y,yi.z)}calculateWorldAABB(t,e,i,s){const o=this.halfExtents;zn[0].set(o.x,o.y,o.z),zn[1].set(-o.x,o.y,o.z),zn[2].set(-o.x,-o.y,o.z),zn[3].set(-o.x,-o.y,-o.z),zn[4].set(o.x,-o.y,-o.z),zn[5].set(o.x,o.y,-o.z),zn[6].set(-o.x,o.y,-o.z),zn[7].set(o.x,-o.y,o.z);const r=zn[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),i.copy(r);for(let a=1;a<8;a++){const c=zn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,u=c.y,d=c.z;l>s.x&&(s.x=l),u>s.y&&(s.y=u),d>s.z&&(s.z=d),l<i.x&&(i.x=l),u<i.y&&(i.y=u),d<i.z&&(i.z=d)}}}const yi=new S,zn=[new S,new S,new S,new S,new S,new S,new S,new S],cu={DYNAMIC:1,STATIC:2,KINEMATIC:4},lu={AWAKE:0,SLEEPY:1,SLEEPING:2};class pt extends Zf{constructor(t){t===void 0&&(t={}),super(),this.id=pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?pt.STATIC:pt.DYNAMIC,typeof t.type==typeof pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new De,this.initQuaternion=new De,this.previousQuaternion=new De,this.interpolatedQuaternion=new De,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Fn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Fn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new yn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===pt.SLEEPING&&this.dispatchEvent(pt.wakeupEvent)}sleep(){this.sleepState=pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===pt.AWAKE&&i<s?(this.sleepState=pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(pt.sleepyEvent)):e===pt.SLEEPY&&i>s?this.wakeUp():e===pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pt.SLEEPING||this.type===pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,i){const s=new S,o=new De;return e&&s.copy(e),i&&o.copy(i),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,i=t.length;let s=0;for(let o=0;o!==i;o++){const r=t[o];r.updateBoundingSphereRadius();const a=e[o].length(),c=r.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,s=t.length,o=rS,r=aS,a=this.quaternion,c=this.aabb,l=cS;for(let u=0;u!==s;u++){const d=t[u];a.vmult(e[u],o),o.vadd(this.position,o),a.mult(i[u],r),d.calculateWorldAABB(o,r,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const i=lS,s=uS;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(e,i),i.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const i=hS;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const i=dS,s=fS;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyForce(i,s)}applyTorque(t){this.type===pt.DYNAMIC&&(this.sleepState===pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const i=e,s=pS;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const o=mS;i.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const i=gS,s=vS;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyImpulse(i,s)}updateMassProperties(){const t=_S;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,i=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ui.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!i?1/e.x:0,e.y>0&&!i?1/e.y:0,e.z>0&&!i?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const i=new S;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e}integrate(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pt.DYNAMIC||this.type===pt.KINEMATIC)||this.sleepState===pt.SLEEPING)return;const s=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;s.x+=a.x*f*h.x,s.y+=a.y*f*h.y,s.z+=a.z*f*h.z;const g=d.elements,v=this.angularFactor,m=c.x*v.x,p=c.y*v.y,_=c.z*v.z;o.x+=t*(g[0]*m+g[1]*p+g[2]*_),o.y+=t*(g[3]*m+g[4]*p+g[5]*_),o.z+=t*(g[6]*m+g[7]*p+g[8]*_),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(i?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pt.idCounter=0;pt.COLLIDE_EVENT_NAME="collide";pt.DYNAMIC=cu.DYNAMIC;pt.STATIC=cu.STATIC;pt.KINEMATIC=cu.KINEMATIC;pt.AWAKE=lu.AWAKE;pt.SLEEPY=lu.SLEEPY;pt.SLEEPING=lu.SLEEPING;pt.wakeupEvent={type:"wakeup"};pt.sleepyEvent={type:"sleepy"};pt.sleepEvent={type:"sleep"};const rS=new S,aS=new De,cS=new yn,lS=new Fn,uS=new Fn;new Fn;const hS=new S,dS=new S,fS=new S,pS=new S,mS=new S,gS=new S,vS=new S,_S=new S;class Kf{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&pt.STATIC)!==0||t.sleepState===pt.SLEEPING)&&((e.type&pt.STATIC)!==0||e.sleepState===pt.SLEEPING))}intersectionTest(t,e,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,s):this.doBoundingSphereBroadphase(t,e,i,s)}doBoundingSphereBroadphase(t,e,i,s){const o=xS;e.position.vsub(t.position,o);const r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(i.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,i,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),s.push(e))}makePairsUnique(t,e){const i=yS,s=MS,o=SS,r=t.length;for(let a=0;a!==r;a++)s[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const c=s[a].id,l=o[a].id,u=c<l?`${c},${l}`:`${l},${c}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){const c=i.keys.pop(),l=i[c];t.push(s[l]),e.push(o[l]),delete i[c]}}setWorld(t){}static boundingSphereCheck(t,e){const i=new S;t.position.vsub(e.position,i);const s=t.shapes[0],o=e.shapes[0];return Math.pow(s.boundingSphereRadius+o.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const xS=new S;new S;new De;new S;const yS={keys:[]},MS=[],SS=[];new S;new S;new S;class ES extends Kf{constructor(){super()}collisionPairs(t,e,i){const s=t.bodies,o=s.length;let r,a;for(let c=0;c!==o;c++)for(let l=0;l!==c;l++)r=s[c],a=s[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let s=0;s<t.bodies.length;s++){const o=t.bodies[s];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&i.push(o)}return i}}class Aa{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,s,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=o,this.body=r,this.distance=a}}let $f,jf,Jf,Qf,tp,ep,np;const uu={CLOSEST:1,ANY:2,ALL:4};$f=xt.types.SPHERE;jf=xt.types.PLANE;Jf=xt.types.BOX;Qf=xt.types.CYLINDER;tp=xt.types.CONVEXPOLYHEDRON;ep=xt.types.HEIGHTFIELD;np=xt.types.TRIMESH;class Ie{get[$f](){return this._intersectSphere}get[jf](){return this._intersectPlane}get[Jf](){return this._intersectBox}get[Qf](){return this._intersectConvex}get[tp](){return this._intersectConvex}get[ep](){return this._intersectHeightfield}get[np](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ie.ANY,this.result=new Aa,this.hasHit=!1,this.callback=i=>{}}intersectWorld(t,e){return this.mode=e.mode||Ie.ANY,this.result=e.result||new Aa,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ad),Bc.length=0,t.broadphase.aabbQuery(t,ad,Bc),this.intersectBodies(Bc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=wS,o=TS;for(let r=0,a=t.shapes.length;r<a;r++){const c=t.shapes[r];if(!(i&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(c,o,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let i=0,s=t.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(t[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,i,s){const o=this.from;if(BS(o,this.direction,i)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,i,s,t)}_intersectBox(t,e,i,s,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,i,s,o)}_intersectPlane(t,e,i,s,o){const r=this.from,a=this.to,c=this.direction,l=new S(0,0,1);e.vmult(l,l);const u=new S;r.vsub(i,u);const d=u.dot(l);a.vsub(i,u);const h=u.dot(l);if(d*h>0||r.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new S,v=new S,m=new S;r.vsub(i,g);const p=-l.dot(g)/f;c.scale(p,v),r.vadd(v,m),this.reportIntersection(l,m,o,s,-1)}getAABB(t){const{lowerBound:e,upperBound:i}=t,s=this.to,o=this.from;e.x=Math.min(s.x,o.x),e.y=Math.min(s.y,o.y),e.z=Math.min(s.z,o.z),i.x=Math.max(s.x,o.x),i.y=Math.max(s.y,o.y),i.z=Math.max(s.z,o.z)}_intersectHeightfield(t,e,i,s,o){t.data,t.elementSize;const r=bS;r.from.copy(this.from),r.to.copy(this.to),ae.pointToLocalFrame(i,e,r.from,r.from),ae.pointToLocalFrame(i,e,r.to,r.to),r.updateDirection();const a=AS;let c,l,u,d;c=l=0,u=d=t.data.length-1;const h=new yn;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<u;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(f,g,!1),ae.pointToWorldFrame(i,e,t.pillarOffset,na),this._intersectConvex(t.pillarConvex,e,na,s,o,cd),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),ae.pointToWorldFrame(i,e,t.pillarOffset,na),this._intersectConvex(t.pillarConvex,e,na,s,o,cd)}}}_intersectSphere(t,e,i,s,o){const r=this.from,a=this.to,c=t.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,u=2*((a.x-r.x)*(r.x-i.x)+(a.y-r.y)*(r.y-i.y)+(a.z-r.z)*(r.z-i.z)),d=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2-c**2,h=u**2-4*l*d,f=RS,g=CS;if(!(h<0))if(h===0)r.lerp(a,h,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,o,s,-1);else{const v=(-u-Math.sqrt(h))/(2*l),m=(-u+Math.sqrt(h))/(2*l);if(v>=0&&v<=1&&(r.lerp(a,v,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,o,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(a,m,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,o,s,-1))}}_intersectConvex(t,e,i,s,o,r){const a=PS,c=ld,l=r&&r.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=l?l.length:u.length,_=this.result;for(let y=0;!_.shouldStop&&y<p;y++){const x=l?l[y]:y,R=u[x],A=h[x],C=e,P=i;c.copy(d[R[0]]),C.vmult(c,c),c.vadd(P,c),c.vsub(g,c),C.vmult(A,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const M=a.dot(c)/E;if(!(M<0)){f.scale(M,cn),cn.vadd(g,cn),In.copy(d[R[0]]),C.vmult(In,In),P.vadd(In,In);for(let L=1;!_.shouldStop&&L<R.length-1;L++){On.copy(d[R[L]]),Bn.copy(d[R[L+1]]),C.vmult(On,On),C.vmult(Bn,Bn),P.vadd(On,On),P.vadd(Bn,Bn);const k=cn.distanceTo(g);!(Ie.pointInTriangle(cn,In,On,Bn)||Ie.pointInTriangle(cn,On,In,Bn))||k>m||this.reportIntersection(a,cn,o,s,x)}}}}_intersectTrimesh(t,e,i,s,o,r){const a=LS,c=zS,l=OS,u=ld,d=IS,h=DS,f=NS,g=FS,v=US,m=t.indices;t.vertices;const p=this.from,_=this.to,y=this.direction;l.position.copy(i),l.quaternion.copy(e),ae.vectorToLocalFrame(i,e,y,d),ae.pointToLocalFrame(i,e,p,h),ae.pointToLocalFrame(i,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const x=h.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let R=0,A=c.length;!this.result.shouldStop&&R!==A;R++){const C=c[R];t.getNormal(C,a),t.getVertex(m[C*3],In),In.vsub(h,u);const P=d.dot(a),E=a.dot(u)/P;if(E<0)continue;d.scale(E,cn),cn.vadd(h,cn),t.getVertex(m[C*3+1],On),t.getVertex(m[C*3+2],Bn);const M=cn.distanceSquared(h);!(Ie.pointInTriangle(cn,On,In,Bn)||Ie.pointInTriangle(cn,In,On,Bn))||M>x||(ae.vectorToWorldFrame(e,a,v),ae.pointToWorldFrame(i,e,cn,g),this.reportIntersection(v,g,o,s,C))}c.length=0}reportIntersection(t,e,i,s,o){const r=this.from,a=this.to,c=r.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case Ie.ALL:this.hasHit=!0,l.set(r,a,t,e,i,s,c),l.hasHit=!0,this.callback(l);break;case Ie.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,i,s,c));break;case Ie.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,i,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,i,s){s.vsub(e,Ki),i.vsub(e,Ro),t.vsub(e,kc);const o=Ki.dot(Ki),r=Ki.dot(Ro),a=Ki.dot(kc),c=Ro.dot(Ro),l=Ro.dot(kc);let u,d;return(u=c*a-r*l)>=0&&(d=o*l-r*a)>=0&&u+d<o*c-r*r}}Ie.CLOSEST=uu.CLOSEST;Ie.ANY=uu.ANY;Ie.ALL=uu.ALL;const ad=new yn,Bc=[],Ro=new S,kc=new S,wS=new S,TS=new De,cn=new S,In=new S,On=new S,Bn=new S;new S;new Aa;const cd={faceList:[0]},na=new S,bS=new Ie,AS=[],RS=new S,CS=new S,PS=new S;new S;new S;const ld=new S,LS=new S,IS=new S,DS=new S,NS=new S,US=new S,FS=new S;new yn;const zS=[],OS=new ae,Ki=new S,ia=new S;function BS(n,t,e){e.vsub(n,Ki);const i=Ki.dot(t);return t.scale(i,ia),ia.vadd(n,ia),e.distanceTo(ia)}class Us extends Kf{static checkBounds(t,e,i){let s,o;i===0?(s=t.position.x,o=e.position.x):i===1?(s=t.position.y,o=e.position.y):i===2&&(s=t.position.z,o=e.position.z);const r=t.boundingRadius,a=e.boundingRadius,c=s+r;return o-a<c}static insertionSortX(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.x<=s.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortY(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.y<=s.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortZ(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.z<=s.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=i=>{e.push(i.body)},this._removeBodyHandler=i=>{const s=e.indexOf(i.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,i){const s=this.axisList,o=s.length,r=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==o;a++){const l=s[a];for(c=a+1;c<o;c++){const u=s[c];if(this.needBroadphaseCollision(l,u)){if(!Us.checkBounds(l,u,r))break;this.intersectionTest(l,u,e,i)}}}}sortList(){const t=this.axisList,e=this.axisIndex,i=t.length;for(let s=0;s!==i;s++){const o=t[s];o.aabbNeedsUpdate&&o.updateAABB()}e===0?Us.insertionSortX(t):e===1?Us.insertionSortY(t):e===2&&Us.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,i=0,s=0,o=0,r=0;const a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){const g=a[f],v=g.position.x;t+=v,e+=v*v;const m=g.position.y;i+=m,s+=m*m;const p=g.position.z;o+=p,r+=p*p}const u=e-t*t*l,d=s-i*i*l,h=r-o*o*l;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,i){i===void 0&&(i=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let o="x";s===1&&(o="y"),s===2&&(o="z");const r=this.axisList;e.lowerBound[o],e.upperBound[o];for(let a=0;a<r.length;a++){const c=r[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&i.push(c)}return i}}class kS{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}}class ud{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class pr{constructor(t,e,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=pr.idCounter++,this.minForce=i,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ud,this.jacobianElementB=new ud,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,i){const s=e,o=t,r=i;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*o*(1+4*s))}computeB(t,e,i){const s=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-s*e-r*i}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.position,r=s.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.velocity,r=s.velocity,a=i.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.vlambda,r=s.vlambda,a=i.wlambda,c=s.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.force,r=i.torque,a=s.force,c=s.torque,l=i.invMassSolve,u=s.invMassSolve;return o.scale(l,hd),a.scale(u,dd),i.invInertiaWorldSolve.vmult(r,fd),s.invInertiaWorldSolve.vmult(c,pd),t.multiplyVectors(hd,fd)+e.multiplyVectors(dd,pd)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,o=i.invMassSolve,r=s.invMassSolve,a=i.invInertiaWorldSolve,c=s.invInertiaWorldSolve;let l=o+r;return a.vmult(t.rotational,sa),l+=sa.dot(t.rotational),c.vmult(e.rotational,sa),l+=sa.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,o=this.bj,r=HS;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,i.spatial,o.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),o.invInertiaWorldSolve.vmult(i.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}pr.idCounter=0;const hd=new S,dd=new S,fd=new S,pd=new S,sa=new S,HS=new S;class VS extends pr{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,i=this.b,s=this.bi,o=this.bj,r=this.ri,a=this.rj,c=GS,l=WS,u=s.velocity,d=s.angularVelocity;s.force,s.torque;const h=o.velocity,f=o.angularVelocity;o.force,o.torque;const g=qS,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;r.cross(p,c),a.cross(p,l),p.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(o.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(r,g);const _=p.dot(g),y=this.restitution+1,x=y*h.dot(p)-y*u.dot(p)+f.dot(l)-d.dot(c),R=this.computeGiMf();return-_*e-x*i-t*R}getImpactVelocityAlongNormal(){const t=XS,e=YS,i=ZS,s=KS,o=$S;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,o),this.ni.dot(o)}}const GS=new S,WS=new S,qS=new S,XS=new S,YS=new S,ZS=new S,KS=new S,$S=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class md extends pr{constructor(t,e,i){super(t,e,-i,i),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,o=jS,r=JS,a=this.t;i.cross(a,o),s.cross(a,r);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),o.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const jS=new S,JS=new S;class rs{constructor(t,e,i){i=kS.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=rs.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}rs.idCounter=0;class po{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=po.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}po.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Ie;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Fl extends xt{constructor(t){if(super({type:xt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const i=2*t*this.radius*this.radius/5;return e.x=i,e.y=i,e.z=i,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,i,s){const o=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const c=r[a];i[c]=t[c]-o,s[c]=t[c]+o}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class QS extends Hs{constructor(t,e,i,s){if(t===void 0&&(t=1),e===void 0&&(e=1),i===void 0&&(i=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const o=s,r=[],a=[],c=[],l=[],u=[],d=Math.cos,h=Math.sin;r.push(new S(-e*h(0),-i*.5,e*d(0))),l.push(0),r.push(new S(-t*h(0),i*.5,t*d(0))),u.push(1);for(let g=0;g<o;g++){const v=2*Math.PI/o*(g+1),m=2*Math.PI/o*(g+.5);g<o-1?(r.push(new S(-e*h(v),-i*.5,e*d(v))),l.push(2*g+2),r.push(new S(-t*h(v),i*.5,t*d(v))),u.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(o%2===1||g<o/2)&&a.push(new S(-h(m),0,d(m)))}c.push(l),a.push(new S(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);c.push(f),super({vertices:r,faces:c,axes:a}),this.type=xt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=i,this.numSegments=s}}new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new yn;new S;new yn;new S;new S;new S;new S;new S;new S;new S;new yn;new S;new ae;new yn;class tE{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}}class eE extends tE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0;const s=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=e.bodies,l=c.length,u=t;let d,h,f,g,v,m;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();const p=iE,_=sE,y=nE;p.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const R=r[x];y[x]=0,_[x]=R.computeB(u),p[x]=1/R.computeC()}if(a!==0){for(let A=0;A!==l;A++){const C=c[A],P=C.vlambda,E=C.wlambda;P.set(0,0,0),E.set(0,0,0)}for(i=0;i!==s;i++){g=0;for(let A=0;A!==a;A++){const C=r[A];d=_[A],h=p[A],m=y[A],v=C.computeGWlambda(),f=h*(d-v-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),y[A]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<o)break}for(let A=0;A!==l;A++){const C=c[A],P=C.velocity,E=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),P.vadd(C.vlambda,P),C.wlambda.vmul(C.angularFactor,C.wlambda),E.vadd(C.wlambda,E)}let x=r.length;const R=1/u;for(;x--;)r[x].multiplier=y[x]*R}return i}}const nE=[],iE=[],sE=[];class oE{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class rE extends oE{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const _e={sphereSphere:xt.types.SPHERE,spherePlane:xt.types.SPHERE|xt.types.PLANE,boxBox:xt.types.BOX|xt.types.BOX,sphereBox:xt.types.SPHERE|xt.types.BOX,planeBox:xt.types.PLANE|xt.types.BOX,convexConvex:xt.types.CONVEXPOLYHEDRON,sphereConvex:xt.types.SPHERE|xt.types.CONVEXPOLYHEDRON,planeConvex:xt.types.PLANE|xt.types.CONVEXPOLYHEDRON,boxConvex:xt.types.BOX|xt.types.CONVEXPOLYHEDRON,sphereHeightfield:xt.types.SPHERE|xt.types.HEIGHTFIELD,boxHeightfield:xt.types.BOX|xt.types.HEIGHTFIELD,convexHeightfield:xt.types.CONVEXPOLYHEDRON|xt.types.HEIGHTFIELD,sphereParticle:xt.types.PARTICLE|xt.types.SPHERE,planeParticle:xt.types.PLANE|xt.types.PARTICLE,boxParticle:xt.types.BOX|xt.types.PARTICLE,convexParticle:xt.types.PARTICLE|xt.types.CONVEXPOLYHEDRON,cylinderCylinder:xt.types.CYLINDER,sphereCylinder:xt.types.SPHERE|xt.types.CYLINDER,planeCylinder:xt.types.PLANE|xt.types.CYLINDER,boxCylinder:xt.types.BOX|xt.types.CYLINDER,convexCylinder:xt.types.CONVEXPOLYHEDRON|xt.types.CYLINDER,heightfieldCylinder:xt.types.HEIGHTFIELD|xt.types.CYLINDER,particleCylinder:xt.types.PARTICLE|xt.types.CYLINDER,sphereTrimesh:xt.types.SPHERE|xt.types.TRIMESH,planeTrimesh:xt.types.PLANE|xt.types.TRIMESH};class aE{get[_e.sphereSphere](){return this.sphereSphere}get[_e.spherePlane](){return this.spherePlane}get[_e.boxBox](){return this.boxBox}get[_e.sphereBox](){return this.sphereBox}get[_e.planeBox](){return this.planeBox}get[_e.convexConvex](){return this.convexConvex}get[_e.sphereConvex](){return this.sphereConvex}get[_e.planeConvex](){return this.planeConvex}get[_e.boxConvex](){return this.boxConvex}get[_e.sphereHeightfield](){return this.sphereHeightfield}get[_e.boxHeightfield](){return this.boxHeightfield}get[_e.convexHeightfield](){return this.convexHeightfield}get[_e.sphereParticle](){return this.sphereParticle}get[_e.planeParticle](){return this.planeParticle}get[_e.boxParticle](){return this.boxParticle}get[_e.convexParticle](){return this.convexParticle}get[_e.cylinderCylinder](){return this.convexConvex}get[_e.sphereCylinder](){return this.sphereConvex}get[_e.planeCylinder](){return this.planeConvex}get[_e.boxCylinder](){return this.boxConvex}get[_e.convexCylinder](){return this.convexConvex}get[_e.heightfieldCylinder](){return this.heightfieldCylinder}get[_e.particleCylinder](){return this.particleCylinder}get[_e.sphereTrimesh](){return this.sphereTrimesh}get[_e.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new rE,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,s,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new VS(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&s.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=i.material||t.material,u=s.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=o||i,a.sj=r||s,a}createFrictionEquationsFromContact(t,e){const i=t.bi,s=t.bj,o=t.si,r=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=o.material||i.material,d=r.material||s.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let f=i.invMass+s.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new md(i,s,h*f),m=g.length?g.pop():new md(i,s,h*f);return v.bi=m.bi=i,v.bj=m.bj=s,v.minForce=m.minForce=-h*f,v.maxForce=m.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Wi.setZero(),Cs.setZero(),Ps.setZero();const o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?(Wi.vadd(e.ni,Wi),Cs.vadd(e.ri,Cs),Ps.vadd(e.rj,Ps)):(Wi.vsub(e.ni,Wi),Cs.vadd(e.rj,Cs),Ps.vadd(e.ri,Ps));const r=1/t;Cs.scale(r,i.ri),Ps.scale(r,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),Wi.normalize(),Wi.tangents(i.t,s.t)}getContacts(t,e,i,s,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=s,this.frictionResult=r;const c=uE,l=hE,u=cE,d=lE;for(let h=0,f=t.length;h!==f;h++){const g=t[h],v=e[h];let m=null;g.material&&v.material&&(m=i.getContactMaterial(g.material,v.material)||null);const p=g.type&pt.KINEMATIC&&v.type&pt.STATIC||g.type&pt.STATIC&&v.type&pt.KINEMATIC||g.type&pt.KINEMATIC&&v.type&pt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],u),u.vadd(g.position,u);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],l),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);const R=v.shapes[x];if(!(y.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(d)>y.boundingSphereRadius+R.boundingSphereRadius)continue;let A=null;y.material&&R.material&&(A=i.getContactMaterial(y.material,R.material)||null),this.currentContactMaterial=A||m||i.defaultContactMaterial;const C=y.type|R.type,P=this[C];if(P){let E=!1;y.type<R.type?E=P.call(this,y,R,u,d,c,l,g,v,y,R,p):E=P.call(this,R,y,d,u,l,c,v,g,y,R,p),E&&p&&(i.shapeOverlapKeeper.set(y.id,R.id),i.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,i,s,o,r,a,c,l,u,d){if(d)return i.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,u);s.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,i,s,o,r,a,c,l,u,d){const h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),i.vsub(s,oa),h.ni.scale(h.ni.dot(oa),gd),oa.vsub(gd,h.rj),-oa.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,g=h.rj;f.vadd(i,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,s,o,r,a,c,t,e,d)}sphereBox(t,e,i,s,o,r,a,c,l,u,d){const h=this.v3pool,f=zE;i.vsub(s,ra),e.getSideNormals(f,r);const g=t.radius;let v=!1;const m=BE,p=kE,_=HE;let y=null,x=0,R=0,A=0,C=null;for(let U=0,K=f.length;U!==K&&v===!1;U++){const G=NE;G.copy(f[U]);const Q=G.length();G.normalize();const at=ra.dot(G);if(at<Q+g&&at>0){const mt=UE,ot=FE;mt.copy(f[(U+1)%3]),ot.copy(f[(U+2)%3]);const Jt=mt.length(),$=ot.length();mt.normalize(),ot.normalize();const rt=ra.dot(mt),wt=ra.dot(ot);if(rt<Jt&&rt>-Jt&&wt<$&&wt>-$){const ht=Math.abs(at-Q-g);if((C===null||ht<C)&&(C=ht,R=rt,A=wt,y=Q,m.copy(G),p.copy(mt),_.copy(ot),x++,d))return!0}}}if(x){v=!0;const U=this.createContactEquation(a,c,t,e,l,u);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(y,m),p.scale(R,p),m.vadd(p,m),_.scale(A,_),m.vadd(_,U.rj),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let P=h.get();const E=OE;for(let U=0;U!==2&&!v;U++)for(let K=0;K!==2&&!v;K++)for(let G=0;G!==2&&!v;G++)if(P.set(0,0,0),U?P.vadd(f[0],P):P.vsub(f[0],P),K?P.vadd(f[1],P):P.vsub(f[1],P),G?P.vadd(f[2],P):P.vsub(f[2],P),s.vadd(P,E),E.vsub(i,E),E.lengthSquared()<g*g){if(d)return!0;v=!0;const Q=this.createContactEquation(a,c,t,e,l,u);Q.ri.copy(E),Q.ri.normalize(),Q.ni.copy(Q.ri),Q.ri.scale(g,Q.ri),Q.rj.copy(P),Q.ri.vadd(i,Q.ri),Q.ri.vsub(a.position,Q.ri),Q.rj.vadd(s,Q.rj),Q.rj.vsub(c.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}h.release(P),P=null;const M=h.get(),L=h.get(),k=h.get(),D=h.get(),z=h.get(),B=f.length;for(let U=0;U!==B&&!v;U++)for(let K=0;K!==B&&!v;K++)if(U%3!==K%3){f[K].cross(f[U],M),M.normalize(),f[U].vadd(f[K],L),k.copy(i),k.vsub(L,k),k.vsub(s,k);const G=k.dot(M);M.scale(G,D);let Q=0;for(;Q===U%3||Q===K%3;)Q++;z.copy(i),z.vsub(D,z),z.vsub(L,z),z.vsub(s,z);const at=Math.abs(G),mt=z.length();if(at<f[Q].length()&&mt<g){if(d)return!0;v=!0;const ot=this.createContactEquation(a,c,t,e,l,u);L.vadd(D,ot.rj),ot.rj.copy(ot.rj),z.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(s,ot.ri),ot.ri.vsub(i,ot.ri),ot.ri.normalize(),ot.ri.scale(g,ot.ri),ot.ri.vadd(i,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}h.release(M,L,k,D,z)}planeBox(t,e,i,s,o,r,a,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,s,o,r,a,c,t,e,d)}convexConvex(t,e,i,s,o,r,a,c,l,u,d,h,f){const g=nw;if(!(i.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,o,s,r,g,h,f)){const v=[],m=iw;t.clipAgainstHull(i,o,e,s,r,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(d)return!0;const y=this.createContactEquation(a,c,t,e,l,u),x=y.ri,R=y.rj;g.negate(y.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),R.copy(v[_].point),x.vsub(i,x),R.vsub(s,R),x.vadd(i,x),x.vsub(a.position,x),R.vadd(s,R),R.vsub(c.position,R),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,i,s,o,r,a,c,l,u,d){const h=this.v3pool;i.vsub(s,VE);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=XE;r.vmult(y,x),s.vadd(x,x);const R=qE;if(x.vsub(i,R),R.lengthSquared()<m*m){if(d)return!0;p=!0;const A=this.createContactEquation(a,c,t,e,l,u);A.ri.copy(R),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(m,A.ri),x.vsub(s,A.rj),A.ri.vadd(i,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(s,A.rj),A.rj.vsub(c.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&p===!1;_++){const x=f[_],R=g[_],A=YE;r.vmult(x,A);const C=ZE;r.vmult(v[R[0]],C),C.vadd(s,C);const P=KE;A.scale(-m,P),i.vadd(P,P);const E=$E;P.vsub(C,E);const M=E.dot(A),L=jE;if(i.vsub(C,L),M<0&&L.dot(A)>0){const k=[];for(let D=0,z=R.length;D!==z;D++){const B=h.get();r.vmult(v[R[D]],B),s.vadd(B,B),k.push(B)}if(DE(k,A,i)){if(d)return!0;p=!0;const D=this.createContactEquation(a,c,t,e,l,u);A.scale(-m,D.ri),A.negate(D.ni);const z=h.get();A.scale(-M,z);const B=h.get();A.scale(-m,B),i.vsub(s,D.rj),D.rj.vadd(B,D.rj),D.rj.vadd(z,D.rj),D.rj.vadd(s,D.rj),D.rj.vsub(c.position,D.rj),D.ri.vadd(i,D.ri),D.ri.vsub(a.position,D.ri),h.release(z),h.release(B),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let U=0,K=k.length;U!==K;U++)h.release(k[U]);return}else for(let D=0;D!==R.length;D++){const z=h.get(),B=h.get();r.vmult(v[R[(D+1)%R.length]],z),r.vmult(v[R[(D+2)%R.length]],B),s.vadd(z,z),s.vadd(B,B);const U=GE;B.vsub(z,U);const K=WE;U.unit(K);const G=h.get(),Q=h.get();i.vsub(z,Q);const at=Q.dot(K);K.scale(at,G),G.vadd(z,G);const mt=h.get();if(G.vsub(i,mt),at>0&&at*at<U.lengthSquared()&&mt.lengthSquared()<m*m){if(d)return!0;const ot=this.createContactEquation(a,c,t,e,l,u);G.vsub(s,ot.rj),G.vsub(i,ot.ni),ot.ni.normalize(),ot.ni.scale(m,ot.ri),ot.rj.vadd(s,ot.rj),ot.rj.vsub(c.position,ot.rj),ot.ri.vadd(i,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let Jt=0,$=k.length;Jt!==$;Jt++)h.release(k[Jt]);h.release(z),h.release(B),h.release(G),h.release(mt),h.release(Q);return}h.release(z),h.release(B),h.release(G),h.release(mt),h.release(Q)}for(let D=0,z=k.length;D!==z;D++)h.release(k[D])}}}planeConvex(t,e,i,s,o,r,a,c,l,u,d){const h=JE,f=QE;f.set(0,0,1),o.vmult(f,f);let g=0;const v=tw;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),r.vmult(h,h),s.vadd(h,h),h.vsub(i,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u),y=ew;f.scale(f.dot(v),y),h.vsub(y,y),y.vsub(i,_.ri),_.ni.copy(f),h.vsub(s,_.rj),_.ri.vadd(i,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(s,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,s,o,r,a,c,t,e,d)}sphereHeightfield(t,e,i,s,o,r,a,c,l,u,d){const h=e.data,f=t.radius,g=e.elementSize,v=mw,m=pw;ae.pointToLocalFrame(s,r,i,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(_<0||x<0||p>h.length||y>h[0].length)return;p<0&&(p=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),p>=h.length&&(p=h.length-1),_>=h.length&&(_=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const R=[];e.getRectMinMax(p,y,_,x,R);const A=R[0],C=R[1];if(m.z-f>C||m.z+f<A)return;const P=this.result;for(let E=p;E<_;E++)for(let M=y;M<x;M++){const L=P.length;let k=!1;if(e.getConvexTrianglePillar(E,M,!1),ae.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,i,v,o,r,a,c,t,e,d)),d&&k||(e.getConvexTrianglePillar(E,M,!0),ae.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,i,v,o,r,a,c,t,e,d)),d&&k))return!0;if(P.length-L>2)return}}boxHeightfield(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,s,o,r,a,c,t,e,d)}convexHeightfield(t,e,i,s,o,r,a,c,l,u,d){const h=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=dw,m=fw,p=hw;ae.pointToLocalFrame(s,r,i,p);let _=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,R=Math.ceil((p.y+g)/f)+1;if(y<0||R<0||_>h.length||x>h[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),R<0&&(R=0),_>=h.length&&(_=h.length-1),y>=h.length&&(y=h.length-1),R>=h[0].length&&(R=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const A=[];e.getRectMinMax(_,x,y,R,A);const C=A[0],P=A[1];if(!(p.z-g>P||p.z+g<C))for(let E=_;E<y;E++)for(let M=x;M<R;M++){let L=!1;if(e.getConvexTrianglePillar(E,M,!1),ae.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,v,o,r,a,c,null,null,d,m,null)),d&&L||(e.getConvexTrianglePillar(E,M,!0),ae.pointToWorldFrame(s,r,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,v,o,r,a,c,null,null,d,m,null)),d&&L))return!0}}sphereParticle(t,e,i,s,o,r,a,c,l,u,d){const h=aw;if(h.set(0,0,1),s.vsub(i,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,i,s,o,r,a,c,l,u,d){const h=sw;h.set(0,0,1),a.quaternion.vmult(h,h);const f=ow;if(s.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(c,a,e,t,l,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=rw;h.scale(h.dot(s),m),s.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,i,s,o,r,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,s,o,r,a,c,t,e,d)}convexParticle(t,e,i,s,o,r,a,c,l,u,d){let h=-1;const f=lw,g=uw;let v=null;const m=cw;if(m.copy(s),m.vsub(i,m),o.conjugate(vd),vd.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let p=0,_=t.faces.length;p!==_;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];s.vsub(y[0],_d);const R=-x.dot(_d);if(v===null||Math.abs(R)<Math.abs(v)){if(d)return!0;v=R,h=p,f.copy(x)}}if(h!==-1){const p=this.createContactEquation(c,a,e,t,l,u);f.scale(v,g),g.vadd(s,g),g.vsub(i,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,y=p.rj;_.vadd(s,_),_.vsub(c.position,_),y.vadd(i,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,s,o,r,a,c,l,u,d){return this.convexHeightfield(e,t,s,i,r,o,c,a,l,u,d)}particleCylinder(t,e,i,s,o,r,a,c,l,u,d){return this.convexParticle(e,t,s,i,r,o,c,a,l,u,d)}sphereTrimesh(t,e,i,s,o,r,a,c,l,u,d){const h=xE,f=yE,g=ME,v=SE,m=EE,p=wE,_=RE,y=_E,x=gE,R=CE;ae.pointToLocalFrame(s,r,i,m);const A=t.radius;_.lowerBound.set(m.x-A,m.y-A,m.z-A),_.upperBound.set(m.x+A,m.y+A,m.z+A),e.getTrianglesInAABB(_,R);const C=vE,P=t.radius*t.radius;for(let D=0;D<R.length;D++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[R[D]*3+z],C),C.vsub(m,x),x.lengthSquared()<=P){if(y.copy(C),ae.pointToWorldFrame(s,r,y,C),C.vsub(i,x),d)return!0;let B=this.createContactEquation(a,c,t,e,l,u);B.ni.copy(x),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(i,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(C),B.rj.vsub(c.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let D=0;D<R.length;D++)for(let z=0;z<3;z++){e.getVertex(e.indices[R[D]*3+z],h),e.getVertex(e.indices[R[D]*3+(z+1)%3],f),f.vsub(h,g),m.vsub(f,p);const B=p.dot(g);m.vsub(h,p);let U=p.dot(g);if(U>0&&B<0&&(m.vsub(h,p),v.copy(g),v.normalize(),U=p.dot(v),v.scale(U,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(d)return!0;const G=this.createContactEquation(a,c,t,e,l,u);p.vsub(m,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(i,G.ri),G.ri.vsub(a.position,G.ri),ae.pointToWorldFrame(s,r,p,p),p.vsub(c.position,G.rj),ae.vectorToWorldFrame(r,G.ni,G.ni),ae.vectorToWorldFrame(r,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const E=TE,M=bE,L=AE,k=mE;for(let D=0,z=R.length;D!==z;D++){e.getTriangleVertices(R[D],E,M,L),e.getNormal(R[D],k),m.vsub(E,p);let B=p.dot(k);if(k.scale(B,p),m.vsub(p,p),B=p.distanceTo(m),Ie.pointInTriangle(p,E,M,L)&&B<t.radius){if(d)return!0;let U=this.createContactEquation(a,c,t,e,l,u);p.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),ae.pointToWorldFrame(s,r,p,p),p.vsub(c.position,U.rj),ae.vectorToWorldFrame(r,U.ni,U.ni),ae.vectorToWorldFrame(r,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}R.length=0}planeTrimesh(t,e,i,s,o,r,a,c,l,u,d){const h=new S,f=dE;f.set(0,0,1),o.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const v=new S;v.copy(h),ae.pointToWorldFrame(s,r,v,h);const m=fE;if(h.vsub(i,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u);_.ni.copy(f);const y=pE;f.scale(m.dot(f),y),h.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Wi=new S,Cs=new S,Ps=new S,cE=new S,lE=new S,uE=new De,hE=new De,dE=new S,fE=new S,pE=new S,mE=new S,gE=new S;new S;const vE=new S,_E=new S,xE=new S,yE=new S,ME=new S,SE=new S,EE=new S,wE=new S,TE=new S,bE=new S,AE=new S,RE=new yn,CE=[],oa=new S,gd=new S,PE=new S,LE=new S,IE=new S;function DE(n,t,e){let i=null;const s=n.length;for(let o=0;o!==s;o++){const r=n[o],a=PE;n[(o+1)%s].vsub(r,a);const c=LE;a.cross(t,c);const l=IE;e.vsub(r,l);const u=c.dot(l);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const ra=new S,NE=new S,UE=new S,FE=new S,zE=[new S,new S,new S,new S,new S,new S],OE=new S,BE=new S,kE=new S,HE=new S,VE=new S,GE=new S,WE=new S,qE=new S,XE=new S,YE=new S,ZE=new S,KE=new S,$E=new S,jE=new S;new S;new S;const JE=new S,QE=new S,tw=new S,ew=new S,nw=new S,iw=new S,sw=new S,ow=new S,rw=new S,aw=new S,vd=new De,cw=new S;new S;const lw=new S,_d=new S,uw=new S,hw=new S,dw=new S,fw=[0],pw=new S,mw=new S;class xd{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const i=e;e=t,t=i}return t<<16|e}set(t,e){const i=this.getKey(t,e),s=this.current;let o=0;for(;i>s[o];)o++;if(i!==s[o]){for(let r=s.length-1;r>=o;r--)s[r+1]=s[r];s[o]=i}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const i=this.current,s=this.previous,o=i.length,r=s.length;let a=0;for(let c=0;c<o;c++){let l=!1;const u=i[c];for(;u>s[a];)a++;l=u===s[a],l||yd(t,u)}a=0;for(let c=0;c<r;c++){let l=!1;const u=s[c];for(;u>i[a];)a++;l=i[a]===u,l||yd(e,u)}}}function yd(n,t){n.push((t&4294901760)>>16,t&65535)}const Hc=(n,t)=>n<t?`${n}-${t}`:`${t}-${n}`;class gw{constructor(){this.data={keys:[]}}get(t,e){const i=Hc(t,e);return this.data[i]}set(t,e,i){const s=Hc(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=i}delete(t,e){const i=Hc(t,e),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const i=e.pop();delete t[i]}}}class vw extends Zf{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new ES,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new eE,this.constraints=[],this.narrowphase=new aE(this),this.collisionMatrix=new od,this.collisionMatrixPrevious=new od,this.bodyOverlapKeeper=new xd,this.shapeOverlapKeeper=new xd,this.contactmaterials=[],this.contactMaterialTable=new gw,this.defaultMaterial=new po("default"),this.defaultContactMaterial=new rs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof Aa?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,s){return i===void 0&&(i={}),i.mode=Ie.ALL,i.from=t,i.to=e,i.callback=s,Vc.intersectWorld(this,i)}raycastAny(t,e,i,s){return i===void 0&&(i={}),i.mode=Ie.ANY,i.from=t,i.to=e,i.result=s,Vc.intersectWorld(this,i)}raycastClosest(t,e,i,s){return i===void 0&&(i={}),i.mode=Ie.CLOSEST,i.from=t,i.to=e,i.result=s,Vc.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,i=this.bodies,s=i.indexOf(t);if(s!==-1){i.splice(s,1);for(let o=0;o!==i.length;o++)i[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let i=0;i<e.length;i++){const s=e[i].shapes;for(let o=0;o<s.length;o++){const r=s[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const i=Ue.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=i-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ue.now();let o=0;for(;this.accumulator>=t&&o<i&&(this.internalStep(t),this.accumulator-=t,o++,!(Ue.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,i=Sw,s=Ew,o=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=pt.DYNAMIC;let h=-1/0;const f=this.constraints,g=Mw;c.length();const v=c.x,m=c.y,p=c.z;let _=0;for(l&&(h=Ue.now()),_=0;_!==o;_++){const D=r[_];if(D.type===d){const z=D.force,B=D.mass;z.x+=B*v,z.y+=B*m,z.z+=B*p}}for(let D=0,z=this.subsystems.length;D!==z;D++)this.subsystems[D].update();l&&(h=Ue.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),l&&(u.broadphase=Ue.now()-h);let y=f.length;for(_=0;_!==y;_++){const D=f[_];if(!D.collideConnected)for(let z=i.length-1;z>=0;z-=1)(D.bodyA===i[z]&&D.bodyB===s[z]||D.bodyB===i[z]&&D.bodyA===s[z])&&(i.splice(z,1),s.splice(z,1))}this.collisionMatrixTick(),l&&(h=Ue.now());const x=yw,R=e.length;for(_=0;_!==R;_++)x.push(e[_]);e.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,e,x,this.frictionEquations,g),l&&(u.narrowphase=Ue.now()-h),l&&(h=Ue.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let D=0;D!==C;D++){const z=e[D],B=z.bi,U=z.bj,K=z.si,G=z.sj;let Q;if(B.material&&U.material?Q=this.getContactMaterial(B.material,U.material)||this.defaultContactMaterial:Q=this.defaultContactMaterial,Q.friction,B.material&&U.material&&(B.material.friction>=0&&U.material.friction>=0&&B.material.friction*U.material.friction,B.material.restitution>=0&&U.material.restitution>=0&&(z.restitution=B.material.restitution*U.material.restitution)),a.addEquation(z),B.allowSleep&&B.type===pt.DYNAMIC&&B.sleepState===pt.SLEEPING&&U.sleepState===pt.AWAKE&&U.type!==pt.STATIC){const at=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),mt=U.sleepSpeedLimit**2;at>=mt*2&&(B.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===pt.DYNAMIC&&U.sleepState===pt.SLEEPING&&B.sleepState===pt.AWAKE&&B.type!==pt.STATIC){const at=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),mt=B.sleepSpeedLimit**2;at>=mt*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,U,!0),this.collisionMatrixPrevious.get(B,U)||(Co.body=U,Co.contact=z,B.dispatchEvent(Co),Co.body=B,U.dispatchEvent(Co)),this.bodyOverlapKeeper.set(B.id,U.id),this.shapeOverlapKeeper.set(K.id,G.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Ue.now()-h,h=Ue.now()),_=0;_!==o;_++){const D=r[_];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const D=f[_];D.update();for(let z=0,B=D.equations.length;z!==B;z++){const U=D.equations[z];a.addEquation(U)}}a.solve(t,this),l&&(u.solve=Ue.now()-h),a.removeAllEquations();const P=Math.pow;for(_=0;_!==o;_++){const D=r[_];if(D.type&d){const z=P(1-D.linearDamping,t),B=D.velocity;B.scale(z,B);const U=D.angularVelocity;if(U){const K=P(1-D.angularDamping,t);U.scale(K,U)}}}this.dispatchEvent(xw),l&&(h=Ue.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==o;_++)r[_].integrate(t,M,L);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Ue.now()-h),this.stepnumber+=1,this.dispatchEvent(_w);let k=!0;if(this.allowSleep)for(k=!1,_=0;_!==o;_++){const D=r[_];D.sleepTick(this.time),D.sleepState!==pt.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ni,ii),t){for(let o=0,r=ni.length;o<r;o+=2)Po.bodyA=this.getBodyById(ni[o]),Po.bodyB=this.getBodyById(ni[o+1]),this.dispatchEvent(Po);Po.bodyA=Po.bodyB=null}if(e){for(let o=0,r=ii.length;o<r;o+=2)Lo.bodyA=this.getBodyById(ii[o]),Lo.bodyB=this.getBodyById(ii[o+1]),this.dispatchEvent(Lo);Lo.bodyA=Lo.bodyB=null}ni.length=ii.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(ni,ii),i){for(let o=0,r=ni.length;o<r;o+=2){const a=this.getShapeById(ni[o]),c=this.getShapeById(ni[o+1]);si.shapeA=a,si.shapeB=c,a&&(si.bodyA=a.body),c&&(si.bodyB=c.body),this.dispatchEvent(si)}si.bodyA=si.bodyB=si.shapeA=si.shapeB=null}if(s){for(let o=0,r=ii.length;o<r;o+=2){const a=this.getShapeById(ii[o]),c=this.getShapeById(ii[o+1]);oi.shapeA=a,oi.shapeB=c,a&&(oi.bodyA=a.body),c&&(oi.bodyB=c.body),this.dispatchEvent(oi)}oi.bodyA=oi.bodyB=oi.shapeA=oi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let i=0;i!==e;i++){const s=t[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new yn;const Vc=new Ie,Ue=globalThis.performance||{};if(!Ue.now){let n=Date.now();Ue.timing&&Ue.timing.navigationStart&&(n=Ue.timing.navigationStart),Ue.now=()=>Date.now()-n}new S;const _w={type:"postStep"},xw={type:"preStep"},Co={type:pt.COLLIDE_EVENT_NAME,body:null,contact:null},yw=[],Mw=[],Sw=[],Ew=[],ni=[],ii=[],Po={type:"beginContact",bodyA:null,bodyB:null},Lo={type:"endContact",bodyA:null,bodyB:null},si={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},oi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xn=document.querySelector("#game-canvas");document.querySelector("#mobile-controls");const Ze=document.querySelector("#mobile-move-zone"),Ai=document.querySelector("#mobile-look-zone"),er=document.querySelector("#mobile-use-button"),hu=document.querySelector("#mobile-shield-button"),ka=document.querySelector("#mobile-fire-button"),ww=document.querySelector("#hp-value"),Tw=document.querySelector("#energy-value"),bw=document.querySelector("#ammo-value"),Aw=document.querySelector("#cargo-value"),Rw=document.querySelector("#threat-value"),Cw=document.querySelector("#alarm-value"),Md=document.querySelector("#threat-radar"),Pw=document.querySelector("#threat-radar-arrow"),Lw=document.querySelector("#threat-radar-label"),Iw=document.querySelector("#interaction-prompt"),Dw=document.querySelector("#interaction-prompt-title"),Nw=document.querySelector("#interaction-prompt-copy"),Io=document.querySelector("#objective-label"),Do=document.querySelector("#objective-meter-fill"),No=document.querySelector("#extract-value"),Uw=document.querySelector("#settings-button"),Ha=document.querySelector("#settings-panel"),Fw=document.querySelector("#settings-close-button"),Si=document.querySelector("#fullscreen-button"),Ra=document.querySelector("#camera-sensitivity-input"),zw=document.querySelector("#camera-sensitivity-value"),Ow=document.querySelector("#ready-panel"),Bw=document.querySelector("#ready-button"),Va=document.querySelector("#restart-button"),du=document.querySelector("#result-panel"),kw=document.querySelector("#result-kicker"),Hw=document.querySelector("#result-title"),Vw=document.querySelector("#result-copy"),Gw=document.querySelector("#result-restart-button"),Ww=!1,qw=1,Xw=!0,es=new pv,qn=new jM({canvas:xn,antialias:Xw,preserveDrawingBuffer:!1,powerPreference:"low-power"});qn.shadowMap.enabled=Ww;qn.autoClear=!0;qn.setPixelRatio(Math.min(window.devicePixelRatio,qw));qn.outputColorSpace=Fe;qn.toneMapping=ci;qn.toneMappingExposure=1;const Ot=new Mg;Ot.background=new Yt(12180735);Ot.fog=null;qn.setClearColor(Ot.background,1);const Xe=new wn(52,window.innerWidth/window.innerHeight,.1,320),Sd=new b,Ed=new b,wd=new b,Yw=2,hn=new b(.67,0,-.74).normalize();let nr=Math.atan2(hn.x,hn.z),Is=null;Ot.add(new dv(16777215,1.25));const jt=new vw({gravity:new S(0,0,0)});jt.broadphase=new Us(jt);jt.allowSleep=!0;const Xn=new po("dry"),Ca=new po("light-bouncy-rubber"),ip=new rs(Xn,Xn,{friction:0,restitution:0});jt.addContactMaterial(ip);jt.addContactMaterial(new rs(Ca,Xn,{friction:.16,restitution:.62}));jt.addContactMaterial(new rs(Ca,Ca,{friction:.08,restitution:.56}));jt.defaultContactMaterial=ip;const Ce=new Set,de={movePointerId:null,moveStartX:0,moveStartY:0,moveRight:0,moveForward:0,moveSprint:!1,lookPointerId:null,lookLastX:0},Td=new b(0,0,-1),ir=new b(0,1,0),Li=144,bn=Li/2,Vs=14,bd=Li*5,sp=-.1,Zw=380,Gc=2.4,Ls=1.8,Ad=18,Rd=1,Kw=2,$w=2.45,jw=2.05,aa=34,Jw=1.4,Cd=-8,Qw=-5.5,Ri=new b(-64,0,56),t1=new b(64,0,-58),e1=new b(11.2,0,-12.7),op=[new b(10,0,-22),new b(22,0,-16),new b(30,0,-30),new b(4,0,-36)],n1=[new b(-42,0,24),new b(44,0,30),new b(-34,0,-44),new b(42,0,-44)],Ga=2.14,to=Ga/2,rp=.08,Wa=4,i1=[0,1/3,2/3,1],Pd=162,ui=.175,s1=ui*2,Uo=s1,o1=.48,r1=-8.4,fu=2,Ho=2,ca=1,Ld=.58,sr=.36,ap=.48,cp=.6,or=sr,Pa=ap,Yn=cp,eo=sr,rr=ap,je=cp,pu=12,a1=3,c1=4,lp=eo,Id=30,Dd=2.2,up=30,hp=15,l1=Math.cos(Lt.degToRad(30)),u1=Math.cos(Lt.degToRad(35)),h1=up,la=.09,dp=2.4,d1=3.2,fp=4,f1=(dp+fp)/2,pp=2.4,p1=3.2,mp=4.4,m1=(pp+mp)/2,gp=6,Nd=1.2,g1=.35,v1=.8,_1=Math.PI/2.8,Ud=Math.PI*2,Gs=36,x1=1.05,Fd=1,zd=1,qa=1.2,va=.4,Od=.4,y1=qa,Ws=.8,M1=3.2,S1=1.25,La=2.45,Ei=.05,Bd=.58,E1=50,w1=35,kd=1,mr=30,T1=.105,b1=1.45,A1=Lt.degToRad(1.25),R1=3,C1=.16,P1=1.15,L1=Lt.degToRad(2.4),vp=24,I1=.55,Hd=1.25,D1=52,N1=14,U1=13,F1=2.2,_p=9,z1=6,O1=42,B1=18,ar=18,ns=58,k1=86,xp=5,H1=4.8,yp=38,V1=72,cr=3.2,G1=1.45,W1=ns-1,q1=10,X1=2,Y1=1,Z1=.5,K1=1.2,$1=Math.cos(Lt.degToRad(35)),Xa=.6,_a=.2,Mp=.2,xa=_a+Mp,j1=Xa,J1=1.1,Q1=.055,tT=.2,eT=.173,Wc=4,Vd=46,nT=1.65,iT=.012,sT=.095,oT=2.8,rT=7.2,aT=.44,cT=.3,lT=1.28,uT=.34,hT=.72,qc=3.2,Sp=.55,dT=.6,Gd=1.15,Ep=.45,fT=.6,Wd=.85,mu=or,pT=3.2,mT=4,wp=1,gT=1,qd=2,Tp=3,Xd=mu*2+Ei*2+.14,Yd=1.35,zl=.12,vT=mu+zl/2+.04,_T=.62,bp=.22,xT=12,Zd=58,yT=.9,MT=.0048,ST=.55,ET=.72,wT=2,pe=1e-6,Ap=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"]),O={phase:"ready",hp:pu,energy:wp,cargo:0,cargoNeeded:op.length,extractionProgress:0,shootCooldown:0,fireHeld:!1,weaponAmmo:mr,reloadTimer:0,meleeCooldown:0,alarmLevel:0,alarmHoldTimer:0,alarmPulseTimer:0,reinforcementTimer:cr,lastNoisePosition:Ri.clone(),radioDisabled:!1,ambientRustleTimer:2.5,resultShown:!1,resultDelayTimer:0,settingsOpen:!1,godMode:!1,invisibleToEnemies:!1},TT=[{id:"ranged-beach-ridge",type:"ranged",x:-46,z:40,patrolRadiusX:8.2,patrolRadiusZ:4,patrolOffset:.2},{id:"ranged-north-patrol",type:"ranged",x:-18,z:34,patrolRadiusX:9,patrolRadiusZ:5.4,patrolOffset:.9},{id:"ranged-radio-tower",type:"ranged",x:16,z:20,patrolRadiusX:4.8,patrolRadiusZ:4.2,patrolOffset:1.6},{id:"ranged-dock-overwatch",type:"ranged",x:52,z:24,patrolRadiusX:5.2,patrolRadiusZ:7,patrolOffset:2.3},{id:"melee-jungle-flanker",type:"melee",x:-30,z:8,patrolRadiusX:7.4,patrolRadiusZ:6,patrolOffset:3},{id:"ranged-west-gate",type:"ranged",x:-8,z:-6,patrolRadiusX:6.8,patrolRadiusZ:5,patrolOffset:3.7},{id:"ranged-camp-north",type:"ranged",x:16,z:-10,patrolRadiusX:5.8,patrolRadiusZ:5.2,patrolOffset:4.4},{id:"ranged-camp-east",type:"ranged",x:34,z:-14,patrolRadiusX:6.8,patrolRadiusZ:4.8,patrolOffset:5.1},{id:"melee-camp-runner",type:"melee",x:10,z:-28,patrolRadiusX:5.4,patrolRadiusZ:6.8,patrolOffset:5.8},{id:"ranged-camp-south",type:"ranged",x:26,z:-34,patrolRadiusX:6.4,patrolRadiusZ:5,patrolOffset:6.5},{id:"ranged-bunker-left",type:"ranged",x:-12,z:-40,patrolRadiusX:5.2,patrolRadiusZ:5.6,patrolOffset:7.2},{id:"melee-bunker-guard",type:"melee",x:2,z:-48,patrolRadiusX:5,patrolRadiusZ:4.8,patrolOffset:7.9},{id:"ranged-south-ridge",type:"ranged",x:42,z:-48,patrolRadiusX:8,patrolRadiusZ:5.6,patrolOffset:8.6},{id:"ranged-extraction-watch",type:"ranged",x:58,z:-54,patrolRadiusX:4.8,patrolRadiusZ:4.6,patrolOffset:9.3},{id:"melee-ravine-hunter",type:"melee",x:-44,z:-22,patrolRadiusX:7.2,patrolRadiusZ:6.4,patrolOffset:10},{id:"ranged-west-ridge",type:"ranged",x:-56,z:-8,patrolRadiusX:6.8,patrolRadiusZ:6,patrolOffset:10.7},{id:"reserve-north-rifle",type:"ranged",reserve:!0,x:-30,z:62,patrolRadiusX:5,patrolRadiusZ:4.2,patrolOffset:11.4},{id:"reserve-east-rifle",type:"ranged",reserve:!0,x:62,z:4,patrolRadiusX:4.8,patrolRadiusZ:5.6,patrolOffset:12.1},{id:"reserve-south-melee",type:"melee",reserve:!0,x:44,z:-62,patrolRadiusX:5.2,patrolRadiusZ:4.8,patrolOffset:12.8},{id:"reserve-west-rifle",type:"ranged",reserve:!0,x:-62,z:-36,patrolRadiusX:4.8,patrolRadiusZ:5,patrolOffset:13.5}],Ya={mouseSensitivity:Number(Ra.value)},no=[],ya=[],io=[],so=[],oo=[],Ia=[],Ii=[],Ol=[],Fo=new He,zo=new He;let Kd=-1/0;const Kn=[],Rp=[],gu=[],gr=[],Cp=[],Gt={player:3721336,enemy:8275416,enemyGlow:14842111,playerShot:16179854,playerShotGlow:15775821,enemyShot:14842111,enemyShotGlow:8275416,glass:10480383,glassEdge:14154751,crate:10187841,concrete:7830130,teal:4575676},Bl=[null,Xc(1),Xc(2),Xc(3)];let mn=null,Fs=null;function bT(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d"),e=n.width,i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#3aa641"),i.addColorStop(.42,"#32963a"),i.addColorStop(1,"#2d8834"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let r=0;r<92;r+=1){const a=Math.random()*e,c=Math.random()*e,l=34+Math.random()*132,u=18+Math.random()*84;t.fillStyle=Math.random()>.36?`rgba(63, 174, 70, ${.075+Math.random()*.075})`:`rgba(33, 117, 43, ${.065+Math.random()*.07})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<44;r+=1){const a=Math.random()*e,c=Math.random()*e,l=16+Math.random()*82,u=10+Math.random()*46;t.fillStyle=`rgba(93, 119, 57, ${.05+Math.random()*.055})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<16;r+=1){const a=Math.random()*e,c=Math.random()*e,l=28+Math.random()*118,u=14+Math.random()*58;t.fillStyle=`rgba(118, 102, 55, ${.07+Math.random()*.055})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<420;r+=1){const a=Math.random()*e,c=Math.random()*e,l=18+Math.random()*54,u=-.5+Math.random();t.strokeStyle=Math.random()>.28?`rgba(80, 179, 75, ${.06+Math.random()*.075})`:`rgba(35, 118, 42, ${.055+Math.random()*.065})`,t.lineWidth=2+Math.random()*2.4,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(u)*l*.45,c+Math.sin(u)*l*.45+(Math.random()-.5)*16,a+Math.cos(u)*l,c+Math.sin(u)*l),t.stroke()}for(let r=0;r<620;r+=1){const a=.035+Math.random()*.06;t.fillStyle=Math.random()>.5?`rgba(65, 161, 68, ${a})`:`rgba(24, 93, 31, ${a})`;const c=3+Math.random()*7;t.beginPath(),t.ellipse(Math.random()*e,Math.random()*e,c,c*(.55+Math.random()*.7),Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let r=0;r<130;r+=1){const a=Math.random()*e,c=Math.random()*e,l=26+Math.random()*82;t.strokeStyle=`rgba(172, 161, 86, ${.035+Math.random()*.04})`,t.lineWidth=1+Math.random()*1.8,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+l*.45,c-13+Math.random()*26,a+l,c-10+Math.random()*20),t.stroke()}const s=t.createRadialGradient(e*.5,e*.5,e*.18,e*.5,e*.5,e*.78);s.addColorStop(0,"rgba(255, 255, 255, 0.035)"),s.addColorStop(.72,"rgba(0, 0, 0, 0)"),s.addColorStop(1,"rgba(0, 0, 0, 0.09)"),t.fillStyle=s,t.fillRect(0,0,e,e);const o=new lo(n);return o.wrapS=ji,o.wrapT=ji,o.repeat.set(1,1),o.minFilter=wi,o.magFilter=Nn,o.generateMipmaps=!0,o.colorSpace=Fe,o}function AT(n){const t=n.getAttribute("position"),e=new Float32Array(t.count*2);for(let i=0;i<t.count;i+=1)e[i*2]=(t.getX(i)+bn)/Li,e[i*2+1]=(t.getY(i)+bn)/Li;n.setAttribute("uv",new ln(e,2))}function RT(){const n=document.createElement("canvas");n.width=1024,n.height=512;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,n.height);e.addColorStop(0,"#78bfff"),e.addColorStop(.48,"#b9ddff"),e.addColorStop(.82,"#eef8ff"),e.addColorStop(1,"#dff3ff"),t.fillStyle=e,t.fillRect(0,0,n.width,n.height);const i=(o,r,a,c)=>{t.save(),t.globalAlpha=c,t.fillStyle="#ffffff",t.shadowColor="rgba(255, 255, 255, 0.32)",t.shadowBlur=18*a,[[0,0,54,17],[36,-9,42,20],[78,-2,50,18],[116,4,36,14],[54,9,72,16]].forEach(([l,u,d,h])=>{t.beginPath(),t.ellipse(o+l*a,r+u*a,d*a,h*a,0,0,Math.PI*2),t.fill()}),t.restore()};[[76,128,.72,.42],[240,92,.52,.36],[392,148,.82,.34],[584,112,.62,.38],[748,156,.86,.35],[910,96,.58,.32],[1e3,174,.66,.28]].forEach(([o,r,a,c])=>i(o,r,a,c));const s=new lo(n);return s.colorSpace=Fe,s}function CT(){const n=document.createElement("canvas");n.width=512,n.height=512;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,n.width,n.height);e.addColorStop(0,"#1e8fc2"),e.addColorStop(.46,"#1f77a7"),e.addColorStop(1,"#145b86"),t.fillStyle=e,t.fillRect(0,0,n.width,n.height);for(let s=0;s<58;s+=1){const o=Math.random()*n.height,r=Math.random()*n.width,a=42+Math.random()*120;t.strokeStyle=`rgba(218, 247, 255, ${.08+Math.random()*.12})`,t.lineWidth=1+Math.random()*1.2,t.beginPath(),t.moveTo(r,o),t.bezierCurveTo(r+a*.28,o-7+Math.random()*14,r+a*.7,o-7+Math.random()*14,r+a,o),t.stroke()}const i=new lo(n);return i.wrapS=ji,i.wrapT=ji,i.repeat.set(18,18),i.colorSpace=Fe,i}function Xc(n){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d"),s=256/2,o=n*91.733,r=u=>{const d=Math.sin(o+u*47.123)*43758.5453;return d-Math.floor(d)};i.clearRect(0,0,256,256),i.globalCompositeOperation="source-over";const a=i.createRadialGradient(s,s,2,s,s,256*.5);a.addColorStop(0,`rgba(220, 252, 255, ${.18+n*.05})`),a.addColorStop(.48,"rgba(170, 230, 255, 0.08)"),a.addColorStop(1,"rgba(170, 230, 255, 0)"),i.fillStyle=a,i.fillRect(0,0,256,256),i.lineCap="round",i.lineJoin="round",i.shadowColor="rgba(190, 245, 255, 0.7)",i.shadowBlur=7;const c=4+n*3;for(let u=0;u<c;u+=1){const d=Math.PI*2*u/c+(r(u)-.5)*.7,h=256*(.15+n*.09+r(u+30)*.12),f=(r(u+60)-.5)*.55;i.beginPath(),i.moveTo(s,s);const g=h*(.45+r(u+90)*.18);i.lineTo(s+Math.cos(d+f*.45)*g,s+Math.sin(d+f*.45)*g),i.lineTo(s+Math.cos(d+f)*h,s+Math.sin(d+f)*h),i.strokeStyle="rgba(230, 253, 255, 0.88)",i.lineWidth=Math.max(1.2,3.2-n*.45),i.stroke();const v=n+1;for(let m=0;m<v;m+=1){const p=h*(.26+r(u*13+m)*.42),_=d+(r(u*19+m+7)>.5?1:-1)*(.48+r(u+m+16)*.55),y=h*(.18+r(u*17+m+21)*.22),x=s+Math.cos(d+f*.25)*p,R=s+Math.sin(d+f*.25)*p;i.beginPath(),i.moveTo(x,R),i.lineTo(x+Math.cos(_)*y,R+Math.sin(_)*y),i.strokeStyle="rgba(210, 245, 255, 0.62)",i.lineWidth=1.1,i.stroke()}}i.shadowBlur=0,i.strokeStyle="rgba(80, 170, 190, 0.34)",i.lineWidth=1,i.beginPath(),i.arc(s,s,256*(.045+n*.018),0,Math.PI*2),i.stroke();const l=new lo(e);return l.colorSpace=Fe,l}function as({create:n=!0}={}){var e;const t=window.AudioContext||window.webkitAudioContext;return!t||!mn&&!n?null:(mn||(mn=new t),mn.state==="suspended"&&((e=navigator.userActivation)!=null&&e.isActive)&&mn.resume().catch(()=>{}),mn)}function Pp(){(mn==null?void 0:mn.state)==="suspended"&&mn.resume().catch(()=>{})}function vu(){var n;return as({create:!!(mn||(n=navigator.userActivation)!=null&&n.isActive)})}function Zt({frequency:n,endFrequency:t=n,type:e="sine",duration:i=.1,volume:s=.08,when:o=0}){const r=vu();if(!r)return;const a=r.currentTime+o,c=r.createOscillator(),l=r.createGain();c.type=e,c.frequency.setValueAtTime(n,a),c.frequency.exponentialRampToValueAtTime(Math.max(1,t),a+i),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(s,a+Math.min(.012,i*.25)),l.gain.exponentialRampToValueAtTime(1e-4,a+i),c.connect(l).connect(r.destination),c.start(a),c.stop(a+i+.02)}function Re({duration:n=.08,volume:t=.08,filterType:e="highpass",frequency:i=900,when:s=0}){const o=vu();if(!o)return;const r=o.currentTime+s,a=o.createBuffer(1,Math.floor(o.sampleRate*n),o.sampleRate),c=a.getChannelData(0);for(let h=0;h<c.length;h+=1){const f=h/c.length;c[h]=(Math.random()*2-1)*Math.pow(1-f,1.8)}const l=o.createBufferSource(),u=o.createBiquadFilter(),d=o.createGain();l.buffer=a,u.type=e,u.frequency.setValueAtTime(i,r),d.gain.setValueAtTime(1e-4,r),d.gain.exponentialRampToValueAtTime(t,r+Math.min(.01,n*.25)),d.gain.exponentialRampToValueAtTime(1e-4,r+n),l.connect(u).connect(d).connect(o.destination),l.start(r),l.stop(r+n)}function PT(n,t=3){const e=n.createBuffer(1,Math.floor(n.sampleRate*t),n.sampleRate),i=e.getChannelData(0);let s=0;for(let o=0;o<i.length;o+=1)s=s*.985+(Math.random()*2-1)*.015,i[o]=s+(Math.random()*2-1)*.08;return e}function LT(){const n=vu();if(!n||Fs)return;const t=n.createBufferSource();t.buffer=PT(n,4),t.loop=!0;const e=n.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(1180,n.currentTime),e.Q.setValueAtTime(.36,n.currentTime);const i=n.createBiquadFilter();i.type="highpass",i.frequency.setValueAtTime(95,n.currentTime);const s=n.createGain();s.gain.setValueAtTime(1e-4,n.currentTime),t.connect(i).connect(e).connect(s).connect(n.destination),t.start(),Fs={source:t,gain:s,lowpass:e,phase:Math.random()*Math.PI*2}}function IT(n){if(n<=Wc)return 1;if(n>=Vd)return 0;const t=(n-Wc)/(Vd-Wc);return Math.pow(1-Lt.clamp(t,0,1),nT)}function DT(n){if(!n)return 1;const t=Math.hypot(X.group.position.x-n.x,X.group.position.z-n.z);return IT(t)}function Lp(n,t){const i=(t?Lt.clamp(n,0,1.35):Lt.clamp(n,.18,1.35))*DT(t);return i<iT?0:i}function te(n,{intensity:t=1,pitch:e=1,position:i=null}={}){const s=Lp(t,i);s<=0||(n==="player-shot"?(Zt({frequency:540*e,endFrequency:250*e,type:"sawtooth",duration:.12,volume:.075*s}),Re({duration:.07,volume:.07*s,filterType:"highpass",frequency:1100})):n==="enemy-shot"?(Zt({frequency:780*e,endFrequency:1160*e,type:"square",duration:.095,volume:.055*s}),Re({duration:.055,volume:.052*s,filterType:"highpass",frequency:1700})):n==="reload"?(Zt({frequency:210*e,endFrequency:160*e,type:"triangle",duration:.08,volume:.042*s}),Re({duration:.12,volume:.04*s,filterType:"bandpass",frequency:820}),Zt({frequency:150*e,endFrequency:230*e,type:"sine",duration:.1,volume:.035*s,when:.14})):n==="weapon-empty"?Zt({frequency:320*e,endFrequency:220*e,type:"square",duration:.045,volume:.03*s}):n==="alarm"?(Zt({frequency:760*e,endFrequency:760*e,type:"square",duration:.14,volume:.045*s}),Zt({frequency:520*e,endFrequency:520*e,type:"square",duration:.14,volume:.04*s,when:.16}),Re({duration:.24,volume:.026*s,filterType:"bandpass",frequency:980})):n==="radio-sabotage"?(Zt({frequency:620*e,endFrequency:180*e,type:"sawtooth",duration:.18,volume:.05*s}),Re({duration:.18,volume:.046*s,filterType:"bandpass",frequency:1400}),Zt({frequency:120*e,endFrequency:72*e,type:"triangle",duration:.16,volume:.035*s,when:.16})):n==="spot"?(Zt({frequency:360*e,endFrequency:620*e,type:"triangle",duration:.11,volume:.05*s}),Zt({frequency:620*e,endFrequency:420*e,type:"sine",duration:.1,volume:.035*s,when:.08})):n==="ball-hit"?(Zt({frequency:250*e,endFrequency:145*e,type:"sine",duration:.08,volume:.055*s}),Re({duration:.055,volume:.038*s,filterType:"lowpass",frequency:900})):n==="ball-collision"?Zt({frequency:155*e,endFrequency:105*e,type:"triangle",duration:.055,volume:.026*s}):n==="ball-explosion"?(Zt({frequency:96*e,endFrequency:42*e,type:"sawtooth",duration:.18,volume:.095*s}),Zt({frequency:420*e,endFrequency:120*e,type:"triangle",duration:.12,volume:.035*s,when:.02}),Re({duration:.16,volume:.09*s,filterType:"lowpass",frequency:720})):n==="impact-static"?Re({duration:.09,volume:.07*s,filterType:"lowpass",frequency:560}):n==="impact-glass"?(Zt({frequency:1420*e,endFrequency:2320*e,type:"sine",duration:.11,volume:.042*s}),Re({duration:.06,volume:.034*s,filterType:"highpass",frequency:2600})):n==="enemy-damage"?(Zt({frequency:180*e,endFrequency:92*e,type:"triangle",duration:.11,volume:.075*s}),Re({duration:.045,volume:.04*s,filterType:"lowpass",frequency:700})):n==="player-damage"?(Zt({frequency:130*e,endFrequency:62*e,type:"sawtooth",duration:.16,volume:.09*s}),Re({duration:.075,volume:.055*s,filterType:"lowpass",frequency:520})):n==="shield-activate"?(Zt({frequency:360*e,endFrequency:820*e,type:"sine",duration:.16,volume:.06*s}),Re({duration:.08,volume:.028*s,filterType:"bandpass",frequency:1400})):n==="shield-hit"?(Zt({frequency:520*e,endFrequency:240*e,type:"triangle",duration:.1,volume:.06*s}),Re({duration:.055,volume:.032*s,filterType:"bandpass",frequency:980})):n==="shield-break"?(Zt({frequency:220*e,endFrequency:72*e,type:"sawtooth",duration:.16,volume:.07*s}),Re({duration:.12,volume:.055*s,filterType:"highpass",frequency:1800})):n==="enemy-death"?(Zt({frequency:120,endFrequency:48,type:"sawtooth",duration:.24,volume:.08*s}),Re({duration:.14,volume:.065*s,filterType:"lowpass",frequency:430})):n==="melee"?(Zt({frequency:110,endFrequency:70,type:"triangle",duration:.09,volume:.12*s}),Re({duration:.055,volume:.08*s,filterType:"lowpass",frequency:650})):n==="melee-swing"?(Zt({frequency:185*e,endFrequency:105*e,type:"sine",duration:.12,volume:.07*s}),Re({duration:.1,volume:.075*s,filterType:"bandpass",frequency:480})):n==="player-footstep"?(Zt({frequency:92*e,endFrequency:58*e,type:"triangle",duration:.055,volume:.032*s}),Re({duration:.04,volume:.026*s,filterType:"lowpass",frequency:420})):n==="enemy-footstep"?(Zt({frequency:74*e,endFrequency:48*e,type:"triangle",duration:.06,volume:.024*s}),Re({duration:.045,volume:.02*s,filterType:"lowpass",frequency:360})):n==="ambient-rustle"?(Re({duration:.32+Math.random()*.28,volume:.095*s,filterType:"bandpass",frequency:980+Math.random()*720}),Zt({frequency:210*e,endFrequency:135*e,type:"sine",duration:.22,volume:.024*s})):n==="loot"?(Zt({frequency:520,endFrequency:860,type:"sine",duration:.13,volume:.07*s}),Zt({frequency:780,endFrequency:1180,type:"sine",duration:.12,volume:.045*s,when:.055})):n==="win"?(Zt({frequency:420,endFrequency:560,duration:.12,volume:.06*s}),Zt({frequency:620,endFrequency:840,duration:.14,volume:.06*s,when:.08}),Zt({frequency:920,endFrequency:1240,duration:.18,volume:.055*s,when:.18})):n==="loss"?(Zt({frequency:260,endFrequency:150,type:"sawtooth",duration:.18,volume:.07*s}),Zt({frequency:150,endFrequency:70,type:"triangle",duration:.22,volume:.055*s,when:.14})):n==="player-death"?(Zt({frequency:220,endFrequency:82,type:"triangle",duration:.55,volume:.09*s}),Zt({frequency:146,endFrequency:64,type:"sine",duration:.7,volume:.055*s,when:.08}),Re({duration:.22,volume:.035*s,filterType:"lowpass",frequency:360})):n==="ui-start"?Zt({frequency:430,endFrequency:660,duration:.09,volume:.045*s}):n==="ui-pause"?Zt({frequency:330,endFrequency:230,duration:.06,volume:.035*s}):n==="ui-resume"&&Zt({frequency:360,endFrequency:520,duration:.07,volume:.035*s}))}function NT(n=null){var u;const t=as({create:!!((u=navigator.userActivation)!=null&&u.isActive)});if(!t)return;const e=Lp(1,n);if(e<=0)return;const i=t.currentTime,s=.34,o=t.createBuffer(1,Math.floor(t.sampleRate*s),t.sampleRate),r=o.getChannelData(0);for(let d=0;d<r.length;d+=1){const h=d/r.length;r[d]=(Math.random()*2-1)*Math.pow(1-h,2.8)}const a=t.createBufferSource();a.buffer=o;const c=t.createBiquadFilter();c.type="highpass",c.frequency.setValueAtTime(950,i),c.frequency.exponentialRampToValueAtTime(3200,i+s);const l=t.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.34*e,i+.012),l.gain.exponentialRampToValueAtTime(1e-4,i+s),a.connect(c).connect(l).connect(t.destination),a.start(i),a.stop(i+s),[860,1320,2460].forEach((d,h)=>{const f=t.createOscillator(),g=t.createGain();f.type=h===0?"triangle":"sine",f.frequency.setValueAtTime(d,i),f.frequency.exponentialRampToValueAtTime(d*1.55,i+.12),g.gain.setValueAtTime(1e-4,i),g.gain.exponentialRampToValueAtTime(.09*e/(h+1),i+.008),g.gain.exponentialRampToValueAtTime(1e-4,i+.18+h*.04),f.connect(g).connect(t.destination),f.start(i),f.stop(i+.24+h*.04)})}function _u(){O.ambientRustleTimer=Lt.randFloat(oT,rT)}function UT(n){if(!mn||!Fs)return;Pp();const t=mn.currentTime,e=O.phase==="running"&&!O.resultShown,i=O.settingsOpen,s=.82+Math.sin(es.elapsedTime*.23+Fs.phase)*.24,o=e&&!i?sT*s:.006;Fs.gain.gain.setTargetAtTime(o,t,.55),Fs.lowpass.frequency.setTargetAtTime(950+Math.sin(es.elapsedTime*.17)*220,t,1),Ae()&&(O.ambientRustleTimer-=n,O.ambientRustleTimer<=0&&(te("ambient-rustle",{intensity:Lt.randFloat(1.05,1.35),pitch:Lt.randFloat(.86,1.14)}),_u()))}function FT({position:n,size:t,color:e,roughness:i=.78,metalness:s=.02}){const o=new un(t.x,t.y,t.z),r=new Ve({color:e,roughness:i,metalness:s}),a=new Vt(o,r);return a.position.set(n.x,n.y,n.z),a.castShadow=!0,a.receiveShadow=!0,Ot.add(a),a}function zT(n){return typeof n=="string"&&(n.includes("cover")||n.includes("sandbag"))}function Ip({position:n,size:t,kind:e}){if(!zT(e))return;const i=new b(n.x,0,n.z);[new b(t.x/2+.72,0,0),new b(-t.x/2-.72,0,0),new b(0,0,t.z/2+.72),new b(0,0,-t.z/2-.72)].forEach(o=>{const r=i.clone().add(o);is(r.x,r.z,1.2)&&Rp.push({position:r,kind:e})})}function OT(n){var e;const t=(e=n==null?void 0:n.shapes)==null?void 0:e[0];return t!=null&&t.halfExtents?new b(t.halfExtents.x,t.halfExtents.y,t.halfExtents.z):null}function BT(n){return new b(n.position.x,n.position.y,n.position.z)}function xu(n){const t=OT(n.body);return t?{type:"box",center:BT(n.body),halfExtents:t}:null}function vr(n){var t,e;return!(n.invisible||(t=n.body.userData)!=null&&t.invisible||((e=n.body.userData)==null?void 0:e.kind)==="perimeter-wall")}function Za(n,t,e,i=0){const s=xu(e);return s?wm(n,t,s.center,s.halfExtents,i):null}function Dp(n,t,e,i=12){n.addShape(new QS(t,t,e,i)),n.addShape(new Fl(t),new S(0,e/2,0)),n.addShape(new Fl(t),new S(0,-e/2,0))}function Ye({position:n,size:t,color:e,kind:i="cover",roughness:s=.78,metalness:o=.02}){const r=FT({position:n,size:t,color:e,roughness:s,metalness:o}),a=new pt({mass:0,material:Xn,position:new S(n.x,n.y,n.z),shape:new Ui(new S(t.x/2,t.y/2,t.z/2))});return a.userData={kind:i},jt.addBody(a),Kn.push({mesh:r,body:a}),Ip({position:n,size:t,kind:i}),{mesh:r,body:a}}function kT({x:n,z:t,sx:e=1.6,sy:i=1,sz:s=1.4,color:o=7040351}){const r=new un(e,i,s),a=new Ve({color:o,roughness:.95,metalness:.02}),c=new Vt(r,a);c.position.set(n,i/2,t),c.castShadow=!0,c.receiveShadow=!0,Ot.add(c);const l=new pt({mass:0,material:Xn,position:new S(n,i/2,t),shape:new Ui(new S(e/2,i/2,s/2))});return l.userData={kind:"rock-cover"},jt.addBody(l),Kn.push({mesh:c,body:l}),Ip({position:{x:n,z:t},size:{x:e,z:s},kind:"rock-cover"}),{mesh:c,body:l}}function HT({x:n,z:t,scale:e=1,color:i=2916149}){const s=new Vt(new iu(.7,0),new $e({color:i}));return s.position.set(n,.32*e,t),s.rotation.set(0,Tn(n*.31+t*.77)*Math.PI*2,.08),s.scale.set(1.2*e,.56*e,.95*e),s.frustumCulled=!1,Ot.add(s),s}function VT({x:n,z:t,scale:e=1}){const i=1.52*e*1.3333333333333333,s=.24*e;Ye({position:{x:n,y:i/2,z:t},size:{x:s,y:i,z:s},color:7297845,kind:"tree-trunk",roughness:.9});const o=new $e({color:2389295}),r=new vn;r.position.set(n,i+.2*e,t);for(let c=0;c<8;c+=1){const l=new vn;l.rotation.set(-.42,Math.PI*2*c/8,.14*(c%2?1:-1));const u=new Vt(new un(.09*e,.035*e,1.72*e),o);u.position.z=.64*e,l.add(u);for(let d=0;d<4;d+=1)[-1,1].forEach(h=>{const f=new Vt(new un(.42*e,.026*e,.15*e),o);f.position.set(h*(.16+d*.045)*e,-d*.012*e,(.18+d*.24)*e),f.rotation.set(0,h*.32,h*.16),l.add(f)});r.add(l)}const a=new Vt(new Ni(.24*e,10,6),o);return a.scale.set(1.08,.55,1.08),a.position.y=-.03*e,r.add(a),Ot.add(r),r}function GT({x:n,z:t,sx:e=8,sz:i=5,rotation:s=0}){const o=new Vt(new uo(1,28),new $e({color:12103015,transparent:!0,opacity:.58,depthWrite:!1}));return o.position.set(n,.011,t),o.rotation.set(-Math.PI/2,0,s),o.scale.set(e,i,1),o.renderOrder=1,Ot.add(o),o}function WT({x:n,z:t,sx:e=8,sz:i=5,height:s=1,color:o=3769400}){const r=new Vt(new Ni(1,18,8),new $e({color:o,transparent:!0,opacity:.72}));return r.position.set(n,-s*.42,t),r.scale.set(e,s,i),r.rotation.y=Tn(n*.13+t*.37)*Math.PI,r.renderOrder=0,Ot.add(r),r}function Ds({x:n,z:t,length:e=5,axis:i="x"}){const s=Math.max(2,Math.round(e/.8)),o=e/s;for(let r=0;r<s;r+=1){const a=-e/2+o*(r+.5);Ye({position:{x:i==="x"?n+a:n,y:.25,z:i==="z"?t+a:t},size:{x:i==="x"?o*.92:.72,y:.5,z:i==="z"?o*.92:.72},color:9273432,kind:"sandbag-cover",roughness:.96})}}function qT(n,t){[-.72,.72].forEach(i=>{[-.72,.72].forEach(s=>{Ye({position:{x:n+i,y:1.4,z:t+s},size:{x:.18,y:2.8,z:.18},color:6968370,kind:"watchtower-post",roughness:.82})})}),Ye({position:{x:n,y:1.64,z:t},size:{x:2.2,y:.2,z:2.2},color:5916717,kind:"watchtower-platform",roughness:.84}),Ye({position:{x:n,y:2.35,z:t},size:{x:2.6,y:.16,z:2.6},color:3946539,kind:"watchtower-roof",roughness:.9}),Ds({x:n,z:t-1.18,length:2.4,axis:"x"})}function $d({x:n,z:t,width:e=4.6,depth:i=3.6}){Ye({position:{x:n,y:.12,z:t},size:{x:e,y:.24,z:i},color:7100215,kind:"hut-floor"}),Ye({position:{x:n,y:1.35,z:t-i/2},size:{x:e,y:1.9,z:.22},color:7297591,kind:"hut-wall"}),Ye({position:{x:n-e/2,y:1.15,z:t},size:{x:.22,y:1.6,z:i},color:7297591,kind:"hut-wall"}),Ye({position:{x:n+e/2,y:1.15,z:t},size:{x:.22,y:1.6,z:i},color:7297591,kind:"hut-wall"}),Ye({position:{x:n,y:2.08,z:t},size:{x:e+.5,y:.22,z:i+.7},color:3946540,kind:"hut-roof",roughness:.92})}function XT(n,t){Ye({position:{x:n,y:2.5,z:t},size:{x:.18,y:5,z:.18},color:3225135,kind:"radio-mast",roughness:.55,metalness:.35}),Ye({position:{x:n,y:4.65,z:t},size:{x:1.5,y:.08,z:.08},color:3225135,kind:"radio-mast-crossbar",roughness:.55,metalness:.35})}function YT(n=e1){const t=Ye({position:{x:n.x,y:.42,z:n.z},size:{x:.78,y:.84,z:.5},color:3093807,kind:"radio-terminal",roughness:.56,metalness:.2}),e=new Ve({color:4575676,emissive:1759429,emissiveIntensity:.9,roughness:.32,metalness:.05}),i=new Vt(new un(.48,.28,.035),e);i.position.set(n.x,.64,n.z-.27),i.rotation.x=-.18,i.castShadow=!0,Ot.add(i);const s=new Vt(new os(.018,.018,.72,8),new Ve({color:3225135,roughness:.5,metalness:.35}));s.position.set(n.x+.27,.98,n.z+.04),s.rotation.z=-.22,s.castShadow=!0,Ot.add(s);const o=new $e({color:16765293,transparent:!0,opacity:.36,side:sn}),r=new Vt(new za(.72,.78,48),o);r.rotation.x=-Math.PI/2,r.position.set(n.x,.035,n.z),Ot.add(r),gr.push({type:"radio",id:"radio-link",disabled:!1,base:t.mesh,body:t.body,screen:i,screenMaterial:e,antenna:s,ring:r,ringMaterial:o,position:n.clone()})}function jd({position:n,size:t,kind:e="perimeter-wall"}){const i=new pt({mass:0,material:Xn,position:new S(n.x,n.y,n.z),shape:new Ui(new S(t.x/2,t.y/2,t.z/2))});return i.collisionFilterGroup=Kw,i.userData={kind:e,invisible:!0},jt.addBody(i),Kn.push({body:i,invisible:!0}),i}function ZT(){return new av({color:Gt.glass,emissive:2854819,emissiveIntensity:.28,transparent:!0,opacity:.34,roughness:.05,metalness:0,transmission:.45,thickness:.08,depthWrite:!1})}function KT(n){const{localId:t,id:e,size:i}=n,s=t??e;return s==="front"?{normal:new b(0,0,1),tangent:new b(1,0,0),bitangent:new b(0,1,0),width:i.x,height:i.y,rotation:new Ee(0,0,0),halfThickness:i.z/2}:s==="back"?{normal:new b(0,0,-1),tangent:new b(1,0,0),bitangent:new b(0,1,0),width:i.x,height:i.y,rotation:new Ee(0,Math.PI,0),halfThickness:i.z/2}:s==="left"?{normal:new b(-1,0,0),tangent:new b(0,0,1),bitangent:new b(0,1,0),width:i.z,height:i.y,rotation:new Ee(0,-Math.PI/2,0),halfThickness:i.x/2}:s==="right"?{normal:new b(1,0,0),tangent:new b(0,0,1),bitangent:new b(0,1,0),width:i.z,height:i.y,rotation:new Ee(0,Math.PI/2,0),halfThickness:i.x/2}:{normal:new b(0,1,0),tangent:new b(1,0,0),bitangent:new b(0,0,1),width:i.x,height:i.z,rotation:new Ee(-Math.PI/2,0,0),halfThickness:i.y/2}}function $T(n){const t=KT(n),e=new $e({map:Bl[1],transparent:!0,opacity:0,depthWrite:!1,side:sn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});e.toneMapped=!1;const i=new Vt(new ho(1,1),e);return i.position.copy(n.mesh.position).addScaledVector(t.normal,t.halfThickness+.018),i.rotation.copy(t.rotation),i.visible=!1,i.renderOrder=3,Ot.add(i),{mesh:i,material:e,basis:t,level:0}}function yu(n,t){if(n.crack.level=t,t<=0||!n.alive){n.crack.mesh.visible=!1,n.crack.material.opacity=0;return}const e=i1[t]??1;n.crack.material.map=Bl[t]??Bl[3],n.crack.material.needsUpdate=!0,n.crack.material.opacity=.42+t*.13,n.crack.mesh.scale.set(n.crack.basis.width*e,n.crack.basis.height*e,1),n.crack.mesh.visible=!0}function jT({id:n,localId:t,cubeIndex:e,cubeOrigin:i=new b,position:s,size:o}){const r=i.clone(),a=new un(o.x,o.y,o.z),c=ZT(),l=new Vt(a,c);l.position.set(s.x,s.y,s.z),l.castShadow=!1,l.receiveShadow=!0;const u=new tu({color:Gt.glassEdge,transparent:!0,opacity:.72}),d=new If(new Rg(a),u);l.add(d),Ot.add(l);const h=new pt({mass:0,material:Xn,position:new S(s.x,s.y,s.z),shape:new Ui(new S(o.x/2,o.y/2,o.z/2))});h.userData={kind:"glass",id:n,localId:t,cubeIndex:e,cubeOrigin:{x:r.x,y:r.y,z:r.z}},jt.addBody(h);const f={id:n,localId:t,cubeIndex:e,cubeOrigin:r,mesh:l,body:h,material:c,edgeMaterial:u,size:new b(o.x,o.y,o.z),alive:!0,health:Wa};return f.crack=$T(f),gu.push(f),Kn.push({mesh:l,body:h,glassFace:f}),f}function JT(n=new b,t=0){const e=to,i=rp,s=Ga,o=to;[{id:"front",position:{x:n.x,y:n.y+e,z:n.z+o},size:{x:s,y:s,z:i}},{id:"back",position:{x:n.x,y:n.y+e,z:n.z-o},size:{x:s,y:s,z:i}},{id:"left",position:{x:n.x-o,y:n.y+e,z:n.z},size:{x:i,y:s,z:s}},{id:"right",position:{x:n.x+o,y:n.y+e,z:n.z},size:{x:i,y:s,z:s}}].forEach(r=>jT({id:`cube-${t+1}-${r.id}`,localId:r.id,cubeIndex:t,cubeOrigin:n,position:r.position,size:r.size}))}function Np(n){const t=n.health/Wa;n.material.opacity=.14+t*.2,n.material.emissiveIntensity=.12+t*.18,n.edgeMaterial.opacity=.28+t*.44}function QT(n,t,e){n.alive&&(Qb(n,t,e),NT(t??n.mesh.position),lb(n.cubeIndex),n.alive=!1,n.health=0,yu(n,0),Ot.remove(n.mesh),jt.bodies.includes(n.body)&&jt.removeBody(n.body))}function Up(n,t,e){if(!(n!=null&&n.alive))return;n.health=Math.max(0,n.health-1);const i=Wa-n.health;n.health<=0?QT(n,t,e):(yu(n,Math.min(i,3)),Np(n))}function tb(){gu.forEach(n=>{n.alive=!0,n.health=Wa,yu(n,0),Np(n),jt.bodies.includes(n.body)||jt.addBody(n.body),n.mesh.parent||Ot.add(n.mesh)})}function eb(n=new b){const t=[],e=Uo*(Math.sqrt(3)/2),i=Uo,s=ui+.015,o=Ga-ui-.015,r=to-rp/2-ui-.015,a=Math.floor(r*2/Uo)+1,c=Math.max(1,a-1),l=Math.floor(r*2/e)+1,u=Math.floor((o-s)/i)+1,d=-((l-1)*e)/2;for(let h=0;h<u&&t.length<Pd;h+=1){const f=[],g=s+h*i;for(let m=0;m<l;m+=1){const p=m%2===0?a:c,_=-((p-1)*Uo)/2,y=d+m*e;for(let x=0;x<p;x+=1)f.push(new b(n.x+_+x*Uo,n.y+g,n.z+y))}const v=Pd-t.length;v>=f.length?t.push(...f):(f.sort((m,p)=>{const _=m.x-n.x,y=m.z-n.z,x=p.x-n.x,R=p.z-n.z,A=_*_+y*y,C=x*x+R*R;return A-C}),t.push(...f.slice(0,v)))}return t}function nb(n,t,e){const i=t.clone();i.y=0,!(i.lengthSq()<pe)&&(i.normalize(),n.body.wakeUp(),n.body.applyImpulse(new S(i.x*qc,qc*.18,i.z*qc),new S(e.x,e.y,e.z)))}function Fp(n){if(!(n!=null&&n.mesh)||n.exploded)return;const t=Lt.clamp(n.health/fu,0,1),e=new Yt(n.color).lerp(new Yt(16735581),1-t);n.mesh.setColorAt(n.instanceIndex,e),n.mesh.instanceColor&&(n.mesh.instanceColor.needsUpdate=!0)}function ib(n=new b,t=0){const e=eb(n),i=new Ni(ui,12,8),s=new Ve({color:16777215,emissive:2503220,emissiveIntensity:.16,roughness:.48,metalness:.02,vertexColors:!0}),o=new Pf(i,s,e.length);o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,Ot.add(o);const r=[15775821,4575676,3721336,14842111,14154751,16773544],a=new Fl(ui),c=[];e.forEach((l,u)=>{const d=Ii.length,h=new pt({mass:o1,material:Ca,linearDamping:.075,angularDamping:.12,position:new S(l.x,l.y,l.z),shape:a});h.allowSleep=!0,h.sleepSpeedLimit=.055,h.sleepTimeLimit=.45,h.collisionFilterGroup=Rd,h.collisionFilterMask=Rd,h.userData={kind:"glass-ball",index:d,cubeIndex:t,lastCollisionSoundAt:-1/0},h.addEventListener("collide",g=>sb(h,g)),jt.addBody(h);const f={body:h,spawn:l.clone(),color:r[d%r.length],mesh:o,instanceIndex:u,cubeIndex:t,health:fu,sinking:!1,exploded:!1,explosionQueued:!1};Ii.push(f),c.push(f),o.setColorAt(u,new Yt(f.color))}),o.instanceColor&&(o.instanceColor.needsUpdate=!0),Ol.push({mesh:o,balls:c}),Mu()}function zp(n){!n||n.exploded||n.explosionQueued||n.sinking||(n.explosionQueued=!0,n.body.wakeUp(),Ia.push(n))}function Op(n,t){!n||n.exploded||n.explosionQueued||n.sinking||(n.health=Math.max(0,n.health-t),Fp(n),n.health<=0&&zp(n))}function sb(n,t){var r,a,c;const e=t.body;if(!e)return;const i=(r=e.userData)==null?void 0:r.kind;if(i==="player"||i==="enemy"){zp(Ii[n.userData.index]);return}const s=Math.abs(((c=(a=t.contact)==null?void 0:a.getImpactVelocityAlongNormal)==null?void 0:c.call(a))??0),o=es.elapsedTime;s<.7||o-Kd<.035||o-n.userData.lastCollisionSoundAt<.14||(n.userData.lastCollisionSoundAt=o,Kd=o,te("ball-collision",{intensity:Lt.clamp(s/4,.18,.85),pitch:.85+n.userData.index%7*.045,position:n.position}))}function Jd(n,t){const e=t.clone().sub(n);return e.y=0,e.lengthSq()<pe&&e.set(1,0,0),e.normalize()}function ob(n){Ja(n,O1,B1);const t=X.group.position.clone(),e=X.alive&&rn(n,t)<=Ho,i=Hb(n,Ho,ca,e);e&&!i&&Ou(ca,Jd(n,t)),Te.forEach(s=>{if(!s.alive)return;const o=s.group.position.clone();rn(n,o)<=Ho&&zu(s,ca,Jd(n,o))}),Ii.forEach(s=>{if(s.exploded||s.explosionQueued||s.sinking)return;new b(s.body.position.x,s.body.position.y,s.body.position.z).distanceTo(n)<=Ho&&Op(s,ca)})}function rb(n){if(!n||n.exploded)return;const t=new b(n.body.position.x,n.body.position.y,n.body.position.z);n.exploded=!0,n.explosionQueued=!1,n.sinking=!1,n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),jt.bodies.includes(n.body)&&jt.removeBody(n.body),jb(t),te("ball-explosion",{intensity:1.1,pitch:.92+n.body.userData.index%5*.035,position:t}),ob(t)}function ab(){for(;Ia.length>0;)rb(Ia.shift())}function Mu(){Ol.length&&Ol.forEach(({mesh:n,balls:t})=>{t.forEach((e,i)=>{Fo.position.set(e.body.position.x,e.body.position.y,e.body.position.z),Fo.quaternion.set(e.body.quaternion.x,e.body.quaternion.y,e.body.quaternion.z,e.body.quaternion.w),Fo.scale.setScalar(e.exploded?0:1),Fo.updateMatrix(),n.setMatrixAt(i,Fo.matrix)}),n.instanceMatrix.needsUpdate=!0})}function cb(n){Ii.forEach(t=>{if(t.exploded)return;const{body:e}=t;if(!t.sinking&&!is(e.position.x,e.position.z,ui*.3)&&(t.sinking=!0,e.allowSleep=!1,e.collisionResponse=!1,e.wakeUp()),t.sinking){if(e.position.y<=Cd){e.position.y=Cd,e.velocity.set(0,0,0),e.angularVelocity.set(0,0,0),e.sleep();return}e.force.y+=e.mass*Qw,e.velocity.x*=Math.pow(.42,n),e.velocity.z*=Math.pow(.42,n),e.velocity.y=Math.min(e.velocity.y,-1.55);return}e.sleepState!==pt.SLEEPING&&(e.force.y+=e.mass*r1,e.velocity.y=Math.max(-8,e.velocity.y))})}function lb(n=null){Ii.forEach(({body:t,cubeIndex:e,exploded:i})=>{i||(n===null||e===n)&&t.wakeUp()})}function ub(){Ia.length=0,Ii.forEach((n,t)=>{n.exploded=!1,n.explosionQueued=!1,n.sinking=!1,n.health=fu,Fp(n),n.body.allowSleep=!0,n.body.collisionResponse=!0,jt.bodies.includes(n.body)||jt.addBody(n.body);const e=t%7*.003;n.body.position.set(n.spawn.x+e,n.spawn.y,n.spawn.z-e),n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),n.body.quaternion.set(0,0,0,1),n.body.userData.lastCollisionSoundAt=-1/0,n.body.wakeUp()}),Mu()}function hb(n,t,e){const i=n/2,s=t/2,o=Math.min(e,i,s),r=new Of;return r.moveTo(-i+o,-s),r.lineTo(i-o,-s),r.quadraticCurveTo(i,-s,i,-s+o),r.lineTo(i,s-o),r.quadraticCurveTo(i,s,i-o,s),r.lineTo(-i+o,s),r.quadraticCurveTo(-i,s,-i,s-o),r.lineTo(-i,-s+o),r.quadraticCurveTo(-i,-s,-i+o,-s),r}function lr(n){const t=bn-Vs,e=Math.abs(n);if(e<=t)return bn;if(e>=bn)return t;const i=e-t;return t+Math.sqrt(Math.max(0,Vs**2-i**2))}function is(n,t,e=0){return Math.abs(n)<=lr(t)-e&&Math.abs(t)<=lr(n)-e}function db(n){const t=new b(n.x,0,n.z);if(t.distanceTo(Ri)>=Id&&is(t.x,t.z,Dd))return t;const e=t.clone().sub(Ri);e.y=0,e.lengthSq()<pe&&e.set(1,0,-.35),e.normalize();const i=[0,-.45,.45,-.9,.9,-1.35,1.35,-Math.PI/2,Math.PI/2,Math.PI];for(const s of i){const o=Math.cos(s),r=Math.sin(s),a=new b(e.x*o-e.z*r,0,e.x*r+e.z*o).normalize(),c=Ri.clone().addScaledVector(a,Id);if(c.y=0,is(c.x,c.z,Dd))return c}return new b(0,0,0)}function Qd(n,t=0){let e=!1;for(let i=0;i<2;i+=1){const s=Math.max(0,lr(n.position.z)-t);Math.abs(n.position.x)>s&&(n.position.x=Math.sign(n.position.x||1)*s,n.velocity.x=0,e=!0);const o=Math.max(0,lr(n.position.x)-t);Math.abs(n.position.z)>o&&(n.position.z=Math.sign(n.position.z||1)*o,n.velocity.z=0,e=!0)}e&&n.wakeUp()}function fb(){Qd(X.body,or+.04),Te.forEach(n=>{n.alive&&Qd(n.body,eo+.04)})}function Tn(n){const t=Math.sin(n*127.1+311.7)*43758.5453123;return t-Math.floor(t)}function pb(){const n=[],t=Li/aa;for(let o=0;o<aa;o+=1)for(let r=0;r<aa;r+=1){if((o+r)%2!==0)continue;const a=o*aa+r+1,c=(Tn(a)-.5)*t*.78,l=(Tn(a+53)-.5)*t*.78,u=-bn+t*(r+.5)+c,d=-bn+t*(o+.5)+l;is(u,d,Jw)&&n.push({x:u,z:d,rotation:Tn(a+107)*Math.PI*2,scale:.72+Tn(a+191)*.72})}const e=new eu(.24,.22,6,1),i=new $e({color:3515707}),s=new Pf(e,i,n.length);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,n.forEach((o,r)=>{zo.position.set(o.x,.15,o.z),zo.rotation.set(0,o.rotation,0),zo.scale.set(.65*o.scale,.74+o.scale*.36,.65*o.scale),zo.updateMatrix(),s.setMatrixAt(r,zo.matrix)}),s.instanceMatrix.needsUpdate=!0,Ot.add(s)}function mb(){[{x:-58,z:56,sx:14,sz:8,rotation:.15},{x:-66,z:28,sx:8,sz:16,rotation:-.08},{x:-22,z:66,sx:18,sz:7,rotation:.03},{x:48,z:60,sx:16,sz:8,rotation:-.22},{x:66,z:14,sx:8,sz:15,rotation:.08},{x:58,z:-58,sx:15,sz:8,rotation:.18},{x:12,z:-66,sx:20,sz:7,rotation:-.04},{x:-56,z:-52,sx:12,sz:9,rotation:.28}].forEach(GT)}function gb(){[[-58,42,1.1],[-52,28,.9],[-44,52,1],[-34,42,.85],[-18,56,1.2],[-4,50,.9],[12,46,.95],[34,52,1.05],[54,38,.9],[60,8,1.15],[50,-8,.8],[52,-36,1],[38,-58,.92],[8,-58,1.12],[-18,-54,.9],[-46,-42,1],[-58,-18,.95],[-52,6,1.08],[-34,-2,.84],[-22,18,.9],[8,18,.75],[38,18,.9],[42,-26,.78],[-8,-28,.86]].forEach(([t,e,i])=>VT({x:t,z:e,scale:i}));for(let t=0;t<96;t+=1){const e=t+31,i=Tn(e)*Math.PI*2,s=18+Tn(e+91)*48,o=Math.cos(i)*s+(Tn(e+7)-.5)*18,r=Math.sin(i)*s+(Tn(e+13)-.5)*18;is(o,r,4)&&(Math.abs(o-20)<18&&Math.abs(r+22)<18||HT({x:o,z:r,scale:.65+Tn(e+17)*.9,color:Tn(e+29)>.45?3116857:2519857}))}}function vb(){[{x:-42,z:26,sx:13,sz:7,height:1.25},{x:-44,z:-12,sx:11,sz:8,height:1.05},{x:-18,z:-42,sx:14,sz:6,height:1.1},{x:40,z:-48,sx:15,sz:7,height:1.2},{x:54,z:-22,sx:9,sz:12,height:1.05},{x:46,z:22,sx:11,sz:10,height:1.15},{x:16,z:28,sx:13,sz:6,height:.95}].forEach(WT),[{x:-50,z:30,sx:3.8,sy:1.45,sz:2.2},{x:-40,z:24,sx:2.6,sy:1.1,sz:3.4},{x:-28,z:30,sx:2.9,sy:1.15,sz:2.4},{x:-48,z:-8,sx:3.4,sy:1.25,sz:2.8},{x:-38,z:-18,sx:2.7,sy:1,sz:3},{x:-22,z:-42,sx:3,sy:1.15,sz:2.6},{x:4,z:-52,sx:3.5,sy:1.25,sz:2.4},{x:42,z:-50,sx:4.2,sy:1.4,sz:2.8},{x:56,z:-28,sx:2.6,sy:1,sz:3.4},{x:54,z:12,sx:3.6,sy:1.35,sz:2.8},{x:42,z:32,sx:2.8,sy:1.1,sz:3.2},{x:18,z:30,sx:2.7,sy:1.05,sz:2.8}].forEach(kT)}function _b(){$d({x:14,z:-22,width:6,depth:4.2}),$d({x:29,z:-24,width:5.2,depth:4}),qT(19,-4),XT(9,-12),YT(),Ds({x:4,z:-13,length:7,axis:"x"}),Ds({x:31,z:-10,length:6,axis:"x"}),Ds({x:4,z:-34,length:7.5,axis:"x"}),Ds({x:36,z:-34,length:5.5,axis:"z"}),Ds({x:18,z:-42,length:9,axis:"x"}),[{x:20,z:-16,sx:2.6,sz:1.2,y:.82,c:Gt.crate},{x:27,z:-18,sx:1.2,sz:2.8,y:.92,c:Gt.crate},{x:11,z:-31,sx:3.2,sz:1.2,y:.82,c:Gt.crate},{x:25,z:-36,sx:3,sz:1.2,y:.82,c:Gt.crate},{x:36,z:-23,sx:1.2,sz:3,y:.9,c:Gt.concrete},{x:-2,z:-21,sx:1.2,sz:3.4,y:1,c:Gt.concrete},{x:43,z:-2,sx:4.6,sz:1.1,y:.78,c:Gt.crate},{x:-14,z:-8,sx:4.2,sz:1.1,y:.78,c:Gt.crate},{x:-26,z:-34,sx:1.2,sz:4,y:1,c:Gt.concrete},{x:53,z:-45,sx:4.8,sz:1.1,y:.78,c:Gt.crate}].forEach(n=>{Ye({position:{x:n.x,y:n.y/2,z:n.z},size:{x:n.sx,y:n.y,z:n.sz},color:n.c,kind:"outpost-cover"})})}function xb(){const n=new Vt(new Ni(Zw,48,24),new $e({map:RT(),side:on,fog:!1,depthWrite:!1}));Ot.add(n)}function yb(){const n=CT(),t=new Ve({color:2133956,emissive:407893,emissiveIntensity:.18,map:n,roughness:.34,metalness:.08}),e=new Vt(new ho(bd,bd,1,1),t);e.rotation.x=-Math.PI/2,e.position.y=sp,e.receiveShadow=!1,Ot.add(e),Cp.push({texture:n,mesh:e})}function Mb(){const n=Gc/2,t=Li-Vs*2,e=bn+Ls/2;[{x:0,z:-e,sx:t,sz:Ls},{x:0,z:e,sx:t,sz:Ls},{x:-e,z:0,sx:Ls,sz:t},{x:e,z:0,sx:Ls,sz:t}].forEach(o=>{jd({position:{x:o.x,y:n,z:o.z},size:{x:o.sx,y:Gc,z:o.sz}})});const i=Vs/Ad,s=bn-Vs;for(let o=0;o<Ad;o+=1){const r=s+(o+.5)*i,a=lr(r),c=bn+Ls-a,l=a+c/2;[-1,1].forEach(u=>{[-1,1].forEach(d=>{jd({position:{x:u*l,y:n,z:d*r},size:{x:c,y:Gc,z:i+.08}})})})}}function Sb(n){Cp.forEach(({texture:t,mesh:e},i)=>{t.offset.x=(t.offset.x+n*(.006+i*.002))%1,t.offset.y=(t.offset.y+n*.003)%1,e.position.y=sp+Math.sin(es.elapsedTime*.5+i)*.012})}function Eb(){const n=new ru(hb(Li,Li,Vs),18);AT(n);const t=new $e({color:16777215,map:bT()}),e=new Vt(n,t);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,Ot.add(e),mb(),pb();const i=new pt({mass:0,material:Xn,position:new S(0,-.04,0),shape:new Ui(new S(bn,.04,bn))});i.userData={kind:"ball-floor"},jt.addBody(i)}function wb(){xb(),yb(),Eb(),Mb(),gb(),vb(),_b(),[{x:-54,z:42,sx:4.8,sz:1.2,y:.78,c:Gt.crate},{x:-42,z:34,sx:1.2,sz:4.2,y:1,c:Gt.concrete},{x:-26,z:20,sx:4.4,sz:1.2,y:.8,c:Gt.crate},{x:-12,z:12,sx:1.2,sz:4,y:1,c:Gt.concrete},{x:42,z:14,sx:4.6,sz:1.2,y:.8,c:Gt.crate},{x:52,z:-8,sx:1.2,sz:4.4,y:1,c:Gt.concrete},{x:-50,z:-26,sx:4.8,sz:1.2,y:.78,c:Gt.crate},{x:-32,z:-44,sx:1.2,sz:4,y:1,c:Gt.concrete}].forEach(t=>{Ye({position:{x:t.x,y:t.y/2,z:t.z},size:{x:t.sx,y:t.y,z:t.sz},color:t.c,kind:"approach-cover"})}),n1.forEach((t,e)=>{JT(t,e),ib(t,e)}),kn(-42.4,41.2),kn(-20.2,-20.4),kn(20.4,19.2),kn(-19.6,16.2),kn(17.8,-18.4),kn(41.6,-42.2),kn(-41.8,-8.4),kn(8.2,41.6),kn(40.8,8.6),kn(-8.6,-41.4)}function kn(n,t){const e=2.1333333333333333,i=e+.1,{mesh:s}=Ye({position:{x:n,y:e/2,z:t},size:{x:.16,y:e,z:.16},color:3159086,kind:"lamp-pole",roughness:.55,metalness:.35});s.castShadow=!0;const o=new Vt(new Ni(.18,16,12),new Ve({color:16764795,emissive:16751918,emissiveIntensity:1.6}));o.position.set(n,i,t),Ot.add(o)}function Bp(n){return n.state==="patrol"?l1:u1}function Tb(n){return Math.acos(Lt.clamp(Bp(n),-1,1))}function tf(n){return n.type==="melee"?pp:dp}function bb(n){return n.type==="melee"?p1:d1}function Ab(n){return n.type==="melee"?m1:f1}function Rb(n){return n.type==="melee"?mp:fp}function Ka(n){return(typeof n=="string"?n:n==null?void 0:n.type)==="melee"?c1:a1}function Cb(n){return n.state==="patrol"||n.state==="search"?n.health:n.state==="interest"||n.state==="chase"?Ka(n)*Z1:Y1}function Pb(){const n=new Be,t=new Float32Array(12);n.setAttribute("position",new ln(t,3));const e=new tu({color:Gt.enemyGlow,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1});e.toneMapped=!1;const i=new If(n,e);return i.frustumCulled=!1,i.renderOrder=4,Ot.add(i),{lines:i,geometry:n,positions:t,length:h1}}function Lb(n){return n.state==="chase"||n.state==="interest"&&n.glassTactic==="break"?{color:16727871,opacity:.95}:n.state==="interest"?{color:16765286,opacity:.88}:n.state==="search"?{color:6543103,opacity:.78}:{color:7977050,opacity:.62}}function Ib(n){if(!n.lineOfSight||(n.lineOfSight.lines.visible=n.alive,!n.alive))return;const{positions:t,length:e,lines:i}=n.lineOfSight,s=Lb(n);i.material.color.setHex(s.color),i.material.opacity=s.opacity;const o=n.group.position.x,r=n.group.position.z,a=Tb(n),c=n.group.rotation.y-a,l=n.group.rotation.y+a,u=o+Math.sin(c)*e,d=r+Math.cos(c)*e,h=o+Math.sin(l)*e,f=r+Math.cos(l)*e;t.set([o,la,r,u,la,d,o,la,r,h,la,f]),n.lineOfSight.geometry.attributes.position.needsUpdate=!0,n.lineOfSight.geometry.computeBoundingSphere()}function kp(){Te.forEach(Ib)}function Vn(n,t,e,i={}){const s=new Vt(new un(n.x,n.y,n.z),new Ve({color:e,roughness:i.roughness??.48,metalness:i.metalness??.22,emissive:i.emissive??0,emissiveIntensity:i.emissiveIntensity??0}));return s.position.set(t.x,t.y,t.z),s.castShadow=!0,s}function ef(n,t,e,i,s={}){const o=new Vt(new os(n,n,t,s.segments??10),new Ve({color:i,roughness:s.roughness??.44,metalness:s.metalness??.38,emissive:s.emissive??0,emissiveIntensity:s.emissiveIntensity??0}));return o.position.set(e.x,e.y,e.z),o.rotation.x=Math.PI/2,o.castShadow=!0,o}function Hp({advanced:n=!1}={}){const t=new vn,e=new b(0,n?.72:.68,sr+.06),i=new b(0,.01,n?.965:.77),s=n?2504762:3354178,o=n?1449246:2104364,r=n?5822128:11963647;return t.add(Vn({x:n?.18:.16,y:n?.14:.12,z:n?.42:.36},{x:0,y:0,z:.2},s,{metalness:.32})),t.add(ef(n?.035:.03,n?.48:.38,{x:0,y:.01,z:n?.66:.58},o,{segments:n?12:8,metalness:.48})),t.add(Vn({x:.13,y:n?.22:.18,z:.08},{x:0,y:-.16,z:n?.22:.18},1382681,{metalness:.22})),t.add(Vn({x:.14,y:.09,z:n?.22:.16},{x:0,y:.02,z:-.1},1712160,{metalness:.18})),n?(t.add(Vn({x:.12,y:.045,z:.18},{x:0,y:.105,z:.22},r,{emissive:1796695,emissiveIntensity:.22,metalness:.16})),t.add(Vn({x:.06,y:.07,z:.05},{x:0,y:.13,z:.48},1053973,{metalness:.35})),t.add(ef(.045,.09,{x:0,y:.01,z:.92},1053973,{segments:12,metalness:.5}))):t.add(Vn({x:.1,y:.035,z:.12},{x:0,y:.09,z:.18},r,{emissive:4334687,emissiveIntensity:.16,metalness:.14})),t.position.copy(e),{kind:"rifle",root:t,restPosition:e,restRotation:new Ee(0,0,0),muzzleLocal:i,recoil:0,recoilYaw:0,recoilRoll:0}}function Vp({sheathed:n=!1}={}){const t=new vn,e=new b(.25,.62,sr+.05),i=new Ee(0,0,0),s=new b(sr+.11,.48,-.02),o=new Ee(Math.PI/2,0,.1),r=n?s:e,a=n?o:i;t.add(Vn({x:.08,y:.12,z:.18},{x:0,y:-.03,z:.04},2825752,{roughness:.72,metalness:.04})),t.add(Vn({x:.1,y:.035,z:.08},{x:0,y:.035,z:.15},1774609,{roughness:.65,metalness:.12}));const c=Vn({x:.11,y:.035,z:.58},{x:0,y:.08,z:.45},10989740,{roughness:.22,metalness:.62,emissive:2107430,emissiveIntensity:.08});return c.rotation.y=-.06,t.add(c),t.add(Vn({x:.04,y:.038,z:.22},{x:.038,y:.085,z:.66},14081497,{roughness:.18,metalness:.68})),t.scale.setScalar(J1),t.position.copy(r),t.rotation.copy(a),{kind:"machete",root:t,restPosition:r,restRotation:a,combatPosition:e,combatRotation:i,sheathedPosition:s,sheathedRotation:o,strikeRotation:new Ee(.16,.72,-.5)}}function Db(){const n=new vn,t=new Vt(new Fa(or,Pa,6,12),new Ve({color:Gt.player,roughness:.58}));t.position.y=Yn,t.castShadow=!0,n.add(t);const e=Hp({advanced:!0});n.add(e.root);const i=Vp({sheathed:!0});n.add(i.root),Ot.add(n);const s=new pt({mass:5,material:Xn,linearDamping:.12,angularDamping:1,position:new S(Ri.x,Yn,Ri.z)});return Dp(s,or,Pa,12),s.allowSleep=!1,s.fixedRotation=!0,s.updateMassProperties(),s.wakeUp(),s.userData={kind:"player"},jt.addBody(s),{group:n,body:s,spawn:Ri.clone(),alive:!0,deathProgress:1,deathStartY:0,deathTargetY:.08,deathRotationZ:.22,hitSlowTimer:0,hitKnockback:new b,footstepTimer:0,weapon:e,meleeWeapon:i,meleeAttackActive:!1,meleeAttackTimer:0,meleeImpactDone:!0,meleeAttackDirection:new b(0,0,1)}}function Nb(){const n=new un(Xd,Yd,zl),t=new $e({color:Gt.teal,transparent:!0,opacity:.38,depthWrite:!1,side:sn});t.toneMapped=!1;const e=new Vt(n,t);return e.visible=!1,e.frustumCulled=!1,Ot.add(e),{mesh:e,material:t,active:!1,health:0,hitFlash:0,breakTimer:0,center:new b,right:new b(1,0,0),upAxis:new b(0,1,0),forward:new b(0,0,-1),halfExtents:new b(Xd/2,Yd/2,zl/2)}}function _r(){return Et.active&&Et.health>0&&X.alive}function ur(){const n=hn.clone();n.y=0,n.lengthSq()<pe?n.set(0,0,-1):n.normalize();const t=Math.atan2(n.x,n.z);Et.forward.copy(n),Et.right.set(Math.cos(t),0,-Math.sin(t)).normalize(),Et.upAxis.copy(ir),Et.center.copy(X.group.position).addScaledVector(ir,_T).addScaledVector(n,vT),Et.mesh.position.copy(Et.center),Et.mesh.rotation.set(0,t,0)}function Gp(n=0){if(!_r()){if(Et.breakTimer>0){Et.breakTimer=Math.max(0,Et.breakTimer-n),ur(),Et.material.opacity=.26*(Et.breakTimer/bp),Et.material.color.setHex(Gt.glassEdge),Et.mesh.visible=!0;return}Et.mesh.visible=!1;return}Et.hitFlash=Math.max(0,Et.hitFlash-n),ur();const t=Lt.clamp(Et.health/Tp,0,1);Et.material.opacity=.22+t*.2+(Et.hitFlash>0?.18:0),Et.material.color.setHex(Et.hitFlash>0?Gt.glassEdge:Gt.teal),Et.mesh.visible=!0}function Ub(){Et.active=!1,Et.health=0,Et.hitFlash=0,Et.breakTimer=0,Et.mesh.visible=!1}function Wp(){return!Ae()||_r()||O.energy<qd?!1:(O.energy-=qd,Et.active=!0,Et.health=Tp,Et.hitFlash=.16,Et.breakTimer=0,ur(),Et.mesh.visible=!0,te("shield-activate",{intensity:1,position:X.group.position}),fi(),!0)}function Fb(){Et.active=!1,Et.health=0,Et.breakTimer=0,Et.mesh.visible=!1}function zb(){Et.active=!1,Et.health=0,Et.breakTimer=bp,Et.mesh.visible=!0}function Su(n,t=null){return _r()?(Et.health=Math.max(0,Et.health-n),Et.hitFlash=.18,te("shield-hit",{intensity:1,position:t??Et.center}),Et.health<=0&&(te("shield-break",{intensity:1,position:t??Et.center}),zb()),fi(),!0):!1}function kl(n,t=Et){const e=n.clone().sub(t.center);return new b(e.dot(t.right),e.dot(t.upAxis),e.dot(t.forward))}function Ob(n,t=Et){return t.center.clone().addScaledVector(t.right,n.x).addScaledVector(t.upAxis,n.y).addScaledVector(t.forward,n.z)}function qp(n,t,e,i=0){const s=kl(n,e),o=kl(t,e),r=o.clone().sub(s),a=[{key:"x",half:e.halfExtents.x+i,vector:e.right},{key:"y",half:e.halfExtents.y+i,vector:e.upAxis},{key:"z",half:e.halfExtents.z+i,vector:e.forward}];let c=0,l=1,u=null,d=1;for(const h of a){const f=s[h.key],g=r[h.key],v=-h.half,m=h.half;if(Math.abs(g)<pe){if(f<v||f>m)return null;continue}let p=(v-f)/g,_=(m-f)/g,y=-1;if(p>_&&([p,_]=[_,p],y=1),p>c&&(c=p,u=h,d=y),l=Math.min(l,_),c>l)return null}if(!u){const h=s.clone().lerp(o,c);u=a.map(f=>({...f,distanceToFace:f.half-Math.abs(h[f.key])})).sort((f,g)=>f.distanceToFace-g.distanceToFace)[0],d=Math.sign(h[u.key])||1}return{t:c,normal:u.vector.clone().multiplyScalar(d).normalize()}}function Xp(n,t,e=0){return _r()?(ur(),qp(n,t,Et,e)):null}function Bb(n,t){if(!_r())return null;ur();const e=kl(n),i=new b(Lt.clamp(e.x,-Et.halfExtents.x,Et.halfExtents.x),Lt.clamp(e.y,-Et.halfExtents.y,Et.halfExtents.y),Lt.clamp(e.z,-Et.halfExtents.z,Et.halfExtents.z));if(e.clone().sub(i).lengthSq()>t*t)return null;const o=Ob(i),r=o.clone().sub(n);return r.lengthSq()<pe?r.copy(Et.forward):r.normalize(),{point:o,normal:r}}function kb(n,t,e){const i=Xp(t,e);if(!i)return!1;const s=t.clone().lerp(e,i.t);return xr({point:s,normal:i.normal,type:"playerShield"}),Su(n,s),!0}function Hb(n,t,e,i){const s=Bb(n,t);if(!s)return!1;const o=new b(X.body.position.x,Yn,X.body.position.z),r=n.clone();r.y=o.y;const a=qp(r,o,Et),c=n.clone().sub(X.group.position);c.y=0;const l=c.lengthSq()>pe?c.normalize().dot(hn)>0:!0;return xr({point:s.point,normal:s.normal,type:"playerShield"}),Su(e,s.point),i&&l&&!!a}function Vb(n){const t=new vn,e=je+rr/2+eo;t.position.set(0,e+.16,0);const i=[],s=.15,o=-((n-1)*s)/2;for(let r=0;r<n;r+=1){const a=new $e({color:16766573,transparent:!0,opacity:.95,depthWrite:!1});a.toneMapped=!1;const c=new Vt(new un(.105,.075,.105),a);c.position.x=o+r*s,c.renderOrder=6,t.add(c),i.push(c)}return{root:t,pips:i}}function mo(n){const t=n==null?void 0:n.healthIndicator;if(!t)return;const e=n.active&&n.alive&&n.health>0;if(t.root.visible=e,!e)return;t.root.lookAt(Xe.position);const i=Math.max(0,n.health),s=Math.floor(i),o=Math.ceil(i);t.pips.forEach((r,a)=>{r.visible=a<o,r.visible&&(r.material.opacity=a<s?.95:.48,r.material.color.setHex(n.hitFlash>0?16773812:16766573))})}function Gb(n,t){const e=new vn,i=Ka(n.type),s=!!n.reserve,o=db(n),r=new Ve({color:Gt.enemy,roughness:.62,metalness:.04}),a=new Vt(new Fa(eo,rr,5,12),r);a.position.y=je,a.castShadow=!0,e.add(a);const c=n.type==="melee"?Vp():Hp({advanced:!1});e.add(c.root);const l=Vb(i);e.add(l.root),e.visible=!s,Ot.add(e);const u=new pt({mass:3,material:Xn,linearDamping:.18,angularDamping:1,position:new S(o.x,je,o.z)});return Dp(u,eo,rr,12),u.fixedRotation=!0,u.updateMassProperties(),u.userData={kind:"enemy",id:n.id,type:n.type},s||jt.addBody(u),{id:n.id,type:n.type,index:t,reserve:s,active:!s,group:e,body:u,lineOfSight:Pb(),healthIndicator:l,alive:!s,maxHealth:i,health:i,hitFlash:0,hitSlowTimer:0,hitKnockback:new b,weapon:c,attackCooldown:0,meleeAttackActive:!1,meleeAttackTimer:0,meleeImpactDone:!0,meleeAttackTarget:null,state:"patrol",spawn:o.clone(),patrolRadiusX:n.patrolRadiusX,patrolRadiusZ:n.patrolRadiusZ,patrolOffset:n.patrolOffset,lastKnownPlayerPosition:new b(n.x,0,n.z),searchMode:"travel",scanProgress:0,scanStartYaw:0,searchTimer:0,lostSightTimer:0,shootCooldown:0,burstShotsRemaining:0,burstShotTimer:0,coverPosition:null,coverReplanTimer:Lt.randFloat(.15,.65),glassTactic:"none",glassTargetFaceId:null,deathProgress:1,deathStartY:0,deathTargetY:.08,deathRotationZ:0,footstepTimer:Lt.randFloat(.05,.35),patrolPhase:n.patrolOffset}}function Wb(n,t){const e=new vn,i=new Vt(new os(.34,.34,.54,10),new Ve({color:3048310,roughness:.5,metalness:.08,emissive:1194804,emissiveIntensity:.55}));i.position.y=.36,i.castShadow=!0,e.add(i);const s=new Vt(new Oa(.35,.025,8,18),new Ve({color:16765293,roughness:.35,metalness:.2}));s.position.y=.55,s.rotation.x=Math.PI/2,e.add(s),e.position.copy(n),Ot.add(e),gr.push({type:"loot",id:`cargo-${t+1}`,group:e,collected:!1,spawn:n.clone()})}function qb(){const n=new vn,t=new Ve({color:Gt.teal,emissive:1534045,emissiveIntensity:.8,transparent:!0,opacity:.84,roughness:.44}),e=new Vt(new Oa(1.25,.055,8,54),t);e.rotation.x=Math.PI/2,e.position.y=.08,n.add(e);const i=new Vt(new os(1.2,1.2,.045,48),new Ve({color:2060133,emissive:1195834,emissiveIntensity:.35,transparent:!0,opacity:.42,roughness:.72}));return i.position.y=.025,i.receiveShadow=!0,n.add(i),n.position.copy(t1),Ot.add(n),{group:n,ring:e,pad:i,position:n.position}}function Yp(n,t=0){const e=n.clone();if(e.y=0,e.lengthSq()<.001)return e.set(0,0,-1);if(e.normalize(),t<=0)return e;const i=Math.atan2(e.x,e.z),s=(Math.random()*2-1)*t;return new b(Math.sin(i+s),0,Math.cos(i+s)).normalize()}function Zp(n,t,e="player"){const i=e==="enemy",s=new Vt(new Ni(Ei,12,8),new Ve({color:i?Gt.enemyShot:Gt.playerShot,emissive:i?Gt.enemyShotGlow:Gt.playerShotGlow,emissiveIntensity:1.8}));s.position.copy(n),s.castShadow=!0,Ot.add(s),te(i?"enemy-shot":"player-shot",{position:s.position}),i||Ja(s.position,D1,N1),no.push({mesh:s,direction:t.clone(),owner:e,speed:i?w1:E1})}function Kp(n,t,e="player",i=0){const s=t.clone().sub(n);if(s.y=0,s.lengthSq()<.001)return!1;s.normalize();const o=Yp(s,i);return Zp(n.clone(),o,e),!0}function Xb(n,t,e="player",i=0){const s=t.clone();if(s.y=0,s.lengthSq()<.001)return!1;s.normalize();const o=Yp(s,i);return Zp(n.clone(),o,e),!0}let Oo=null;function Yb(){if(Oo)return Oo;const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(.32,"rgba(255,214,98,0.92)"),e.addColorStop(.62,"rgba(255,116,48,0.42)"),e.addColorStop(1,"rgba(255,116,48,0)"),t.fillStyle=e,t.beginPath(),t.arc(32,32,30,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,246,190,0.55)",t.lineWidth=2,t.beginPath(),t.moveTo(8,32),t.lineTo(56,32),t.moveTo(32,8),t.lineTo(32,56),t.stroke(),Oo=new lo(n),Oo.colorSpace=Fe,Oo}function Eu(n){return!(n!=null&&n.root)||!n.muzzleLocal?null:(n.root.updateWorldMatrix(!0,!1),n.root.localToWorld(n.muzzleLocal.clone()))}function wu(n,t="player"){if(!(n!=null&&n.root)||!n.muzzleLocal)return;const e=t==="enemy",i=new fr({map:Yb(),color:e?Gt.enemyShot:Gt.playerShot,transparent:!0,opacity:.92,depthWrite:!1,blending:bi}),s=new Ua(i),o=e?eT:tT;s.position.copy(n.muzzleLocal),s.scale.set(o,o,1),n.root.add(s),ya.push({sprite:s,material:i,baseSize:o,elapsed:0,duration:Q1})}function Zb(n){var t;for(let e=ya.length-1;e>=0;e-=1){const i=ya[e];i.elapsed+=n;const s=i.elapsed/i.duration;i.material.opacity=Math.max(0,.92*(1-s));const o=1+s*.55;i.sprite.scale.set(i.baseSize*o,i.baseSize*o,1),i.elapsed>=i.duration&&((t=i.sprite.parent)==null||t.remove(i.sprite),i.material.dispose(),ya.splice(e,1))}}function Kb(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),i=128/2,s=e.createRadialGradient(i,i,2,i,i,i);s.addColorStop(0,"rgba(255, 241, 168, 1)"),s.addColorStop(.22,"rgba(240, 184, 77, 0.9)"),s.addColorStop(.46,"rgba(255, 109, 70, 0.45)"),s.addColorStop(1,"rgba(255, 109, 70, 0)"),e.fillStyle=s,e.fillRect(0,0,128,128),e.strokeStyle="rgba(255, 241, 168, 0.9)",e.lineWidth=5;for(let r=0;r<9;r+=1){const a=Math.PI*2*r/9,c=20+Math.random()*8,l=42+Math.random()*16;e.beginPath(),e.moveTo(i+Math.cos(a)*c,i+Math.sin(a)*c),e.lineTo(i+Math.cos(a)*l,i+Math.sin(a)*l),e.stroke()}const o=new lo(t);return o.colorSpace=Fe,o}const Tu=Kb();function xr({point:n,normal:t,type:e}){const i=e==="enemy"||e==="player",s=e==="glass",o=e==="glassBall",r=e==="playerShield",a=new fr({map:Tu,color:e==="enemy"?16753757:e==="player"?Gt.enemyShot:r||s?Gt.glassEdge:o?Gt.teal:Gt.playerShotGlow,depthWrite:!1,transparent:!0,opacity:.95}),c=new Ua(a);c.position.copy(n).addScaledVector(t,.08),c.scale.setScalar(i?.82:r?.7:s?.74:o?.52:.66),Ot.add(c);const l={sprite:c,spriteMaterial:a,decal:null,decalMaterial:null,spriteLife:i?.24:.22,maxSpriteLife:i?.24:.22,decalLife:0,maxDecalLife:0};if(e==="static"){const u=new Ve({color:1380876,roughness:.92,metalness:0,transparent:!0,opacity:.72,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=new Vt(new uo(.22,18),u);d.position.copy(n).addScaledVector(t,.012),d.quaternion.setFromUnitVectors(new b(0,0,1),t),d.receiveShadow=!0,Ot.add(d),l.decal=d,l.decalMaterial=u,l.decalLife=2.4,l.maxDecalLife=2.4}io.push(l)}function $p(n){const t=io[n];Ot.remove(t.sprite),t.spriteMaterial.dispose(),t.decal&&(Ot.remove(t.decal),t.decal.geometry.dispose(),t.decalMaterial.dispose()),io.splice(n,1)}function $b(n){for(let t=io.length-1;t>=0;t-=1){const e=io[t];e.spriteLife=Math.max(0,e.spriteLife-n),e.decalLife=Math.max(0,e.decalLife-n);const i=e.maxSpriteLife>0?e.spriteLife/e.maxSpriteLife:0,s=e.maxDecalLife>0?e.decalLife/e.maxDecalLife:0;e.sprite.material.opacity=i,e.sprite.scale.multiplyScalar(1+n*2.2),e.decalMaterial&&(e.decalMaterial.opacity=.72*s),e.spriteLife<=0&&e.decalLife<=0&&$p(t)}}function jb(n){const t=n.clone();t.y=Math.max(.16,t.y);const e=new fr({map:Tu,color:16761677,depthWrite:!1,transparent:!0,opacity:.98,blending:bi});e.toneMapped=!1;const i=new Ua(e);i.position.copy(t).add(new b(0,.28,0)),i.scale.setScalar(.78),Ot.add(i);const s=new $e({color:16769678,transparent:!0,opacity:.62,depthWrite:!1,side:sn,blending:bi});s.toneMapped=!1;const o=new Vt(new za(.2,.3,48),s);o.rotation.x=-Math.PI/2,o.position.set(t.x,.07,t.z),o.renderOrder=5,Ot.add(o);const r=[];for(let a=0;a<14;a+=1){const c=Math.PI*2*a/14+Math.random()*.28,l=new $e({color:Math.random()>.35?16773544:16742973,transparent:!0,opacity:.92,depthWrite:!1,side:sn,blending:bi});l.toneMapped=!1;const u=new Vt(new uo(.045+Math.random()*.025,7),l);u.position.copy(t).add(new b(0,.2,0)),u.renderOrder=5,Ot.add(u),r.push({mesh:u,material:l,velocity:new b(Math.sin(c)*(1.5+Math.random()*1.9),.55+Math.random()*.75,Math.cos(c)*(1.5+Math.random()*1.9))})}oo.push({flash:i,flashMaterial:e,ring:o,ringMaterial:s,sparks:r,life:Ld,maxLife:Ld})}function jp(n){const t=oo[n];Ot.remove(t.flash),t.flashMaterial.dispose(),Ot.remove(t.ring),t.ring.geometry.dispose(),t.ringMaterial.dispose(),t.sparks.forEach(e=>{Ot.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose()}),oo.splice(n,1)}function Jb(n){for(let t=oo.length-1;t>=0;t-=1){const e=oo[t];e.life=Math.max(0,e.life-n);const i=e.maxLife>0?e.life/e.maxLife:0,s=1-i;e.flashMaterial.opacity=Math.min(1,i*2.5),e.flash.scale.setScalar(.78+s*2.15),e.ringMaterial.opacity=.62*i,e.ring.scale.setScalar(1+s*(Ho/.3)),e.sparks.forEach(o=>{o.velocity.y-=n*2.6,o.mesh.position.addScaledVector(o.velocity,n),o.mesh.lookAt(Xe.position),o.material.opacity=.92*i}),e.life<=0&&jp(t)}}function Qb(n,t,e){var u,d;const i=n.crack.basis,s=((u=e==null?void 0:e.clone)==null?void 0:u.call(e))??i.normal.clone();s.lengthSq()<pe&&s.copy(i.normal),s.normalize();const o=((d=t==null?void 0:t.clone)==null?void 0:d.call(t))??n.mesh.position.clone().addScaledVector(i.normal,i.halfThickness),r=new fr({map:Tu,color:Gt.glassEdge,transparent:!0,opacity:.9,depthWrite:!1,blending:bi});r.toneMapped=!1;const a=new Ua(r);a.position.copy(o).addScaledVector(s,.08),a.scale.setScalar(Ga*.72),Ot.add(a);const c=[],l=22;for(let h=0;h<l;h+=1){const f=.045+Math.random()*.075,g=new uo(f,3),v=new $e({color:Math.random()>.35?Gt.glassEdge:Gt.glass,transparent:!0,opacity:.72,depthWrite:!1,side:sn,blending:bi});v.toneMapped=!1;const m=new Vt(g,v);m.position.copy(o).addScaledVector(i.tangent,(Math.random()-.5)*i.width*.78).addScaledVector(i.bitangent,(Math.random()-.5)*i.height*.78).addScaledVector(s,.03+Math.random()*.05),m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.renderOrder=3,Ot.add(m);const p=s.clone().multiplyScalar(.75+Math.random()*1.35);p.addScaledVector(i.tangent,(Math.random()-.5)*1.8),p.addScaledVector(i.bitangent,(Math.random()-.5)*1.45),p.y+=.35+Math.random()*.55,c.push({mesh:m,material:v,velocity:p,spin:new b((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)})}so.push({flash:a,flashMaterial:r,shards:c,life:.82,maxLife:.82})}function Jp(n){const t=so[n];Ot.remove(t.flash),t.flashMaterial.dispose(),t.shards.forEach(e=>{Ot.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose()}),so.splice(n,1)}function tA(n){for(let t=so.length-1;t>=0;t-=1){const e=so[t];e.life=Math.max(0,e.life-n);const i=e.maxLife>0?e.life/e.maxLife:0;e.flashMaterial.opacity=.9*Math.min(1,i*2.4),e.flash.scale.multiplyScalar(1+n*1.85),e.shards.forEach(s=>{s.velocity.y-=n*1.9,s.mesh.position.addScaledVector(s.velocity,n),s.mesh.rotation.x+=s.spin.x*n,s.mesh.rotation.y+=s.spin.y*n,s.mesh.rotation.z+=s.spin.z*n,s.material.opacity=.72*i}),e.life<=0&&Jp(t)}}function Qp(){hn.set(Math.sin(nr),0,Math.cos(nr)).normalize()}function bu(){Td.copy(X.group.position).addScaledVector(hn,32),Td.y=0}function Au(n){if(!Ae()){Is=n.clientX??null;return}let t=n.movementX||0;!t&&Is!==null&&typeof n.clientX=="number"&&(t=n.clientX-Is),Is=typeof n.clientX=="number"?n.clientX:Is,t!==0&&(nr-=t*Ya.mouseSensitivity*.003,Qp(),bu())}function tm(){de.movePointerId=null,de.moveRight=0,de.moveForward=0,de.moveSprint=!1,Ze.style.setProperty("--move-x","0px"),Ze.style.setProperty("--move-y","0px"),Ze.classList.remove("is-active")}function em(n){const t=n.clientX-de.moveStartX,e=n.clientY-de.moveStartY,i=Math.hypot(t,e);if(i<xT){de.moveRight=0,de.moveForward=0,de.moveSprint=!1,Ze.style.setProperty("--move-x","0px"),Ze.style.setProperty("--move-y","0px");return}const s=Math.min(i,Zd),o=t/i,r=e/i;de.moveRight=o,de.moveForward=-r,de.moveSprint=s>=Zd*yT,Ze.style.setProperty("--move-x",`${o*s}px`),Ze.style.setProperty("--move-y",`${r*s}px`)}function eA(n){var t;Ae()&&(n.preventDefault(),n.stopPropagation(),Je(!0),de.movePointerId=n.pointerId,de.moveStartX=n.clientX,de.moveStartY=n.clientY,Ze.classList.add("is-active"),(t=Ze.setPointerCapture)==null||t.call(Ze,n.pointerId),em(n))}function nA(n){n.pointerId===de.movePointerId&&(n.preventDefault(),n.stopPropagation(),em(n))}function Ru(n){n.pointerId===de.movePointerId&&(n.preventDefault(),n.stopPropagation(),tm())}function nm(){de.lookPointerId=null}function iA(n){var t;Ae()&&(n.preventDefault(),n.stopPropagation(),Je(!0),de.lookPointerId=n.pointerId,de.lookLastX=n.clientX,(t=Ai.setPointerCapture)==null||t.call(Ai,n.pointerId))}function sA(n){if(n.pointerId!==de.lookPointerId)return;n.preventDefault(),n.stopPropagation();const t=n.clientX-de.lookLastX;de.lookLastX=n.clientX,t!==0&&(nr-=t*Ya.mouseSensitivity*MT,Qp(),bu())}function Cu(n){n.pointerId===de.lookPointerId&&(n.preventDefault(),n.stopPropagation(),nm())}function oA(n){n.preventDefault(),n.stopPropagation(),as(),Je(!0),sm()}function rA(n){n.preventDefault(),n.stopPropagation(),as(),Je(!0),Wp()}function aA(n){n.preventDefault(),n.stopPropagation(),as(),Je(!0),_m()}function Pu(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=720}function yr(){return document.pointerLockElement===xn}function Lu(){document.body.classList.toggle("camera-locked",yr())}function Iu(){var n;if(!(Pu()||O.settingsOpen||O.phase!=="running"||yr()))try{const t=(n=xn.requestPointerLock)==null?void 0:n.call(xn);t!=null&&t.catch&&t.catch(()=>{})}catch{Lu()}}function $a(){var n;yr()&&((n=document.exitPointerLock)==null||n.call(document)),document.body.classList.remove("camera-locked")}function cA(){const n=yr();Is=null,Lu(),n||cs(),!n&&!Pu()&&O.phase==="running"&&!O.settingsOpen&&document.hasFocus()&&Qa(!0)}function Ae(){return O.phase==="running"&&!O.settingsOpen&&!O.resultShown}function go(){Ow.hidden=O.phase!=="ready"||O.settingsOpen||O.resultShown}function lA(){O.phase==="ready"&&(cs(),O.phase="running",Pp(),LT(),_u(),te("ui-start"),go(),Je(!0),Iu(),fi())}function Hl(){return!Ae()||O.reloadTimer>0||O.weaponAmmo>=mr?!1:(O.reloadTimer=b1,te("reload",{intensity:.75,position:X.group.position}),!0)}function uA(){O.reloadTimer=0,O.weaponAmmo=mr}function im(){if(!Ae()||O.shootCooldown>0||O.reloadTimer>0||om())return!1;if(O.weaponAmmo<=0)return Hl(),!1;const n=Eu(X.weapon)??X.group.position.clone(),t=new b;return Xe.getWorldDirection(t),t.y=0,t.lengthSq()<.001||!Xb(n,t,"player",A1)?!1:(Du(X.weapon,1),wu(X.weapon,"player"),O.weaponAmmo=Math.max(0,O.weaponAmmo-1),O.shootCooldown=T1,O.weaponAmmo<=0&&Hl(),!0)}function sm(){O.fireHeld=!0,im()}function di(){O.fireHeld=!1}function hA(n){if(O.reloadTimer>0){O.reloadTimer=Math.max(0,O.reloadTimer-n),O.reloadTimer<=0&&uA();return}O.fireHeld&&im()}function dA(){const n=new b;return Xe.getWorldDirection(n),n.y=0,n.lengthSq()<.001&&n.copy(hn),n.normalize()}function fA(n){const t=new b(X.group.position.x,Yn,X.group.position.z),e=new b(n.body.position.x,je,n.body.position.z);return!Kn.some(i=>{const{glassFace:s}=i;return!vr(i)||s&&!s.alive?!1:Za(t,e,i,.02)})}function pA(n){let t=null,e=Number.POSITIVE_INFINITY;const i=X.group.position;return Te.forEach(s=>{if(!s.alive)return;const o=new b(s.body.position.x-i.x,0,s.body.position.z-i.z),r=o.length();r>K1||r<pe||o.clone().normalize().dot(n)<$1||fA(s)&&r<e&&(e=r,t=s)}),t}function mA(){return!Ae()||O.meleeCooldown>0||X.meleeAttackActive?!1:(O.meleeCooldown=j1,X.meleeAttackActive=!0,X.meleeAttackTimer=0,X.meleeImpactDone=!1,X.meleeAttackDirection.copy(dA()),te("melee-swing",{intensity:1,pitch:Lt.randFloat(.92,1.08),position:X.group.position}),Ja(X.group.position,_p,z1),!0)}function gA(){const n=X.meleeAttackDirection.clone().normalize(),t=pA(n);if(!t)return!1;te("melee",{intensity:1.05,position:X.group.position});const e=new b(t.body.position.x,je,t.body.position.z),i=n.clone().multiplyScalar(-1);return xr({point:e.clone().addScaledVector(n,-lp*.45),normal:i,type:"enemy"}),zu(t,Cb(t),n),!0}function qs(n){return Lt.smoothstep(Lt.clamp(n,0,1),0,1)}function om(){return X.meleeAttackActive&&X.meleeAttackTimer<Xa}function rm(n){return!!(n!=null&&n.meleeAttackActive)&&n.meleeAttackTimer<qa}function Du(n,t=1){!n||n.kind!=="rifle"||(n.recoil=Math.min(1.25,n.recoil+t),n.recoilYaw=Lt.randFloatSpread(1),n.recoilRoll=Lt.randFloatSpread(1))}function vA(n,t,e){return new Ee(Lt.lerp(n.x,t.x,e),Lt.lerp(n.y,t.y,e),Lt.lerp(n.z,t.z,e))}function _A(n,t,e){n.root.position.copy(t),n.root.rotation.copy(e??n.restRotation??new Ee)}function Yc(n,t,e,i,s,o){n.root.position.lerpVectors(t,i,o),n.root.rotation.copy(vA(e,s,o))}function nf(n,t){var i;if(!n||n.kind!=="rifle")return;n.recoil*=Math.pow(.018,t/.16),n.recoil<.01&&(n.recoil=0);const e=n.recoil*n.recoil;n.root.position.copy(n.restPosition),n.root.position.z-=e*.07,n.root.position.y+=e*.018,n.root.rotation.x=(((i=n.restRotation)==null?void 0:i.x)??0)-e*.12,n.root.rotation.y=n.recoilYaw*e*.04,n.root.rotation.z=n.recoilRoll*e*.035}function xA(n,t,e){if(!n||n.kind!=="machete")return;if(n.root.position.copy(n.restPosition),!e){n.root.rotation.copy(n.restRotation??new Ee);return}const i=va,s=va+Od;let o=0,r=0,a=0;if(t<i){const c=qs(t/va);o=-.22*c,r=-.78*c,a=.58*c}else if(t<s){const c=qs((t-i)/Od);o=Lt.lerp(-.22,.16,c),r=Lt.lerp(-.78,.72,c),a=Lt.lerp(.58,-.5,c)}else{const c=qs((t-s)/Math.max(.001,qa-s));o=Lt.lerp(.16,0,c),r=Lt.lerp(.72,0,c),a=Lt.lerp(-.5,0,c)}n.root.rotation.set(o,r,a)}function yA(n){if(!n||n.kind!=="machete")return;if(!om()){_A(n,n.sheathedPosition,n.sheathedRotation);return}const t=X.meleeAttackTimer;if(t<_a){const s=qs(t/_a);Yc(n,n.sheathedPosition,n.sheathedRotation,n.combatPosition,n.combatRotation,s);return}if(t<xa){const s=qs((t-_a)/Mp);Yc(n,n.combatPosition,n.combatRotation,n.combatPosition,n.strikeRotation,s);return}const e=(t-xa)/Math.max(.001,Xa-xa),i=qs(e);Yc(n,n.combatPosition,n.strikeRotation,n.sheathedPosition,n.sheathedRotation,i)}function MA(n){X.meleeAttackActive&&(X.meleeAttackTimer+=n,!X.meleeImpactDone&&X.meleeAttackTimer>=xa&&(X.meleeImpactDone=!0,gA()),X.meleeAttackTimer>=Xa&&(X.meleeAttackActive=!1,X.meleeAttackTimer=0,X.meleeImpactDone=!0))}function sf(n,t){return!(n!=null&&n.alive)||n.type!=="melee"||!Ae()||n.attackCooldown>0||n.meleeAttackActive?!1:(n.attackCooldown=y1,n.meleeAttackActive=!0,n.meleeAttackTimer=0,n.meleeImpactDone=!1,n.meleeAttackTarget=t,te("melee-swing",{intensity:.9,pitch:Lt.randFloat(.82,.94),position:n.group.position}),!0)}function SA(n){var i;const t=n.meleeAttackTarget;if(!n.alive||!t)return!1;const e=n.group.position;if(t.type==="glass")return!((i=t.glassFace)!=null&&i.alive)||rn(e,t.point)>Ws?!1:(xr({point:t.point.clone().addScaledVector(t.normal,.04),normal:t.normal,type:"glass"}),te("melee",{position:n.group.position}),te("impact-glass",{position:t.point}),Up(t.glassFace,t.point,t.normal),!0);if(t.type==="player"){if(!X.alive||n.state!=="chase")return!1;const s=X.group.position,o=s.clone().sub(e);if(o.y=0,o.length()>Ws||Da(e,s,.08))return!1;const r=o.lengthSq()>pe?o.normalize():new b;te("melee",{position:n.group.position});const a=new b(e.x,je,e.z),c=new b(s.x,Yn,s.z);return kb(zd,a,c)||Ou(zd,r),!0}return!1}function EA(n,t){n.meleeAttackActive&&(n.meleeAttackTimer+=t,!n.meleeImpactDone&&n.meleeAttackTimer>=va&&(n.meleeImpactDone=!0,SA(n)),n.meleeAttackTimer>=qa&&(n.meleeAttackActive=!1,n.meleeAttackTimer=0,n.meleeImpactDone=!0,n.meleeAttackTarget=null))}function wA(n){nf(X.weapon,n),yA(X.meleeWeapon),Te.forEach(t=>{var e;((e=t.weapon)==null?void 0:e.kind)==="rifle"?nf(t.weapon,n):xA(t.weapon,t.meleeAttackTimer,rm(t))})}function TA(n){MA(n),Te.forEach(t=>EA(t,n))}function Vl(n){n&&(n.kind==="rifle"&&(n.recoil=0,n.recoilYaw=0,n.recoilRoll=0),n.root.position.copy(n.restPosition),n.root.rotation.copy(n.restRotation??new Ee))}function am(){X.meleeAttackActive=!1,X.meleeAttackTimer=0,X.meleeImpactDone=!0,X.meleeAttackDirection.copy(hn),Vl(X.weapon),Vl(X.meleeWeapon)}function Nu(n){n.meleeAttackActive=!1,n.meleeAttackTimer=0,n.meleeImpactDone=!0,n.meleeAttackTarget=null,Vl(n.weapon)}function cm(){return Ce.has("KeyW")||Ce.has("KeyA")||Ce.has("KeyS")||Ce.has("KeyD")||Ce.has("ArrowUp")||Ce.has("ArrowDown")||Ce.has("ArrowLeft")||Ce.has("ArrowRight")||Math.abs(de.moveForward)>0||Math.abs(de.moveRight)>0}function Uu(){return Ce.has("ShiftLeft")||Ce.has("ShiftRight")||de.moveSprint}function bA(n){if(!Ae()||!cm()){X.footstepTimer=0;return}const t=Uu();X.footstepTimer-=n,!(X.footstepTimer>0)&&(te("player-footstep",{intensity:t?1:.72,pitch:t?Lt.randFloat(1.02,1.12):Lt.randFloat(.88,1),position:X.group.position}),t&&Ja(X.group.position,U1,F1),X.footstepTimer=t?cT:aT)}function AA(){const n=Ae()&&cm()&&Uu();document.body.classList.toggle("sprinting",n)}function RA(n){X.hitSlowTimer=Math.max(0,X.hitSlowTimer-n);const t=new b;Xe.getWorldDirection(t),t.y=0,t.lengthSq()<pe?t.copy(hn):t.normalize();const e=new b().crossVectors(t,ir).normalize(),i=new b;(Ce.has("KeyW")||Ce.has("ArrowUp"))&&i.add(t),(Ce.has("KeyS")||Ce.has("ArrowDown"))&&i.sub(t),(Ce.has("KeyD")||Ce.has("ArrowRight"))&&i.add(e),(Ce.has("KeyA")||Ce.has("ArrowLeft"))&&i.sub(e),i.addScaledVector(t,de.moveForward),i.addScaledVector(e,de.moveRight),i.lengthSq()>0&&(i.normalize(),X.body.wakeUp());const o=(Uu()?mT:pT)*(X.hitSlowTimer>0?fT:1);X.body.velocity.x=i.x*o+X.hitKnockback.x,X.body.velocity.z=i.z*o+X.hitKnockback.z,X.body.velocity.y=0,X.body.position.y=Yn,X.hitKnockback.multiplyScalar(Math.pow(.04,n/Ep))}function CA(n){return new b(Math.sin(n.group.rotation.y),0,Math.cos(n.group.rotation.y)).normalize()}function lm(n){return Math.atan2(n.x,n.z)}function um(n,t){return Math.atan2(Math.sin(t-n),Math.cos(t-n))}function PA(n,t,e,i=0){if(t.lengthSq()<=.001)return;const s=lm(t);if(i<=0){n.group.rotation.y=s;return}const o=um(n.group.rotation.y,s),r=1-Math.pow(.001,e/i);n.group.rotation.y+=o*Lt.clamp(r,0,1)}function hm(n,t){const e=new b(n.x,je,n.z),i=new b(t.x,Yn,t.z);return!Kn.some(s=>{const{glassFace:o}=s;return o||!vr(s)?!1:Za(e,i,s,.03)})}function Da(n,t,e=.03){const i=new b(n.x,Bd,n.z),s=new b(t.x,Bd,t.z);let o=null;return gu.forEach(r=>{if(!r.alive)return;const a=aR(i,s,r.body,e);!a||o&&a.t>=o.t||(o={glassFace:r,t:a.t,normal:a.normal,point:i.clone().lerp(s,a.t)})}),o}function LA(n,t,e=0){return Math.abs(n.x-t.x)<=to+e&&Math.abs(n.z-t.z)<=to+e}function rn(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function IA(n,t,e){var o;const i=to+S1;return((o=[new b(e.x-i,0,e.z-i),new b(e.x+i,0,e.z-i),new b(e.x-i,0,e.z+i),new b(e.x+i,0,e.z+i)].map(r=>{const a=Da(n,r,.08),c=Da(r,t,.08),l=(a?4:0)+(c?4:0);return{point:r,score:n.distanceTo(r)+r.distanceTo(t)+l}}).sort((r,a)=>r.score-a.score)[0])==null?void 0:o.point)??null}function DA(n,t,e,i){const s=t.point.clone(),o=rn(e,s),r=t.glassFace.cubeOrigin,a=LA(i,r,.05),c=a?null:IA(e,i,r),l=e.distanceTo(i),u=c?e.distanceTo(c)+c.distanceTo(i):Number.POSITIVE_INFINITY,d=l+t.glassFace.health*M1;return{mode:a||n.type==="ranged"||t.glassFace.health<=2||o<=Ws||d<=u?"break":"detour",glassFace:t.glassFace,point:s,normal:t.normal,detourPoint:c}}function NA(n,t,e){if(O.invisibleToEnemies)return!1;const i=X.group.position,s=n.group.position;if(t>up||!hm(s,i))return!1;if(e.lengthSq()<pe)return!0;const o=Bp(n);return CA(n).dot(e.clone().normalize())>=o}function UA(n,t=.32){return Kn.some(e=>{if(e.glassFace||!vr(e))return!1;const i=xu(e);return i?Math.abs(n.x-i.center.x)<=i.halfExtents.x+t&&Math.abs(n.z-i.center.z)<=i.halfExtents.z+t:!1})}function FA(n,t,e=.18){const i=new b(n.x,je,n.z),s=new b(t.x,je,t.z);return!Kn.some(o=>o.glassFace||!vr(o)?!1:Za(i,s,o,e))}function dm(n,t,e){if(!t||!is(t.x,t.z,.9))return!1;const i=rn(t,e);return i>=La+1.4&&i<=Gs&&!UA(t,.22)&&hm(t,e)&&FA(n.group.position,t,.08)}function zA(n,t){const e=n.group.position;let i=null,s=Number.POSITIVE_INFINITY;return Rp.forEach(({position:o})=>{const r=rn(e,o);if(r>vp||!dm(n,o,t))return;const a=rn(t,o),c=Te.some(d=>d!==n&&d.alive&&d.type==="ranged"&&rn(d.group.position,o)<1.5)?5:0,l=(La+Gs)*.5,u=r*1.15+Math.abs(a-l)*.45+c;u<s&&(s=u,i=o)}),(i==null?void 0:i.clone())??null}function OA(n,t,e,i,s,o){if(n.type!=="ranged"||!(n.state==="chase"||n.state==="interest")||!i||o||s>Gs+vp){n.coverPosition=null,n.coverReplanTimer=Hd;return}n.coverReplanTimer=Math.max(0,n.coverReplanTimer-t),!(n.coverPosition&&n.coverReplanTimer>0&&dm(n,n.coverPosition,e))&&(n.coverReplanTimer>0||(n.coverReplanTimer=Hd,n.coverPosition=zA(n,e)))}function fm(n){return n<=hp?"chase":"interest"}function Xs(n,t){n.state=t,t==="search"&&(n.searchTimer=gp,n.searchMode="travel",n.scanProgress=0,n.scanStartYaw=n.group.rotation.y,n.coverPosition=null,ro(n)),t==="interest"&&(n.lostSightTimer=Nd,n.searchMode="travel",n.scanProgress=0),t==="chase"&&(n.lostSightTimer=Nd,n.searchMode="travel",n.scanProgress=0),t==="patrol"&&(n.searchTimer=0,n.lostSightTimer=0,n.searchMode="travel",n.scanProgress=0,n.coverPosition=null,ro(n))}function BA(n,t=null){n.alive&&(n.lastKnownPlayerPosition.copy(X.group.position),Xs(n,t??fm(rn(n.group.position,X.group.position))))}function ja(n){return n.state==="interest"||n.state==="chase"}function kA(){return Te.filter(n=>n.active)}function pm(){return Te.filter(n=>n.active&&n.alive)}function mm(n,t){const e=O.alarmLevel>=V1;Te.forEach(i=>{if(!i.active||!i.alive)return;const s=rn(i.group.position,n);!e&&s>t||(i.lastKnownPlayerPosition.copy(n),ja(i)||Xs(i,"search"))})}function gm(n,t,e=yp){if(!Ae())return;const i=O.alarmLevel,s=O.radioDisabled?W1:100;O.alarmLevel=Lt.clamp(O.alarmLevel+n,0,s),O.alarmHoldTimer=xp,O.alarmPulseTimer=.42,O.lastNoisePosition.copy(t),O.lastNoisePosition.y=0,mm(O.lastNoisePosition,e),i<ns&&O.alarmLevel>=ns?(te("alarm",{intensity:1,position:O.lastNoisePosition}),O.reinforcementTimer=Math.min(O.reinforcementTimer,.45)):i<ar&&O.alarmLevel>=ar&&te("spot",{intensity:.78,position:O.lastNoisePosition})}function Ja(n,t,e){if(!Ae()||O.invisibleToEnemies)return;const i=n.clone();i.y=0,gm(e,i,t)}function HA(n,t){const e=t<=hp?26:18;gm(e,X.group.position,yp),te("spot",{intensity:.82,position:n.group.position})}function VA(n){return!n.reserve||n.active?!1:(n.active=!0,n.alive=!0,n.group.visible=!0,n.maxHealth=Ka(n),n.health=n.maxHealth,n.hitFlash=0,mo(n),n.hitSlowTimer=0,n.hitKnockback.set(0,0,0),n.attackCooldown=0,Nu(n),n.shootCooldown=0,ro(n),n.coverPosition=null,n.coverReplanTimer=Lt.randFloat(.15,.65),n.searchMode="travel",n.searchTimer=gp,n.lostSightTimer=0,n.scanProgress=0,n.scanStartYaw=n.group.rotation.y,n.glassTactic="none",n.glassTargetFaceId=null,n.deathProgress=1,n.group.rotation.set(0,0,0),n.group.position.set(n.spawn.x,0,n.spawn.z),n.body.position.set(n.spawn.x,je,n.spawn.z),n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0),n.body.wakeUp(),n.lastKnownPlayerPosition.copy(O.lastNoisePosition),jt.bodies.includes(n.body)||jt.addBody(n.body),Xs(n,"search"),te("alarm",{intensity:.72,position:n.group.position}),!0)}function GA(n){if(O.radioDisabled||O.alarmLevel<ns){O.reinforcementTimer=Math.min(O.reinforcementTimer,cr);return}const t=Te.find(e=>e.reserve&&!e.active);t&&(O.reinforcementTimer=Math.max(0,O.reinforcementTimer-n),!(O.reinforcementTimer>0)&&VA(t)&&(O.reinforcementTimer=cr))}function WA(n){Te.some(e=>e.active&&e.alive&&ja(e))?O.alarmHoldTimer=xp:O.alarmHoldTimer=Math.max(0,O.alarmHoldTimer-n),O.alarmPulseTimer=Math.max(0,O.alarmPulseTimer-n),O.alarmLevel>0&&O.alarmHoldTimer<=0&&(O.alarmLevel=Math.max(0,O.alarmLevel-H1*n)),GA(n)}function qA(){return gr.find(n=>n.type==="radio")??null}function vm(){const n=qA();return!n||n.disabled||O.radioDisabled?null:rn(X.group.position,n.position)<=G1?n:null}function Fu(n,t){n.ring.rotation.z+=t*(n.disabled?.45:1.8),n.ring.visible=!n.disabled,n.screenMaterial.color.setHex(n.disabled?2502701:4575676),n.screenMaterial.emissive.setHex(n.disabled?397583:1759429),n.screenMaterial.emissiveIntensity=n.disabled?.12:.75+Math.sin(es.elapsedTime*4.4)*.22}function XA(n){return!n||n.disabled?!1:(n.disabled=!0,O.radioDisabled=!0,O.alarmLevel=Math.min(O.alarmLevel,q1),O.alarmHoldTimer=0,O.alarmPulseTimer=.42,O.reinforcementTimer=cr,O.lastNoisePosition.copy(n.position),te("radio-sabotage",{intensity:1,position:n.position}),mm(n.position,_p+8),Fu(n,0),fi(),!0)}function _m(){return Ae()?XA(vm()):!1}function xm(){const n=Ae()&&!O.settingsOpen?vm():null;Iw.hidden=!n,Dw.textContent=n?"Заглушить связь":"",Nw.textContent=Pu()?"кнопка":"E",er.disabled=!n,er.classList.toggle("is-available",!!n)}function YA(n,t=X.group.position,e=0){if(!n.alive||n.type!=="ranged"||!Ae())return!1;const i=Eu(n.weapon)??new b(n.body.position.x,je,n.body.position.z),s=new b(t.x,0,t.z),o=Kp(i,s,"enemy",e);return o&&(Du(n.weapon,.82),wu(n.weapon,"enemy")),o}function ZA(n,t){if(!n.alive||n.type!=="ranged"||!Ae())return!1;const e=Eu(n.weapon)??new b(n.body.position.x,je,n.body.position.z),i=Kp(e,t.point,"enemy");return i&&(Du(n.weapon,.82),wu(n.weapon,"enemy")),i}function ro(n){n.burstShotsRemaining=0,n.burstShotTimer=0}function KA(n){n.burstShotsRemaining=R1,n.burstShotTimer=0}function $A(n,t,e,i){if(n.type==="ranged"){if(!i){ro(n);return}n.shootCooldown>0||(n.burstShotsRemaining<=0&&KA(n),n.burstShotTimer=Math.max(0,n.burstShotTimer-t),!(n.burstShotTimer>0)&&(YA(n,e,L1)&&(n.burstShotsRemaining-=1,n.burstShotTimer=C1),n.burstShotsRemaining<=0&&(n.shootCooldown=P1,n.burstShotTimer=0)))}}function ym(n){var e;const t=((e=n==null?void 0:n.clone)==null?void 0:e.call(n))??new b;return t.y=0,t.lengthSq()<pe?null:t.normalize()}function jA(n,t){const e=ym(t);e&&(n.hitSlowTimer=Sp,n.hitKnockback.set(e.x*Gd,0,e.z*Gd))}function JA(n){const t=ym(n);t&&(X.hitSlowTimer=Ep,X.hitKnockback.set(t.x*Wd,0,t.z*Wd))}function QA(n,t){const e=Math.hypot(n.body.velocity.x,n.body.velocity.z);if(!n.alive||e<.35){n.footstepTimer=.08;return}if(n.footstepTimer-=t,n.footstepTimer>0)return;const i={patrol:.18,search:.23,interest:.3,chase:.38}[n.state]??.2;te("enemy-footstep",{intensity:i,pitch:n.type==="melee"?Lt.randFloat(.76,.88):Lt.randFloat(.9,1.02),position:n.group.position}),n.footstepTimer=Lt.clamp(lT/Math.max(e,.1),uT,hT)}function tR(n,t){if(!n.alive||!Ae()){n.body.velocity.x=0,n.body.velocity.z=0,n.footstepTimer=.08;return}n.patrolPhase+=t,n.shootCooldown=Math.max(0,n.shootCooldown-t),n.attackCooldown=Math.max(0,n.attackCooldown-t),n.hitSlowTimer=Math.max(0,n.hitSlowTimer-t);const e=X.group.position,i=n.group.position,s=e.clone().sub(i);s.y=0;const o=s.length(),r=s.lengthSq()>pe?s.clone().normalize():new b,a=NA(n,o,s),c=a?Da(i,e,.08):null,l=c?DA(n,c,i,e):null;n.glassTactic=(l==null?void 0:l.mode)??"none",n.glassTargetFaceId=(l==null?void 0:l.glassFace.id)??null,a?(ja(n)||HA(n,o),n.lastKnownPlayerPosition.copy(e),Xs(n,fm(o))):n.state==="chase"||n.state==="interest"?(n.lostSightTimer-=t,n.lostSightTimer<=0&&Xs(n,"search")):n.state==="search"&&n.searchMode==="travel"&&(n.searchTimer=Math.max(0,n.searchTimer-t)),OA(n,t,e,a,o,l);let u=new b,d=tf(n),h=null;if(n.state==="chase"||n.state==="interest"){const g=n.state==="chase",v=g?Rb(n):Ab(n);if((l==null?void 0:l.mode)==="detour"&&l.detourPoint)u=l.detourPoint.clone().sub(i),u.y=0,u.lengthSq()>.01&&u.normalize(),h=u,d=v;else if((l==null?void 0:l.mode)==="break"){const m=l.point.clone().sub(i);m.y=0;const p=m.length();h=p>pe?m.clone().normalize():r,n.type==="ranged"&&p<=Gs||n.type==="melee"&&p<=Ws?(u.set(0,0,0),d=0):(u=h.clone(),d=v)}else n.type==="ranged"&&a&&n.coverPosition?(o<La?(u=r.clone().multiplyScalar(-1),d=v):(u=n.coverPosition.clone().sub(i),u.y=0,u.length()>I1?(u.normalize(),d=v):(u.set(0,0,0),d=0)),h=r):g&&n.type==="ranged"&&a?(o<La?(u=r.clone().multiplyScalar(-1),d=v):(u=r.clone(),d=v),h=r):(u=(a?e:n.lastKnownPlayerPosition).clone().sub(i),u.y=0,u.lengthSq()>.01&&u.normalize(),h=a?r:u,d=v)}else if(n.state==="search"){const g=n.lastKnownPlayerPosition.clone().sub(i);g.y=0,n.searchMode==="travel"&&n.searchTimer>0&&g.length()>g1?(u=g.normalize(),h=u,d=bb(n)):(n.searchMode!=="scan"&&(n.searchMode="scan",n.scanProgress=0,n.scanStartYaw=n.group.rotation.y),n.scanProgress=Math.min(Ud,n.scanProgress+_1*t),n.group.rotation.y=n.scanStartYaw+n.scanProgress,u.set(0,0,0),d=0,n.scanProgress>=Ud&&Xs(n,"patrol"))}else u=new b(n.spawn.x+Math.cos(n.patrolPhase*.55)*n.patrolRadiusX,0,n.spawn.z+Math.sin(n.patrolPhase*.55)*n.patrolRadiusZ).sub(i),u.y=0,u.lengthSq()>.01&&u.normalize(),d=tf(n);rm(n)&&(u.set(0,0,0),d=0);const f=n.hitSlowTimer>0?dT:1;n.body.velocity.x=u.x*d*f+n.hitKnockback.x,n.body.velocity.z=u.z*d*f+n.hitKnockback.z,n.body.velocity.y=0,n.body.position.y=je,n.hitKnockback.multiplyScalar(Math.pow(.04,t/Sp)),QA(n,t),!h&&u.lengthSq()>.001&&(h=u),(h==null?void 0:h.lengthSq())>.001&&PA(n,h,t,n.state==="chase"||n.state==="interest"?v1:0),$A(n,t,e,n.type==="ranged"&&(n.state==="chase"||n.state==="interest")&&a&&!l&&o>2.4&&o<=Gs),(l==null?void 0:l.mode)==="break"&&n.type==="ranged"&&n.shootCooldown<=0&&rn(i,l.point)<=Gs&&(ZA(n,l),n.shootCooldown=x1),(l==null?void 0:l.mode)==="break"&&n.type==="melee"&&n.attackCooldown<=0&&rn(i,l.point)<=Ws&&sf(n,{type:"glass",glassFace:l.glassFace,point:l.point.clone(),normal:l.normal.clone()}),n.type==="melee"&&n.state==="chase"&&!c&&o<=Ws&&n.attackCooldown<=0&&sf(n,{type:"player"})}function eR(n){for(let t=no.length-1;t>=0;t-=1){const e=no[t],i=e.mesh.position.clone(),s=i.clone().addScaledVector(e.direction,e.speed*n),o=nR(i,s,e);if(o){e.mesh.position.lerpVectors(i,s,o.t),xr({point:e.mesh.position.clone(),normal:o.normal,type:o.type}),o.type==="enemy"?zu(o.enemy,kd,e.direction):o.type==="playerShield"?Su(Fd,e.mesh.position.clone()):o.type==="player"?Ou(Fd,e.direction):o.type==="glass"?(te("impact-glass",{position:e.mesh.position}),Up(o.glassFace,e.mesh.position.clone(),o.normal)):o.type==="glassBall"?(nb(o.ball,e.direction,e.mesh.position),Op(o.ball,kd),te("ball-hit",{position:e.mesh.position})):o.type==="static"&&te("impact-static",{position:e.mesh.position}),Mm(t);continue}e.mesh.position.copy(s)}}function Mm(n){const t=no[n];Ot.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),no.splice(n,1)}function nR(n,t,e){let i=null;if(e.owner==="enemy"){const s=Xp(n,t,Ei);s&&(i={type:"playerShield",...s});const o=oR(),r=of(n,t,o,Ei);if(r!==null&&(!i||r<i.t)){const a=n.clone().lerp(t,r),c=rf(a,o,e.direction);i={type:"player",t:r,normal:c}}}else Te.forEach(s=>{if(!s.alive)return;const o=rR(s),r=of(n,t,o,Ei);if(r!==null&&(!i||r<i.t)){const a=n.clone().lerp(t,r),c=rf(a,o,e.direction);i={type:"enemy",enemy:s,t:r,normal:c}}});return Ii.forEach(s=>{if(s.exploded)return;const o=new b(s.body.position.x,s.body.position.y,s.body.position.z),r=iR(n,t,o,ui+Ei);if(r!==null&&(!i||r<i.t)){const c=n.clone().lerp(t,r).clone().sub(o);c.lengthSq()<pe&&c.copy(e.direction).multiplyScalar(-1),c.normalize(),i={type:"glassBall",ball:s,t:r,normal:c}}}),Kn.forEach(s=>{const{glassFace:o}=s;if(!vr(s)||o&&!o.alive)return;const r=Za(n,t,s,Ei);r&&(!i||r.t<i.t)&&(i=o?{type:"glass",glassFace:o,...r}:{type:"static",...r})}),i}function iR(n,t,e,i){const s=t.clone().sub(n),o=s.lengthSq();if(o<pe)return n.distanceToSquared(e)<=i*i?0:null;const r=Lt.clamp(e.clone().sub(n).dot(s)/o,0,1);return n.clone().addScaledVector(s,r).distanceToSquared(e)<=i*i?r:null}function Sm(n,t,e){const i=e.clone().sub(t),s=i.lengthSq();if(s<pe)return t.clone();const o=Lt.clamp(n.clone().sub(t).dot(i)/s,0,1);return t.clone().addScaledVector(i,o)}function sR(n,t,e,i){const s=t.clone().sub(n),o=i.clone().sub(e),r=n.clone().sub(e),a=s.lengthSq(),c=o.lengthSq(),l=o.dot(r);let u=0,d=0;if(a<=pe&&c<=pe||a<=pe)return 0;if(c<=pe)return Lt.clamp(-s.dot(r)/a,0,1);const h=s.dot(r),f=s.dot(o),g=a*c-f*f;return g!==0&&(u=Lt.clamp((f*l-h*c)/g,0,1)),d=(f*u+l)/c,d<0?(d=0,u=Lt.clamp(-h/a,0,1)):d>1&&(d=1,u=Lt.clamp((f-h)/a,0,1)),u}function Em(n,t,e,i){const s=e/2;return{start:new b(n.x,t-s,n.z),end:new b(n.x,t+s,n.z),radius:i}}function oR(){return Em(X.body.position,Yn,Pa,mu)}function rR(n){return Em(n.body.position,je,rr,lp)}function of(n,t,e,i=0){const s=e.radius+i,o=sR(n,t,e.start,e.end),r=n.clone().lerp(t,o),a=Sm(r,e.start,e.end);return r.distanceToSquared(a)<=s*s?o:null}function rf(n,t,e){const i=Sm(n,t.start,t.end),s=n.clone().sub(i);return s.lengthSq()<pe&&s.copy(e).multiplyScalar(-1),s.normalize()}function wm(n,t,e,i,s=0){const o=t.clone().sub(n);let r=0,a=1,c=new b;for(const l of["x","y","z"]){const u=e[l]-i[l]-s,d=e[l]+i[l]+s,h=n[l],f=o[l];if(Math.abs(f)<pe){if(h<u||h>d)return null;continue}let g=(u-h)/f,v=(d-h)/f,m=-1;if(g>v&&([g,v]=[v,g],m=1),g>r&&(r=g,c=new b,c[l]=m),a=Math.min(a,v),r>a)return null}if(c.lengthSq()<pe){const u=n.clone().lerp(t,r).sub(e),d={x:i.x+s-Math.abs(u.x),y:i.y+s-Math.abs(u.y),z:i.z+s-Math.abs(u.z)},h=Object.entries(d).sort((f,g)=>f[1]-g[1])[0][0];c[h]=Math.sign(u[h])||1}return{t:r,normal:c.normalize()}}function aR(n,t,e,i=0){const s=e.shapes[0].halfExtents,o=e.position;return wm(n,t,new b(o.x,o.y,o.z),new b(s.x,s.y,s.z),i)}function zu(n,t,e=null){n!=null&&n.alive&&(n.health=Math.max(0,n.health-t),n.hitFlash=.18,jA(n,e),mo(n),te("enemy-damage",{position:n.group.position}),n.health<=0?lR(n):O.invisibleToEnemies||BA(n))}function Ou(n,t=null){Ae()&&(O.godMode||(O.hp=Math.max(0,O.hp-n),JA(t),te("player-damage",{position:X.group.position}),O.hp<=0&&(cR(),Rm(!1))))}function cR(){X.alive&&(X.alive=!1,X.deathProgress=0,X.deathStartY=X.group.position.y,X.deathRotationZ=X.group.rotation.y>0?-.22:.22,X.body.velocity.set(0,0,0),X.hitKnockback.set(0,0,0),X.hitSlowTimer=0,am(),Fb(),cs(),document.body.classList.add("death-vignette"),jt.bodies.includes(X.body)&&jt.removeBody(X.body))}function lR(n){n.alive&&(n.alive=!1,n.health=0,O.energy+=gT,mo(n),n.deathProgress=0,n.deathStartY=n.group.position.y,n.deathRotationZ=n.group.rotation.y>0?-.28:.28,n.body.velocity.set(0,0,0),Nu(n),jt.removeBody(n.body),te("enemy-death",{position:n.group.position}))}function uR(n,t){if(n.alive||n.deathProgress>=1)return;n.deathProgress=Math.min(1,n.deathProgress+t/ST);const e=1-Math.pow(1-n.deathProgress,3);n.group.rotation.x=-Math.PI/2*e,n.group.rotation.z=n.deathRotationZ*e,n.group.position.y=Lt.lerp(n.deathStartY,n.deathTargetY,e)}function hR(n){if(X.alive||X.deathProgress>=1)return;X.deathProgress=Math.min(1,X.deathProgress+n/ET);const t=1-Math.pow(1-X.deathProgress,3);X.group.rotation.x=-Math.PI/2*t,X.group.rotation.z=X.deathRotationZ*t,X.group.position.y=Lt.lerp(X.deathStartY,X.deathTargetY,t)}function dR(n){gr.forEach(t=>{if(t.type==="radio"){Fu(t,n);return}t.type!=="loot"||t.collected||(t.group.rotation.y+=n*1.8,t.group.position.y=Math.sin(es.elapsedTime*4)*.05,X.group.position.distanceTo(t.group.position)<.9&&(t.collected=!0,t.group.visible=!1,O.cargo=Math.min(O.cargoNeeded,O.cargo+1),O.hp=Math.min(pu,O.hp+X1),te("loot",{position:t.group.position})))}),xm()}function fR(n){Gl.ring.rotation.z+=n*(O.cargo?1.8:.55);const t=X.group.position.distanceTo(Gl.position);O.phase==="running"&&(O.cargo>=O.cargoNeeded&&t<1.35?(O.extractionProgress=Math.min(1,O.extractionProgress+n*.85),O.extractionProgress>=1&&Rm(!0)):O.extractionProgress=Math.max(0,O.extractionProgress-n*1.4))}function Tm(){X.alive&&X.group.position.set(X.body.position.x,0,X.body.position.z),Te.forEach(n=>{n.group.position.x=n.body.position.x,n.group.position.z=n.body.position.z,n.alive&&(n.group.position.y=0)}),bu(),X.alive&&(X.group.rotation.y=Math.atan2(hn.x,hn.z))}function bm(n){const t=window.innerWidth<640?5.2:6.4,e=(window.innerWidth<640?2.8:3.45)+Yw,i=window.innerWidth<640?jw:$w;Ed.copy(X.group.position).addScaledVector(hn,-t).addScaledVector(ir,e),wd.copy(X.group.position).addScaledVector(ir,i);const s=1-Math.pow(8e-4,n);Xe.position.lerp(Ed,s);const o=Xe.position.clone().sub(X.group.position);o.y=0,o.lengthSq()>pe&&(o.setLength(t),Xe.position.x=X.group.position.x+o.x,Xe.position.z=X.group.position.z+o.z),Xe.position.y=Lt.lerp(Xe.position.y,X.group.position.y+e,s),Sd.copy(wd),Xe.lookAt(Sd)}function pR(){return O.radioDisabled?"глушено":O.alarmLevel>=k1?"бой":O.alarmLevel>=ns?"резерв":O.alarmLevel>=ar?"поиск":"тихо"}function mR(){const n=pm().filter(ja).map(t=>({position:t.group.position,label:t.state==="chase"?"Атака":"Контакт",distance:rn(X.group.position,t.group.position)})).sort((t,e)=>t.distance-e.distance)[0];if(n)return n;if(O.alarmLevel>=ar){const t=rn(X.group.position,O.lastNoisePosition);if(t>.75)return{position:O.lastNoisePosition,label:"Шум",distance:t}}return null}function gR(){const n=mR();if(Md.hidden=!n||O.phase!=="running"||O.settingsOpen||O.invisibleToEnemies,!n)return;const t=n.position.clone().sub(X.group.position);if(t.y=0,t.lengthSq()<pe){Md.hidden=!0;return}const e=lm(t.normalize()),i=um(nr,e);Pw.style.transform=`rotate(${i}rad)`,Lw.textContent=n.label}function vR(){Cw.textContent=O.invisibleToEnemies?"невидим":pR(),document.body.classList.toggle("alarm-investigate",O.alarmLevel>=ar&&O.alarmLevel<ns),document.body.classList.toggle("alarm-combat",O.alarmLevel>=ns),gR()}function fi(){ww.textContent=O.godMode?"∞":Math.round(O.hp).toString(),Tw.textContent=Math.floor(O.energy).toString(),bw.textContent=O.reloadTimer>0?"перез.":`${O.weaponAmmo}/${mr}`,Aw.textContent=`${O.cargo}/${O.cargoNeeded}`;const n=kA(),t=pm().length;if(Rw.textContent=`${t}/${n.length}`,vR(),xm(),O.phase==="won"){Io.textContent="Эвакуация",Do.style.width="100%",No.textContent="успех";return}if(O.phase==="lost"){Io.textContent="Рейд сорван",Do.style.width="0%",No.textContent="провал";return}O.cargo<O.cargoNeeded?(Io.textContent="Забрать данные",Do.style.width="33%",No.textContent="закрыта"):O.extractionProgress>0?(Io.textContent="Удерживать точку",Do.style.width=`${66+O.extractionProgress*34}%`,No.textContent=`${Math.round(O.extractionProgress*100)}%`):(Io.textContent="Уйти к эвакуации",Do.style.width="66%",No.textContent="открыта")}function Am(n){kw.textContent=n?"Рейд завершен":"Рейд потерян",Hw.textContent=n?"Эвакуация":"Провал",Vw.textContent=n?"Данные вынесены с аванпоста, маршрут эвакуации открыт.":"Персонаж не пережил контакт с угрозой.",O.resultShown=!0,go(),Va.hidden=!1,du.hidden=!1}function Rm(n){if(!(O.resultShown||O.phase==="won"||O.phase==="lost")){if(O.phase=n?"won":"lost",te(n?"win":"player-death"),$a(),go(),!n){O.resultDelayTimer=wT,Va.hidden=!0,du.hidden=!0;return}Am(!0)}}function _R(n){O.phase!=="lost"||O.resultShown||(O.resultDelayTimer=Math.max(0,O.resultDelayTimer-n),O.resultDelayTimer<=0&&Am(!1))}function Cm(){O.phase="ready",O.hp=pu,O.energy=wp,O.cargo=0,O.extractionProgress=0,O.shootCooldown=0,O.fireHeld=!1,O.weaponAmmo=mr,O.reloadTimer=0,O.meleeCooldown=0,O.alarmLevel=0,O.alarmHoldTimer=0,O.alarmPulseTimer=0,O.reinforcementTimer=cr,O.lastNoisePosition.copy(Ri),O.radioDisabled=!1,O.resultDelayTimer=0,_u(),O.resultShown=!1,O.settingsOpen=!1,Ha.hidden=!0,$a(),cs(),Ub(),document.body.classList.remove("death-vignette"),Va.hidden=!0,du.hidden=!0,go(),jt.bodies.includes(X.body)||jt.addBody(X.body),X.alive=!0,X.deathProgress=1,X.deathStartY=0,X.deathRotationZ=0,X.body.position.set(X.spawn.x,Yn,X.spawn.z),X.body.velocity.set(0,0,0),X.body.angularVelocity.set(0,0,0),X.body.wakeUp(),X.group.position.set(X.spawn.x,0,X.spawn.z),X.group.rotation.set(0,Math.atan2(hn.x,hn.z),0),X.hitSlowTimer=0,X.hitKnockback.set(0,0,0),X.footstepTimer=0,am(),Te.forEach(n=>{const t=!n.reserve;n.active=t,n.alive=t,n.group.visible=t,t&&!jt.bodies.includes(n.body)&&jt.addBody(n.body),!t&&jt.bodies.includes(n.body)&&jt.removeBody(n.body),n.maxHealth=Ka(n),n.health=n.maxHealth,n.hitFlash=0,mo(n),n.hitSlowTimer=0,n.hitKnockback.set(0,0,0),n.attackCooldown=0,Nu(n),n.footstepTimer=Lt.randFloat(.05,.35),n.state="patrol",n.searchTimer=0,n.lostSightTimer=0,n.shootCooldown=0,ro(n),n.coverPosition=null,n.coverReplanTimer=Lt.randFloat(.15,.65),n.searchMode="travel",n.glassTactic="none",n.glassTargetFaceId=null,n.scanProgress=0,n.scanStartYaw=0,n.lastKnownPlayerPosition.copy(n.spawn),n.deathProgress=1,n.deathStartY=0,n.deathRotationZ=0,n.group.rotation.set(0,0,0),n.group.position.set(n.spawn.x,0,n.spawn.z),n.body.position.set(n.spawn.x,je,n.spawn.z),n.body.velocity.set(0,0,0),n.body.angularVelocity.set(0,0,0)}),tb(),ub(),gr.forEach(n=>{if(n.type==="radio"){n.disabled=!1,Fu(n,0);return}n.collected=!1,n.group.visible=!0,n.group.position.copy(n.spawn)});for(let n=no.length-1;n>=0;n-=1)Mm(n);for(let n=io.length-1;n>=0;n-=1)$p(n);for(let n=so.length-1;n>=0;n-=1)Jp(n);for(let n=oo.length-1;n>=0;n-=1)jp(n);fi()}function Pm(){const n=window.innerWidth,t=window.innerHeight;qn.setSize(n,t,!1),Xe.aspect=n/t,Xe.fov=n<640||t<520?58:52,Xe.updateProjectionMatrix()}function xR(){Ot.traverse(n=>{n.castShadow=!1,n.receiveShadow=!1})}function Lm(){return document.fullscreenElement||document.webkitFullscreenElement||null}function Im(){return document.querySelector("#app")||document.documentElement}function Dm(n=Im()){return n.requestFullscreen||n.webkitRequestFullscreen||n.msRequestFullscreen||null}function Nm(){return document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen||null}function yR(){return window.matchMedia("(display-mode: fullscreen)").matches||window.matchMedia("(display-mode: standalone)").matches||!!window.navigator.standalone}function MR(){return!!(Dm()||Nm())}function Ys(){if(yR()){Si.textContent="Уже во весь экран";return}if(!MR()){Si.textContent="Fullscreen недоступен",Si.title="На iPhone Safari полноэкранный режим для обычной страницы недоступен. Добавь страницу на экран Домой и запускай оттуда.";return}Si.title="",Si.textContent=Lm()?"Выйти из полного экрана":"Во весь экран"}async function SR(){const n=Lm();try{if(n){const t=Nm();await(t==null?void 0:t.call(document))}else{const t=Im(),e=Dm(t);if(!e){Si.textContent="Добавь на экран Домой",setTimeout(Ys,1800);return}await e.call(t)}}catch{Si.textContent="Браузер запретил",setTimeout(Ys,1800);return}Ys()}function ER(n){var t;return!!((t=n==null?void 0:n.closest)!=null&&t.call(n,"button, input, label, .settings-panel"))}function Je(n=!1){!document.hidden&&Ae()&&(n||!ER(document.activeElement))&&document.activeElement!==xn&&xn.focus({preventScroll:!0})}function Um(){zw.textContent=`${Math.round(Ya.mouseSensitivity*100)}%`}function wR(){O.godMode=!O.godMode,te(O.godMode?"ui-start":"ui-resume",{intensity:.55}),fi()}function TR(){O.invisibleToEnemies=!O.invisibleToEnemies,O.invisibleToEnemies&&Te.forEach(n=>{!n.active||!n.alive||(n.lostSightTimer=0,n.coverPosition=null,ro(n))}),te(O.invisibleToEnemies?"ui-start":"ui-resume",{intensity:.5}),fi()}function Qa(n){O.settingsOpen!==n&&te(n?"ui-pause":"ui-resume"),O.settingsOpen=n,Ha.hidden=!n,go(),n?($a(),cs(),Ra.focus({preventScroll:!0})):(Je(!0),O.phase==="running"&&Iu())}function bR(n){if(n.code==="Escape"){n.preventDefault(),Qa(!O.settingsOpen);return}if(n.code==="KeyG"){n.preventDefault(),n.repeat||wR();return}if(n.code==="KeyI"){n.preventDefault(),n.repeat||TR();return}if(Ae()){if(n.code==="KeyQ"){n.preventDefault(),n.repeat||Wp();return}if(n.code==="KeyE"){n.preventDefault(),n.repeat||_m();return}if(n.code==="KeyR"){n.preventDefault(),n.repeat||Hl();return}if(n.code==="KeyF"){n.preventDefault(),n.repeat||mA();return}Ap.has(n.code)&&(n.preventDefault(),Ce.add(n.code))}}function AR(n){Ap.has(n.code)&&(n.preventDefault(),Ce.delete(n.code))}function cs(){Ce.clear(),di(),tm(),nm(),document.body.classList.remove("sprinting")}window.addEventListener("resize",Pm);document.addEventListener("keydown",bR,{capture:!0});document.addEventListener("keyup",AR,{capture:!0});document.addEventListener("pointerlockchange",cA);document.addEventListener("pointerlockerror",Lu);document.addEventListener("fullscreenchange",Ys);document.addEventListener("webkitfullscreenchange",Ys);document.addEventListener("mousemove",n=>{yr()&&Au(n)});window.addEventListener("focus",()=>Je());window.addEventListener("blur",()=>{cs(),$a()});document.addEventListener("visibilitychange",()=>{document.hidden?cs():Je()});window.addEventListener("pointerdown",()=>Je());window.addEventListener("pointermove",()=>Je());xn.addEventListener("pointerenter",()=>Je());xn.addEventListener("pointermove",n=>{Je(),Au(n)});xn.addEventListener("pointerdown",n=>{n.button===0&&(as(),Je(),Iu(),Au(n),sm())});xn.addEventListener("pointerup",di);xn.addEventListener("pointercancel",di);xn.addEventListener("pointerleave",di);window.addEventListener("pointerup",di);window.addEventListener("pointercancel",di);Ze.addEventListener("pointerdown",eA);Ze.addEventListener("pointermove",nA);Ze.addEventListener("pointerup",Ru);Ze.addEventListener("pointercancel",Ru);Ze.addEventListener("lostpointercapture",Ru);Ai.addEventListener("pointerdown",iA);Ai.addEventListener("pointermove",sA);Ai.addEventListener("pointerup",Cu);Ai.addEventListener("pointercancel",Cu);Ai.addEventListener("lostpointercapture",Cu);er.addEventListener("pointerdown",aA);er.addEventListener("pointerup",n=>{n.preventDefault(),n.stopPropagation()});er.addEventListener("pointercancel",n=>{n.preventDefault(),n.stopPropagation()});hu.addEventListener("pointerdown",rA);hu.addEventListener("pointerup",n=>{n.preventDefault(),n.stopPropagation()});hu.addEventListener("pointercancel",n=>{n.preventDefault(),n.stopPropagation()});ka.addEventListener("pointerdown",oA);ka.addEventListener("pointerup",n=>{n.preventDefault(),n.stopPropagation(),di()});ka.addEventListener("pointercancel",n=>{n.preventDefault(),n.stopPropagation(),di()});ka.addEventListener("lostpointercapture",di);Uw.addEventListener("click",n=>{n.stopPropagation(),Qa(!O.settingsOpen)});Fw.addEventListener("click",n=>{n.stopPropagation(),Qa(!1)});Si.addEventListener("click",async n=>{n.stopPropagation(),await SR()});Ha.addEventListener("pointerdown",n=>{n.stopPropagation()});Ha.addEventListener("pointermove",n=>{n.stopPropagation()});Ra.addEventListener("input",()=>{Ya.mouseSensitivity=Number(Ra.value),Um()});Bw.addEventListener("click",()=>{as(),lA()});Va.addEventListener("click",Cm);Gw.addEventListener("click",Cm);wb();const X=Db(),Et=Nb(),Te=TT.map((n,t)=>Gb(n,t));Te[0];op.forEach((n,t)=>Wb(n,t));const Gl=qb();xR();Ys();Um();go();function Xo(n){return Math.round(n*1e3)/1e3}function ua(n){return{x:Xo(n.x),y:Xo(n.y),z:Xo(n.z)}}function RR(n){return n.updateWorldMatrix(!0,!0),new Di().setFromObject(n)}function CR(){const t=[],e=[];return Kn.forEach((i,s)=>{var f,g,v;if(!i.mesh||i.invisible||(f=i.body.userData)!=null&&f.invisible||i.glassFace&&!i.glassFace.alive)return;const o=xu(i);if(!o){e.push({index:s,kind:((g=i.body.userData)==null?void 0:g.kind)??"unknown",reason:"missing-box-collider"});return}const r=RR(i.mesh),a=new b,c=new b;r.getCenter(a),r.getSize(c);const l=o.halfExtents.clone().multiplyScalar(2),u=a.distanceTo(o.center),d=c.distanceTo(l),h={index:s,kind:((v=i.body.userData)==null?void 0:v.kind)??"unknown",meshCenter:ua(a),colliderCenter:ua(o.center),meshSize:ua(c),colliderSize:ua(l),centerDelta:Xo(u),sizeDelta:Xo(d)};t.push(h),(u>.015||d>.015)&&e.push(h)}),{tolerance:.015,visibleSolidEntries:t.length,matchedEntries:t.length-e.length,mismatches:e}}function Fm(){return{staticSolids:CR(),characters:{player:{visual:"vertical-capsule",hitbox:"vertical-capsule",physics:"vertical-capsule",radius:or,cylinderLength:Pa,centerY:Yn},enemies:{visual:"vertical-capsule",hitbox:"vertical-capsule",physics:"vertical-capsule",radius:eo,cylinderLength:rr,centerY:je}},projectiles:{visual:"sphere",hitbox:"sphere",radius:Ei},glassBalls:{visual:"sphere",physics:"sphere",hitbox:"sphere",radius:ui},decorativeNoCollision:["grass-patches","bushes","palm-canopies","beach-color-patches","terrain-mounds","ocean","skybox","lights-and-volumetric-effects","extraction-marker","loot-marker","character-weapons"]}}window.__vibeGameGeometryAudit=Fm;function PR(){const n=Fm();document.documentElement.dataset.geometryAuditReady="true",document.documentElement.dataset.geometrySolidEntries=String(n.staticSolids.visibleSolidEntries),document.documentElement.dataset.geometryMismatches=String(n.staticSolids.mismatches.length)}PR();Pm();Tm();Gp(0);kp();bm(1);Te.forEach(n=>mo(n));fi();Je();function zm(){requestAnimationFrame(zm);const n=Math.min(es.getDelta(),.05);Ae()?(O.shootCooldown=Math.max(0,O.shootCooldown-n),O.meleeCooldown=Math.max(0,O.meleeCooldown-n),hA(n),Te.forEach(e=>{e.hitFlash=Math.max(0,e.hitFlash-n)}),Je(),RA(n),WA(n),bA(n),cb(n),Te.forEach(e=>tR(e,n)),jt.step(1/60,n,3),ab(),fb(),Tm(),TA(n),wA(n),Zb(n),Mu(),Te.forEach(e=>uR(e,n)),Gp(n),eR(n),$b(n),tA(n),dR(n),fR(n)):(X.body.velocity.x=0,X.body.velocity.z=0,Te.forEach(e=>{e.body.velocity.x=0,e.body.velocity.z=0,e.footstepTimer=.08}),X.footstepTimer=0),hR(n),_R(n),Jb(n),UT(n),AA(),bm(n),Te.forEach(e=>mo(e)),Sb(n),kp(),Gl.pad.material.opacity=O.cargo?.6:.3,fi(),qn.clear(!0,!0,!0),qn.render(Ot,Xe)}zm();

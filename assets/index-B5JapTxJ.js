(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="177",Um=0,Bu=1,Fm=2,Jd=1,zm=2,oi=3,bi=0,nn=1,tn=2,wi=0,zs=1,Zi=2,ku=3,Hu=4,Om=5,Wi=100,Bm=101,km=102,Hm=103,Vm=104,Gm=200,Wm=201,qm=202,Xm=203,Gc=204,Wc=205,Ym=206,Zm=207,Km=208,$m=209,jm=210,Jm=211,Qm=212,t0=213,e0=214,qc=0,Xc=1,Yc=2,Ys=3,Zc=4,Kc=5,$c=6,jc=7,Qd=0,n0=1,i0=2,ci=0,s0=1,r0=2,o0=3,a0=4,c0=5,l0=6,u0=7,tf=300,Zs=301,Ks=302,Jc=303,Qc=304,Ra=306,Ki=1e3,Yi=1001,tl=1002,mn=1003,h0=1004,_o=1005,Dn=1006,Ja=1007,Ei=1008,hi=1009,ef=1010,nf=1011,Hr=1012,kl=1013,$i=1014,Gn=1015,ro=1016,Hl=1017,Vl=1018,Vr=1020,sf=35902,rf=1021,of=1022,Nn=1023,Gr=1026,Wr=1027,Gl=1028,Wl=1029,af=1030,ql=1031,Xl=1033,oa=33776,aa=33777,ca=33778,la=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,cl=37808,ll=37809,ul=37810,hl=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,vl=37817,_l=37818,xl=37819,yl=37820,Ml=37821,ua=36492,Sl=36494,El=36495,cf=36283,wl=36284,Tl=36285,Al=36286,d0=3200,f0=3201,lf=0,p0=1,yi="",Be="srgb",$s="srgb-linear",pa="linear",fe="srgb",us=7680,Vu=519,m0=512,g0=513,v0=514,uf=515,_0=516,x0=517,y0=518,M0=519,bl=35044,Gu="300 es",ai=2e3,ma=2001;class sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wu=1234567;const Os=Math.PI/180,qr=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Yl(i,t){return(i%t+t)%t}function S0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function E0(i,t,e){return i!==t?(e-i)/(t-i):0}function Ur(i,t,e){return(1-e)*i+e*t}function w0(i,t,e,n){return Ur(i,t,1-Math.exp(-e*n))}function T0(i,t=1){return t-Math.abs(Yl(i,t*2)-t)}function A0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function b0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function R0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function C0(i,t){return i+Math.random()*(t-i)}function P0(i){return i*(.5-Math.random())}function L0(i){i!==void 0&&(Wu=i);let t=Wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function I0(i){return i*Os}function D0(i){return i*qr}function N0(i){return(i&i-1)===0&&i!==0}function U0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function F0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function z0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:Os,RAD2DEG:qr,generateUUID:Wn,clamp:Kt,euclideanModulo:Yl,mapLinear:S0,inverseLerp:E0,lerp:Ur,damp:w0,pingpong:T0,smoothstep:A0,smootherstep:b0,randInt:R0,randFloat:C0,randFloatSpread:P0,seededRandom:L0,degToRad:I0,radToDeg:D0,isPowerOfTwo:N0,ceilPowerOfTwo:U0,floorPowerOfTwo:F0,setQuaternionFromProperEuler:z0,normalize:he,denormalize:In};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let oo=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,p*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*_;if(c=c*m+h*x,l=l*m+f*x,u=u*m+g*x,d=d*m+v*x,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new b,qu=new oo;class Vt{constructor(t,e,n,s,r,o,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],y=s[4],x=s[7],R=s[2],A=s[5],C=s[8];return r[0]=o*v+a*_+c*R,r[3]=o*m+a*y+c*A,r[6]=o*p+a*x+c*C,r[1]=l*v+u*_+d*R,r[4]=l*m+u*y+d*A,r[7]=l*p+u*x+d*C,r[2]=h*v+f*_+g*R,r[5]=h*m+f*y+g*A,r[8]=h*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tc.makeScale(t,e)),this}rotate(t){return this.premultiply(tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new Vt;function hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function O0(){const i=ga("canvas");return i.style.display="block",i}const Xu={};function Bs(i){i in Xu||(Xu[i]=!0,console.warn(i))}function B0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function k0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function H0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yu=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V0(){const i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:t,whitePoint:n,transfer:pa,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const ne=V0();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class G0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=ga("canvas")),hs.width=t.width,hs.height=t.height;const s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let W0=0;class Zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?G0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let q0=0;const nc=new b;class Ye extends sr{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Yi,s=Yi,r=Dn,o=Ei,a=Nn,c=hi,l=Ye.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Wn(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=tf;Ye.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,R=(p+1)/2,A=(u+h)/4,C=(d+v)/4,P=(g+m)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=C/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X0 extends sr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends X0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class df extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y0 extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),yo.subVectors(this.max,dr),ds.subVectors(t.a,dr),fs.subVectors(t.b,dr),ps.subVectors(t.c,dr),fi.subVectors(fs,ds),pi.subVectors(ps,fs),Ui.subVectors(ds,ps);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ui.z,Ui.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ui.z,0,-Ui.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ui.y,Ui.x,0];return!ic(e,ds,fs,ps,yo)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,ds,fs,ps,yo))?!1:(Mo.crossVectors(fi,pi),e=[Mo.x,Mo.y,Mo.z],ic(e,ds,fs,ps,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const jn=[new b,new b,new b,new b,new b,new b,new b,new b],Rn=new b,xo=new Li,ds=new b,fs=new b,ps=new b,fi=new b,pi=new b,Ui=new b,dr=new b,yo=new b,Mo=new b,Fi=new b;function ic(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Z0=new Li,fr=new b,sc=new b;let rr=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Z0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(sc)),this.expandByPoint(fr.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Jn=new b,rc=new b,So=new b,mi=new b,oc=new b,Eo=new b,ac=new b;let ff=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(rc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=mi.dot(this.direction),c=-mi.dot(So),l=mi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rc).addScaledVector(So,h),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){oc.subVectors(e,t),Eo.subVectors(n,t),ac.crossVectors(oc,Eo);let o=this.direction.dot(ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const c=a*this.direction.dot(Eo.crossVectors(mi,Eo));if(c<0)return null;const l=a*this.direction.dot(oc.cross(mi));if(l<0||c+l>o)return null;const u=-a*mi.dot(ac);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ge{constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,g,v,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,v,m)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K0,t,$0)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(n,hn),gi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(n,hn)),gi.normalize(),wo.crossVectors(hn,gi),s[0]=gi.x,s[4]=wo.x,s[8]=hn.x,s[1]=gi.y,s[5]=wo.y,s[9]=hn.y,s[2]=gi.z,s[6]=wo.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],R=n[15],A=s[0],C=s[4],P=s[8],E=s[12],M=s[1],L=s[5],B=s[9],D=s[13],z=s[2],O=s[6],U=s[10],K=s[14],G=s[3],Q=s[7],at=s[11],mt=s[15];return r[0]=o*A+a*M+c*z+l*G,r[4]=o*C+a*L+c*O+l*Q,r[8]=o*P+a*B+c*U+l*at,r[12]=o*E+a*D+c*K+l*mt,r[1]=u*A+d*M+h*z+f*G,r[5]=u*C+d*L+h*O+f*Q,r[9]=u*P+d*B+h*U+f*at,r[13]=u*E+d*D+h*K+f*mt,r[2]=g*A+v*M+m*z+p*G,r[6]=g*C+v*L+m*O+p*Q,r[10]=g*P+v*B+m*U+p*at,r[14]=g*E+v*D+m*K+p*mt,r[3]=_*A+y*M+x*z+R*G,r[7]=_*C+y*L+x*O+R*Q,r[11]=_*P+y*B+x*U+R*at,r[15]=_*E+y*D+x*K+R*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*f-n*c*f)+v*(+e*c*f-e*l*h+r*o*h-s*o*f+s*l*u-r*c*u)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*d+e*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=d*m*l-v*h*l+v*c*f-a*m*f-d*c*p+a*h*p,y=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,x=u*v*l-g*d*l+g*a*f-o*v*f-u*a*p+o*d*p,R=g*d*c-u*v*c-g*a*h+o*v*h+u*a*m-o*d*m,A=e*_+n*y+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(v*h*r-d*m*r-v*s*f+n*m*f+d*s*p-n*h*p)*C,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*f-n*c*f)*C,t[4]=y*C,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*f+e*c*f)*C,t[8]=x*C,t[9]=(g*d*r-u*v*r-g*n*f+e*v*f+u*n*p-e*d*p)*C,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*C,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*f-e*a*f)*C,t[12]=R*C,t[13]=(u*v*s-g*d*s+g*n*h-e*v*h-u*n*m+e*d*m)*C,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*C,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*h+e*a*h)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,v=o*u,m=o*d,p=a*d,_=c*l,y=c*u,x=c*d,R=n.x,A=n.y,C=n.z;return s[0]=(1-(v+p))*R,s[1]=(f+x)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(h+p))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+y)*C,s[9]=(m-_)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ms.set(s[0],s[1],s[2]).length();const o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const l=1/r,u=1/o,d=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ai){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let f,g;if(a===ai)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ma)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ai){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),h=(e+t)*l,f=(n+s)*u;let g,v;if(a===ai)g=(o+r)*d,v=-2*d;else if(a===ma)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new b,Cn=new ge,K0=new b(0,0,0),$0=new b(1,1,1),gi=new b,wo=new b,hn=new b,Ku=new ge,$u=new oo;class en{constructor(t=0,e=0,n=0,s=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class pf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let j0=0;const ju=new b,gs=new oo,Qn=new ge,To=new b,pr=new b,J0=new b,Q0=new oo,Ju=new b(1,0,0),Qu=new b(0,1,0),th=new b(0,0,1),eh={type:"added"},tg={type:"removed"},vs={type:"childadded",child:null},cc={type:"childremoved",child:null};class ke extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new b,e=new en,n=new oo,s=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Vt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return ju.copy(t).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?To.copy(t):To.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(pr,To,this.up):Qn.lookAt(To,pr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Qn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tg),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,J0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Q0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ke.DEFAULT_UP=new b(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new b,ti=new b,lc=new b,ei=new b,_s=new b,xs=new b,nh=new b,uc=new b,hc=new b,dc=new b,fc=new Re,pc=new Re,mc=new Re;class pn{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ti.subVectors(n,e),lc.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(ti),c=Pn.dot(lc),l=ti.dot(ti),u=ti.dot(lc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return fc.setScalar(0),pc.setScalar(0),mc.setScalar(0),fc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,n),mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fc,r.x),o.addScaledVector(pc,r.y),o.addScaledVector(mc,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ti.subVectors(t,e),Pn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;_s.subVectors(s,n),xs.subVectors(r,n),uc.subVectors(t,n);const c=_s.dot(uc),l=xs.dot(uc);if(c<=0&&l<=0)return e.copy(n);hc.subVectors(t,s);const u=_s.dot(hc),d=xs.dot(hc);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(_s,o);dc.subVectors(t,r);const f=_s.dot(dc),g=xs.dot(dc);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(xs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return nh.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(nh,a);const p=1/(m+v+h);return o=v*p,a=h*p,e.copy(n).addScaledVector(_s,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Yl(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gc(o,r,t+1/3),this.g=gc(o,r,t),this.b=gc(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ne.workingToColorSpace(We.copy(this),t),Math.round(Kt(We.r*255,0,255))*65536+Math.round(Kt(We.g*255,0,255))*256+Math.round(Kt(We.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Be){ne.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Ao);const n=Ur(vi.h,Ao.h,e),s=Ur(vi.s,Ao.s,e),r=Ur(vi.l,Ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Yt;Yt.NAMES=mf;let eg=0,ns=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=zs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class rn extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new b,bo=new gt;let ng=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ng++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}}class gf extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vf extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ig=0;const Mn=new ge,vc=new ke,ys=new b,dn=new Li,mr=new Li,Oe=new b;class ze extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hf(t)?vf:gf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(dn.min,mr.min),dn.expandByPoint(Oe),Oe.addVectors(dn.max,mr.max),dn.expandByPoint(Oe)):(dn.expandByPoint(mr.min),dn.expandByPoint(mr.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Oe.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(t,l),Oe.add(ys)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new b,c[P]=new b;const l=new b,u=new b,d=new b,h=new gt,f=new gt,g=new gt,v=new b,m=new b;function p(P,E,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(v),a[E].add(v),a[M].add(v),c[P].add(m),c[E].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,E=_.length;P<E;++P){const M=_[P],L=M.start,B=M.count;for(let D=L,z=L+B;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new b,x=new b,R=new b,A=new b;function C(P){R.fromBufferAttribute(s,P),A.copy(R);const E=a[P];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);const L=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,E=_.length;P<E;++P){const M=_[P],L=M.start,B=M.count;for(let D=L,z=L+B;D<z;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new b,r=new b,o=new b,a=new b,c=new b,l=new b,u=new b,d=new b;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new cn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new ge,zi=new ff,Ro=new rr,sh=new b,Co=new b,Po=new b,Lo=new b,_c=new b,Io=new b,rh=new b,Do=new b;class Gt extends ke{constructor(t=new ze,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(_c.fromBufferAttribute(d,t),o?Io.addScaledVector(_c,u):Io.addScaledVector(_c.sub(e),u))}e.add(Io)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Ro.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Ro,sh)===null||zi.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),zi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,R=y;x<R;x+=3){const A=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=No(this,p,t,n,l,u,d,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=No(this,o,t,n,l,u,d,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,R=y;x<R;x+=3){const A=x,C=x+1,P=x+2;s=No(this,p,t,n,l,u,d,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;s=No(this,o,t,n,l,u,d,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sg(i,t,e,n,s,r,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===bi,a),c===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Do);return l<e.near||l>e.far?null:{distance:l,point:Do.clone(),object:i}}function No(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Co),i.getVertexPosition(c,Po),i.getVertexPosition(l,Lo);const u=sg(i,t,e,n,Co,Po,Lo,rh);if(u){const d=new b;pn.getBarycoord(rh,Co,Po,Lo,d),s&&(u.uv=pn.getInterpolatedAttribute(s,a,c,l,d,new gt)),r&&(u.uv1=pn.getInterpolatedAttribute(r,a,c,l,d,new gt)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,c,l,d,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new b,materialIndex:0};pn.getNormal(Co,Po,Lo,h.normal),u.face=h,u.barycoord=d}return u}class Tn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(v,m,p,_,y,x,R,A,C,P,E){const M=x/C,L=R/P,B=x/2,D=R/2,z=A/2,O=C+1,U=P+1;let K=0,G=0;const Q=new b;for(let at=0;at<U;at++){const mt=at*L-D;for(let rt=0;rt<O;rt++){const Jt=rt*M-B;Q[v]=Jt*_,Q[m]=mt*y,Q[p]=z,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(rt/C),d.push(1-at/P),K+=1}}for(let at=0;at<P;at++)for(let mt=0;mt<C;mt++){const rt=h+mt+O*at,Jt=h+mt+O*(at+1),$=h+(mt+1)+O*(at+1),ot=h+(mt+1)+O*at;c.push(rt,Jt,ot),c.push(Jt,$,ot),G+=6}a.addGroup(f,G,E),f+=G,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function rg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _f(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const og={clone:js,merge:Je};var ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=rg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xf extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new b,oh=new gt,ah=new gt;class Sn extends xf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,oh,ah),e.subVectors(ah,oh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Ss=1;class lg extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const r=new Sn(Ms,Ss,t,e);r.layers=this.layers,this.add(r);const o=new Sn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const a=new Sn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const c=new Sn(Ms,Ss,t,e);c.layers=this.layers,this.add(c);const l=new Sn(Ms,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yf extends Ye{constructor(t=[],e=Zs,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ug extends ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:wi});r.uniforms.tEquirect.value=e;const o=new Gt(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Dn),new lg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Un extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class dg extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new b;class va{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ca extends ns{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Es;const gr=new b,ws=new b,Ts=new b,As=new gt,vr=new gt,Mf=new ge,Uo=new b,_r=new b,Fo=new b,ch=new gt,yc=new gt,lh=new gt;class Kl extends ke{constructor(t=new Ca){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fg(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new va(n,3,0,!1)),Es.setAttribute("uv",new va(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new gt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ts.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;zo(Uo.set(-.5,-.5,0),Ts,o,ws,s,r),zo(_r.set(.5,-.5,0),Ts,o,ws,s,r),zo(Fo.set(.5,.5,0),Ts,o,ws,s,r),ch.set(0,0),yc.set(1,0),lh.set(1,1);let a=t.ray.intersectTriangle(Uo,_r,Fo,!1,gr);if(a===null&&(zo(_r.set(-.5,.5,0),Ts,o,ws,s,r),yc.set(0,1),a=t.ray.intersectTriangle(Uo,Fo,_r,!1,gr),a===null))return;const c=t.ray.origin.distanceTo(gr);c<t.near||c>t.far||e.push({distance:c,point:gr.clone(),uv:pn.getInterpolation(gr,Uo,_r,Fo,ch,yc,lh,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zo(i,t,e,n,s,r){As.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(vr.x=r*As.x-s*As.y,vr.y=s*As.x+r*As.y):vr.copy(As),i.copy(t),i.x+=vr.x,i.y+=vr.y,i.applyMatrix4(Mf)}class pg extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=mn,u=mn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uh extends cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bs=new ge,hh=new ge,Oo=[],dh=new Li,mg=new ge,xr=new Gt,yr=new rr;class Sf extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),dh.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(dh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),yr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),hh.multiplyMatrices(n,bs),xr.matrixWorld=hh,xr.raycast(t,Oo);for(let o=0,a=Oo.length;o<a;o++){const c=Oo[o];c.instanceId=r,c.object=this,e.push(c)}Oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pg(new Float32Array(s*this.count),s,this.count,Gl,Gn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mc=new b,gg=new b,vg=new Vt;class Vi{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Mc.subVectors(n,e).cross(gg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vg.getNormalMatrix(t),s=this.coplanarPoint(Mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new rr,Bo=new b;class Ef{constructor(t=new Vi,e=new Vi,n=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,h-l,m-f,x-p).normalize(),n[1].setComponents(c+r,h+l,m+f,x+p).normalize(),n[2].setComponents(c+o,h+u,m+g,x+_).normalize(),n[3].setComponents(c-o,h-u,m-g,x-_).normalize(),n[4].setComponents(c-a,h-d,m-v,x-y).normalize(),e===ai)n[5].setComponents(c+a,h+d,m+v,x+y).normalize();else if(e===ma)n[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $l extends ns{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _a=new b,xa=new b,fh=new ge,Mr=new ff,ko=new rr,Sc=new b,ph=new b;class _g extends ke{constructor(t=new ze,e=new $l){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_a.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_a.distanceTo(xa);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;fh.copy(s).invert(),Mr.copy(t.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),_=u.getX(v+1),y=Ho(this,t,Mr,c,p,_,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Ho(this,t,Mr,c,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=Ho(this,t,Mr,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Ho(this,t,Mr,c,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ho(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(_a.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(_a,xa,Sc,ph)>n)return;Sc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Sc);if(!(l<t.near||l>t.far))return{distance:l,point:ph.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const mh=new b,gh=new b;class wf extends _g{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mh.fromBufferAttribute(e,s),gh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mh.distanceTo(gh);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ao extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tf extends Ye{constructor(t,e,n=$i,s,r,o,a=mn,c=mn,l,u=Gr,d=1){if(u!==Gr&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pa extends ze{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=n*2+r,v=s+1,m=new b,p=new b;for(let _=0;_<=g;_++){let y=0,x=0,R=0,A=0;if(_<=n){const E=_/n,M=E*Math.PI/2;x=-u-t*Math.cos(M),R=t*Math.sin(M),A=-t*Math.cos(M),y=E*d}else if(_<=n+r){const E=(_-n)/r;x=-u+E*e,R=t,A=0,y=d+E*h}else{const E=(_-n-r)/n,M=E*Math.PI/2;x=u+t*Math.sin(M),R=t*Math.cos(M),A=t*Math.sin(M),y=d+h+E*d}const C=Math.max(0,Math.min(1,y/f));let P=0;_===0?P=.5/s:_===g&&(P=-.5/s);for(let E=0;E<=s;E++){const M=E/s,L=M*Math.PI*2,B=Math.sin(L),D=Math.cos(L);p.x=-R*D,p.y=x,p.z=R*B,a.push(p.x,p.y,p.z),m.set(-R*D,A,R*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+P,C)}if(_>0){const E=(_-1)*v;for(let M=0;M<s;M++){const L=E+M,B=E+M+1,D=_*v+M,z=_*v+M+1;o.push(L,B,D),o.push(B,z,D)}}}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class or extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new b,u=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class is extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function _(){const x=new b,R=new b;let A=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const E=[],M=P/r,L=M*(e-t)+t;for(let B=0;B<=s;B++){const D=B/s,z=D*c+a,O=Math.sin(z),U=Math.cos(z);R.x=L*O,R.y=-M*n+m,R.z=L*U,d.push(R.x,R.y,R.z),x.set(O,C,U).normalize(),h.push(x.x,x.y,x.z),f.push(D,1-M),E.push(g++)}v.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const M=v[E][P],L=v[E+1][P],B=v[E+1][P+1],D=v[E][P+1];(t>0||E!==0)&&(u.push(M,L,D),A+=3),(e>0||E!==r-1)&&(u.push(L,B,D),A+=3)}l.addGroup(p,A,0),p+=A}function y(x){const R=g,A=new gt,C=new b;let P=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let B=0;B<=s;B++){const z=B/s*c+a,O=Math.cos(z),U=Math.sin(z);C.x=E*U,C.y=m*M,C.z=E*O,d.push(C.x,C.y,C.z),h.push(0,M,0),A.x=O*.5+.5,A.y=U*.5*M+.5,f.push(A.x,A.y),g++}for(let B=0;B<s;B++){const D=R+B,z=L+B;x===!0?u.push(z,z+1,D):u.push(z+1,z,D),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class La extends is{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new La(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jl extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new b,x=new b,R=new b;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],x),f(e[A+2],R),c(y,x,R,_)}function c(_,y,x,R){const A=R+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const E=_.clone().lerp(x,P/A),M=y.clone().lerp(x,P/A),L=A-P;for(let B=0;B<=L;B++)B===0&&P===A?C[P][B]=E:C[P][B]=E.clone().lerp(M,B/L)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const M=Math.floor(E/2);E%2===0?(h(C[P][M+1]),h(C[P+1][M]),h(C[P][M])):(h(C[P][M+1]),h(C[P+1][M+1]),h(C[P+1][M]))}}function l(_){const y=new b;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(_),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const _=new b;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const x=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;o.push(x,1-R)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],R=o[_+4],A=Math.max(y,x,R),C=Math.min(y,x,R);A>.9&&C<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new b,y=new b,x=new b,R=new b,A=new gt,C=new gt,P=new gt;for(let E=0,M=0;E<r.length;E+=9,M+=6){_.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),A.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(_).add(y).add(x).divideScalar(3);const L=m(R);v(A,M+0,_,L),v(C,M+2,y,L),v(P,M+4,x,L)}}function v(_,y,x,R){R<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.vertices,t.indices,t.radius,t.details)}}class Jl extends jl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jl(t.radius,t.detail)}}const Vo=new b,Go=new b,Ec=new b,Wo=new pn;class xg extends ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Os*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Wo;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Wo.getNormal(Ec),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const y=(_+1)%3,x=d[_],R=d[y],A=Wo[u[_]],C=Wo[u[y]],P=`${x}_${R}`,E=`${R}_${x}`;E in h&&h[E]?(Ec.dot(h[E].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),h[E]=null):P in h||(h[P]={index0:l[_],index1:l[y],normal:Ec.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];Vo.fromBufferAttribute(a,v),Go.fromBufferAttribute(a,m),f.push(Vo.x,Vo.y,Vo.z),f.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new Qt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new b,s=[],r=[],o=[],a=new b,c=new ge;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ql extends Zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends Ql{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const qo=new b,wc=new tu,Tc=new tu,Ac=new tu;class Mg extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(qo.subVectors(s[0],s[1]).add(s[0]),l=qo);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=qo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),wc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,m),Tc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,m),Ac.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Tc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Ac.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(wc.calc(c),Tc.calc(c),Ac.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Sg(i,t){const e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function wg(i,t){return i*i*t}function Fr(i,t,e,n){return Sg(i,t)+Eg(i,e)+wg(i,n)}function Tg(i,t){const e=1-i;return e*e*e*t}function Ag(i,t){const e=1-i;return 3*e*e*i*t}function bg(i,t){return 3*(1-i)*i*i*t}function Rg(i,t){return i*i*i*t}function zr(i,t,e,n,s){return Tg(i,t)+Ag(i,e)+bg(i,n)+Rg(i,s)}class Af extends Zn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cg extends Zn{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y),zr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bf extends Zn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pg extends Zn{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends Zn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,s.x,r.x,o.x),Fr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends Zn{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,s.x,r.x,o.x),Fr(t,s.y,r.y,o.y),Fr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(vh(a,c.x,l.x,u.x,d.x),vh(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var _h=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:Mg,CubicBezierCurve:Af,CubicBezierCurve3:Cg,EllipseCurve:Ql,LineCurve:bf,LineCurve3:Pg,QuadraticBezierCurve:Rf,QuadraticBezierCurve3:Lg,SplineCurve:Cf});class Ig extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _h[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _h[s.type]().fromJSON(s))}return this}}class xh extends Ig{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bf(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Rf(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Af(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Cf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ql(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Pf=class extends xh{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new xh().fromJSON(s))}return this}};function Dg(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Lf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Og(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=e;h<s;h+=e){const f=i[h],g=i[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Xr(r,o,e,a,c,l,0),o}function Lf(i,t,e,n,s){let r;if(s===Kg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=yh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yh(o/n|0,i[o],i[o+1],r);return r&&Js(r,r.next)&&(Zr(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Js(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Gg(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Ug(i,n,s,r):Ng(i)){t.push(c.i,i.i,l.i),Zr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Fg(Ji(i),t),Xr(i,t,e,n,s,r,2)):o===2&&zg(i,t,e,n,s,r):Xr(Ji(i),t,e,n,s,r,1);break}}}function Ng(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Ir(s,a,r,c,o,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ug(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),v=Math.max(a,c,l),m=Math.max(u,d,h),p=Rl(f,g,t,e,n),_=Rl(v,m,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ir(a,u,c,d,l,h,y.x,y.y)&&Ee(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ir(a,u,c,d,l,h,x.x,x.y)&&Ee(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ir(a,u,c,d,l,h,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ir(a,u,c,d,l,h,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fg(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Js(n,s)&&Df(n,e,e.next,s)&&Yr(n,s)&&Yr(s,n)&&(t.push(n.i,e.i,s.i),Zr(e),Zr(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function zg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xg(o,a)){let c=Nf(o,a);o=Ji(o,o.next),c=Ji(c,c.next),Xr(o,t,e,n,s,r,0),Xr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Og(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Lf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(qg(l))}s.sort(Bg);for(let r=0;r<s.length;r++)e=kg(s[r],e);return e}function Bg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function kg(i,t){const e=Hg(i,t);if(!e)return t;const n=Nf(e,i);return Ji(n,n.next),Ji(e,e.next)}function Hg(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Js(i,e))return e;do{if(Js(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&If(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Yr(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Vg(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Vg(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Gg(i,t,e,n){let s=i;do s.z===0&&(s.z=Rl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wg(s)}function Wg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Rl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function If(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ir(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&If(i,t,e,n,s,r,o,a)}function Xg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yg(i,t)&&(Yr(i,t)&&Yr(t,i)&&Zg(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Js(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Js(i,t){return i.x===t.x&&i.y===t.y}function Df(i,t,e,n){const s=Yo(Ee(i,t,e)),r=Yo(Ee(i,t,n)),o=Yo(Ee(e,n,i)),a=Yo(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Xo(i,e,t)||r===0&&Xo(i,n,t)||o===0&&Xo(e,i,n)||a===0&&Xo(e,t,n))}function Xo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yo(i){return i>0?1:i<0?-1:0}function Yg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Zg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nf(i,t){const e=Cl(i.i,i.x,i.y),n=Cl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yh(i,t,e,n){const s=Cl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class $g{static triangulate(t,e,n=2){return Dg(t,e,n)}}class Or{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Or.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Mh(t),Sh(n,t);let o=t.length;e.forEach(Mh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Sh(n,e[c]);const a=$g.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Mh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ar extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const _=p*h-o;for(let y=0;y<l;y++){const x=y*d-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const y=_+l*p,x=_+l*(p+1),R=_+1+l*(p+1),A=_+1+l*p;f.push(y,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ia extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new b,g=new gt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,y=_,x=_+n+1,R=_+n+2,A=_+1;a.push(y,x,A),a.push(x,R,A)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class eu extends ze{constructor(t=new Pf([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function l(u){const d=s.length/3,h=u.extractPoints(e);let f=h.shape;const g=h.holes;Or.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];Or.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=Or.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],y=_[0]+d,x=_[1]+d,R=_[2]+d;n.push(y,x,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return jg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new eu(n,t.curveSegments)}}function jg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ss extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new b,h=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+x,1-y),_.push(l++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=u[p][_+1],x=u[p][_],R=u[p+1][_],A=u[p+1][_+1];(p!==0||o>0)&&f.push(y,x,A),(p!==n-1||c<Math.PI)&&f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Da extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new b,d=new b,h=new b;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class He extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jg extends He{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qg extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tv extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ev extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nv extends xf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class iv extends ev{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sv extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class rv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eh(){return performance.now()}function wh(i,t,e,n){const s=ov(n);switch(e){case rf:return i*t;case Gl:return i*t/s.components*s.byteLength;case Wl:return i*t/s.components*s.byteLength;case af:return i*t*2/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case of:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case Xl:return i*t*4/s.components*s.byteLength;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(i,16)*Math.max(t,8)/4;case el:case il:return Math.max(i,8)*Math.max(t,8)/2;case rl:case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ua:case Sl:case El:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cf:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tl:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ov(i){switch(i){case hi:case ef:return{byteLength:1,components:1};case Hr:case nf:case ro:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case $i:case kl:case Gn:return{byteLength:4,components:1};case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function av(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var cv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
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
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gv=`#ifdef USE_BATCHING
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
#endif`,vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mv=`#ifdef USE_IRIDESCENCE
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
#endif`,Sv=`#ifdef USE_BUMPMAP
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
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lv=`#define PI 3.141592653589793
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
} // validated`,Iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dv=`vec3 transformedNormal = objectNormal;
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
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qv=`uniform bool receiveShadow;
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
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,o_=`struct PhysicalMaterial {
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
}`,a_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Ux=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:cv,alphahash_pars_fragment:lv,alphamap_fragment:uv,alphamap_pars_fragment:hv,alphatest_fragment:dv,alphatest_pars_fragment:fv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:gv,batching_vertex:vv,begin_vertex:_v,beginnormal_vertex:xv,bsdfs:yv,iridescence_fragment:Mv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:Ev,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:Av,color_fragment:bv,color_pars_fragment:Rv,color_pars_vertex:Cv,color_vertex:Pv,common:Lv,cube_uv_reflection_fragment:Iv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Uv,emissivemap_fragment:Fv,emissivemap_pars_fragment:zv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:kv,envmap_common_pars_fragment:Hv,envmap_pars_fragment:Vv,envmap_pars_vertex:Gv,envmap_physical_pars_fragment:t_,envmap_vertex:Wv,fog_vertex:qv,fog_pars_vertex:Xv,fog_fragment:Yv,fog_pars_fragment:Zv,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:$v,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Jv,lights_pars_begin:Qv,lights_toon_fragment:e_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:c_,lights_fragment_end:l_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:f_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:v_,metalnessmap_fragment:__,metalnessmap_pars_fragment:x_,morphinstance_vertex:y_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:E_,morphtarget_vertex:w_,normal_fragment_begin:T_,normal_fragment_maps:A_,normal_pars_fragment:b_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:N_,opaque_fragment:U_,packing:F_,premultiplied_alpha_fragment:z_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:k_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:W_,shadowmap_vertex:q_,shadowmask_pars_fragment:X_,skinbase_vertex:Y_,skinning_pars_vertex:Z_,skinning_vertex:K_,skinnormal_vertex:$_,specularmap_fragment:j_,specularmap_pars_fragment:J_,tonemapping_fragment:Q_,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ox,background_vert:ax,background_frag:cx,backgroundCube_vert:lx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:dx,depth_vert:fx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:vx,equirect_frag:_x,linedashed_vert:xx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:Sx,meshlambert_vert:Ex,meshlambert_frag:wx,meshmatcap_vert:Tx,meshmatcap_frag:Ax,meshnormal_vert:bx,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Ix,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Fx,shadow_vert:zx,shadow_frag:Ox,sprite_vert:Bx,sprite_frag:kx},lt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Hn={basic:{uniforms:Je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Je([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Je([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Je([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Je([lt.points,lt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Je([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Je([lt.common,lt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Je([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Je([lt.sprite,lt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Je([lt.common,lt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Je([lt.lights,lt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Hn.physical={uniforms:Je([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Zo={r:0,b:0,g:0},Bi=new en,Hx=new ge;function Vx(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const R=g(y);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Ra)?(u===void 0&&(u=new Gt(new Tn(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:js(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bi.copy(x.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Bi)),u.material.toneMapped=ne.getTransfer(R.colorSpace)!==fe,(d!==R||h!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Gt(new ar(2,2),new Ri({name:"BackgroundMaterial",uniforms:js(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(R.colorSpace)!==fe,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(Zo,_f(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,x,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:v,addToRenderList:m,dispose:_}}function Gx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,L,B,D,z){let O=!1;const U=d(D,B,L);r!==U&&(r=U,l(r.object)),O=f(M,D,B,z),O&&g(M,D,B,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(M,L,B,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,L,B){const D=B.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let O=z[L.id];O===void 0&&(O={},z[L.id]=O);let U=O[D];return U===void 0&&(U=h(c()),O[D]=U),U}function h(M){const L=[],B=[],D=[];for(let z=0;z<e;z++)L[z]=0,B[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,L,B,D){const z=r.attributes,O=L.attributes;let U=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){const at=z[G];let mt=O[G];if(mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;U++}return r.attributesNum!==U||r.index!==D}function g(M,L,B,D){const z={},O=L.attributes;let U=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){let at=O[G];at===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),z[G]=mt,U++}r.attributes=z,r.attributesNum=U,r.index=D}function v(){const M=r.newAttributes;for(let L=0,B=M.length;L<B;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const B=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;B[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),z[M]!==L&&(i.vertexAttribDivisor(M,L),z[M]=L)}function _(){const M=r.newAttributes,L=r.enabledAttributes;for(let B=0,D=L.length;B<D;B++)L[B]!==M[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function y(M,L,B,D,z,O,U){U===!0?i.vertexAttribIPointer(M,L,B,z,O):i.vertexAttribPointer(M,L,B,D,z,O)}function x(M,L,B,D){v();const z=D.attributes,O=B.getAttributes(),U=L.defaultAttributeValues;for(const K in O){const G=O[K];if(G.location>=0){let Q=z[K];if(Q===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const at=Q.normalized,mt=Q.itemSize,rt=t.get(Q);if(rt===void 0)continue;const Jt=rt.buffer,$=rt.type,ot=rt.bytesPerElement,wt=$===i.INT||$===i.UNSIGNED_INT||Q.gpuType===kl;if(Q.isInterleavedBufferAttribute){const ht=Q.data,Ct=ht.stride,ie=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)p(G.location+Ft,ht.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)m(G.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Ft=0;Ft<G.locationSize;Ft++)y(G.location+Ft,mt/G.locationSize,$,at,Ct*ot,(ie+mt/G.locationSize*Ft)*ot,wt)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)p(G.location+ht,Q.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let ht=0;ht<G.locationSize;ht++)y(G.location+ht,mt/G.locationSize,$,at,mt*ot,mt/G.locationSize*ht*ot,wt)}}else if(U!==void 0){const at=U[K];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(G.location,at);break;case 3:i.vertexAttrib3fv(G.location,at);break;case 4:i.vertexAttrib4fv(G.location,at);break;default:i.vertexAttrib1fv(G.location,at)}}}}_()}function R(){P();for(const M in n){const L=n[M];for(const B in L){const D=L[B];for(const z in D)u(D[z].object),delete D[z];delete L[B]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const B in L){const D=L[B];for(const z in D)u(D[z].object),delete D[z];delete L[B]}delete n[M.id]}function C(M){for(const L in n){const B=n[L];if(B[M.id]===void 0)continue;const D=B[M.id];for(const z in D)u(D[z].object),delete D[z];delete B[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Wx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Xx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Vi,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;c.value=x,x=u(g,h,y,f);for(let R=0;R!==y;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Yx(i){let t=new WeakMap;function e(o,a){return a===Jc?o.mapping=Zs:a===Qc&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ug(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ns=4,Th=[.125,.215,.35,.446,.526,.582],qi=20,bc=new nv,Ah=new Yt;let Rc=null,Cc=0,Pc=0,Lc=!1;const Gi=(1+Math.sqrt(5))/2,Rs=1/Gi,bh=[new b(-Gi,Rs,0),new b(Gi,Rs,0),new b(-Rs,0,Gi),new b(Rs,0,Gi),new b(0,Gi,-Rs),new b(0,Gi,Rs),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Zx=new b;class Rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Zx}=r;Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rc,Cc,Pc),this._renderer.xr.enabled=Lc,t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ro,format:Nn,colorSpace:$s,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kx(r)),this._blurMaterial=$x(r,t,e)}return s}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,s,r){const c=new Sn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Ah),d.toneMapping=ci,d.autoClear=!1;const g=new rn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new Gt(new Tn,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(Ah),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));const x=this._cubeSize;Ko(s,y*x,_>2?x:0,x,x),d.setRenderTarget(s),m&&d.render(v,c),d.render(t,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zs||t.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ko(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,bc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Gt(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let _=0;for(let C=0;C<qi;++C){const P=C/v,E=Math.exp(-P*P/2);p.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const x=this._sizeLods[s],R=3*x*(s>y-Ns?s-y+Ns:0),A=4*(this._cubeSize-x);Ko(e,R,A,3*x,2*x),c.setRenderTarget(e),c.render(d,bc)}}function Kx(i){const t=[],e=[],n=[];let s=i;const r=i-Ns+1+Th.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ns?c=Th[o-i+Ns-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(E,v*g*A),y.set(h,m*g*A);const M=[A,A,A,A,A,A];x.set(M,p*g*A)}const R=new ze;R.setAttribute("position",new cn(_,v)),R.setAttribute("uv",new cn(y,m)),R.setAttribute("faceIndex",new cn(x,p)),t.push(R),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ch(i,t,e){const n=new ji(i,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $x(i,t,e){const n=new Float32Array(qi),s=new b(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ph(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Lh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function jx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jc||c===Qc,u=c===Zs||c===Ks;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Rh(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Rh(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qx(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const R=_[y+0],A=_[y+1],C=_[y+2];h.push(R,A,A,C,C,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const R=y+0,A=y+1,C=y+2;h.push(R,A,A,C,C,R)}}else return;const m=new(hf(h)?vf:gf)(h,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function ty(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ey(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ny(i,t,e){const n=new WeakMap,s=new Re;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*A*4*d),P=new df(C,R,A,d);P.type=Gn,P.needsUpdate=!0;const E=x*4;for(let L=0;L<d;L++){const B=p[L],D=_[L],z=y[L],O=R*A*4*L;for(let U=0;U<B.count;U++){const K=U*E;g===!0&&(s.fromBufferAttribute(B,U),C[O+K+0]=s.x,C[O+K+1]=s.y,C[O+K+2]=s.z,C[O+K+3]=0),v===!0&&(s.fromBufferAttribute(D,U),C[O+K+4]=s.x,C[O+K+5]=s.y,C[O+K+6]=s.z,C[O+K+7]=0),m===!0&&(s.fromBufferAttribute(z,U),C[O+K+8]=s.x,C[O+K+9]=s.y,C[O+K+10]=s.z,C[O+K+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new gt(R,A)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function iy(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Ff=new Ye,Ih=new Tf(1,1),zf=new df,Of=new Y0,Bf=new yf,Dh=[],Nh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),zh=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Na(i,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ry(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function oy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function ay(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function cy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),Fe(e,n)}}function ly(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Fe(e,n)}}function uy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),Fe(e,n)}}function hy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function fy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function py(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function my(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function vy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function _y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function xy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ih.compareFunction=uf,r=Ih):r=Ff,e.setTexture2D(t||r,s)}function yy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Of,s)}function My(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bf,s)}function Sy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zf,s)}function Ey(i){switch(i){case 5126:return sy;case 35664:return ry;case 35665:return oy;case 35666:return ay;case 35674:return cy;case 35675:return ly;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return vy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Sy}}function wy(i,t){i.uniform1fv(this.addr,t)}function Ty(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ay(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function by(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ry(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cy(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Py(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ly(i,t){i.uniform1iv(this.addr,t)}function Iy(i,t){i.uniform2iv(this.addr,t)}function Dy(i,t){i.uniform3iv(this.addr,t)}function Ny(i,t){i.uniform4iv(this.addr,t)}function Uy(i,t){i.uniform1uiv(this.addr,t)}function Fy(i,t){i.uniform2uiv(this.addr,t)}function zy(i,t){i.uniform3uiv(this.addr,t)}function Oy(i,t){i.uniform4uiv(this.addr,t)}function By(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ff,r[o])}function ky(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Of,r[o])}function Hy(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bf,r[o])}function Vy(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zf,r[o])}function Gy(i){switch(i){case 5126:return wy;case 35664:return Ty;case 35665:return Ay;case 35666:return by;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return Iy;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Fy;case 36295:return zy;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}class Wy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ey(e.type)}}class qy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gy(e.type)}}class Xy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function Yy(i,t,e){const n=i.name,s=n.length;for(Ic.lastIndex=0;;){const r=Ic.exec(n),o=Ic.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Oh(e,l===void 0?new Wy(a,i,t):new qy(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Xy(a),Oh(e,d)),e=d}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Yy(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Bh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zy=37297;let Ky=0;function $y(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kh=new Vt;function jy(i){ne._getMatrix(kh,ne.workingColorSpace,i);const t=`mat3( ${kh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case pa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$y(i.getShaderSource(t),o)}else return s}function Jy(i,t){const e=jy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qy(i,t){let e;switch(t){case s0:e="Linear";break;case r0:e="Reinhard";break;case o0:e="Cineon";break;case a0:e="ACESFilmic";break;case l0:e="AgX";break;case u0:e="Neutral";break;case c0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $o=new b;function tM(){ne.getLuminanceCoefficients($o);const i=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function nM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Dr(i){return i!==""}function Vh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(sM,oM)}const rM=new Map;function oM(i,t){let e=qt[t];if(e===void 0){const n=rM.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(aM,cM)}function cM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function uM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Ks:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:t="ENVMAP_MODE_REFRACTION";break}return t}function dM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qd:t="ENVMAP_BLENDING_MULTIPLY";break;case n0:t="ENVMAP_BLENDING_MIX";break;case i0:t="ENVMAP_BLENDING_ADD";break}return t}function fM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=lM(e),l=uM(e),u=hM(e),d=dM(e),h=fM(e),f=eM(e),g=nM(r),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?qt.tonemapping_pars_fragment:"",e.toneMapping!==ci?Qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Jy("linearToOutputTexel",e.outputColorSpace),tM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Pl(o),o=Vh(o,e),o=Gh(o,e),a=Pl(a),a=Vh(a,e),a=Gh(a,e),o=Wh(o),a=Wh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+o,x=_+p+a,R=Bh(s,s.VERTEX_SHADER,y),A=Bh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(A).trim();let O=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const K=Hh(s,R,"vertex"),G=Hh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+K+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(D===""||z==="")&&(U=!1);U&&(L.diagnostics={runnable:O,programLog:B,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(R),s.deleteShader(A),P=new ha(s,v),E=iM(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Zy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ky++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vM(t),e.set(t,n)),n}}class vM{constructor(t){this.id=mM++,this.code=t,this.usedTimes=0}}function _M(i,t,e,n,s,r,o){const a=new pf,c=new gM,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,B,D){const z=B.fog,O=D.geometry,U=E.isMeshStandardMaterial?B.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||U),G=K&&K.mapping===Ra?K.image.height:null,Q=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const at=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,mt=at!==void 0?at.length:0;let rt=0;O.morphAttributes.position!==void 0&&(rt=1),O.morphAttributes.normal!==void 0&&(rt=2),O.morphAttributes.color!==void 0&&(rt=3);let Jt,$,ot,wt;if(Q){const le=Hn[Q];Jt=le.vertexShader,$=le.fragmentShader}else Jt=E.vertexShader,$=E.fragmentShader,c.update(E),ot=c.getVertexShaderID(E),wt=c.getFragmentShaderID(E);const ht=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),ie=D.isInstancedMesh===!0,Ft=D.isBatchedMesh===!0,ye=!!E.map,Me=!!E.matcap,se=!!K,N=!!E.aoMap,Ke=!!E.lightMap,re=!!E.bumpMap,me=!!E.normalMap,At=!!E.displacementMap,te=!!E.emissiveMap,Lt=!!E.metalnessMap,Wt=!!E.roughnessMap,De=E.anisotropy>0,I=E.clearcoat>0,w=E.dispersion>0,W=E.iridescence>0,j=E.sheen>0,tt=E.transmission>0,Z=De&&!!E.anisotropyMap,bt=I&&!!E.clearcoatMap,ut=I&&!!E.clearcoatNormalMap,Tt=I&&!!E.clearcoatRoughnessMap,Rt=W&&!!E.iridescenceMap,et=W&&!!E.iridescenceThicknessMap,vt=j&&!!E.sheenColorMap,Ut=j&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,ct=!!E.specularColorMap,kt=!!E.specularIntensityMap,F=tt&&!!E.transmissionMap,dt=tt&&!!E.thicknessMap,nt=!!E.gradientMap,yt=!!E.alphaMap,it=E.alphaTest>0,J=!!E.alphaHash,Mt=!!E.extensions;let Ht=ci;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const ve={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Jt,fragmentShader:$,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:wt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&D._colorsTexture!==null,instancing:ie,instancingColor:ie&&D.instanceColor!==null,instancingMorph:ie&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:$s,alphaToCoverage:!!E.alphaToCoverage,map:ye,matcap:Me,envMap:se,envMapMode:se&&K.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Ke,bumpMap:re,normalMap:me,displacementMap:h&&At,emissiveMap:te,normalMapObjectSpace:me&&E.normalMapType===p0,normalMapTangentSpace:me&&E.normalMapType===lf,metalnessMap:Lt,roughnessMap:Wt,anisotropy:De,anisotropyMap:Z,clearcoat:I,clearcoatMap:bt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Tt,dispersion:w,iridescence:W,iridescenceMap:Rt,iridescenceThicknessMap:et,sheen:j,sheenColorMap:vt,sheenRoughnessMap:Ut,specularMap:Nt,specularColorMap:ct,specularIntensityMap:kt,transmission:tt,transmissionMap:F,thicknessMap:dt,gradientMap:nt,opaque:E.transparent===!1&&E.blending===zs&&E.alphaToCoverage===!1,alphaMap:yt,alphaTest:it,alphaHash:J,combine:E.combine,mapUv:ye&&v(E.map.channel),aoMapUv:N&&v(E.aoMap.channel),lightMapUv:Ke&&v(E.lightMap.channel),bumpMapUv:re&&v(E.bumpMap.channel),normalMapUv:me&&v(E.normalMap.channel),displacementMapUv:At&&v(E.displacementMap.channel),emissiveMapUv:te&&v(E.emissiveMap.channel),metalnessMapUv:Lt&&v(E.metalnessMap.channel),roughnessMapUv:Wt&&v(E.roughnessMap.channel),anisotropyMapUv:Z&&v(E.anisotropyMap.channel),clearcoatMapUv:bt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(E.sheenRoughnessMap.channel),specularMapUv:Nt&&v(E.specularMap.channel),specularColorMapUv:ct&&v(E.specularColorMap.channel),specularIntensityMapUv:kt&&v(E.specularIntensityMap.channel),transmissionMapUv:F&&v(E.transmissionMap.channel),thicknessMapUv:dt&&v(E.thicknessMap.channel),alphaMapUv:yt&&v(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(me||De),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(ye||yt),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===fe,decodeVideoTextureEmissive:te&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===tn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Mt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&E.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let L;if(M){const B=Hn[M];L=og.clone(B.uniforms)}else L=E.uniforms;return L}function R(E,M){let L;for(let B=0,D=u.length;B<D;B++){const z=u[B];if(z.cacheKey===M){L=z,++L.usedTimes;break}}return L===void 0&&(L=new pM(i,M,E,r),u.push(L)),L}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:P}}function xM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function yM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,g,v,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,h,f,g,v,m){const p=o(d,h,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,v,m){const p=o(d,h,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||yM),n.length>1&&n.sort(h||Xh),s.length>1&&s.sort(h||Xh)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function MM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Yh,i.set(n,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function SM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Yt};break;case"SpotLight":e={position:new b,direction:new b,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function EM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wM=0;function TM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function AM(i){const t=new SM,e=EM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const s=new b,r=new ge,o=new ge;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,R=0,A=0,C=0;l.sort(TM);for(let E=0,M=l.length;E<M;E++){const L=l[E],B=L.color,D=L.intensity,z=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*D,d+=B.g*D,h+=B.b*D;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],D);C++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=L.shadow.matrix,_++}n.directional[f]=U,f++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(B).multiplyScalar(D),U.distance=z,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[v]=U;const K=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=K.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=O,x++}v++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(B).multiplyScalar(D),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=U,m++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=U,g++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(D),U.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=C,n.version=wM++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Zh(i){const t=new AM(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function bM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zh(i),t.set(s,[a])):r>=o.length?(a=new Zh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`;function PM(i,t,e){let n=new Ef;const s=new gt,r=new gt,o=new Re,a=new Qg({depthPacking:f0}),c=new tv,l={},u=e.maxTextureSize,d={[bi]:nn,[nn]:bi,[tn]:tn},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(wi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const D=p!==oi&&this.type===oi,z=p===oi&&this.type!==oi;for(let O=0,U=A.length;O<U;O++){const K=A[O],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();if(s.multiply(Q),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||D===!0||z===!0){const mt=this.type!==oi?{minFilter:mn,magFilter:mn}:{};G.map!==null&&G.map.dispose(),G.map=new ji(s.x,s.y,mt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const at=G.getViewportCount();for(let mt=0;mt<at;mt++){const rt=G.getViewport(mt);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),B.viewport(o),G.updateMatrices(K,mt),n=G.getFrustum(),x(C,P,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===oi&&_(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,L)};function _(A,C){const P=t.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ji(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,f,v,null)}function y(A,C,P,E){let M=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=M.uuid,D=C.uuid;let z=l[B];z===void 0&&(z={},l[B]=z);let O=z[D];O===void 0&&(O=M.clone(),z[D]=O,C.addEventListener("dispose",R)),M=O}if(M.visible=C.visible,M.wireframe=C.wireframe,E===oi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=P}return M}function x(A,C,P,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===oi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const D=t.update(A),z=A.material;if(Array.isArray(z)){const O=D.groups;for(let U=0,K=O.length;U<K;U++){const G=O[U],Q=z[G.materialIndex];if(Q&&Q.visible){const at=y(A,Q,E,M);A.onBeforeShadow(i,A,C,P,D,at,G),i.renderBufferDirect(P,null,D,at,A,G),A.onAfterShadow(i,A,C,P,D,at,G)}}}else if(z.visible){const O=y(A,z,E,M);A.onBeforeShadow(i,A,C,P,D,O,null),i.renderBufferDirect(P,null,D,O,A,null),A.onAfterShadow(i,A,C,P,D,O,null)}}const B=A.children;for(let D=0,z=B.length;D<z;D++)x(B[D],C,P,E,M)}function R(A){A.target.removeEventListener("dispose",R);for(const P in l){const E=l[P],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const LM={[qc]:Xc,[Yc]:$c,[Zc]:jc,[Ys]:Kc,[Xc]:qc,[$c]:Yc,[jc]:Zc,[Kc]:Ys};function IM(i,t){function e(){let F=!1;const dt=new Re;let nt=null;const yt=new Re(0,0,0,0);return{setMask:function(it){nt!==it&&!F&&(i.colorMask(it,it,it,it),nt=it)},setLocked:function(it){F=it},setClear:function(it,J,Mt,Ht,ve){ve===!0&&(it*=Ht,J*=Ht,Mt*=Ht),dt.set(it,J,Mt,Ht),yt.equals(dt)===!1&&(i.clearColor(it,J,Mt,Ht),yt.copy(dt))},reset:function(){F=!1,nt=null,yt.set(-1,0,0,0)}}}function n(){let F=!1,dt=!1,nt=null,yt=null,it=null;return{setReversed:function(J){if(dt!==J){const Mt=t.get("EXT_clip_control");J?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),dt=J;const Ht=it;it=null,this.setClear(Ht)}},getReversed:function(){return dt},setTest:function(J){J?ht(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(J){nt!==J&&!F&&(i.depthMask(J),nt=J)},setFunc:function(J){if(dt&&(J=LM[J]),yt!==J){switch(J){case qc:i.depthFunc(i.NEVER);break;case Xc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case Zc:i.depthFunc(i.EQUAL);break;case Kc:i.depthFunc(i.GEQUAL);break;case $c:i.depthFunc(i.GREATER);break;case jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=J}},setLocked:function(J){F=J},setClear:function(J){it!==J&&(dt&&(J=1-J),i.clearDepth(J),it=J)},reset:function(){F=!1,nt=null,yt=null,it=null,dt=!1}}}function s(){let F=!1,dt=null,nt=null,yt=null,it=null,J=null,Mt=null,Ht=null,ve=null;return{setTest:function(le){F||(le?ht(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(le){dt!==le&&!F&&(i.stencilMask(le),dt=le)},setFunc:function(le,An,$n){(nt!==le||yt!==An||it!==$n)&&(i.stencilFunc(le,An,$n),nt=le,yt=An,it=$n)},setOp:function(le,An,$n){(J!==le||Mt!==An||Ht!==$n)&&(i.stencilOp(le,An,$n),J=le,Mt=An,Ht=$n)},setLocked:function(le){F=le},setClear:function(le){ve!==le&&(i.clearStencil(le),ve=le)},reset:function(){F=!1,dt=null,nt=null,yt=null,it=null,J=null,Mt=null,Ht=null,ve=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,R=null,A=null,C=new Yt(0,0,0),P=0,E=!1,M=null,L=null,B=null,D=null,z=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=K>=2);let Q=null,at={};const mt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Jt=new Re().fromArray(mt),$=new Re().fromArray(rt);function ot(F,dt,nt,yt){const it=new Uint8Array(4),J=i.createTexture();i.bindTexture(F,J),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<nt;Mt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(dt+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return J}const wt={};wt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Ys),re(!1),me(Bu),ht(i.CULL_FACE),N(wi);function ht(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Ct(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function ie(F,dt){return d[F]!==dt?(i.bindFramebuffer(F,dt),d[F]=dt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ft(F,dt){let nt=f,yt=!1;if(F){nt=h.get(dt),nt===void 0&&(nt=[],h.set(dt,nt));const it=F.textures;if(nt.length!==it.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Mt=it.length;J<Mt;J++)nt[J]=i.COLOR_ATTACHMENT0+J;nt.length=it.length,yt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(nt)}function ye(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const Me={[Wi]:i.FUNC_ADD,[Bm]:i.FUNC_SUBTRACT,[km]:i.FUNC_REVERSE_SUBTRACT};Me[Hm]=i.MIN,Me[Vm]=i.MAX;const se={[Gm]:i.ZERO,[Wm]:i.ONE,[qm]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[jm]:i.SRC_ALPHA_SATURATE,[Km]:i.DST_COLOR,[Ym]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[$m]:i.ONE_MINUS_DST_COLOR,[Zm]:i.ONE_MINUS_DST_ALPHA,[Jm]:i.CONSTANT_COLOR,[Qm]:i.ONE_MINUS_CONSTANT_COLOR,[t0]:i.CONSTANT_ALPHA,[e0]:i.ONE_MINUS_CONSTANT_ALPHA};function N(F,dt,nt,yt,it,J,Mt,Ht,ve,le){if(F===wi){v===!0&&(Ct(i.BLEND),v=!1);return}if(v===!1&&(ht(i.BLEND),v=!0),F!==Om){if(F!==m||le!==E){if((p!==Wi||x!==Wi)&&(i.blendEquation(i.FUNC_ADD),p=Wi,x=Wi),le)switch(F){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.ONE,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,y=null,R=null,A=null,C.set(0,0,0),P=0,m=F,E=le}return}it=it||dt,J=J||nt,Mt=Mt||yt,(dt!==p||it!==x)&&(i.blendEquationSeparate(Me[dt],Me[it]),p=dt,x=it),(nt!==_||yt!==y||J!==R||Mt!==A)&&(i.blendFuncSeparate(se[nt],se[yt],se[J],se[Mt]),_=nt,y=yt,R=J,A=Mt),(Ht.equals(C)===!1||ve!==P)&&(i.blendColor(Ht.r,Ht.g,Ht.b,ve),C.copy(Ht),P=ve),m=F,E=!1}function Ke(F,dt){F.side===tn?Ct(i.CULL_FACE):ht(i.CULL_FACE);let nt=F.side===nn;dt&&(nt=!nt),re(nt),F.blending===zs&&F.transparent===!1?N(wi):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const yt=F.stencilWrite;a.setTest(yt),yt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function me(F){F!==Um?(ht(i.CULL_FACE),F!==L&&(F===Bu?i.cullFace(i.BACK):F===Fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),L=F}function At(F){F!==B&&(U&&i.lineWidth(F),B=F)}function te(F,dt,nt){F?(ht(i.POLYGON_OFFSET_FILL),(D!==dt||z!==nt)&&(i.polygonOffset(dt,nt),D=dt,z=nt)):Ct(i.POLYGON_OFFSET_FILL)}function Lt(F){F?ht(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Wt(F){F===void 0&&(F=i.TEXTURE0+O-1),Q!==F&&(i.activeTexture(F),Q=F)}function De(F,dt,nt){nt===void 0&&(Q===null?nt=i.TEXTURE0+O-1:nt=Q);let yt=at[nt];yt===void 0&&(yt={type:void 0,texture:void 0},at[nt]=yt),(yt.type!==F||yt.texture!==dt)&&(Q!==nt&&(i.activeTexture(nt),Q=nt),i.bindTexture(F,dt||wt[F]),yt.type=F,yt.texture=dt)}function I(){const F=at[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(F){Jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Jt.copy(F))}function Ut(F){$.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function Nt(F,dt){let nt=l.get(dt);nt===void 0&&(nt=new WeakMap,l.set(dt,nt));let yt=nt.get(F);yt===void 0&&(yt=i.getUniformBlockIndex(dt,F.name),nt.set(F,yt))}function ct(F,dt){const yt=l.get(dt).get(F);c.get(dt)!==yt&&(i.uniformBlockBinding(dt,yt,F.__bindingPointIndex),c.set(dt,yt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,at={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,R=null,A=null,C=new Yt(0,0,0),P=0,E=!1,M=null,L=null,B=null,D=null,z=null,Jt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Ct,bindFramebuffer:ie,drawBuffers:Ft,useProgram:ye,setBlending:N,setMaterial:Ke,setFlipSided:re,setCullFace:me,setLineWidth:At,setPolygonOffset:te,setScissorTest:Lt,activeTexture:Wt,bindTexture:De,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:W,texImage2D:Rt,texImage3D:et,updateUBOMapping:Nt,uniformBlockBinding:ct,texStorage2D:ut,texStorage3D:Tt,texSubImage2D:j,texSubImage3D:tt,compressedTexSubImage2D:Z,compressedTexSubImage3D:bt,scissor:vt,viewport:Ut,reset:kt}}function DM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return f?new OffscreenCanvas(I,w):ga("canvas")}function v(I,w,W){let j=1;const tt=De(I);if((tt.width>W||tt.height>W)&&(j=W/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Z=Math.floor(j*tt.width),bt=Math.floor(j*tt.height);d===void 0&&(d=g(Z,bt));const ut=w?g(Z,bt):d;return ut.width=Z,ut.height=bt,ut.getContext("2d").drawImage(I,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+bt+")."),ut}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,w,W,j,tt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=w;if(w===i.RED&&(W===i.FLOAT&&(Z=i.R32F),W===i.HALF_FLOAT&&(Z=i.R16F),W===i.UNSIGNED_BYTE&&(Z=i.R8)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.R8UI),W===i.UNSIGNED_SHORT&&(Z=i.R16UI),W===i.UNSIGNED_INT&&(Z=i.R32UI),W===i.BYTE&&(Z=i.R8I),W===i.SHORT&&(Z=i.R16I),W===i.INT&&(Z=i.R32I)),w===i.RG&&(W===i.FLOAT&&(Z=i.RG32F),W===i.HALF_FLOAT&&(Z=i.RG16F),W===i.UNSIGNED_BYTE&&(Z=i.RG8)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RG8UI),W===i.UNSIGNED_SHORT&&(Z=i.RG16UI),W===i.UNSIGNED_INT&&(Z=i.RG32UI),W===i.BYTE&&(Z=i.RG8I),W===i.SHORT&&(Z=i.RG16I),W===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),W===i.UNSIGNED_INT&&(Z=i.RGB32UI),W===i.BYTE&&(Z=i.RGB8I),W===i.SHORT&&(Z=i.RGB16I),W===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),W===i.UNSIGNED_INT&&(Z=i.RGBA32UI),W===i.BYTE&&(Z=i.RGBA8I),W===i.SHORT&&(Z=i.RGBA16I),W===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),w===i.RGBA){const bt=tt?pa:ne.getTransfer(j);W===i.FLOAT&&(Z=i.RGBA32F),W===i.HALF_FLOAT&&(Z=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Z=bt===fe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(I,w){let W;return I?w===null||w===$i||w===Vr?W=i.DEPTH24_STENCIL8:w===Gn?W=i.DEPTH32F_STENCIL8:w===Hr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$i||w===Vr?W=i.DEPTH_COMPONENT24:w===Gn?W=i.DEPTH_COMPONENT32F:w===Hr&&(W=i.DEPTH_COMPONENT16),W}function R(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==mn&&I.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function A(I){const w=I.target;w.removeEventListener("dispose",A),P(w),w.isVideoTexture&&u.delete(w)}function C(I){const w=I.target;w.removeEventListener("dispose",C),M(w)}function P(I){const w=n.get(I);if(w.__webglInit===void 0)return;const W=I.source,j=h.get(W);if(j){const tt=j[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(I),Object.keys(j).length===0&&h.delete(W)}n.remove(I)}function E(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const W=I.source,j=h.get(W);delete j[w.__cacheKey],o.memory.textures--}function M(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let tt=0;tt<w.__webglFramebuffer[j].length;tt++)i.deleteFramebuffer(w.__webglFramebuffer[j][tt]);else i.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)i.deleteFramebuffer(w.__webglFramebuffer[j]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=I.textures;for(let j=0,tt=W.length;j<tt;j++){const Z=n.get(W[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(W[j])}n.remove(I)}let L=0;function B(){L=0}function D(){const I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function z(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function O(I,w){const W=n.get(I);if(I.isVideoTexture&&Lt(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(W,I,w);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function U(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){wt(W,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function K(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){wt(W,I,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function G(I,w){const W=n.get(I);if(I.version>0&&W.__version!==I.version){ht(W,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}const Q={[Ki]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},at={[mn]:i.NEAREST,[h0]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},mt={[m0]:i.NEVER,[M0]:i.ALWAYS,[g0]:i.LESS,[uf]:i.LEQUAL,[v0]:i.EQUAL,[y0]:i.GEQUAL,[_0]:i.GREATER,[x0]:i.NOTEQUAL};function rt(I,w){if(w.type===Gn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Dn||w.magFilter===Ja||w.magFilter===_o||w.magFilter===Ei||w.minFilter===Dn||w.minFilter===Ja||w.minFilter===_o||w.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Q[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Q[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Q[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,at[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,at[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===mn||w.minFilter!==_o&&w.minFilter!==Ei||w.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Jt(I,w){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",A));const j=w.source;let tt=h.get(j);tt===void 0&&(tt={},h.set(j,tt));const Z=z(w);if(Z!==I.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),tt[Z].usedTimes++;const bt=tt[I.__cacheKey];bt!==void 0&&(tt[I.__cacheKey].usedTimes--,bt.usedTimes===0&&E(w)),I.__cacheKey=Z,I.__webglTexture=tt[Z].texture}return W}function $(I,w,W){return Math.floor(Math.floor(I/W)/w)}function ot(I,w,W,j){const Z=I.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,W,j,w.data);else{Z.sort((et,vt)=>et.start-vt.start);let bt=0;for(let et=1;et<Z.length;et++){const vt=Z[bt],Ut=Z[et],Nt=vt.start+vt.count,ct=$(Ut.start,w.width,4),kt=$(vt.start,w.width,4);Ut.start<=Nt+1&&ct===kt&&$(Ut.start+Ut.count-1,w.width,4)===ct?vt.count=Math.max(vt.count,Ut.start+Ut.count-vt.start):(++bt,Z[bt]=Ut)}Z.length=bt+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let et=0,vt=Z.length;et<vt;et++){const Ut=Z[et],Nt=Math.floor(Ut.start/4),ct=Math.ceil(Ut.count/4),kt=Nt%w.width,F=Math.floor(Nt/w.width),dt=ct,nt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,kt,F,dt,nt,W,j,w.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function wt(I,w,W){let j=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=i.TEXTURE_3D);const tt=Jt(I,w),Z=w.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+W);const bt=n.get(Z);if(Z.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+W);const ut=ne.getPrimaries(ne.workingColorSpace),Tt=w.colorSpace===yi?null:ne.getPrimaries(w.colorSpace),Rt=w.colorSpace===yi||ut===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let et=v(w.image,!1,s.maxTextureSize);et=Wt(w,et);const vt=r.convert(w.format,w.colorSpace),Ut=r.convert(w.type);let Nt=y(w.internalFormat,vt,Ut,w.colorSpace,w.isVideoTexture);rt(j,w);let ct;const kt=w.mipmaps,F=w.isVideoTexture!==!0,dt=bt.__version===void 0||tt===!0,nt=Z.dataReady,yt=R(w,et);if(w.isDepthTexture)Nt=x(w.format===Wr,w.type),dt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,vt,Ut,null));else if(w.isDataTexture)if(kt.length>0){F&&dt&&e.texStorage2D(i.TEXTURE_2D,yt,Nt,kt[0].width,kt[0].height);for(let it=0,J=kt.length;it<J;it++)ct=kt[it],F?nt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct.width,ct.height,vt,Ut,ct.data):e.texImage2D(i.TEXTURE_2D,it,Nt,ct.width,ct.height,0,vt,Ut,ct.data);w.generateMipmaps=!1}else F?(dt&&e.texStorage2D(i.TEXTURE_2D,yt,Nt,et.width,et.height),nt&&ot(w,et,vt,Ut)):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,vt,Ut,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Nt,kt[0].width,kt[0].height,et.depth);for(let it=0,J=kt.length;it<J;it++)if(ct=kt[it],w.format!==Nn)if(vt!==null)if(F){if(nt)if(w.layerUpdates.size>0){const Mt=wh(ct.width,ct.height,w.format,w.type);for(const Ht of w.layerUpdates){const ve=ct.data.subarray(Ht*Mt/ct.data.BYTES_PER_ELEMENT,(Ht+1)*Mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Ht,ct.width,ct.height,1,vt,ve)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ct.width,ct.height,et.depth,vt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Nt,ct.width,ct.height,et.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ct.width,ct.height,et.depth,vt,Ut,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Nt,ct.width,ct.height,et.depth,0,vt,Ut,ct.data)}else{F&&dt&&e.texStorage2D(i.TEXTURE_2D,yt,Nt,kt[0].width,kt[0].height);for(let it=0,J=kt.length;it<J;it++)ct=kt[it],w.format!==Nn?vt!==null?F?nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ct.width,ct.height,vt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Nt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?nt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct.width,ct.height,vt,Ut,ct.data):e.texImage2D(i.TEXTURE_2D,it,Nt,ct.width,ct.height,0,vt,Ut,ct.data)}else if(w.isDataArrayTexture)if(F){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Nt,et.width,et.height,et.depth),nt)if(w.layerUpdates.size>0){const it=wh(et.width,et.height,w.format,w.type);for(const J of w.layerUpdates){const Mt=et.data.subarray(J*it/et.data.BYTES_PER_ELEMENT,(J+1)*it/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,vt,Ut,Mt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,Ut,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,vt,Ut,et.data);else if(w.isData3DTexture)F?(dt&&e.texStorage3D(i.TEXTURE_3D,yt,Nt,et.width,et.height,et.depth),nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,Ut,et.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,vt,Ut,et.data);else if(w.isFramebufferTexture){if(dt)if(F)e.texStorage2D(i.TEXTURE_2D,yt,Nt,et.width,et.height);else{let it=et.width,J=et.height;for(let Mt=0;Mt<yt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Nt,it,J,0,vt,Ut,null),it>>=1,J>>=1}}else if(kt.length>0){if(F&&dt){const it=De(kt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Nt,it.width,it.height)}for(let it=0,J=kt.length;it<J;it++)ct=kt[it],F?nt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,vt,Ut,ct):e.texImage2D(i.TEXTURE_2D,it,Nt,vt,Ut,ct);w.generateMipmaps=!1}else if(F){if(dt){const it=De(et);e.texStorage2D(i.TEXTURE_2D,yt,Nt,it.width,it.height)}nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ut,et)}else e.texImage2D(i.TEXTURE_2D,0,Nt,vt,Ut,et);m(w)&&p(j),bt.__version=Z.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ht(I,w,W){if(w.image.length!==6)return;const j=Jt(I,w),tt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const Z=n.get(tt);if(tt.version!==Z.__version||j===!0){e.activeTexture(i.TEXTURE0+W);const bt=ne.getPrimaries(ne.workingColorSpace),ut=w.colorSpace===yi?null:ne.getPrimaries(w.colorSpace),Tt=w.colorSpace===yi||bt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Rt=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Rt&&!et?vt[J]=v(w.image[J],!0,s.maxCubemapSize):vt[J]=et?w.image[J].image:w.image[J],vt[J]=Wt(w,vt[J]);const Ut=vt[0],Nt=r.convert(w.format,w.colorSpace),ct=r.convert(w.type),kt=y(w.internalFormat,Nt,ct,w.colorSpace),F=w.isVideoTexture!==!0,dt=Z.__version===void 0||j===!0,nt=tt.dataReady;let yt=R(w,Ut);rt(i.TEXTURE_CUBE_MAP,w);let it;if(Rt){F&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,kt,Ut.width,Ut.height);for(let J=0;J<6;J++){it=vt[J].mipmaps;for(let Mt=0;Mt<it.length;Mt++){const Ht=it[Mt];w.format!==Nn?Nt!==null?F?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,Ht.width,Ht.height,Nt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,kt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,Ht.width,Ht.height,Nt,ct,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,kt,Ht.width,Ht.height,0,Nt,ct,Ht.data)}}}else{if(it=w.mipmaps,F&&dt){it.length>0&&yt++;const J=De(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,kt,J.width,J.height)}for(let J=0;J<6;J++)if(et){F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Nt,ct,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,vt[J].width,vt[J].height,0,Nt,ct,vt[J].data);for(let Mt=0;Mt<it.length;Mt++){const ve=it[Mt].image[J].image;F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,ve.width,ve.height,Nt,ct,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,kt,ve.width,ve.height,0,Nt,ct,ve.data)}}else{F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,ct,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Nt,ct,vt[J]);for(let Mt=0;Mt<it.length;Mt++){const Ht=it[Mt];F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,Nt,ct,Ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,kt,Nt,ct,Ht.image[J])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),Z.__version=tt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ct(I,w,W,j,tt,Z){const bt=r.convert(W.format,W.colorSpace),ut=r.convert(W.type),Tt=y(W.internalFormat,bt,ut,W.colorSpace),Rt=n.get(w),et=n.get(W);if(et.__renderTarget=w,!Rt.__hasExternalTextures){const vt=Math.max(1,w.width>>Z),Ut=Math.max(1,w.height>>Z);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,Tt,vt,Ut,w.depth,0,bt,ut,null):e.texImage2D(tt,Z,Tt,vt,Ut,0,bt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,tt,et.__webglTexture,0,At(w)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,tt,et.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(I,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const j=w.depthTexture,tt=j&&j.isDepthTexture?j.type:null,Z=x(w.stencilBuffer,tt),bt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=At(w);te(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Z,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,I)}else{const j=w.textures;for(let tt=0;tt<j.length;tt++){const Z=j[tt],bt=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),Tt=y(Z.internalFormat,bt,ut,Z.colorSpace),Rt=At(w);W&&te(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Tt,w.width,w.height):te(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Tt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const tt=j.__webglTexture,Z=At(w);if(w.depthTexture.format===Gr)te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(w.depthTexture.format===Wr)te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ye(I){const w=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=j}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const j=I.texture.mipmaps;j&&j.length>0?Ft(w.__webglFramebuffer[0],I):Ft(w.__webglFramebuffer,I)}else if(W){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=i.createRenderbuffer(),ie(w.__webglDepthbuffer[j],I,!1);else{const tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ie(w.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(I,w,W){const j=n.get(I);w!==void 0&&Ct(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ye(I)}function se(I){const w=I.texture,W=n.get(I),j=n.get(w);I.addEventListener("dispose",C);const tt=I.textures,Z=I.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=w.version,o.memory.textures++),Z){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)W.__webglFramebuffer[ut][Tt]=i.createFramebuffer()}else W.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<w.mipmaps.length;ut++)W.__webglFramebuffer[ut]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ut=0,Tt=tt.length;ut<Tt;ut++){const Rt=n.get(tt[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&te(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const Tt=tt[ut];W.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ut]);const Rt=r.convert(Tt.format,Tt.colorSpace),et=r.convert(Tt.type),vt=y(Tt.internalFormat,Rt,et,Tt.colorSpace,I.isXRRenderTarget===!0),Ut=At(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,vt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,W.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),rt(i.TEXTURE_CUBE_MAP,w);for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Ct(W.__webglFramebuffer[ut][Tt],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else Ct(W.__webglFramebuffer[ut],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,Tt=tt.length;ut<Tt;ut++){const Rt=tt[ut],et=n.get(Rt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),rt(i.TEXTURE_2D,Rt),Ct(W.__webglFramebuffer,I,Rt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Rt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),rt(ut,w),w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Ct(W.__webglFramebuffer[Tt],I,w,i.COLOR_ATTACHMENT0,ut,Tt);else Ct(W.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,ut,0);m(w)&&p(ut),e.unbindTexture()}I.depthBuffer&&ye(I)}function N(I){const w=I.textures;for(let W=0,j=w.length;W<j;W++){const tt=w[W];if(m(tt)){const Z=_(I),bt=n.get(tt).__webglTexture;e.bindTexture(Z,bt),p(Z),e.unbindTexture()}}}const Ke=[],re=[];function me(I){if(I.samples>0){if(te(I)===!1){const w=I.textures,W=I.width,j=I.height;let tt=i.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(I),ut=w.length>1;if(ut)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Tt=I.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const et=n.get(w[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,tt,i.NEAREST),c===!0&&(Ke.length=0,re.length=0,Ke.push(i.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ke.push(Z),re.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Rt]);const et=n.get(w[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function At(I){return Math.min(s.maxSamples,I.samples)}function te(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function Wt(I,w){const W=I.colorSpace,j=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==$s&&W!==yi&&(ne.getTransfer(W)===fe?(j!==Nn||tt!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function De(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Me,this.setupRenderTarget=se,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=te}function NM(i,t){function e(n,s=yi){let r;const o=ne.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.BYTE;if(n===nf)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===ro)return i.HALF_FLOAT;if(n===rf)return i.ALPHA;if(n===of)return i.RGB;if(n===Nn)return i.RGBA;if(n===Gr)return i.DEPTH_COMPONENT;if(n===Wr)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===af)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===oa||n===aa||n===ca||n===la)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===ol)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===vl||n===_l||n===xl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===Sl||n===El)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cf||n===wl||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const UM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ri({vertexShader:UM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OM extends sr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=new zM,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],R=new gt;let A=null;const C=new Sn;C.viewport=new Re;const P=new Sn;P.viewport=new Re;const E=[C,P],M=new sv;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ot=y[$];return ot===void 0&&(ot=new xc,y[$]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function($){let ot=y[$];return ot===void 0&&(ot=new xc,y[$]=ot),ot.getGripSpace()},this.getHand=function($){let ot=y[$];return ot===void 0&&(ot=new xc,y[$]=ot),ot.getHandSpace()};function D($){const ot=x.indexOf($.inputSource);if(ot===-1)return;const wt=y[ot];wt!==void 0&&(wt.update($.inputSource,$.frame,l||o),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let $=0;$<y.length;$++){const ot=x[$];ot!==null&&(x[$]=null,y[$].disconnect(ot))}L=null,B=null,v.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,_=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,ht=null,Ct=null;m.depth&&(Ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=m.stencil?Wr:Gr,ht=m.stencil?Vr:$i);const ie={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(ie),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new ji(h.textureWidth,h.textureHeight,{format:Nn,type:hi,depthTexture:new Tf(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const wt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ji(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O($){for(let ot=0;ot<$.removed.length;ot++){const wt=$.removed[ot],ht=x.indexOf(wt);ht>=0&&(x[ht]=null,y[ht].disconnect(wt))}for(let ot=0;ot<$.added.length;ot++){const wt=$.added[ot];let ht=x.indexOf(wt);if(ht===-1){for(let ie=0;ie<y.length;ie++)if(ie>=x.length){x.push(wt),ht=ie;break}else if(x[ie]===null){x[ie]=wt,ht=ie;break}if(ht===-1)break}const Ct=y[ht];Ct&&Ct.connect(wt)}}const U=new b,K=new b;function G($,ot,wt){U.setFromMatrixPosition(ot.matrixWorld),K.setFromMatrixPosition(wt.matrixWorld);const ht=U.distanceTo(K),Ct=ot.projectionMatrix.elements,ie=wt.projectionMatrix.elements,Ft=Ct[14]/(Ct[10]-1),ye=Ct[14]/(Ct[10]+1),Me=(Ct[9]+1)/Ct[5],se=(Ct[9]-1)/Ct[5],N=(Ct[8]-1)/Ct[0],Ke=(ie[8]+1)/ie[0],re=Ft*N,me=Ft*Ke,At=ht/(-N+Ke),te=At*-N;if(ot.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(te),$.translateZ(At),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Lt=Ft+At,Wt=ye+At,De=re-te,I=me+(ht-te),w=Me*ye/Wt*Lt,W=se*ye/Wt*Lt;$.projectionMatrix.makePerspective(De,I,w,W,Lt,Wt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,ot){ot===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ot.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ot=$.near,wt=$.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(wt=v.depthFar)),M.near=P.near=C.near=ot,M.far=P.far=C.far=wt,(L!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,B=M.far),C.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const ht=$.parent,Ct=M.cameras;Q(M,ht);for(let ie=0;ie<Ct.length;ie++)Q(Ct[ie],ht);Ct.length===2?G(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),at($,M,ht)};function at($,ot,wt){wt===null?$.matrix.copy(ot.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ot.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let mt=null;function rt($,ot){if(u=ot.getViewerPose(l||o),g=ot,u!==null){const wt=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ht=!1;wt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Ft=0;Ft<wt.length;Ft++){const ye=wt[Ft];let Me=null;if(f!==null)Me=f.getViewport(ye);else{const N=d.getViewSubImage(h,ye);Me=N.viewport,Ft===0&&(t.setRenderTargetTextures(_,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(_))}let se=E[Ft];se===void 0&&(se=new Sn,se.layers.enable(Ft),se.viewport=new Re,E[Ft]=se),se.matrix.fromArray(ye.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ye.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Me.x,Me.y,Me.width,Me.height),Ft===0&&(M.matrix.copy(se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(se)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Ft=d.getDepthInformation(wt[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(t,Ft,s.renderState)}}for(let wt=0;wt<y.length;wt++){const ht=x[wt],Ct=y[wt];ht!==null&&Ct!==void 0&&Ct.update(ht,ot,l||o)}mt&&mt($,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Jt=new Uf;Jt.setAnimationLoop(rt),this.setAnimationLoop=function($){mt=$},this.dispose=function(){}}}const ki=new en,BM=new ge;function kM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_f(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,ki.copy(x),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(ki)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function HM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function l(_,y){let x=s[_.id];x===void 0&&(g(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(_,R);const A=t.render.frame;r[_.id]!==A&&(h(_),r[_.id]=A)}function u(_){const y=d();_.__bindingPointIndex=y;const x=i.createBuffer(),R=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=s[_.id],x=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,M=P.length;E<M;E++){const L=P[E];if(f(L,A,E,R)===!0){const B=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let O=0;O<D.length;O++){const U=D[O],K=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,B+z,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x,R){const A=_.value,C=y+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const P=R[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const R=16;for(let C=0,P=y.length;C<P;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,L=E.length;M<L;M++){const B=E[M],D=Array.isArray(B.value)?B.value:[B.value];for(let z=0,O=D.length;z<O;z++){const U=D[z],K=v(U),G=x%R,Q=G%K.boundary,at=G+Q;x+=Q,at!==0&&R-at<K.storage&&(x+=R-at),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=K.storage}}}const A=x%R;return A>0&&(x+=R-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class VM{constructor(t={}){const{canvas:e=O0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Be;let A=0,C=0,P=null,E=-1,M=null;const L=new Re,B=new Re;let D=null;const z=new Yt(0);let O=0,U=e.width,K=e.height,G=1,Q=null,at=null;const mt=new Re(0,0,U,K),rt=new Re(0,0,U,K);let Jt=!1;const $=new Ef;let ot=!1,wt=!1;const ht=new ge,Ct=new ge,ie=new b,Ft=new Re,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function se(){return P===null?G:1}let N=n;function Ke(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",J,!1),N===null){const k="webgl2";if(N=Ke(k,T),N===null)throw Ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,me,At,te,Lt,Wt,De,I,w,W,j,tt,Z,bt,ut,Tt,Rt,et,vt,Ut,Nt,ct,kt,F;function dt(){re=new Jx(N),re.init(),ct=new NM(N,re),me=new qx(N,re,t,ct),At=new IM(N,re),me.reverseDepthBuffer&&h&&At.buffers.depth.setReversed(!0),te=new ey(N),Lt=new xM,Wt=new DM(N,re,At,Lt,me,ct,te),De=new Yx(x),I=new jx(x),w=new av(N),kt=new Gx(N,w),W=new Qx(N,w,te,kt),j=new iy(N,W,w,te),vt=new ny(N,me,Wt),Tt=new Xx(Lt),tt=new _M(x,De,I,re,me,kt,Tt),Z=new kM(x,Lt),bt=new MM,ut=new bM(re),et=new Vx(x,De,I,At,j,f,c),Rt=new PM(x,j,me),F=new HM(N,te,me,At),Ut=new Wx(N,re,te),Nt=new ty(N,re,te),te.programs=tt.programs,x.capabilities=me,x.extensions=re,x.properties=Lt,x.renderLists=bt,x.shadowMap=Rt,x.state=At,x.info=te}dt();const nt=new OM(x,N);this.xr=nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(U,K,!1))},this.getSize=function(T){return T.set(U,K)},this.setSize=function(T,k,q=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,K=k,e.width=Math.floor(T*G),e.height=Math.floor(k*G),q===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(U*G,K*G).floor()},this.setDrawingBufferSize=function(T,k,q){U=T,K=k,G=q,e.width=Math.floor(T*q),e.height=Math.floor(k*q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(mt)},this.setViewport=function(T,k,q,X){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,k,q,X),At.viewport(L.copy(mt).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,k,q,X){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,k,q,X),At.scissor(B.copy(rt).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(T){At.setScissorTest(Jt=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,q=!0){let X=0;if(T){let H=!1;if(P!==null){const st=P.texture.format;H=st===Xl||st===ql||st===Wl}if(H){const st=P.texture.type,ft=st===hi||st===$i||st===Hr||st===Vr||st===Hl||st===Vl,St=et.getClearColor(),_t=et.getClearAlpha(),zt=St.r,Bt=St.g,Pt=St.b;ft?(g[0]=zt,g[1]=Bt,g[2]=Pt,g[3]=_t,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=zt,v[1]=Bt,v[2]=Pt,v[3]=_t,N.clearBufferiv(N.COLOR,0,v))}else X|=N.COLOR_BUFFER_BIT}k&&(X|=N.DEPTH_BUFFER_BIT),q&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",J,!1),et.dispose(),bt.dispose(),ut.dispose(),Lt.dispose(),De.dispose(),I.dispose(),j.dispose(),kt.dispose(),F.dispose(),tt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Iu),nt.removeEventListener("sessionend",Du),Di.stop()};function yt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=te.autoReset,k=Rt.enabled,q=Rt.autoUpdate,X=Rt.needsUpdate,H=Rt.type;dt(),te.autoReset=T,Rt.enabled=k,Rt.autoUpdate=q,Rt.needsUpdate=X,Rt.type=H}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mt(T){const k=T.target;k.removeEventListener("dispose",Mt),Ht(k)}function Ht(T){ve(T),Lt.remove(T)}function ve(T){const k=Lt.get(T).programs;k!==void 0&&(k.forEach(function(q){tt.releaseProgram(q)}),T.isShaderMaterial&&tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,q,X,H,st){k===null&&(k=ye);const ft=H.isMesh&&H.matrixWorld.determinant()<0,St=Cm(T,k,q,X,H);At.setMaterial(X,ft);let _t=q.index,zt=1;if(X.wireframe===!0){if(_t=W.getWireframeAttribute(q),_t===void 0)return;zt=2}const Bt=q.drawRange,Pt=q.attributes.position;let $t=Bt.start*zt,ue=(Bt.start+Bt.count)*zt;st!==null&&($t=Math.max($t,st.start*zt),ue=Math.min(ue,(st.start+st.count)*zt)),_t!==null?($t=Math.max($t,0),ue=Math.min(ue,_t.count)):Pt!=null&&($t=Math.max($t,0),ue=Math.min(ue,Pt.count));const Se=ue-$t;if(Se<0||Se===1/0)return;kt.setup(H,X,St,q,_t);let we,ee=Ut;if(_t!==null&&(we=w.get(_t),ee=Nt,ee.setIndex(we)),H.isMesh)X.wireframe===!0?(At.setLineWidth(X.wireframeLinewidth*se()),ee.setMode(N.LINES)):ee.setMode(N.TRIANGLES);else if(H.isLine){let It=X.linewidth;It===void 0&&(It=1),At.setLineWidth(It*se()),H.isLineSegments?ee.setMode(N.LINES):H.isLineLoop?ee.setMode(N.LINE_LOOP):ee.setMode(N.LINE_STRIP)}else H.isPoints?ee.setMode(N.POINTS):H.isSprite&&ee.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ee.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const It=H._multiDrawStarts,Ve=H._multiDrawCounts,ce=H._multiDrawCount,bn=_t?w.get(_t).bytesPerElement:1,ls=Lt.get(X).currentProgram.getUniforms();for(let un=0;un<ce;un++)ls.setValue(N,"_gl_DrawID",un),ee.render(It[un]/bn,Ve[un])}else if(H.isInstancedMesh)ee.renderInstances($t,Se,H.count);else if(q.isInstancedBufferGeometry){const It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ve=Math.min(q.instanceCount,It);ee.renderInstances($t,Se,Ve)}else ee.render($t,Se)};function le(T,k,q){T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,vo(T,k,q),T.side=bi,T.needsUpdate=!0,vo(T,k,q),T.side=tn):vo(T,k,q)}this.compile=function(T,k,q=null){q===null&&(q=T),p=ut.get(q),p.init(k),y.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const X=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const st=H.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const St=st[ft];le(St,q,H),X.add(St)}else le(st,q,H),X.add(st)}),p=y.pop(),X},this.compileAsync=function(T,k,q=null){const X=this.compile(T,k,q);return new Promise(H=>{function st(){if(X.forEach(function(ft){Lt.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){H(T);return}setTimeout(st,10)}re.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let An=null;function $n(T){An&&An(T)}function Iu(){Di.stop()}function Du(){Di.start()}const Di=new Uf;Di.setAnimationLoop($n),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(T){An=T,nt.setAnimationLoop(T),T===null?Di.stop():Di.start()},nt.addEventListener("sessionstart",Iu),nt.addEventListener("sessionend",Du),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(k),k=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,k,P),p=ut.get(T,y.length),p.init(k),y.push(p),Ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(Ct),wt=this.localClippingEnabled,ot=Tt.init(this.clippingPlanes,wt),m=bt.get(T,_.length),m.init(),_.push(m),nt.enabled===!0&&nt.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&$a(st,k,-1/0,x.sortObjects)}$a(T,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,at),Me=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Me&&et.addToRenderList(m,T),this.info.render.frame++,ot===!0&&Tt.beginShadows();const q=p.state.shadowsArray;Rt.render(q,T,k),ot===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const st=k.cameras;if(H.length>0)for(let ft=0,St=st.length;ft<St;ft++){const _t=st[ft];Uu(X,H,T,_t)}Me&&et.render(T);for(let ft=0,St=st.length;ft<St;ft++){const _t=st[ft];Nu(m,T,_t,_t.viewport)}}else H.length>0&&Uu(X,H,T,k),Me&&et.render(T),Nu(m,T,k);P!==null&&C===0&&(Wt.updateMultisampleRenderTarget(P),Wt.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,k),kt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ot===!0&&Tt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function $a(T,k,q,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){X&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ct);const ft=j.update(T),St=T.material;St.visible&&m.push(T,ft,St,q,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const ft=j.update(T),St=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ft.copy(ft.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){const _t=ft.groups;for(let zt=0,Bt=_t.length;zt<Bt;zt++){const Pt=_t[zt],$t=St[Pt.materialIndex];$t&&$t.visible&&m.push(T,ft,$t,q,Ft.z,Pt)}}else St.visible&&m.push(T,ft,St,q,Ft.z,null)}}const st=T.children;for(let ft=0,St=st.length;ft<St;ft++)$a(st[ft],k,q,X)}function Nu(T,k,q,X){const H=T.opaque,st=T.transmissive,ft=T.transparent;p.setupLightsView(q),ot===!0&&Tt.setGlobalState(x.clippingPlanes,q),X&&At.viewport(L.copy(X)),H.length>0&&go(H,k,q),st.length>0&&go(st,k,q),ft.length>0&&go(ft,k,q),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Uu(T,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new ji(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?ro:hi,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const st=p.state.transmissionRenderTarget[X.id],ft=X.viewport||L;st.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);const St=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(z),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Me&&et.render(q);const _t=x.toneMapping;x.toneMapping=ci;const zt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ot===!0&&Tt.setGlobalState(x.clippingPlanes,X),go(T,q,X),Wt.updateMultisampleRenderTarget(st),Wt.updateRenderTargetMipmap(st),re.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Pt=0,$t=k.length;Pt<$t;Pt++){const ue=k[Pt],Se=ue.object,we=ue.geometry,ee=ue.material,It=ue.group;if(ee.side===tn&&Se.layers.test(X.layers)){const Ve=ee.side;ee.side=nn,ee.needsUpdate=!0,Fu(Se,q,X,we,ee,It),ee.side=Ve,ee.needsUpdate=!0,Bt=!0}}Bt===!0&&(Wt.updateMultisampleRenderTarget(st),Wt.updateRenderTargetMipmap(st))}x.setRenderTarget(St),x.setClearColor(z,O),zt!==void 0&&(X.viewport=zt),x.toneMapping=_t}function go(T,k,q){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,st=T.length;H<st;H++){const ft=T[H],St=ft.object,_t=ft.geometry,zt=ft.group;let Bt=ft.material;Bt.allowOverride===!0&&X!==null&&(Bt=X),St.layers.test(q.layers)&&Fu(St,k,q,_t,Bt,zt)}}function Fu(T,k,q,X,H,st){T.onBeforeRender(x,k,q,X,H,st),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,k,q,X,T,st),H.transparent===!0&&H.side===tn&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,x.renderBufferDirect(q,k,X,H,T,st),H.side=bi,H.needsUpdate=!0,x.renderBufferDirect(q,k,X,H,T,st),H.side=tn):x.renderBufferDirect(q,k,X,H,T,st),T.onAfterRender(x,k,q,X,H,st)}function vo(T,k,q){k.isScene!==!0&&(k=ye);const X=Lt.get(T),H=p.state.lights,st=p.state.shadowsArray,ft=H.state.version,St=tt.getParameters(T,H.state,st,k,q),_t=tt.getProgramCacheKey(St);let zt=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?I:De).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",Mt),zt=new Map,X.programs=zt);let Bt=zt.get(_t);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===ft)return Ou(T,St),Bt}else St.uniforms=tt.getUniforms(T),T.onBeforeCompile(St,x),Bt=tt.acquireProgram(St,_t),zt.set(_t,Bt),X.uniforms=St.uniforms;const Pt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=Tt.uniform),Ou(T,St),X.needsLights=Lm(T),X.lightsStateVersion=ft,X.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.directionalShadowMap.value=H.state.directionalShadowMap,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotShadowMap.value=H.state.spotShadowMap,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMap.value=H.state.pointShadowMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function zu(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Ou(T,k){const q=Lt.get(T);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Cm(T,k,q,X,H){k.isScene!==!0&&(k=ye),Wt.resetTextureUnits();const st=k.fog,ft=X.isMeshStandardMaterial?k.environment:null,St=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:$s,_t=(X.isMeshStandardMaterial?I:De).get(X.envMap||ft),zt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Se=ci;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Se=x.toneMapping);const we=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ee=we!==void 0?we.length:0,It=Lt.get(X),Ve=p.state.lights;if(ot===!0&&(wt===!0||T!==M)){const $e=T===M&&X.id===E;Tt.setState(X,T,$e)}let ce=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ve.state.version||It.outputColorSpace!==St||H.isBatchedMesh&&It.batching===!1||!H.isBatchedMesh&&It.batching===!0||H.isBatchedMesh&&It.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&It.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&It.instancing===!1||!H.isInstancedMesh&&It.instancing===!0||H.isSkinnedMesh&&It.skinning===!1||!H.isSkinnedMesh&&It.skinning===!0||H.isInstancedMesh&&It.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&It.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&It.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&It.instancingMorph===!1&&H.morphTexture!==null||It.envMap!==_t||X.fog===!0&&It.fog!==st||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Tt.numPlanes||It.numIntersection!==Tt.numIntersection)||It.vertexAlphas!==zt||It.vertexTangents!==Bt||It.morphTargets!==Pt||It.morphNormals!==$t||It.morphColors!==ue||It.toneMapping!==Se||It.morphTargetsCount!==ee)&&(ce=!0):(ce=!0,It.__version=X.version);let bn=It.currentProgram;ce===!0&&(bn=vo(X,k,H));let ls=!1,un=!1,hr=!1;const xe=bn.getUniforms(),xn=It.uniforms;if(At.useProgram(bn.program)&&(ls=!0,un=!0,hr=!0),X.id!==E&&(E=X.id,un=!0),ls||M!==T){At.buffers.depth.getReversed()?(ht.copy(T.projectionMatrix),k0(ht),H0(ht),xe.setValue(N,"projectionMatrix",ht)):xe.setValue(N,"projectionMatrix",T.projectionMatrix),xe.setValue(N,"viewMatrix",T.matrixWorldInverse);const on=xe.map.cameraPosition;on!==void 0&&on.setValue(N,ie.setFromMatrixPosition(T.matrixWorld)),me.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,un=!0,hr=!0)}if(H.isSkinnedMesh){xe.setOptional(N,H,"bindMatrix"),xe.setOptional(N,H,"bindMatrixInverse");const $e=H.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),xe.setValue(N,"boneTexture",$e.boneTexture,Wt))}H.isBatchedMesh&&(xe.setOptional(N,H,"batchingTexture"),xe.setValue(N,"batchingTexture",H._matricesTexture,Wt),xe.setOptional(N,H,"batchingIdTexture"),xe.setValue(N,"batchingIdTexture",H._indirectTexture,Wt),xe.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&xe.setValue(N,"batchingColorTexture",H._colorsTexture,Wt));const yn=q.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&vt.update(H,q,bn),(un||It.receiveShadow!==H.receiveShadow)&&(It.receiveShadow=H.receiveShadow,xe.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(xn.envMap.value=_t,xn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(xn.envMapIntensity.value=k.environmentIntensity),un&&(xe.setValue(N,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Pm(xn,hr),st&&X.fog===!0&&Z.refreshFogUniforms(xn,st),Z.refreshMaterialUniforms(xn,X,G,K,p.state.transmissionRenderTarget[T.id]),ha.upload(N,zu(It),xn,Wt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ha.upload(N,zu(It),xn,Wt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(N,"center",H.center),xe.setValue(N,"modelViewMatrix",H.modelViewMatrix),xe.setValue(N,"normalMatrix",H.normalMatrix),xe.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $e=X.uniformsGroups;for(let on=0,ja=$e.length;on<ja;on++){const Ni=$e[on];F.update(Ni,bn),F.bind(Ni,bn)}}return bn}function Pm(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Lm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,k,q){const X=Lt.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Lt.get(T.texture).__webglTexture=k,Lt.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const q=Lt.get(T);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Im=N.createFramebuffer();this.setRenderTarget=function(T,k=0,q=0){P=T,A=k,C=q;let X=!0,H=null,st=!1,ft=!1;if(T){const _t=Lt.get(T);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(_t.__webglFramebuffer===void 0)Wt.setupRenderTarget(T);else if(_t.__hasExternalTextures)Wt.rebindTextures(T,Lt.get(T.texture).__webglTexture,Lt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pt=T.depthTexture;if(_t.__boundDepthTexture!==Pt){if(Pt!==null&&Lt.has(Pt)&&(T.width!==Pt.image.width||T.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(ft=!0);const Bt=Lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?H=Bt[k][q]:H=Bt[k],st=!0):T.samples>0&&Wt.useMultisampledRTT(T)===!1?H=Lt.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?H=Bt[q]:H=Bt,L.copy(T.viewport),B.copy(T.scissor),D=T.scissorTest}else L.copy(mt).multiplyScalar(G).floor(),B.copy(rt).multiplyScalar(G).floor(),D=Jt;if(q!==0&&(H=Im),At.bindFramebuffer(N.FRAMEBUFFER,H)&&X&&At.drawBuffers(T,H),At.viewport(L),At.scissor(B),At.setScissorTest(D),st){const _t=Lt.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,_t.__webglTexture,q)}else if(ft){const _t=Lt.get(T.texture),zt=k;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,q,zt)}else if(T!==null&&q!==0){const _t=Lt.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_t.__webglTexture,q)}E=-1},this.readRenderTargetPixels=function(T,k,q,X,H,st,ft,St=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){At.bindFramebuffer(N.FRAMEBUFFER,_t);try{const zt=T.textures[St],Bt=zt.format,Pt=zt.type;if(!me.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&q>=0&&q<=T.height-H&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St),N.readPixels(k,q,X,H,ct.convert(Bt),ct.convert(Pt),st))}finally{const zt=P!==null?Lt.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(T,k,q,X,H,st,ft,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t)if(k>=0&&k<=T.width-X&&q>=0&&q<=T.height-H){At.bindFramebuffer(N.FRAMEBUFFER,_t);const zt=T.textures[St],Bt=zt.format,Pt=zt.type;if(!me.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,st.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St),N.readPixels(k,q,X,H,ct.convert(Bt),ct.convert(Pt),0);const ue=P!==null?Lt.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,ue);const Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await B0(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,st),N.deleteBuffer($t),N.deleteSync(Se),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,q=0){const X=Math.pow(2,-q),H=Math.floor(T.image.width*X),st=Math.floor(T.image.height*X),ft=k!==null?k.x:0,St=k!==null?k.y:0;Wt.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ft,St,H,st),At.unbindTexture()};const Dm=N.createFramebuffer(),Nm=N.createFramebuffer();this.copyTextureToTexture=function(T,k,q=null,X=null,H=0,st=null){st===null&&(H!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=H,H=0):st=0);let ft,St,_t,zt,Bt,Pt,$t,ue,Se;const we=T.isCompressedTexture?T.mipmaps[st]:T.image;if(q!==null)ft=q.max.x-q.min.x,St=q.max.y-q.min.y,_t=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,Bt=q.min.y,Pt=q.isBox3?q.min.z:0;else{const yn=Math.pow(2,-H);ft=Math.floor(we.width*yn),St=Math.floor(we.height*yn),T.isDataArrayTexture?_t=we.depth:T.isData3DTexture?_t=Math.floor(we.depth*yn):_t=1,zt=0,Bt=0,Pt=0}X!==null?($t=X.x,ue=X.y,Se=X.z):($t=0,ue=0,Se=0);const ee=ct.convert(k.format),It=ct.convert(k.type);let Ve;k.isData3DTexture?(Wt.setTexture3D(k,0),Ve=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Wt.setTexture2DArray(k,0),Ve=N.TEXTURE_2D_ARRAY):(Wt.setTexture2D(k,0),Ve=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const ce=N.getParameter(N.UNPACK_ROW_LENGTH),bn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ls=N.getParameter(N.UNPACK_SKIP_PIXELS),un=N.getParameter(N.UNPACK_SKIP_ROWS),hr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);const xe=T.isDataArrayTexture||T.isData3DTexture,xn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const yn=Lt.get(T),$e=Lt.get(k),on=Lt.get(yn.__renderTarget),ja=Lt.get($e.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,ja.__webglFramebuffer);for(let Ni=0;Ni<_t;Ni++)xe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(T).__webglTexture,H,Pt+Ni),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(k).__webglTexture,st,Se+Ni)),N.blitFramebuffer(zt,Bt,ft,St,$t,ue,ft,St,N.DEPTH_BUFFER_BIT,N.NEAREST);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||Lt.has(T)){const yn=Lt.get(T),$e=Lt.get(k);At.bindFramebuffer(N.READ_FRAMEBUFFER,Dm),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nm);for(let on=0;on<_t;on++)xe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yn.__webglTexture,H,Pt+on):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yn.__webglTexture,H),xn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$e.__webglTexture,st,Se+on):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$e.__webglTexture,st),H!==0?N.blitFramebuffer(zt,Bt,ft,St,$t,ue,ft,St,N.COLOR_BUFFER_BIT,N.NEAREST):xn?N.copyTexSubImage3D(Ve,st,$t,ue,Se+on,zt,Bt,ft,St):N.copyTexSubImage2D(Ve,st,$t,ue,zt,Bt,ft,St);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xn?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ve,st,$t,ue,Se,ft,St,_t,ee,It,we.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Ve,st,$t,ue,Se,ft,St,_t,ee,we.data):N.texSubImage3D(Ve,st,$t,ue,Se,ft,St,_t,ee,It,we):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,st,$t,ue,ft,St,ee,It,we.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,st,$t,ue,we.width,we.height,ee,we.data):N.texSubImage2D(N.TEXTURE_2D,st,$t,ue,ft,St,ee,It,we);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ls),N.pixelStorei(N.UNPACK_SKIP_ROWS,un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hr),st===0&&k.generateMipmaps&&N.generateMipmap(Ve),At.unbindTexture()},this.copyTextureToTexture3D=function(T,k,q=null,X=null,H=0){return Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,q,X,H)},this.initRenderTarget=function(T){Lt.get(T).__webglFramebuffer===void 0&&Wt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Wt.setTextureCube(T,0):T.isData3DTexture?Wt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Wt.setTexture2DArray(T,0):Wt.setTexture2D(T,0),At.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,At.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Fn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Fn);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],u=n[4],d=n[5],h=n[6],f=n[7],g=n[8],v=s[0],m=s[1],p=s[2],_=s[3],y=s[4],x=s[5],R=s[6],A=s[7],C=s[8];return r[0]=o*v+a*_+c*R,r[1]=o*m+a*y+c*A,r[2]=o*p+a*x+c*C,r[3]=l*v+u*_+d*R,r[4]=l*m+u*y+d*A,r[5]=l*p+u*x+d*C,r[6]=h*v+f*_+g*R,r[7]=h*m+f*y+g*A,r[8]=h*p+f*x+g*C,e}scale(t,e){e===void 0&&(e=new Fn);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let c=3;const l=c;let u;const d=4;let h;do{if(o=l-c,r[o+s*o]===0){for(a=o+1;a<l;a++)if(r[o+s*a]!==0){u=d;do h=d-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<l;a++){const f=r[o+s*a]/r[o+s*o];u=d;do h=d-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*f;while(--u)}}while(--c);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Fn);const e=3,n=6,s=GM;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const c=a;let l;const u=n;let d;do{if(r=c-a,s[r+n*r]===0){for(o=r+1;o<c;o++)if(s[r+n*o]!==0){l=u;do d=u-l,s[d+n*r]+=s[d+n*o];while(--l);break}}if(s[r+n*r]!==0)for(o=r+1;o<c;o++){const h=s[r+n*o]/s[r+n*r];l=u;do d=u-l,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*h;while(--l)}}while(--a);r=2;do{o=r-1;do{const h=s[r+n*o]/s[r+n*r];l=n;do d=n-l,s[d+n*o]=s[d+n*o]-s[d+n*r]*h;while(--l)}while(o--)}while(--r);r=2;do{const h=1/s[r+n*r];l=n;do d=n-l,s[d+n*r]=s[d+n*r]*h;while(--l)}while(r--);r=2;do{o=2;do{if(d=s[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,c=s+s,l=e*o,u=e*a,d=e*c,h=n*a,f=n*c,g=s*c,v=r*o,m=r*a,p=r*c,_=this.elements;return _[0]=1-(h+g),_[1]=u-p,_[2]=d+m,_[3]=u+p,_[4]=1-(l+g),_[5]=f-v,_[6]=d-m,_[7]=f+v,_[8]=1-(l+h),this}transpose(t){t===void 0&&(t=new Fn);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const GM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*s,e.y=c*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Fn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new S);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=WM,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=qM;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Kh),Kh.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const WM=new S,qM=new S,Kh=new S;class _n{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,$h),l=$h),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new _n().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,c){const l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),s.set(l.x,u.y,u.z),r.set(u.x,l.y,u.z),o.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){const n=jh,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=jh,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,l=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(d,h));return!(g<0||f>g)}}const $h=new S,jh=[new S,new S,new S,new S,new S,new S,new S,new S];class Jh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class kf{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Le{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=XM,s=YM;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Le);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=n*u+o*a+s*l-r*c,e.y=s*u+o*c+r*a-n*l,e.z=r*u+o*l+n*c-s*a,e.w=o*u-n*a-s*c-r*l,e}inverse(t){t===void 0&&(t=new Le);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Le),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*r-c*s,d=l*s+c*n-o*r,h=l*r+o*s-a*n,f=-o*n-a*s-c*r;return e.x=u*l+f*-o+d*-c-h*-a,e.y=d*l+f*-a+h*-o-u*-c,e.z=h*l+f*-c+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const u=o*a+c*l;if(u>.499&&(n=2*Math.atan2(o,l),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,l),s=-Math.PI/2,r=0),n===void 0){const d=o*o,h=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*h-2*f),s=Math.asin(2*u),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=c*o*a+r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a-c*l*u):s==="YXZ"?(this.x=c*o*a+r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a+c*l*u):s==="ZXY"?(this.x=c*o*a-r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a-c*l*u):s==="ZYX"?(this.x=c*o*a-r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a+c*l*u):s==="YZX"?(this.x=c*o*a+r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a-c*l*u):s==="XZY"&&(this.x=c*o*a-r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a+c*l*u),this}clone(){return new Le(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Le);const s=this.x,r=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,u=t.z,d=t.w,h,f,g,v,m;return f=s*c+r*l+o*u+a*d,f<0&&(f=-f,c=-c,l=-l,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),v=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(v=1-e,m=e),n.x=v*s+m*c,n.y=v*r+m*l,n.z=v*o+m*u,n.w=v*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new Le);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return s.x+=h*(r*d+o*u-a*l),s.y+=h*(o*d+a*c-r*u),s.z+=h*(a*d+r*l-o*c),s.w+=h*(-r*c-o*l-a*u),s}}const XM=new S,YM=new S,ZM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class xt{constructor(t){t===void 0&&(t={}),this.id=xt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}xt.idCounter=0;xt.types=ZM;class oe{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new Le,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return oe.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return oe.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new S),n.vsub(t,s),e.conjugate(Qh),Qh.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new S),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new S),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const Qh=new Le;class Hs extends xt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:xt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new S;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],s),s.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Hs.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new S,o=new S;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,c,l){const u=new S;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const v=u.dot(o);v>h&&(h=v,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new S;m.copy(v),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,s,r,o,a,c){const l=new S,u=new S,d=new S,h=new S,f=new S,g=new S;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);const _=m.testSepAxis(l,t,e,n,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(l))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const y=a?a[_]:_;l.copy(m.faceNormals[y]),n.vmult(l,l);const x=m.testSepAxis(l,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],u);const _=m.testSepAxis(u,t,e,n,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}else{const p=c?c.length:t.faces.length;for(let _=0;_<p;_++){const y=c?c[_]:_;u.copy(t.faceNormals[y]),r.vmult(u,u);const x=m.testSepAxis(u,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],f),h.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,s,r);if(y===!1)return!1;y<v&&(v=y,o.copy(g))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;Hs.project(a,t,n,s,Dc),Hs.project(e,t,r,o,Nc);const c=Dc[0],l=Dc[1],u=Nc[0],d=Nc[1];if(c<d||u<l)return!1;const h=c-d,f=u-l;return h<f?h:f}calculateLocalInertia(t,e){const n=new S,s=new S;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const c=new S,l=new S,u=new S,d=new S,h=new S,f=new S,g=new S,v=new S,m=this,p=[],_=s,y=p;let x=-1,R=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){c.copy(m.faceNormals[M]),n.vmult(c,c);const L=c.dot(t);L<R&&(R=L,x=M)}if(x<0)return;const A=m.faces[x];A.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let L=0;L<m.faces[M].length;L++)A.indexOf(m.faces[M][L])!==-1&&M!==x&&A.connectedFaces.indexOf(M)===-1&&A.connectedFaces.push(M);const C=A.length;for(let M=0;M<C;M++){const L=m.vertices[A[M]],B=m.vertices[A[(M+1)%C]];L.vsub(B,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(L),n.vmult(f,f),e.vadd(f,f);const D=A.connectedFaces[M];g.copy(this.faceNormals[D]);const z=this.getPlaneConstantOfFace(D);v.copy(g),n.vmult(v,v);const O=z-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,O);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const P=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const E=P-v.dot(e);for(let M=0;M<_.length;M++){let L=v.dot(_[M])+E;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=o){const B=_[M];if(L<=1e-6){const D={point:B,normal:v,depth:L};a.push(D)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+s;for(let u=0;u<a;u++){if(l=t[u],o=n.dot(l)+s,r<0)if(o<0){const d=new S;d.copy(l),e.push(d)}else{const d=new S;c.lerp(l,r/(r-o),d),e.push(d)}else if(o<0){const d=new S;c.lerp(l,r/(r-o),d),e.push(d),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,c,l,u,d,h=new S;for(let f=0;f<r.length;f++){h.copy(r[f]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),s.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new S;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const c=e[n[o][0]],l=new S;t.vsub(c,l);const u=a.dot(l),d=new S;r.vsub(c,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=KM;let c=0,l=0;const u=$M,d=t.vertices;u.setZero(),oe.vectorToLocalFrame(n,s,e,a),oe.pointToLocalFrame(n,s,u,u);const h=u.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const f=l;l=c,c=f}r[0]=c,r[1]=l}}const Dc=[],Nc=[];new S;const KM=new S,$M=new S;class Ii extends xt{constructor(t){super({type:xt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=S,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new Hs({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),Ii.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)xi.set(r[o][0],r[o][1],r[o][2]),e.vmult(xi,xi),t.vadd(xi,xi),n(xi.x,xi.y,xi.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;zn[0].set(r.x,r.y,r.z),zn[1].set(-r.x,r.y,r.z),zn[2].set(-r.x,-r.y,r.z),zn[3].set(-r.x,-r.y,-r.z),zn[4].set(r.x,-r.y,-r.z),zn[5].set(r.x,r.y,-r.z),zn[6].set(-r.x,r.y,-r.z),zn[7].set(r.x,-r.y,r.z);const o=zn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=zn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,u=c.y,d=c.z;l>s.x&&(s.x=l),u>s.y&&(s.y=u),d>s.z&&(s.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const xi=new S,zn=[new S,new S,new S,new S,new S,new S,new S,new S],iu={DYNAMIC:1,STATIC:2,KINEMATIC:4},su={AWAKE:0,SLEEPY:1,SLEEPING:2};class pt extends kf{constructor(t){t===void 0&&(t={}),super(),this.id=pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?pt.STATIC:pt.DYNAMIC,typeof t.type==typeof pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new Le,this.initQuaternion=new Le,this.previousQuaternion=new Le,this.interpolatedQuaternion=new Le,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Fn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Fn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new _n,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===pt.SLEEPING&&this.dispatchEvent(pt.wakeupEvent)}sleep(){this.sleepState=pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===pt.AWAKE&&n<s?(this.sleepState=pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(pt.sleepyEvent)):e===pt.SLEEPY&&n>s?this.wakeUp():e===pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pt.SLEEPING||this.type===pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new S,r=new Le;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),c=o.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=jM,o=JM,a=this.quaternion,c=this.aabb,l=QM;for(let u=0;u!==s;u++){const d=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=tS,s=eS;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=nS;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const n=iS,s=sS;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===pt.DYNAMIC&&(this.sleepState===pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=e,s=rS;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=oS;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const n=aS,s=cS;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=lS;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ii.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pt.DYNAMIC||this.type===pt.KINEMATIC)||this.sleepState===pt.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;s.x+=a.x*f*h.x,s.y+=a.y*f*h.y,s.z+=a.z*f*h.z;const g=d.elements,v=this.angularFactor,m=c.x*v.x,p=c.y*v.y,_=c.z*v.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*_),r.y+=t*(g[3]*m+g[4]*p+g[5]*_),r.z+=t*(g[6]*m+g[7]*p+g[8]*_),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pt.idCounter=0;pt.COLLIDE_EVENT_NAME="collide";pt.DYNAMIC=iu.DYNAMIC;pt.STATIC=iu.STATIC;pt.KINEMATIC=iu.KINEMATIC;pt.AWAKE=su.AWAKE;pt.SLEEPY=su.SLEEPY;pt.SLEEPING=su.SLEEPING;pt.wakeupEvent={type:"wakeup"};pt.sleepyEvent={type:"sleepy"};pt.sleepEvent={type:"sleep"};const jM=new S,JM=new Le,QM=new _n,tS=new Fn,eS=new Fn;new Fn;const nS=new S,iS=new S,sS=new S,rS=new S,oS=new S,aS=new S,cS=new S,lS=new S;class Hf{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&pt.STATIC)!==0||t.sleepState===pt.SLEEPING)&&((e.type&pt.STATIC)!==0||e.sleepState===pt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=uS;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=hS,s=dS,r=fS,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=s[a].id,l=r[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(s[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const uS=new S;new S;new Le;new S;const hS={keys:[]},dS=[],fS=[];new S;new S;new S;class pS extends Hf{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=s[c],a=s[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class ya{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Vf,Gf,Wf,qf,Xf,Yf,Zf;const ru={CLOSEST:1,ANY:2,ALL:4};Vf=xt.types.SPHERE;Gf=xt.types.PLANE;Wf=xt.types.BOX;qf=xt.types.CYLINDER;Xf=xt.types.CONVEXPOLYHEDRON;Yf=xt.types.HEIGHTFIELD;Zf=xt.types.TRIMESH;class Pe{get[Vf](){return this._intersectSphere}get[Gf](){return this._intersectPlane}get[Wf](){return this._intersectBox}get[qf](){return this._intersectConvex}get[Xf](){return this._intersectConvex}get[Yf](){return this._intersectHeightfield}get[Zf](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Pe.ANY,this.result=new ya,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Pe.ANY,this.result=e.result||new ya,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(td),Uc.length=0,t.broadphase.aabbQuery(t,td,Uc),this.intersectBodies(Uc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=mS,r=gS;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(c,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(PS(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,c=this.direction,l=new S(0,0,1);e.vmult(l,l);const u=new S;o.vsub(n,u);const d=u.dot(l);a.vsub(n,u);const h=u.dot(l);if(d*h>0||o.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new S,v=new S,m=new S;o.vsub(n,g);const p=-l.dot(g)/f;c.scale(p,v),o.vadd(v,m),this.reportIntersection(l,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=vS;o.from.copy(this.from),o.to.copy(this.to),oe.pointToLocalFrame(n,e,o.from,o.from),oe.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=_S;let c,l,u,d;c=l=0,u=d=t.data.length-1;const h=new _n;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<u;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),oe.pointToWorldFrame(n,e,t.pillarOffset,jo),this._intersectConvex(t.pillarConvex,e,jo,s,r,ed),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),oe.pointToWorldFrame(n,e,t.pillarOffset,jo),this._intersectConvex(t.pillarConvex,e,jo,s,r,ed)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=u**2-4*l*d,f=xS,g=yS;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1);else{const v=(-u-Math.sqrt(h))/(2*l),m=(-u+Math.sqrt(h))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=MS,c=nd,l=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=l?l.length:u.length,_=this.result;for(let y=0;!_.shouldStop&&y<p;y++){const x=l?l[y]:y,R=u[x],A=h[x],C=e,P=n;c.copy(d[R[0]]),C.vmult(c,c),c.vadd(P,c),c.vsub(g,c),C.vmult(A,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const M=a.dot(c)/E;if(!(M<0)){f.scale(M,an),an.vadd(g,an),Ln.copy(d[R[0]]),C.vmult(Ln,Ln),P.vadd(Ln,Ln);for(let L=1;!_.shouldStop&&L<R.length-1;L++){On.copy(d[R[L]]),Bn.copy(d[R[L+1]]),C.vmult(On,On),C.vmult(Bn,Bn),P.vadd(On,On),P.vadd(Bn,Bn);const B=an.distanceTo(g);!(Pe.pointInTriangle(an,Ln,On,Bn)||Pe.pointInTriangle(an,On,Ln,Bn))||B>m||this.reportIntersection(a,an,r,s,x)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=SS,c=RS,l=CS,u=nd,d=ES,h=wS,f=TS,g=bS,v=AS,m=t.indices;t.vertices;const p=this.from,_=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(e),oe.vectorToLocalFrame(n,e,y,d),oe.pointToLocalFrame(n,e,p,h),oe.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const x=h.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let R=0,A=c.length;!this.result.shouldStop&&R!==A;R++){const C=c[R];t.getNormal(C,a),t.getVertex(m[C*3],Ln),Ln.vsub(h,u);const P=d.dot(a),E=a.dot(u)/P;if(E<0)continue;d.scale(E,an),an.vadd(h,an),t.getVertex(m[C*3+1],On),t.getVertex(m[C*3+2],Bn);const M=an.distanceSquared(h);!(Pe.pointInTriangle(an,On,Ln,Bn)||Pe.pointInTriangle(an,Ln,On,Bn))||M>x||(oe.vectorToWorldFrame(e,a,v),oe.pointToWorldFrame(n,e,an,g),this.reportIntersection(v,g,r,s,C))}c.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Pe.ALL:this.hasHit=!0,l.set(o,a,t,e,n,s,c),l.hasHit=!0,this.callback(l);break;case Pe.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c));break;case Pe.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Xi),n.vsub(e,Sr),t.vsub(e,Fc);const r=Xi.dot(Xi),o=Xi.dot(Sr),a=Xi.dot(Fc),c=Sr.dot(Sr),l=Sr.dot(Fc);let u,d;return(u=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&u+d<r*c-o*o}}Pe.CLOSEST=ru.CLOSEST;Pe.ANY=ru.ANY;Pe.ALL=ru.ALL;const td=new _n,Uc=[],Sr=new S,Fc=new S,mS=new S,gS=new Le,an=new S,Ln=new S,On=new S,Bn=new S;new S;new ya;const ed={faceList:[0]},jo=new S,vS=new Pe,_S=[],xS=new S,yS=new S,MS=new S;new S;new S;const nd=new S,SS=new S,ES=new S,wS=new S,TS=new S,AS=new S,bS=new S;new _n;const RS=[],CS=new oe,Xi=new S,Jo=new S;function PS(i,t,e){e.vsub(i,Xi);const n=Xi.dot(t);return t.scale(n,Jo),Jo.vadd(i,Jo),e.distanceTo(Jo)}class Us extends Hf{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,c=s+o;return r-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const s=this.axisList,r=s.length,o=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const l=s[a];for(c=a+1;c<r;c++){const u=s[c];if(this.needBroadphaseCollision(l,u)){if(!Us.checkBounds(l,u,o))break;this.intersectionTest(l,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){const r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Us.insertionSortX(t):e===1?Us.insertionSortY(t):e===2&&Us.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0;const a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){const g=a[f],v=g.position.x;t+=v,e+=v*v;const m=g.position.y;n+=m,s+=m*m;const p=g.position.z;r+=p,o+=p*p}const u=e-t*t*l,d=s-n*n*l,h=o-r*r*l;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let r="x";s===1&&(r="y"),s===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}}class LS{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class id{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class co{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=co.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new id,this.jacobianElementB=new id,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,c=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,c=s.torque,l=n.invMassSolve,u=s.invMassSolve;return r.scale(l,sd),a.scale(u,rd),n.invInertiaWorldSolve.vmult(o,od),s.invInertiaWorldSolve.vmult(c,ad),t.multiplyVectors(sd,od)+e.multiplyVectors(rd,ad)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,c=s.invInertiaWorldSolve;let l=r+o;return a.vmult(t.rotational,Qo),l+=Qo.dot(t.rotational),c.vmult(e.rotational,Qo),l+=Qo.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=IS;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}co.idCounter=0;const sd=new S,rd=new S,od=new S,ad=new S,Qo=new S,IS=new S;class DS extends co{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,c=NS,l=US,u=s.velocity,d=s.angularVelocity;s.force,s.torque;const h=r.velocity,f=r.angularVelocity;r.force,r.torque;const g=FS,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const _=p.dot(g),y=this.restitution+1,x=y*h.dot(p)-y*u.dot(p)+f.dot(l)-d.dot(c),R=this.computeGiMf();return-_*e-x*n-t*R}getImpactVelocityAlongNormal(){const t=zS,e=OS,n=BS,s=kS,r=HS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const NS=new S,US=new S,FS=new S,zS=new S,OS=new S,BS=new S,kS=new S,HS=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class cd extends co{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=VS,o=GS,a=this.t;n.cross(a,r),s.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const VS=new S,GS=new S;class rs{constructor(t,e,n){n=LS.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=rs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}rs.idCounter=0;class lr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=lr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}lr.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Pe;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Ll extends xt{constructor(t){if(super({type:xt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-r,s[c]=t[c]+r}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class WS extends Hs{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=s,o=[],a=[],c=[],l=[],u=[],d=Math.cos,h=Math.sin;o.push(new S(-e*h(0),-n*.5,e*d(0))),l.push(0),o.push(new S(-t*h(0),n*.5,t*d(0))),u.push(1);for(let g=0;g<r;g++){const v=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new S(-e*h(v),-n*.5,e*d(v))),l.push(2*g+2),o.push(new S(-t*h(v),n*.5,t*d(v))),u.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new S(-h(m),0,d(m)))}c.push(l),a.push(new S(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=xt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}}new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new _n;new S;new _n;new S;new S;new S;new S;new S;new S;new S;new _n;new S;new oe;new _n;class qS{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class XS extends qS{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,u=t;let d,h,f,g,v,m;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();const p=ZS,_=KS,y=YS;p.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const R=o[x];y[x]=0,_[x]=R.computeB(u),p[x]=1/R.computeC()}if(a!==0){for(let A=0;A!==l;A++){const C=c[A],P=C.vlambda,E=C.wlambda;P.set(0,0,0),E.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let A=0;A!==a;A++){const C=o[A];d=_[A],h=p[A],m=y[A],v=C.computeGWlambda(),f=h*(d-v-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),y[A]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<r)break}for(let A=0;A!==l;A++){const C=c[A],P=C.velocity,E=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),P.vadd(C.vlambda,P),C.wlambda.vmul(C.angularFactor,C.wlambda),E.vadd(C.wlambda,E)}let x=o.length;const R=1/u;for(;x--;)o[x].multiplier=y[x]*R}return n}}const YS=[],ZS=[],KS=[];class $S{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class jS extends $S{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const _e={sphereSphere:xt.types.SPHERE,spherePlane:xt.types.SPHERE|xt.types.PLANE,boxBox:xt.types.BOX|xt.types.BOX,sphereBox:xt.types.SPHERE|xt.types.BOX,planeBox:xt.types.PLANE|xt.types.BOX,convexConvex:xt.types.CONVEXPOLYHEDRON,sphereConvex:xt.types.SPHERE|xt.types.CONVEXPOLYHEDRON,planeConvex:xt.types.PLANE|xt.types.CONVEXPOLYHEDRON,boxConvex:xt.types.BOX|xt.types.CONVEXPOLYHEDRON,sphereHeightfield:xt.types.SPHERE|xt.types.HEIGHTFIELD,boxHeightfield:xt.types.BOX|xt.types.HEIGHTFIELD,convexHeightfield:xt.types.CONVEXPOLYHEDRON|xt.types.HEIGHTFIELD,sphereParticle:xt.types.PARTICLE|xt.types.SPHERE,planeParticle:xt.types.PLANE|xt.types.PARTICLE,boxParticle:xt.types.BOX|xt.types.PARTICLE,convexParticle:xt.types.PARTICLE|xt.types.CONVEXPOLYHEDRON,cylinderCylinder:xt.types.CYLINDER,sphereCylinder:xt.types.SPHERE|xt.types.CYLINDER,planeCylinder:xt.types.PLANE|xt.types.CYLINDER,boxCylinder:xt.types.BOX|xt.types.CYLINDER,convexCylinder:xt.types.CONVEXPOLYHEDRON|xt.types.CYLINDER,heightfieldCylinder:xt.types.HEIGHTFIELD|xt.types.CYLINDER,particleCylinder:xt.types.PARTICLE|xt.types.CYLINDER,sphereTrimesh:xt.types.SPHERE|xt.types.TRIMESH,planeTrimesh:xt.types.PLANE|xt.types.TRIMESH};class JS{get[_e.sphereSphere](){return this.sphereSphere}get[_e.spherePlane](){return this.spherePlane}get[_e.boxBox](){return this.boxBox}get[_e.sphereBox](){return this.sphereBox}get[_e.planeBox](){return this.planeBox}get[_e.convexConvex](){return this.convexConvex}get[_e.sphereConvex](){return this.sphereConvex}get[_e.planeConvex](){return this.planeConvex}get[_e.boxConvex](){return this.boxConvex}get[_e.sphereHeightfield](){return this.sphereHeightfield}get[_e.boxHeightfield](){return this.boxHeightfield}get[_e.convexHeightfield](){return this.convexHeightfield}get[_e.sphereParticle](){return this.sphereParticle}get[_e.planeParticle](){return this.planeParticle}get[_e.boxParticle](){return this.boxParticle}get[_e.convexParticle](){return this.convexParticle}get[_e.cylinderCylinder](){return this.convexConvex}get[_e.sphereCylinder](){return this.sphereConvex}get[_e.planeCylinder](){return this.planeConvex}get[_e.boxCylinder](){return this.boxConvex}get[_e.convexCylinder](){return this.convexConvex}get[_e.heightfieldCylinder](){return this.heightfieldCylinder}get[_e.particleCylinder](){return this.particleCylinder}get[_e.sphereTrimesh](){return this.sphereTrimesh}get[_e.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new jS,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new DS(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,u=s.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=r.material||n.material,d=o.material||s.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+s.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new cd(n,s,h*f),m=g.length?g.pop():new cd(n,s,h*f);return v.bi=m.bi=n,v.bj=m.bj=s,v.minForce=m.minForce=-h*f,v.maxForce=m.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Hi.setZero(),Cs.setZero(),Ps.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Hi.vadd(e.ni,Hi),Cs.vadd(e.ri,Cs),Ps.vadd(e.rj,Ps)):(Hi.vsub(e.ni,Hi),Cs.vadd(e.rj,Cs),Ps.vadd(e.ri,Ps));const o=1/t;Cs.scale(o,n.ri),Ps.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Hi.normalize(),Hi.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const c=eE,l=nE,u=QS,d=tE;for(let h=0,f=t.length;h!==f;h++){const g=t[h],v=e[h];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&pt.KINEMATIC&&v.type&pt.STATIC||g.type&pt.STATIC&&v.type&pt.KINEMATIC||g.type&pt.KINEMATIC&&v.type&pt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],u),u.vadd(g.position,u);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],l),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);const R=v.shapes[x];if(!(y.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(d)>y.boundingSphereRadius+R.boundingSphereRadius)continue;let A=null;y.material&&R.material&&(A=n.getContactMaterial(y.material,R.material)||null),this.currentContactMaterial=A||m||n.defaultContactMaterial;const C=y.type|R.type,P=this[C];if(P){let E=!1;y.type<R.type?E=P.call(this,y,R,u,d,c,l,g,v,y,R,p):E=P.call(this,R,y,d,u,l,c,v,g,y,R,p),E&&p&&(n.shapeOverlapKeeper.set(y.id,R.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,s,r,o,a,c,l,u,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,c,l,u,d){const h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(s,ta),h.ni.scale(h.ni.dot(ta),ld),ta.vsub(ld,h.rj),-ta.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,g=h.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,d)}sphereBox(t,e,n,s,r,o,a,c,l,u,d){const h=this.v3pool,f=RE;n.vsub(s,ea),e.getSideNormals(f,o);const g=t.radius;let v=!1;const m=PE,p=LE,_=IE;let y=null,x=0,R=0,A=0,C=null;for(let U=0,K=f.length;U!==K&&v===!1;U++){const G=TE;G.copy(f[U]);const Q=G.length();G.normalize();const at=ea.dot(G);if(at<Q+g&&at>0){const mt=AE,rt=bE;mt.copy(f[(U+1)%3]),rt.copy(f[(U+2)%3]);const Jt=mt.length(),$=rt.length();mt.normalize(),rt.normalize();const ot=ea.dot(mt),wt=ea.dot(rt);if(ot<Jt&&ot>-Jt&&wt<$&&wt>-$){const ht=Math.abs(at-Q-g);if((C===null||ht<C)&&(C=ht,R=ot,A=wt,y=Q,m.copy(G),p.copy(mt),_.copy(rt),x++,d))return!0}}}if(x){v=!0;const U=this.createContactEquation(a,c,t,e,l,u);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(y,m),p.scale(R,p),m.vadd(p,m),_.scale(A,_),m.vadd(_,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let P=h.get();const E=CE;for(let U=0;U!==2&&!v;U++)for(let K=0;K!==2&&!v;K++)for(let G=0;G!==2&&!v;G++)if(P.set(0,0,0),U?P.vadd(f[0],P):P.vsub(f[0],P),K?P.vadd(f[1],P):P.vsub(f[1],P),G?P.vadd(f[2],P):P.vsub(f[2],P),s.vadd(P,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;v=!0;const Q=this.createContactEquation(a,c,t,e,l,u);Q.ri.copy(E),Q.ri.normalize(),Q.ni.copy(Q.ri),Q.ri.scale(g,Q.ri),Q.rj.copy(P),Q.ri.vadd(n,Q.ri),Q.ri.vsub(a.position,Q.ri),Q.rj.vadd(s,Q.rj),Q.rj.vsub(c.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}h.release(P),P=null;const M=h.get(),L=h.get(),B=h.get(),D=h.get(),z=h.get(),O=f.length;for(let U=0;U!==O&&!v;U++)for(let K=0;K!==O&&!v;K++)if(U%3!==K%3){f[K].cross(f[U],M),M.normalize(),f[U].vadd(f[K],L),B.copy(n),B.vsub(L,B),B.vsub(s,B);const G=B.dot(M);M.scale(G,D);let Q=0;for(;Q===U%3||Q===K%3;)Q++;z.copy(n),z.vsub(D,z),z.vsub(L,z),z.vsub(s,z);const at=Math.abs(G),mt=z.length();if(at<f[Q].length()&&mt<g){if(d)return!0;v=!0;const rt=this.createContactEquation(a,c,t,e,l,u);L.vadd(D,rt.rj),rt.rj.copy(rt.rj),z.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(s,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(g,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(c.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}h.release(M,L,B,D,z)}planeBox(t,e,n,s,r,o,a,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,c,t,e,d)}convexConvex(t,e,n,s,r,o,a,c,l,u,d,h,f){const g=YE;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,h,f)){const v=[],m=ZE;t.clipAgainstHull(n,r,e,s,o,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(d)return!0;const y=this.createContactEquation(a,c,t,e,l,u),x=y.ri,R=y.rj;g.negate(y.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),R.copy(v[_].point),x.vsub(n,x),R.vsub(s,R),x.vadd(n,x),x.vsub(a.position,x),R.vadd(s,R),R.vsub(c.position,R),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,c,l,u,d){const h=this.v3pool;n.vsub(s,DE);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=zE;o.vmult(y,x),s.vadd(x,x);const R=FE;if(x.vsub(n,R),R.lengthSquared()<m*m){if(d)return!0;p=!0;const A=this.createContactEquation(a,c,t,e,l,u);A.ri.copy(R),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(m,A.ri),x.vsub(s,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(s,A.rj),A.rj.vsub(c.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&p===!1;_++){const x=f[_],R=g[_],A=OE;o.vmult(x,A);const C=BE;o.vmult(v[R[0]],C),C.vadd(s,C);const P=kE;A.scale(-m,P),n.vadd(P,P);const E=HE;P.vsub(C,E);const M=E.dot(A),L=VE;if(n.vsub(C,L),M<0&&L.dot(A)>0){const B=[];for(let D=0,z=R.length;D!==z;D++){const O=h.get();o.vmult(v[R[D]],O),s.vadd(O,O),B.push(O)}if(wE(B,A,n)){if(d)return!0;p=!0;const D=this.createContactEquation(a,c,t,e,l,u);A.scale(-m,D.ri),A.negate(D.ni);const z=h.get();A.scale(-M,z);const O=h.get();A.scale(-m,O),n.vsub(s,D.rj),D.rj.vadd(O,D.rj),D.rj.vadd(z,D.rj),D.rj.vadd(s,D.rj),D.rj.vsub(c.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),h.release(z),h.release(O),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let U=0,K=B.length;U!==K;U++)h.release(B[U]);return}else for(let D=0;D!==R.length;D++){const z=h.get(),O=h.get();o.vmult(v[R[(D+1)%R.length]],z),o.vmult(v[R[(D+2)%R.length]],O),s.vadd(z,z),s.vadd(O,O);const U=NE;O.vsub(z,U);const K=UE;U.unit(K);const G=h.get(),Q=h.get();n.vsub(z,Q);const at=Q.dot(K);K.scale(at,G),G.vadd(z,G);const mt=h.get();if(G.vsub(n,mt),at>0&&at*at<U.lengthSquared()&&mt.lengthSquared()<m*m){if(d)return!0;const rt=this.createContactEquation(a,c,t,e,l,u);G.vsub(s,rt.rj),G.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(m,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(c.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let Jt=0,$=B.length;Jt!==$;Jt++)h.release(B[Jt]);h.release(z),h.release(O),h.release(G),h.release(mt),h.release(Q);return}h.release(z),h.release(O),h.release(G),h.release(mt),h.release(Q)}for(let D=0,z=B.length;D!==z;D++)h.release(B[D])}}}planeConvex(t,e,n,s,r,o,a,c,l,u,d){const h=GE,f=WE;f.set(0,0,1),r.vmult(f,f);let g=0;const v=qE;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u),y=XE;f.scale(f.dot(v),y),h.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(f),h.vsub(s,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(s,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,s,r,o,a,c,l,u,d){const h=e.data,f=t.radius,g=e.elementSize,v=ow,m=rw;oe.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(_<0||x<0||p>h.length||y>h[0].length)return;p<0&&(p=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),p>=h.length&&(p=h.length-1),_>=h.length&&(_=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const R=[];e.getRectMinMax(p,y,_,x,R);const A=R[0],C=R[1];if(m.z-f>C||m.z+f<A)return;const P=this.result;for(let E=p;E<_;E++)for(let M=y;M<x;M++){const L=P.length;let B=!1;if(e.getConvexTrianglePillar(E,M,!1),oe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,c,t,e,d)),d&&B||(e.getConvexTrianglePillar(E,M,!0),oe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,c,t,e,d)),d&&B))return!0;if(P.length-L>2)return}}boxHeightfield(t,e,n,s,r,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,s,r,o,a,c,l,u,d){const h=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=iw,m=sw,p=nw;oe.pointToLocalFrame(s,o,n,p);let _=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,R=Math.ceil((p.y+g)/f)+1;if(y<0||R<0||_>h.length||x>h[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),R<0&&(R=0),_>=h.length&&(_=h.length-1),y>=h.length&&(y=h.length-1),R>=h[0].length&&(R=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const A=[];e.getRectMinMax(_,x,y,R,A);const C=A[0],P=A[1];if(!(p.z-g>P||p.z+g<C))for(let E=_;E<y;E++)for(let M=x;M<R;M++){let L=!1;if(e.getConvexTrianglePillar(E,M,!1),oe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,c,null,null,d,m,null)),d&&L||(e.getConvexTrianglePillar(E,M,!0),oe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,c,null,null,d,m,null)),d&&L))return!0}}sphereParticle(t,e,n,s,r,o,a,c,l,u,d){const h=JE;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,c,l,u,d){const h=KE;h.set(0,0,1),a.quaternion.vmult(h,h);const f=$E;if(s.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(c,a,e,t,l,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=jE;h.scale(h.dot(s),m),s.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,c,t,e,d)}convexParticle(t,e,n,s,r,o,a,c,l,u,d){let h=-1;const f=tw,g=ew;let v=null;const m=QE;if(m.copy(s),m.vsub(n,m),r.conjugate(ud),ud.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,_=t.faces.length;p!==_;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];s.vsub(y[0],hd);const R=-x.dot(hd);if(v===null||Math.abs(R)<Math.abs(v)){if(d)return!0;v=R,h=p,f.copy(x)}}if(h!==-1){const p=this.createContactEquation(c,a,e,t,l,u);f.scale(v,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,y=p.rj;_.vadd(s,_),_.vsub(c.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,c,l,u,d){return this.convexHeightfield(e,t,s,n,o,r,c,a,l,u,d)}particleCylinder(t,e,n,s,r,o,a,c,l,u,d){return this.convexParticle(e,t,s,n,o,r,c,a,l,u,d)}sphereTrimesh(t,e,n,s,r,o,a,c,l,u,d){const h=uE,f=hE,g=dE,v=fE,m=pE,p=mE,_=xE,y=lE,x=aE,R=yE;oe.pointToLocalFrame(s,o,n,m);const A=t.radius;_.lowerBound.set(m.x-A,m.y-A,m.z-A),_.upperBound.set(m.x+A,m.y+A,m.z+A),e.getTrianglesInAABB(_,R);const C=cE,P=t.radius*t.radius;for(let D=0;D<R.length;D++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[R[D]*3+z],C),C.vsub(m,x),x.lengthSquared()<=P){if(y.copy(C),oe.pointToWorldFrame(s,o,y,C),C.vsub(n,x),d)return!0;let O=this.createContactEquation(a,c,t,e,l,u);O.ni.copy(x),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.copy(C),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let D=0;D<R.length;D++)for(let z=0;z<3;z++){e.getVertex(e.indices[R[D]*3+z],h),e.getVertex(e.indices[R[D]*3+(z+1)%3],f),f.vsub(h,g),m.vsub(f,p);const O=p.dot(g);m.vsub(h,p);let U=p.dot(g);if(U>0&&O<0&&(m.vsub(h,p),v.copy(g),v.normalize(),U=p.dot(v),v.scale(U,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(d)return!0;const G=this.createContactEquation(a,c,t,e,l,u);p.vsub(m,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),oe.pointToWorldFrame(s,o,p,p),p.vsub(c.position,G.rj),oe.vectorToWorldFrame(o,G.ni,G.ni),oe.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const E=gE,M=vE,L=_E,B=oE;for(let D=0,z=R.length;D!==z;D++){e.getTriangleVertices(R[D],E,M,L),e.getNormal(R[D],B),m.vsub(E,p);let O=p.dot(B);if(B.scale(O,p),m.vsub(p,p),O=p.distanceTo(m),Pe.pointInTriangle(p,E,M,L)&&O<t.radius){if(d)return!0;let U=this.createContactEquation(a,c,t,e,l,u);p.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),oe.pointToWorldFrame(s,o,p,p),p.vsub(c.position,U.rj),oe.vectorToWorldFrame(o,U.ni,U.ni),oe.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,s,r,o,a,c,l,u,d){const h=new S,f=iE;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const v=new S;v.copy(h),oe.pointToWorldFrame(s,o,v,h);const m=sE;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u);_.ni.copy(f);const y=rE;f.scale(m.dot(f),y),h.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Hi=new S,Cs=new S,Ps=new S,QS=new S,tE=new S,eE=new Le,nE=new Le,iE=new S,sE=new S,rE=new S,oE=new S,aE=new S;new S;const cE=new S,lE=new S,uE=new S,hE=new S,dE=new S,fE=new S,pE=new S,mE=new S,gE=new S,vE=new S,_E=new S,xE=new _n,yE=[],ta=new S,ld=new S,ME=new S,SE=new S,EE=new S;function wE(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=ME;i[(r+1)%s].vsub(o,a);const c=SE;a.cross(t,c);const l=EE;e.vsub(o,l);const u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const ea=new S,TE=new S,AE=new S,bE=new S,RE=[new S,new S,new S,new S,new S,new S],CE=new S,PE=new S,LE=new S,IE=new S,DE=new S,NE=new S,UE=new S,FE=new S,zE=new S,OE=new S,BE=new S,kE=new S,HE=new S,VE=new S;new S;new S;const GE=new S,WE=new S,qE=new S,XE=new S,YE=new S,ZE=new S,KE=new S,$E=new S,jE=new S,JE=new S,ud=new Le,QE=new S;new S;const tw=new S,hd=new S,ew=new S,nw=new S,iw=new S,sw=[0],rw=new S,ow=new S;class dd{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let c=0;c<r;c++){let l=!1;const u=n[c];for(;u>s[a];)a++;l=u===s[a],l||fd(t,u)}a=0;for(let c=0;c<o;c++){let l=!1;const u=s[c];for(;u>n[a];)a++;l=n[a]===u,l||fd(e,u)}}}function fd(i,t){i.push((t&4294901760)>>16,t&65535)}const zc=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class aw{constructor(){this.data={keys:[]}}get(t,e){const n=zc(t,e);return this.data[n]}set(t,e,n){const s=zc(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=zc(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class cw extends kf{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new pS,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new XS,this.constraints=[],this.narrowphase=new JS(this),this.collisionMatrix=new Jh,this.collisionMatrixPrevious=new Jh,this.bodyOverlapKeeper=new dd,this.shapeOverlapKeeper=new dd,this.contactmaterials=[],this.contactMaterialTable=new aw,this.defaultMaterial=new lr("default"),this.defaultContactMaterial=new rs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ya?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Pe.ALL,n.from=t,n.to=e,n.callback=s,Oc.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Pe.ANY,n.from=t,n.to=e,n.result=s,Oc.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Pe.CLOSEST,n.from=t,n.to=e,n.result=s,Oc.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ne.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ne.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ne.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=fw,s=pw,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=pt.DYNAMIC;let h=-1/0;const f=this.constraints,g=dw;c.length();const v=c.x,m=c.y,p=c.z;let _=0;for(l&&(h=Ne.now()),_=0;_!==r;_++){const D=o[_];if(D.type===d){const z=D.force,O=D.mass;z.x+=O*v,z.y+=O*m,z.z+=O*p}}for(let D=0,z=this.subsystems.length;D!==z;D++)this.subsystems[D].update();l&&(h=Ne.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),l&&(u.broadphase=Ne.now()-h);let y=f.length;for(_=0;_!==y;_++){const D=f[_];if(!D.collideConnected)for(let z=n.length-1;z>=0;z-=1)(D.bodyA===n[z]&&D.bodyB===s[z]||D.bodyB===n[z]&&D.bodyA===s[z])&&(n.splice(z,1),s.splice(z,1))}this.collisionMatrixTick(),l&&(h=Ne.now());const x=hw,R=e.length;for(_=0;_!==R;_++)x.push(e[_]);e.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,x,this.frictionEquations,g),l&&(u.narrowphase=Ne.now()-h),l&&(h=Ne.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let D=0;D!==C;D++){const z=e[D],O=z.bi,U=z.bj,K=z.si,G=z.sj;let Q;if(O.material&&U.material?Q=this.getContactMaterial(O.material,U.material)||this.defaultContactMaterial:Q=this.defaultContactMaterial,Q.friction,O.material&&U.material&&(O.material.friction>=0&&U.material.friction>=0&&O.material.friction*U.material.friction,O.material.restitution>=0&&U.material.restitution>=0&&(z.restitution=O.material.restitution*U.material.restitution)),a.addEquation(z),O.allowSleep&&O.type===pt.DYNAMIC&&O.sleepState===pt.SLEEPING&&U.sleepState===pt.AWAKE&&U.type!==pt.STATIC){const at=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),mt=U.sleepSpeedLimit**2;at>=mt*2&&(O.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===pt.DYNAMIC&&U.sleepState===pt.SLEEPING&&O.sleepState===pt.AWAKE&&O.type!==pt.STATIC){const at=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),mt=O.sleepSpeedLimit**2;at>=mt*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,U,!0),this.collisionMatrixPrevious.get(O,U)||(Er.body=U,Er.contact=z,O.dispatchEvent(Er),Er.body=O,U.dispatchEvent(Er)),this.bodyOverlapKeeper.set(O.id,U.id),this.shapeOverlapKeeper.set(K.id,G.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Ne.now()-h,h=Ne.now()),_=0;_!==r;_++){const D=o[_];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const D=f[_];D.update();for(let z=0,O=D.equations.length;z!==O;z++){const U=D.equations[z];a.addEquation(U)}}a.solve(t,this),l&&(u.solve=Ne.now()-h),a.removeAllEquations();const P=Math.pow;for(_=0;_!==r;_++){const D=o[_];if(D.type&d){const z=P(1-D.linearDamping,t),O=D.velocity;O.scale(z,O);const U=D.angularVelocity;if(U){const K=P(1-D.angularDamping,t);U.scale(K,U)}}}this.dispatchEvent(uw),l&&(h=Ne.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,M,L);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Ne.now()-h),this.stepnumber+=1,this.dispatchEvent(lw);let B=!0;if(this.allowSleep)for(B=!1,_=0;_!==r;_++){const D=o[_];D.sleepTick(this.time),D.sleepState!==pt.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ni,ii),t){for(let r=0,o=ni.length;r<o;r+=2)wr.bodyA=this.getBodyById(ni[r]),wr.bodyB=this.getBodyById(ni[r+1]),this.dispatchEvent(wr);wr.bodyA=wr.bodyB=null}if(e){for(let r=0,o=ii.length;r<o;r+=2)Tr.bodyA=this.getBodyById(ii[r]),Tr.bodyB=this.getBodyById(ii[r+1]),this.dispatchEvent(Tr);Tr.bodyA=Tr.bodyB=null}ni.length=ii.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(ni,ii),n){for(let r=0,o=ni.length;r<o;r+=2){const a=this.getShapeById(ni[r]),c=this.getShapeById(ni[r+1]);si.shapeA=a,si.shapeB=c,a&&(si.bodyA=a.body),c&&(si.bodyB=c.body),this.dispatchEvent(si)}si.bodyA=si.bodyB=si.shapeA=si.shapeB=null}if(s){for(let r=0,o=ii.length;r<o;r+=2){const a=this.getShapeById(ii[r]),c=this.getShapeById(ii[r+1]);ri.shapeA=a,ri.shapeB=c,a&&(ri.bodyA=a.body),c&&(ri.bodyB=c.body),this.dispatchEvent(ri)}ri.bodyA=ri.bodyB=ri.shapeA=ri.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new _n;const Oc=new Pe,Ne=globalThis.performance||{};if(!Ne.now){let i=Date.now();Ne.timing&&Ne.timing.navigationStart&&(i=Ne.timing.navigationStart),Ne.now=()=>Date.now()-i}new S;const lw={type:"postStep"},uw={type:"preStep"},Er={type:pt.COLLIDE_EVENT_NAME,body:null,contact:null},hw=[],dw=[],fw=[],pw=[],ni=[],ii=[],wr={type:"beginContact",bodyA:null,bodyB:null},Tr={type:"endContact",bodyA:null,bodyB:null},si={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ri={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},gn=document.querySelector("#game-canvas");document.querySelector("#mobile-controls");const Xe=document.querySelector("#mobile-move-zone"),Ti=document.querySelector("#mobile-look-zone"),Kr=document.querySelector("#mobile-use-button"),ou=document.querySelector("#mobile-shield-button"),Ua=document.querySelector("#mobile-fire-button"),mw=document.querySelector("#hp-value"),gw=document.querySelector("#energy-value"),vw=document.querySelector("#ammo-value"),_w=document.querySelector("#cargo-value"),xw=document.querySelector("#threat-value"),yw=document.querySelector("#alarm-value"),pd=document.querySelector("#threat-radar"),Mw=document.querySelector("#threat-radar-arrow"),Sw=document.querySelector("#threat-radar-label"),Ew=document.querySelector("#interaction-prompt"),ww=document.querySelector("#interaction-prompt-title"),Tw=document.querySelector("#interaction-prompt-copy"),Ar=document.querySelector("#objective-label"),br=document.querySelector("#objective-meter-fill"),Rr=document.querySelector("#extract-value"),Aw=document.querySelector("#settings-button"),Fa=document.querySelector("#settings-panel"),bw=document.querySelector("#settings-close-button"),Mi=document.querySelector("#fullscreen-button"),Ma=document.querySelector("#camera-sensitivity-input"),Rw=document.querySelector("#camera-sensitivity-value"),Cw=document.querySelector("#ready-panel"),Pw=document.querySelector("#ready-button"),za=document.querySelector("#restart-button"),au=document.querySelector("#result-panel"),Lw=document.querySelector("#result-kicker"),Iw=document.querySelector("#result-title"),Dw=document.querySelector("#result-copy"),Nw=document.querySelector("#result-restart-button"),Uw=!1,Fw=1,zw=!0,Qi=new rv,qn=new VM({canvas:gn,antialias:zw,preserveDrawingBuffer:!1,powerPreference:"low-power"});qn.shadowMap.enabled=Uw;qn.autoClear=!0;qn.setPixelRatio(Math.min(window.devicePixelRatio,Fw));qn.outputColorSpace=Be;qn.toneMapping=ci;qn.toneMappingExposure=1;const Ot=new dg;Ot.background=new Yt(12180735);Ot.fog=null;qn.setClearColor(Ot.background,1);const Qe=new Sn(52,window.innerWidth/window.innerHeight,.1,320),md=new b,gd=new b,vd=new b,Ow=2,ln=new b(.67,0,-.74).normalize();let $r=Math.atan2(ln.x,ln.z),Is=null;Ot.add(new iv(16777215,1.25));const jt=new cw({gravity:new S(0,0,0)});jt.broadphase=new Us(jt);jt.allowSleep=!0;const Xn=new lr("dry"),Sa=new lr("light-bouncy-rubber"),Kf=new rs(Xn,Xn,{friction:0,restitution:0});jt.addContactMaterial(Kf);jt.addContactMaterial(new rs(Sa,Xn,{friction:.16,restitution:.62}));jt.addContactMaterial(new rs(Sa,Sa,{friction:.08,restitution:.56}));jt.defaultContactMaterial=Kf;const be=new Set,de={movePointerId:null,moveStartX:0,moveStartY:0,moveRight:0,moveForward:0,moveSprint:!1,lookPointerId:null,lookLastX:0},_d=new b(0,0,-1),jr=new b(0,1,0),Ci=144,wn=Ci/2,Vs=14,xd=Ci*5,$f=-.1,Bw=380,Bc=2.4,Ls=1.8,yd=18,Md=1,kw=2,Hw=2.45,Vw=2.05,na=34,Gw=1.4,Sd=-8,Ww=-5.5,Ai=new b(-64,0,56),qw=new b(64,0,-58),Xw=new b(11.2,0,-12.7),jf=[new b(10,0,-22),new b(22,0,-16),new b(30,0,-30),new b(4,0,-36)],Yw=[new b(-42,0,24),new b(44,0,30),new b(-34,0,-44),new b(42,0,-44)],Oa=2.14,Qs=Oa/2,Jf=.08,Ba=4,Zw=[0,1/3,2/3,1],Ed=162,ui=.175,Kw=ui*2,Cr=Kw,$w=.48,jw=-8.4,cu=2,Nr=2,ia=1,wd=.58,ka=.36,Qf=.48,tp=.6,Jr=ka,Ea=Qf,Yn=tp,Qr=ka,wa=Qf,vn=tp,lu=12,Jw=3,Qw=4,ep=Qr,Td=30,Ad=2.2,np=30,ip=15,t1=Math.cos(Dt.degToRad(30)),e1=Math.cos(Dt.degToRad(35)),n1=np,sa=.09,sp=2.4,i1=3.2,rp=4,s1=(sp+rp)/2,op=2.4,r1=3.2,ap=4.4,o1=(op+ap)/2,cp=6,bd=1.2,a1=.35,c1=.8,l1=Math.PI/2.8,Rd=Math.PI*2,Gs=36,u1=1.05,Cd=1,Pd=1,Ha=1.2,da=.4,Ld=.4,h1=Ha,Ws=.8,d1=3.2,f1=1.25,Ta=2.45,Si=.05,Il=.58,p1=50,m1=35,Id=1,lo=30,g1=.105,v1=1.45,_1=Dt.degToRad(1.25),x1=3,y1=.16,M1=1.15,S1=Dt.degToRad(2.4),lp=24,E1=.55,Dd=1.25,w1=52,T1=14,A1=13,b1=2.2,up=9,R1=6,C1=42,P1=18,to=18,ts=58,L1=86,hp=5,I1=4.8,dp=38,D1=72,eo=3.2,N1=1.45,U1=ts-1,F1=10,z1=2,O1=1,B1=.5,k1=1.2,H1=Math.cos(Dt.degToRad(35)),Va=.6,fa=.2,V1=.2,G1=Va,kc=4,Nd=46,W1=1.65,q1=.012,X1=.095,Y1=2.8,Z1=7.2,K1=.44,$1=.3,j1=1.28,J1=.34,Q1=.72,Hc=3.2,fp=.55,tT=.6,Ud=1.15,pp=.45,eT=.6,Fd=.85,uu=Jr,nT=3.2,iT=4,mp=1,sT=1,zd=2,gp=3,Od=uu*2+Si*2+.14,Bd=1.35,Dl=.12,rT=uu+Dl/2+.04,oT=.62,vp=.22,aT=12,kd=58,cT=.9,lT=.0048,uT=.55,hT=.72,dT=2,pe=1e-6,_p=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"]),V={phase:"ready",hp:lu,energy:mp,cargo:0,cargoNeeded:jf.length,extractionProgress:0,shootCooldown:0,fireHeld:!1,weaponAmmo:lo,reloadTimer:0,meleeCooldown:0,alarmLevel:0,alarmHoldTimer:0,alarmPulseTimer:0,reinforcementTimer:eo,lastNoisePosition:Ai.clone(),radioDisabled:!1,ambientRustleTimer:2.5,resultShown:!1,resultDelayTimer:0,settingsOpen:!1},fT=[{id:"ranged-beach-ridge",type:"ranged",x:-46,z:40,patrolRadiusX:8.2,patrolRadiusZ:4,patrolOffset:.2},{id:"ranged-north-patrol",type:"ranged",x:-18,z:34,patrolRadiusX:9,patrolRadiusZ:5.4,patrolOffset:.9},{id:"ranged-radio-tower",type:"ranged",x:16,z:20,patrolRadiusX:4.8,patrolRadiusZ:4.2,patrolOffset:1.6},{id:"ranged-dock-overwatch",type:"ranged",x:52,z:24,patrolRadiusX:5.2,patrolRadiusZ:7,patrolOffset:2.3},{id:"melee-jungle-flanker",type:"melee",x:-30,z:8,patrolRadiusX:7.4,patrolRadiusZ:6,patrolOffset:3},{id:"ranged-west-gate",type:"ranged",x:-8,z:-6,patrolRadiusX:6.8,patrolRadiusZ:5,patrolOffset:3.7},{id:"ranged-camp-north",type:"ranged",x:16,z:-10,patrolRadiusX:5.8,patrolRadiusZ:5.2,patrolOffset:4.4},{id:"ranged-camp-east",type:"ranged",x:34,z:-14,patrolRadiusX:6.8,patrolRadiusZ:4.8,patrolOffset:5.1},{id:"melee-camp-runner",type:"melee",x:10,z:-28,patrolRadiusX:5.4,patrolRadiusZ:6.8,patrolOffset:5.8},{id:"ranged-camp-south",type:"ranged",x:26,z:-34,patrolRadiusX:6.4,patrolRadiusZ:5,patrolOffset:6.5},{id:"ranged-bunker-left",type:"ranged",x:-12,z:-40,patrolRadiusX:5.2,patrolRadiusZ:5.6,patrolOffset:7.2},{id:"melee-bunker-guard",type:"melee",x:2,z:-48,patrolRadiusX:5,patrolRadiusZ:4.8,patrolOffset:7.9},{id:"ranged-south-ridge",type:"ranged",x:42,z:-48,patrolRadiusX:8,patrolRadiusZ:5.6,patrolOffset:8.6},{id:"ranged-extraction-watch",type:"ranged",x:58,z:-54,patrolRadiusX:4.8,patrolRadiusZ:4.6,patrolOffset:9.3},{id:"melee-ravine-hunter",type:"melee",x:-44,z:-22,patrolRadiusX:7.2,patrolRadiusZ:6.4,patrolOffset:10},{id:"ranged-west-ridge",type:"ranged",x:-56,z:-8,patrolRadiusX:6.8,patrolRadiusZ:6,patrolOffset:10.7},{id:"reserve-north-rifle",type:"ranged",reserve:!0,x:-30,z:62,patrolRadiusX:5,patrolRadiusZ:4.2,patrolOffset:11.4},{id:"reserve-east-rifle",type:"ranged",reserve:!0,x:62,z:4,patrolRadiusX:4.8,patrolRadiusZ:5.6,patrolOffset:12.1},{id:"reserve-south-melee",type:"melee",reserve:!0,x:44,z:-62,patrolRadiusX:5.2,patrolRadiusZ:4.8,patrolOffset:12.8},{id:"reserve-west-rifle",type:"ranged",reserve:!0,x:-62,z:-36,patrolRadiusX:4.8,patrolRadiusZ:5,patrolOffset:13.5}],Ga={mouseSensitivity:Number(Ma.value)},tr=[],er=[],nr=[],ir=[],Aa=[],Pi=[],Nl=[],Pr=new ke,Lr=new ke;let Hd=-1/0;const Kn=[],xp=[],hu=[],uo=[],yp=[],Xt={player:3721336,enemy:8275416,enemyGlow:14842111,playerShot:16179854,playerShotGlow:15775821,enemyShot:14842111,enemyShotGlow:8275416,glass:10480383,glassEdge:14154751,crate:10187841,concrete:7830130,teal:4575676},Ul=[null,Vc(1),Vc(2),Vc(3)];let fn=null,Fs=null;function pT(){const i=document.createElement("canvas");i.width=1024,i.height=1024;const t=i.getContext("2d"),e=i.width,n=t.createLinearGradient(0,0,e,e);n.addColorStop(0,"#3aa641"),n.addColorStop(.42,"#32963a"),n.addColorStop(1,"#2d8834"),t.fillStyle=n,t.fillRect(0,0,e,e);for(let o=0;o<92;o+=1){const a=Math.random()*e,c=Math.random()*e,l=34+Math.random()*132,u=18+Math.random()*84;t.fillStyle=Math.random()>.36?`rgba(63, 174, 70, ${.075+Math.random()*.075})`:`rgba(33, 117, 43, ${.065+Math.random()*.07})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let o=0;o<44;o+=1){const a=Math.random()*e,c=Math.random()*e,l=16+Math.random()*82,u=10+Math.random()*46;t.fillStyle=`rgba(93, 119, 57, ${.05+Math.random()*.055})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let o=0;o<16;o+=1){const a=Math.random()*e,c=Math.random()*e,l=28+Math.random()*118,u=14+Math.random()*58;t.fillStyle=`rgba(118, 102, 55, ${.07+Math.random()*.055})`,t.beginPath(),t.ellipse(a,c,l,u,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let o=0;o<420;o+=1){const a=Math.random()*e,c=Math.random()*e,l=18+Math.random()*54,u=-.5+Math.random();t.strokeStyle=Math.random()>.28?`rgba(80, 179, 75, ${.06+Math.random()*.075})`:`rgba(35, 118, 42, ${.055+Math.random()*.065})`,t.lineWidth=2+Math.random()*2.4,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+Math.cos(u)*l*.45,c+Math.sin(u)*l*.45+(Math.random()-.5)*16,a+Math.cos(u)*l,c+Math.sin(u)*l),t.stroke()}for(let o=0;o<620;o+=1){const a=.035+Math.random()*.06;t.fillStyle=Math.random()>.5?`rgba(65, 161, 68, ${a})`:`rgba(24, 93, 31, ${a})`;const c=3+Math.random()*7;t.beginPath(),t.ellipse(Math.random()*e,Math.random()*e,c,c*(.55+Math.random()*.7),Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let o=0;o<130;o+=1){const a=Math.random()*e,c=Math.random()*e,l=26+Math.random()*82;t.strokeStyle=`rgba(172, 161, 86, ${.035+Math.random()*.04})`,t.lineWidth=1+Math.random()*1.8,t.beginPath(),t.moveTo(a,c),t.quadraticCurveTo(a+l*.45,c-13+Math.random()*26,a+l,c-10+Math.random()*20),t.stroke()}const s=t.createRadialGradient(e*.5,e*.5,e*.18,e*.5,e*.5,e*.78);s.addColorStop(0,"rgba(255, 255, 255, 0.035)"),s.addColorStop(.72,"rgba(0, 0, 0, 0)"),s.addColorStop(1,"rgba(0, 0, 0, 0.09)"),t.fillStyle=s,t.fillRect(0,0,e,e);const r=new ao(i);return r.wrapS=Ki,r.wrapT=Ki,r.repeat.set(1,1),r.minFilter=Ei,r.magFilter=Dn,r.generateMipmaps=!0,r.colorSpace=Be,r}function mT(i){const t=i.getAttribute("position"),e=new Float32Array(t.count*2);for(let n=0;n<t.count;n+=1)e[n*2]=(t.getX(n)+wn)/Ci,e[n*2+1]=(t.getY(n)+wn)/Ci;i.setAttribute("uv",new cn(e,2))}function gT(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);e.addColorStop(0,"#78bfff"),e.addColorStop(.48,"#b9ddff"),e.addColorStop(.82,"#eef8ff"),e.addColorStop(1,"#dff3ff"),t.fillStyle=e,t.fillRect(0,0,i.width,i.height);const n=(r,o,a,c)=>{t.save(),t.globalAlpha=c,t.fillStyle="#ffffff",t.shadowColor="rgba(255, 255, 255, 0.32)",t.shadowBlur=18*a,[[0,0,54,17],[36,-9,42,20],[78,-2,50,18],[116,4,36,14],[54,9,72,16]].forEach(([l,u,d,h])=>{t.beginPath(),t.ellipse(r+l*a,o+u*a,d*a,h*a,0,0,Math.PI*2),t.fill()}),t.restore()};[[76,128,.72,.42],[240,92,.52,.36],[392,148,.82,.34],[584,112,.62,.38],[748,156,.86,.35],[910,96,.58,.32],[1e3,174,.66,.28]].forEach(([r,o,a,c])=>n(r,o,a,c));const s=new ao(i);return s.colorSpace=Be,s}function vT(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,i.width,i.height);e.addColorStop(0,"#1e8fc2"),e.addColorStop(.46,"#1f77a7"),e.addColorStop(1,"#145b86"),t.fillStyle=e,t.fillRect(0,0,i.width,i.height);for(let s=0;s<58;s+=1){const r=Math.random()*i.height,o=Math.random()*i.width,a=42+Math.random()*120;t.strokeStyle=`rgba(218, 247, 255, ${.08+Math.random()*.12})`,t.lineWidth=1+Math.random()*1.2,t.beginPath(),t.moveTo(o,r),t.bezierCurveTo(o+a*.28,r-7+Math.random()*14,o+a*.7,r-7+Math.random()*14,o+a,r),t.stroke()}const n=new ao(i);return n.wrapS=Ki,n.wrapT=Ki,n.repeat.set(18,18),n.colorSpace=Be,n}function Vc(i){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),s=256/2,r=i*91.733,o=u=>{const d=Math.sin(r+u*47.123)*43758.5453;return d-Math.floor(d)};n.clearRect(0,0,256,256),n.globalCompositeOperation="source-over";const a=n.createRadialGradient(s,s,2,s,s,256*.5);a.addColorStop(0,`rgba(220, 252, 255, ${.18+i*.05})`),a.addColorStop(.48,"rgba(170, 230, 255, 0.08)"),a.addColorStop(1,"rgba(170, 230, 255, 0)"),n.fillStyle=a,n.fillRect(0,0,256,256),n.lineCap="round",n.lineJoin="round",n.shadowColor="rgba(190, 245, 255, 0.7)",n.shadowBlur=7;const c=4+i*3;for(let u=0;u<c;u+=1){const d=Math.PI*2*u/c+(o(u)-.5)*.7,h=256*(.15+i*.09+o(u+30)*.12),f=(o(u+60)-.5)*.55;n.beginPath(),n.moveTo(s,s);const g=h*(.45+o(u+90)*.18);n.lineTo(s+Math.cos(d+f*.45)*g,s+Math.sin(d+f*.45)*g),n.lineTo(s+Math.cos(d+f)*h,s+Math.sin(d+f)*h),n.strokeStyle="rgba(230, 253, 255, 0.88)",n.lineWidth=Math.max(1.2,3.2-i*.45),n.stroke();const v=i+1;for(let m=0;m<v;m+=1){const p=h*(.26+o(u*13+m)*.42),_=d+(o(u*19+m+7)>.5?1:-1)*(.48+o(u+m+16)*.55),y=h*(.18+o(u*17+m+21)*.22),x=s+Math.cos(d+f*.25)*p,R=s+Math.sin(d+f*.25)*p;n.beginPath(),n.moveTo(x,R),n.lineTo(x+Math.cos(_)*y,R+Math.sin(_)*y),n.strokeStyle="rgba(210, 245, 255, 0.62)",n.lineWidth=1.1,n.stroke()}}n.shadowBlur=0,n.strokeStyle="rgba(80, 170, 190, 0.34)",n.lineWidth=1,n.beginPath(),n.arc(s,s,256*(.045+i*.018),0,Math.PI*2),n.stroke();const l=new ao(e);return l.colorSpace=Be,l}function os({create:i=!0}={}){var e;const t=window.AudioContext||window.webkitAudioContext;return!t||!fn&&!i?null:(fn||(fn=new t),fn.state==="suspended"&&((e=navigator.userActivation)!=null&&e.isActive)&&fn.resume().catch(()=>{}),fn)}function Mp(){(fn==null?void 0:fn.state)==="suspended"&&fn.resume().catch(()=>{})}function du(){var i;return os({create:!!(fn||(i=navigator.userActivation)!=null&&i.isActive)})}function Zt({frequency:i,endFrequency:t=i,type:e="sine",duration:n=.1,volume:s=.08,when:r=0}){const o=du();if(!o)return;const a=o.currentTime+r,c=o.createOscillator(),l=o.createGain();c.type=e,c.frequency.setValueAtTime(i,a),c.frequency.exponentialRampToValueAtTime(Math.max(1,t),a+n),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(s,a+Math.min(.012,n*.25)),l.gain.exponentialRampToValueAtTime(1e-4,a+n),c.connect(l).connect(o.destination),c.start(a),c.stop(a+n+.02)}function Ae({duration:i=.08,volume:t=.08,filterType:e="highpass",frequency:n=900,when:s=0}){const r=du();if(!r)return;const o=r.currentTime+s,a=r.createBuffer(1,Math.floor(r.sampleRate*i),r.sampleRate),c=a.getChannelData(0);for(let h=0;h<c.length;h+=1){const f=h/c.length;c[h]=(Math.random()*2-1)*Math.pow(1-f,1.8)}const l=r.createBufferSource(),u=r.createBiquadFilter(),d=r.createGain();l.buffer=a,u.type=e,u.frequency.setValueAtTime(n,o),d.gain.setValueAtTime(1e-4,o),d.gain.exponentialRampToValueAtTime(t,o+Math.min(.01,i*.25)),d.gain.exponentialRampToValueAtTime(1e-4,o+i),l.connect(u).connect(d).connect(r.destination),l.start(o),l.stop(o+i)}function _T(i,t=3){const e=i.createBuffer(1,Math.floor(i.sampleRate*t),i.sampleRate),n=e.getChannelData(0);let s=0;for(let r=0;r<n.length;r+=1)s=s*.985+(Math.random()*2-1)*.015,n[r]=s+(Math.random()*2-1)*.08;return e}function xT(){const i=du();if(!i||Fs)return;const t=i.createBufferSource();t.buffer=_T(i,4),t.loop=!0;const e=i.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(1180,i.currentTime),e.Q.setValueAtTime(.36,i.currentTime);const n=i.createBiquadFilter();n.type="highpass",n.frequency.setValueAtTime(95,i.currentTime);const s=i.createGain();s.gain.setValueAtTime(1e-4,i.currentTime),t.connect(n).connect(e).connect(s).connect(i.destination),t.start(),Fs={source:t,gain:s,lowpass:e,phase:Math.random()*Math.PI*2}}function yT(i){if(i<=kc)return 1;if(i>=Nd)return 0;const t=(i-kc)/(Nd-kc);return Math.pow(1-Dt.clamp(t,0,1),W1)}function MT(i){if(!i)return 1;const t=Math.hypot(Y.group.position.x-i.x,Y.group.position.z-i.z);return yT(t)}function Sp(i,t){const n=(t?Dt.clamp(i,0,1.35):Dt.clamp(i,.18,1.35))*MT(t);return n<q1?0:n}function ae(i,{intensity:t=1,pitch:e=1,position:n=null}={}){const s=Sp(t,n);s<=0||(i==="player-shot"?(Zt({frequency:540*e,endFrequency:250*e,type:"sawtooth",duration:.12,volume:.075*s}),Ae({duration:.07,volume:.07*s,filterType:"highpass",frequency:1100})):i==="enemy-shot"?(Zt({frequency:780*e,endFrequency:1160*e,type:"square",duration:.095,volume:.055*s}),Ae({duration:.055,volume:.052*s,filterType:"highpass",frequency:1700})):i==="reload"?(Zt({frequency:210*e,endFrequency:160*e,type:"triangle",duration:.08,volume:.042*s}),Ae({duration:.12,volume:.04*s,filterType:"bandpass",frequency:820}),Zt({frequency:150*e,endFrequency:230*e,type:"sine",duration:.1,volume:.035*s,when:.14})):i==="weapon-empty"?Zt({frequency:320*e,endFrequency:220*e,type:"square",duration:.045,volume:.03*s}):i==="alarm"?(Zt({frequency:760*e,endFrequency:760*e,type:"square",duration:.14,volume:.045*s}),Zt({frequency:520*e,endFrequency:520*e,type:"square",duration:.14,volume:.04*s,when:.16}),Ae({duration:.24,volume:.026*s,filterType:"bandpass",frequency:980})):i==="radio-sabotage"?(Zt({frequency:620*e,endFrequency:180*e,type:"sawtooth",duration:.18,volume:.05*s}),Ae({duration:.18,volume:.046*s,filterType:"bandpass",frequency:1400}),Zt({frequency:120*e,endFrequency:72*e,type:"triangle",duration:.16,volume:.035*s,when:.16})):i==="spot"?(Zt({frequency:360*e,endFrequency:620*e,type:"triangle",duration:.11,volume:.05*s}),Zt({frequency:620*e,endFrequency:420*e,type:"sine",duration:.1,volume:.035*s,when:.08})):i==="ball-hit"?(Zt({frequency:250*e,endFrequency:145*e,type:"sine",duration:.08,volume:.055*s}),Ae({duration:.055,volume:.038*s,filterType:"lowpass",frequency:900})):i==="ball-collision"?Zt({frequency:155*e,endFrequency:105*e,type:"triangle",duration:.055,volume:.026*s}):i==="ball-explosion"?(Zt({frequency:96*e,endFrequency:42*e,type:"sawtooth",duration:.18,volume:.095*s}),Zt({frequency:420*e,endFrequency:120*e,type:"triangle",duration:.12,volume:.035*s,when:.02}),Ae({duration:.16,volume:.09*s,filterType:"lowpass",frequency:720})):i==="impact-static"?Ae({duration:.09,volume:.07*s,filterType:"lowpass",frequency:560}):i==="impact-glass"?(Zt({frequency:1420*e,endFrequency:2320*e,type:"sine",duration:.11,volume:.042*s}),Ae({duration:.06,volume:.034*s,filterType:"highpass",frequency:2600})):i==="enemy-damage"?(Zt({frequency:180*e,endFrequency:92*e,type:"triangle",duration:.11,volume:.075*s}),Ae({duration:.045,volume:.04*s,filterType:"lowpass",frequency:700})):i==="player-damage"?(Zt({frequency:130*e,endFrequency:62*e,type:"sawtooth",duration:.16,volume:.09*s}),Ae({duration:.075,volume:.055*s,filterType:"lowpass",frequency:520})):i==="shield-activate"?(Zt({frequency:360*e,endFrequency:820*e,type:"sine",duration:.16,volume:.06*s}),Ae({duration:.08,volume:.028*s,filterType:"bandpass",frequency:1400})):i==="shield-hit"?(Zt({frequency:520*e,endFrequency:240*e,type:"triangle",duration:.1,volume:.06*s}),Ae({duration:.055,volume:.032*s,filterType:"bandpass",frequency:980})):i==="shield-break"?(Zt({frequency:220*e,endFrequency:72*e,type:"sawtooth",duration:.16,volume:.07*s}),Ae({duration:.12,volume:.055*s,filterType:"highpass",frequency:1800})):i==="enemy-death"?(Zt({frequency:120,endFrequency:48,type:"sawtooth",duration:.24,volume:.08*s}),Ae({duration:.14,volume:.065*s,filterType:"lowpass",frequency:430})):i==="melee"?(Zt({frequency:110,endFrequency:70,type:"triangle",duration:.09,volume:.12*s}),Ae({duration:.055,volume:.08*s,filterType:"lowpass",frequency:650})):i==="melee-swing"?(Zt({frequency:185*e,endFrequency:105*e,type:"sine",duration:.12,volume:.07*s}),Ae({duration:.1,volume:.075*s,filterType:"bandpass",frequency:480})):i==="player-footstep"?(Zt({frequency:92*e,endFrequency:58*e,type:"triangle",duration:.055,volume:.032*s}),Ae({duration:.04,volume:.026*s,filterType:"lowpass",frequency:420})):i==="enemy-footstep"?(Zt({frequency:74*e,endFrequency:48*e,type:"triangle",duration:.06,volume:.024*s}),Ae({duration:.045,volume:.02*s,filterType:"lowpass",frequency:360})):i==="ambient-rustle"?(Ae({duration:.32+Math.random()*.28,volume:.095*s,filterType:"bandpass",frequency:980+Math.random()*720}),Zt({frequency:210*e,endFrequency:135*e,type:"sine",duration:.22,volume:.024*s})):i==="loot"?(Zt({frequency:520,endFrequency:860,type:"sine",duration:.13,volume:.07*s}),Zt({frequency:780,endFrequency:1180,type:"sine",duration:.12,volume:.045*s,when:.055})):i==="win"?(Zt({frequency:420,endFrequency:560,duration:.12,volume:.06*s}),Zt({frequency:620,endFrequency:840,duration:.14,volume:.06*s,when:.08}),Zt({frequency:920,endFrequency:1240,duration:.18,volume:.055*s,when:.18})):i==="loss"?(Zt({frequency:260,endFrequency:150,type:"sawtooth",duration:.18,volume:.07*s}),Zt({frequency:150,endFrequency:70,type:"triangle",duration:.22,volume:.055*s,when:.14})):i==="player-death"?(Zt({frequency:220,endFrequency:82,type:"triangle",duration:.55,volume:.09*s}),Zt({frequency:146,endFrequency:64,type:"sine",duration:.7,volume:.055*s,when:.08}),Ae({duration:.22,volume:.035*s,filterType:"lowpass",frequency:360})):i==="ui-start"?Zt({frequency:430,endFrequency:660,duration:.09,volume:.045*s}):i==="ui-pause"?Zt({frequency:330,endFrequency:230,duration:.06,volume:.035*s}):i==="ui-resume"&&Zt({frequency:360,endFrequency:520,duration:.07,volume:.035*s}))}function ST(i=null){var u;const t=os({create:!!((u=navigator.userActivation)!=null&&u.isActive)});if(!t)return;const e=Sp(1,i);if(e<=0)return;const n=t.currentTime,s=.34,r=t.createBuffer(1,Math.floor(t.sampleRate*s),t.sampleRate),o=r.getChannelData(0);for(let d=0;d<o.length;d+=1){const h=d/o.length;o[d]=(Math.random()*2-1)*Math.pow(1-h,2.8)}const a=t.createBufferSource();a.buffer=r;const c=t.createBiquadFilter();c.type="highpass",c.frequency.setValueAtTime(950,n),c.frequency.exponentialRampToValueAtTime(3200,n+s);const l=t.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.34*e,n+.012),l.gain.exponentialRampToValueAtTime(1e-4,n+s),a.connect(c).connect(l).connect(t.destination),a.start(n),a.stop(n+s),[860,1320,2460].forEach((d,h)=>{const f=t.createOscillator(),g=t.createGain();f.type=h===0?"triangle":"sine",f.frequency.setValueAtTime(d,n),f.frequency.exponentialRampToValueAtTime(d*1.55,n+.12),g.gain.setValueAtTime(1e-4,n),g.gain.exponentialRampToValueAtTime(.09*e/(h+1),n+.008),g.gain.exponentialRampToValueAtTime(1e-4,n+.18+h*.04),f.connect(g).connect(t.destination),f.start(n),f.stop(n+.24+h*.04)})}function fu(){V.ambientRustleTimer=Dt.randFloat(Y1,Z1)}function ET(i){if(!fn||!Fs)return;Mp();const t=fn.currentTime,e=V.phase==="running"&&!V.resultShown,n=V.settingsOpen,s=.82+Math.sin(Qi.elapsedTime*.23+Fs.phase)*.24,r=e&&!n?X1*s:.006;Fs.gain.gain.setTargetAtTime(r,t,.55),Fs.lowpass.frequency.setTargetAtTime(950+Math.sin(Qi.elapsedTime*.17)*220,t,1),Te()&&(V.ambientRustleTimer-=i,V.ambientRustleTimer<=0&&(ae("ambient-rustle",{intensity:Dt.randFloat(1.05,1.35),pitch:Dt.randFloat(.86,1.14)}),fu()))}function wT({position:i,size:t,color:e,roughness:n=.78,metalness:s=.02}){const r=new Tn(t.x,t.y,t.z),o=new He({color:e,roughness:n,metalness:s}),a=new Gt(r,o);return a.position.set(i.x,i.y,i.z),a.castShadow=!0,a.receiveShadow=!0,Ot.add(a),a}function TT(i){return typeof i=="string"&&(i.includes("cover")||i.includes("sandbag"))}function Ep({position:i,size:t,kind:e}){if(!TT(e))return;const n=new b(i.x,0,i.z);[new b(t.x/2+.72,0,0),new b(-t.x/2-.72,0,0),new b(0,0,t.z/2+.72),new b(0,0,-t.z/2-.72)].forEach(r=>{const o=n.clone().add(r);es(o.x,o.z,1.2)&&xp.push({position:o,kind:e})})}function AT(i){var e;const t=(e=i==null?void 0:i.shapes)==null?void 0:e[0];return t!=null&&t.halfExtents?new b(t.halfExtents.x,t.halfExtents.y,t.halfExtents.z):null}function bT(i){return new b(i.position.x,i.position.y,i.position.z)}function pu(i){const t=AT(i.body);return t?{type:"box",center:bT(i.body),halfExtents:t}:null}function ho(i){var t,e;return!(i.invisible||(t=i.body.userData)!=null&&t.invisible||((e=i.body.userData)==null?void 0:e.kind)==="perimeter-wall")}function Wa(i,t,e,n=0){const s=pu(e);return s?mm(i,t,s.center,s.halfExtents,n):null}function wp(i,t,e,n=12){i.addShape(new WS(t,t,e,n)),i.addShape(new Ll(t),new S(0,e/2,0)),i.addShape(new Ll(t),new S(0,-e/2,0))}function qe({position:i,size:t,color:e,kind:n="cover",roughness:s=.78,metalness:r=.02}){const o=wT({position:i,size:t,color:e,roughness:s,metalness:r}),a=new pt({mass:0,material:Xn,position:new S(i.x,i.y,i.z),shape:new Ii(new S(t.x/2,t.y/2,t.z/2))});return a.userData={kind:n},jt.addBody(a),Kn.push({mesh:o,body:a}),Ep({position:i,size:t,kind:n}),{mesh:o,body:a}}function RT({x:i,z:t,sx:e=1.6,sy:n=1,sz:s=1.4,color:r=7040351}){const o=new Tn(e,n,s),a=new He({color:r,roughness:.95,metalness:.02}),c=new Gt(o,a);c.position.set(i,n/2,t),c.castShadow=!0,c.receiveShadow=!0,Ot.add(c);const l=new pt({mass:0,material:Xn,position:new S(i,n/2,t),shape:new Ii(new S(e/2,n/2,s/2))});return l.userData={kind:"rock-cover"},jt.addBody(l),Kn.push({mesh:c,body:l}),Ep({position:{x:i,z:t},size:{x:e,z:s},kind:"rock-cover"}),{mesh:c,body:l}}function CT({x:i,z:t,scale:e=1,color:n=2916149}){const s=new Gt(new Jl(.7,0),new rn({color:n}));return s.position.set(i,.32*e,t),s.rotation.set(0,En(i*.31+t*.77)*Math.PI*2,.08),s.scale.set(1.2*e,.56*e,.95*e),s.frustumCulled=!1,Ot.add(s),s}function PT({x:i,z:t,scale:e=1}){qe({position:{x:i,y:.76*e,z:t},size:{x:.24*e,y:1.52*e,z:.24*e},color:7297845,kind:"tree-trunk",roughness:.9});const n=new rn({color:2389295}),s=new Un;s.position.set(i,1.72*e,t);for(let o=0;o<6;o+=1){const a=new Gt(new Tn(.16*e,.05*e,1.42*e),n);a.position.z=.42*e,a.rotation.set(-.34,Math.PI*2*o/6,.16*(o%2?1:-1)),s.add(a)}const r=new Gt(new La(.56*e,.74*e,7),n);return r.position.y=-.06*e,s.add(r),Ot.add(s),s}function LT({x:i,z:t,sx:e=8,sz:n=5,rotation:s=0}){const r=new Gt(new or(1,28),new rn({color:12103015,transparent:!0,opacity:.58,depthWrite:!1}));return r.position.set(i,.011,t),r.rotation.set(-Math.PI/2,0,s),r.scale.set(e,n,1),r.renderOrder=1,Ot.add(r),r}function IT({x:i,z:t,sx:e=8,sz:n=5,height:s=1,color:r=3769400}){const o=new Gt(new ss(1,18,8),new rn({color:r,transparent:!0,opacity:.72}));return o.position.set(i,-s*.42,t),o.scale.set(e,s,n),o.rotation.y=En(i*.13+t*.37)*Math.PI,o.renderOrder=0,Ot.add(o),o}function Ds({x:i,z:t,length:e=5,axis:n="x"}){const s=Math.max(2,Math.round(e/.8)),r=e/s;for(let o=0;o<s;o+=1){const a=-e/2+r*(o+.5);qe({position:{x:n==="x"?i+a:i,y:.25,z:n==="z"?t+a:t},size:{x:n==="x"?r*.92:.72,y:.5,z:n==="z"?r*.92:.72},color:9273432,kind:"sandbag-cover",roughness:.96})}}function DT(i,t){[-.72,.72].forEach(n=>{[-.72,.72].forEach(s=>{qe({position:{x:i+n,y:1.4,z:t+s},size:{x:.18,y:2.8,z:.18},color:6968370,kind:"watchtower-post",roughness:.82})})}),qe({position:{x:i,y:1.64,z:t},size:{x:2.2,y:.2,z:2.2},color:5916717,kind:"watchtower-platform",roughness:.84}),qe({position:{x:i,y:2.35,z:t},size:{x:2.6,y:.16,z:2.6},color:3946539,kind:"watchtower-roof",roughness:.9}),Ds({x:i,z:t-1.18,length:2.4,axis:"x"})}function Vd({x:i,z:t,width:e=4.6,depth:n=3.6}){qe({position:{x:i,y:.12,z:t},size:{x:e,y:.24,z:n},color:7100215,kind:"hut-floor"}),qe({position:{x:i,y:1.35,z:t-n/2},size:{x:e,y:1.9,z:.22},color:7297591,kind:"hut-wall"}),qe({position:{x:i-e/2,y:1.15,z:t},size:{x:.22,y:1.6,z:n},color:7297591,kind:"hut-wall"}),qe({position:{x:i+e/2,y:1.15,z:t},size:{x:.22,y:1.6,z:n},color:7297591,kind:"hut-wall"}),qe({position:{x:i,y:2.08,z:t},size:{x:e+.5,y:.22,z:n+.7},color:3946540,kind:"hut-roof",roughness:.92})}function NT(i,t){qe({position:{x:i,y:2.5,z:t},size:{x:.18,y:5,z:.18},color:3225135,kind:"radio-mast",roughness:.55,metalness:.35}),qe({position:{x:i,y:4.65,z:t},size:{x:1.5,y:.08,z:.08},color:3225135,kind:"radio-mast-crossbar",roughness:.55,metalness:.35})}function UT(i=Xw){const t=qe({position:{x:i.x,y:.42,z:i.z},size:{x:.78,y:.84,z:.5},color:3093807,kind:"radio-terminal",roughness:.56,metalness:.2}),e=new He({color:4575676,emissive:1759429,emissiveIntensity:.9,roughness:.32,metalness:.05}),n=new Gt(new Tn(.48,.28,.035),e);n.position.set(i.x,.64,i.z-.27),n.rotation.x=-.18,n.castShadow=!0,Ot.add(n);const s=new Gt(new is(.018,.018,.72,8),new He({color:3225135,roughness:.5,metalness:.35}));s.position.set(i.x+.27,.98,i.z+.04),s.rotation.z=-.22,s.castShadow=!0,Ot.add(s);const r=new rn({color:16765293,transparent:!0,opacity:.36,side:tn}),o=new Gt(new Ia(.72,.78,48),r);o.rotation.x=-Math.PI/2,o.position.set(i.x,.035,i.z),Ot.add(o),uo.push({type:"radio",id:"radio-link",disabled:!1,base:t.mesh,body:t.body,screen:n,screenMaterial:e,antenna:s,ring:o,ringMaterial:r,position:i.clone()})}function Gd({position:i,size:t,kind:e="perimeter-wall"}){const n=new pt({mass:0,material:Xn,position:new S(i.x,i.y,i.z),shape:new Ii(new S(t.x/2,t.y/2,t.z/2))});return n.collisionFilterGroup=kw,n.userData={kind:e,invisible:!0},jt.addBody(n),Kn.push({body:n,invisible:!0}),n}function FT(){return new Jg({color:Xt.glass,emissive:2854819,emissiveIntensity:.28,transparent:!0,opacity:.34,roughness:.05,metalness:0,transmission:.45,thickness:.08,depthWrite:!1})}function zT(i){const{localId:t,id:e,size:n}=i,s=t??e;return s==="front"?{normal:new b(0,0,1),tangent:new b(1,0,0),bitangent:new b(0,1,0),width:n.x,height:n.y,rotation:new en(0,0,0),halfThickness:n.z/2}:s==="back"?{normal:new b(0,0,-1),tangent:new b(1,0,0),bitangent:new b(0,1,0),width:n.x,height:n.y,rotation:new en(0,Math.PI,0),halfThickness:n.z/2}:s==="left"?{normal:new b(-1,0,0),tangent:new b(0,0,1),bitangent:new b(0,1,0),width:n.z,height:n.y,rotation:new en(0,-Math.PI/2,0),halfThickness:n.x/2}:s==="right"?{normal:new b(1,0,0),tangent:new b(0,0,1),bitangent:new b(0,1,0),width:n.z,height:n.y,rotation:new en(0,Math.PI/2,0),halfThickness:n.x/2}:{normal:new b(0,1,0),tangent:new b(1,0,0),bitangent:new b(0,0,1),width:n.x,height:n.z,rotation:new en(-Math.PI/2,0,0),halfThickness:n.y/2}}function OT(i){const t=zT(i),e=new rn({map:Ul[1],transparent:!0,opacity:0,depthWrite:!1,side:tn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});e.toneMapped=!1;const n=new Gt(new ar(1,1),e);return n.position.copy(i.mesh.position).addScaledVector(t.normal,t.halfThickness+.018),n.rotation.copy(t.rotation),n.visible=!1,n.renderOrder=3,Ot.add(n),{mesh:n,material:e,basis:t,level:0}}function mu(i,t){if(i.crack.level=t,t<=0||!i.alive){i.crack.mesh.visible=!1,i.crack.material.opacity=0;return}const e=Zw[t]??1;i.crack.material.map=Ul[t]??Ul[3],i.crack.material.needsUpdate=!0,i.crack.material.opacity=.42+t*.13,i.crack.mesh.scale.set(i.crack.basis.width*e,i.crack.basis.height*e,1),i.crack.mesh.visible=!0}function BT({id:i,localId:t,cubeIndex:e,cubeOrigin:n=new b,position:s,size:r}){const o=n.clone(),a=new Tn(r.x,r.y,r.z),c=FT(),l=new Gt(a,c);l.position.set(s.x,s.y,s.z),l.castShadow=!1,l.receiveShadow=!0;const u=new $l({color:Xt.glassEdge,transparent:!0,opacity:.72}),d=new wf(new xg(a),u);l.add(d),Ot.add(l);const h=new pt({mass:0,material:Xn,position:new S(s.x,s.y,s.z),shape:new Ii(new S(r.x/2,r.y/2,r.z/2))});h.userData={kind:"glass",id:i,localId:t,cubeIndex:e,cubeOrigin:{x:o.x,y:o.y,z:o.z}},jt.addBody(h);const f={id:i,localId:t,cubeIndex:e,cubeOrigin:o,mesh:l,body:h,material:c,edgeMaterial:u,size:new b(r.x,r.y,r.z),alive:!0,health:Ba};return f.crack=OT(f),hu.push(f),Kn.push({mesh:l,body:h,glassFace:f}),f}function kT(i=new b,t=0){const e=Qs,n=Jf,s=Oa,r=Qs;[{id:"front",position:{x:i.x,y:i.y+e,z:i.z+r},size:{x:s,y:s,z:n}},{id:"back",position:{x:i.x,y:i.y+e,z:i.z-r},size:{x:s,y:s,z:n}},{id:"left",position:{x:i.x-r,y:i.y+e,z:i.z},size:{x:n,y:s,z:s}},{id:"right",position:{x:i.x+r,y:i.y+e,z:i.z},size:{x:n,y:s,z:s}}].forEach(o=>BT({id:`cube-${t+1}-${o.id}`,localId:o.id,cubeIndex:t,cubeOrigin:i,position:o.position,size:o.size}))}function Tp(i){const t=i.health/Ba;i.material.opacity=.14+t*.2,i.material.emissiveIntensity=.12+t*.18,i.edgeMaterial.opacity=.28+t*.44}function HT(i,t,e){i.alive&&(BA(i,t,e),ST(t??i.mesh.position),jT(i.cubeIndex),i.alive=!1,i.health=0,mu(i,0),Ot.remove(i.mesh),jt.bodies.includes(i.body)&&jt.removeBody(i.body))}function Ap(i,t,e){if(!(i!=null&&i.alive))return;i.health=Math.max(0,i.health-1);const n=Ba-i.health;i.health<=0?HT(i,t,e):(mu(i,Math.min(n,3)),Tp(i))}function VT(){hu.forEach(i=>{i.alive=!0,i.health=Ba,mu(i,0),Tp(i),jt.bodies.includes(i.body)||jt.addBody(i.body),i.mesh.parent||Ot.add(i.mesh)})}function GT(i=new b){const t=[],e=Cr*(Math.sqrt(3)/2),n=Cr,s=ui+.015,r=Oa-ui-.015,o=Qs-Jf/2-ui-.015,a=Math.floor(o*2/Cr)+1,c=Math.max(1,a-1),l=Math.floor(o*2/e)+1,u=Math.floor((r-s)/n)+1,d=-((l-1)*e)/2;for(let h=0;h<u&&t.length<Ed;h+=1){const f=[],g=s+h*n;for(let m=0;m<l;m+=1){const p=m%2===0?a:c,_=-((p-1)*Cr)/2,y=d+m*e;for(let x=0;x<p;x+=1)f.push(new b(i.x+_+x*Cr,i.y+g,i.z+y))}const v=Ed-t.length;v>=f.length?t.push(...f):(f.sort((m,p)=>{const _=m.x-i.x,y=m.z-i.z,x=p.x-i.x,R=p.z-i.z,A=_*_+y*y,C=x*x+R*R;return A-C}),t.push(...f.slice(0,v)))}return t}function WT(i,t,e){const n=t.clone();n.y=0,!(n.lengthSq()<pe)&&(n.normalize(),i.body.wakeUp(),i.body.applyImpulse(new S(n.x*Hc,Hc*.18,n.z*Hc),new S(e.x,e.y,e.z)))}function bp(i){if(!(i!=null&&i.mesh)||i.exploded)return;const t=Dt.clamp(i.health/cu,0,1),e=new Yt(i.color).lerp(new Yt(16735581),1-t);i.mesh.setColorAt(i.instanceIndex,e),i.mesh.instanceColor&&(i.mesh.instanceColor.needsUpdate=!0)}function qT(i=new b,t=0){const e=GT(i),n=new ss(ui,12,8),s=new He({color:16777215,emissive:2503220,emissiveIntensity:.16,roughness:.48,metalness:.02,vertexColors:!0}),r=new Sf(n,s,e.length);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!1,Ot.add(r);const o=[15775821,4575676,3721336,14842111,14154751,16773544],a=new Ll(ui),c=[];e.forEach((l,u)=>{const d=Pi.length,h=new pt({mass:$w,material:Sa,linearDamping:.075,angularDamping:.12,position:new S(l.x,l.y,l.z),shape:a});h.allowSleep=!0,h.sleepSpeedLimit=.055,h.sleepTimeLimit=.45,h.collisionFilterGroup=Md,h.collisionFilterMask=Md,h.userData={kind:"glass-ball",index:d,cubeIndex:t,lastCollisionSoundAt:-1/0},h.addEventListener("collide",g=>XT(h,g)),jt.addBody(h);const f={body:h,spawn:l.clone(),color:o[d%o.length],mesh:r,instanceIndex:u,cubeIndex:t,health:cu,sinking:!1,exploded:!1,explosionQueued:!1};Pi.push(f),c.push(f),r.setColorAt(u,new Yt(f.color))}),r.instanceColor&&(r.instanceColor.needsUpdate=!0),Nl.push({mesh:r,balls:c}),gu()}function Rp(i){!i||i.exploded||i.explosionQueued||i.sinking||(i.explosionQueued=!0,i.body.wakeUp(),Aa.push(i))}function Cp(i,t){!i||i.exploded||i.explosionQueued||i.sinking||(i.health=Math.max(0,i.health-t),bp(i),i.health<=0&&Rp(i))}function XT(i,t){var o,a,c;const e=t.body;if(!e)return;const n=(o=e.userData)==null?void 0:o.kind;if(n==="player"||n==="enemy"){Rp(Pi[i.userData.index]);return}const s=Math.abs(((c=(a=t.contact)==null?void 0:a.getImpactVelocityAlongNormal)==null?void 0:c.call(a))??0),r=Qi.elapsedTime;s<.7||r-Hd<.035||r-i.userData.lastCollisionSoundAt<.14||(i.userData.lastCollisionSoundAt=r,Hd=r,ae("ball-collision",{intensity:Dt.clamp(s/4,.18,.85),pitch:.85+i.userData.index%7*.045,position:i.position}))}function Wd(i,t){const e=t.clone().sub(i);return e.y=0,e.lengthSq()<pe&&e.set(1,0,0),e.normalize()}function YT(i){Za(i,C1,P1);const t=Y.group.position.clone(),e=Y.alive&&sn(i,t)<=Nr,n=PA(i,Nr,ia,e);e&&!n&&Lu(ia,Wd(i,t)),Ie.forEach(s=>{if(!s.alive)return;const r=s.group.position.clone();sn(i,r)<=Nr&&Pu(s,ia,Wd(i,r))}),Pi.forEach(s=>{if(s.exploded||s.explosionQueued||s.sinking)return;new b(s.body.position.x,s.body.position.y,s.body.position.z).distanceTo(i)<=Nr&&Cp(s,ia)})}function ZT(i){if(!i||i.exploded)return;const t=new b(i.body.position.x,i.body.position.y,i.body.position.z);i.exploded=!0,i.explosionQueued=!1,i.sinking=!1,i.body.velocity.set(0,0,0),i.body.angularVelocity.set(0,0,0),jt.bodies.includes(i.body)&&jt.removeBody(i.body),zA(t),ae("ball-explosion",{intensity:1.1,pitch:.92+i.body.userData.index%5*.035,position:t}),YT(t)}function KT(){for(;Aa.length>0;)ZT(Aa.shift())}function gu(){Nl.length&&Nl.forEach(({mesh:i,balls:t})=>{t.forEach((e,n)=>{Pr.position.set(e.body.position.x,e.body.position.y,e.body.position.z),Pr.quaternion.set(e.body.quaternion.x,e.body.quaternion.y,e.body.quaternion.z,e.body.quaternion.w),Pr.scale.setScalar(e.exploded?0:1),Pr.updateMatrix(),i.setMatrixAt(n,Pr.matrix)}),i.instanceMatrix.needsUpdate=!0})}function $T(i){Pi.forEach(t=>{if(t.exploded)return;const{body:e}=t;if(!t.sinking&&!es(e.position.x,e.position.z,ui*.3)&&(t.sinking=!0,e.allowSleep=!1,e.collisionResponse=!1,e.wakeUp()),t.sinking){if(e.position.y<=Sd){e.position.y=Sd,e.velocity.set(0,0,0),e.angularVelocity.set(0,0,0),e.sleep();return}e.force.y+=e.mass*Ww,e.velocity.x*=Math.pow(.42,i),e.velocity.z*=Math.pow(.42,i),e.velocity.y=Math.min(e.velocity.y,-1.55);return}e.sleepState!==pt.SLEEPING&&(e.force.y+=e.mass*jw,e.velocity.y=Math.max(-8,e.velocity.y))})}function jT(i=null){Pi.forEach(({body:t,cubeIndex:e,exploded:n})=>{n||(i===null||e===i)&&t.wakeUp()})}function JT(){Aa.length=0,Pi.forEach((i,t)=>{i.exploded=!1,i.explosionQueued=!1,i.sinking=!1,i.health=cu,bp(i),i.body.allowSleep=!0,i.body.collisionResponse=!0,jt.bodies.includes(i.body)||jt.addBody(i.body);const e=t%7*.003;i.body.position.set(i.spawn.x+e,i.spawn.y,i.spawn.z-e),i.body.velocity.set(0,0,0),i.body.angularVelocity.set(0,0,0),i.body.quaternion.set(0,0,0,1),i.body.userData.lastCollisionSoundAt=-1/0,i.body.wakeUp()}),gu()}function QT(i,t,e){const n=i/2,s=t/2,r=Math.min(e,n,s),o=new Pf;return o.moveTo(-n+r,-s),o.lineTo(n-r,-s),o.quadraticCurveTo(n,-s,n,-s+r),o.lineTo(n,s-r),o.quadraticCurveTo(n,s,n-r,s),o.lineTo(-n+r,s),o.quadraticCurveTo(-n,s,-n,s-r),o.lineTo(-n,-s+r),o.quadraticCurveTo(-n,-s,-n+r,-s),o}function no(i){const t=wn-Vs,e=Math.abs(i);if(e<=t)return wn;if(e>=wn)return t;const n=e-t;return t+Math.sqrt(Math.max(0,Vs**2-n**2))}function es(i,t,e=0){return Math.abs(i)<=no(t)-e&&Math.abs(t)<=no(i)-e}function tA(i){const t=new b(i.x,0,i.z);if(t.distanceTo(Ai)>=Td&&es(t.x,t.z,Ad))return t;const e=t.clone().sub(Ai);e.y=0,e.lengthSq()<pe&&e.set(1,0,-.35),e.normalize();const n=[0,-.45,.45,-.9,.9,-1.35,1.35,-Math.PI/2,Math.PI/2,Math.PI];for(const s of n){const r=Math.cos(s),o=Math.sin(s),a=new b(e.x*r-e.z*o,0,e.x*o+e.z*r).normalize(),c=Ai.clone().addScaledVector(a,Td);if(c.y=0,es(c.x,c.z,Ad))return c}return new b(0,0,0)}function qd(i,t=0){let e=!1;for(let n=0;n<2;n+=1){const s=Math.max(0,no(i.position.z)-t);Math.abs(i.position.x)>s&&(i.position.x=Math.sign(i.position.x||1)*s,i.velocity.x=0,e=!0);const r=Math.max(0,no(i.position.x)-t);Math.abs(i.position.z)>r&&(i.position.z=Math.sign(i.position.z||1)*r,i.velocity.z=0,e=!0)}e&&i.wakeUp()}function eA(){qd(Y.body,Jr+.04),Ie.forEach(i=>{i.alive&&qd(i.body,Qr+.04)})}function En(i){const t=Math.sin(i*127.1+311.7)*43758.5453123;return t-Math.floor(t)}function nA(){const i=[],t=Ci/na;for(let r=0;r<na;r+=1)for(let o=0;o<na;o+=1){if((r+o)%2!==0)continue;const a=r*na+o+1,c=(En(a)-.5)*t*.78,l=(En(a+53)-.5)*t*.78,u=-wn+t*(o+.5)+c,d=-wn+t*(r+.5)+l;es(u,d,Gw)&&i.push({x:u,z:d,rotation:En(a+107)*Math.PI*2,scale:.72+En(a+191)*.72})}const e=new La(.24,.22,6,1),n=new rn({color:3515707}),s=new Sf(e,n,i.length);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,i.forEach((r,o)=>{Lr.position.set(r.x,.15,r.z),Lr.rotation.set(0,r.rotation,0),Lr.scale.set(.65*r.scale,.74+r.scale*.36,.65*r.scale),Lr.updateMatrix(),s.setMatrixAt(o,Lr.matrix)}),s.instanceMatrix.needsUpdate=!0,Ot.add(s)}function iA(){[{x:-58,z:56,sx:14,sz:8,rotation:.15},{x:-66,z:28,sx:8,sz:16,rotation:-.08},{x:-22,z:66,sx:18,sz:7,rotation:.03},{x:48,z:60,sx:16,sz:8,rotation:-.22},{x:66,z:14,sx:8,sz:15,rotation:.08},{x:58,z:-58,sx:15,sz:8,rotation:.18},{x:12,z:-66,sx:20,sz:7,rotation:-.04},{x:-56,z:-52,sx:12,sz:9,rotation:.28}].forEach(LT)}function sA(){[[-58,42,1.1],[-52,28,.9],[-44,52,1],[-34,42,.85],[-18,56,1.2],[-4,50,.9],[12,46,.95],[34,52,1.05],[54,38,.9],[60,8,1.15],[50,-8,.8],[52,-36,1],[38,-58,.92],[8,-58,1.12],[-18,-54,.9],[-46,-42,1],[-58,-18,.95],[-52,6,1.08],[-34,-2,.84],[-22,18,.9],[8,18,.75],[38,18,.9],[42,-26,.78],[-8,-28,.86]].forEach(([t,e,n])=>PT({x:t,z:e,scale:n}));for(let t=0;t<96;t+=1){const e=t+31,n=En(e)*Math.PI*2,s=18+En(e+91)*48,r=Math.cos(n)*s+(En(e+7)-.5)*18,o=Math.sin(n)*s+(En(e+13)-.5)*18;es(r,o,4)&&(Math.abs(r-20)<18&&Math.abs(o+22)<18||CT({x:r,z:o,scale:.65+En(e+17)*.9,color:En(e+29)>.45?3116857:2519857}))}}function rA(){[{x:-42,z:26,sx:13,sz:7,height:1.25},{x:-44,z:-12,sx:11,sz:8,height:1.05},{x:-18,z:-42,sx:14,sz:6,height:1.1},{x:40,z:-48,sx:15,sz:7,height:1.2},{x:54,z:-22,sx:9,sz:12,height:1.05},{x:46,z:22,sx:11,sz:10,height:1.15},{x:16,z:28,sx:13,sz:6,height:.95}].forEach(IT),[{x:-50,z:30,sx:3.8,sy:1.45,sz:2.2},{x:-40,z:24,sx:2.6,sy:1.1,sz:3.4},{x:-28,z:30,sx:2.9,sy:1.15,sz:2.4},{x:-48,z:-8,sx:3.4,sy:1.25,sz:2.8},{x:-38,z:-18,sx:2.7,sy:1,sz:3},{x:-22,z:-42,sx:3,sy:1.15,sz:2.6},{x:4,z:-52,sx:3.5,sy:1.25,sz:2.4},{x:42,z:-50,sx:4.2,sy:1.4,sz:2.8},{x:56,z:-28,sx:2.6,sy:1,sz:3.4},{x:54,z:12,sx:3.6,sy:1.35,sz:2.8},{x:42,z:32,sx:2.8,sy:1.1,sz:3.2},{x:18,z:30,sx:2.7,sy:1.05,sz:2.8}].forEach(RT)}function oA(){Vd({x:14,z:-22,width:6,depth:4.2}),Vd({x:29,z:-24,width:5.2,depth:4}),DT(19,-4),NT(9,-12),UT(),Ds({x:4,z:-13,length:7,axis:"x"}),Ds({x:31,z:-10,length:6,axis:"x"}),Ds({x:4,z:-34,length:7.5,axis:"x"}),Ds({x:36,z:-34,length:5.5,axis:"z"}),Ds({x:18,z:-42,length:9,axis:"x"}),[{x:20,z:-16,sx:2.6,sz:1.2,y:.82,c:Xt.crate},{x:27,z:-18,sx:1.2,sz:2.8,y:.92,c:Xt.crate},{x:11,z:-31,sx:3.2,sz:1.2,y:.82,c:Xt.crate},{x:25,z:-36,sx:3,sz:1.2,y:.82,c:Xt.crate},{x:36,z:-23,sx:1.2,sz:3,y:.9,c:Xt.concrete},{x:-2,z:-21,sx:1.2,sz:3.4,y:1,c:Xt.concrete},{x:43,z:-2,sx:4.6,sz:1.1,y:.78,c:Xt.crate},{x:-14,z:-8,sx:4.2,sz:1.1,y:.78,c:Xt.crate},{x:-26,z:-34,sx:1.2,sz:4,y:1,c:Xt.concrete},{x:53,z:-45,sx:4.8,sz:1.1,y:.78,c:Xt.crate}].forEach(i=>{qe({position:{x:i.x,y:i.y/2,z:i.z},size:{x:i.sx,y:i.y,z:i.sz},color:i.c,kind:"outpost-cover"})})}function aA(){const i=new Gt(new ss(Bw,48,24),new rn({map:gT(),side:nn,fog:!1,depthWrite:!1}));Ot.add(i)}function cA(){const i=vT(),t=new He({color:2133956,emissive:407893,emissiveIntensity:.18,map:i,roughness:.34,metalness:.08}),e=new Gt(new ar(xd,xd,1,1),t);e.rotation.x=-Math.PI/2,e.position.y=$f,e.receiveShadow=!1,Ot.add(e),yp.push({texture:i,mesh:e})}function lA(){const i=Bc/2,t=Ci-Vs*2,e=wn+Ls/2;[{x:0,z:-e,sx:t,sz:Ls},{x:0,z:e,sx:t,sz:Ls},{x:-e,z:0,sx:Ls,sz:t},{x:e,z:0,sx:Ls,sz:t}].forEach(r=>{Gd({position:{x:r.x,y:i,z:r.z},size:{x:r.sx,y:Bc,z:r.sz}})});const n=Vs/yd,s=wn-Vs;for(let r=0;r<yd;r+=1){const o=s+(r+.5)*n,a=no(o),c=wn+Ls-a,l=a+c/2;[-1,1].forEach(u=>{[-1,1].forEach(d=>{Gd({position:{x:u*l,y:i,z:d*o},size:{x:c,y:Bc,z:n+.08}})})})}}function uA(i){yp.forEach(({texture:t,mesh:e},n)=>{t.offset.x=(t.offset.x+i*(.006+n*.002))%1,t.offset.y=(t.offset.y+i*.003)%1,e.position.y=$f+Math.sin(Qi.elapsedTime*.5+n)*.012})}function hA(){const i=new eu(QT(Ci,Ci,Vs),18);mT(i);const t=new rn({color:16777215,map:pT()}),e=new Gt(i,t);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,Ot.add(e),iA(),nA();const n=new pt({mass:0,material:Xn,position:new S(0,-.04,0),shape:new Ii(new S(wn,.04,wn))});n.userData={kind:"ball-floor"},jt.addBody(n)}function dA(){aA(),cA(),hA(),lA(),sA(),rA(),oA(),[{x:-54,z:42,sx:4.8,sz:1.2,y:.78,c:Xt.crate},{x:-42,z:34,sx:1.2,sz:4.2,y:1,c:Xt.concrete},{x:-26,z:20,sx:4.4,sz:1.2,y:.8,c:Xt.crate},{x:-12,z:12,sx:1.2,sz:4,y:1,c:Xt.concrete},{x:42,z:14,sx:4.6,sz:1.2,y:.8,c:Xt.crate},{x:52,z:-8,sx:1.2,sz:4.4,y:1,c:Xt.concrete},{x:-50,z:-26,sx:4.8,sz:1.2,y:.78,c:Xt.crate},{x:-32,z:-44,sx:1.2,sz:4,y:1,c:Xt.concrete}].forEach(t=>{qe({position:{x:t.x,y:t.y/2,z:t.z},size:{x:t.sx,y:t.y,z:t.sz},color:t.c,kind:"approach-cover"})}),Yw.forEach((t,e)=>{kT(t,e),qT(t,e)}),kn(-42.4,41.2),kn(-20.2,-20.4),kn(20.4,19.2),kn(-19.6,16.2),kn(17.8,-18.4),kn(41.6,-42.2),kn(-41.8,-8.4),kn(8.2,41.6),kn(40.8,8.6),kn(-8.6,-41.4)}function kn(i,t){const{mesh:e}=qe({position:{x:i,y:.8,z:t},size:{x:.16,y:1.6,z:.16},color:3159086,kind:"lamp-pole",roughness:.55,metalness:.35});e.castShadow=!0;const n=new Gt(new ss(.18,16,12),new He({color:16764795,emissive:16751918,emissiveIntensity:1.6}));n.position.set(i,1.7,t),Ot.add(n)}function Pp(i){return i.state==="patrol"?t1:e1}function fA(i){return Math.acos(Dt.clamp(Pp(i),-1,1))}function Xd(i){return i.type==="melee"?op:sp}function pA(i){return i.type==="melee"?r1:i1}function mA(i){return i.type==="melee"?o1:s1}function gA(i){return i.type==="melee"?ap:rp}function qa(i){return(typeof i=="string"?i:i==null?void 0:i.type)==="melee"?Qw:Jw}function vA(i){return i.state==="patrol"||i.state==="search"?i.health:i.state==="interest"||i.state==="chase"?qa(i)*B1:O1}function _A(){const i=new ze,t=new Float32Array(12);i.setAttribute("position",new cn(t,3));const e=new $l({color:Xt.enemyGlow,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1});e.toneMapped=!1;const n=new wf(i,e);return n.frustumCulled=!1,n.renderOrder=4,Ot.add(n),{lines:n,geometry:i,positions:t,length:n1}}function xA(i){return i.state==="chase"||i.state==="interest"&&i.glassTactic==="break"?{color:16727871,opacity:.95}:i.state==="interest"?{color:16765286,opacity:.88}:i.state==="search"?{color:6543103,opacity:.78}:{color:7977050,opacity:.62}}function yA(i){if(!i.lineOfSight||(i.lineOfSight.lines.visible=i.alive,!i.alive))return;const{positions:t,length:e,lines:n}=i.lineOfSight,s=xA(i);n.material.color.setHex(s.color),n.material.opacity=s.opacity;const r=i.group.position.x,o=i.group.position.z,a=fA(i),c=i.group.rotation.y-a,l=i.group.rotation.y+a,u=r+Math.sin(c)*e,d=o+Math.cos(c)*e,h=r+Math.sin(l)*e,f=o+Math.cos(l)*e;t.set([r,sa,o,u,sa,d,r,sa,o,h,sa,f]),i.lineOfSight.geometry.attributes.position.needsUpdate=!0,i.lineOfSight.geometry.computeBoundingSphere()}function Lp(){Ie.forEach(yA)}function Vn(i,t,e,n={}){const s=new Gt(new Tn(i.x,i.y,i.z),new He({color:e,roughness:n.roughness??.48,metalness:n.metalness??.22,emissive:n.emissive??0,emissiveIntensity:n.emissiveIntensity??0}));return s.position.set(t.x,t.y,t.z),s.castShadow=!0,s}function Yd(i,t,e,n,s={}){const r=new Gt(new is(i,i,t,s.segments??10),new He({color:n,roughness:s.roughness??.44,metalness:s.metalness??.38,emissive:s.emissive??0,emissiveIntensity:s.emissiveIntensity??0}));return r.position.set(e.x,e.y,e.z),r.rotation.x=Math.PI/2,r.castShadow=!0,r}function Ip({advanced:i=!1}={}){const t=new Un,e=new b(i?.24:.18,i?.72:.68,ka+.06),n=i?2504762:3354178,s=i?1449246:2104364,r=i?5822128:11963647;return t.add(Vn({x:i?.18:.16,y:i?.14:.12,z:i?.42:.36},{x:0,y:0,z:.2},n,{metalness:.32})),t.add(Yd(i?.035:.03,i?.48:.38,{x:0,y:.01,z:i?.66:.58},s,{segments:i?12:8,metalness:.48})),t.add(Vn({x:.13,y:i?.22:.18,z:.08},{x:0,y:-.16,z:i?.22:.18},1382681,{metalness:.22})),t.add(Vn({x:.14,y:.09,z:i?.22:.16},{x:0,y:.02,z:-.1},1712160,{metalness:.18})),i?(t.add(Vn({x:.12,y:.045,z:.18},{x:0,y:.105,z:.22},r,{emissive:1796695,emissiveIntensity:.22,metalness:.16})),t.add(Vn({x:.06,y:.07,z:.05},{x:0,y:.13,z:.48},1053973,{metalness:.35})),t.add(Yd(.045,.09,{x:0,y:.01,z:.92},1053973,{segments:12,metalness:.5}))):t.add(Vn({x:.1,y:.035,z:.12},{x:0,y:.09,z:.18},r,{emissive:4334687,emissiveIntensity:.16,metalness:.14})),t.position.copy(e),{kind:"rifle",root:t,restPosition:e,recoil:0,recoilYaw:0,recoilRoll:0}}function MA(){const i=new Un,t=new b(.25,.62,ka+.05);i.add(Vn({x:.08,y:.12,z:.18},{x:0,y:-.03,z:.04},2825752,{roughness:.72,metalness:.04})),i.add(Vn({x:.1,y:.035,z:.08},{x:0,y:.035,z:.15},1774609,{roughness:.65,metalness:.12}));const e=Vn({x:.11,y:.035,z:.58},{x:0,y:.08,z:.45},10989740,{roughness:.22,metalness:.62,emissive:2107430,emissiveIntensity:.08});return e.rotation.y=-.06,i.add(e),i.add(Vn({x:.04,y:.038,z:.22},{x:.038,y:.085,z:.66},14081497,{roughness:.18,metalness:.68})),i.position.copy(t),{kind:"machete",root:i,restPosition:t}}function SA(){const i=new Un,t=new Gt(new Pa(Jr,Ea,6,12),new He({color:Xt.player,roughness:.58}));t.position.y=Yn,t.castShadow=!0,i.add(t);const e=Ip({advanced:!0});i.add(e.root),Ot.add(i);const n=new pt({mass:5,material:Xn,linearDamping:.12,angularDamping:1,position:new S(Ai.x,Yn,Ai.z)});return wp(n,Jr,Ea,12),n.allowSleep=!1,n.fixedRotation=!0,n.updateMassProperties(),n.wakeUp(),n.userData={kind:"player"},jt.addBody(n),{group:i,body:n,spawn:Ai.clone(),alive:!0,deathProgress:1,deathStartY:0,deathTargetY:.08,deathRotationZ:.22,hitSlowTimer:0,hitKnockback:new b,footstepTimer:0,weapon:e,meleeAttackActive:!1,meleeAttackTimer:0,meleeImpactDone:!0,meleeAttackDirection:new b(0,0,1)}}function EA(){const i=new Tn(Od,Bd,Dl),t=new rn({color:Xt.teal,transparent:!0,opacity:.38,depthWrite:!1,side:tn});t.toneMapped=!1;const e=new Gt(i,t);return e.visible=!1,e.frustumCulled=!1,Ot.add(e),{mesh:e,material:t,active:!1,health:0,hitFlash:0,breakTimer:0,center:new b,right:new b(1,0,0),upAxis:new b(0,1,0),forward:new b(0,0,-1),halfExtents:new b(Od/2,Bd/2,Dl/2)}}function fo(){return Et.active&&Et.health>0&&Y.alive}function io(){const i=ln.clone();i.y=0,i.lengthSq()<pe?i.set(0,0,-1):i.normalize();const t=Math.atan2(i.x,i.z);Et.forward.copy(i),Et.right.set(Math.cos(t),0,-Math.sin(t)).normalize(),Et.upAxis.copy(jr),Et.center.copy(Y.group.position).addScaledVector(jr,oT).addScaledVector(i,rT),Et.mesh.position.copy(Et.center),Et.mesh.rotation.set(0,t,0)}function Dp(i=0){if(!fo()){if(Et.breakTimer>0){Et.breakTimer=Math.max(0,Et.breakTimer-i),io(),Et.material.opacity=.26*(Et.breakTimer/vp),Et.material.color.setHex(Xt.glassEdge),Et.mesh.visible=!0;return}Et.mesh.visible=!1;return}Et.hitFlash=Math.max(0,Et.hitFlash-i),io();const t=Dt.clamp(Et.health/gp,0,1);Et.material.opacity=.22+t*.2+(Et.hitFlash>0?.18:0),Et.material.color.setHex(Et.hitFlash>0?Xt.glassEdge:Xt.teal),Et.mesh.visible=!0}function wA(){Et.active=!1,Et.health=0,Et.hitFlash=0,Et.breakTimer=0,Et.mesh.visible=!1}function Np(){return!Te()||fo()||V.energy<zd?!1:(V.energy-=zd,Et.active=!0,Et.health=gp,Et.hitFlash=.16,Et.breakTimer=0,io(),Et.mesh.visible=!0,ae("shield-activate",{intensity:1,position:Y.group.position}),as(),!0)}function TA(){Et.active=!1,Et.health=0,Et.breakTimer=0,Et.mesh.visible=!1}function AA(){Et.active=!1,Et.health=0,Et.breakTimer=vp,Et.mesh.visible=!0}function vu(i,t=null){return fo()?(Et.health=Math.max(0,Et.health-i),Et.hitFlash=.18,ae("shield-hit",{intensity:1,position:t??Et.center}),Et.health<=0&&(ae("shield-break",{intensity:1,position:t??Et.center}),AA()),as(),!0):!1}function Fl(i,t=Et){const e=i.clone().sub(t.center);return new b(e.dot(t.right),e.dot(t.upAxis),e.dot(t.forward))}function bA(i,t=Et){return t.center.clone().addScaledVector(t.right,i.x).addScaledVector(t.upAxis,i.y).addScaledVector(t.forward,i.z)}function Up(i,t,e,n=0){const s=Fl(i,e),r=Fl(t,e),o=r.clone().sub(s),a=[{key:"x",half:e.halfExtents.x+n,vector:e.right},{key:"y",half:e.halfExtents.y+n,vector:e.upAxis},{key:"z",half:e.halfExtents.z+n,vector:e.forward}];let c=0,l=1,u=null,d=1;for(const h of a){const f=s[h.key],g=o[h.key],v=-h.half,m=h.half;if(Math.abs(g)<pe){if(f<v||f>m)return null;continue}let p=(v-f)/g,_=(m-f)/g,y=-1;if(p>_&&([p,_]=[_,p],y=1),p>c&&(c=p,u=h,d=y),l=Math.min(l,_),c>l)return null}if(!u){const h=s.clone().lerp(r,c);u=a.map(f=>({...f,distanceToFace:f.half-Math.abs(h[f.key])})).sort((f,g)=>f.distanceToFace-g.distanceToFace)[0],d=Math.sign(h[u.key])||1}return{t:c,normal:u.vector.clone().multiplyScalar(d).normalize()}}function Fp(i,t,e=0){return fo()?(io(),Up(i,t,Et,e)):null}function RA(i,t){if(!fo())return null;io();const e=Fl(i),n=new b(Dt.clamp(e.x,-Et.halfExtents.x,Et.halfExtents.x),Dt.clamp(e.y,-Et.halfExtents.y,Et.halfExtents.y),Dt.clamp(e.z,-Et.halfExtents.z,Et.halfExtents.z));if(e.clone().sub(n).lengthSq()>t*t)return null;const r=bA(n),o=r.clone().sub(i);return o.lengthSq()<pe?o.copy(Et.forward):o.normalize(),{point:r,normal:o}}function CA(i,t,e){const n=Fp(t,e);if(!n)return!1;const s=t.clone().lerp(e,n.t);return po({point:s,normal:n.normal,type:"playerShield"}),vu(i,s),!0}function PA(i,t,e,n){const s=RA(i,t);if(!s)return!1;const r=new b(Y.body.position.x,Yn,Y.body.position.z),o=i.clone();o.y=r.y;const a=Up(o,r,Et),c=i.clone().sub(Y.group.position);c.y=0;const l=c.lengthSq()>pe?c.normalize().dot(ln)>0:!0;return po({point:s.point,normal:s.normal,type:"playerShield"}),vu(e,s.point),n&&l&&!!a}function LA(i,t){const e=new Un,n=qa(i.type),s=!!i.reserve,r=tA(i),o=new He({color:Xt.enemy,roughness:.62,metalness:.04}),a=new Gt(new Pa(Qr,wa,5,12),o);a.position.y=vn,a.castShadow=!0,e.add(a);const c=i.type==="melee"?MA():Ip({advanced:!1});e.add(c.root),e.visible=!s,Ot.add(e);const l=new pt({mass:3,material:Xn,linearDamping:.18,angularDamping:1,position:new S(r.x,vn,r.z)});return wp(l,Qr,wa,12),l.fixedRotation=!0,l.updateMassProperties(),l.userData={kind:"enemy",id:i.id,type:i.type},s||jt.addBody(l),{id:i.id,type:i.type,index:t,reserve:s,active:!s,group:e,body:l,lineOfSight:_A(),alive:!s,maxHealth:n,health:n,hitFlash:0,hitSlowTimer:0,hitKnockback:new b,weapon:c,attackCooldown:0,meleeAttackActive:!1,meleeAttackTimer:0,meleeImpactDone:!0,meleeAttackTarget:null,state:"patrol",spawn:r.clone(),patrolRadiusX:i.patrolRadiusX,patrolRadiusZ:i.patrolRadiusZ,patrolOffset:i.patrolOffset,lastKnownPlayerPosition:new b(i.x,0,i.z),searchMode:"travel",scanProgress:0,scanStartYaw:0,searchTimer:0,lostSightTimer:0,shootCooldown:0,burstShotsRemaining:0,burstShotTimer:0,coverPosition:null,coverReplanTimer:Dt.randFloat(.15,.65),glassTactic:"none",glassTargetFaceId:null,deathProgress:1,deathStartY:0,deathTargetY:.08,deathRotationZ:0,footstepTimer:Dt.randFloat(.05,.35),patrolPhase:i.patrolOffset}}function IA(i,t){const e=new Un,n=new Gt(new is(.34,.34,.54,10),new He({color:3048310,roughness:.5,metalness:.08,emissive:1194804,emissiveIntensity:.55}));n.position.y=.36,n.castShadow=!0,e.add(n);const s=new Gt(new Da(.35,.025,8,18),new He({color:16765293,roughness:.35,metalness:.2}));s.position.y=.55,s.rotation.x=Math.PI/2,e.add(s),e.position.copy(i),Ot.add(e),uo.push({type:"loot",id:`cargo-${t+1}`,group:e,collected:!1,spawn:i.clone()})}function DA(){const i=new Un,t=new He({color:Xt.teal,emissive:1534045,emissiveIntensity:.8,transparent:!0,opacity:.84,roughness:.44}),e=new Gt(new Da(1.25,.055,8,54),t);e.rotation.x=Math.PI/2,e.position.y=.08,i.add(e);const n=new Gt(new is(1.2,1.2,.045,48),new He({color:2060133,emissive:1195834,emissiveIntensity:.35,transparent:!0,opacity:.42,roughness:.72}));return n.position.y=.025,n.receiveShadow=!0,i.add(n),i.position.copy(qw),Ot.add(i),{group:i,ring:e,pad:n,position:i.position}}function zp(i,t=0){const e=i.clone();if(e.y=0,e.lengthSq()<.001)return e.set(0,0,-1);if(e.normalize(),t<=0)return e;const n=Math.atan2(e.x,e.z),s=(Math.random()*2-1)*t;return new b(Math.sin(n+s),0,Math.cos(n+s)).normalize()}function Op(i,t,e="player"){const n=e==="enemy",s=new Gt(new ss(Si,12,8),new He({color:n?Xt.enemyShot:Xt.playerShot,emissive:n?Xt.enemyShotGlow:Xt.playerShotGlow,emissiveIntensity:1.8}));s.position.copy(i),s.position.y=Il,s.castShadow=!0,Ot.add(s),ae(n?"enemy-shot":"player-shot",{position:s.position}),n||Za(s.position,w1,T1),tr.push({mesh:s,direction:t.clone(),owner:e,speed:n?m1:p1})}function Bp(i,t,e="player",n=0){const s=t.clone().sub(i);if(s.y=0,s.lengthSq()<.001)return!1;s.normalize();const r=zp(s,n);return Op(i.clone().add(r.clone().multiplyScalar(.48)),r,e),!0}function NA(i,t,e="player",n=0){const s=t.clone();if(s.y=0,s.lengthSq()<.001)return!1;s.normalize();const r=zp(s,n);return Op(i.clone().add(r.clone().multiplyScalar(.48)),r,e),!0}function UA(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=128/2,s=e.createRadialGradient(n,n,2,n,n,n);s.addColorStop(0,"rgba(255, 241, 168, 1)"),s.addColorStop(.22,"rgba(240, 184, 77, 0.9)"),s.addColorStop(.46,"rgba(255, 109, 70, 0.45)"),s.addColorStop(1,"rgba(255, 109, 70, 0)"),e.fillStyle=s,e.fillRect(0,0,128,128),e.strokeStyle="rgba(255, 241, 168, 0.9)",e.lineWidth=5;for(let o=0;o<9;o+=1){const a=Math.PI*2*o/9,c=20+Math.random()*8,l=42+Math.random()*16;e.beginPath(),e.moveTo(n+Math.cos(a)*c,n+Math.sin(a)*c),e.lineTo(n+Math.cos(a)*l,n+Math.sin(a)*l),e.stroke()}const r=new ao(t);return r.colorSpace=Be,r}const _u=UA();function po({point:i,normal:t,type:e}){const n=e==="enemy"||e==="player",s=e==="glass",r=e==="glassBall",o=e==="playerShield",a=new Ca({map:_u,color:e==="enemy"?16753757:e==="player"?Xt.enemyShot:o||s?Xt.glassEdge:r?Xt.teal:Xt.playerShotGlow,depthWrite:!1,transparent:!0,opacity:.95}),c=new Kl(a);c.position.copy(i).addScaledVector(t,.08),c.scale.setScalar(n?.82:o?.7:s?.74:r?.52:.66),Ot.add(c);const l={sprite:c,spriteMaterial:a,decal:null,decalMaterial:null,spriteLife:n?.24:.22,maxSpriteLife:n?.24:.22,decalLife:0,maxDecalLife:0};if(e==="static"){const u=new He({color:1380876,roughness:.92,metalness:0,transparent:!0,opacity:.72,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=new Gt(new or(.22,18),u);d.position.copy(i).addScaledVector(t,.012),d.quaternion.setFromUnitVectors(new b(0,0,1),t),d.receiveShadow=!0,Ot.add(d),l.decal=d,l.decalMaterial=u,l.decalLife=2.4,l.maxDecalLife=2.4}er.push(l)}function kp(i){const t=er[i];Ot.remove(t.sprite),t.spriteMaterial.dispose(),t.decal&&(Ot.remove(t.decal),t.decal.geometry.dispose(),t.decalMaterial.dispose()),er.splice(i,1)}function FA(i){for(let t=er.length-1;t>=0;t-=1){const e=er[t];e.spriteLife=Math.max(0,e.spriteLife-i),e.decalLife=Math.max(0,e.decalLife-i);const n=e.maxSpriteLife>0?e.spriteLife/e.maxSpriteLife:0,s=e.maxDecalLife>0?e.decalLife/e.maxDecalLife:0;e.sprite.material.opacity=n,e.sprite.scale.multiplyScalar(1+i*2.2),e.decalMaterial&&(e.decalMaterial.opacity=.72*s),e.spriteLife<=0&&e.decalLife<=0&&kp(t)}}function zA(i){const t=i.clone();t.y=Math.max(.16,t.y);const e=new Ca({map:_u,color:16761677,depthWrite:!1,transparent:!0,opacity:.98,blending:Zi});e.toneMapped=!1;const n=new Kl(e);n.position.copy(t).add(new b(0,.28,0)),n.scale.setScalar(.78),Ot.add(n);const s=new rn({color:16769678,transparent:!0,opacity:.62,depthWrite:!1,side:tn,blending:Zi});s.toneMapped=!1;const r=new Gt(new Ia(.2,.3,48),s);r.rotation.x=-Math.PI/2,r.position.set(t.x,.07,t.z),r.renderOrder=5,Ot.add(r);const o=[];for(let a=0;a<14;a+=1){const c=Math.PI*2*a/14+Math.random()*.28,l=new rn({color:Math.random()>.35?16773544:16742973,transparent:!0,opacity:.92,depthWrite:!1,side:tn,blending:Zi});l.toneMapped=!1;const u=new Gt(new or(.045+Math.random()*.025,7),l);u.position.copy(t).add(new b(0,.2,0)),u.renderOrder=5,Ot.add(u),o.push({mesh:u,material:l,velocity:new b(Math.sin(c)*(1.5+Math.random()*1.9),.55+Math.random()*.75,Math.cos(c)*(1.5+Math.random()*1.9))})}ir.push({flash:n,flashMaterial:e,ring:r,ringMaterial:s,sparks:o,life:wd,maxLife:wd})}function Hp(i){const t=ir[i];Ot.remove(t.flash),t.flashMaterial.dispose(),Ot.remove(t.ring),t.ring.geometry.dispose(),t.ringMaterial.dispose(),t.sparks.forEach(e=>{Ot.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose()}),ir.splice(i,1)}function OA(i){for(let t=ir.length-1;t>=0;t-=1){const e=ir[t];e.life=Math.max(0,e.life-i);const n=e.maxLife>0?e.life/e.maxLife:0,s=1-n;e.flashMaterial.opacity=Math.min(1,n*2.5),e.flash.scale.setScalar(.78+s*2.15),e.ringMaterial.opacity=.62*n,e.ring.scale.setScalar(1+s*(Nr/.3)),e.sparks.forEach(r=>{r.velocity.y-=i*2.6,r.mesh.position.addScaledVector(r.velocity,i),r.mesh.lookAt(Qe.position),r.material.opacity=.92*n}),e.life<=0&&Hp(t)}}function BA(i,t,e){var u,d;const n=i.crack.basis,s=((u=e==null?void 0:e.clone)==null?void 0:u.call(e))??n.normal.clone();s.lengthSq()<pe&&s.copy(n.normal),s.normalize();const r=((d=t==null?void 0:t.clone)==null?void 0:d.call(t))??i.mesh.position.clone().addScaledVector(n.normal,n.halfThickness),o=new Ca({map:_u,color:Xt.glassEdge,transparent:!0,opacity:.9,depthWrite:!1,blending:Zi});o.toneMapped=!1;const a=new Kl(o);a.position.copy(r).addScaledVector(s,.08),a.scale.setScalar(Oa*.72),Ot.add(a);const c=[],l=22;for(let h=0;h<l;h+=1){const f=.045+Math.random()*.075,g=new or(f,3),v=new rn({color:Math.random()>.35?Xt.glassEdge:Xt.glass,transparent:!0,opacity:.72,depthWrite:!1,side:tn,blending:Zi});v.toneMapped=!1;const m=new Gt(g,v);m.position.copy(r).addScaledVector(n.tangent,(Math.random()-.5)*n.width*.78).addScaledVector(n.bitangent,(Math.random()-.5)*n.height*.78).addScaledVector(s,.03+Math.random()*.05),m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.renderOrder=3,Ot.add(m);const p=s.clone().multiplyScalar(.75+Math.random()*1.35);p.addScaledVector(n.tangent,(Math.random()-.5)*1.8),p.addScaledVector(n.bitangent,(Math.random()-.5)*1.45),p.y+=.35+Math.random()*.55,c.push({mesh:m,material:v,velocity:p,spin:new b((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)})}nr.push({flash:a,flashMaterial:o,shards:c,life:.82,maxLife:.82})}function Vp(i){const t=nr[i];Ot.remove(t.flash),t.flashMaterial.dispose(),t.shards.forEach(e=>{Ot.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose()}),nr.splice(i,1)}function kA(i){for(let t=nr.length-1;t>=0;t-=1){const e=nr[t];e.life=Math.max(0,e.life-i);const n=e.maxLife>0?e.life/e.maxLife:0;e.flashMaterial.opacity=.9*Math.min(1,n*2.4),e.flash.scale.multiplyScalar(1+i*1.85),e.shards.forEach(s=>{s.velocity.y-=i*1.9,s.mesh.position.addScaledVector(s.velocity,i),s.mesh.rotation.x+=s.spin.x*i,s.mesh.rotation.y+=s.spin.y*i,s.mesh.rotation.z+=s.spin.z*i,s.material.opacity=.72*n}),e.life<=0&&Vp(t)}}function Gp(){ln.set(Math.sin($r),0,Math.cos($r)).normalize()}function xu(){_d.copy(Y.group.position).addScaledVector(ln,32),_d.y=0}function yu(i){if(!Te()){Is=i.clientX??null;return}let t=i.movementX||0;!t&&Is!==null&&typeof i.clientX=="number"&&(t=i.clientX-Is),Is=typeof i.clientX=="number"?i.clientX:Is,t!==0&&($r-=t*Ga.mouseSensitivity*.003,Gp(),xu())}function Wp(){de.movePointerId=null,de.moveRight=0,de.moveForward=0,de.moveSprint=!1,Xe.style.setProperty("--move-x","0px"),Xe.style.setProperty("--move-y","0px"),Xe.classList.remove("is-active")}function qp(i){const t=i.clientX-de.moveStartX,e=i.clientY-de.moveStartY,n=Math.hypot(t,e);if(n<aT){de.moveRight=0,de.moveForward=0,de.moveSprint=!1,Xe.style.setProperty("--move-x","0px"),Xe.style.setProperty("--move-y","0px");return}const s=Math.min(n,kd),r=t/n,o=e/n;de.moveRight=r,de.moveForward=-o,de.moveSprint=s>=kd*cT,Xe.style.setProperty("--move-x",`${r*s}px`),Xe.style.setProperty("--move-y",`${o*s}px`)}function HA(i){var t;Te()&&(i.preventDefault(),i.stopPropagation(),Ze(!0),de.movePointerId=i.pointerId,de.moveStartX=i.clientX,de.moveStartY=i.clientY,Xe.classList.add("is-active"),(t=Xe.setPointerCapture)==null||t.call(Xe,i.pointerId),qp(i))}function VA(i){i.pointerId===de.movePointerId&&(i.preventDefault(),i.stopPropagation(),qp(i))}function Mu(i){i.pointerId===de.movePointerId&&(i.preventDefault(),i.stopPropagation(),Wp())}function Xp(){de.lookPointerId=null}function GA(i){var t;Te()&&(i.preventDefault(),i.stopPropagation(),Ze(!0),de.lookPointerId=i.pointerId,de.lookLastX=i.clientX,(t=Ti.setPointerCapture)==null||t.call(Ti,i.pointerId))}function WA(i){if(i.pointerId!==de.lookPointerId)return;i.preventDefault(),i.stopPropagation();const t=i.clientX-de.lookLastX;de.lookLastX=i.clientX,t!==0&&($r-=t*Ga.mouseSensitivity*lT,Gp(),xu())}function Su(i){i.pointerId===de.lookPointerId&&(i.preventDefault(),i.stopPropagation(),Xp())}function qA(i){i.preventDefault(),i.stopPropagation(),os(),Ze(!0),Zp()}function XA(i){i.preventDefault(),i.stopPropagation(),os(),Ze(!0),Np()}function YA(i){i.preventDefault(),i.stopPropagation(),os(),Ze(!0),lm()}function Eu(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=720}function mo(){return document.pointerLockElement===gn}function wu(){document.body.classList.toggle("camera-locked",mo())}function Tu(){var i;if(!(Eu()||V.settingsOpen||V.phase!=="running"||mo()))try{const t=(i=gn.requestPointerLock)==null?void 0:i.call(gn);t!=null&&t.catch&&t.catch(()=>{})}catch{wu()}}function Xa(){var i;mo()&&((i=document.exitPointerLock)==null||i.call(document)),document.body.classList.remove("camera-locked")}function ZA(){const i=mo();Is=null,wu(),i||cs(),!i&&!Eu()&&V.phase==="running"&&!V.settingsOpen&&document.hasFocus()&&Ka(!0)}function Te(){return V.phase==="running"&&!V.settingsOpen&&!V.resultShown}function ur(){Cw.hidden=V.phase!=="ready"||V.settingsOpen||V.resultShown}function KA(){V.phase==="ready"&&(cs(),V.phase="running",Mp(),xT(),fu(),ae("ui-start"),ur(),Ze(!0),Tu(),as())}function zl(){return!Te()||V.reloadTimer>0||V.weaponAmmo>=lo?!1:(V.reloadTimer=v1,ae("reload",{intensity:.75,position:Y.group.position}),!0)}function $A(){V.reloadTimer=0,V.weaponAmmo=lo}function Yp(){if(!Te()||V.shootCooldown>0||V.reloadTimer>0||Kp())return!1;if(V.weaponAmmo<=0)return zl(),!1;const i=Y.group.position.clone(),t=new b;return Qe.getWorldDirection(t),t.y=0,t.lengthSq()<.001||!NA(i,t,"player",_1)?!1:(Au(Y.weapon,1),V.weaponAmmo=Math.max(0,V.weaponAmmo-1),V.shootCooldown=g1,V.weaponAmmo<=0&&zl(),!0)}function Zp(){V.fireHeld=!0,Yp()}function di(){V.fireHeld=!1}function jA(i){if(V.reloadTimer>0){V.reloadTimer=Math.max(0,V.reloadTimer-i),V.reloadTimer<=0&&$A();return}V.fireHeld&&Yp()}function JA(){const i=new b;return Qe.getWorldDirection(i),i.y=0,i.lengthSq()<.001&&i.copy(ln),i.normalize()}function QA(i){const t=new b(Y.group.position.x,Yn,Y.group.position.z),e=new b(i.body.position.x,vn,i.body.position.z);return!Kn.some(n=>{const{glassFace:s}=n;return!ho(n)||s&&!s.alive?!1:Wa(t,e,n,.02)})}function tb(i){let t=null,e=Number.POSITIVE_INFINITY;const n=Y.group.position;return Ie.forEach(s=>{if(!s.alive)return;const r=new b(s.body.position.x-n.x,0,s.body.position.z-n.z),o=r.length();o>k1||o<pe||r.clone().normalize().dot(i)<H1||QA(s)&&o<e&&(e=o,t=s)}),t}function eb(){return!Te()||V.meleeCooldown>0||Y.meleeAttackActive?!1:(V.meleeCooldown=G1,Y.meleeAttackActive=!0,Y.meleeAttackTimer=0,Y.meleeImpactDone=!1,Y.meleeAttackDirection.copy(JA()),ae("melee-swing",{intensity:1,pitch:Dt.randFloat(.92,1.08),position:Y.group.position}),Za(Y.group.position,up,R1),!0)}function nb(){const i=Y.meleeAttackDirection.clone().normalize(),t=tb(i);if(!t)return!1;ae("melee",{intensity:1.05,position:Y.group.position});const e=new b(t.body.position.x,vn,t.body.position.z),n=i.clone().multiplyScalar(-1);return po({point:e.clone().addScaledVector(i,-ep*.45),normal:n,type:"enemy"}),Pu(t,vA(t),i),!0}function Br(i){return Dt.smoothstep(Dt.clamp(i,0,1),0,1)}function Kp(){return Y.meleeAttackActive&&Y.meleeAttackTimer<Va}function $p(i){return!!(i!=null&&i.meleeAttackActive)&&i.meleeAttackTimer<Ha}function Au(i,t=1){!i||i.kind!=="rifle"||(i.recoil=Math.min(1.25,i.recoil+t),i.recoilYaw=Dt.randFloatSpread(1),i.recoilRoll=Dt.randFloatSpread(1))}function ib(){if(!Kp())return 0;const i=Y.meleeAttackTimer,t=fa,e=fa+V1;if(i<t)return Br(i/fa)*Math.PI/2;if(i<e)return Math.PI/2;const n=(i-e)/Math.max(.001,Va-e);return(1-Br(n))*Math.PI/2}function Zd(i,t,e=0){if(!i||i.kind!=="rifle")return;i.recoil*=Math.pow(.018,t/.16),i.recoil<.01&&(i.recoil=0);const n=i.recoil*i.recoil;i.root.position.copy(i.restPosition),i.root.position.z-=n*.07,i.root.position.y+=n*.018,i.root.rotation.x=e-n*.12,i.root.rotation.y=i.recoilYaw*n*.04,i.root.rotation.z=i.recoilRoll*n*.035}function sb(i,t,e){if(!i||i.kind!=="machete")return;if(i.root.position.copy(i.restPosition),!e){i.root.rotation.set(0,0,0);return}const n=da,s=da+Ld;let r=0,o=0,a=0;if(t<n){const c=Br(t/da);r=-.22*c,o=-.78*c,a=.58*c}else if(t<s){const c=Br((t-n)/Ld);r=Dt.lerp(-.22,.16,c),o=Dt.lerp(-.78,.72,c),a=Dt.lerp(.58,-.5,c)}else{const c=Br((t-s)/Math.max(.001,Ha-s));r=Dt.lerp(.16,0,c),o=Dt.lerp(.72,0,c),a=Dt.lerp(-.5,0,c)}i.root.rotation.set(r,o,a)}function rb(i){Y.meleeAttackActive&&(Y.meleeAttackTimer+=i,!Y.meleeImpactDone&&Y.meleeAttackTimer>=fa&&(Y.meleeImpactDone=!0,nb()),Y.meleeAttackTimer>=Va&&(Y.meleeAttackActive=!1,Y.meleeAttackTimer=0,Y.meleeImpactDone=!0))}function Kd(i,t){return!(i!=null&&i.alive)||i.type!=="melee"||!Te()||i.attackCooldown>0||i.meleeAttackActive?!1:(i.attackCooldown=h1,i.meleeAttackActive=!0,i.meleeAttackTimer=0,i.meleeImpactDone=!1,i.meleeAttackTarget=t,ae("melee-swing",{intensity:.9,pitch:Dt.randFloat(.82,.94),position:i.group.position}),!0)}function ob(i){var n;const t=i.meleeAttackTarget;if(!i.alive||!t)return!1;const e=i.group.position;if(t.type==="glass")return!((n=t.glassFace)!=null&&n.alive)||sn(e,t.point)>Ws?!1:(po({point:t.point.clone().addScaledVector(t.normal,.04),normal:t.normal,type:"glass"}),ae("melee",{position:i.group.position}),ae("impact-glass",{position:t.point}),Ap(t.glassFace,t.point,t.normal),!0);if(t.type==="player"){if(!Y.alive||i.state!=="chase")return!1;const s=Y.group.position,r=s.clone().sub(e);if(r.y=0,r.length()>Ws||ba(e,s,.08))return!1;const o=r.lengthSq()>pe?r.normalize():new b;ae("melee",{position:i.group.position});const a=new b(e.x,vn,e.z),c=new b(s.x,Yn,s.z);return CA(Pd,a,c)||Lu(Pd,o),!0}return!1}function ab(i,t){i.meleeAttackActive&&(i.meleeAttackTimer+=t,!i.meleeImpactDone&&i.meleeAttackTimer>=da&&(i.meleeImpactDone=!0,ob(i)),i.meleeAttackTimer>=Ha&&(i.meleeAttackActive=!1,i.meleeAttackTimer=0,i.meleeImpactDone=!0,i.meleeAttackTarget=null))}function cb(i){Zd(Y.weapon,i,ib()),Ie.forEach(t=>{var e;((e=t.weapon)==null?void 0:e.kind)==="rifle"?Zd(t.weapon,i):sb(t.weapon,t.meleeAttackTimer,$p(t))})}function lb(i){rb(i),Ie.forEach(t=>ab(t,i))}function jp(i){i&&(i.kind==="rifle"&&(i.recoil=0,i.recoilYaw=0,i.recoilRoll=0),i.root.position.copy(i.restPosition),i.root.rotation.set(0,0,0))}function Jp(){Y.meleeAttackActive=!1,Y.meleeAttackTimer=0,Y.meleeImpactDone=!0,Y.meleeAttackDirection.copy(ln),jp(Y.weapon)}function bu(i){i.meleeAttackActive=!1,i.meleeAttackTimer=0,i.meleeImpactDone=!0,i.meleeAttackTarget=null,jp(i.weapon)}function Qp(){return be.has("KeyW")||be.has("KeyA")||be.has("KeyS")||be.has("KeyD")||be.has("ArrowUp")||be.has("ArrowDown")||be.has("ArrowLeft")||be.has("ArrowRight")||Math.abs(de.moveForward)>0||Math.abs(de.moveRight)>0}function Ru(){return be.has("ShiftLeft")||be.has("ShiftRight")||de.moveSprint}function ub(i){if(!Te()||!Qp()){Y.footstepTimer=0;return}const t=Ru();Y.footstepTimer-=i,!(Y.footstepTimer>0)&&(ae("player-footstep",{intensity:t?1:.72,pitch:t?Dt.randFloat(1.02,1.12):Dt.randFloat(.88,1),position:Y.group.position}),t&&Za(Y.group.position,A1,b1),Y.footstepTimer=t?$1:K1)}function hb(){const i=Te()&&Qp()&&Ru();document.body.classList.toggle("sprinting",i)}function db(i){Y.hitSlowTimer=Math.max(0,Y.hitSlowTimer-i);const t=new b;Qe.getWorldDirection(t),t.y=0,t.lengthSq()<pe?t.copy(ln):t.normalize();const e=new b().crossVectors(t,jr).normalize(),n=new b;(be.has("KeyW")||be.has("ArrowUp"))&&n.add(t),(be.has("KeyS")||be.has("ArrowDown"))&&n.sub(t),(be.has("KeyD")||be.has("ArrowRight"))&&n.add(e),(be.has("KeyA")||be.has("ArrowLeft"))&&n.sub(e),n.addScaledVector(t,de.moveForward),n.addScaledVector(e,de.moveRight),n.lengthSq()>0&&(n.normalize(),Y.body.wakeUp());const r=(Ru()?iT:nT)*(Y.hitSlowTimer>0?eT:1);Y.body.velocity.x=n.x*r+Y.hitKnockback.x,Y.body.velocity.z=n.z*r+Y.hitKnockback.z,Y.body.velocity.y=0,Y.body.position.y=Yn,Y.hitKnockback.multiplyScalar(Math.pow(.04,i/pp))}function fb(i){return new b(Math.sin(i.group.rotation.y),0,Math.cos(i.group.rotation.y)).normalize()}function tm(i){return Math.atan2(i.x,i.z)}function em(i,t){return Math.atan2(Math.sin(t-i),Math.cos(t-i))}function pb(i,t,e,n=0){if(t.lengthSq()<=.001)return;const s=tm(t);if(n<=0){i.group.rotation.y=s;return}const r=em(i.group.rotation.y,s),o=1-Math.pow(.001,e/n);i.group.rotation.y+=r*Dt.clamp(o,0,1)}function nm(i,t){const e=new b(i.x,vn,i.z),n=new b(t.x,Yn,t.z);return!Kn.some(s=>{const{glassFace:r}=s;return r||!ho(s)?!1:Wa(e,n,s,.03)})}function ba(i,t,e=.03){const n=new b(i.x,Il,i.z),s=new b(t.x,Il,t.z);let r=null;return hu.forEach(o=>{if(!o.alive)return;const a=qb(n,s,o.body,e);!a||r&&a.t>=r.t||(r={glassFace:o,t:a.t,normal:a.normal,point:n.clone().lerp(s,a.t)})}),r}function mb(i,t,e=0){return Math.abs(i.x-t.x)<=Qs+e&&Math.abs(i.z-t.z)<=Qs+e}function sn(i,t){return Math.hypot(i.x-t.x,i.z-t.z)}function gb(i,t,e){var r;const n=Qs+f1;return((r=[new b(e.x-n,0,e.z-n),new b(e.x+n,0,e.z-n),new b(e.x-n,0,e.z+n),new b(e.x+n,0,e.z+n)].map(o=>{const a=ba(i,o,.08),c=ba(o,t,.08),l=(a?4:0)+(c?4:0);return{point:o,score:i.distanceTo(o)+o.distanceTo(t)+l}}).sort((o,a)=>o.score-a.score)[0])==null?void 0:r.point)??null}function vb(i,t,e,n){const s=t.point.clone(),r=sn(e,s),o=t.glassFace.cubeOrigin,a=mb(n,o,.05),c=a?null:gb(e,n,o),l=e.distanceTo(n),u=c?e.distanceTo(c)+c.distanceTo(n):Number.POSITIVE_INFINITY,d=l+t.glassFace.health*d1;return{mode:a||i.type==="ranged"||t.glassFace.health<=2||r<=Ws||d<=u?"break":"detour",glassFace:t.glassFace,point:s,normal:t.normal,detourPoint:c}}function _b(i,t,e){const n=Y.group.position,s=i.group.position;if(t>np||!nm(s,n))return!1;if(e.lengthSq()<pe)return!0;const r=Pp(i);return fb(i).dot(e.clone().normalize())>=r}function xb(i,t=.32){return Kn.some(e=>{if(e.glassFace||!ho(e))return!1;const n=pu(e);return n?Math.abs(i.x-n.center.x)<=n.halfExtents.x+t&&Math.abs(i.z-n.center.z)<=n.halfExtents.z+t:!1})}function yb(i,t,e=.18){const n=new b(i.x,vn,i.z),s=new b(t.x,vn,t.z);return!Kn.some(r=>r.glassFace||!ho(r)?!1:Wa(n,s,r,e))}function im(i,t,e){if(!t||!es(t.x,t.z,.9))return!1;const n=sn(t,e);return n>=Ta+1.4&&n<=Gs&&!xb(t,.22)&&nm(t,e)&&yb(i.group.position,t,.08)}function Mb(i,t){const e=i.group.position;let n=null,s=Number.POSITIVE_INFINITY;return xp.forEach(({position:r})=>{const o=sn(e,r);if(o>lp||!im(i,r,t))return;const a=sn(t,r),c=Ie.some(d=>d!==i&&d.alive&&d.type==="ranged"&&sn(d.group.position,r)<1.5)?5:0,l=(Ta+Gs)*.5,u=o*1.15+Math.abs(a-l)*.45+c;u<s&&(s=u,n=r)}),(n==null?void 0:n.clone())??null}function Sb(i,t,e,n,s,r){if(i.type!=="ranged"||!(i.state==="chase"||i.state==="interest")||!n||r||s>Gs+lp){i.coverPosition=null,i.coverReplanTimer=Dd;return}i.coverReplanTimer=Math.max(0,i.coverReplanTimer-t),!(i.coverPosition&&i.coverReplanTimer>0&&im(i,i.coverPosition,e))&&(i.coverReplanTimer>0||(i.coverReplanTimer=Dd,i.coverPosition=Mb(i,e)))}function sm(i){return i<=ip?"chase":"interest"}function qs(i,t){i.state=t,t==="search"&&(i.searchTimer=cp,i.searchMode="travel",i.scanProgress=0,i.scanStartYaw=i.group.rotation.y,i.coverPosition=null,so(i)),t==="interest"&&(i.lostSightTimer=bd,i.searchMode="travel",i.scanProgress=0),t==="chase"&&(i.lostSightTimer=bd,i.searchMode="travel",i.scanProgress=0),t==="patrol"&&(i.searchTimer=0,i.lostSightTimer=0,i.searchMode="travel",i.scanProgress=0,i.coverPosition=null,so(i))}function Eb(i,t=null){i.alive&&(i.lastKnownPlayerPosition.copy(Y.group.position),qs(i,t??sm(sn(i.group.position,Y.group.position))))}function Ya(i){return i.state==="interest"||i.state==="chase"}function wb(){return Ie.filter(i=>i.active)}function rm(){return Ie.filter(i=>i.active&&i.alive)}function om(i,t){const e=V.alarmLevel>=D1;Ie.forEach(n=>{if(!n.active||!n.alive)return;const s=sn(n.group.position,i);!e&&s>t||(n.lastKnownPlayerPosition.copy(i),Ya(n)||qs(n,"search"))})}function am(i,t,e=dp){if(!Te())return;const n=V.alarmLevel,s=V.radioDisabled?U1:100;V.alarmLevel=Dt.clamp(V.alarmLevel+i,0,s),V.alarmHoldTimer=hp,V.alarmPulseTimer=.42,V.lastNoisePosition.copy(t),V.lastNoisePosition.y=0,om(V.lastNoisePosition,e),n<ts&&V.alarmLevel>=ts?(ae("alarm",{intensity:1,position:V.lastNoisePosition}),V.reinforcementTimer=Math.min(V.reinforcementTimer,.45)):n<to&&V.alarmLevel>=to&&ae("spot",{intensity:.78,position:V.lastNoisePosition})}function Za(i,t,e){if(!Te())return;const n=i.clone();n.y=0,am(e,n,t)}function Tb(i,t){const e=t<=ip?26:18;am(e,Y.group.position,dp),ae("spot",{intensity:.82,position:i.group.position})}function Ab(i){return!i.reserve||i.active?!1:(i.active=!0,i.alive=!0,i.group.visible=!0,i.maxHealth=qa(i),i.health=i.maxHealth,i.hitFlash=0,i.hitSlowTimer=0,i.hitKnockback.set(0,0,0),i.attackCooldown=0,bu(i),i.shootCooldown=0,so(i),i.coverPosition=null,i.coverReplanTimer=Dt.randFloat(.15,.65),i.searchMode="travel",i.searchTimer=cp,i.lostSightTimer=0,i.scanProgress=0,i.scanStartYaw=i.group.rotation.y,i.glassTactic="none",i.glassTargetFaceId=null,i.deathProgress=1,i.group.rotation.set(0,0,0),i.group.position.set(i.spawn.x,0,i.spawn.z),i.body.position.set(i.spawn.x,vn,i.spawn.z),i.body.velocity.set(0,0,0),i.body.angularVelocity.set(0,0,0),i.body.wakeUp(),i.lastKnownPlayerPosition.copy(V.lastNoisePosition),jt.bodies.includes(i.body)||jt.addBody(i.body),qs(i,"search"),ae("alarm",{intensity:.72,position:i.group.position}),!0)}function bb(i){if(V.radioDisabled||V.alarmLevel<ts){V.reinforcementTimer=Math.min(V.reinforcementTimer,eo);return}const t=Ie.find(e=>e.reserve&&!e.active);t&&(V.reinforcementTimer=Math.max(0,V.reinforcementTimer-i),!(V.reinforcementTimer>0)&&Ab(t)&&(V.reinforcementTimer=eo))}function Rb(i){Ie.some(e=>e.active&&e.alive&&Ya(e))?V.alarmHoldTimer=hp:V.alarmHoldTimer=Math.max(0,V.alarmHoldTimer-i),V.alarmPulseTimer=Math.max(0,V.alarmPulseTimer-i),V.alarmLevel>0&&V.alarmHoldTimer<=0&&(V.alarmLevel=Math.max(0,V.alarmLevel-I1*i)),bb(i)}function Cb(){return uo.find(i=>i.type==="radio")??null}function cm(){const i=Cb();return!i||i.disabled||V.radioDisabled?null:sn(Y.group.position,i.position)<=N1?i:null}function Cu(i,t){i.ring.rotation.z+=t*(i.disabled?.45:1.8),i.ring.visible=!i.disabled,i.screenMaterial.color.setHex(i.disabled?2502701:4575676),i.screenMaterial.emissive.setHex(i.disabled?397583:1759429),i.screenMaterial.emissiveIntensity=i.disabled?.12:.75+Math.sin(Qi.elapsedTime*4.4)*.22}function Pb(i){return!i||i.disabled?!1:(i.disabled=!0,V.radioDisabled=!0,V.alarmLevel=Math.min(V.alarmLevel,F1),V.alarmHoldTimer=0,V.alarmPulseTimer=.42,V.reinforcementTimer=eo,V.lastNoisePosition.copy(i.position),ae("radio-sabotage",{intensity:1,position:i.position}),om(i.position,up+8),Cu(i,0),as(),!0)}function lm(){return Te()?Pb(cm()):!1}function um(){const i=Te()&&!V.settingsOpen?cm():null;Ew.hidden=!i,ww.textContent=i?"Заглушить связь":"",Tw.textContent=Eu()?"кнопка":"E",Kr.disabled=!i,Kr.classList.toggle("is-available",!!i)}function Lb(i,t=Y.group.position,e=0){if(!i.alive||i.type!=="ranged"||!Te())return!1;const n=new b(i.body.position.x,0,i.body.position.z),s=new b(t.x,0,t.z),r=Bp(n,s,"enemy",e);return r&&Au(i.weapon,.82),r}function Ib(i,t){if(!i.alive||i.type!=="ranged"||!Te())return!1;const e=new b(i.body.position.x,0,i.body.position.z),n=Bp(e,t.point,"enemy");return n&&Au(i.weapon,.82),n}function so(i){i.burstShotsRemaining=0,i.burstShotTimer=0}function Db(i){i.burstShotsRemaining=x1,i.burstShotTimer=0}function Nb(i,t,e,n){if(i.type==="ranged"){if(!n){so(i);return}i.shootCooldown>0||(i.burstShotsRemaining<=0&&Db(i),i.burstShotTimer=Math.max(0,i.burstShotTimer-t),!(i.burstShotTimer>0)&&(Lb(i,e,S1)&&(i.burstShotsRemaining-=1,i.burstShotTimer=y1),i.burstShotsRemaining<=0&&(i.shootCooldown=M1,i.burstShotTimer=0)))}}function hm(i){var e;const t=((e=i==null?void 0:i.clone)==null?void 0:e.call(i))??new b;return t.y=0,t.lengthSq()<pe?null:t.normalize()}function Ub(i,t){const e=hm(t);e&&(i.hitSlowTimer=fp,i.hitKnockback.set(e.x*Ud,0,e.z*Ud))}function Fb(i){const t=hm(i);t&&(Y.hitSlowTimer=pp,Y.hitKnockback.set(t.x*Fd,0,t.z*Fd))}function zb(i,t){const e=Math.hypot(i.body.velocity.x,i.body.velocity.z);if(!i.alive||e<.35){i.footstepTimer=.08;return}if(i.footstepTimer-=t,i.footstepTimer>0)return;const n={patrol:.18,search:.23,interest:.3,chase:.38}[i.state]??.2;ae("enemy-footstep",{intensity:n,pitch:i.type==="melee"?Dt.randFloat(.76,.88):Dt.randFloat(.9,1.02),position:i.group.position}),i.footstepTimer=Dt.clamp(j1/Math.max(e,.1),J1,Q1)}function Ob(i,t){if(!i.alive||!Te()){i.body.velocity.x=0,i.body.velocity.z=0,i.footstepTimer=.08;return}i.patrolPhase+=t,i.shootCooldown=Math.max(0,i.shootCooldown-t),i.attackCooldown=Math.max(0,i.attackCooldown-t),i.hitSlowTimer=Math.max(0,i.hitSlowTimer-t);const e=Y.group.position,n=i.group.position,s=e.clone().sub(n);s.y=0;const r=s.length(),o=s.lengthSq()>pe?s.clone().normalize():new b,a=_b(i,r,s),c=a?ba(n,e,.08):null,l=c?vb(i,c,n,e):null;i.glassTactic=(l==null?void 0:l.mode)??"none",i.glassTargetFaceId=(l==null?void 0:l.glassFace.id)??null,a?(Ya(i)||Tb(i,r),i.lastKnownPlayerPosition.copy(e),qs(i,sm(r))):i.state==="chase"||i.state==="interest"?(i.lostSightTimer-=t,i.lostSightTimer<=0&&qs(i,"search")):i.state==="search"&&i.searchMode==="travel"&&(i.searchTimer=Math.max(0,i.searchTimer-t)),Sb(i,t,e,a,r,l);let u=new b,d=Xd(i),h=null;if(i.state==="chase"||i.state==="interest"){const g=i.state==="chase",v=g?gA(i):mA(i);if((l==null?void 0:l.mode)==="detour"&&l.detourPoint)u=l.detourPoint.clone().sub(n),u.y=0,u.lengthSq()>.01&&u.normalize(),h=u,d=v;else if((l==null?void 0:l.mode)==="break"){const m=l.point.clone().sub(n);m.y=0;const p=m.length();h=p>pe?m.clone().normalize():o,i.type==="ranged"&&p<=Gs||i.type==="melee"&&p<=Ws?(u.set(0,0,0),d=0):(u=h.clone(),d=v)}else i.type==="ranged"&&a&&i.coverPosition?(r<Ta?(u=o.clone().multiplyScalar(-1),d=v):(u=i.coverPosition.clone().sub(n),u.y=0,u.length()>E1?(u.normalize(),d=v):(u.set(0,0,0),d=0)),h=o):g&&i.type==="ranged"&&a?(r<Ta?(u=o.clone().multiplyScalar(-1),d=v):(u=o.clone(),d=v),h=o):(u=(a?e:i.lastKnownPlayerPosition).clone().sub(n),u.y=0,u.lengthSq()>.01&&u.normalize(),h=a?o:u,d=v)}else if(i.state==="search"){const g=i.lastKnownPlayerPosition.clone().sub(n);g.y=0,i.searchMode==="travel"&&i.searchTimer>0&&g.length()>a1?(u=g.normalize(),h=u,d=pA(i)):(i.searchMode!=="scan"&&(i.searchMode="scan",i.scanProgress=0,i.scanStartYaw=i.group.rotation.y),i.scanProgress=Math.min(Rd,i.scanProgress+l1*t),i.group.rotation.y=i.scanStartYaw+i.scanProgress,u.set(0,0,0),d=0,i.scanProgress>=Rd&&qs(i,"patrol"))}else u=new b(i.spawn.x+Math.cos(i.patrolPhase*.55)*i.patrolRadiusX,0,i.spawn.z+Math.sin(i.patrolPhase*.55)*i.patrolRadiusZ).sub(n),u.y=0,u.lengthSq()>.01&&u.normalize(),d=Xd(i);$p(i)&&(u.set(0,0,0),d=0);const f=i.hitSlowTimer>0?tT:1;i.body.velocity.x=u.x*d*f+i.hitKnockback.x,i.body.velocity.z=u.z*d*f+i.hitKnockback.z,i.body.velocity.y=0,i.body.position.y=vn,i.hitKnockback.multiplyScalar(Math.pow(.04,t/fp)),zb(i,t),!h&&u.lengthSq()>.001&&(h=u),(h==null?void 0:h.lengthSq())>.001&&pb(i,h,t,i.state==="chase"||i.state==="interest"?c1:0),Nb(i,t,e,i.type==="ranged"&&(i.state==="chase"||i.state==="interest")&&a&&!l&&r>2.4&&r<=Gs),(l==null?void 0:l.mode)==="break"&&i.type==="ranged"&&i.shootCooldown<=0&&sn(n,l.point)<=Gs&&(Ib(i,l),i.shootCooldown=u1),(l==null?void 0:l.mode)==="break"&&i.type==="melee"&&i.attackCooldown<=0&&sn(n,l.point)<=Ws&&Kd(i,{type:"glass",glassFace:l.glassFace,point:l.point.clone(),normal:l.normal.clone()}),i.type==="melee"&&i.state==="chase"&&!c&&r<=Ws&&i.attackCooldown<=0&&Kd(i,{type:"player"})}function Bb(i){for(let t=tr.length-1;t>=0;t-=1){const e=tr[t],n=e.mesh.position.clone(),s=n.clone().addScaledVector(e.direction,e.speed*i),r=kb(n,s,e);if(r){e.mesh.position.lerpVectors(n,s,r.t),po({point:e.mesh.position.clone(),normal:r.normal,type:r.type}),r.type==="enemy"?Pu(r.enemy,Id,e.direction):r.type==="playerShield"?vu(Cd,e.mesh.position.clone()):r.type==="player"?Lu(Cd,e.direction):r.type==="glass"?(ae("impact-glass",{position:e.mesh.position}),Ap(r.glassFace,e.mesh.position.clone(),r.normal)):r.type==="glassBall"?(WT(r.ball,e.direction,e.mesh.position),Cp(r.ball,Id),ae("ball-hit",{position:e.mesh.position})):r.type==="static"&&ae("impact-static",{position:e.mesh.position}),dm(t);continue}e.mesh.position.copy(s)}}function dm(i){const t=tr[i];Ot.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),tr.splice(i,1)}function kb(i,t,e){let n=null;if(e.owner==="enemy"){const s=Fp(i,t,Si);s&&(n={type:"playerShield",...s});const r=Gb(),o=$d(i,t,r,Si);if(o!==null&&(!n||o<n.t)){const a=i.clone().lerp(t,o),c=jd(a,r,e.direction);n={type:"player",t:o,normal:c}}}else Ie.forEach(s=>{if(!s.alive)return;const r=Wb(s),o=$d(i,t,r,Si);if(o!==null&&(!n||o<n.t)){const a=i.clone().lerp(t,o),c=jd(a,r,e.direction);n={type:"enemy",enemy:s,t:o,normal:c}}});return Pi.forEach(s=>{if(s.exploded)return;const r=new b(s.body.position.x,s.body.position.y,s.body.position.z),o=Hb(i,t,r,ui+Si);if(o!==null&&(!n||o<n.t)){const c=i.clone().lerp(t,o).clone().sub(r);c.lengthSq()<pe&&c.copy(e.direction).multiplyScalar(-1),c.normalize(),n={type:"glassBall",ball:s,t:o,normal:c}}}),Kn.forEach(s=>{const{glassFace:r}=s;if(!ho(s)||r&&!r.alive)return;const o=Wa(i,t,s,Si);o&&(!n||o.t<n.t)&&(n=r?{type:"glass",glassFace:r,...o}:{type:"static",...o})}),n}function Hb(i,t,e,n){const s=t.clone().sub(i),r=s.lengthSq();if(r<pe)return i.distanceToSquared(e)<=n*n?0:null;const o=Dt.clamp(e.clone().sub(i).dot(s)/r,0,1);return i.clone().addScaledVector(s,o).distanceToSquared(e)<=n*n?o:null}function fm(i,t,e){const n=e.clone().sub(t),s=n.lengthSq();if(s<pe)return t.clone();const r=Dt.clamp(i.clone().sub(t).dot(n)/s,0,1);return t.clone().addScaledVector(n,r)}function Vb(i,t,e,n){const s=t.clone().sub(i),r=n.clone().sub(e),o=i.clone().sub(e),a=s.lengthSq(),c=r.lengthSq(),l=r.dot(o);let u=0,d=0;if(a<=pe&&c<=pe||a<=pe)return 0;if(c<=pe)return Dt.clamp(-s.dot(o)/a,0,1);const h=s.dot(o),f=s.dot(r),g=a*c-f*f;return g!==0&&(u=Dt.clamp((f*l-h*c)/g,0,1)),d=(f*u+l)/c,d<0?(d=0,u=Dt.clamp(-h/a,0,1)):d>1&&(d=1,u=Dt.clamp((f-h)/a,0,1)),u}function pm(i,t,e,n){const s=e/2;return{start:new b(i.x,t-s,i.z),end:new b(i.x,t+s,i.z),radius:n}}function Gb(){return pm(Y.body.position,Yn,Ea,uu)}function Wb(i){return pm(i.body.position,vn,wa,ep)}function $d(i,t,e,n=0){const s=e.radius+n,r=Vb(i,t,e.start,e.end),o=i.clone().lerp(t,r),a=fm(o,e.start,e.end);return o.distanceToSquared(a)<=s*s?r:null}function jd(i,t,e){const n=fm(i,t.start,t.end),s=i.clone().sub(n);return s.lengthSq()<pe&&s.copy(e).multiplyScalar(-1),s.normalize()}function mm(i,t,e,n,s=0){const r=t.clone().sub(i);let o=0,a=1,c=new b;for(const l of["x","y","z"]){const u=e[l]-n[l]-s,d=e[l]+n[l]+s,h=i[l],f=r[l];if(Math.abs(f)<pe){if(h<u||h>d)return null;continue}let g=(u-h)/f,v=(d-h)/f,m=-1;if(g>v&&([g,v]=[v,g],m=1),g>o&&(o=g,c=new b,c[l]=m),a=Math.min(a,v),o>a)return null}if(c.lengthSq()<pe){const u=i.clone().lerp(t,o).sub(e),d={x:n.x+s-Math.abs(u.x),y:n.y+s-Math.abs(u.y),z:n.z+s-Math.abs(u.z)},h=Object.entries(d).sort((f,g)=>f[1]-g[1])[0][0];c[h]=Math.sign(u[h])||1}return{t:o,normal:c.normalize()}}function qb(i,t,e,n=0){const s=e.shapes[0].halfExtents,r=e.position;return mm(i,t,new b(r.x,r.y,r.z),new b(s.x,s.y,s.z),n)}function Pu(i,t,e=null){i!=null&&i.alive&&(i.health=Math.max(0,i.health-t),i.hitFlash=.18,Ub(i,e),ae("enemy-damage",{position:i.group.position}),i.health<=0?Yb(i):Eb(i))}function Lu(i,t=null){Te()&&(V.hp=Math.max(0,V.hp-i),Fb(t),ae("player-damage",{position:Y.group.position}),V.hp<=0&&(Xb(),xm(!1)))}function Xb(){Y.alive&&(Y.alive=!1,Y.deathProgress=0,Y.deathStartY=Y.group.position.y,Y.deathRotationZ=Y.group.rotation.y>0?-.22:.22,Y.body.velocity.set(0,0,0),Y.hitKnockback.set(0,0,0),Y.hitSlowTimer=0,Jp(),TA(),cs(),document.body.classList.add("death-vignette"),jt.bodies.includes(Y.body)&&jt.removeBody(Y.body))}function Yb(i){i.alive&&(i.alive=!1,i.health=0,V.energy+=sT,i.deathProgress=0,i.deathStartY=i.group.position.y,i.deathRotationZ=i.group.rotation.y>0?-.28:.28,i.body.velocity.set(0,0,0),bu(i),jt.removeBody(i.body),ae("enemy-death",{position:i.group.position}))}function Zb(i,t){if(i.alive||i.deathProgress>=1)return;i.deathProgress=Math.min(1,i.deathProgress+t/uT);const e=1-Math.pow(1-i.deathProgress,3);i.group.rotation.x=-Math.PI/2*e,i.group.rotation.z=i.deathRotationZ*e,i.group.position.y=Dt.lerp(i.deathStartY,i.deathTargetY,e)}function Kb(i){if(Y.alive||Y.deathProgress>=1)return;Y.deathProgress=Math.min(1,Y.deathProgress+i/hT);const t=1-Math.pow(1-Y.deathProgress,3);Y.group.rotation.x=-Math.PI/2*t,Y.group.rotation.z=Y.deathRotationZ*t,Y.group.position.y=Dt.lerp(Y.deathStartY,Y.deathTargetY,t)}function $b(i){uo.forEach(t=>{if(t.type==="radio"){Cu(t,i);return}t.type!=="loot"||t.collected||(t.group.rotation.y+=i*1.8,t.group.position.y=Math.sin(Qi.elapsedTime*4)*.05,Y.group.position.distanceTo(t.group.position)<.9&&(t.collected=!0,t.group.visible=!1,V.cargo=Math.min(V.cargoNeeded,V.cargo+1),V.hp=Math.min(lu,V.hp+z1),ae("loot",{position:t.group.position})))}),um()}function jb(i){Ol.ring.rotation.z+=i*(V.cargo?1.8:.55);const t=Y.group.position.distanceTo(Ol.position);V.phase==="running"&&(V.cargo>=V.cargoNeeded&&t<1.35?(V.extractionProgress=Math.min(1,V.extractionProgress+i*.85),V.extractionProgress>=1&&xm(!0)):V.extractionProgress=Math.max(0,V.extractionProgress-i*1.4))}function gm(){Y.alive&&Y.group.position.set(Y.body.position.x,0,Y.body.position.z),Ie.forEach(i=>{i.group.position.x=i.body.position.x,i.group.position.z=i.body.position.z,i.alive&&(i.group.position.y=0)}),xu(),Y.alive&&(Y.group.rotation.y=Math.atan2(ln.x,ln.z))}function vm(i){const t=window.innerWidth<640?5.2:6.4,e=(window.innerWidth<640?2.8:3.45)+Ow,n=window.innerWidth<640?Vw:Hw;gd.copy(Y.group.position).addScaledVector(ln,-t).addScaledVector(jr,e),vd.copy(Y.group.position).addScaledVector(jr,n);const s=1-Math.pow(8e-4,i);Qe.position.lerp(gd,s);const r=Qe.position.clone().sub(Y.group.position);r.y=0,r.lengthSq()>pe&&(r.setLength(t),Qe.position.x=Y.group.position.x+r.x,Qe.position.z=Y.group.position.z+r.z),Qe.position.y=Dt.lerp(Qe.position.y,Y.group.position.y+e,s),md.copy(vd),Qe.lookAt(md)}function Jb(){return V.radioDisabled?"глушено":V.alarmLevel>=L1?"бой":V.alarmLevel>=ts?"резерв":V.alarmLevel>=to?"поиск":"тихо"}function Qb(){const i=rm().filter(Ya).map(t=>({position:t.group.position,label:t.state==="chase"?"Атака":"Контакт",distance:sn(Y.group.position,t.group.position)})).sort((t,e)=>t.distance-e.distance)[0];if(i)return i;if(V.alarmLevel>=to){const t=sn(Y.group.position,V.lastNoisePosition);if(t>.75)return{position:V.lastNoisePosition,label:"Шум",distance:t}}return null}function tR(){const i=Qb();if(pd.hidden=!i||V.phase!=="running"||V.settingsOpen,!i)return;const t=i.position.clone().sub(Y.group.position);if(t.y=0,t.lengthSq()<pe){pd.hidden=!0;return}const e=tm(t.normalize()),n=em($r,e);Mw.style.transform=`rotate(${n}rad)`,Sw.textContent=i.label}function eR(){yw.textContent=Jb(),document.body.classList.toggle("alarm-investigate",V.alarmLevel>=to&&V.alarmLevel<ts),document.body.classList.toggle("alarm-combat",V.alarmLevel>=ts),tR()}function as(){mw.textContent=Math.round(V.hp).toString(),gw.textContent=Math.floor(V.energy).toString(),vw.textContent=V.reloadTimer>0?"перез.":`${V.weaponAmmo}/${lo}`,_w.textContent=`${V.cargo}/${V.cargoNeeded}`;const i=wb(),t=rm().length;if(xw.textContent=`${t}/${i.length}`,eR(),um(),V.phase==="won"){Ar.textContent="Эвакуация",br.style.width="100%",Rr.textContent="успех";return}if(V.phase==="lost"){Ar.textContent="Рейд сорван",br.style.width="0%",Rr.textContent="провал";return}V.cargo<V.cargoNeeded?(Ar.textContent="Забрать данные",br.style.width="33%",Rr.textContent="закрыта"):V.extractionProgress>0?(Ar.textContent="Удерживать точку",br.style.width=`${66+V.extractionProgress*34}%`,Rr.textContent=`${Math.round(V.extractionProgress*100)}%`):(Ar.textContent="Уйти к эвакуации",br.style.width="66%",Rr.textContent="открыта")}function _m(i){Lw.textContent=i?"Рейд завершен":"Рейд потерян",Iw.textContent=i?"Эвакуация":"Провал",Dw.textContent=i?"Данные вынесены с аванпоста, маршрут эвакуации открыт.":"Персонаж не пережил контакт с угрозой.",V.resultShown=!0,ur(),za.hidden=!1,au.hidden=!1}function xm(i){if(!(V.resultShown||V.phase==="won"||V.phase==="lost")){if(V.phase=i?"won":"lost",ae(i?"win":"player-death"),Xa(),ur(),!i){V.resultDelayTimer=dT,za.hidden=!0,au.hidden=!0;return}_m(!0)}}function nR(i){V.phase!=="lost"||V.resultShown||(V.resultDelayTimer=Math.max(0,V.resultDelayTimer-i),V.resultDelayTimer<=0&&_m(!1))}function ym(){V.phase="ready",V.hp=lu,V.energy=mp,V.cargo=0,V.extractionProgress=0,V.shootCooldown=0,V.fireHeld=!1,V.weaponAmmo=lo,V.reloadTimer=0,V.meleeCooldown=0,V.alarmLevel=0,V.alarmHoldTimer=0,V.alarmPulseTimer=0,V.reinforcementTimer=eo,V.lastNoisePosition.copy(Ai),V.radioDisabled=!1,V.resultDelayTimer=0,fu(),V.resultShown=!1,V.settingsOpen=!1,Fa.hidden=!0,Xa(),cs(),wA(),document.body.classList.remove("death-vignette"),za.hidden=!0,au.hidden=!0,ur(),jt.bodies.includes(Y.body)||jt.addBody(Y.body),Y.alive=!0,Y.deathProgress=1,Y.deathStartY=0,Y.deathRotationZ=0,Y.body.position.set(Y.spawn.x,Yn,Y.spawn.z),Y.body.velocity.set(0,0,0),Y.body.angularVelocity.set(0,0,0),Y.body.wakeUp(),Y.group.position.set(Y.spawn.x,0,Y.spawn.z),Y.group.rotation.set(0,Math.atan2(ln.x,ln.z),0),Y.hitSlowTimer=0,Y.hitKnockback.set(0,0,0),Y.footstepTimer=0,Jp(),Ie.forEach(i=>{const t=!i.reserve;i.active=t,i.alive=t,i.group.visible=t,t&&!jt.bodies.includes(i.body)&&jt.addBody(i.body),!t&&jt.bodies.includes(i.body)&&jt.removeBody(i.body),i.maxHealth=qa(i),i.health=i.maxHealth,i.hitFlash=0,i.hitSlowTimer=0,i.hitKnockback.set(0,0,0),i.attackCooldown=0,bu(i),i.footstepTimer=Dt.randFloat(.05,.35),i.state="patrol",i.searchTimer=0,i.lostSightTimer=0,i.shootCooldown=0,so(i),i.coverPosition=null,i.coverReplanTimer=Dt.randFloat(.15,.65),i.searchMode="travel",i.glassTactic="none",i.glassTargetFaceId=null,i.scanProgress=0,i.scanStartYaw=0,i.lastKnownPlayerPosition.copy(i.spawn),i.deathProgress=1,i.deathStartY=0,i.deathRotationZ=0,i.group.rotation.set(0,0,0),i.group.position.set(i.spawn.x,0,i.spawn.z),i.body.position.set(i.spawn.x,vn,i.spawn.z),i.body.velocity.set(0,0,0),i.body.angularVelocity.set(0,0,0)}),VT(),JT(),uo.forEach(i=>{if(i.type==="radio"){i.disabled=!1,Cu(i,0);return}i.collected=!1,i.group.visible=!0,i.group.position.copy(i.spawn)});for(let i=tr.length-1;i>=0;i-=1)dm(i);for(let i=er.length-1;i>=0;i-=1)kp(i);for(let i=nr.length-1;i>=0;i-=1)Vp(i);for(let i=ir.length-1;i>=0;i-=1)Hp(i);as()}function Mm(){const i=window.innerWidth,t=window.innerHeight;qn.setSize(i,t,!1),Qe.aspect=i/t,Qe.fov=i<640||t<520?58:52,Qe.updateProjectionMatrix()}function iR(){Ot.traverse(i=>{i.castShadow=!1,i.receiveShadow=!1})}function Sm(){return document.fullscreenElement||document.webkitFullscreenElement||null}function Em(){return document.querySelector("#app")||document.documentElement}function wm(i=Em()){return i.requestFullscreen||i.webkitRequestFullscreen||i.msRequestFullscreen||null}function Tm(){return document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen||null}function sR(){return window.matchMedia("(display-mode: fullscreen)").matches||window.matchMedia("(display-mode: standalone)").matches||!!window.navigator.standalone}function rR(){return!!(wm()||Tm())}function Xs(){if(sR()){Mi.textContent="Уже во весь экран";return}if(!rR()){Mi.textContent="Fullscreen недоступен",Mi.title="На iPhone Safari полноэкранный режим для обычной страницы недоступен. Добавь страницу на экран Домой и запускай оттуда.";return}Mi.title="",Mi.textContent=Sm()?"Выйти из полного экрана":"Во весь экран"}async function oR(){const i=Sm();try{if(i){const t=Tm();await(t==null?void 0:t.call(document))}else{const t=Em(),e=wm(t);if(!e){Mi.textContent="Добавь на экран Домой",setTimeout(Xs,1800);return}await e.call(t)}}catch{Mi.textContent="Браузер запретил",setTimeout(Xs,1800);return}Xs()}function aR(i){var t;return!!((t=i==null?void 0:i.closest)!=null&&t.call(i,"button, input, label, .settings-panel"))}function Ze(i=!1){!document.hidden&&Te()&&(i||!aR(document.activeElement))&&document.activeElement!==gn&&gn.focus({preventScroll:!0})}function Am(){Rw.textContent=`${Math.round(Ga.mouseSensitivity*100)}%`}function Ka(i){V.settingsOpen!==i&&ae(i?"ui-pause":"ui-resume"),V.settingsOpen=i,Fa.hidden=!i,ur(),i?(Xa(),cs(),Ma.focus({preventScroll:!0})):(Ze(!0),V.phase==="running"&&Tu())}function cR(i){if(i.code==="Escape"){i.preventDefault(),Ka(!V.settingsOpen);return}if(Te()){if(i.code==="KeyQ"){i.preventDefault(),i.repeat||Np();return}if(i.code==="KeyE"){i.preventDefault(),i.repeat||lm();return}if(i.code==="KeyR"){i.preventDefault(),i.repeat||zl();return}if(i.code==="KeyF"){i.preventDefault(),i.repeat||eb();return}_p.has(i.code)&&(i.preventDefault(),be.add(i.code))}}function lR(i){_p.has(i.code)&&(i.preventDefault(),be.delete(i.code))}function cs(){be.clear(),di(),Wp(),Xp(),document.body.classList.remove("sprinting")}window.addEventListener("resize",Mm);document.addEventListener("keydown",cR,{capture:!0});document.addEventListener("keyup",lR,{capture:!0});document.addEventListener("pointerlockchange",ZA);document.addEventListener("pointerlockerror",wu);document.addEventListener("fullscreenchange",Xs);document.addEventListener("webkitfullscreenchange",Xs);document.addEventListener("mousemove",i=>{mo()&&yu(i)});window.addEventListener("focus",()=>Ze());window.addEventListener("blur",()=>{cs(),Xa()});document.addEventListener("visibilitychange",()=>{document.hidden?cs():Ze()});window.addEventListener("pointerdown",()=>Ze());window.addEventListener("pointermove",()=>Ze());gn.addEventListener("pointerenter",()=>Ze());gn.addEventListener("pointermove",i=>{Ze(),yu(i)});gn.addEventListener("pointerdown",i=>{i.button===0&&(os(),Ze(),Tu(),yu(i),Zp())});gn.addEventListener("pointerup",di);gn.addEventListener("pointercancel",di);gn.addEventListener("pointerleave",di);window.addEventListener("pointerup",di);window.addEventListener("pointercancel",di);Xe.addEventListener("pointerdown",HA);Xe.addEventListener("pointermove",VA);Xe.addEventListener("pointerup",Mu);Xe.addEventListener("pointercancel",Mu);Xe.addEventListener("lostpointercapture",Mu);Ti.addEventListener("pointerdown",GA);Ti.addEventListener("pointermove",WA);Ti.addEventListener("pointerup",Su);Ti.addEventListener("pointercancel",Su);Ti.addEventListener("lostpointercapture",Su);Kr.addEventListener("pointerdown",YA);Kr.addEventListener("pointerup",i=>{i.preventDefault(),i.stopPropagation()});Kr.addEventListener("pointercancel",i=>{i.preventDefault(),i.stopPropagation()});ou.addEventListener("pointerdown",XA);ou.addEventListener("pointerup",i=>{i.preventDefault(),i.stopPropagation()});ou.addEventListener("pointercancel",i=>{i.preventDefault(),i.stopPropagation()});Ua.addEventListener("pointerdown",qA);Ua.addEventListener("pointerup",i=>{i.preventDefault(),i.stopPropagation(),di()});Ua.addEventListener("pointercancel",i=>{i.preventDefault(),i.stopPropagation(),di()});Ua.addEventListener("lostpointercapture",di);Aw.addEventListener("click",i=>{i.stopPropagation(),Ka(!V.settingsOpen)});bw.addEventListener("click",i=>{i.stopPropagation(),Ka(!1)});Mi.addEventListener("click",async i=>{i.stopPropagation(),await oR()});Fa.addEventListener("pointerdown",i=>{i.stopPropagation()});Fa.addEventListener("pointermove",i=>{i.stopPropagation()});Ma.addEventListener("input",()=>{Ga.mouseSensitivity=Number(Ma.value),Am()});Pw.addEventListener("click",()=>{os(),KA()});za.addEventListener("click",ym);Nw.addEventListener("click",ym);dA();const Y=SA(),Et=EA(),Ie=fT.map((i,t)=>LA(i,t));Ie[0];jf.forEach((i,t)=>IA(i,t));const Ol=DA();iR();Xs();Am();ur();function kr(i){return Math.round(i*1e3)/1e3}function ra(i){return{x:kr(i.x),y:kr(i.y),z:kr(i.z)}}function uR(i){return i.updateWorldMatrix(!0,!0),new Li().setFromObject(i)}function hR(){const t=[],e=[];return Kn.forEach((n,s)=>{var f,g,v;if(!n.mesh||n.invisible||(f=n.body.userData)!=null&&f.invisible||n.glassFace&&!n.glassFace.alive)return;const r=pu(n);if(!r){e.push({index:s,kind:((g=n.body.userData)==null?void 0:g.kind)??"unknown",reason:"missing-box-collider"});return}const o=uR(n.mesh),a=new b,c=new b;o.getCenter(a),o.getSize(c);const l=r.halfExtents.clone().multiplyScalar(2),u=a.distanceTo(r.center),d=c.distanceTo(l),h={index:s,kind:((v=n.body.userData)==null?void 0:v.kind)??"unknown",meshCenter:ra(a),colliderCenter:ra(r.center),meshSize:ra(c),colliderSize:ra(l),centerDelta:kr(u),sizeDelta:kr(d)};t.push(h),(u>.015||d>.015)&&e.push(h)}),{tolerance:.015,visibleSolidEntries:t.length,matchedEntries:t.length-e.length,mismatches:e}}function bm(){return{staticSolids:hR(),characters:{player:{visual:"vertical-capsule",hitbox:"vertical-capsule",physics:"vertical-capsule",radius:Jr,cylinderLength:Ea,centerY:Yn},enemies:{visual:"vertical-capsule",hitbox:"vertical-capsule",physics:"vertical-capsule",radius:Qr,cylinderLength:wa,centerY:vn}},projectiles:{visual:"sphere",hitbox:"sphere",radius:Si},glassBalls:{visual:"sphere",physics:"sphere",hitbox:"sphere",radius:ui},decorativeNoCollision:["grass-patches","bushes","palm-canopies","beach-color-patches","terrain-mounds","ocean","skybox","lights-and-volumetric-effects","extraction-marker","loot-marker","character-weapons"]}}window.__vibeGameGeometryAudit=bm;function dR(){const i=bm();document.documentElement.dataset.geometryAuditReady="true",document.documentElement.dataset.geometrySolidEntries=String(i.staticSolids.visibleSolidEntries),document.documentElement.dataset.geometryMismatches=String(i.staticSolids.mismatches.length)}dR();Mm();gm();Dp(0);Lp();vm(1);as();Ze();function Rm(){requestAnimationFrame(Rm);const i=Math.min(Qi.getDelta(),.05);Te()?(V.shootCooldown=Math.max(0,V.shootCooldown-i),V.meleeCooldown=Math.max(0,V.meleeCooldown-i),jA(i),Ie.forEach(e=>{e.hitFlash=Math.max(0,e.hitFlash-i)}),Ze(),db(i),Rb(i),ub(i),$T(i),Ie.forEach(e=>Ob(e,i)),jt.step(1/60,i,3),KT(),eA(),gm(),lb(i),cb(i),gu(),Ie.forEach(e=>Zb(e,i)),Dp(i),Bb(i),FA(i),kA(i),$b(i),jb(i)):(Y.body.velocity.x=0,Y.body.velocity.z=0,Ie.forEach(e=>{e.body.velocity.x=0,e.body.velocity.z=0,e.footstepTimer=.08}),Y.footstepTimer=0),Kb(i),nR(i),OA(i),ET(i),hb(),vm(i),uA(i),Lp(),Ol.pad.material.opacity=V.cargo?.6:.3,as(),qn.clear(!0,!0,!0),qn.render(Ot,Qe)}Rm();

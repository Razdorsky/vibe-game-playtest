import{E as he,B as V,a as ne,b as Ve,R as $e,H as Ye,c as Ke,d as Ze,K as qe,V as Qe,S as Je,e as xe}from"./vendor-postprocessing-BazmoDWw.js";import{V as pe,c as v,d as M,r as ve,s as je,F as ge,N as te,t as be,u as re,C as et,H as tt,o as oe,p as X,v as ot,i as it,w as st,x as at,Q as Be,y as nt,z as rt,G as _e,I as Se,M as lt,J as ct,K as ut,X as Ce,Y as ft,Z as Ae,_ as dt,L as pt,S as ht}from"./vendor-three-DoCzvMad.js";import{c as mt,d as xt,a as vt,S as gt}from"./vendor-asset-runtime-D4TSkJa5.js";const St=`
  uniform vec2 cameraVelocity;

  void mainImage(
    const in vec4 inputColor,
    const in vec2 uv,
    out vec4 outputColor
  ) {
    vec2 fullOffset = cameraVelocity;
    vec2 halfOffset = fullOffset * 0.5;
    vec2 safeMin = vec2(0.001);
    vec2 safeMax = vec2(0.999);

    vec4 color = inputColor * 0.42;
    color += texture2D(inputBuffer, clamp(uv - fullOffset, safeMin, safeMax)) * 0.12;
    color += texture2D(inputBuffer, clamp(uv - halfOffset, safeMin, safeMax)) * 0.17;
    color += texture2D(inputBuffer, clamp(uv + halfOffset, safeMin, safeMax)) * 0.17;
    color += texture2D(inputBuffer, clamp(uv + fullOffset, safeMin, safeMax)) * 0.12;
    outputColor = color;
  }
`,wt=new M(0,1,0);class yt extends he{constructor(i,{maxUvOffset:t=.0014,rotationScale:o=.085,translationScale:a=.003,response:s=22}={}){const n=new pe;super("CameraMotionBlurEffect",St,{attributes:ne.CONVOLUTION,blendFunction:V.NORMAL,uniforms:new Map([["cameraVelocity",new v(n)]])}),this.camera=i,this.maxUvOffset=t,this.rotationScale=o,this.translationScale=a,this.response=s,this.velocity=n,this.targetVelocity=new pe,this.previousPosition=new M,this.previousForward=new M,this.currentPosition=new M,this.currentForward=new M,this.currentRight=new M,this.currentUp=new M,this.positionDelta=new M,this.forwardDelta=new M,this.initialized=!1,this.updateCount=0,this.lastDeltaTime=0}reset(){this.velocity.set(0,0),this.targetVelocity.set(0,0),this.camera.getWorldPosition(this.previousPosition),this.camera.getWorldDirection(this.previousForward),this.initialized=!0}update(i,t,o=0){const a=Number.isFinite(o)?Math.max(0,o):0;if(this.updateCount+=1,this.lastDeltaTime=a,this.camera.getWorldPosition(this.currentPosition),this.camera.getWorldDirection(this.currentForward),!this.initialized||a<=0||a>.12){this.reset();return}if(this.positionDelta.subVectors(this.currentPosition,this.previousPosition),this.positionDelta.lengthSq()>4){this.reset();return}this.currentRight.set(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),this.currentUp.copy(wt).applyQuaternion(this.camera.quaternion).normalize(),this.forwardDelta.subVectors(this.currentForward,this.previousForward),this.targetVelocity.set(this.forwardDelta.dot(this.currentRight)*this.rotationScale+this.positionDelta.dot(this.currentRight)*this.translationScale,this.forwardDelta.dot(this.currentUp)*this.rotationScale+this.positionDelta.dot(this.currentUp)*this.translationScale);const s=this.targetVelocity.length();s>this.maxUvOffset?this.targetVelocity.multiplyScalar(this.maxUvOffset/s):s<25e-6&&this.targetVelocity.set(0,0);const n=1-Math.exp(-this.response*a);this.velocity.lerp(this.targetVelocity,n),this.velocity.lengthSq()<1e-10&&this.targetVelocity.lengthSq()===0&&this.velocity.set(0,0),this.previousPosition.copy(this.currentPosition),this.previousForward.copy(this.currentForward)}getAudit(){return{enabled:!0,implementation:"current-frame-directional-convolution",temporalHistory:!1,sampleCount:5,maxUvOffset:this.maxUvOffset,currentUvOffset:{x:Number(this.velocity.x.toFixed(6)),y:Number(this.velocity.y.toFixed(6))},targetUvOffset:{x:Number(this.targetVelocity.x.toFixed(6)),y:Number(this.targetVelocity.y.toFixed(6))},positionDelta:{x:Number(this.positionDelta.x.toFixed(6)),y:Number(this.positionDelta.y.toFixed(6)),z:Number(this.positionDelta.z.toFixed(6))},forwardDelta:{x:Number(this.forwardDelta.x.toFixed(6)),y:Number(this.forwardDelta.y.toFixed(6)),z:Number(this.forwardDelta.z.toFixed(6))},updateCount:this.updateCount,lastDeltaTime:Number(this.lastDeltaTime.toFixed(6))}}}const z=8,ie=48,ae=4,Oe=z*ae,Z=256,Pt=`
  const int MAX_EXPLOSIONS = 8;
  const float EXPLOSION_PI = 3.141592653589793;
  const float EXPLOSION_TWO_PI = 6.283185307179586;

  uniform mat4 explosionProjectionMatrixInverse;
  uniform mat4 explosionCameraMatrixWorld;
  uniform vec3 explosionCameraWorldPosition;
  uniform int explosionCount;
  uniform vec3 explosionOrigins[MAX_EXPLOSIONS];
  uniform vec3 explosionRightAxes[MAX_EXPLOSIONS];
  uniform vec3 explosionUpAxes[MAX_EXPLOSIONS];
  uniform vec3 explosionForwardAxes[MAX_EXPLOSIONS];
  uniform vec2 explosionScreenCenters[MAX_EXPLOSIONS];
  uniform float explosionWaveRadii[MAX_EXPLOSIONS];
  uniform float explosionLifeProgress[MAX_EXPLOSIONS];
  uniform sampler2D explosionSectorDistances;
  uniform float explosionMaxUvOffset;
  uniform float explosionTime;
  uniform int smokeCloudCount;
  uniform sampler2D smokeCloudData;
  uniform vec2 smokeCloudTextureSize;

  float explosionSmokeHash(const in vec3 point) {
    return fract(sin(dot(point, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
  }

  float explosionSmokeNoise(const in vec3 point) {
    vec3 cell = floor(point);
    vec3 local = fract(point);
    local = local * local * (3.0 - 2.0 * local);
    return mix(
      mix(
        mix(explosionSmokeHash(cell), explosionSmokeHash(cell + vec3(1.0, 0.0, 0.0)), local.x),
        mix(explosionSmokeHash(cell + vec3(0.0, 1.0, 0.0)), explosionSmokeHash(cell + vec3(1.0, 1.0, 0.0)), local.x),
        local.y
      ),
      mix(
        mix(explosionSmokeHash(cell + vec3(0.0, 0.0, 1.0)), explosionSmokeHash(cell + vec3(1.0, 0.0, 1.0)), local.x),
        mix(explosionSmokeHash(cell + vec3(0.0, 1.0, 1.0)), explosionSmokeHash(cell + vec3(1.0, 1.0, 1.0)), local.x),
        local.y
      ),
      local.z
    );
  }

  vec4 readSmokeCloudData(const in int cloudIndex, const in int dataIndex) {
    float linearIndex = float(cloudIndex * 2 + dataIndex);
    vec2 texel = vec2(
      mod(linearIndex, smokeCloudTextureSize.x),
      floor(linearIndex / smokeCloudTextureSize.x)
    );
    return texture2D(
      smokeCloudData,
      (texel + vec2(0.5)) / smokeCloudTextureSize
    );
  }

  vec3 reconstructExplosionWorldPosition(const in vec2 uv, const in float depth) {
    vec4 clipPosition = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 viewPosition = explosionProjectionMatrixInverse * clipPosition;
    viewPosition /= max(abs(viewPosition.w), 0.00001);
    return (explosionCameraMatrixWorld * viewPosition).xyz;
  }

  bool intersectExplosionSphere(
    const in vec3 rayOrigin,
    const in vec3 rayDirection,
    const in vec3 center,
    const in float radius,
    out float hitDistance
  ) {
    vec3 offset = rayOrigin - center;
    float projected = dot(offset, rayDirection);
    float discriminant = projected * projected - dot(offset, offset) + radius * radius;
    if (discriminant < 0.0) {
      return false;
    }
    float root = sqrt(discriminant);
    float nearDistance = -projected - root;
    float farDistance = -projected + root;
    hitDistance = nearDistance > 0.001 ? nearDistance : farDistance;
    return hitDistance > 0.001;
  }

  vec3 explosionLocalPoint(const in vec3 worldOffset, const in int index) {
    return vec3(
      dot(worldOffset, explosionRightAxes[index]),
      dot(worldOffset, explosionUpAxes[index]),
      dot(worldOffset, explosionForwardAxes[index])
    );
  }

  float readExplosionSectorDistance(const in vec3 localPoint, const in int index) {
    float distanceToOrigin = length(localPoint);
    if (distanceToOrigin <= 0.0001 || localPoint.y < 0.0) {
      return 0.0;
    }
    float azimuth = atan(localPoint.z, localPoint.x);
    if (azimuth < 0.0) {
      azimuth += EXPLOSION_TWO_PI;
    }
    float elevation = asin(clamp(localPoint.y / distanceToOrigin, 0.0, 1.0));
    float azimuthIndex = floor(azimuth / EXPLOSION_TWO_PI * 48.0);
    float elevationIndex = min(3.0, floor(elevation / (EXPLOSION_PI * 0.5) * 4.0));
    vec2 atlasUv = vec2(
      (azimuthIndex + 0.5) / 48.0,
      (float(index * 4) + elevationIndex + 0.5) / 32.0
    );
    return texture2D(explosionSectorDistances, atlasUv).r;
  }

  bool resolveExplosionSurface(
    const in vec3 rayOrigin,
    const in vec3 rayDirection,
    const in float sceneDistance,
    const in int index,
    out vec3 surfacePoint,
    out vec3 surfaceNormal
  ) {
    float waveRadius = explosionWaveRadii[index];
    if (waveRadius <= 0.015) {
      return false;
    }

    float hitDistance = 0.0;
    if (!intersectExplosionSphere(
      rayOrigin,
      rayDirection,
      explosionOrigins[index],
      waveRadius,
      hitDistance
    )) {
      return false;
    }

    surfacePoint = rayOrigin + rayDirection * hitDistance;
    vec3 localPoint = explosionLocalPoint(surfacePoint - explosionOrigins[index], index);
    if (localPoint.y < 0.0) {
      return false;
    }
    float sectorDistance = readExplosionSectorDistance(localPoint, index);
    float actualRadius = min(waveRadius, sectorDistance);
    if (actualRadius <= 0.015) {
      return false;
    }

    if (abs(actualRadius - waveRadius) > 0.01) {
      if (!intersectExplosionSphere(
        rayOrigin,
        rayDirection,
        explosionOrigins[index],
        actualRadius,
        hitDistance
      )) {
        return false;
      }
      surfacePoint = rayOrigin + rayDirection * hitDistance;
      localPoint = explosionLocalPoint(surfacePoint - explosionOrigins[index], index);
      if (localPoint.y < 0.0) {
        return false;
      }
      sectorDistance = readExplosionSectorDistance(localPoint, index);
      float refinedRadius = min(waveRadius, sectorDistance);
      if (abs(refinedRadius - actualRadius) > 0.01) {
        actualRadius = refinedRadius;
        if (!intersectExplosionSphere(
          rayOrigin,
          rayDirection,
          explosionOrigins[index],
          actualRadius,
          hitDistance
        )) {
          return false;
        }
        surfacePoint = rayOrigin + rayDirection * hitDistance;
        localPoint = explosionLocalPoint(surfacePoint - explosionOrigins[index], index);
      }
    }

    if (
      localPoint.y < -0.005 ||
      hitDistance >= sceneDistance - 0.005 ||
      length(localPoint) > sectorDistance + 0.025
    ) {
      return false;
    }
    surfaceNormal = normalize(surfacePoint - explosionOrigins[index]);
    return true;
  }

  void mainImage(
    const in vec4 inputColor,
    const in vec2 uv,
    const in float depth,
    out vec4 outputColor
  ) {
    vec3 sceneWorldPosition = reconstructExplosionWorldPosition(uv, depth);
    vec3 rayOffset = sceneWorldPosition - explosionCameraWorldPosition;
    float sceneDistance = depth >= 0.99999 ? 100000.0 : length(rayOffset);
    vec3 rayDirection = normalize(rayOffset);
    vec2 accumulatedOffset = vec2(0.0);
    float strongestRim = 0.0;
    float smokeAmount = 0.0;
    vec3 fireEmission = vec3(0.0);

    for (int index = 0; index < MAX_EXPLOSIONS; index++) {
      if (index >= explosionCount) {
        break;
      }
      vec3 surfacePoint;
      vec3 surfaceNormal;
      if (!resolveExplosionSurface(
        explosionCameraWorldPosition,
        rayDirection,
        sceneDistance,
        index,
        surfacePoint,
        surfaceNormal
      )) {
        continue;
      }

      float progress = explosionLifeProgress[index];
      float ageSeconds = progress * 0.8;
      float envelope = smoothstep(0.006, 0.045, ageSeconds) *
        (1.0 - smoothstep(0.62, 0.8, ageSeconds));
      float grazing = pow(
        clamp(1.0 - abs(dot(surfaceNormal, -rayDirection)), 0.0, 1.0),
        1.45
      );
      vec2 aspectCorrected = (uv - explosionScreenCenters[index]) *
        vec2(resolution.x / max(resolution.y, 1.0), 1.0);
      float radialLength = length(aspectCorrected);
      vec2 radialDirection = radialLength > 0.00001
        ? aspectCorrected / radialLength
        : vec2(0.0, 1.0);
      radialDirection.x *= resolution.y / max(resolution.x, 1.0);
      float strength = explosionMaxUvOffset * envelope * mix(0.24, 1.0, grazing);
      accumulatedOffset += radialDirection * strength;
      strongestRim = max(strongestRim, grazing * envelope);
      vec3 smokeCoordinate = surfacePoint * 1.35 + vec3(
        explosionTime * 0.18,
        explosionTime * 0.31,
        -explosionTime * 0.14
      );
      float smokeNoise = explosionSmokeNoise(smokeCoordinate) * 0.68 +
        explosionSmokeNoise(smokeCoordinate * 2.07 + 4.13) * 0.32;
      float flashEnvelope = 1.0 - smoothstep(0.012, 0.04, ageSeconds);
      float hotGasEnvelope = smoothstep(0.025, 0.055, ageSeconds) *
        (1.0 - smoothstep(0.1, 0.19, ageSeconds));
      float fireEnvelope = smoothstep(0.025, 0.06, ageSeconds) *
        (1.0 - smoothstep(0.18, 0.42, ageSeconds));
      float flameShape = smoothstep(0.36, 0.79, smokeNoise) *
        mix(1.0, 0.28, grazing) * fireEnvelope;
      float sparkNoise = explosionSmokeNoise(
        smokeCoordinate * 4.1 + surfaceNormal * explosionTime * 5.4
      );
      vec3 sparkLocalPoint = explosionLocalPoint(
        surfacePoint - explosionOrigins[index],
        index
      );
      float sparkAngle = atan(sparkLocalPoint.z, sparkLocalPoint.x);
      float radialSparkPattern = pow(
        max(0.0, sin(sparkAngle * 29.0 + explosionTime * 13.0 + sparkNoise * 4.2)),
        12.0
      );
      float sparkEnvelope = smoothstep(0.045, 0.075, ageSeconds) *
        (1.0 - smoothstep(0.46, 0.74, ageSeconds));
      float sparks = smoothstep(0.76, 0.93, sparkNoise) *
        smoothstep(0.08, 0.48, smokeNoise) *
        mix(0.52, 1.0, radialSparkPattern) * sparkEnvelope;
      vec3 flameColor = mix(
        vec3(1.45, 0.17, 0.018),
        vec3(3.1, 1.22, 0.18),
        smoothstep(0.38, 0.88, smokeNoise)
      );
      fireEmission += mix(
        vec3(4.6, 2.1, 0.42),
        vec3(7.2, 6.2, 4.8),
        flashEnvelope
      ) * flashEnvelope * mix(0.65, 0.22, grazing);
      fireEmission += vec3(2.8, 0.78, 0.08) * hotGasEnvelope *
        smoothstep(0.22, 0.76, smokeNoise) * 0.48;
      fireEmission += flameColor * flameShape * 0.24;
      fireEmission += vec3(5.2, 2.35, 0.42) * sparks * 1.08;
    }

    for (int index = 0; index < smokeCloudCount; index++) {
      vec4 cloudOriginRadius = readSmokeCloudData(index, 0);
      vec4 cloudUpOpacity = readSmokeCloudData(index, 1);
      float cloudRadius = cloudOriginRadius.w;
      if (cloudRadius <= 0.01 || cloudUpOpacity.w <= 0.001) {
        continue;
      }
      vec3 cloudOffset = explosionCameraWorldPosition - cloudOriginRadius.xyz;
      float projected = dot(cloudOffset, rayDirection);
      float discriminant = projected * projected - dot(cloudOffset, cloudOffset) +
        cloudRadius * cloudRadius;
      if (discriminant <= 0.0) {
        continue;
      }
      float root = sqrt(discriminant);
      float nearDistance = max(0.001, -projected - root);
      float farDistance = -projected + root;
      vec3 cloudUp = normalize(cloudUpOpacity.xyz);
      float cameraPlaneHeight = dot(
        explosionCameraWorldPosition - cloudOriginRadius.xyz,
        cloudUp
      );
      float rayPlaneRate = dot(rayDirection, cloudUp);
      if (abs(rayPlaneRate) <= 0.00001) {
        if (cameraPlaneHeight < 0.0) {
          continue;
        }
      } else {
        float planeDistance = -cameraPlaneHeight / rayPlaneRate;
        if (rayPlaneRate > 0.0) {
          nearDistance = max(nearDistance, planeDistance);
        } else {
          farDistance = min(farDistance, planeDistance);
        }
      }
      float visibleFarDistance = min(farDistance, sceneDistance - 0.005);
      if (visibleFarDistance <= nearDistance) {
        continue;
      }
      float sampleDistance = (nearDistance + visibleFarDistance) * 0.5;
      vec3 samplePoint = explosionCameraWorldPosition + rayDirection * sampleDistance;
      vec3 sampleOffset = samplePoint - cloudOriginRadius.xyz;
      float heightAbovePlane = max(0.0, dot(sampleOffset, cloudUp));
      float normalizedThickness = clamp(
        (visibleFarDistance - nearDistance) / max(cloudRadius * 2.0, 0.001),
        0.0,
        1.0
      );
      vec3 cloudNoiseCoordinate = samplePoint * 0.92 + vec3(
        explosionTime * 0.055,
        explosionTime * 0.11,
        -explosionTime * 0.04
      );
      float cloudNoise = explosionSmokeNoise(cloudNoiseCoordinate) * 0.7 +
        explosionSmokeNoise(cloudNoiseCoordinate * 2.03 + 8.7) * 0.3;
      float cloudShape = smoothstep(0.16, 0.72, normalizedThickness) *
        smoothstep(0.28, 0.72, cloudNoise) *
        smoothstep(0.0, max(cloudRadius * 0.05, 0.015), heightAbovePlane);
      smokeAmount = max(
        smokeAmount,
        cloudShape * cloudUpOpacity.w
      );
    }

    float offsetLength = length(accumulatedOffset);
    if (offsetLength > explosionMaxUvOffset * 1.35) {
      accumulatedOffset *= explosionMaxUvOffset * 1.35 / offsetLength;
    }
    vec2 safeMin = vec2(0.001);
    vec2 safeMax = vec2(0.999);
    vec2 displacedUv = clamp(uv + accumulatedOffset, safeMin, safeMax);
    vec2 chromaticOffset = accumulatedOffset * (0.07 + strongestRim * 0.05);
    vec4 displaced = texture2D(inputBuffer, displacedUv);
    displaced.r = texture2D(inputBuffer, clamp(displacedUv + chromaticOffset, safeMin, safeMax)).r;
    displaced.b = texture2D(inputBuffer, clamp(displacedUv - chromaticOffset, safeMin, safeMax)).b;
    displaced.rgb = mix(displaced.rgb, vec3(0.19, 0.185, 0.17), smokeAmount);
    displaced.rgb += fireEmission;
    outputColor = displaced;
  }
`;function le(){return Array.from({length:z},()=>new M)}function Mt(){return Array.from({length:z},()=>new pe)}class Dt extends he{constructor(i,{maxUvOffset:t=.016}={}){const o=new Float32Array(ie*Oe),a=new ve(o,ie,Oe,je,ge);a.minFilter=te,a.magFilter=te,a.generateMipmaps=!1,a.needsUpdate=!0;const s=le(),n=le(),p=le(),l=le(),r=Mt(),u=new Float32Array(z),d=new Float32Array(z),m=1,P=new Float32Array(Z*m*4),g=new ve(P,Z,m,be,ge);g.minFilter=te,g.magFilter=te,g.generateMipmaps=!1,g.needsUpdate=!0;const S=new pe(Z,m);super("ExplosionDistortionEffect",Pt,{attributes:ne.DEPTH|ne.CONVOLUTION,blendFunction:V.NORMAL,uniforms:new Map([["explosionProjectionMatrixInverse",new v(i.projectionMatrixInverse)],["explosionCameraMatrixWorld",new v(i.matrixWorld)],["explosionCameraWorldPosition",new v(i.position)],["explosionCount",new v(0)],["explosionOrigins",new v(s)],["explosionRightAxes",new v(n)],["explosionUpAxes",new v(p)],["explosionForwardAxes",new v(l)],["explosionScreenCenters",new v(r)],["explosionWaveRadii",new v(u)],["explosionLifeProgress",new v(d)],["explosionSectorDistances",new v(a)],["explosionMaxUvOffset",new v(t)],["explosionTime",new v(0)],["smokeCloudCount",new v(0)],["smokeCloudData",new v(g)],["smokeCloudTextureSize",new v(S)]])}),this.camera=i,this.sectorData=o,this.sectorTexture=a,this.origins=s,this.rightAxes=n,this.upAxes=p,this.forwardAxes=l,this.screenCenters=r,this.waveRadii=u,this.lifeProgress=d,this.smokeCloudData=P,this.smokeCloudTexture=g,this.smokeCloudTextureHeight=m,this.smokeCloudTextureSize=S,this.slotGrids=Array(z).fill(null),this.projectedCenter=new M,this.activeCount=0}setWaves(i=[]){const t=Math.max(0,i.length-z),o=Math.min(z,i.length-t);let a=!1;for(let s=0;s<z;s+=1){const n=s<o?i[t+s]:null;if(!n){this.waveRadii[s]=0,this.lifeProgress[s]=1,this.slotGrids[s]=null;continue}if(this.origins[s].copy(n.origin),this.rightAxes[s].set(n.sectorGrid.basis.right.x,n.sectorGrid.basis.right.y,n.sectorGrid.basis.right.z),this.upAxes[s].set(n.sectorGrid.basis.up.x,n.sectorGrid.basis.up.y,n.sectorGrid.basis.up.z),this.forwardAxes[s].set(n.sectorGrid.basis.forward.x,n.sectorGrid.basis.forward.y,n.sectorGrid.basis.forward.z),this.projectedCenter.copy(n.origin).project(this.camera),this.screenCenters[s].set(this.projectedCenter.x*.5+.5,this.projectedCenter.y*.5+.5),this.waveRadii[s]=Math.min(n.sectorGrid.radius,n.elapsed/n.spreadSecondsPerUnit),this.lifeProgress[s]=re.clamp(n.elapsed/n.duration,0,1),this.slotGrids[s]!==n.sectorGrid){for(let p=0;p<ie;p+=1)for(let l=0;l<ae;l+=1){const r=p*ae+l,u=(s*ae+l)*ie+p;this.sectorData[u]=n.sectorGrid.maxDistances[r]}this.slotGrids[s]=n.sectorGrid,a=!0}}this.activeCount=o,this.uniforms.get("explosionCount").value=o,a&&(this.sectorTexture.needsUpdate=!0)}setSmokeClouds(i=[]){const t=i.length,o=Math.max(1,Math.ceil(t*2/Z));o>this.smokeCloudTextureHeight&&(this.smokeCloudTexture.dispose(),this.smokeCloudTextureHeight=o,this.smokeCloudData=new Float32Array(Z*o*4),this.smokeCloudTexture=new ve(this.smokeCloudData,Z,o,be,ge),this.smokeCloudTexture.minFilter=te,this.smokeCloudTexture.magFilter=te,this.smokeCloudTexture.generateMipmaps=!1,this.uniforms.get("smokeCloudData").value=this.smokeCloudTexture,this.smokeCloudTextureSize.set(Z,o));for(let a=0;a<t;a+=1){const s=i[a],n=a*8;this.smokeCloudData[n]=s.origin.x,this.smokeCloudData[n+1]=s.origin.y,this.smokeCloudData[n+2]=s.origin.z,this.smokeCloudData[n+3]=s.radius,this.smokeCloudData[n+4]=s.planeNormal.x,this.smokeCloudData[n+5]=s.planeNormal.y,this.smokeCloudData[n+6]=s.planeNormal.z,this.smokeCloudData[n+7]=s.opacity}this.smokeCloudTexture.needsUpdate=!0,this.uniforms.get("smokeCloudCount").value=t}update(i,t,o=0){this.camera.updateMatrixWorld(),this.uniforms.get("explosionTime").value+=Math.max(0,o||0);for(let a=0;a<this.activeCount;a+=1)this.projectedCenter.copy(this.origins[a]).project(this.camera),this.screenCenters[a].set(this.projectedCenter.x*.5+.5,this.projectedCenter.y*.5+.5)}getAudit(){return{enabled:!0,activeWaves:this.uniforms.get("explosionCount").value,maxWaves:z,sectorGrid:`${ie}x${ae}`,maxUvOffset:this.uniforms.get("explosionMaxUvOffset").value,smokeClouds:this.uniforms.get("smokeCloudCount").value,model:"sector-clipped-refraction+full-hemisphere-smoke"}}dispose(){this.sectorTexture.dispose(),this.smokeCloudTexture.dispose(),super.dispose()}}const bt=13359836,Ct=-32,At=-16,Ot=`
  uniform mat4 fogProjectionMatrixInverse;
  uniform mat4 fogCameraMatrixWorld;
  uniform vec3 fogCameraWorldPosition;
  uniform vec3 fogColor;
  uniform float fogBottomY;
  uniform float fogTopY;
  uniform float fogMaxOpacity;

  void mainImage(
    const in vec4 inputColor,
    const in vec2 uv,
    const in float depth,
    out vec4 outputColor
  ) {
    vec4 clipPosition = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 viewPosition = fogProjectionMatrixInverse * clipPosition;
    viewPosition /= max(abs(viewPosition.w), 0.00001);
    vec3 worldPosition = (fogCameraMatrixWorld * viewPosition).xyz;

    float lowestVisibleY = min(
      fogCameraWorldPosition.y,
      worldPosition.y
    );
    float heightOpacity = 1.0 - smoothstep(
      fogBottomY,
      fogTopY,
      lowestVisibleY
    );
    float fogAmount = clamp(
      heightOpacity * fogMaxOpacity,
      0.0,
      fogMaxOpacity
    );

    outputColor = vec4(
      mix(inputColor.rgb, fogColor, fogAmount),
      inputColor.a
    );
  }
`;class Tt extends he{constructor(i,{color:t=bt,bottomY:o=Ct,topY:a=At,maxOpacity:s=1}={}){super("HeightFogEffect",Ot,{attributes:ne.DEPTH,blendFunction:V.NORMAL,uniforms:new Map([["fogProjectionMatrixInverse",new v(i.projectionMatrixInverse)],["fogCameraMatrixWorld",new v(i.matrixWorld)],["fogCameraWorldPosition",new v(i.position)],["fogColor",new v(new et(t))],["fogBottomY",new v(o)],["fogTopY",new v(a)],["fogMaxOpacity",new v(s)]])}),this.camera=i}update(){this.camera.updateMatrixWorld()}setState({color:i,bottomY:t,topY:o,maxOpacity:a}={}){i!=null&&this.uniforms.get("fogColor").value.set(i),Number.isFinite(t)&&(this.uniforms.get("fogBottomY").value=t),Number.isFinite(o)&&(this.uniforms.get("fogTopY").value=o),Number.isFinite(a)&&(this.uniforms.get("fogMaxOpacity").value=re.clamp(a,0,1))}}const Et=`
  uniform mat4 hbaoProjectionMatrixInverse;
  uniform float hbaoProjectionScale;
  uniform float hbaoRadius;
  uniform float hbaoIntensity;
  uniform float hbaoBias;

  vec3 hbaoViewPosition(const in vec2 uv, const in float depth) {
    vec4 clipPosition = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 viewPosition = hbaoProjectionMatrixInverse * clipPosition;
    return viewPosition.xyz / max(abs(viewPosition.w), 0.00001);
  }

  void mainImage(
    const in vec4 inputColor,
    const in vec2 uv,
    const in float depth,
    out vec4 outputColor
  ) {
    if (depth >= 0.99999) {
      outputColor = inputColor;
      return;
    }

    vec3 origin = hbaoViewPosition(uv, depth);
    vec3 normal = normalize(cross(dFdx(origin), dFdy(origin)));
    if (normal.z < 0.0) {
      normal = -normal;
    }

    float pixelRadius = clamp(
      hbaoRadius * hbaoProjectionScale * resolution.y / max(-origin.z, 0.1),
      1.5,
      18.0
    );
    float occlusion = 0.0;

    for (int directionIndex = 0; directionIndex < 6; directionIndex++) {
      float angle = 6.28318530718 * (float(directionIndex) / 6.0);
      vec2 direction = vec2(cos(angle), sin(angle));
      float horizon = 0.0;

      for (int stepIndex = 1; stepIndex <= 2; stepIndex++) {
        float stepScale = (float(stepIndex) - 0.25) / 2.0;
        vec2 sampleUv = uv + direction * texelSize * pixelRadius * stepScale;
        if (
          sampleUv.x <= 0.0 || sampleUv.x >= 1.0 ||
          sampleUv.y <= 0.0 || sampleUv.y >= 1.0
        ) {
          continue;
        }

        float sampleDepth = readDepth(sampleUv);
        if (sampleDepth >= 0.99999) {
          continue;
        }
        vec3 samplePosition = hbaoViewPosition(sampleUv, sampleDepth);
        vec3 delta = samplePosition - origin;
        float distanceToSample = length(delta);
        float falloff = 1.0 - smoothstep(0.0, hbaoRadius, distanceToSample);
        float horizonAngle = max(
          dot(normal, delta / max(distanceToSample, 0.00001)) - hbaoBias,
          0.0
        );
        horizon = max(horizon, horizonAngle * falloff);
      }

      occlusion += horizon;
    }

    float distanceFade = 1.0 - smoothstep(72.0, 150.0, -origin.z);
    float ao = 1.0 - clamp(
      (occlusion / 6.0) * hbaoIntensity * distanceFade,
      0.0,
      0.58
    );
    outputColor = vec4(inputColor.rgb * ao, inputColor.a);
  }
`;class It extends he{constructor(i,{radius:t=.55,intensity:o=1.05,bias:a=.035}={}){super("HBAOEffect",Et,{attributes:ne.DEPTH,blendFunction:V.NORMAL,uniforms:new Map([["hbaoProjectionMatrixInverse",new v(i.projectionMatrixInverse)],["hbaoProjectionScale",new v(i.projectionMatrix.elements[5]*.5)],["hbaoRadius",new v(t)],["hbaoIntensity",new v(o)],["hbaoBias",new v(a)]])}),this.camera=i}update(){this.uniforms.get("hbaoProjectionScale").value=this.camera.projectionMatrix.elements[5]*.5}}function Zt({canvas:e,renderer:i,scene:t,camera:o,enabled:a,screenSpaceAoEnabled:s,graphicsProfileName:n,motionBlurEnabled:p,heightFogEnabled:l=!0}){const r=!!a,u=n==="high",d=Math.max(1,Math.floor(e.clientWidth||window.innerWidth||1)),m=Math.max(1,Math.floor(e.clientHeight||window.innerHeight||1)),P=new Ve(i,{multisampling:0,frameBufferType:tt}),g=new $e(t,o),S=r?new Ye({blendFunction:V.NORMAL,saturation:u?.1:.065}):null,y=r&&!u?new Ke({blendFunction:V.NORMAL,brightness:.006,contrast:.105}):null,w=r&&u&&s?new It(o):null,h=l?new Tt(o):null,f=new Dt(o),O=r?new Ze({blendFunction:V.SCREEN,luminanceThreshold:u?.68:.78,luminanceSmoothing:.18,mipmapBlur:!0,intensity:u?.34:.22,radius:u?.58:.42,levels:u?5:4,kernelSize:qe.MEDIUM,resolutionScale:u?.5:.42}):null;O&&(O.dithering=!1);const G=r?new Qe({blendFunction:V.NORMAL,offset:.34,darkness:u?.18:.12}):null,I=[];w&&I.push(w),h&&I.push(h),S&&I.push(S),y&&I.push(y),O&&I.push(O),G&&I.push(G),r&&I.push(new Je);const H=new xe(o,...I);H.dithering=!1;const U=new xe(o,f);U.dithering=!1,P.addPass(g),P.addPass(U),P.addPass(H);const A=r&&p?new yt(o,{maxUvOffset:u?.00165:.00135,rotationScale:u?.09:.08,translationScale:u?.0032:.0028,response:22}):null,b=A?new xe(o,A):null;b&&(b.dithering=!1,P.addPass(b)),P.setSize(d,m,!1),e.style.removeProperty("width"),e.style.removeProperty("height");const k=()=>(A==null?void 0:A.getAudit())??{enabled:!1,temporalHistory:!1,reason:"graphics-profile-or-viewport-disabled"};return{enabled:!0,composer:P,renderPath:"postprocessing",ditheringEnabled:!!(H.dithering||O!=null&&O.dithering||b!=null&&b.dithering),grainEnabled:!1,effectNames:[...h?["HeightFogEffect"]:[],...S?["HueSaturationEffect"]:[],...y?["BrightnessContrastEffect"]:[],...w?["HBAOEffect"]:[],...O?["BloomEffect"]:[],...G?["VignetteEffect"]:[],...r?["SMAAEffect"]:[],"ExplosionDistortionEffect",...A?["CameraMotionBlurEffect"]:[]],getMotionBlurAudit:k,advanceMotionBlurForTest:(T=.5,Q=1/60)=>{if(!A)return k();const K=re.clamp(Number(Q)||1/60,1/120,1/20),c=Math.min(240,Math.max(1,Math.ceil(Number(T)/K)));for(let x=0;x<c;x+=1)A.update(i,null,K);return k()},setHeightFogState:T=>h==null?void 0:h.setState(T),setExplosionDistortionWaves:T=>f.setWaves(T),setExplosionSmokeClouds:T=>f.setSmokeClouds(T),getExplosionDistortionAudit:()=>f.getAudit(),dispose:()=>P.dispose()}}const D=12,L=56,W=D*L,Te=.8,Nt=`
  attribute float explosionSlot;
  attribute vec3 launchDirection;
  attribute float launchSpeed;
  attribute float particleSize;
  attribute float particleKind;
  attribute float maximumDistance;
  attribute float particleIndexInSlot;

  uniform int activeExplosionCount;
  uniform vec3 explosionOrigins[${D}];
  uniform vec3 explosionRightAxes[${D}];
  uniform vec3 explosionUpAxes[${D}];
  uniform vec3 explosionForwardAxes[${D}];
  uniform float explosionProgress[${D}];
  uniform float explosionDurations[${D}];
  uniform float explosionScales[${D}];
  uniform float explosionParticleLimits[${D}];
  uniform float explosionImpactModes[${D}];
  uniform float explosionPointScale;

  varying float vParticleKind;
  varying float vParticleAlpha;
  varying float vImpactMode;

  void main() {
    int slot = int(explosionSlot + 0.5);
    if (
      slot >= activeExplosionCount ||
      particleIndexInSlot >= explosionParticleLimits[slot]
    ) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 0.0;
      vParticleAlpha = 0.0;
      vParticleKind = particleKind;
      vImpactMode = 0.0;
      return;
    }

    float effectDuration = explosionDurations[slot];
    float effectScale = explosionScales[slot];
    float launchDelay = min(0.045, effectDuration * 0.06);
    float ageSeconds = explosionProgress[slot] * effectDuration;
    float flightTime = max(0.0, ageSeconds - launchDelay);
    float launchFade = smoothstep(launchDelay, launchDelay + min(0.035, effectDuration * 0.16), ageSeconds);
    float settleFade = 1.0 - smoothstep(effectDuration * 0.6, effectDuration, ageSeconds);
    vec3 worldDirection = normalize(
      explosionRightAxes[slot] * launchDirection.x +
      explosionUpAxes[slot] * launchDirection.y +
      explosionForwardAxes[slot] * launchDirection.z
    );
    vec3 offset = worldDirection * launchSpeed * effectScale * flightTime;
    offset.y -= 4.9 * flightTime * flightTime;
    float travelDistance = length(offset);
    if (travelDistance > maximumDistance && travelDistance > 0.0001) {
      offset *= maximumDistance / travelDistance;
    }
    vec3 worldPosition = explosionOrigins[slot] + offset;
    vec4 viewPosition = modelViewMatrix * vec4(worldPosition, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float resolvedKind = particleKind;
    if (explosionImpactModes[slot] > 0.5) {
      float impactPattern = mod(particleIndexInSlot, 4.0);
      resolvedKind = impactPattern < 2.0 ? 2.0 : impactPattern < 3.0 ? 1.0 : 0.0;
    }
    gl_PointSize = clamp(
      particleSize * sqrt(max(effectScale, 0.16)) * explosionPointScale / max(-viewPosition.z, 0.35),
      1.0,
      resolvedKind > 1.5 ? 7.0 : 13.0
    );
    vParticleKind = resolvedKind;
    vParticleAlpha = launchFade * settleFade;
    vImpactMode = explosionImpactModes[slot];
  }
`,Rt=`
  varying float vParticleKind;
  varying float vParticleAlpha;
  varying float vImpactMode;

  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    if (radius > 0.5 || vParticleAlpha <= 0.001) {
      discard;
    }

    float softEdge = 1.0 - smoothstep(0.22, 0.5, radius);
    vec3 color;
    float alpha;
    if (vParticleKind < 0.5) {
      color = vec3(0.31, 0.265, 0.20);
      alpha = softEdge * vParticleAlpha * 0.42;
    } else if (vParticleKind < 1.5) {
      color = vec3(0.12, 0.105, 0.085);
      alpha = (1.0 - smoothstep(0.36, 0.5, radius)) * vParticleAlpha * 0.82;
    } else {
      float core = 1.0 - smoothstep(0.0, 0.34, radius);
      color = mix(vec3(1.45, 0.28, 0.025), vec3(4.8, 2.1, 0.38), core);
      alpha = softEdge * vParticleAlpha;
    }
    if (vImpactMode > 2.5) {
      float glassCore = 1.0 - smoothstep(0.0, 0.34, radius);
      color = vParticleKind > 1.5
        ? mix(vec3(0.08, 0.42, 0.72), vec3(0.56, 1.25, 1.65), glassCore)
        : mix(vec3(0.025, 0.16, 0.34), vec3(0.12, 0.58, 0.92), glassCore);
    } else if (vImpactMode > 1.5) {
      float bloodCore = 1.0 - smoothstep(0.0, 0.34, radius);
      color = vParticleKind > 1.5
        ? mix(vec3(0.34, 0.012, 0.026), vec3(1.45, 0.035, 0.075), bloodCore)
        : mix(vec3(0.17, 0.006, 0.014), vec3(0.48, 0.018, 0.038), bloodCore);
    }
    gl_FragColor = vec4(color, alpha);
  }
`;function ce(){return Array.from({length:D},()=>new M)}function kt(){let e=2447445413;return()=>(e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),((e^=e>>>16)>>>0)/4294967296)}class qt{constructor(i,t){const o=kt(),a=new Float32Array(W*3),s=new Float32Array(W),n=new Float32Array(W*3),p=new Float32Array(W),l=new Float32Array(W),r=new Float32Array(W),u=new Float32Array(W),d=new Float32Array(W);this.sectorIndices=new Uint16Array(W);for(let U=0;U<D;U+=1)for(let A=0;A<L;A+=1){const b=U*L+A,k=o()*Math.PI*2,T=.08+o()*Math.PI*.42,Q=Math.cos(T);n[b*3]=Math.cos(k)*Q,n[b*3+1]=Math.sin(T),n[b*3+2]=Math.sin(k)*Q,s[b]=U,d[b]=A;const K=o(),c=K>.78?2:K>.46?1:0;r[b]=c,p[b]=c===2?5.4+o()*3.8:c===1?3.2+o()*3.6:2.1+o()*2.8,l[b]=c===2?.035+o()*.035:c===1?.055+o()*.055:.1+o()*.12,u[b]=4;const x=Math.min(47,Math.floor(k/(Math.PI*2)*48)),N=Math.min(3,Math.floor(T/(Math.PI*.5)*4));this.sectorIndices[b]=x*4+N}const m=new oe;m.setAttribute("position",new X(a,3)),m.setAttribute("explosionSlot",new X(s,1)),m.setAttribute("launchDirection",new X(n,3)),m.setAttribute("launchSpeed",new X(p,1)),m.setAttribute("particleSize",new X(l,1)),m.setAttribute("particleKind",new X(r,1)),m.setAttribute("particleIndexInSlot",new X(d,1));const P=new X(u,1);P.setUsage(ot),m.setAttribute("maximumDistance",P);const g=ce(),S=ce(),y=ce(),w=ce(),h=new Float32Array(D),f=new Float32Array(D).fill(Te),O=new Float32Array(D).fill(1),G=new Float32Array(D).fill(L),I=new Float32Array(D),H=new it({vertexShader:Nt,fragmentShader:Rt,uniforms:{activeExplosionCount:{value:0},explosionOrigins:{value:g},explosionRightAxes:{value:S},explosionUpAxes:{value:y},explosionForwardAxes:{value:w},explosionProgress:{value:h},explosionDurations:{value:f},explosionScales:{value:O},explosionParticleLimits:{value:G},explosionImpactModes:{value:I},explosionPointScale:{value:t.domElement.height*.5}},transparent:!0,depthTest:!0,depthWrite:!1,blending:st,toneMapped:!1});this.renderer=t,this.geometry=m,this.material=H,this.points=new at(m,H),this.points.frustumCulled=!1,this.points.renderOrder=3,this.points.visible=!1,this.points.userData.noShadow=!0,this.origins=g,this.rightAxes=S,this.upAxes=y,this.forwardAxes=w,this.progress=h,this.durations=f,this.scales=O,this.particleLimits=G,this.impactModes=I,this.maximumDistanceAttribute=P,this.slotGrids=Array(D).fill(null),i.add(this.points)}setWaves(i=[]){const t=Math.max(0,i.length-D),o=Math.min(D,i.length-t);let a=!1;for(let s=0;s<D;s+=1){const n=s<o?i[t+s]:null;if(!n){this.progress[s]=1,this.durations[s]=Te,this.scales[s]=1,this.particleLimits[s]=0,this.impactModes[s]=0,this.slotGrids[s]=null;continue}if(this.origins[s].copy(n.origin),this.rightAxes[s].set(n.sectorGrid.basis.right.x,n.sectorGrid.basis.right.y,n.sectorGrid.basis.right.z),this.upAxes[s].set(n.sectorGrid.basis.up.x,n.sectorGrid.basis.up.y,n.sectorGrid.basis.up.z),this.forwardAxes[s].set(n.sectorGrid.basis.forward.x,n.sectorGrid.basis.forward.y,n.sectorGrid.basis.forward.z),this.progress[s]=re.clamp(n.elapsed/n.duration,0,1),this.durations[s]=n.duration,this.scales[s]=n.debrisScale??1,this.particleLimits[s]=Math.min(L,n.debrisParticleCount??L),this.impactModes[s]=Number(n.debrisImpactMode)||0,this.slotGrids[s]!==n.sectorGrid){const p=s*L;for(let l=0;l<L;l+=1){const r=p+l;this.maximumDistanceAttribute.array[r]=n.sectorGrid.maxDistances[this.sectorIndices[r]]}this.slotGrids[s]=n.sectorGrid,a=!0}}this.material.uniforms.activeExplosionCount.value=o,this.material.uniforms.explosionPointScale.value=this.renderer.domElement.height*.5,this.points.visible=o>0,a&&(this.maximumDistanceAttribute.needsUpdate=!0)}getAudit(){return{activeWaves:this.material.uniforms.activeExplosionCount.value,drawCalls:1,particlesPerWave:L,maximumWaves:D,physicsBodies:0}}}const Ft=new M(0,0,1),ue=new M,fe=new Be,Ee=new Be,Ie=new nt,Ne=new M,R=new M,we=new M,Re=new M,F=new M,ye=new M,ke=new M,Fe=new M,se=new M,q=new M;function zt(e,{sourceNormal:i,minimumNormalDot:t,projectorPoint:o,width:a,height:s,rotation:n,reprojectAcrossSurfaces:p,sourceUp:l}){const r=e.getAttribute("position"),u=e.getAttribute("normal"),d=e.getAttribute("uv");if(!r||!u||!d)return e.dispose(),null;const m=[],P=[],g=[];for(let y=0;y<r.count;y+=3)if(R.set(u.getX(y)+u.getX(y+1)+u.getX(y+2),u.getY(y)+u.getY(y+1)+u.getY(y+2),u.getZ(y)+u.getZ(y+1)+u.getZ(y+2)).normalize(),!(R.dot(i)<t)){if(p){we.set(r.getX(y),r.getY(y),r.getZ(y)),q.copy(o).sub(we);const w=q.dot(R);if(w<-.015)continue;F.copy(i).addScaledVector(R,-i.dot(R)),F.lengthSq()<1e-6&&F.copy(l).addScaledVector(R,-l.dot(R)),F.lengthSq()<1e-6&&F.set(0,1,0).addScaledVector(R,-R.y),F.normalize(),ye.crossVectors(F,R).normalize();const h=Math.cos(n),f=Math.sin(n);Fe.copy(ye).multiplyScalar(h).addScaledVector(F,f),ke.copy(F).multiplyScalar(h).addScaledVector(ye,-f),se.copy(o),q.copy(se).sub(we),se.addScaledVector(R,-q.dot(R)),se.addScaledVector(F,-Math.abs(w))}for(let w=y;w<y+3;w+=1)m.push(r.getX(w),r.getY(w),r.getZ(w)),P.push(u.getX(w),u.getY(w),u.getZ(w)),p?(q.set(r.getX(w),r.getY(w),r.getZ(w)).sub(se),g.push(.5+q.dot(Fe)/a,.5+q.dot(ke)/s)):g.push(d.getX(w),d.getY(w))}if(e.dispose(),m.length===0)return null;const S=new oe;return S.setAttribute("position",new Se(m,3)),S.setAttribute("normal",new Se(P,3)),S.setAttribute("uv",new Se(g,2)),S.computeBoundingBox(),S.computeBoundingSphere(),S}function Qt({targetMeshes:e,point:i,normal:t,width:o,height:a=o,depth:s=.16,rotation:n=0,minimumNormalDot:p=.86,reprojectAcrossSurfaces:l=!1}){ue.copy(t).normalize(),fe.setFromUnitVectors(Ft,ue),Re.set(0,1,0).applyQuaternion(fe).normalize(),n!==0&&(Ee.setFromAxisAngle(ue,n),fe.premultiply(Ee)),Ie.setFromQuaternion(fe,"XYZ"),Ne.set(o,a,s);const r=[];if(e.forEach(d=>{var P,g;if(!(d!=null&&d.isMesh)||!((g=(P=d.geometry)==null?void 0:P.attributes)!=null&&g.position))return;d.updateWorldMatrix(!0,!1);const m=zt(new rt(d,i,Ie,Ne),{sourceNormal:ue,minimumNormalDot:p,projectorPoint:i,width:o,height:a,rotation:n,reprojectAcrossSurfaces:l,sourceUp:Re});m&&r.push(m)}),r.length===0)return null;if(r.length===1)return r[0];const u=_e(r,!1);return r.forEach(d=>d.dispose()),u}function Jt(e){const i=e.filter(t=>{var o;return((o=t==null?void 0:t.getAttribute("position"))==null?void 0:o.count)>0});return i.length===0?new oe:i.length===1?i[0].clone():_e(i,!1)??new oe}let ze=!1;function jt(){ze||(oe.prototype.computeBoundsTree=mt,oe.prototype.disposeBoundsTree=xt,lt.prototype.raycast=vt,ze=!0)}function eo(e,i="geometry"){var t;if(!e||e.boundsTree||!((t=e.attributes)!=null&&t.position)||typeof e.computeBoundsTree!="function")return e;try{e.computeBoundsTree({strategy:gt,maxLeafSize:8}),e.userData.bvhReady=!0,e.userData.bvhLabel=i}catch(o){e.userData.bvhReady=!1,e.userData.bvhError=(o==null?void 0:o.message)??String(o)}return e}function Ge(e){return e!=null&&e.material?Array.isArray(e.material)?e.material:[e.material]:[]}function Ue(e){return Ge(e).some(i=>(i==null?void 0:i.transparent)&&(i.opacity??1)<.86)}function We(e){return Ge(e).some(i=>i==null?void 0:i.isMeshBasicMaterial)}function to({renderer:e,scene:i,profile:t,quality:o,enabled:a,sunDirection:s,getAnchorPosition:n,forcedByQuery:p,disabledByQuery:l}){let r=t,u=o,d=a,m=p,P=l,g=!0,S=1;const y=new M,w=new M,h={frame:0,lastX:Number.NaN,lastZ:Number.NaN,lastSunX:Number.NaN,lastSunY:Number.NaN,lastSunZ:Number.NaN,updates:0};let f=null;function O(c){if(f=c,!d||!f)return;f.shadow.mapSize.set(r.mapSize,r.mapSize),f.shadow.bias=r.bias*S,f.shadow.normalBias=r.normalBias*S,f.shadow.radius=r.mapType==="pcf-soft"?1.25:0;const x=f.shadow.camera;x.left=-r.radius,x.right=r.radius,x.top=r.radius,x.bottom=-r.radius,x.near=r.near,x.far=r.far,x.updateProjectionMatrix(),f.target.position.set(0,0,0),f.position.copy(s).multiplyScalar(r.lightDistance),f.target.updateMatrixWorld(),f.updateMatrixWorld(),e.shadowMap.needsUpdate=!0}function G(c){if(!d||r.mapSize<=0||r.radius<=0)return w.copy(c);const x=r.radius*2/r.mapSize;return w.set(Math.round(c.x/x)*x,0,Math.round(c.z/x)*x),w}function I(c=0,x=!1){if(!d||!g||!f||(h.frame+=1,!x&&r.updateInterval>1&&h.frame%r.updateInterval!==0))return;const N=n==null?void 0:n();if(!N)return;y.set(N.x,0,N.z);const E=G(y);(x||Math.abs(E.x-h.lastX)>=.001||Math.abs(E.z-h.lastZ)>=.001||Math.abs(s.x-h.lastSunX)>=1e-5||Math.abs(s.y-h.lastSunY)>=1e-5||Math.abs(s.z-h.lastSunZ)>=1e-5)&&(f.target.position.copy(E),f.position.copy(E).addScaledVector(s,r.lightDistance),f.target.updateMatrixWorld(),f.updateMatrixWorld(),h.lastX=E.x,h.lastZ=E.z,h.lastSunX=s.x,h.lastSunY=s.y,h.lastSunZ=s.z),e.shadowMap.needsUpdate=!0,h.updates+=1}function H({active:c=!0,biasScale:x=1}={}){const N=!!c,E=re.clamp(Number(x)||1,.75,2.5),J=N!==g||Math.abs(E-S)>.001;g=N,S=E,f&&(f.castShadow=d&&g,d&&(f.shadow.bias=r.bias*S,f.shadow.normalBias=r.normalBias*S),J&&(e.shadowMap.needsUpdate=d&&g))}function U(c){return!d||c.userData.noShadowCaster||c.userData.noShadow?!1:c.userData.forceShadowCaster?!0:!(!(c.isMesh||c.isSkinnedMesh||c.isInstancedMesh)||Ue(c)||We(c))}function A(c){return!d||c.userData.noShadowReceiver||c.userData.noShadow?!1:c.userData.forceShadowReceiver?!0:!(c.isMesh||c.isSkinnedMesh||c.isInstancedMesh)||c.isInstancedMesh&&c.count>180?!1:!Ue(c)&&!We(c)}function b(c,x={}){(c!=null&&c.isMesh||c!=null&&c.isSkinnedMesh||c!=null&&c.isInstancedMesh)&&(c.castShadow=x.castShadow??U(c),c.receiveShadow=x.receiveShadow??A(c))}function k(){i.traverse(c=>{"castShadow"in c&&(c.castShadow=!1),"receiveShadow"in c&&(c.receiveShadow=!1)}),e.shadowMap.enabled=!1,e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!1,f&&(f.castShadow=!1)}function T(){i.traverse(c=>b(c)),d||k()}function Q({profile:c,quality:x,enabled:N,forcedByQuery:E=!1,disabledByQuery:J=!1}){var j;if(r=c,u=x,d=!!N,m=E,P=J,h.frame=0,h.lastX=Number.NaN,h.lastZ=Number.NaN,h.lastSunX=Number.NaN,h.lastSunY=Number.NaN,h.lastSunZ=Number.NaN,(j=f==null?void 0:f.shadow)!=null&&j.map&&(f.shadow.map.dispose(),f.shadow.map=null),e.shadowMap.enabled=d,e.shadowMap.autoUpdate=!1,e.shadowMap.type=r.mapType==="pcf-soft"?ct:ut,!d){k();return}f&&(f.castShadow=g,O(f)),T(),e.shadowMap.needsUpdate=!0}function K(c){let x=0,N=0,E=0,J=0;const j=new Map;return i.traverse(C=>{var ee,Pe,Me;if(C.isMesh||C.isSkinnedMesh||C.isInstancedMesh){if(C.castShadow){x+=1,C.isInstancedMesh&&(E+=1);const Xe=Array.isArray(C.material)?C.material.map(me=>(me==null?void 0:me.type)??"none").join("|"):((ee=C.material)==null?void 0:ee.type)??"none",De=[C.isSkinnedMesh?"skinned":C.isInstancedMesh?"instanced":"mesh",C.name||"unnamed",((Pe=C.geometry)==null?void 0:Pe.type)||"unknown-geometry",((Me=C.parent)==null?void 0:Me.name)||"root",Xe].join(" / ");j.set(De,(j.get(De)??0)+1)}C.receiveShadow&&(N+=1,C.isInstancedMesh&&(J+=1))}}),{enabled:d,runtimeEnabled:e.shadowMap.enabled,quality:u,forcedByQuery:m,disabledByQuery:P,mapType:r.mapType,mapSize:r.mapSize,radius:r.radius,near:r.near,far:r.far,updateInterval:r.updateInterval,autoUpdate:e.shadowMap.autoUpdate,needsUpdate:e.shadowMap.needsUpdate,updateCount:h.updates,solarShadowsActive:g,solarBiasScale:S,casters:x,receivers:N,shadowRenderableObjects:x,instancedCasters:E,instancedReceivers:J,topCasterGroups:Array.from(j.entries()).sort((C,ee)=>ee[1]-C[1]).slice(0,16).map(([C,ee])=>({key:C,count:ee})),sunPosition:f?c(f.position):null,sunTarget:f?c(f.target.position):null}}return{configure:O,update:I,applyPolicy:b,applyScenePolicy:T,disableSceneShadows:k,setProfile:Q,setSolarState:H,getAudit:K}}function oo(e){return e&&(e.userData??(e.userData={}),e.userData.sharedResource=!0),e}const de=1024;function Le(e){let i=e>>>0;return()=>{i+=1831565813;let t=i;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function B(){const e=document.createElement("canvas");return e.width=de,e.height=de,{canvas:e,context:e.getContext("2d"),size:de}}function $(e,i,t,o=!1){const a=e.createLinearGradient(0,0,i,o?0:i);t.forEach(([s,n])=>a.addColorStop(s,n)),e.fillStyle=a,e.fillRect(0,0,i,i)}function Y(e,i,t,o,a,s=1){for(let n=0;n<o;n+=1){const p=t[Math.floor(a()*t.length)],l=(.035+a()*.075)*s,r=1+a()*5;e.fillStyle=`rgba(${p[0]}, ${p[1]}, ${p[2]}, ${l})`,e.beginPath(),e.ellipse(a()*i,a()*i,r,r*(.45+a()*1.2),a()*Math.PI,0,Math.PI*2),e.fill()}}function _(e,i={x:1,y:1}){const t=new ft(e);return t.wrapS=Ae,t.wrapT=Ae,t.repeat.set(i.x,i.y),t.minFilter=dt,t.magFilter=pt,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=ht,t}function He(e,i,t,{base:o="#775732",dark:a="#3e2a18",light:s="#b1844c",plankCount:n=7}={}){$(e,i,[[0,s],[.34,o],[1,a]]);const p=i/n;for(let l=0;l<=n;l+=1){const r=l*p+(t()-.5)*8;e.strokeStyle="rgba(38, 24, 13, 0.52)",e.lineWidth=5+t()*4,e.beginPath(),e.moveTo(r,0),e.bezierCurveTo(r+9,i*.32,r-10,i*.68,r+5,i),e.stroke(),e.strokeStyle="rgba(226, 170, 90, 0.18)",e.lineWidth=1.5,e.beginPath(),e.moveTo(r+7,0),e.lineTo(r+2,i),e.stroke()}for(let l=0;l<150;l+=1){const r=t()*i,u=t()*i,d=80+t()*260;e.strokeStyle=`rgba(42, 25, 12, ${.07+t()*.12})`,e.lineWidth=1+t()*2.4,e.beginPath(),e.moveTo(r,u),e.bezierCurveTo(r+d*.28,u-18,r+d*.72,u+24,r+d,u+t()*18),e.stroke()}Y(e,i,[[95,61,30],[185,125,65],[48,31,16]],760,t,.72)}function Ut(e){const{canvas:i,context:t,size:o}=B();$(t,o,[[0,"#3aa641"],[.42,"#32963a"],[1,"#2d8834"]]);for(let a=0;a<152;a+=1){const s=a>=92,n=(s?16:34)+e()*(s?84:132),p=(s?10:18)+e()*(s?48:84);t.fillStyle=s?`rgba(108, 116, 57, ${.035+e()*.05})`:e()>.36?`rgba(63, 174, 70, ${.075+e()*.075})`:`rgba(33, 117, 43, ${.065+e()*.07})`,t.beginPath(),t.ellipse(e()*o,e()*o,n,p,e()*Math.PI,0,Math.PI*2),t.fill()}for(let a=0;a<420;a+=1){const s=e()*o,n=e()*o,p=18+e()*54,l=-.5+e();t.strokeStyle=e()>.28?`rgba(80, 179, 75, ${.06+e()*.075})`:`rgba(35, 118, 42, ${.055+e()*.065})`,t.lineWidth=2+e()*2.4,t.beginPath(),t.moveTo(s,n),t.quadraticCurveTo(s+Math.cos(l)*p*.45,n+Math.sin(l)*p*.45,s+Math.cos(l)*p,n+Math.sin(l)*p),t.stroke()}return Y(t,o,[[65,161,68],[24,93,31],[172,161,86]],1120,e,.72),_(i)}function Wt(e){const{canvas:i,context:t,size:o}=B();return He(t,o,e),_(i)}function Lt(e){const{canvas:i,context:t,size:o}=B();$(t,o,[[0,"#5c4527"],[.42,"#7a5a31"],[1,"#3d2c1b"]],!0);for(let a=-24;a<o+24;a+=34+e()*22){const s=7+e()*18;t.strokeStyle=`rgba(39, 27, 15, ${.18+e()*.18})`,t.lineWidth=s,t.beginPath(),t.moveTo(a,-20),t.bezierCurveTo(a+24-e()*48,o*.28,a+28-e()*56,o*.66,a+12-e()*24,o+20),t.stroke()}return Y(t,o,[[104,72,38],[57,37,19],[178,132,70]],980,e,.9),_(i,{x:2.2,y:1})}function Bt(e){const{canvas:i,context:t,size:o}=B();$(t,o,[[0,"#4a4536"],[.5,"#2f3029"],[1,"#1f211d"]]);for(let a=0;a<o;a+=84)t.fillStyle=a%168===0?"rgba(72, 69, 56, 0.52)":"rgba(35, 35, 30, 0.48)",t.fillRect(0,a,o,48+e()*10),t.strokeStyle="rgba(11, 13, 12, 0.42)",t.lineWidth=4,t.beginPath(),t.moveTo(0,a+50),t.lineTo(o,a+43+e()*12),t.stroke();return Y(t,o,[[100,96,75],[34,36,31],[9,11,10]],820,e,.8),_(i)}function _t(e){const{canvas:i,context:t,size:o}=B();$(t,o,[[0,"#b4a36f"],[.5,"#8d8058"],[1,"#665b3d"]]);for(let a=0;a<o;a+=92)t.strokeStyle="rgba(72, 62, 38, 0.34)",t.lineWidth=4,t.beginPath(),t.moveTo(0,a+44),t.bezierCurveTo(o*.3,a+34,o*.7,a+58,o,a+45),t.stroke();return Y(t,o,[[198,178,112],[94,80,50],[135,122,77]],1250,e),_(i)}function Gt(e){const{canvas:i,context:t,size:o}=B();$(t,o,[[0,"#a5a89d"],[.52,"#777a72"],[1,"#555951"]]);for(let a=0;a<38;a+=1){let s=e()*o,n=e()*o;t.strokeStyle=`rgba(36, 38, 35, ${.08+e()*.1})`,t.lineWidth=1+e()*2.5,t.beginPath(),t.moveTo(s,n);for(let p=0;p<4;p+=1)s+=(e()-.5)*90,n+=30+e()*90,t.lineTo(s,n);t.stroke()}return Y(t,o,[[190,193,183],[93,96,90],[51,54,50]],1450,e),_(i)}function Ht(e){const{canvas:i,context:t,size:o}=B();return He(t,o,e,{base:"#8b6332",dark:"#40250f",light:"#bd8747"}),t.strokeStyle="rgba(38, 22, 8, 0.72)",t.lineWidth=24,t.strokeRect(38,38,o-76,o-76),t.lineWidth=18,t.beginPath(),t.moveTo(74,74),t.lineTo(o-74,o-74),t.moveTo(o-74,74),t.lineTo(74,o-74),t.stroke(),_(i)}function Xt(e){const{canvas:i,context:t,size:o}=B();$(t,o,[[0,"#8f9182"],[.42,"#676a5e"],[1,"#3d4038"]]);for(let a=0;a<85;a+=1){const s=e()*o,n=e()*o;t.strokeStyle=`rgba(30, 32, 28, ${.08+e()*.13})`,t.lineWidth=2+e()*6,t.beginPath(),t.moveTo(s,n),t.lineTo(s+(e()-.5)*220,n+36+e()*190),t.stroke()}return Y(t,o,[[160,164,148],[82,86,76],[38,41,36]],1500,e),_(i)}function Vt(e){const{canvas:i,context:t,size:o}=B();$(t,o,[[0,"#59605a"],[.44,"#30342e"],[1,"#171a18"]]);for(let a=0;a<130;a+=1){const s=e()*o;t.strokeStyle=`rgba(205, 215, 200, ${.025+e()*.075})`,t.lineWidth=1+e()*2,t.beginPath(),t.moveTo(e()*120,s),t.lineTo(o-e()*120,s+(e()-.5)*28),t.stroke()}return Y(t,o,[[145,151,141],[49,53,48],[120,74,40]],940,e,.85),_(i)}function io({crateColor:e,concreteColor:i}){const t=new Map,o={wood:Wt,roof:Bt,bark:Lt,sandbag:_t,concrete:Gt,crate:Ht,rock:Xt,metal:Vt},a={wood:4269,roof:8719,bark:13069,sandbag:17419,concrete:21772,crate:26126,rock:30474,metal:34817},s=(l,r)=>l==="rock-cover"?"rock":l!=null&&l.includes("sandbag")?"sandbag":l!=null&&l.includes("roof")?"roof":l==="tree-trunk"?"bark":l!=null&&l.includes("mast")||l==="lamp-pole"||l==="radio-terminal"?"metal":l!=null&&l.includes("hut")||l!=null&&l.includes("watchtower")?"wood":r===e?"crate":r===i?"concrete":null,n=l=>{if(!t.has(l)){const r=o[l];t.set(l,r?r(Le(a[l])):null)}return t.get(l)};return{createFloorTexture:()=>Ut(Le(12648430)),createHdMaterial:({kind:l,color:r,roughness:u=.78,metalness:d=.02,size:m})=>{const P=s(l,r),g=P?n(P):null;if(!g)return new Ce({color:r,roughness:u,metalness:d});const S=g.clone(),y=Math.max(m.x??1,m.z??1,.5),w=Math.max(m.y??1,Math.min(m.x??1,m.z??1),.5);S.repeat.set(Math.max(1,y*.72),Math.max(1,w*.72)),S.needsUpdate=!0;const h={wood:[.86,.02,.035],bark:[.93,.01,.048],roof:[.94,.03,.026],sandbag:[.98,0,.045],concrete:[.96,0,.034],crate:[.86,.01,.036],rock:[.98,.01,.052],metal:[.58,.42,.012]}[P]??[u,d,.02];return new Ce({color:16777215,map:S,bumpMap:S,bumpScale:h[2],roughness:h[0],metalness:h[1]})},getAudit:()=>({cachedTextureKeys:Array.from(t.keys()).sort(),deterministic:!0,resolution:de})}}export{qt as E,Ct as H,Zt as a,bt as b,to as c,io as d,Qt as e,Jt as f,jt as i,oo as m,eo as p};

import{E as W,B as k,a as H}from"./vendor-postprocessing-dsoyjrRx.js";import{W as v,L,r as z,U as V,c as n,V as E,C as A,i as _,m as w,O as G,f as C,s as h,d as p,q as P,M as j,t as B}from"./vendor-three-D5ZNG6eF.js";const d=8,f=3,y=Math.pow(d,-f),b=1,Z=1,N=.1,$=.1,g=1,x=2,Q=150,q=165,X=.08,I=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Y=`
  varying vec2 vUv;

  uniform sampler2D sceneDepth;
  uniform vec2 texelSize;
  uniform float cameraNear;
  uniform float cameraFar;
  uniform mat4 projectionMatrixInverse;
  uniform mat4 cameraMatrixWorld;

  float linearDepth(const in float depth) {
    return (cameraNear * cameraFar) / max(
      cameraFar - depth * (cameraFar - cameraNear),
      0.00001
    );
  }

  vec3 worldPositionAt(const in vec2 uv, const in float depth) {
    vec4 clipPosition = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 viewPosition = projectionMatrixInverse * clipPosition;
    viewPosition /= max(abs(viewPosition.w), 0.00001);
    return (cameraMatrixWorld * viewPosition).xyz;
  }

  float fartherSilhouetteEdge(
    const in float centerLinearDepth,
    const in float sampledRawDepth
  ) {
    if (sampledRawDepth >= 0.99999) {
      return 1.0;
    }

    float sampledLinearDepth = linearDepth(sampledRawDepth);
    float edgeThreshold = max(0.08, centerLinearDepth * 0.006);
    return smoothstep(
      edgeThreshold,
      edgeThreshold * 2.5,
      sampledLinearDepth - centerLinearDepth
    );
  }

  void main() {
    float rawDepth = texture2D(sceneDepth, vUv).r;
    if (rawDepth >= 0.99999) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }

    vec3 worldPosition = worldPositionAt(vUv, rawDepth);
    float centerLinearDepth = linearDepth(rawDepth);
    vec2 edgeTexel = texelSize * 1.25;
    float silhouette = 0.0;
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv + vec2(edgeTexel.x, 0.0)).r
    ));
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv - vec2(edgeTexel.x, 0.0)).r
    ));
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv + vec2(0.0, edgeTexel.y)).r
    ));
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv - vec2(0.0, edgeTexel.y)).r
    ));
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv + edgeTexel).r
    ));
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv - edgeTexel).r
    ));
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv + vec2(edgeTexel.x, -edgeTexel.y)).r
    ));
    silhouette = max(silhouette, fartherSilhouetteEdge(
      centerLinearDepth,
      texture2D(sceneDepth, vUv + vec2(-edgeTexel.x, edgeTexel.y)).r
    ));

    float planarRadius = length(worldPosition.xz);
    float arenaMountain =
      step(planarRadius, ${Q.toFixed(1)}) *
      (1.0 - step(${X.toFixed(2)}, worldPosition.y));
    float horizonMountain = step(${q.toFixed(1)}, planarRadius);
    float isMountain = max(arenaMountain, horizonMountain);

    gl_FragColor = vec4(
      silhouette * (1.0 - isMountain),
      silhouette * isMountain,
      0.0,
      1.0
    );
  }
`,K=`
  varying vec2 vUv;

  uniform sampler2D inputTexture;
  uniform vec2 sourceUv;
  uniform float sourceDiameterUv;
  uniform float stepSize;
  uniform float rayLength;

  float mountainLengthFactor(const in vec2 uv) {
    float diameter = max(sourceDiameterUv, 0.0001);
    float halfFullZone = diameter * ${(g/2).toFixed(1)};
    float fadeDistance = diameter * ${x.toFixed(1)};
    return 1.0 - smoothstep(
      halfFullZone,
      halfFullZone + fadeDistance,
      abs(uv.x - sourceUv.x)
    );
  }

  vec2 sampleMask(const in vec2 uv) {
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      return vec2(0.0);
    }
    return texture2D(inputTexture, uv).rg;
  }

  void main() {
    vec2 toSource = sourceUv - vUv;
    float distanceToSource = length(toSource);
    vec2 direction = distanceToSource > 0.00001
      ? toSource / distanceToSource
      : vec2(0.0);
    float mountainReach = mountainLengthFactor(vUv);
    vec2 strongest = vec2(0.0);

    for (int index = 0; index < ${d}; index += 1) {
      float tap = float(index);
      float generalDistance = stepSize * tap;
      float mountainDistance = generalDistance * mountainReach;
      vec2 generalMask = generalDistance <= distanceToSource
        ? sampleMask(vUv + direction * generalDistance)
        : vec2(0.0);
      vec2 mountainMask = mountainDistance <= distanceToSource
        ? sampleMask(vUv + direction * mountainDistance)
        : vec2(0.0);
      float normalizedDistance = generalDistance / max(rayLength, 0.00001);
      strongest.r = max(
        strongest.r,
        max(generalMask.r - normalizedDistance, 0.0)
      );
      strongest.g = max(
        strongest.g,
        max(mountainMask.g - normalizedDistance, 0.0)
      );
    }

    gl_FragColor = vec4(
      strongest,
      0.0,
      1.0
    );
  }
`,J=`
  uniform sampler2D depthMaskTexture;
  uniform sampler2D shaftsTexture;
  uniform vec2 sourceUv;
  uniform float sourceDiameterUv;
  uniform vec3 lightColor;
  uniform float intensity;
  uniform float sourceLightFactor;
  uniform float sourceFrameFactor;

  float mountainLengthFactor(const in vec2 uv) {
    float diameter = max(sourceDiameterUv, 0.0001);
    float halfFullZone = diameter * ${(g/2).toFixed(1)};
    float fadeDistance = diameter * ${x.toFixed(1)};
    return 1.0 - smoothstep(
      halfFullZone,
      halfFullZone + fadeDistance,
      abs(uv.x - sourceUv.x)
    );
  }

  float positiveShaft(
    const in float originalOcclusion,
    const in float blurredOcclusion
  ) {
    float rayOpacity = max(
      (blurredOcclusion - ${y.toFixed(8)}) /
        ${(1-y).toFixed(8)},
      0.0
    );
    float outsideContour = 1.0 - smoothstep(0.02, 0.2, originalOcclusion);
    return rayOpacity * outsideContour;
  }

  void mainImage(
    const in vec4 inputColor,
    const in vec2 uv,
    const in float depth,
    out vec4 outputColor
  ) {
    vec2 originalOcclusion = texture2D(depthMaskTexture, uv).rg;
    vec2 blurredOcclusion = texture2D(shaftsTexture, uv).rg;
    float generalShaft = positiveShaft(
      originalOcclusion.r,
      blurredOcclusion.r
    );
    float mountainShaft = positiveShaft(
      originalOcclusion.g,
      blurredOcclusion.g
    ) * mountainLengthFactor(uv);
    float shaft = clamp(generalShaft + mountainShaft, 0.0, 1.0);
    vec3 addedLight = lightColor * shaft * ${N.toFixed(1)} *
      intensity * sourceLightFactor * sourceFrameFactor;
    outputColor = vec4(inputColor.rgb + addedLight, inputColor.a);
  }
`;function R(c){const e=new j(new B(2,2),c);return e.frustumCulled=!1,e}function ee(c){return Math.min(c.x,1-c.x,c.y,1-c.y)}class oe extends W{constructor(e,{length:t=.16,resolutionScale:a=b}={}){const o={depthBuffer:!1,stencilBuffer:!1,type:V,format:z,minFilter:L,magFilter:L,generateMipmaps:!1},s=new v(1,1,o),i=new v(1,1,o),u=new v(1,1,o);s.texture.name="CelestialLightShaftsEffect.DepthMask",i.texture.name="CelestialLightShaftsEffect.RadialA",u.texture.name="CelestialLightShaftsEffect.RadialB";const r=new Map([["depthMaskTexture",new n(s.texture)],["shaftsTexture",new n(i.texture)],["sourceUv",new n(new E(.5,.5))],["sourceDiameterUv",new n(.08)],["lightColor",new n(new A(16775390))],["intensity",new n(0)],["sourceLightFactor",new n(0)],["sourceFrameFactor",new n(0)]]);super("CelestialLightShaftsEffect",J,{attributes:H.DEPTH,blendFunction:k.NORMAL,uniforms:r});const l={sceneDepth:{value:null},texelSize:{value:new E(1,1)},cameraNear:{value:e.near},cameraFar:{value:e.far},projectionMatrixInverse:{value:e.projectionMatrixInverse},cameraMatrixWorld:{value:e.matrixWorld}},m=new _({uniforms:l,vertexShader:I,fragmentShader:Y,depthTest:!1,depthWrite:!1,blending:w,toneMapped:!1}),S={inputTexture:{value:s.texture},sourceUv:{value:r.get("sourceUv").value},sourceDiameterUv:{value:r.get("sourceDiameterUv").value},stepSize:{value:t/d},rayLength:{value:t}},T=new _({uniforms:S,vertexShader:I,fragmentShader:K,depthTest:!1,depthWrite:!1,blending:w,toneMapped:!1}),O=new G(-1,1,1,-1,0,1),D=new C,M=new C,F=R(m),U=R(T);D.add(F),M.add(U),this.cameraRef=e,this.depthMaskTarget=s,this.blurTargetA=i,this.blurTargetB=u,this.compositeUniforms=r,this.depthMaskUniforms=l,this.blurUniforms=S,this.depthMaskMaterial=m,this.blurMaterial=T,this.depthMaskScene=D,this.blurScene=M,this.renderCamera=O,this.depthMaskQuad=F,this.blurQuad=U,this.resolutionScale=h.clamp(a,.25,1),this.renderWidth=1,this.renderHeight=1,this.rayLength=t,this.requestedIntensity=0,this.sourceLightFactor=0,this.sourceWorldPosition=new p,this.sourceWorldDirection=new p(0,1,0),this.sourceProjectionPosition=new p,this.sourceViewPosition=new p,this.sourceNdc=new p,this.sourceWorldDiameter=15,this.hasWorldPosition=!1,this.sourceFrameFactor=0,this.previousViewport=new P,this.previousScissor=new P,this.previousClearColor=new A}update(e,t){const a=(t==null?void 0:t.depthTexture)??null;this.depthMaskUniforms.sceneDepth.value=a,this.updateProjectedSource();const o=e.getRenderTarget();e.getViewport(this.previousViewport),e.getScissor(this.previousScissor);const s=e.getScissorTest();e.getClearColor(this.previousClearColor);const i=e.getClearAlpha();if(e.setViewport(0,0,this.renderWidth,this.renderHeight),e.setScissorTest(!1),e.setClearColor(0,0),!!(a&&this.requestedIntensity>1e-4&&this.sourceLightFactor>1e-4&&this.sourceFrameFactor>1e-4)){e.setRenderTarget(this.depthMaskTarget),e.clear(!0,!1,!1),e.render(this.depthMaskScene,this.renderCamera);let r=this.depthMaskTarget.texture;for(let l=0;l<f;l+=1){const m=l%2===0?this.blurTargetA:this.blurTargetB;this.blurUniforms.inputTexture.value=r,this.blurUniforms.stepSize.value=this.rayLength/Math.pow(d,l+1),this.blurUniforms.rayLength.value=this.rayLength,e.setRenderTarget(m),e.clear(!0,!1,!1),e.render(this.blurScene,this.renderCamera),r=m.texture}}else e.setRenderTarget(this.blurTargetA),e.clear(!0,!1,!1);e.setRenderTarget(o),e.setViewport(this.previousViewport),e.setScissor(this.previousScissor),e.setScissorTest(s),e.setClearColor(this.previousClearColor,i)}updateProjectedSource(){const e=this.cameraRef;if(e.updateMatrixWorld(),this.hasWorldPosition?this.sourceViewPosition.copy(this.sourceWorldPosition).applyMatrix4(e.matrixWorldInverse):this.sourceViewPosition.copy(this.sourceWorldDirection).transformDirection(e.matrixWorldInverse).multiplyScalar(1e3),this.sourceViewPosition.z>=-.001){this.sourceFrameFactor=0,this.compositeUniforms.get("sourceFrameFactor").value=0;return}this.hasWorldPosition?this.sourceProjectionPosition.copy(this.sourceWorldPosition):this.sourceProjectionPosition.copy(e.position).addScaledVector(this.sourceWorldDirection,1e3),this.sourceNdc.copy(this.sourceProjectionPosition).project(e);const t=this.compositeUniforms.get("sourceUv").value;t.set(this.sourceNdc.x*.5+.5,this.sourceNdc.y*.5+.5);const a=ee(t);this.sourceFrameFactor=h.smoothstep(a,-2,$),this.compositeUniforms.get("sourceFrameFactor").value=this.sourceFrameFactor;const o=Math.max(this.sourceViewPosition.length(),.001),s=e.projectionMatrix.elements[0],i=h.clamp(this.sourceWorldDiameter/o*s*.5,.004,.4);this.compositeUniforms.get("sourceDiameterUv").value=i,this.blurUniforms.sourceDiameterUv.value=i,this.depthMaskUniforms.cameraNear.value=e.near,this.depthMaskUniforms.cameraFar.value=e.far}setSize(e,t){this.renderWidth=Math.max(1,Math.round(e*this.resolutionScale)),this.renderHeight=Math.max(1,Math.round(t*this.resolutionScale)),this.depthMaskTarget.setSize(this.renderWidth,this.renderHeight),this.blurTargetA.setSize(this.renderWidth,this.renderHeight),this.blurTargetB.setSize(this.renderWidth,this.renderHeight),this.depthMaskUniforms.texelSize.value.set(1/this.renderWidth,1/this.renderHeight)}setState({enabled:e=!1,intensity:t=0,lightFactor:a=0,direction:o,position:s,diameter:i,color:u,length:r}={}){this.requestedIntensity=e?h.clamp(Number(t)||0,0,1):0,this.compositeUniforms.get("intensity").value=this.requestedIntensity,this.sourceLightFactor=e?h.clamp(Number(a)||0,0,1):0,this.compositeUniforms.get("sourceLightFactor").value=this.sourceLightFactor,s?(this.sourceWorldPosition.set(s.x,s.y,s.z),this.hasWorldPosition=!0):o&&(this.sourceWorldDirection.set(o.x,o.y,o.z).normalize(),this.hasWorldPosition=!1),Number.isFinite(i)&&(this.sourceWorldDiameter=Math.max(.01,i)),u!=null&&this.compositeUniforms.get("lightColor").value.set(u),Number.isFinite(r)&&(this.rayLength=h.clamp(r,.02,.24))}getAudit(){const e=this.compositeUniforms.get("sourceUv").value;return{screenFactor:this.sourceFrameFactor,lightFactor:this.sourceLightFactor,maxOpacity:N,mask:"depth-silhouette-contour",sourceUv:{x:e.x,y:e.y},sourceDiameterUv:this.compositeUniforms.get("sourceDiameterUv").value,mountainFullLengthZoneDiameters:g,mountainFadeZoneDiametersPerSide:x}}dispose(){this.depthMaskTarget.dispose(),this.blurTargetA.dispose(),this.blurTargetB.dispose(),this.depthMaskQuad.geometry.dispose(),this.blurQuad.geometry.dispose(),this.depthMaskMaterial.dispose(),this.blurMaterial.dispose(),super.dispose()}}const ie=d,re=f,ae=Math.pow(d,f),ne=b,ce=Z;export{oe as C,ne as a,ce as b,ae as c,re as d,ie as e};

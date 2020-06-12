Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZTQyOGE3NC05ZGVjLTQ3MTQtYTllMS0xMTRhZDIxNGI1MGIiLCJpZCI6Mjg0NjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTExMzQ1NTd9.K4jMRQb_0OxFlVj-RSyuKKVuRnhV-NnX6yNsbLzjVy0";
// 创建地球视图
const viewer = new Cesium.Viewer("cesiumContainer", {
  // 添加地形
  //   terrainProvider: Cesium.createWorldTerrain(),
  geocoder: false,
  homeButton: false,
  sceneModePicker: false,
  baseLayerPicker: false,
  navigationHelpButton: false,
  animation: false,
  timeline: false,
  fullscreenButton: false,
  vrButton: false,
  // 获取用于请求图块的URL模板
  imageryProvider: new Cesium.UrlTemplateImageryProvider({
    url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali",
  }),
});
// 隐藏页面控件
viewer._cesiumWidget._creditContainer.style.display = "none";
// 创建场景对象
const scene = viewer.scene;
// 添加贴图
const prds = new Cesium.Cesium3DTileset({
  url: "http://cdn.lesuidao.cn/prds3/tileset.json",
  maximumScreenSpaceError: 2, //调整3D模型的清晰度
  // color: {
  //   conditions: [
  //     ["${height} >= 300", "rgba(45, 0, 75, 0.5)"],
  //     ["${height} >= 200", "rgb(102, 71, 151)"],
  //     ["${height} >= 100", "rgb(170, 162, 204)"],
  //     ["${height} >= 50", "rgb(224, 226, 238)"],
  //     ["${height} >= 25", "rgb(252, 230, 200)"],
  //     ["${height} >= 10", "rgb(248, 176, 87)"],
  //     ["${height} >= 5", "rgb(198, 106, 11)"],
  //     ["true", "rgb(127, 59, 8)"],
  //   ],
  // },
});
const heightOffset = 0;
prds.readyPromise
  .then((prds) => {
    viewer.scene.primitives.add(prds);
    const boundingSphere = prds.boundingSphere;
    const cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
    const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
    const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
    const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
    prds.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
  })
  .otherwise((error) => {console.log(error)});

const lj = new Cesium.Cesium3DTileset({
  url: "http://lesuidao.cn/Scene/Production_3.json",
  maximumScreenSpaceError: 2,     //细化程度的最大屏幕空间错误（提高清晰度）
});
lj.readyPromise
  .then((lj) => {
    viewer.scene.primitives.add(lj);
  })
  .otherwise((error) => {console.log(error)});

// 定位
// viewer.zoomTo(prds);

choosehotcity = () => {
  // 控制模块的显隐
  document.getElementById("hotcounty").style.display = "block";
  document.getElementById("sh").style.backgroundColor = "#16aad0";
  // 相机视图跳转时
  viewer.flyTo(prds, {
    duration: 3,
    // offset: new Cesium.HeadingPitchRange(0, 0, prds.boundingSphere.radius * 1800.0),
  });
};

choosehotregion = () => {
  document.getElementById("hotregion").style.display = "block";
  document.getElementById("pd").style.backgroundColor = "#16aad0";
  // 相机视图跳转
  viewer.flyTo(sh, {
    duration: 3,
    offset: new Cesium.HeadingPitchRange(0, 0, prds.boundingSphere.radius * 1800.0),
  });
};

choosehotarea = () => {
  document.getElementById("lj").style.backgroundColor = "#16aad0";
  // 相机视图跳转
  viewer.flyTo(lj)
};

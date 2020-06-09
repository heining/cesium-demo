Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZTQyOGE3NC05ZGVjLTQ3MTQtYTllMS0xMTRhZDIxNGI1MGIiLCJpZCI6Mjg0NjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTExMzQ1NTd9.K4jMRQb_0OxFlVj-RSyuKKVuRnhV-NnX6yNsbLzjVy0";
// 地球视图
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
});
// 隐藏页面控件
viewer._cesiumWidget._creditContainer.style.display = "none";
// 添加贴图
// const tileset = new Cesium.Cesium3DTileset({
//   url:
//     "https://lab.earthsdk.com/model/702aa950d03c11e99f7ddd77cbe22fea/tileset.json",
// });
// const pr = new Cesium.Cesium3DTileset({
// url: 'http://data.marsgis.cn/3dtiles/qx-simiao/tileset.json'
// })

// const prds = new Cesium.Cesium3DTileset({
//   url: "http://lesuidao.cn/Scene/Production_3.json",
//   maximumScreenSpaceError: 2,     //细化程度的最大屏幕空间错误（提高清晰度）
// });
// viewer.scene.primitives.add(prds);
// viewer.scene.primitives.add(tileset);

// 定位
// viewer.zoomTo(pr);

choosehotcity = () => {
  // 控制模块的显隐
  document.getElementById("hotcounty").style.display = "block";
  document.getElementById("sh").style.backgroundColor = "#16aad0";
  // 相机视图跳转时
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.19, 46.25, 5000.0),
    duration: 2,   //相机飞行的时间

  });
};

choosehotregion = () => {
  document.getElementById("hotregion").style.display = "block";
  document.getElementById("pd").style.backgroundColor = "#16aad0";
  // 相机视图跳转
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(122.19, 46.25, 5000.0)
  });
};

choosehotarea = () => {
  document.getElementById("lj").style.backgroundColor = "#16aad0";
  // 相机视图跳转
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.19, -46.25, 5000.0)
  });
};

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZTQyOGE3NC05ZGVjLTQ3MTQtYTllMS0xMTRhZDIxNGI1MGIiLCJpZCI6Mjg0NjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTExMzQ1NTd9.K4jMRQb_0OxFlVj-RSyuKKVuRnhV-NnX6yNsbLzjVy0";
// 地球视图
const viewer = new Cesium.Viewer("cesiumContainer", {
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
viewer._cesiumWidget._creditContainer.style.display="none";
// 添加贴图
const tileset = new Cesium.Cesium3DTileset({
  url:
    "https://lab.earthsdk.com/model/702aa950d03c11e99f7ddd77cbe22fea/tileset.json",
});
// const pr = new Cesium.Cesium3DTileset({
// url: 'http://cdn.lesuidao.cn/prds3/tileset.json'
// })
viewer.scene.primitives.add(tileset);
// viewer.scene.primitives.add(pr);
// 定位
// viewer.zoomTo(tileset);

choosehotcity = () => {
    // 控制模块的显隐
    document.getElementById('hotcounty').style.display = 'block';
    document.getElementById('sh').style.backgroundColor = '#16aad0';
}

choosehotregion = () => {
    document.getElementById('hotregion').style.display = 'block';
    document.getElementById('pd').style.backgroundColor = '#16aad0';
}

choosehotarea = () => {
    document.getElementById('lj').style.backgroundColor = '#16aad0';
}



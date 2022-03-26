//var map변수를 통하여 Leaflet 지도를 불러옴, setView에 있는 괄호 순서대로 위도, 경도, 줌 단계
var map = L.map('map').setView([37.5664700, 126.9779630], 17);
//var tileUrl 변수를 통하여, 타일레이어(지도 스타일)을 불러옴. https://cloud.maptiler.com/tiles/에서 가져옴.
var tileURL = 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=z7eh7X1yVcfsTvvVR6Bz'
L.tileLayer(tileURL).addTo(map);

//1. 실시간 위치 좌표를 뽑을 때, 
map.locate({enableHightAccuracy: true});
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('당신이 현재있는 위치입니다.');
    map.addLayer(marker);
});
 
//2. 좌표값이 지정되어 있을 때, Hello There을 띄운다.
const marker = L.marker([37.5664700, 126.9779630]);
marker.bindPopup('Hello there!');
map.addLayer(marker);